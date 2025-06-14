import React, { useContext } from 'react';
import { FaFileAlt, FaTrash } from 'react-icons/fa';
import { ProjectContext } from '../context/ProjectContext';

const Inbox = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className='flex flex-col h-full w-full' style={{
    
      
     
    }}>
      <div style={{ fontWeight: 700, color: '#4F46E5', fontSize: '16px', marginBottom: '16px', letterSpacing: '0.5px' }}>
        NEO TEMPLATES
      </div>
      <button style={{
        width: '50%',
        
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        padding: '8px 0',
        fontWeight: 500,
        fontSize: '15px',
        marginBottom: '10px',
        cursor: 'pointer',
      }}>
        + Create File
      </button>
      <button style={{
        width: '100%',
        background: '#fff',
        color: '#F59E42',
        border: '1px solid #F59E42',
        borderRadius: '8px',
        padding: '7px 0',
        fontWeight: 500,
        fontSize: '14px',
        marginBottom: '18px',
        cursor: 'pointer',
      }}>
        <span role="img" aria-label="crown">:crown:</span> Upgrade to Neo Pro
      </button>
      <div style={{ fontWeight: 500, fontSize: '13px', color: '#22223B', marginBottom: '10px' }}>
        Recent Projects
      </div>
      <div className='overflow-y-auto' style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        padding: '0 0 16px 0'
      }}>
        {projects?.map((project) => (
          <div key={project._id} style={{
            display: 'flex',
            alignItems: 'center',
            color: '#555',
            fontSize: '14px',
            padding: '8px',
            borderRadius: '6px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)'
            }
          }}>
            <FaFileAlt style={{ marginRight: '8px', color: '#4F46E5', fontSize: '15px' }} />
            {project.projectName}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Inbox;