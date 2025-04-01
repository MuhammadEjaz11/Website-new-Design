import { useEffect, useState } from "react";
import { Box, Button, Typography, Card } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import VideoIcon from "../../image/Group_1.png";
import bannerImage from "../../image/bannerImage.webp";
import HeroImage from '../../assets/heroSection.webp'
import BannerReview1 from "../../image/banner_review1.png";
import BannerReview2 from "../../image/banner_review2.png";
import BannerReview3 from "../../image/banner_review3.png";
import CustomButton from "../../Components/Button";
import { useLocation } from "react-router-dom";
import ContactFormModal from "../../Components/ContactModal";
import { Link as ScrollLink } from "react-scroll";
function LayoutOne() {
  const location = useLocation();
  const [yellowText, setYellowText] = useState("");
  const [blackText, setBlackText] = useState("");
  const navigate = useNavigate()
  

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          backgroundSize: "cover",
          fontFamily: "Inter",
          p: { md: "0px 50px", xs: "10px 30px" },
        }}
      >
        <ContactFormModal open={open} handleClose={handleClose} />

        <Header />
        {location.pathname == "/" ? (
          <Box
            className="MainBanner"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "1556px",
              width: "100%",
              margin: "auto",
              flexDirection: { xs: "column", md: "row" },
            alignItems:"end",
              mt: { xl: "-10px", md: "-70px" },
            }}
          >
            <Box
              className="InnerBanne1526pxr"
              sx={{
                flexBasis: { xs: "100%", md: "53%", xl: "50%" },
                textAlign: { xs: "left", md: "left" },
                flexShrink: "1",
              }}
            >
              <Box sx={{ display: "flex", gap: { md: "1rem", xs: "0.4rem" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "40px", md: "40px", xl: "80px" },
                    fontFamily: "satoshi-light",
                    fontWeight: "400",
                    lineHeight: "1.3",
                  }}
                >
               Your One-Stop Hub Spot To Every Digital Solution !
                </Typography>
                {/* <Typography
                  sx={{
                    borderBottom: "2px solid black",
                    width: "100%",
                    marginBottom: { xl: "20px", xs: "12px" },
                  }}
                ></Typography> */}
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "50px", md: "40px", xl: "90px" },
                  fontWeight: 700,
                  fontFamily: "satoshi",
                  color: "#FFC800",
                  lineHeight: "1.3",
                }}
              >
               Currently For Your Digital Business.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#939393",
                  fontSize: { xs: "14px", md: "12px", xl: "16px" },
                  lineHeight: { xs: "24px", xl: "36px" },
                }}
              >
              Now become hassle free by handing over Brand Awareness of your company to our team as it will make sure to offer you, nonchalant assistance. Because our associates working at Mozack acknowledge the worth of your brand and are tread on the heels of “Working Smart Instead of Working Hard” 
              </Typography>
              <Box
                className="bannerButton"
                sx={{
                  paddingTop: { md: "15px", xl: "20px", xs: "30px" },
                  display: { xs: "flex" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  // m:{md:"0", xs:"auto"}
                  alignItems: "center",
                  flexDirection: { md: "row", xs: "column" },
                  gap: "1rem",
                }}
              >
                <CustomButton
                  textStyle={{
                    color: "white",
                    fontSize: "16px",
                  }}
                  buttonStyle={{
                    borderRadius: "15px",
                    padding: { xs: "0px 0px", xl: "10px 20px" },
                    background: "black",
                    textTransform: "capitalize",
                    width: "178px",
                  }}
                  title="Get Started"
                  onClick={handleOpen}
                />
                <Box
                  sx={{
                    fontSize: "16px",
                    fontFamily: "santoshi",
                    display: "flex",
                    justifyContent: {
                      md: "center !important",
                      sm: "center !important",
                      xs: "center",
                    },
                    marginTop: { xs: "20px", md: "0px", sm: "20px" },
                    alignItems: "center",
                    marginLeft: { xs: "0", md: "10px" },
                    padding: { xs: "10px 10px", xl: "20px 20px" },

                    gap: "0.4rem",
                  
                    borderRadius:"8px",
                    cursor:"pointer",
                    ":hover":{
                        color:"green",
                        
                        backgroundColor:"#e6e6e6"
                    }
                  }}
                  onClick={()=> navigate('our-portfolio')}
                >
                  <img src={VideoIcon} alt="See Our Work" />
                  See Our Work
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: { md: "start", xs: "center",},
                }}
              >
                <ScrollLink
                  activeClass="active"
                  to="testimonial" 
                  spy={true}
                  smooth={true}
                  offset={-50} 
                  duration={1000}
                  onSetActive={handleSetActive}
                >
                  <Typography
                    sx={{
                      marginBottom: "25px",
                      marginTop: { xs: "24px", xl: "58px" },
                      fontFamily: "satoshi",
                      fontSize: "22px",
                      cursor: "pointer", // Add cursor pointer for better UX
                      ":hover":{
                        color:"green"
                      }
                    }}
                  >
                    Check{" "}
                    <span
                      style={{
                        fontFamily: "satoshi",
                        fontSize: "22px",
                        textDecoration: "Underline",
                      }}
                    >
                      Reviews
                    </span>
                  </Typography>
                </ScrollLink>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: "53px", xl: "53px" },
                    textAlign: { xs: "center" },
                    width: { xs: "100%", md: "70%", lg: "100%" },
                    margin: { xs: "0 auto" },
                    flexWrap: { xs: "wrap" },
                    alignItems: "center",
                    flexDirection: { md: "row", sm: "column", xs: "column" },
                  }}
                >
                  <img
                    src={BannerReview1}
                    style={{ width: "174.48px", height: "82.45px" }}
                  />
                  <img
                    src={BannerReview3}
                    style={{ width: "81.23px", height: "70.08px" }}
                  />
                  <img
                    src={BannerReview2}
                    style={{ width: "136.88px", height: "66.7px" }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              className="bannerImage"
              sx={{
                
                flexBasis: { xs: "100%", md: "47%", xl: "50%" },
                textAlign: { xs: "center", md: "right" },
                marginTop: { xs: "20px", md: "0" },
                marginRight: { xl: "-10px", lg: "-0px", xs: "-0px" },
                // width: {md:'857px', sm:"300px"},
                width: "100%",
                flexShrink: "2",
                // maxHeight: "730px",

                height: "100%",
                display:"flex",
                alignItems:"bottom",
               
             
              }}
            >
              <img
                src={HeroImage}
                alt="Banner"
                style={{
                  width: "100%",
                  height: "", // Make sure the image covers the entire height
                  objectPosition: "bottom", // Adjust the position to align image as needed
                  // border:"2px solid red",
                  // objectFit:"contain"
                }}
              />
            </Box>
          </Box>
        ) : (
          <>
            <Typography
              sx={{
                fontFamily: "Lato",
                textDecoration: "none",
                display: "flex",
                maxWidth: "1524px",
                margin: "0 auto",
                color: "#1E1E1E",
                fontSize: "19px",
                paddingBottom: "6px",
                mt: { xl: "-10px", md: "-70px" },
                
              }}
            >
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  fontSize: "19px",
                  fontWeight: 400,
                }}
              >
                Home
              </Link>
              <Typography
                sx={{
                  paddingLeft: "10px",
                  textTransform: "capitalize",
                  color: "#1E1E1E",
                  fontSize: "19px",
                }}
              >{`/ ${location.pathname
                .split("-")
                .join(" ")
                .slice(1)}`}</Typography>
            </Typography>

            <Typography
              sx={{
                paddingBottom: "102px",
                fontFamily: "satoshi-light",
                fontSize: "50px",
                fontWeight: 400,
                maxWidth: "1524px",
                margin: "0 auto",
              }}
            >
              {blackText}{" "}
              <span
                style={{
                  fontSize: "50px",
                  color: "#FFC800",
                }}
              >
                {yellowText}
              </span>
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={{
          // border:"2px solid red",
          maxWidth: "1540px",
          margin: "auto",
          p: { md: "10px 50px", xs: "10px 30px" },
        }}
      >
        <Outlet context={{ setYellowText, setBlackText }} />
      </Box>
      <Footer />
    </>
  );
}

export default LayoutOne;
