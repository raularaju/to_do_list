import api from "./api";

export const getAllTasksFromUser = async (idUser) => {
  try {
    const response = await api.get(`/user/${idUser}/tasks`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await api.get(`/task/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (taskObj) => {
  try {
    delete taskObj.id;
    const response = api.post("/task/", taskObj);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskObj, id) => {
  try {
    delete taskObj.id;
    const response = await api.put(`/task/${id}`, taskObj);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
