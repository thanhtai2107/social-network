import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import RepeatIcon from "@mui/icons-material/Repeat";
import ReplyModal from "./ReplyModal";

function Card() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openReply, setOpenReply] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenReply = () => setOpenReply(true);
  const handleCloseReply = () => setOpenReply(false);
  const handleRepeat = () => {};
  const handleLike = () => {};
  return (
    <>
      <div className="flex space-x-5 bg-white rounded-2xl mt-5 p-5">
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt="user-img"
          src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
          className="cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 cursor-pointer items-center">
              <span className="font-semibold text-lg">Developer</span>
              <span className="text-gray-600">@developer . 2m</span>
              <img
                src="https://cdn-icons-png.freepik.com/512/8358/8358886.png"
                alt=""
                className="w-5 h-5 "
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon sx={{ color: "black" }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Xóa</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mb-2">
            <p className="mb-2">Newfeed example</p>
            <img
              className="w-[28rem] rounded-md"
              src="https://bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <div
              className={`${
                true ? "text-gray-600" : "text-red-600"
              } flex space-x-1 items-center hover:text-red-600`}
            >
              {true ? (
                <FavoriteBorderIcon
                  className="cursor-pointer"
                  onClick={handleLike}
                />
              ) : (
                <FavoriteIcon className="cursor-pointer" />
              )}

              <p>100</p>
            </div>
            <div className="flex space-x-1 items-center text-gray-600 hover:text-blue-500">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                onClick={handleOpenReply}
              />
              <p>100</p>
            </div>
            <div
              className={`${
                true ? "text-gray-600" : "text-green-600"
              } flex space-x-1 items-center hover:text-green-500`}
            >
              <RepeatIcon className="cursor-pointer" onClick={handleRepeat} />
              <p>100</p>
            </div>
            <div className="flex space-x-1 items-center text-gray-600 hover:text-blue-500">
              <BarChartIcon className="cursor-pointer" />
              <p>100</p>
            </div>
            <div className="flex space-x-1 items-center text-gray-600 hover:text-blue-500">
              <FileUploadIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReplyModal open={openReply} handleClose={handleCloseReply} />
      </div>
    </>
  );
}

export default Card;
