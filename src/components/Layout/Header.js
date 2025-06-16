import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaBars, FaSearch, FaUser, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import logo from '../../Assets/logo-neo.png';

const Header = ({ toggleNavigation, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const notifications = [
    { id: 1, title: 'New template created', time: '2 minutes ago', type: 'success' },
    { id: 2, title: 'Document generated', time: '5 minutes ago', type: 'info' },
    { id: 3, title: 'Project updated', time: '1 hour ago', type: 'warning' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50"
    >
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleNavigation}
              icon={<FaBars />}
              className="lg:hidden"
            />
            
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={logo} alt="Neo Templates" className="h-8 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Neo Templates</h1>
                <p className="text-xs text-gray-500">Document Management System</p>
              </div>
            </motion.div>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search templates, projects, documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="sm"
              icon={<FaSearch />}
              className="md:hidden"
            />

            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                icon={<FaBell />}
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              />
              <motion.span 
                className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {notifications.length}
              </motion.span>
              
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <p className="text-sm text-gray-500">{notifications.length} new notifications</p>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <motion.div 
                        key={notification.id} 
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            notification.type === 'success' ? 'bg-green-500' :
                            notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="w-full text-center">
                      View all notifications
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500">{user?.role || 'Member'}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="rounded-full p-2 relative"
                >
                  {user?.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                </Button>
              </div>

              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-medium text-gray-900">{user?.name || 'User Name'}</p>
                    <p className="text-sm text-gray-500">{user?.email || 'user@example.com'}</p>
                  </div>
                  <div className="py-2">
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      onClick={() => navigate('/profile')}
                      whileHover={{ x: 4 }}
                    >
                      <FaUser className="h-4 w-4" />
                      Profile Settings
                    </motion.button>
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <FaCog className="h-4 w-4" />
                      Preferences
                    </motion.button>
                  </div>
                  <div className="border-t border-gray-100 py-2">
                    <motion.button
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      Sign Out
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;