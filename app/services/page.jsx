import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { websolution } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const page = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={false} // Disable centering to allow part of a slide to show
      autoplay={{
        delay: 4000, // Increase delay for slower transitions
        disableOnInteraction: false,
      }}
      slidesPerView={3} // Show 3.5 slides
      // loop={true} // Enable looping
      speed={1000} // Slower transition speed
      modules={[Autoplay]}
      style={{ marginTop: "15px" }}
    >
      {websolution.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              padding: "1px",
              width: "360px",
              height: "500px",
              position: "relative", // Required for the pseudo-element positioning
              backgroundImage: "url(/img/service.png)",
              borderRadius: "15px",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "15px", // Same as the box
                padding: "0.5px", // Adjust the padding to control the border thickness
                background: "linear-gradient(45deg, #f47421, #00ccff)", // Gradient color for border
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Mask to show gradient border
                WebkitMaskComposite: "xor", // For Webkit browsers
                maskComposite: "exclude", // For other browsers
              },
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{ height: "100%" }}
            >
              <Box sx={{ padding: "15px 15px" }}>
                <IconButton
                  sx={{
                    background: "#F9F9F9",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "50px", // Same as the box
                      padding: "1.3px", // Adjust the padding to control the border thickness
                      background: "linear-gradient(45deg, #f47421, #00ccff)", // Gradient color for border
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Mask to show gradient border
                      WebkitMaskComposite: "xor", // For Webkit browsers
                      maskComposite: "exclude", // For other browsers
                    },
                  }}
                >
                  <Image
                    src="/img/serviceIcon.png"
                    alt="service"
                    width={40}
                    height={40}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box sx={{ marginTop: "15px" }}>
                  <Typography
                    sx={{
                      fontSize: "2.5em",
                      fontWeight: "700",
                      lineHeight: "50px",
                      color: "#003b55",
                    }}
                  >
                    {item?.title}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#999",
                      fontSize: "15px",
                      marginTop: "15px",
                    }}
                  >
                    {item?.content}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ padding: "15px 15px" }}>
                <Stack
                  justifyContent="space-between"
                  direction="row"
                  sx={{ cursor: "pointer" }}
                >
                  <div></div>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      // borderRadius: "10px",
                      padding: "10px 15px",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "50px", // Same as the box
                        padding: "1.3px", // Adjust the padding to control the border thickness
                        background: "linear-gradient(45deg, #00ccff, #f47421)", // Gradient color for border
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Mask to show gradient border
                        WebkitMaskComposite: "xor", // For Webkit browsers
                        maskComposite: "exclude", // For other browsers
                      },
                    }}
                  >
                    <Typography sx={{ marginRight: "10px" }}>
                      Start a project
                    </Typography>
                    <IconButton
                      sx={{
                        border: "0.5px solid black",
                        padding: "5px",
                      }}
                    >
                      <Image
                        src="/img/arrow.png"
                        alt="arrow"
                        width={15}
                        height={15}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default page;
