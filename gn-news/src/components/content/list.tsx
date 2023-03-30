import { Button, Paper, Typography } from "@mui/material";
import { Article } from "../../services/http";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const useStyles = makeStyles({
  Content: {
    backgroundColor: "#e2e0e0 !important",
    // display: "flex",
    // flexDirection: "column",
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
  Title: {
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
          <Typography className={classes.Title}>
            {article.article.title}
          </Typography>
          {!open && <KeyboardArrowDownIcon />}
          {open && <KeyboardArrowUpIcon />}
        </div>

        {open && (
          <>
            {article.article.description && (
              <Typography>{article.article.description}</Typography>
            )}
            <Typography>{article.article.author}</Typography>
            <Button href={article.article.url} target="_blank">
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
