const { default: api } = require("../services");

export const fetchAdminDashboard = async (token) => {
  const response = await api.get("admin/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 10000 

  }); // Replace '/api/dashboard' with your actual API endpoint
  return response;
};
export const sigIn = async ({ email, password }) => {
  const response = await api.post("/login", { email, password },{ timeout: 10000 }); // Replace '/api/dashboard' with your actual API endpoint
  return response.data;
};
export const addTrip = async (data, token) => {
  try {
    const response = await api.post("/admin/addtrip", data, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      timeout: 10000 
    });
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error adding trip:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
export const getTrips = async () => {
  const response = await api.get("/trips"); // Replace '/api/dashboard' with your actual API endpoint
  return response.data;
};
export const getSettings = async () => {
  const response = await api.get("/settings"); // Replace '/api/dashboard' with your actual API endpoint
  return response.data;
};
export const getAccInfo = async (token) => {
  const response = await api.get("/getaccinfo", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); // Replace '/api/dashboard' with your actual API endpoint
  return response.data;
};
