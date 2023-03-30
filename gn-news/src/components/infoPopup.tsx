import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { close } from "../redux/infoPopupSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  Content: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: "0%",
    left: "0%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Paper: {
    textAlign: "center",
    width: "50%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Title: {},
});

export default function InfoPopup() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.Content}>
      <Paper className={classes.Paper}>
        <Typography>
          During developing this app I mostly struggled with UI design.
        </Typography>
        <Typography>
          The most satisfying task was the API connection.
        </Typography>

        <Button onClick={() => dispatch(close())}>Close</Button>
      </Paper>
    </div>
  );
}
