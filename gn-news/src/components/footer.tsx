import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#cfcece !important",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
  },
  subTitle: {
    fontSize: "1rem !important",
    marginLeft: "10% !important",
  },
  buttons: {
    marginRight: "10% !important",
  },
});
export default function Footer() {
  const classes = useStyles();
  let time = new Date().toLocaleString();
  let [currentTime, setTime] = React.useState(time);
  const counter = useSelector((state: RootState) => state.counter.counter);

  function checkTime() {
    time = new Date().toLocaleString();
    setTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <Paper className={classes.footer}>
      <Typography className={classes.subTitle}>GN NEWS</Typography>
      <Typography className={classes.subTitle}>{`${currentTime}`}</Typography>
      <Typography className={classes.subTitle}>
        News counter: {counter}
      </Typography>

      <div></div>
    </Paper>
  );
}
