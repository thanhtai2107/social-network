import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "./Card";

function Profile() {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleOpenEditProfile = () => {};
  return (
    <>
      <div>
        <section className="flex items-center z-50">
          <KeyboardBackspaceIcon onClick={handleBack} />
          <h1 className="text-xl font-bold py-5 ml-5 opacity-90">Developer</h1>
        </section>
        <section>
          <img
            src="https://i0.wp.com/nftartwithlauren.com/wp-content/uploads/2024/01/laurenmcdonaghpereiraphoto_A_field_of_lavender_with_a_soft_su_645ac3bc-37ff-4eb0-8a8b-4d20c9c58037_1.png?fit=1024%2C574&ssl=1"
            alt=""
            className="w-full h-60 object-cover"
          />
        </section>
        <section className="pl-6">
          <div className="flex justify-between items-start mt-5 h-20">
            <Avatar
              className="-translate-y-[6.5rem]"
              sx={{
                width: "10rem",
                height: "10rem",
                border: "4px solid white",
              }}
              alt=""
              src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg"
            />
            {true ? (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: "600",
                }}
                onClick={handleOpenEditProfile}
              >
                Chỉnh sửa
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: "600",
                }}
                onClick={handleOpenEditProfile}
              >
                {true ? "Theo dõi" : "Bỏ theo dõi"}
              </Button>
            )}
          </div>
          <div className="flex-col">
            <div className="flex items-center">
              <h1 className="font-bold text-lg">Developer</h1>
              {true && (
                <img
                  src="https://cdn-icons-png.freepik.com/512/8358/8358886.png"
                  alt=""
                  className="ml-2 w-5 h-5 "
                />
              )}
            </div>
            <h1 className="text-gray-600">@developer</h1>
          </div>
          <div className="mt-1 space-y-3">
            <p className="p-0">Xin chào tất cả các bạn</p>
            <div className="flex space-x-3">
              <div className="flex space-x-1 text-gray-600">
                <BusinessCenterIcon />
                <span>Sinh viên</span>
              </div>
              <div className="flex space-x-1 text-gray-600">
                <LocationOnIcon />
                <span>VietNam</span>
              </div>
              <div className="flex space-x-1 text-gray-600">
                <CalendarMonthIcon />
                <span>Tham gia 07-2024</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <p>
                <b>1</b>
                <span className="text-gray-600"> Đang theo dõi</span>
              </p>
              <p>
                <b>0</b>
                <span className="text-gray-600"> Người theo dõi</span>
              </p>
            </div>
          </div>
        </section>
        <section className="py-5 pl-6">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Bài viết" value="1" />
                  <Tab label="Ảnh/Video" value="2" />
                  <Tab label="Bình luận" value="3" />
                  <Tab label="Thích" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {[1, 1, 1, 1].map((item) => (
                  <Card />
                ))}
              </TabPanel>
              <TabPanel value="2">Ảnh/Video</TabPanel>
              <TabPanel value="3">Bình luận</TabPanel>
              <TabPanel value="4">Thích</TabPanel>
            </TabContext>
          </Box>
        </section>
      </div>
    </>
  );
}

export default Profile;
