import { makeStyles } from "@mui/styles";
import { Typography, Paper, Button } from "@mui/material";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Flag from "react-world-flags";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { setLang } from "../redux/langSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useStyles = makeStyles({
  sideBar: {
    display: "flex",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
    width: "100%",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around !important",
  },
});

export default function SideBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.lang.lang);
  return (
    <Router>
      <Paper className={classes.sideBar}>
        <ul className="w-100 list-group d-flex flex-column align-items-center">
          <li className="w-100 list-group-item d-flex justify-content-around">
            <Button
              component={Link}
              to={"/country/argentina"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("ar"));
              }}
              className={classes.button}
              disabled={lang === "ar"}
            >
              <Flag code="ar" height="16" />
              <Typography>Argentina</Typography>
            </Button>
          </li>
          <li className="w-100 list-group-item">
            <Button
              component={Link}
              to={"/country/belgium"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("be"));
              }}
              className={classes.button}
              disabled={lang === "be"}
            >
              <Flag code="be" height="16" />
              <Typography>Belgium</Typography>
            </Button>
          </li>
          <li className="w-100 list-group-item">
            <Button
              component={Link}
              to={"/country/canada"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("ca"));
              }}
              className={classes.button}
              disabled={lang === "ca"}
            >
              <Flag code="ca" height="16" />
              <Typography>Canada</Typography>
            </Button>
          </li>
          <li className="w-100 list-group-item">
            <Button
              component={Link}
              to={"/country/france"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("fr"));
              }}
              className={classes.button}
              disabled={lang === "fr"}
            >
              <Flag code="fr" height="16" />
              <Typography>France</Typography>
            </Button>
          </li>
          <li className="w-100 list-group-item">
            <Button
              component={Link}
              to={"/country/germany"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("de"));
              }}
              className={classes.button}
              disabled={lang === "de"}
            >
              <Flag code="de" height="16" />
              <Typography>Germany</Typography>
            </Button>
          </li>
          <li className="w-100 list-group-item">
            <Button
              component={Link}
              to={"/country/poland"}
              color="inherit"
              onClick={() => {
                dispatch(setLang("pl"));
              }}
              className={classes.button}
              disabled={lang === "pl"}
            >
              <Flag code="pl" height="16" />
              <Typography>Poland</Typography>
            </Button>
          </li>
        </ul>
      </Paper>
    </Router>
  );
}
