import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

function SubcriptionModal({ open, handleClose }) {
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
              <IconButton onClick={handleClose} aria-label="delete">
                <CloseIcon />
              </IconButton>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 border-[1px] rounded-xl p-5">
                <p className="text-lg font-semibold">
                  Người đăng kí sẽ nhận được dấu kiểm định sau khi được chấp
                  thuận.
                </p>
                <img
                  src="https://cdn-icons-png.freepik.com/512/8358/8358886.png"
                  alt=""
                  className="w-[4.5rem] h-[4.5rem]"
                />
              </div>
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: "600",
                  }}
                >
                  Xác thực
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default SubcriptionModal;
