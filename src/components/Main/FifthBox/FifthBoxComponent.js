import src from "../../../Images/kids.png";
import "./style.css";

const FifthBoxComponent = () => {
  return (
    <>
      <section className="fifth-box-component">
        <div className="row">
          <div className="kids-pic">
            <img src={src} alt="" />
          </div>
          <div className="kids-pic-content">
            <h1>Create profiles for children.</h1>
            <h4>
            Send children on adventures with their favourite characters in a space made just for them – free with your membership.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default FifthBoxComponent;
