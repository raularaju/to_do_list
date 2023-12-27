import api from "./api";

export const createUser = async (userObj) => {
  try {
    console.log(userObj)
    const response = await api.post("/user/", userObj);
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/user/login/", { email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/user/logout/");
    return response;
  } catch (error) {
    throw error;
  }
};
