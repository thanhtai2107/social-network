import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

function ProfileModal({ handleOpen, handleClose }) {
  const [uploadingBgImg, setUploadingBgImg] = useState(false);

  const handleSubmit = () => {};

  const formik = useFormik({
    initialValues: {
      fullname: "",
      bio: "",
      location: "",
      backgroundImg: "",
      img: "",
    },
    onSubmit: handleSubmit,
  });

  const handleBgImgChange = (event) => {
    setUploadingBgImg(true);
    const { name } = event.target;
    const file = event.target.files[0];
    formik.setFieldValue(name, file);
    setUploadingBgImg(false);
  };
  return (
    <>
      <div>
        <Modal
          open={handleOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <IconButton onClick={handleClose} aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                  <p className="font-semibold text-xl"> Chỉnh sửa</p>
                </div>
                <Button
                  sx={{ borderRadius: "20px" }}
                  variant="contained"
                  type="submit"
                >
                  Lưu
                </Button>
              </div>
              <div className="hidden-scroll-bar overflow-y-scroll overflow-x-hidden h-[70vh] p-3">
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://i0.wp.com/nftartwithlauren.com/wp-content/uploads/2024/01/laurenmcdonaghpereiraphoto_A_field_of_lavender_with_a_soft_su_645ac3bc-37ff-4eb0-8a8b-4d20c9c58037_1.png?fit=1024%2C574&ssl=1"
                      alt=""
                    />
                    <input
                      type="file"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleBgImgChange}
                      name="bgImg"
                    />
                  </div>
                  <div className="transform -translate-y-16 pl-7">
                    <div className="relative">
                      <Avatar
                        sx={{
                          width: "8rem",
                          height: "8rem",
                          border: "4px solid white",
                        }}
                        alt=""
                        src="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg"
                      />
                      <input
                        type="file"
                        className="absolute top-0 left-0 cursor-pointer w-[8rem] h-full opacity-0"
                        onChange={handleBgImgChange}
                        name="img"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <TextField
                      fullWidth
                      id="fullname"
                      name="fullname"
                      label="Tên"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.fullname &&
                        Boolean(formik.errors.fullname)
                      }
                      helperText={
                        formik.touched.fullname && formik.errors.fullname
                      }
                    />
                    <TextField
                      fullWidth
                      id="bio"
                      name="bio"
                      label="Tiểu sử"
                      multiline
                      rows={4}
                      value={formik.values.bio}
                      onChange={formik.handleChange}
                      error={formik.touched.bio && Boolean(formik.errors.bio)}
                      helperText={formik.touched.bio && formik.errors.bio}
                    />
                    <TextField
                      fullWidth
                      id="location"
                      name="location"
                      label="Vị trí"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default ProfileModal;
