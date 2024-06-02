import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};
function AuthModal({ open, handleClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const hanldeNavigate = () => {
    const path = location.pathname === "/signup" ? "/signin" : "signup";
    navigate(path);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <h1 className="text-center font-bold text-3xl pb-10">
                {location.pathname === "/signup"
                  ? "Tạo tài khoản mới"
                  : "Đăng nhập"}
              </h1>
              {location.pathname === "/signup" ? (
                <SignupForm />
              ) : (
                <SigninForm />
              )}
              <h1 className="text-center py-5 font-semibold text-gray-500 text-lg">
                {location.pathname === "/signup"
                  ? "Bạn đã có tài khoản"
                  : "Nếu bạn chưa có tài khoản"}
              </h1>
              <Button
                fullWidth
                variant="outlined"
                onClick={hanldeNavigate}
                sx={{
                  borderRadius: "30px",
                  py: "15px",
                }}
              >
                {location.pathname === "/signup" ? "Đăng nhập" : "Đăng kí"}
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default AuthModal;
