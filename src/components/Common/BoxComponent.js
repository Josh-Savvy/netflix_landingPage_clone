const BoxComponent = ({ vidSrc, contentHeader, contentBody }) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-5 tv-content">
          <h1>{contentHeader}</h1>
          <h4>{contentBody}</h4>
        </div>
        <div className="col-sm-6 live-tv">
          <video autoPlay muted loop>
            <source src={vidSrc} />
          </video>
        </div>
      </div>
    </div>
  );
};

export default BoxComponent;
