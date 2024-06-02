import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import * as React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/Action";

function Navbar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };
  return (
    <>
      <div className="flex justify-around bg-white h-20 items-center rounded-t-3xl sticky top-0 z-10">
        <svg
          width="170"
          height="35"
          viewBox="0 0 242 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_3)">
            <path
              d="M16.625 2.41C19.955 2.41 22.865 3.07 25.355 4.39C27.845 5.71 29.765 7.57 31.115 9.97C32.495 12.34 33.185 15.085 33.185 18.205C33.185 21.295 32.495 24.04 31.115 26.44C29.765 28.84 27.83 30.7 25.31 32.02C22.82 33.34 19.925 34 16.625 34H4.79V2.41H16.625ZM16.13 27.34C19.04 27.34 21.305 26.545 22.925 24.955C24.545 23.365 25.355 21.115 25.355 18.205C25.355 15.295 24.545 13.03 22.925 11.41C21.305 9.79 19.04 8.98 16.13 8.98H12.485V27.34H16.13Z"
              fill="#285BE6"
            />
            <path
              d="M61.1553 21.04C61.1553 21.76 61.1103 22.51 61.0203 23.29H43.6053C43.7253 24.85 44.2203 26.05 45.0903 26.89C45.9903 27.7 47.0853 28.105 48.3753 28.105C50.2953 28.105 51.6303 27.295 52.3803 25.675H60.5703C60.1503 27.325 59.3853 28.81 58.2753 30.13C57.1953 31.45 55.8303 32.485 54.1803 33.235C52.5303 33.985 50.6853 34.36 48.6453 34.36C46.1853 34.36 43.9953 33.835 42.0753 32.785C40.1553 31.735 38.6553 30.235 37.5753 28.285C36.4953 26.335 35.9553 24.055 35.9553 21.445C35.9553 18.835 36.4803 16.555 37.5303 14.605C38.6103 12.655 40.1103 11.155 42.0303 10.105C43.9503 9.055 46.1553 8.53 48.6453 8.53C51.0753 8.53 53.2353 9.04 55.1253 10.06C57.0153 11.08 58.4853 12.535 59.5353 14.425C60.6153 16.315 61.1553 18.52 61.1553 21.04ZM53.2803 19.015C53.2803 17.695 52.8303 16.645 51.9303 15.865C51.0303 15.085 49.9053 14.695 48.5553 14.695C47.2653 14.695 46.1703 15.07 45.2703 15.82C44.4003 16.57 43.8603 17.635 43.6503 19.015H53.2803ZM76.5098 26.8L81.9548 8.89H90.1448L81.2348 34H71.7398L62.8298 8.89H71.0648L76.5098 26.8ZM104.814 34.36C102.354 34.36 100.134 33.835 98.1538 32.785C96.2038 31.735 94.6588 30.235 93.5188 28.285C92.4088 26.335 91.8538 24.055 91.8538 21.445C91.8538 18.865 92.4238 16.6 93.5637 14.65C94.7038 12.67 96.2638 11.155 98.2438 10.105C100.224 9.055 102.444 8.53 104.904 8.53C107.364 8.53 109.584 9.055 111.564 10.105C113.544 11.155 115.104 12.67 116.244 14.65C117.384 16.6 117.954 18.865 117.954 21.445C117.954 24.025 117.369 26.305 116.199 28.285C115.059 30.235 113.484 31.735 111.474 32.785C109.494 33.835 107.274 34.36 104.814 34.36ZM104.814 27.7C106.284 27.7 107.529 27.16 108.549 26.08C109.599 25 110.124 23.455 110.124 21.445C110.124 19.435 109.614 17.89 108.594 16.81C107.604 15.73 106.374 15.19 104.904 15.19C103.404 15.19 102.159 15.73 101.169 16.81C100.179 17.86 99.6838 19.405 99.6838 21.445C99.6838 23.455 100.164 25 101.124 26.08C102.114 27.16 103.344 27.7 104.814 27.7ZM129.731 0.7V34H122.036V0.7H129.731ZM146.738 34.36C144.278 34.36 142.058 33.835 140.078 32.785C138.128 31.735 136.583 30.235 135.443 28.285C134.333 26.335 133.778 24.055 133.778 21.445C133.778 18.865 134.348 16.6 135.488 14.65C136.628 12.67 138.188 11.155 140.168 10.105C142.148 9.055 144.368 8.53 146.828 8.53C149.288 8.53 151.508 9.055 153.488 10.105C155.468 11.155 157.028 12.67 158.168 14.65C159.308 16.6 159.878 18.865 159.878 21.445C159.878 24.025 159.293 26.305 158.123 28.285C156.983 30.235 155.408 31.735 153.398 32.785C151.418 33.835 149.198 34.36 146.738 34.36ZM146.738 27.7C148.208 27.7 149.453 27.16 150.473 26.08C151.523 25 152.048 23.455 152.048 21.445C152.048 19.435 151.538 17.89 150.518 16.81C149.528 15.73 148.298 15.19 146.828 15.19C145.328 15.19 144.083 15.73 143.093 16.81C142.103 17.86 141.608 19.405 141.608 21.445C141.608 23.455 142.088 25 143.048 26.08C144.038 27.16 145.268 27.7 146.738 27.7ZM171.655 12.445C172.405 11.275 173.44 10.33 174.76 9.61C176.08 8.89 177.625 8.53 179.395 8.53C181.465 8.53 183.34 9.055 185.02 10.105C186.7 11.155 188.02 12.655 188.98 14.605C189.97 16.555 190.465 18.82 190.465 21.4C190.465 23.98 189.97 26.26 188.98 28.24C188.02 30.19 186.7 31.705 185.02 32.785C183.34 33.835 181.465 34.36 179.395 34.36C177.655 34.36 176.11 34 174.76 33.28C173.44 32.56 172.405 31.63 171.655 30.49V45.97H163.96V8.89H171.655V12.445ZM182.635 21.4C182.635 19.48 182.095 17.98 181.015 16.9C179.965 15.79 178.66 15.235 177.1 15.235C175.57 15.235 174.265 15.79 173.185 16.9C172.135 18.01 171.61 19.525 171.61 21.445C171.61 23.365 172.135 24.88 173.185 25.99C174.265 27.1 175.57 27.655 177.1 27.655C178.63 27.655 179.935 27.1 181.015 25.99C182.095 24.85 182.635 23.32 182.635 21.4ZM218.172 21.04C218.172 21.76 218.127 22.51 218.037 23.29H200.622C200.742 24.85 201.237 26.05 202.107 26.89C203.007 27.7 204.102 28.105 205.392 28.105C207.312 28.105 208.647 27.295 209.397 25.675H217.587C217.167 27.325 216.402 28.81 215.292 30.13C214.212 31.45 212.847 32.485 211.197 33.235C209.547 33.985 207.702 34.36 205.662 34.36C203.202 34.36 201.012 33.835 199.092 32.785C197.172 31.735 195.672 30.235 194.592 28.285C193.512 26.335 192.972 24.055 192.972 21.445C192.972 18.835 193.497 16.555 194.547 14.605C195.627 12.655 197.127 11.155 199.047 10.105C200.967 9.055 203.172 8.53 205.662 8.53C208.092 8.53 210.252 9.04 212.142 10.06C214.032 11.08 215.502 12.535 216.552 14.425C217.632 16.315 218.172 18.52 218.172 21.04ZM210.297 19.015C210.297 17.695 209.847 16.645 208.947 15.865C208.047 15.085 206.922 14.695 205.572 14.695C204.282 14.695 203.187 15.07 202.287 15.82C201.417 16.57 200.877 17.635 200.667 19.015H210.297ZM229.926 13.075C230.826 11.695 231.951 10.615 233.301 9.835C234.651 9.025 236.151 8.62 237.801 8.62V16.765H235.686C233.766 16.765 232.326 17.185 231.366 18.025C230.406 18.835 229.926 20.275 229.926 22.345V34H222.231V8.89H229.926V13.075Z"
              fill="#070707"
              fillOpacity="0.99"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_3"
              x="0.789993"
              y="0.699997"
              width="241.011"
              height="53.27"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_3"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_3"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="border-2 w-96 h-9 flex items-center rounded-3xl px-3 space-x-1">
          <SearchIcon fontSize="small" className="text-gray-500" />
          <input
            placeholder="Tìm kiếm bạn bè..."
            type="text"
            className="outline-none w-full font-normal text-base"
          />
        </div>
        <div className="flex  items-center">
          <Brightness6Icon className="cursor-pointer" />
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 30, height: 30 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              Thông tin cá nhân
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Đăng xuất
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Navbar;
