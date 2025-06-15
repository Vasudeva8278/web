import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaProjectDiagram,
  FaUsers,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaPlus
} from 'react-icons/fa';
import Button from '../UI/Button';

const Sidebar = ({ isOpen, onClose, user, logout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: FaHome,
      path: '/projects',
      badge: null
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: FaProjectDiagram,
      path: '/projects',
      badge: '12',
      submenu: [
        { label: 'All Projects', path: '/projects' },
        { label: 'Recent', path: '/projects?filter=recent' },
        { label: 'Archived', path: '/projects?filter=archived' }
      ]
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: FaFileAlt,
      path: '/Neo',
      badge: '8'
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: FaUsers,
      path: '/clients',
      badge: '24'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: FaCog,
      path: '/profile'
    }
  ];

  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const isActiveRoute = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: -320,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 shadow-lg z-50 lg:relative lg:translate-x-0"
      >
        <div className="flex flex-col h-full">
          {/* User Profile Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {user?.name || 'User Name'}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {user?.email || 'user@example.com'}
                </p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                  {user?.role || 'Member'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-200">
            <Button
              variant="primary"
              size="sm"
              icon={<FaPlus />}
              onClick={() => handleNavigation('/Neo')}
              className="w-full justify-center"
            >
              Create Template
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (item.submenu) {
                        toggleSubmenu(item.id);
                      } else {
                        handleNavigation(item.path);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      isActiveRoute(item.path)
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${
                        isActiveRoute(item.path) ? 'text-blue-700' : 'text-gray-400'
                      }`} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.submenu && (
                        <FaChevronDown
                          className={`h-3 w-3 text-gray-400 transition-transform ${
                            expandedMenus[item.id] ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>
                  </motion.button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && expandedMenus[item.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-8 mt-1 space-y-1 overflow-hidden"
                      >
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.path}
                            onClick={() => handleNavigation(subItem.path)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              isActiveRoute(subItem.path)
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              size="sm"
              icon={<FaSignOutAlt />}
              onClick={handleLogout}
              className="w-full justify-start text-red-600 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;