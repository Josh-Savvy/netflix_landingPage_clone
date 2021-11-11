import "./style.css";
import src from "../../../Images/mobile.jpg";
import gif from "../../../Images/download-icon.gif";
import MobileDownloadPic from "../../../Images/boxshot.png";
const ThirdBoxComponent = () => {
  return (
    <section className="third-box-component">
      <div>
        <div className="row">
          <div className="col-sm-6 mobile-phone-gif-section">
            <div className="mobile-phone">
              <img src={src} alt="" />
              <div className="download-box">
                <img className="downloadPic" src={MobileDownloadPic} alt="" />
                <caption style={{ lineHeight: "0.4em" }}>
                  <h6>Stranger Things</h6>
                  <span style={{ fontSize: "13px", color: "dodgerblue" }}>
                    Downloading...
                  </span>
                </caption>
                <span className="download-gif"></span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 tv-content">
            <h1 style={{ marginTop: "-30px" }}>
              Download your programmes to watch offline.
            </h1>
            <h4>
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdBoxComponent;
