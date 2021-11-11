import FaqDropdown from "./FaqDropdown";
import "./style.css";
import {
  showFaqDropdown1,
  showFaqDropdown2,
  showFaqDropdown3,
  showFaqDropdown4,
  showFaqDropdown5,
  showFaqDropdown6,
} from "./FaqComponentFunctions";
import SubscriptionBar, { showValidText } from "../../SubscriptionBar";
const SixthBoxComponent = () => {
  return (
    <>
      <section className="sixth-box-component" id='FAQ'>
        <div className="center">
          <h1 align="center">Frequently asked questions</h1>
          <div className="faq-list">
            <ul style={{ listStyle: "none" }}>
              <li className="list-items" id="li-1" onClick={showFaqDropdown1}>
                <h4>
                  What can I watch on Netflix?
                  <i className="fa fa-plus" id="faqOpenBtn"></i>
                  <i className="fa fa-times" id="faqCloseBtn"></i>
                </h4>
                <FaqDropdown
                  id="faq1"
                  style={{ display: "none", userSelect: "none" }}
                  content="Netflix has an extensive library of feature films,
                   documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you want.
"
                  linkTitle="Check out some of our content."
                  link="#"
                />
              </li>
              <li className="list-items" id="li-2" onClick={showFaqDropdown2}>
                <h4>
                  What is Netflix?
                  <i className="fa fa-plus" id="faqOpenBtn2"></i>
                  <i className="fa fa-times" id="faqCloseBtn2"></i>
                </h4>

                <FaqDropdown
                  id="faq2"
                  content="Netflix is a streaming service that offers a wide variety of award-winning TV programmes,
                   films, anime, documentaries and more – on thousands of internet-connected devices.

                  You can watch as much as you want, whenever you want, without
                   a single advert – all for one low monthly price. There's always something new to discover, and new TV
                    programmes and films are added every week!
"
                />
              </li>

              <li className="list-items" id="li-3" onClick={showFaqDropdown3}>
                <h4>
                  How much does Netflix cost?
                  <i className="fa fa-plus" id="faqOpenBtn3"></i>
                  <i className="fa fa-times" id="faqCloseBtn3"></i>
                </h4>

                <FaqDropdown
                  id="faq3"
                  content="Netflix has an extensive library of feature films,
                   documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you want.
"
                />
              </li>
              <li className="list-items" id="li-4" onClick={showFaqDropdown4}>
                <h4>
                  Where can I watch?
                  <i className="fa fa-plus" id="faqOpenBtn4"></i>
                  <i className="fa fa-times" id="faqCloseBtn4"></i>
                </h4>
                <FaqDropdown
                  id="faq4"
                  content="Netflix has an extensive library of feature films,
                   documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you want.
"
                />
              </li>
              <li className="list-items" id="li-5" onClick={showFaqDropdown5}>
                <h4>
                  How do I cancel?
                  <i className="fa fa-plus" id="faqOpenBtn5"></i>
                  <i className="fa fa-times" id="faqCloseBtn5"></i>
                </h4>
                <FaqDropdown
                  id="faq5"
                  content="Netflix has an extensive library of feature films,
                   documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you want.
"
                />
              </li>
              <li className="list-items" id="li-6" onClick={showFaqDropdown6}>
                <h4>
                  Is Netflix good for chidren?
                  <i className="fa fa-plus" id="faqOpenBtn6"></i>
                  <i className="fa fa-times" id="faqCloseBtn6"></i>
                </h4>

                <FaqDropdown
                  id="faq6"
                  content="Netflix has an extensive library of feature films,
                   documentaries, TV programmes, anime, award-winning Netflix
                    originals and more. Watch as much as you want, anytime you want.
"
                />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />

        <SubscriptionBar
          inputStyle={{
            padding: "22px 20px 13px 20px ",
            color: "#333",
            marginLeft: "20%",
            borderRadius: "4px 0px 0px 4px",
            marginBottom:'20px'
          }}
          onInput={showValidText}
        />
      </section>
    </>
  );
};

export default SixthBoxComponent;
