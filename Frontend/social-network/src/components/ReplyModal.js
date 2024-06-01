import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Vui lòng nhập trạng thái của bạn"),
});

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

function ReplyModal({ open, handleClose }) {
  const navigate = useNavigate();
  const [uploadingImg, setUploadingImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleSubmit = (values) => {
    console.log("value", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      postId: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  const handleSelectImg = (event) => {
    setUploadingImg(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImg(imgUrl);
    setUploadingImg(false);
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
            <div className="relative">
              <IconButton
                className="!absolute top-0 right-0"
                onClick={handleClose}
                aria-label="delete"
              >
                <CloseIcon />
              </IconButton>
              <div className="flex space-x-5 bg-white rounded-2xl p-5">
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
                  </div>
                  <div className="mb-2">
                    <p className="mb-2">Newfeed example</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 h-36 flex items-center">
                <form onSubmit={formik.handleSubmit} className="w-full">
                  <div className="flex space-x-4 w-full mb-3">
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      alt="user-img"
                      src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
                      className="cursor-pointer"
                      onClick={() => navigate("/profile")}
                    />
                    <input
                      type="text"
                      name="content"
                      placeholder="Bình luận của bạn..."
                      className="outline-none bg-[#F7F7F7] rounded-3xl w-full px-4"
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <hr className="mb-3" />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 items-center">
                      <label className="cursor-pointer p-1 hover:bg-gray-100 rounded-xl flex items-center">
                        <ImageIcon className="text-[#1d9bf0]" />

                        <input
                          type="file"
                          name="imgFile"
                          className="hidden"
                          onChange={handleSelectImg}
                        />
                      </label>
                      <LocationOnIcon className="cursor-pointer text-[#1d9bf0]" />
                      <EmojiEmotionsIcon className="cursor-pointer text-[#1d9bf0]" />
                    </div>
                    <Button
                      sx={{
                        width: "25%",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: "600",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Bình luận
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default ReplyModal;
