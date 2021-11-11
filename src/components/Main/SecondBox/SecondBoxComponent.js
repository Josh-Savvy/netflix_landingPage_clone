import './style.css';
import Video from "../../../Videos/live-1.m4v";
import BoxComponent from "../../Common/BoxComponent";
const secondBoxComponent = () => {
  return (
    <section className="second-box-component">
      <BoxComponent
        contentHeader="Enjoy on your TV"
        contentBody="Watch on smart TVs, PlayStation, Xbox, 
            Chromecast, Apple TV, Blu-ray players and 
            more."
            vidSrc={Video}
      />
    </section>
  );
};

export default secondBoxComponent;
