import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaFileAlt, 
  FaUsers, 
  FaDownload,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrendingUp
} from 'react-icons/fa';
import { ProjectContext } from '../context/ProjectContext';
import { TemplateContext } from '../context/TemplateContext';
import Layout from '../components/Layout/Layout';
import StatsCard from '../components/Dashboard/StatsCard';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { projects } = useContext(ProjectContext);
  const { templates } = useContext(TemplateContext);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    setRecentActivity([
      {
        id: 1,
        type: 'template_created',
        title: 'New template created',
        description: 'Invoice Template v2.0',
        time: '2 hours ago',
        icon: FaFileAlt,
        color: 'blue'
      },
      {
        id: 2,
        type: 'document_generated',
        title: 'Document generated',
        description: 'Client Agreement for ABC Corp',
        time: '4 hours ago',
        icon: FaDownload,
        color: 'green'
      },
      {
        id: 3,
        type: 'project_updated',
        title: 'Project updated',
        description: 'Legal Documents Project',
        time: '1 day ago',
        icon: FaProjectDiagram,
        color: 'purple'
      }
    ]);
  }, []);

  const stats = [
    {
      title: 'Total Projects',
      value: projects?.length || 0,
      change: '12%',
      changeType: 'positive',
      icon: FaProjectDiagram,
      color: 'blue'
    },
    {
      title: 'Templates',
      value: templates?.length || 0,
      change: '8%',
      changeType: 'positive',
      icon: FaFileAlt,
      color: 'green'
    },
    {
      title: 'Active Clients',
      value: 24,
      change: '3%',
      changeType: 'positive',
      icon: FaUsers,
      color: 'purple'
    },
    {
      title: 'Documents Generated',
      value: 156,
      change: '15%',
      changeType: 'positive',
      icon: FaDownload,
      color: 'orange'
    }
  ];

  const quickActions = [
    {
      title: 'Create Template',
      description: 'Design a new document template',
      icon: FaPlus,
      color: 'bg-blue-500',
      action: () => navigate('/Neo')
    },
    {
      title: 'New Project',
      description: 'Start a new project',
      icon: FaProjectDiagram,
      color: 'bg-green-500',
      action: () => navigate('/projects')
    },
    {
      title: 'View Templates',
      description: 'Browse existing templates',
      icon: FaEye,
      color: 'bg-purple-500',
      action: () => navigate('/Neo')
    },
    {
      title: 'Manage Clients',
      description: 'View and manage clients',
      icon: FaUsers,
      color: 'bg-orange-500',
      action: () => navigate('/clients')
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your projects.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button
              variant="primary"
              icon={<FaPlus />}
              onClick={() => navigate('/Neo')}
            >
              Create Template
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <Card.Header>
              <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
              <p className="text-gray-600">Get started with common tasks</p>
            </Card.Header>
            <Card.Body>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.action}
                    className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all text-left bg-white"
                  >
                    <div className={`inline-flex p-3 rounded-lg ${action.color} text-white mb-4`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </motion.button>
                ))}
              </div>
            </Card.Body>
          </Card>
        </motion.div>

        {/* Recent Activity & Recent Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <Card.Header>
                <div className="flex items-center gap-2">
                  <FaTrendingUp className="h-5 w-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div 
                      key={activity.id} 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className={`p-2 rounded-full bg-${activity.color}-100 text-${activity.color}-600`}>
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <Card.Header>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaProjectDiagram className="h-5 w-5 text-green-500" />
                    <h2 className="text-xl font-semibold text-gray-900">Recent Projects</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/projects')}
                  >
                    View All
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="space-y-3">
                  {projects?.slice(0, 5).map((project, index) => (
                    <motion.div 
                      key={project._id} 
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/projects/${project._id}`)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                          {project.projectName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{project.projectName}</p>
                          <p className="text-sm text-gray-600">Updated recently</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<FaEye />}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/${project._id}`);
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;