import React from "react";
import Style from "./Card.module.css";
import { ArrowRightLong } from "../../../../../icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Card({ cardDetail }) {
  const { isLoggedIn } = useSelector((state) => state.loginReducer);
  console.log("cardDetail",cardDetail.title)
  console.log("matching",cardDetail.title !== "நலத் திட்ட பயனாளிகள் விபரம்")
  return (
    <>
      {(cardDetail.isBeneficiary !== true) ? (
        <div className="col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5">
          <NavLink
            className={[Style.cardBox, "bg-white"].join(" ")}
            to={{
              pathname:
                cardDetail?.isPublic || isLoggedIn
                  ? cardDetail?.path
                  : "/login",
            }}
            target={cardDetail?.target}
          >
            <div className="mb-3 d-flex justify-content-between">
              <span>{cardDetail?.icon}</span>
              <span>
                <ArrowRightLong />
              </span>
            </div>
            <p
              className={[Style.cardTitle, "mb-2 fs-16 font-weight-bold"].join(
                " "
              )}
            >
              {cardDetail?.title}
            </p>
            <p className={[Style.cardDesc, "fs-16 mb-0"].join(" ")}>
              {cardDetail?.description}
            </p>
          </NavLink>
        </div>
      ) : (
        <>
          {/* For Large device below code for Integrated Beneficiary Drtails */}

          <div
            className={[
              Style.cardSmallDevice,
              "col-lg-12 col-md-12 mb-3 mb-md-4",
            ].join(" ")}
          >
            <NavLink
              className={[Style.cardBoxBeneficiary, "bg-white"].join(" ")}
              to={{
                pathname:
                  cardDetail?.isPublic || isLoggedIn
                    ? cardDetail?.path
                    : "/login",
              }}
              target={cardDetail?.target}
            >
              <div className="mb-3 d-flex justify-content-between align-item-center">
                <span>{cardDetail?.icon}</span>
                <div style={{marginLeft:"30px"}}>
                  <p
                    className={[
                      Style.cardTitle,
                      "mb-2 fs-16 font-weight-bold",
                    ].join(" ")}
                  >
                    {cardDetail?.title}
                  </p>
                  <p className={[Style.cardDesc, "fs-16 mb-0"].join(" ")}>
                    {cardDetail?.description}
                  </p>
                </div>

                <span>
                  <ArrowRightLong />
                </span>
              </div>
            </NavLink>
          </div>
          {/* For mobile device below code for Integrated Beneficiary Drtails */}
          <div
            className={[
              Style.cardBoxVisible,
              "col-lg-4 col-md-6 mb-3 mb-md-4 mb-lg-5",
            ].join(" ")}
          >
            <NavLink
              className={[Style.cardBox, "bg-white"].join(" ")}
              to={{
                pathname:
                  cardDetail?.isPublic || isLoggedIn
                    ? cardDetail?.path
                    : "/login",
              }}
              target={cardDetail?.target}
            >
              <div className="mb-3 d-flex justify-content-between align-item-center">
                <span>{cardDetail?.icon}</span>
                <span>
                  <ArrowRightLong />
                </span>
              </div>
              <p
                className={[
                  Style.cardTitle,
                  "mb-2 fs-16 font-weight-bold",
                ].join(" ")}
              >
                {cardDetail?.title}
              </p>
              <p className={[Style.cardDesc, "fs-16 mb-0"].join(" ")}>
                {cardDetail?.description}
              </p>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}

export default Card;
