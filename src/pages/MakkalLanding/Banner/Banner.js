// import React from "react";
// import Style from "./Banner.module.css";
// import tn_map from "../../../assets/images/tn-map.png";
// import MakkalHeader from "../MakkalHeader";
// import { useTranslation } from "react-i18next";
// import CMImage from "../../../assets/images/cm-photo-1.png";
// import NewsUpdate from "./NewsUpdate";
// import { useSelector } from "react-redux";

// function Banner() {
//   const localLang = localStorage.getItem("i18nextLng");
//   const langSuffix = localLang === "en" ? "" : "Tamil";

//   const { t } = useTranslation();
//   const { bannerData } = useSelector((state) => state.bannerDetailsReducer);
//   return (
//     <div className={[Style.wrapperBanner, "font-avenir"].join(" ")}>
//       <MakkalHeader />
//       <div className={["container", Style.wrapper].join(" ")}>
//         <h3 className="font-weight-bold mb-0 mb-md-4 text-white fs-22 text-center text-md-left">
//           {t("welcome_to_makkal_portal")}
//         </h3>
//         <div className="row d-flex align-items-center">
//           <div className="col-md-9">
//             <div className="row d-flex align-items-center">
//               <div className="col-md-4 text-center text-md-left">
//                 <img
//                   src={CMImage}
//                   alt="cmimage"
//                   width={"100%"}
//                   height={"100%"}
//                   className={Style.cmImage}
//                 />
//               </div>
//               <div className="col-md-8 text-white">
//                 <div className={Style.quoteBox}>
//                   {bannerData.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <p className="mb-md-3 mb-2 font-weight-bold fs-18">
//                         {item[`header${langSuffix}`]}
//                       </p>
//                       <p
//                         className={`${
//                           index === 1 ? "mb-0" : "mb-md-4 mb-3"
//                         } fs-16`}
//                       >
//                         {item[`description${langSuffix}`]}
//                       </p>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <img src={tn_map} alt="headerimage" className="d-none d-md-block" />
//           </div>
//         </div>
//       </div>

//       <NewsUpdate />
//     </div>
//   );
// }
// export default Banner;


import React from "react";
import Style from "./Banner.module.css";
import MakkalHeader from "../MakkalHeader";
import { useTranslation } from "react-i18next";
import NewsUpdate from "./NewsUpdate";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import { HOST_API } from "../../../config";


function Banner() {
  const localLang = localStorage.getItem("i18nextLng");
  const langSuffix = localLang === "en" ? "" : "Tamil";

  const { t } = useTranslation();
  const { bannerData } = useSelector((state) => state.bannerDetailsReducer);
  return (
    <div className={[Style.wrapperBanner, "font-avenir"].join(" ")}>
      <MakkalHeader />
      <div>
      {/* <h3 className="font-weight-bold ml-5 mt-4 text-white fs-22">
           {t("welcome_to_makkal_portal")}
         </h3> */}
        <Carousel slide={true} prevLabel={false} nextLabel={false} indicators={true} interval={3000}>
        {bannerData.map((item, index) => (  
        <Carousel.Item>
        <div>
                <img
                  src={[`${HOST_API}${item?.imagePath}`]}
                  alt="image"
                  className={Style.cmImage}
                />
        </div>
        </Carousel.Item>
        // <Carousel.Item interval={1000}> 
        // <div className="row d-flex align-items-center">
        //   <div className="col-md-9">
        //     <div className="row d-flex align-items-center">
        //       <div className="col-md-4 text-center text-md-left">
        //         <img
        //           src={CMImage}
        //           alt="cmimage"
        //           width={"100%"}
        //           height={"100%"}
        //           className={Style.cmImage}
        //         />
        //       </div>
        //       <div className="col-md-8 text-black">
        //         <div className={Style.quoteBox}>
        //           {/* {bannerData.map((item, index) => (
        //             <React.Fragment key={index}>
        //               <p className="mb-md-3 mb-2 font-weight-bold fs-18">
        //                 {item[`header${langSuffix}`]}
        //               </p>
        //               <p
        //                 className={`${
        //                   index === 1 ? "mb-0" : "mb-md-4 mb-3"
        //                 } fs-16`}
        //               >
        //                 {item[`description${langSuffix}`]}
        //               </p>
        //             </React.Fragment>
        //           ))} */}
        //           <p>
        //           {t("about_makkal_portal_desc")}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="col-md-3">
        //     <img src={tn_map} alt="headerimage" className="d-none d-md-block" />
        //   </div>
        // </div>
        // </Carousel.Item>
        // <Carousel.Item interval={1000}> 
        // <div className="row d-flex align-items-center">
        //   <div className="col-md-9">
        //     <div className="row d-flex align-items-center">
        //       <div className="col-md-4 text-center text-md-left">
        //         <img
        //           src={CMImage}
        //           alt="cmimage"
        //           width={"100%"}
        //           height={"100%"}
        //           className={Style.cmImage}
        //         />
        //       </div>
        //       <div className="col-md-8 text-black">
        //         <div className={Style.quoteBox}>
        //           {/* {bannerData.map((item, index) => (
        //             <React.Fragment key={index}>
        //               <p className="mb-md-3 mb-2 font-weight-bold fs-18">
        //                 {item[`header${langSuffix}`]}
        //               </p>
        //               <p
        //                 className={`${
        //                   index === 1 ? "mb-0" : "mb-md-4 mb-3"
        //                 } fs-16`}
        //               >
        //                 {item[`description${langSuffix}`]}
        //               </p>
        //             </React.Fragment>
        //           ))} */}
        //           <p>
        //           {t("about_makkal_portal_desc")}
        //           </p>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="col-md-3">
        //     <img src={tn_map} alt="headerimage" className="d-none d-md-block" />
        //   </div>
        // </div>
        // </Carousel.Item>
        // <Carousel.Item>
        //   <img
        //   src={AboutCollage}
        //   alt="collage-img"
        //   className="w-100"
        //   loading="lazy"
        //   />
        //   <Carousel.Caption>
        //   <p >
        //   Tamil Nadu e-Governance Agency works towards fulfilling the Government of 
        //   Tamil Nadu’s vision of Good Governance using IT tools
        //   </p>
        //   </Carousel.Caption>
        // </Carousel.Item>
        ))}
        </Carousel>
      </div>

      <NewsUpdate />
    </div>
  );
}
export default Banner;



// import React from "react";
// import Style from "./Banner.module.css";
// import tn_map from "../../../assets/images/tn-map.png";
// import MakkalHeader from "../MakkalHeader";
// import { useTranslation } from "react-i18next";
// import CMImage from "../../../assets/images/cm-photo-1.png";
// import NewsUpdate from "./NewsUpdate";
// import { useSelector } from "react-redux";
// import Slider from "react-slick";

// function Banner() {
//   const localLang = localStorage.getItem("i18nextLng");
//   const langSuffix = localLang === "en" ? "" : "Tamil";
 
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   const { t } = useTranslation();
//   const { bannerData } = useSelector((state) => state.bannerDetailsReducer);
//   return (
//     <div className={[Style.wrapperBanner, "font-avenir"].join(" ")}>
//       <MakkalHeader />
//       <div className={["container", Style.wrapper].join(" ")}>
//         <h3 className="font-weight-bold mb-0 mb-md-4 text-white fs-22 text-center text-md-left">
//           {t("welcome_to_makkal_portal")}
//         </h3>
//         <Slider {...settings}>
//         <div className="row d-flex align-items-center">
//           <div className="col-md-9">
//             <div className="row d-flex align-items-center">
//               <div className="col-md-4 text-center text-md-left">
//                 <img
//                   src={CMImage}
//                   alt="cmimage"
//                   width={"100%"}
//                   height={"100%"}
//                   className={Style.cmImage}
//                 />
//               </div>
//               <div className="col-md-8 text-white">
//                 <div className={Style.quoteBox}>
//                   {bannerData.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <p className="mb-md-3 mb-2 font-weight-bold fs-18">
//                         {item[`header${langSuffix}`]}
//                       </p>
//                       <p
//                         className={`${
//                           index === 1 ? "mb-0" : "mb-md-4 mb-3"
//                         } fs-16`}
//                       >
//                         {item[`description${langSuffix}`]}
//                       </p>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <img src={tn_map} alt="headerimage" className="d-none d-md-block" />
//           </div>
//         </div>
        
//         <div className="row d-flex align-items-center">
//           <div className="col-md-9">
//             <div className="row d-flex align-items-center">
//               <div className="col-md-4 text-center text-md-left">
//                 <img
//                   src={CMImage}
//                   alt="cmimage"
//                   width={"100%"}
//                   height={"100%"}
//                   className={Style.cmImage}
//                 />
//               </div>
//               <div className="col-md-8 text-white">
//                 <div className={Style.quoteBox}>
//                   {bannerData.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <p className="mb-md-3 mb-2 font-weight-bold fs-18">
//                         {item[`header${langSuffix}`]}
//                       </p>
//                       <p
//                         className={`${
//                           index === 1 ? "mb-0" : "mb-md-4 mb-3"
//                         } fs-16`}
//                       >
//                         {item[`description${langSuffix}`]}
//                       </p>
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3">
//             <img src={tn_map} alt="headerimage" className="d-none d-md-block" />
//           </div>
//         </div>
//         </Slider>
//       </div>

//       <NewsUpdate />
//     </div>
//   );
// }
// export default Banner;