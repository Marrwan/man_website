import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { InsightQuickNavigation } from "../Gallery/App";
import { gallerydata } from "../Gallery/GalleryDetails/GalleryData";
import "../Gallery/Insmore.scss";
import Wall from "../Wall/Wall";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NewNavBar from "../NewNavBar/NewNavBar";
import Articleimage from "../../images/new-images/PublicationImg.png";
import { UIProvider } from "../../Ui";
import { newsdata } from "../News/NewsData";
import { newPubData } from "../Publications/PublicationsData";
import { newReportData } from "../Reports/ReportData";

const Insight = () => {
  return (
    <UIProvider>
      <NewNavBar />
      <div className="insight-more">
        <div className="hero_Image">
          <div className="cover">
            <h1>Insight</h1>
            <p>Read our latest reports, blogs and publications</p>
          </div>
        </div>
        <div className="news_main">
          <div className="cover">
            <div className="right">
              <div className="top">
                <h2>Insight</h2>
              </div>
              <div className="wrap">
                {gallerydata[0] && (
                  <div className="card" key={gallerydata[0].id}>
                    <button>Gallery</button>
                    <div className="flex">
                      <h3>{gallerydata[0].name}</h3>
                      <Link to={`/gallery-details/${gallerydata[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newPubData[0] && (
                  <div className="card" key={newPubData[0].id}>
                    <button>Publications</button>
                    <div className="flex">
                      <h3>{newPubData[0].name}</h3>
                      <Link to={`/publications-details/${newPubData[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newReportData[0] && (
                  <div className="card" key={newReportData[0].id}>
                    <button>Report</button>
                    <div className="flex">
                      <h3>{newReportData[0].name}</h3>
                      <Link to={`/report-details/${newReportData[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}

                {newsdata[0] && (
                  <div className="card" key={newsdata[0].id}>
                    <button>News</button>
                    <div className="flex">
                      <h3>{newsdata[0].name}</h3>
                      <Link to={`/news-details/${newsdata[0].id}`}>
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="left">
              <img className="img" src={Articleimage} alt="" />
              <InsightQuickNavigation />
            </div>
          </div>
        </div>
      </div>
      <Wall />
      <Footer />
    </UIProvider>
  );
};

export default Insight;
