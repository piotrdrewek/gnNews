import { Button, Paper, Typography } from "@mui/material";
import { Article } from "../../services/http";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArticleIcon from "@mui/icons-material/Article";

const useStyles = makeStyles({
  Content: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#767676 !important",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  Info: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "flex-end !important",
    width: "100%",
    alignItems: "center",
  },
  Text: {
    textAlign: "start",
    fontWeight: "bold !important",
    textTransform: "none",
  },
  Button: {
    display: "flex !important",
    flexDirection: "column",
    color: "inherit !important",
    width: "100%",
    alignItems: "flex-start !important",
    justifyContent: "space-between !important",
  },
  Title: {
    display: "flex !important",
    flexDirection: "row",
  },
  Link: {
    color: "black !important",
    backgroundColor: "#3a3a3a !important",
  },
  Open: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Bottom: {
    width: "100%",
  },
});
interface Props {
  article: Article;
}

export default function Grid(article: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const publishedAt = new Date(article.article.publishedAt);

  return (
    <Paper
      className={classes.Content}
      style={{
        minWidth: "150px",
        width: "23%",
      }}
    >
      <Button
        className={classes.Button}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <div className={classes.Title}>
          <ArticleIcon />
          <Typography className={classes.Text}>
            {article.article.title}
          </Typography>
        </div>

        {article.article.urlToImage && (
          <img
            src={article.article.urlToImage}
            className="img-fluid"
            alt="..."
          ></img>
        )}
        <div className={classes.Bottom}>
          {open && (
            <div className={classes.Open}>
              {article.article.description && (
                <Typography style={{ textAlign: "start" }}>
                  {article.article.description}
                </Typography>
              )}
              <Typography style={{ fontSize: "0.8rem" }}>
                {article.article.author}
              </Typography>

              <Button
                className={classes.Link}
                href={article.article.url}
                target="_blank"
              >
                <Typography>Open article in new tab</Typography>
              </Button>
            </div>
          )}
          <div className={classes.Info}>
            <Typography style={{ fontSize: "0.8rem" }}>
              {article.article.source.name + ": "}
            </Typography>
            <Typography style={{ fontSize: "0.8rem" }}>
              {publishedAt.toLocaleString()}
            </Typography>
            {!open && <KeyboardArrowDownIcon />}
            {open && <KeyboardArrowUpIcon />}
          </div>
        </div>
      </Button>
    </Paper>
  );
}
