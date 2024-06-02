import axios from "axios";
import { API_URL } from "../../config/api";
import { GET_USER, LOGIN_USER, LOGOUT, REGISTER_USER } from "./ActionType";
import { toast } from "react-toastify";
import authHeader from "../../config/auth-header";

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/login`, data);
    const jwt = response.data.token;
    localStorage.setItem("jwt", jwt);
    dispatch({ type: LOGIN_USER, payload: response.data });
    toast.success("Đăng nhập thành công");
    console.log(response.data);
  } catch (err) {
    toast.error("Đăng nhập thất bại");
    console.log(err);
  }
};

export const getUser = (email) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/v1/user/profile?email=${email}`,
      authHeader()
    );
    dispatch({ type: GET_USER, payload: response.data });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register`, data);
    dispatch({ type: REGISTER_USER, payload: response.data });
    toast.success("Đăng kí thành công");
  } catch (err) {
    toast.error("Đăng kí thất bại");
    console.log(err);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  toast.success("Bạn đã đăng xuât khỏi tài khoản");
  localStorage.clear();
};
