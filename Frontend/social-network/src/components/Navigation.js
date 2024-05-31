import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VerifiedIcon from "@mui/icons-material/Verified";

const navMenu = [
  {
    title: "Trang chủ",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Khám phá",
    icon: <ExploreIcon />,
    path: "/explore",
  },
  {
    title: "Thông báo",
    icon: <NotificationsIcon />,
    path: "/notification",
  },
  {
    title: "Cộng đồng",
    icon: <PeopleIcon />,
    path: "/community",
  },
  {
    title: "Xác thực",
    icon: <VerifiedIcon />,
    path: "/verified",
  },
  {
    title: "Thông tin cá nhân",
    icon: <AccountBoxIcon />,
    path: "/profile",
  },
];

function Navigation() {
  return (
    <>
      <div className="h-screen  top-0">
        <div className="space-y-6">
          {navMenu.map((item) => {
            return (
              <div
                key={item.title}
                className="flex space-x-3 cursor-pointer items-center ml-28 pl-2"
              >
                {item.icon}
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navigation;
