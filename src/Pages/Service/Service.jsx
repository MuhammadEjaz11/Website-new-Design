// import React, { useState, useEffect } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { Box, Tab, Tabs } from "@mui/material";
// import PortfolioCard from "./PortfolioCard";
// import StyledHeading from "./StyledHeading";

// import portfolioOne from "../image/portfolioOne.png";
// import portfolioTwo from "../image/portfolioTwo.png";
// import portfolioFour from "../image/portfolioFour.png";

// export default function KeenSliderPortfolio({ showTabs = false }) {
//   // Separate arrays for each category
//   const websitePortfolios = [
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Website",
//     },
//   ];

//   const logoPortfolios = [
//     {
//       imageURL: portfolioTwo,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Logo",
//     },
//   ];

//   const videoPortfolios = [
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Video",
//     },
//   ];

//   const stationeryPortfolios = [
//     {
//       imageURL: portfolioTwo,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Stationery",
//     },
//   ];

//   const socialMediaPortfolios = [
//     {
//       imageURL: portfolioFour,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Social Media",
//     },
//   ];

//   const allPortfolios = [
//     {
//       imageURL: portfolioFour,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Social Media",
//     },
//     {
//       imageURL: portfolioTwo,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Stationery",
//     },
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Video",
//     },
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Video",
//     },
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Website",
//     },
//     {
//       imageURL: portfolioOne,
//       title: "UI UX Design",
//       desc: "SaaS Dashboard E Commerce",
//       category: "Video",
//     },
//   ];

//   const shuffleArray = (array) => {
//     return array.sort(() => Math.random() - 0.5);
//   };

//   const [tab, setTab] = useState("All");
//   const [filteredPortfolioList, setFilteredPortfolioList] = useState(allPortfolios);
//   const [sliderRef, instanceRef] = useKeenSlider({
//     slides: {
//       perView: 4,
//       spacing: 40, // adjust the gap between slides
//     },
//     loop: true,
//     mode: "snap", // snapping behavior
//     breakpoints: {
//       "(max-width: 900px)": {
//         slides: { perView: 1 },
//       },
//     },
//   });

//   // Filter portfolios based on selected tab
//   useEffect(() => {
//     switch (tab) {
//       case "Website":
//         setFilteredPortfolioList(shuffleArray(websitePortfolios));
//         break;
//       case "Logo":
//         setFilteredPortfolioList(shuffleArray(logoPortfolios));
//         break;
//       case "Video":
//         setFilteredPortfolioList(shuffleArray(videoPortfolios));
//         break;
//       case "Stationery":
//         setFilteredPortfolioList(shuffleArray(stationeryPortfolios));
//         break;
//       case "Social Media":
//         setFilteredPortfolioList(shuffleArray(socialMediaPortfolios));
//         break;
//       default:
//         setFilteredPortfolioList(shuffleArray(allPortfolios));
//     }
//   }, [tab]);

//   return (
//     <>
//       {showTabs && (
//         <>
//           <Box
//             sx={{
//               display: "flex",
//               maxWidth: "1530px",
//               margin: "0 auto",
//               paddingTop: "80px",
//             }}
//           >
//             <StyledHeading
//               title1="Our"
//               sx1={{ fontFamily: "satoshi !important" }}
//               title2="Portfolio"
//               sx2={{ fontFamily: "satoshi-light !important" }}
//             />
//           </Box>

//           <Box
//             sx={{
//               marginTop: { md: "-75px", sm: "40px", xs: "40px" },
//               display: "flex",
//               justifyContent: "flex-end",
//               maxWidth: "1532.68px",
//               paddingBottom: "70px",
//               textTransform: "capitalize",
//             }}
//           >
//             <Tabs
//               value={tab}
//               onChange={(e, v) => setTab(v)}
//               aria-label="Portfolio Tabs"
//               indicatorColor="rgba(0,0,0,0)"
//               sx={{
//                 textTransform: "capitalize",
//                 backgroundColor: "#F7F7F7",
//                 padding: "12px 11px",
//                 fontFamily: "Inter",
//                 fontSize: { xs: "14px", md: "16px" },
//                 lineHeight: "1.5",
//                 borderRadius: "20px",
//               }}
//             >
//               <Tab
//                 value="All"
//                 label="All"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white", // Change text color when selected
//                     fontWeight: "bold", // Apply bold font weight when selected
//                   },
//                 }}
//               />
//               <Tab
//                 value="Website"
//                 label="Website"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white",
//                     fontWeight: "bold",
//                   },
//                 }}
//               />
//               <Tab
//                 value="Logo"
//                 label="Logo"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white",
//                     fontWeight: "bold",
//                   },
//                 }}
//               />
//               <Tab
//                 value="Video"
//                 label="Video"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white",
//                     fontWeight: "bold",
//                   },
//                 }}
//               />
//               <Tab
//                 value="Stationery"
//                 label="Stationery"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white",
//                     fontWeight: "bold",
//                   },
//                 }}
//               />
//               <Tab
//                 value="Social Media"
//                 label="Social Media"
//                 sx={{
//                   color: "#939393",
//                   fontSize: { xs: "14px", md: "16px" },
//                   textTransform: "capitalize",
//                   lineHeight: "1.5",
//                   "&.Mui-selected": {
//                     borderRadius: "15px",
//                     backgroundColor: "black",
//                     borderBottom: "none",
//                     color: "white",
//                     fontWeight: "bold",
//                   },
//                 }}
//               />
//             </Tabs>
//           </Box>
//         </>
//       )}

//       <Box
//         sx={{
//           display: "flex",
//           position: "relative",
//           left: "50%",
//           right: "50%",
//           marginLeft: "-50vw",
//           marginRight: "-50vw",
//           width: "100vw",
//           maxWidth: "none",
//           borderRadius: "20px",
//           overflow: "hidden",
//         }}
//       >
//         <div ref={sliderRef} className="keen-slider">
//           {filteredPortfolioList.map((x, i) => (
//             <div className="keen-slider__slide" key={i}>
//               <PortfolioCard imageURL={x?.imageURL} title={x?.title} desc={x?.desc} />
//             </div>
//           ))}
//         </div>
//       </Box>
//     </>
//   );
// }


import React from 'react'

const Service = () => {
  return (
    <div>Service</div>
  )
}

export default Service