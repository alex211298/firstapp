import s from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App(props) {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <Navbar />
        <div className={s.appWrapperContent}>
          <Routes appState = {props.appState} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;