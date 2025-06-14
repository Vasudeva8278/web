import React from 'react';
import { Link, Routes, Route, useMatch } from 'react-router-dom';
import OrganizationList from '../Organizations/OrganizationList';
import OrganizationForm from '../Organizations/OrganizationForm';
import PaymentList from '../Payment/PaymentList';

const Dashboard = () => {
  const match = useMatch('/dashboard/*');
  const url = match ? match.pathname : '';

  return (
    <div>
      <h2>Dashboard</h2>
     
    </div>
  );
};

export default Dashboard;
