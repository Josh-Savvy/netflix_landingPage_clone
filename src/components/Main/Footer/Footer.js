import LanguagesSelect from "../../Navbar/LanguagesSelect";
import FooterCols from "./FooterCols";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-content">
          <p>Questions? Call 0800-022-5173</p>
          <div className="footer-row row">
            <FooterCols />
          </div>
        </section>
        <LanguagesSelect />
      </footer>
    </>
  );
};

export default Footer;
