import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useState } from "react";
import Card from "./Card";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Vui lòng nhập trạng thái của bạn"),
});

function NewFeeds() {
  const [uploadingImg, setUploadingImg] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const handleSubmit = (values) => {
    console.log("value", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
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
        <section>
          <div className="bg-white rounded-2xl py-5 px-9 h-36 flex items-center">
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="flex space-x-4 w-full mb-3">
                <Avatar
                  alt="user-img"
                  src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid"
                />
                <input
                  type="text"
                  name="content"
                  placeholder="Bạn đang nghĩ gì?"
                  className="outline-none bg-[#F7F7F7] rounded-3xl w-full px-4"
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
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
                    width: "20%",
                    borderRadius: "20px",
                    textTransform: "none",
                    fontWeight: "600",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Đăng
                </Button>
              </div>
            </form>
          </div>
        </section>
        <section>
          {[1, 1, 1, 1].map((item) => (
            <Card />
          ))}
        </section>
      </div>
    </>
  );
}

export default NewFeeds;
