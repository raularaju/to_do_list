import api from './api';



export const createUser = async (userObj) => {
    const response = await api.post('/user/', userObj).catch(
      (error) => {
        if (error.response) {
          throw error.response.data;
        }
    });
  
  return response;
}

export const login = async (email, password) => {
  const response = await api.post('/user/login/', { email, password }).catch(
    (error) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}

export const logout = async () => {
  const response = await api.post('/user/logout/').catch(
    (error) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}