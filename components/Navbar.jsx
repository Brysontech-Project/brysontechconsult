"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const pages = [
  "Startups",
  "Bussinesses",
  "How we work",
  "works",
  "blogs",
  "Learn More",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Stack
        className="responsive"
        sx={{
          display: { md: "flex", xs: "none" },
        }}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Box sx={{ display: "flex" }}>
          <div className="addressDetail">
            <Image width={20} height={20} src="/icon/mail.png" />
            <a
              style={{
                color: "white",
                fontSize: "0.8em",
                paddingLeft: "5px",
              }}
            >
              support@brysontech.io
            </a>
          </div>
          <div className="addressDetail addressDetail-2">
            <Image width={20} height={20} src="/icon/pin.png" />
            <a
              style={{
                color: "white",
                fontSize: "0.8em",
                paddingLeft: "5px",
              }}
            >
              423 Cornell Avon Park, US
            </a>
          </div>
        </Box>
        <Stack direction="row" spacing={2}>
          <Image width={20} height={20} src="/icon/twitter.png" />
          <Image width={20} height={20} src="/icon/instagram.png" />
          <Image width={20} height={20} src="/icon/facebook.png" />
        </Stack>
      </Stack>
      <AppBar
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "none",
          borderBottom: "0.2px solid #e4e6e7",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ height: "35px" }}>
              <img
                src="/img/logo.png"
                alt="brysontech logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                visibility: "hidden",
              }}
            >
              LOGO
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              // justifyContent="space-around"
              sx={{
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
                // margin: { md: "0px 100px", sm: "0px 50px" },
              }}
            >
              {pages.map((page) => (
                <a
                  key={page}
                  href="#"
                  onClick={handleCloseNavMenu}
                  style={{
                    my: 2,
                  }}
                  className="nav_links"
                >
                  {page}
                </a>
              ))}
            </Stack>
            <Box sx={{ flexGrow: 0, display: { md: "block", xs: "none" } }}>
              <a
                style={{
                  border: "2px solid orange",
                  padding: "8px 10px",
                  background: "#ff7400",
                  color: "white",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Start a project
              </a>
            </Box>
            <Box sx={{ flexGrow: 0, display: { md: "none", xs: "block" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
