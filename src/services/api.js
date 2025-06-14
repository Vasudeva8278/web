import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchOrganizations = async () => {
  const { data } = await api.get('/organizations');
  return data;
};

export const createOrganization = async (organization) => {
  const { data } = await api.post('/organizations', organization);
  return data;
};

export const fetchPayments = async (orgId) => {
  const { data } = await api.get(`/payments/${orgId}`);
  return data;
};

export const fetchUser = async (userId) => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};


export const forgotPassword = async (email) => {
  const response = await api.post('/users/forgotPassword', {email:email});
  return response.data;
};
export const getDocumentsListByTemplateId = async (templateId, projectId) => {
  try {
    const response = await api.get(`/templates/${templateId}/documents?projectId=${projectId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export default api;
