import api from './api';

export const signup = async (name, email, password) => {
  const response = await api.post('/users/', { name, email, password }).catch(
    (error) => {
      if (error.response) {
        throw error.response.data;
      }
  });

  return response;
}

export const createUser = async (name, email, password) => {
    const response = await api.post('/user/', { name, email, password}).catch(
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