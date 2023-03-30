import { Button, Paper, Typography } from "@mui/material";
import { Article } from "../../services/http";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const useStyles = makeStyles({
  Content: {
    display: "flex",
    flexWrap: "wrap",
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
    flexDirection: "column",
    justifyContent: "flex-end !important",
    width: "100%",
    alignItems: "center",
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
    justifyContent: "space-between !important",
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
        width: "20%",
      }}
    >
      <Button
        className={classes.Button}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <Typography className={classes.Title}>
          {article.article.title}
        </Typography>

        {article.article.urlToImage && (
          <img
            src={article.article.urlToImage}
            className="img-fluid"
            alt="..."
          ></img>
        )}
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
            {article.article.source.name + ": "}
          </Typography>
          <Typography style={{ fontSize: "0.8rem" }}>
            {publishedAt.toLocaleString()}
          </Typography>
          {!open && <KeyboardArrowDownIcon />}
          {open && <KeyboardArrowUpIcon />}
        </div>
      </Button>
    </Paper>
  );
}
