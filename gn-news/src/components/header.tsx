import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Paper, Button, ButtonGroup } from "@mui/material";
import { Link, BrowserRouter as Router } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridViewIcon from "@mui/icons-material/GridView";
import { changeToGrid, changeToList } from "../redux/layoutSlice";
import { useDispatch } from "react-redux";
import { resetLang } from "../redux/langSlice";
import { open } from "../redux/infoPopupSlice";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    // backgroundColor: "#cfcece !important",
    backgroundColor: "black !important",

    borderTopLeftRadius: "0 !important",
    borderTopRightRadius: "0 !important",
  },
  titleButton: {
    marginLeft: "10% !important",
  },
  titleText: {
    fontSize: "2rem !important",
    color: "white !important",
  },
  buttonsGroup: {
    marginRight: "10% !important",
  },
  buttons: {
    color: "white !important",
    borderColor: "white !important",
  },
});

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Router>
      <Paper className={classes.header}>
        <Button
          component={Link}
          to={""}
          color="inherit"
          className={classes.titleButton}
          onClick={() => dispatch(resetLang())}
        >
          <Typography className={classes.titleText}>GN NEWS</Typography>
        </Button>
        <ButtonGroup className={classes.buttonsGroup}>
          <Button
            className={classes.buttons}
            onClick={() => dispatch(changeToList())}
          >
            <ViewListIcon />
          </Button>{" "}
          <Button
            className={classes.buttons}
            onClick={() => dispatch(changeToGrid())}
          >
            <GridViewIcon />
          </Button>
          <Button className={classes.buttons} onClick={() => dispatch(open())}>
            <InfoIcon />
          </Button>
        </ButtonGroup>
      </Paper>
    </Router>
  );
}
