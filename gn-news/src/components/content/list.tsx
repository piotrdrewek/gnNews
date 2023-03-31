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
    backgroundColor: "#e2e0e0 !important",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  Info: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end !important",
    width: "100%",
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
    backgroundColor: "#767676 !important",
  },
  Title: {
    display: "flex",
    flexDirection: "row",
  },
  Link: {
    color: "black !important",
    backgroundColor: "#3a3a3a !important",
  },
});
interface Props {
  article: Article;
}

export default function List(article: Props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const publishedAt = new Date(article.article.publishedAt);

  return (
    <Paper
      className={classes.Content}
      style={{
        width: "100%",
      }}
    >
      <Button
        className={classes.Button}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <div className={classes.Header}>
          <div className={classes.Title}>
            <ArticleIcon />
            <Typography className={classes.Text}>
              {article.article.title}
            </Typography>
          </div>

          {!open && <KeyboardArrowDownIcon />}
          {open && <KeyboardArrowUpIcon />}
        </div>

        {open && (
          <>
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
          </>
        )}
        <div className={classes.Info}>
          <Typography style={{ fontSize: "0.8rem" }}>
            {article.article.source.name + ": " + publishedAt.toLocaleString()}
          </Typography>
        </div>
      </Button>
    </Paper>
  );
}
