import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SubcriptionModal from "./SubcriptionModal";
import { useState } from "react";

function RightPart() {
  const navigate = useNavigate();
  const [openSub, setOpenReply] = useState(false);
  const handleOpenSub = () => setOpenReply(true);
  const handleCloseSub = () => setOpenReply(false);
  return (
    <>
      <div className="ml-7 border-[1px] rounded-xl h-36 p-4 bg-white">
        <h1 className="font-bold text-xl mb-1">Xác thực tài khoản</h1>
        <h1 className="text-gray-600 mb-3">
          Đăng kí để mở khóa nhiều tính năng hơn
        </h1>
        <Button
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: "600",
          }}
          variant="contained"
          type="submit"
          onClick={handleOpenSub}
        >
          Đăng kí
        </Button>
      </div>

      <hr className="mt-5 ml-7" />
      <div className="ml-10 mt-5">
        <h1 className="font-bold">Đang theo dõi</h1>
        <div className="flex-col space-y-3 ml-3 mt-4">
          {[1, 1, 1, 1, 1].map((item) => (
            <div className="flex space-x-2 items-center cursor-pointer">
              <Avatar
                sx={{ width: 25, height: 25 }}
                alt="user-img"
                src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
                className="cursor-pointer"
                onClick={() => navigate("/profile")}
              />
              <p className="font-medium hover:text-blue-500">Developer 1</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <SubcriptionModal open={openSub} handleClose={handleCloseSub} />
      </div>
    </>
  );
}

export default RightPart;
