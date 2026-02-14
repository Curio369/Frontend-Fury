import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, MessageSquare, TrendingUp, Activity, Shield, AlertTriangle,
  CheckCircle, Clock, BarChart3, FileText, Settings, UserPlus, ChevronRight
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();
  const [timeRange, setTimeRange] = useState('7days');

  // Redirect if not admin
  if (!isAdmin()) {
    navigate('/dashboard');
    return null;
  }

  const systemMetrics = {
    totalUsers: 5247,
    activeToday: 1843,
    totalGrievances: 1563,
    pendingGrievances: 124,
    resolvedGrievances: 1391,
    avgResolutionTime: '3.2 days',
    systemUptime: '99.8%',
    newUsersThisWeek: 87
  };

  const recentActivity = [
    { id: 1, type: 'user_created', user: 'john.doe@iitmandi.ac.in', role: 'Student', time: '2 min ago', icon: UserPlus, color: 'success' },
    { id: 2, type: 'grievance_submitted', user: 'sarah.smith@iitmandi.ac.in', category: 'Infrastructure', time: '15 min ago', icon: MessageSquare, color: 'info' },
    { id: 3, type: 'grievance_resolved', grievanceId: 'GRV-1234', department: 'IT', time: '1 hour ago', icon: CheckCircle, color: 'success' },
    { id: 4, type: 'high_priority_alert', grievance: 'Critical network issue', time: '2 hours ago', icon: AlertTriangle, color: 'danger' },
    { id: 5, type: 'user_created', user: 'mike.wilson@iitmandi.ac.in', role: 'Faculty', time: '3 hours ago', icon: UserPlus, color: 'success' }
  ];

  const grievanceStats = [
    { category: 'Academic', count: 342, percentage: 22, trend: '+5%' },
    { category: 'Hostel', count: 287, percentage: 18, trend: '-2%' },
    { category: 'Infrastructure', count: 423, percentage: 27, trend: '+8%' },
    { category: 'Transport', count: 198, percentage: 13, trend: '0%' },
    { category: 'Administration', count: 234, percentage: 15, trend: '+3%' },
    { category: 'Other', count: 79, percentage: 5, trend: '-1%' }
  ];

  const usersByRole = [
    { role: 'Students', count: 4850, percentage: 92.4, color: 'bg-blue-500' },
    { role: 'Faculty', count: 215, percentage: 4.1, color: 'bg-green-500' },
    { role: 'Authority', count: 152, percentage: 2.9, color: 'bg-yellow-500' },
    { role: 'Admin', count: 30, percentage: 0.6, color: 'bg-red-500' }
  ];

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-green-600 dark:text-green-400';
    if (trend.startsWith('-')) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <div className="min-h-screen bg-aegis-mist dark:bg-aegis-navy">
      {/* Header */}
      <header className="bg-white dark:bg-aegis-slate shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/dashboard')}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-aegis-dark-mist transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </motion.button>
              <div>
                <h1 className="text-3xl font-bold text-gradient flex items-center gap-3">
                  <Shield className="w-8 h-8 text-aegis-forest dark:text-aegis-emerald" />
                  High Command Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  System monitoring and administration • Last updated: Just now
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4 inline mr-2" />
                Settings
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Time Range Selector */}
        <div className="flex gap-3 mb-8">
          {['24hours', '7days', '30days', '90days'].map((range) => (
            <motion.button
              key={range}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                timeRange === range
                  ? 'bg-aegis-forest dark:bg-aegis-emerald text-white'
                  : 'bg-white dark:bg-aegis-slate text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-aegis-dark-mist'
              }`}
            >
              {range === '24hours' ? '24 Hours' : range === '7days' ? '7 Days' : range === '30days' ? '30 Days' : '90 Days'}
            </motion.button>
          ))}
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
            <Card hover={false}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Users</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{systemMetrics.totalUsers.toLocaleString()}</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">+{systemMetrics.newUsersThisWeek} this week</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card hover={false}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <Badge variant="success">Live</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Active Today</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{systemMetrics.activeToday.toLocaleString()}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{((systemMetrics.activeToday / systemMetrics.totalUsers) * 100).toFixed(1)}% of total users</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card hover={false}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <Badge variant="warning">{systemMetrics.pendingGrievances}</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Grievances</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{systemMetrics.totalGrievances.toLocaleString()}</p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">{systemMetrics.pendingGrievances} pending resolution</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card hover={false}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge variant="info">Avg</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Resolution Time</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{systemMetrics.avgResolutionTime}</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">-0.5 days from last month</p>
            </Card>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Grievance Statistics */}
          <div className="lg:col-span-2">
            <Card hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-aegis-forest dark:text-aegis-emerald" />
                  Grievance Distribution
                </h3>
                <Button size="sm" variant="ghost">View All</Button>
              </div>

              <div className="space-y-4">
                {grievanceStats.map((stat, index) => (
                  <motion.div
                    key={stat.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-32">{stat.category}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{stat.count} cases</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-medium ${getTrendColor(stat.trend)}`}>{stat.trend}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 w-12 text-right">{stat.percentage}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* User Distribution */}
          <div>
            <Card hover={false}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-aegis-forest dark:text-aegis-emerald" />
                Users by Role
              </h3>

              <div className="space-y-4">
                {usersByRole.map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.role}</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{item.count.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 dark:bg-aegis-slate rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className={`${item.color} h-2 rounded-full`}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-10 text-right">{item.percentage}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="w-full mt-6" variant="ghost">
                <UserPlus className="w-4 h-4 inline mr-2" />
                Manage Users
              </Button>
            </Card>
          </div>
        </div>

        {/* Recent Activity Log */}
        <Card hover={false}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-aegis-forest dark:text-aegis-emerald" />
              Recent Activity
            </h3>
            <Button size="sm" variant="ghost">View Full Log</Button>
          </div>

          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-aegis-dark-mist rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-aegis-slate transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-xl ${
                    activity.color === 'success' ? 'bg-green-100 dark:bg-green-900/30' :
                    activity.color === 'danger' ? 'bg-red-100 dark:bg-red-900/30' :
                    'bg-blue-100 dark:bg-blue-900/30'
                  }`}>
                    <activity.icon className={`w-5 h-5 ${
                      activity.color === 'success' ? 'text-green-600 dark:text-green-400' :
                      activity.color === 'danger' ? 'text-red-600 dark:text-red-400' :
                      'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.type === 'user_created' && `New ${activity.role} registered`}
                      {activity.type === 'grievance_submitted' && `New ${activity.category} grievance`}
                      {activity.type === 'grievance_resolved' && `Grievance ${activity.grievanceId} resolved`}
                      {activity.type === 'high_priority_alert' && activity.grievance}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.user || activity.department} • {activity.time}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </motion.div>
            ))}
          </div>
        </Card>

        {/* System Health */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card hover={false}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">System Uptime</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{systemMetrics.systemUptime}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </Card>

          <Card hover={false}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Resolution Rate</p>
                <p className="text-3xl font-bold text-aegis-forest dark:text-aegis-emerald">
                  {((systemMetrics.resolvedGrievances / systemMetrics.totalGrievances) * 100).toFixed(1)}%
                </p>
              </div>
              <div className="p-3 bg-aegis-forest/10 dark:bg-aegis-emerald/10 rounded-xl">
                <TrendingUp className="w-8 h-8 text-aegis-forest dark:text-aegis-emerald" />
              </div>
            </div>
          </Card>

          <Card hover={false}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Critical Alerts</p>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">3</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
