import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_DB_HOST}/api/auth`; // Adjust this URL to match your backend API endpoint

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { withCredentials: true }
    );

    // Log cookies

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const logout = async () => {
  try {
    const response = await axios.get(`${API_URL}/logout`, {
      withCredentials: true,
    });

    // Delete the cookie

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_URL}/register-admin`, adminData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/request-password-reset`, {
      email,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, {
      token,
      newPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
