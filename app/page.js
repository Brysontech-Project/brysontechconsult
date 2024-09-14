import Navbar from "@/components/Navbar";
import { Box, Stack } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/img/background.png)",
          backgroundColor: "#f0f0f0", // Fallback if the image is unavailable
          backgroundSize: "cover", // Ensure the image covers the whole div
          backgroundPosition: "center",
          height: "100vh", // Example to fill the full viewport height
        }}
      >
        <Navbar />
        <Stack
          direction={{ md: "row", xs: "column" }}
          style={{ height: "89%" }}
        >
          <Box
            sx={{
              height: "100%",
              width: { md: "50%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0px 50px",
            }}
          >
            <h3
              style={{
                fontWeight: "800",
                fontSize: "3em",
                color: "#003b55",
              }}
            >
              With creativity we provide feasible and profitable digital
              solutions for your bussiness needs.
            </h3>
            <h4 style={{ fontWeight: "400", color: "#999" }}>
              We work with individuals, projects and brands who are committed to
              moving things forward through vision, action and leadership.
            </h4>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: { md: "flex", xs: "none" },
              padding: "0px 50px",
              alignItems: "center",
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
      <div>hii</div>
    </>
  );
};

export default page;
