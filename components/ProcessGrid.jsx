import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ProcessGrid() {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Stack direction="column">
        <Stack direction={{ md: "row", xs: "column" }}>
          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%" },
              minHeight: "500px",
              borderRight: { md: "none", xs: "1px solid #405E6B " },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/consult.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    01
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Free Consultation
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  We start with an in-depth, complimentary consultation to
                  understand your unique business goals and requirements. This
                  step allows us to offer tailored recommendations for your
                  project, ensuring alignment with your vision.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #405E6B",
              borderRight: { md: "none", xs: "1px solid #405E6B " },

              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/proposal.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    02
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Proposal & Agreement{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  Once we've gathered all the necessary information, we prepare
                  a detailed proposal outlining the project's scope, timelines,
                  costs, and deliverables. Upon approval, we proceed with the
                  agreement to kick-start the project
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/planning.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    03
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Project Planning{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  Here, we develop a project roadmap that includes timelines,
                  milestones, and responsibilities. Our team ensures that each
                  stage of the project is aligned with your goals, and we
                  provide regular updates to keep you informed.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Stack direction={{ md: "row", xs: "column" }}>
          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%" },
              minHeight: "500px",
              borderRight: { md: "none", xs: "1px solid #405E6B " },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/design.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    04
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Design and Prototyping{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  During this stage, we create visual mockups and prototypes to
                  give you a feel of what the final product will look like. This
                  is a collaborative phase where your feedback is crucial,
                  ensuring that the design fits your expectations before moving
                  into development.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #405E6B",
              borderRight: { md: "none", xs: "1px solid #405E6B " },

              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/development.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    05
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Development{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  Our team of developers starts bringing your vision to life by
                  building the product according to the approved design and
                  specifications. We adopt the latest technologies and follow
                  industry best practices to ensure that the final output is
                  both robust and scalable.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/quality.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    06
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Quality Assurance{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  Before launching, we rigorously test the product to ensure
                  that it is free of bugs and performs optimally under different
                  conditions. We ensure that the product meets your requirements
                  and industry standards.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Stack direction={{ md: "row", xs: "column" }}>
          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%" },
              minHeight: "500px",
              borderRight: { md: "none", xs: "1px solid #405E6B " },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/review.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    07
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Client Review{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  At this stage, the product is presented to you for review. Any
                  final tweaks or adjustments are made based on your feedback,
                  ensuring everything is aligned with the initial vision.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              border: "1px solid #405E6B",
              borderRight: { md: "none", xs: "1px solid #405E6B " },

              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/payment.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    08
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Payment Processing{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  Once the product has been approved, we finalize the payment.
                  We offer flexible payment terms to ensure the process is
                  convenient for you.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              border: "1px solid #405E6B",
              width: { md: "33.33%", xs: "100%", minHeight: "350px" },
            }}
          >
            <Box sx={{ padding: "15px 40px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton>
                  <Image
                    src="/img/deployment.png"
                    alt="service"
                    width={80}
                    height={80}
                    style={{ padding: "8px" }}
                  />
                </IconButton>
                <Box>
                  <Typography
                    sx={{ fontSize: "3em", color: "gray", opacity: ".5" }}
                  >
                    09
                  </Typography>
                </Box>
              </Stack>

              {/* content */}
              <Stack direction="column" justifyContent="between">
                <Typography
                  sx={{ color: "white", fontSize: "2.5em", fontWeight: "700" }}
                >
                  Deployment & Support{" "}
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    fontWeight: "500",
                    marginTop: "40px",
                  }}
                >
                  After final approval and payment, we deploy the product to the
                  live environment, ensuring a seamless transition. We also
                  offer post-launch support, handling any updates or maintenance
                  needs that may arise.
                </Typography>
                <Typography
                  sx={{
                    color: "#9EA9AF",
                    marginTop: "40px",
                    cursor: "pointer",
                    fontSize: "1.5em",
                  }}
                >
                  Read More
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
