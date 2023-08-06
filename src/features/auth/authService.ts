import { instance as axios } from "../../config";

const register = async (user: any) => {
  const response = await axios.post("/auth/register", user);

  if (response.data && response.status === 201) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }

  return response.data;
};

const login = async (user: any) => {
  const response = await axios.post("auth/login", user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const verifyEmail = async (email: string) => {
  const response = await axios.post(`/verify-email?email=${email}`);

  return response.data;
};

const resetPassword = async (email: string) => {
  const response = await axios.post(`/password-reset-link`, email);

  return response.data;
};

export const authService = {
  register,
  login,
  logout,
  verifyEmail,
  resetPassword
};


