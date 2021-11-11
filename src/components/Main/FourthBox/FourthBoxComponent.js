import BoxComponent from "../../Common/BoxComponent";
import "./style.css";
import src from '../../../Videos/video-devices.m4v';

const FourthBoxComponent = () => {
  return (
    <>
      <section className="fourth-box-component">
        <BoxComponent
          contentHeader="Watch everywhere."
          contentBody="Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more."
          vidSrc={src}
        />
      </section>
    </>
  );
};

export default FourthBoxComponent;
