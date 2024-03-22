import Scheme from "../../../assets/images/SchemeEligiblity.png";
import NambikaiIniyam from "../../../assets/images/Nambikkai_iniyam.png";
import Style from "./Help.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Help() {
  const { t } = useTranslation();

  const helpCards = [
    {
      title: t("scheme_eligibility"),
      imgPath: Scheme,
      description:
        "Know about your eligible TN Government schemes, and all information about availed schemes in <span class='text-landing-primary'> #Makkal Portal. </span>",
      linkPath: "/scheme-eligibility",
    },
    {
      title: "Nambikkai Inaiyam",
      imgPath: NambikaiIniyam,
      description:
        "<span class='text-landing-primary'> #Nambikkai Inaiyam</span> is TN government blockchain policy and backbone where people can secure thier datas in Blockchain.",
      linkPath: "/login",
    },
  ];
  return (
    <div className={Style.helpWrapper}>
      <div className="container font-avenir">
        <h3
          className={[
            "text-center mb-3 mb-lg-5 font-weight-bold",
            Style.heading,
          ].join(" ")}
        >
          How can we help you?
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="row justify-content-between">
              {helpCards.map((item, index) => (
                <div
                  className={[
                    "col-lg-5 col-md-6 col-12 d-flex align-items-center",
                    Style.helpCard,
                  ].join(" ")}
                  key={index}
                >
                  <div className={Style.imageWrapper}>
                    <img src={item.imgPath} alt="help-scheme" />
                  </div>
                  <div className={Style.helpContent}>
                    <p
                      className="text-landing-primary mb-2 mb-md-
                  3 font-weight-bold fs-18"
                    >
                      {item.title}
                    </p>
                    <p
                      className={[Style.helpDesc, "font-weight-bold"].join(" ")}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <Link
                      className={["d-block text-right", Style.viewMore].join(
                        " "
                      )}
                      to={item.linkPath}
                    >
                      View More>>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Help;
