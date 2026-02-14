import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, Clock, FolderOpen, Calendar } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import Input from '../components/Input';
import ThemeToggle from '../components/ThemeToggle';

const Opportunities = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('internships');
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const internships = [
    {
      id: 1,
      company: 'Google',
      position: 'Software Engineering Intern',
      location: 'Mountain View, CA',
      type: 'Remote',
      duration: '3 months',
      stipend: '$8,000/month',
      deadline: '2024-03-01',
      requirements: ['Python', 'Data Structures', 'Algorithms'],
      description: 'Work on cutting-edge projects with Google Cloud team.',
      applicationStatus: 'Under Review',
      appliedDate: '2024-02-10'
    },
    {
      id: 2,
      company: 'Microsoft',
      position: 'Product Management Intern',
      location: 'Seattle, WA',
      type: 'Hybrid',
      duration: '6 months',
      stipend: '$7,500/month',
      deadline: '2024-03-15',
      requirements: ['Product Design', 'Analytics', 'Communication'],
      description: 'Join the Azure team to shape the future of cloud computing.',
      applicationStatus: null,
      appliedDate: null
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Data Science Intern',
      location: 'New York, NY',
      type: 'On-site',
      duration: '4 months',
      stipend: '$7,000/month',
      deadline: '2024-02-28',
      requirements: ['Machine Learning', 'Python', 'Statistics'],
      description: 'Analyze large-scale data to improve customer experience.',
      applicationStatus: 'Accepted',
      appliedDate: '2024-02-05'
    },
    {
      id: 4,
      company: 'Meta',
      position: 'Frontend Developer Intern',
      location: 'Menlo Park, CA',
      type: 'Remote',
      duration: '3 months',
      stipend: '$8,500/month',
      deadline: '2024-03-20',
      requirements: ['React', 'JavaScript', 'UI/UX'],
      description: 'Build engaging user interfaces for billions of users.',
      applicationStatus: 'Rejected',
      appliedDate: '2024-02-01'
    }
  ];

  const tasks = [
    {
      id: 1,
      title: 'Complete Resume Review',
      category: 'Application',
      priority: 'high',
      dueDate: '2024-02-16',
      progress: 75,
      description: 'Review and update resume for tech internships'
    },
    {
      id: 2,
      title: 'Prepare for Google Interview',
      category: 'Interview Prep',
      priority: 'high',
      dueDate: '2024-02-18',
      progress: 50,
      description: 'Practice coding problems and system design'
    },
    {
      id: 3,
      title: 'LinkedIn Profile Update',
      category: 'Profile',
      priority: 'medium',
      dueDate: '2024-02-20',
      progress: 30,
      description: 'Add recent projects and skills'
    },
    {
      id: 4,
      title: 'Research Startup Opportunities',
      category: 'Research',
      priority: 'low',
      dueDate: '2024-02-25',
      progress: 10,
      description: 'Find and list 10 promising startups'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Under Review': 'warning',
      'Accepted': 'success',
      'Rejected': 'danger',
      'Submitted': 'info'
    };
    return colors[status] || 'default';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'success',
      medium: 'warning',
      high: 'danger'
    };
    return colors[priority] || 'default';
  };

  const filteredInternships = internships.filter(internship => {
    if (filterType === 'all') return true;
    if (filterType === 'applied') return internship.applicationStatus !== null;
    if (filterType === 'notApplied') return internship.applicationStatus === null;
    return internship.applicationStatus === filterType;
  });

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
                <h1 className="text-3xl font-bold text-gradient">Growth - Opportunities</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Discover internships and manage your tasks</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {['internships', 'tasks'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                activeTab === tab
                  ? 'bg-aegis-forest dark:bg-aegis-emerald text-white'
                  : 'bg-white dark:bg-aegis-slate text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-aegis-dark-mist'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Internships Tab */}
        {activeTab === 'internships' && (
          <>
            {/* Filters */}
            <div className="flex gap-3 mb-6 flex-wrap">
              {['all', 'applied', 'notApplied', 'Under Review', 'Accepted', 'Rejected'].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterType(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    filterType === filter
                      ? 'bg-aegis-forest dark:bg-aegis-emerald text-white'
                      : 'bg-white dark:bg-aegis-slate text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-aegis-dark-mist'
                  }`}
                >
                  {filter === 'notApplied' ? 'Not Applied' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Internship Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredInternships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover={true}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {internship.position}
                        </h3>
                        <p className="text-lg text-aegis-forest dark:text-aegis-emerald font-medium mb-2">
                          {internship.company}
                        </p>
                      </div>
                      {internship.applicationStatus && (
                        <Badge variant={getStatusColor(internship.applicationStatus)}>
                          {internship.applicationStatus}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <MapPin className="w-4 h-4" /> {internship.location}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Briefcase className="w-4 h-4" /> {internship.type}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {internship.duration}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {internship.stipend}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Deadline: {internship.deadline}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {internship.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((req, idx) => (
                          <Badge key={idx} variant="info" size="sm">{req}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => setSelectedOpportunity(internship)}
                        variant="ghost"
                        className="flex-1"
                      >
                        View Details
                      </Button>
                      {!internship.applicationStatus && (
                        <Button
                          onClick={() => {
                            setSelectedOpportunity(internship);
                            setShowApplicationModal(true);
                          }}
                          className="flex-1"
                        >
                          Apply Now
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="grid grid-cols-1 gap-6">
            {tasks.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={true}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{task.title}</h3>
                        <Badge variant={getPriorityColor(task.priority)} size="sm">
                          {task.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{task.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FolderOpen className="w-4 h-4" /> {task.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> Due: {task.dueDate}
                        </span>
                      </div>
                    </div>

                    <div className="w-full md:w-48">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="font-medium text-aegis-forest dark:text-aegis-emerald">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${task.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-3 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Application Modal */}
      <Modal
        isOpen={showApplicationModal}
        onClose={() => {
          setShowApplicationModal(false);
          setSelectedOpportunity(null);
        }}
        title="Apply for Internship"
        size="lg"
      >
        {selectedOpportunity && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedOpportunity.position}
              </h3>
              <p className="text-lg text-aegis-forest dark:text-aegis-emerald">{selectedOpportunity.company}</p>
            </div>

            <div className="space-y-4">
              <Input label="Full Name" placeholder="John Doe" required />
              <Input label="Email" type="email" placeholder="john@example.com" required />
              <Input label="Phone" type="tel" placeholder="+1 234 567 8900" required />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Letter
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-aegis-slate
                    bg-white dark:bg-aegis-dark-mist text-gray-900 dark:text-gray-100
                    focus:border-aegis-forest dark:focus:border-aegis-emerald focus:outline-none"
                  placeholder="Why are you interested in this position?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Resume Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-aegis-slate rounded-xl p-6 text-center">
                  <p className="text-gray-500 dark:text-gray-400">Drag and drop or click to upload</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">PDF or DOC (Max 5MB)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedOpportunity(null);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedOpportunity(null);
                }}
                className="flex-1"
              >
                Submit Application
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedOpportunity && !showApplicationModal}
        onClose={() => setSelectedOpportunity(null)}
        title="Internship Details"
        size="lg"
      >
        {selectedOpportunity && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedOpportunity.position}
              </h3>
              <p className="text-lg text-aegis-forest dark:text-aegis-emerald mb-4">{selectedOpportunity.company}</p>
              {selectedOpportunity.applicationStatus && (
                <Badge variant={getStatusColor(selectedOpportunity.applicationStatus)}>
                  {selectedOpportunity.applicationStatus}
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedOpportunity.location}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedOpportunity.type}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedOpportunity.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Stipend</p>
                <p className="font-medium text-aegis-forest dark:text-aegis-emerald">{selectedOpportunity.stipend}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Description</h4>
              <p className="text-gray-600 dark:text-gray-300">{selectedOpportunity.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">Requirements</h4>
              <div className="flex flex-wrap gap-2">
                {selectedOpportunity.requirements.map((req, idx) => (
                  <Badge key={idx} variant="info">{req}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Opportunities;
