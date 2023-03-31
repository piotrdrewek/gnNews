import { makeStyles } from "@mui/styles";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Content from "./components/content/content";
import Footer from "./components/footer";
import InfoPopup from "./components/infoPopup";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#141414",
  },
  header: {
    height: "10vh",
  },
  page: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    minHeight: "80vh",
  },
  sidebar: {
    width: "20%",
    minWidth: "150px",
  },
  content: {
    width: "80%",
  },
  footer: {
    height: "10vh",
  },
});

function App() {
  const classes = useStyles();
  const popup = useSelector((state: RootState) => state.infoPopup.open);

  return (
    <>
      <div className={classes.app}>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.page}>
          <div className={classes.sidebar}>
            <SideBar />
          </div>
          <div className={classes.content}>{<Content />}</div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
      {popup && <InfoPopup></InfoPopup>}
    </>
  );
}

export default App;
