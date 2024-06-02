import { Button, Grid } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navigate = useNavigate();
  const [openAuthForm, setOpenAuthForm] = useState(false);
  const handleOpenSigninForm = () => {
    navigate("/signin");
    setOpenAuthForm(true);
  };
  const handleOpenSignupForm = () => {
    navigate("/signup");

    setOpenAuthForm(true);
  };
  const handleCloseAuthForm = () => setOpenAuthForm(false);
  return (
    <>
      <Grid container>
        <Grid item lg={7}>
          <img
            className="h-screen w-full"
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlMTVfdGhpY2tfcGFpbnRfc3Ryb2tlX29uX2NhbnZhc19ibHVlXzVmNzBjOWQxLTRjOTktNDMwYy1hMGIxLTk0OTMxNzBlYTM0N18xLmpwZw.jpg"
            alt=""
          />
        </Grid>
        <Grid item lg={5}>
          <div className="px-10">
            <h1 className="font-bold text-6xl my-10">Tham gia ngay!</h1>
            <div className="w-[21rem]">
              <div className="w-full">
                <GoogleLogin width={330} />
                <p className="py-5 text-center ">OR</p>
                <Button
                  onClick={handleOpenSignupForm}
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                  }}
                >
                  Tạo tài khoản
                </Button>
                <p className="mt-2 text-gray-500">
                  Bằng cách đăng kí, bạn đông ý với điều khoản dịch vụ và chính
                  sách bảo mật
                </p>
              </div>
              <div className="mt-5">
                <h1 className="font-bold text-lg mb-3">Bạn đã có tài khoản?</h1>
                <Button
                  onClick={handleOpenSigninForm}
                  fullWidth
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "29px",
                    py: "7px",
                  }}
                >
                  Đăng nhập ngay
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <AuthModal open={openAuthForm} handleClose={handleCloseAuthForm} />
    </>
  );
}

export default Authentication;
