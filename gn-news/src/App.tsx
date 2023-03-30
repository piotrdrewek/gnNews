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
    // display: "grid",
    // gridTemplateColumns: "[c-line1] 20% [c-line2] 80% [c-line3]",
    // gridTemplateRows: "[r-line1] 15% [r-line2] 70% [r-line3] 15% [r-line4]",
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center",
    // height: "100vh",
  },
  header: {
    height: "15vh",
    // gridArea: "r-line1 / c-line1 / r-line2 / c-line3",
  },
  page: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    minHeight: "70vh",
  },
  sidebar: {
    width: "20%",
    minWidth: "150px",
    // gridArea: "r-line2 / c-line1 / r-line3 / c-line2",
  },
  content: {
    width: "80%",
    // gridArea: "r-line2 / c-line2 / r-line3  / c-line3",
  },
  footer: {
    height: "15vh",
    // gridArea: "r-line3 / c-line1 / r-line4  / c-line3",
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
