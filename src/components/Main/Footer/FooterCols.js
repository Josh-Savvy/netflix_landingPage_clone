const FooterCols = () => {
  const Li = ({ title, link }) => {
    return (
      <>
        <a href={link}>
          <li>{title}</li>
        </a>
      </>
    );
  };
  return (
    <>
      <div className="footer-col col-sm-3">
        <ul>
          <Li title="FAQ" link="#FAQ" />
          <Li title="Investors Relationship" link="#" />
          <Li title="Ways to Watch" link="#" />
          <Li title="Corporate Information" link="#" />
          <Li title="Only on Netflix" link="#" />
        </ul>
      </div>

      <div className="footer-col col-sm-3">
        <ul>
          <Li title="Help centre" link="#" />
          <Li title="Terms of use" link="#" />
          <Li title="Jobs" link="#" />
          <Li title="Contact us" link="#" />
        </ul>
      </div>

      <div className="footer-col col-sm-3">
        <ul>
          <Li title="Account" link="#" />
          <Li title="Redeem gift cards" link="#" />
          <Li title="Privacy" link="#" />
          <Li title="Speed test" link="#" />
        </ul>
      </div>

      <div className="footer-col col-sm-3">
        <ul>
          <Li title="Media center" link="#" />
          <Li title="Buy gift cards" link="#" />
          <Li title="Cookie preferences" link="#" />
          <Li title="Legal Notices" link="#" />
        </ul>
      </div>
    </>
  );
};

export default FooterCols;
