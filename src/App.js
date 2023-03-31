import React from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "./Ui";
import "./App.scss";

import theme from "./Styles/theme/Theme";
import Section from "./Component/Section";
import InfoBoard from "./Component/InfoBoard/InfoBorad";
import Article from "./Component/Article/Article";
import Wall from "./Component/Wall/Wall";
import Footer from "./Component/Footer/Footer";
import Subscribe from "./Component/Subscribe/Subscribe";
import NewNavBar from "./Component/NewNavBar/NewNavBar";
import HomeNewSlide from "./Component/HomeNewSlide/HomeNewSlide";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
          <div className="home">
            <Subscribe />
            <NewNavBar />
            <HomeNewSlide />
            {/* <Banner /> */}
            <Section />
            <Article />
            <InfoBoard />
            <Wall />
            <Footer />
          </div>
        </UIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
