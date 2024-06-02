import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/Action";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Chưa đúng định dạng email")
    .required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
  confirmPassword: Yup.string()
    .label("confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
});

function SignupForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: null,
    },
    validationSchema,
    onSubmit: (values) => {
      const dateOfBirth = values.dateOfBirth.$d.toLocaleDateString("en-CA");
      values.dateOfBirth = dateOfBirth;
      dispatch(register(values));
      console.log("value", values);
    },
  });
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
                type="password"
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
              <TextField
                fullWidth
                label="Nhập lại mật khẩu"
                name="confirmPassword"
                type="password"
                variant="outlined"
                size="large"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
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
