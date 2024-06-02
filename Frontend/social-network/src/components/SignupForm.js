import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Chưa đúng định dạng email")
    .required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
});

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      dateOfBirth: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // const { day, month, year } = values.dateOfBirth;
      // const dayOfBirth = `${year}-${month}-${day}`;
      const dateOfBirth = values.dateOfBirth.$d.toLocaleDateString("en-CA");
      values.dateOfBirth = dateOfBirth;
      console.log("value", values);
    },
  });
  // const handleDateChange = (name) => (event) => {
  //   formik.setFieldValue("dateOfBirth", {
  //     ...formik.values.dateOfBirth,
  //     [name]: event.target.value,
  //   });
  // };
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tên người dùng"
                name="fullname"
                variant="outlined"
                size="large"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullname && Boolean(formik.errors.fullname)
                }
                helperText={formik.touched.fullname && formik.errors.fullname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                size="large"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mật khẩu"
                name="password"
                variant="outlined"
                size="large"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{ width: "100%" }}
                    label="Ngày sinh"
                    name="dateOfBirth"
                    value={formik.values.dateOfBirth}
                    onChange={(newValue) => {
                      formik.setFieldValue("dateOfBirth", newValue);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid className="mt-20" item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ borderRadius: "30px", py: "15px" }}
              >
                Đăng kí
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
