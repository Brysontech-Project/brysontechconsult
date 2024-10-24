"use client";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { websolution } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import ProcessGrid from "@/components/ProcessGrid";

const page = () => {
  return (
    <>
      {/* Header section */}
      <div
        style={{
          // backgroundImage: "url(/img/background.png)",
          backgroundColor: "#f0f0f0", // Fallback if the image is unavailable
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center",
          height: "100%", // Example to fill the full viewport height
          paddingBottom: "50px",
        }}
      >
        <Navbar />
        <Stack
          direction={{ md: "row", xs: "column" }}
          sx={{
            height: "100%",
            padding: { xs: "0px 15px" },
            marginTop: { xs: "20px" },
          }}
        >
          <Box
            sx={{
              // height: "100%",
              width: { md: "50%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: { md: "start", xs: "center" },
              justifyContent: { md: "start", xs: "flex-start" },
              padding: { md: "0px 50px", xs: "0px" },
            }}
          >
            <div style={{ width: "100%" }}>
              <h3
                style={{
                  fontWeight: "800",
                  fontSize: "3em",
                  color: "#003b55",
                  width: "100%",
                }}
              >
                With creativity we provide feasible and profitable digital
                solutions for your bussiness needs.
              </h3>
              <h4 style={{ fontWeight: "400", color: "#999", width: "100%" }}>
                We work with individuals, projects and brands who are committed
                to moving things forward through vision, action and leadership.
              </h4>
              <Stack
                sx={{
                  // width: { md: "50%", xs: "100%" },
                  marginTop: "20px",
                }}
                direction="row"
              >
                <Button
                  text="About Us"
                  to="/about-us"
                  type="blank"
                  _style={{ borderRadius: "50px" }}
                  image="/img/person.png"
                />
                <Button
                  text="Book a Call"
                  to="/call-us"
                  _style={{ marginLeft: "10px", borderRadius: "50px" }}
                  image="/img/calling.png"
                />
              </Stack>
            </div>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: { md: "flex", xs: "none" },
              padding: "0px 50px",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/img/bannersvg.png"
                alt="bannersvg"
                style={{ width: "70%" }}
              />
            </div>
          </Box>
        </Stack>
      </div>
      {/* service section */}
      <Box sx={{ padding: { md: "20px 70px", xs: "20px 15px" } }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "700",
            color: "#003b55",
          }}
        >
          Our Services
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{
                width: "45px",
                height: "3px",
                background: "orange",
                marginRight: "7px",
              }}
            ></Box>{" "}
            <Typography
              sx={{ fontWeight: "600", color: "#003b55", fontSize: "1.5em" }}
            >
              Tech Solutions
            </Typography>
          </Box>

          <Stack
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: "20px" }}
          >
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
                      src="/img/web.png"
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
                      Web Solutions
                    </Typography>
                    <Typography
                      sx={{
                        color: "#999",
                        fontSize: "15px",
                        marginTop: "15px",
                      }}
                    >
                      At Brysontech, our Web Solutions are designed to help
                      businesses thrive in the digital space. From sleek
                      e-commerce platforms to dynamic web applications, we build
                      scalable, secure, and high-performance websites tailored
                      to meet your business needs.
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
                          background:
                            "linear-gradient(45deg, #00ccff, #f47421)", // Gradient color for border
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

            <Box
              sx={{
                marginTop: { md: "0", xs: "15px" },
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
                      src="/img/mobile.png"
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
                      Mobile App Solutions
                    </Typography>
                    <Typography
                      sx={{
                        color: "#999",
                        fontSize: "15px",
                        marginTop: "15px",
                      }}
                    >
                      In today’s mobile-driven world, having a strong mobile
                      presence is essential. Our Mobile Solutions provide
                      businesses with the tools to engage customers through
                      powerful, intuitive, and user-friendly mobile
                      applications.
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
                          background:
                            "linear-gradient(45deg, #00ccff, #f47421)", // Gradient color for border
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

            <Box
              sx={{
                marginTop: { md: "0", xs: "15px" },

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
                      src="/img/automation.png"
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
                      Automation{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#999",
                        fontSize: "15px",
                        marginTop: "15px",
                      }}
                    >
                      Our automation services are designed to streamline your
                      business operations and improve efficiency. We build and
                      deploy custom Telegram bots, Discord bots, and general bot
                      applications that automate communication, data retrieval,
                      and workflows.{" "}
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
                          background:
                            "linear-gradient(45deg, #00ccff, #f47421)", // Gradient color for border
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
          </Stack>
        </Box>
      </Box>
      {/* Our process */}

      <Box
        className="layout"
        sx={{
          // padding: {
          //   md: "20px 70px",
          //   xs: "20px 15px",
          // },
          background: "#003b55",
          minHeight: "100vh",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "700",
            color: "white",
          }}
        >
          Our Process
        </Typography>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
          sx={{ marginTop: "15px" }}
        >
          <Box
            sx={{
              width: {
                md: "50%",
                xs: "100%",
                borderLeft: "3px solid orange",
                paddingLeft: "5px",
              },
            }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: "3em",
                fontWeight: "800",
                color: "white",
                lineHeight: { md: "1.5", xs: "1" },
              }}
            >
              Helping you achieve your bussiness goals
            </Typography>
          </Box>

          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              marginTop: { md: "0", xs: "15px" },
              display: "flex",
              alignItems: "end",
              justifyContent: { md: "end", xs: "start" },
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "start",
                width: "70%",
              }}
            >
              At Brysontech, we believe in delivering exceptional solutions
              through a clear and structured process that ensures transparency,
              efficiency, and quality.
            </Typography>
          </Box>
        </Stack>
        <ProcessGrid />
      </Box>

      {/* About us */}
      <Box
        className="layout"
        sx={{
          // padding: {
          //   md: "20px 70px",
          //   xs: "20px 15px",
          // },
          minHeight: "100vh",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "700",
          }}
        >
          About us{" "}
        </Typography>
      </Box>
    </>
  );
};

export default page;
