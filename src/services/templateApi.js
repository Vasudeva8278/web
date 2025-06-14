import axios from 'axios';


const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
  timeout: 30000, // 30 seconds timeout
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with an error
      const { status, data } = error.response;
      console.error(`Server error ${status}:`, data);
      throw new Error(data?.message || `Server error: ${status}`);
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      console.error('Request error:', error.message);
      throw new Error('Network error occurred');
    }
  }
);

// Template API functions
export const createTemplate = async (projectId, formData) => {
  try {
    console.log('Creating template with projectId:', projectId);
    // Log form data entries for debugging
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + (pair[0] === 'file' ? pair[1].name : pair[1]));
    }
    
    const response = await fetch('http://localhost:7000/api/templates/converted', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: formData
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response error:', response.status, errorText);
      throw new Error(`Server error: ${response.status} ${errorText}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error in createTemplate:', error);
    throw error;
  }
};
// Direct template upload function
export const uploadTemplate = async (templateId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('projectId', templateId); // Adding projectId as requested
  
  const response = await fetch('http://localhost:7000/api/templates/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  });
  
  return response.json();
};

export const updateTemplate = async (projectId, templateId, formData) => {
  const response = await api.put(`/templates/${projectId}/${templateId}`, formData);
  return response.data;
};

export const deleteTemplate = async (projectId, templateId) => {
  await api.delete(`/templates/${projectId}/${templateId}`);
};

export const getAllTemplates = async () => {
  const response = await api.get('/templates/homePageTemplates');
  return response.data;
};

export const getTemplateById = async (templateId) => {
  const response = await api.get(`/templates/${templateId}`);
  return response.data;
};

export const getHomePageTemplates = async (projectId) => {
  const response = await api.get(`/templates/${projectId}/homePageTemplates`);
  return response.data;
};

export const getTemplatesByProjectId = async (projectId) => {
  const response = await api.get(`/templates/${projectId}`);
  return response.data;
};

export const deleteTemplateById = async (templateId) => {
  try {
    const response = await api.delete(`/templates/${templateId}`);
    return response;
  } catch (error) {
    console.error('Error while deleting template by ID', error);
    throw handleApiError(error);
  }
};

export const createNeoTemplate = async (formData) => {
  const response = await api.post('/templates/neo', formData);
  return response.data;
};

export const getTemplates = async () => {
  const response = await api.get('/templates');
  return response.data;
};

export const getTemplatesById = async (projectId, templateId) => {
  try {
    const response = await api.get(`/templates/${projectId}/${templateId}`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.log("Error while fetching template by ID", error);
    throw error;
  }
};

export const getConvertedTemplate = async (templateId) => {
  try {
    const response = await api.get(`/templates/${templateId}/converted`);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.log("Error while fetching converted template", error);
    throw error;
  }
};

// Helper function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    return {
      message: error.response.data?.message || 'Server error occurred',
      code: error.response.data?.code,
      details: error.response.data?.details
    };
  }
  return {
    message: error.message || 'Network error occurred'
  };
};

export const fetchTemplates = async () => {
  try {
    const response = await api.get('/templates');
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.log("Error while fetching templates", error);
    throw error;
  }
};

// Export the API instance for direct use if needed
export default api;
