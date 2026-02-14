import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../components/Card';
import Badge from '../components/Badge';
import ThemeToggle from '../components/ThemeToggle';
import { Landmark, LayoutDashboard, MessageSquare, BookOpen, Rocket, Users, Menu, Bell, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const userRole = user?.role || location.state?.role || 'student';

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'grievance', name: 'Grievances', icon: MessageSquare, path: '/grievance', badge: 3 },
    { id: 'academic', name: 'Academics', icon: BookOpen, path: '/academic' },
    { id: 'opportunities', name: 'Opportunities', icon: Rocket, path: '/opportunities', badge: 5 },
    { id: 'clubs', name: 'Clubs & Events', icon: Users, path: '/clubs' },
  ];

  const stats = [
    { label: 'Active Grievances', value: '3', change: '+2', color: 'warning' },
    { label: 'Courses Enrolled', value: '6', change: 'On Track', color: 'success' },
    { label: 'Pending Tasks', value: '8', change: '2 Due Soon', color: 'danger' },
    { label: 'Club Memberships', value: '4', change: '2 Events', color: 'info' },
  ];

  const recentActivities = [
    { type: 'grievance', title: 'Hostel WiFi Issue', status: 'In Progress', time: '2 hours ago' },
    { type: 'academic', title: 'Assignment Submitted: Data Structures', status: 'Completed', time: '5 hours ago' },
    { type: 'opportunity', title: 'Applied to Google Internship', status: 'Under Review', time: '1 day ago' },
    { type: 'club', title: 'Joined Coding Club Event', status: 'Upcoming', time: '2 days ago' },
  ];

  const notifications = [
    { id: 1, title: 'New internship opportunity', time: '10 min ago', unread: true },
    { id: 2, title: 'Grievance status updated', time: '1 hour ago', unread: true },
    { id: 3, title: 'Assignment due tomorrow', time: '3 hours ago', unread: false },
  ];

  return (
    <div className="min-h-screen bg-aegis-mist dark:bg-aegis-navy">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: 0 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-aegis-slate shadow-soft-lg z-30"
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <Landmark className="w-8 h-8 text-aegis-forest dark:text-aegis-emerald" />
            <div>
              <h1 className="text-2xl font-bold text-gradient">AEGIS</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Digital Citadel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                onClick={() => item.path && navigate(item.path)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-aegis-forest dark:bg-aegis-emerald text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-aegis-dark-mist text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <Badge variant="danger" size="sm">{item.badge}</Badge>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Admin Panel Access - Only visible to admins */}
          {isAdmin() && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-aegis-dark-mist"
            >
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/admin')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-aegis-forest to-aegis-emerald text-white hover:shadow-lg transition-all duration-300"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">High Command</span>
              </motion.button>
            </motion.div>
          )}

          {/* User Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6"
          >
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-aegis-forest to-aegis-emerald flex items-center justify-center text-white text-xl font-bold">
                  {userRole.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{userRole}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 bg-white/80 dark:bg-aegis-slate/80 backdrop-blur-md shadow-soft z-20">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-aegis-dark-mist transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back, John!</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-aegis-dark-mist hover:bg-gray-200 dark:hover:bg-aegis-slate transition-colors relative"
                >
                  <Bell className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </motion.button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-aegis-slate rounded-xl shadow-soft-lg p-4"
                    >
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Notifications</h3>
                      <div className="space-y-3">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-3 rounded-lg ${notif.unread ? 'bg-aegis-sky/10 dark:bg-aegis-emerald/10' : 'bg-gray-50 dark:bg-aegis-dark-mist'}`}
                          >
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{notif.title}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={false} className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-aegis-forest dark:text-aegis-emerald mb-2">{stat.value}</p>
                  <Badge variant={stat.color} size="sm">{stat.change}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Activity</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recentActivities.map((activity, index) => (
                <Card key={index} hover={true}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{activity.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                    <Badge variant={
                      activity.status === 'Completed' ? 'success' :
                      activity.status === 'In Progress' ? 'warning' :
                      activity.status === 'Under Review' ? 'info' : 'default'
                    }>
                      {activity.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
