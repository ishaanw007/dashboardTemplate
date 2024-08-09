import axios from "axios";
const API_URL = `${process.env.NEXT_PUBLIC_DB_HOST}/api/shift`; // Adjust this URL to match your backend API endpoint

export const createShift = async (shiftData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, shiftData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const assignShift = async (shiftData) => {
  try {
    const response = await axios.post(`${API_URL}/assign`, shiftData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteShift = async (shiftId) => {
  try {
    const response = await axios.delete(`${API_URL}/${shiftId}`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error.response.data;
  }
};
export const updateShift = async (shiftId, data) => {
  try {
    const response = await axios.put(
      `${API_URL}/update`,
      { shiftId, data },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error.response.data;
  }
};

export const getShifts = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`, {
      withCredentials: true,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getShift = async (shiftId) => {
  try {
    const response = await axios.get(`${API_URL}/${shiftId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
