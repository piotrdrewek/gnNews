import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import getNews from "../../services/http";
import { Article } from "../../services/http";
import List from "./list";
import Grid from "./grid";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setCounter, resetCounter } from "../../redux/counterSlice";
import FlagIcon from "@mui/icons-material/Flag";

const useStyles = makeStyles({
  Content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1vh 1vh",
  },
  NoCountry: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

async function getNewsAsync(country: string) {
  const resposne = await getNews(country);
  return resposne;
}

export default function Content() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<Article[]>();
  const layout = useSelector((state: RootState) => state.layout.layout);
  const lang = useSelector((state: RootState) => state.lang.lang);

  useEffect(() => {
    dispatch(resetCounter());
    if (lang) {
      const resposne = getNewsAsync(lang);
      resposne.then((res) => setArticles(res));
    }
  }, [lang]);

  useEffect(() => {
    dispatch(setCounter(articles ? articles.length : 0));
  }, [articles]);

  return (
    <>
      {articles && lang && (
        <div className={classes.Content}>
          {layout === "list" &&
            articles?.map((article) => (
              <List key={article.title} article={article}></List>
            ))}
          {layout === "grid" &&
            articles?.map((article) => (
              <Grid key={article.title} article={article}></Grid>
            ))}
        </div>
      )}
      {(!articles || !lang) && (
        <div className={classes.NoCountry}>
          <Typography style={{ color: "white" }}>
            Please choose the country: <FlagIcon />
          </Typography>
        </div>
      )}
    </>
  );
}
