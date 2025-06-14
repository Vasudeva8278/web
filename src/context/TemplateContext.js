import React, { createContext, useEffect, useState } from 'react';
import { getTemplates } from '../services/templateApi';

export const TemplateContext = createContext();

const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const data = await getTemplates();
        setTemplates(data);
        console.log('Template IDs:', data.map(template => template.id));
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <TemplateContext.Provider value={{ templates }}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;