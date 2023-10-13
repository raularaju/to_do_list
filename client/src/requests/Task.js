import api from "./api";

export const getAllTasks = async () => {
  try {
    const response = await api.get("/task/");
    return response;
  } catch (error) {
    console.error("Erro ao retornar tarefas:", error);
    throw error;
  }
};

export const getProductsById = async (id) => {
  try {
    const response = await api.get(`/task/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Tarefa não encontrada:", error);
    throw error;
  }
};

export const createTask = async (title, description, dueDate) => {
  try {
      const response = api.post("/task/", {
      title,
      description,
      due_date: dueDate,
    });
    return response;
  } catch (error) {
    alert("ero");
    console.log(error);
  }
};

export const updateTask = async (id, title, description, dueDate, status) => {
  const response = await api.put(`/task/${id}`, {
    title,
    description,
    due_date: dueDate,
    status,
  });
  return response;
};
