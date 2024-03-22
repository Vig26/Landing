import React from "react";
import { Link } from "react-router-dom";
import Style from "./LandingFooter.module.css";
import TnegaImg from "../../../assets/images/TNeGAlogo-new.png";
import TamilNaduImg from "../../../assets/images/933px-TamilNadu_Logo.svg.png";
import FooterEmailIcon from "../../../assets/images/footer-email-icon.png";
import FooterSupportIcon from "../../../assets/images/support-icon.png";
import FooterFbIcon from "../../../assets/images/footer-FB.png";
import FooterTwitterIcon from "../../../assets/images/footer-Twitter.png";
import FooterLinkedinIcon from "../../../assets/images/footer-linkedin.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const socialMedia = [
  {
    title: "Facebook",
    img: FooterFbIcon,
    link: "https://www.facebook.com/tnegaofficial",
  },
  {
    title: "Twitter",
    img: FooterTwitterIcon,
    link: "https://twitter.com/TNeGA_Official",
  },
  {
    title: "Linkedin",
    img: FooterLinkedinIcon,
    link: "https://www.linkedin.com/company/tnega",
    isLast: true,
  },
];
export default function LandingFooter() {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);

  const { t } = useTranslation();
  const quickLinks = [
    {
      title: t("landing_schemeEligibility_card_title"),
      path: "/scheme-eligibility",
      isPublic: true,
    },
    {
      title: t("landing_profile_update_card_title"),
      path: "/profile",
    },
    {
      title: t("eSevai_services"),
      path: "/services-availed",
    },
    {
      title: t("citizen_wallet"),
      path: "http://wallet_tnega.simplyfi.tech/",
      isNewPage: true,
    },
    { title: t("about_us"), path: "/about-sfdb", isPublic: true },
    {
      title: t("faqs"),
      path: "http://192.168.5.204/assets/docs/FAQ_Comments_RP.pdf",
      isNewPage: true,
    },
    { title: t("help_support"), path: "/" },
  ];

  return (
    <div className={Style.LandingFooterMain}>
      <div className="container font-avenir">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <h3 className="mb-4 mb-lg-5">{t("disclaimer_title")}</h3>
            <p className="mb-3 mb-lg-5">{t("disclaimer")}</p>
            <p className="mb-0 font-weight-normal">
              @Powered by TNeGA 2021-2023.
            </p>
          </div>
          <div className={["col-lg-4 col-md-6", Style.quickLinks].join(" ")}>
            <h4 className>{t("quick_links")}</h4>
            <ul className={Style.quickLinksList}>
              {quickLinks.map((link, index) => (
                <li key={index} className={Style.quickLink}>
                  <Link
                    to={{
                      pathname:
                        link.isPublic || isLoggedIn || link.isNewPage
                          ? link.path
                          : "/login",
                    }}
                    target={link.isNewPage ? "_blank" : ""}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className={Style.quickLink}>
                <a href="mailto:makkalsevai@tn.gov.in">{t("contact_us")}</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 ">
            <div className={Style.FooterIcons}>
              <img
                src={TnegaImg}
                alt="TneGa Logo"
                width="40px"
                height="40px"
                className="mr-3"
              />
              <img
                src={TamilNaduImg}
                alt="TneGa Logo"
                width="40px"
                height="40px"
              />
            </div>
            <address className="mb-0 mt-2">
              Directorate of e-Governance / TNeGA, 2nd & 7th Floor, P.T.LEE
              Chengalvaraya Naicker Building,
              <br />
              Anna Salai, Chennai - 600 002. Opt. LIC Building
            </address>
            <address className="mb-2">
              Fax No: <a href="tel:+91-44-28521112">+91-44-28521112</a>
            </address>
            <address className="mb-0">
              Tel No: <a href="tel:+91-44-40164907">+91-44-40164907</a>
            </address>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
            <div className={Style.SocialFooter}>
              <div className={Style.SupportInfo}>
                <a href="mailto:tnesevaihelpdesk@tn.gov.in">
                  <img src={FooterEmailIcon} alt="email" />
                  tnesevaihelpdesk@tn.gov.in
                </a>
                <a href="tel:180-0425-1333 | 1100" className="ml-md-3">
                  <img src={FooterSupportIcon} alt="Support" />
                  180-0425-1333 | 1100
                </a>
              </div>
              <div className={["ml-0 ml-xl-5", Style.socialLinks].join(" ")}>
                {socialMedia.map((media, index) => (
                  <a
                    href={media.link}
                    target="_blank"
                    title={media.title}
                    className={`${media.isLast ? "mr-0" : "mr-2"}`}
                    rel="noreferrer"
                    key={index}
                  >
                    <img src={media.img} alt={media.title} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
