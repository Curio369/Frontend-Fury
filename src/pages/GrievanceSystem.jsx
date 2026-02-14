import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ClipboardList, Calendar, Plus } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ThemeToggle from '../components/ThemeToggle';

const GrievanceSystem = () => {
  const navigate = useNavigate();
  const [showNewGrievanceModal, setShowNewGrievanceModal] = useState(false);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [filter, setFilter] = useState('all');
  const [formStep, setFormStep] = useState(1);
  const [newGrievance, setNewGrievance] = useState({
    title: '',
    category: '',
    description: '',
    priority: 'medium',
    isAnonymous: false,
    location: '',
    attachments: []
  });

  const categories = ['Academic', 'Hostel', 'Infrastructure', 'Transport', 'Administration', 'Other'];

  const grievances = [
    {
      id: 1,
      title: 'Hostel WiFi Connectivity Issues',
      category: 'Hostel',
      status: 'in_progress',
      priority: 'high',
      createdAt: '2024-02-10',
      description: 'WiFi is frequently disconnecting in Block A hostel rooms.',
      timeline: [
        { status: 'submitted', date: '2024-02-10', message: 'Grievance submitted' },
        { status: 'under_review', date: '2024-02-11', message: 'Assigned to IT Department' },
        { status: 'in_progress', date: '2024-02-12', message: 'Technician dispatched to investigate' }
      ]
    },
    {
      id: 2,
      title: 'Library Book Shortage',
      category: 'Academic',
      status: 'resolved',
      priority: 'medium',
      createdAt: '2024-02-08',
      description: 'Insufficient copies of required textbooks in the library.',
      timeline: [
        { status: 'submitted', date: '2024-02-08', message: 'Grievance submitted' },
        { status: 'under_review', date: '2024-02-08', message: 'Reviewed by Library Committee' },
        { status: 'in_progress', date: '2024-02-09', message: 'New books ordered' },
        { status: 'resolved', date: '2024-02-11', message: 'Additional 20 copies added to library' }
      ]
    },
    {
      id: 3,
      title: 'Canteen Food Quality',
      category: 'Infrastructure',
      status: 'under_review',
      priority: 'medium',
      createdAt: '2024-02-12',
      description: 'Request for improved food quality and variety in main canteen.',
      timeline: [
        { status: 'submitted', date: '2024-02-12', message: 'Grievance submitted' },
        { status: 'under_review', date: '2024-02-13', message: 'Under review by Campus Administration' }
      ]
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      submitted: 'info',
      under_review: 'warning',
      in_progress: 'warning',
      resolved: 'success'
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

  const filteredGrievances = grievances.filter(g =>
    filter === 'all' || g.status === filter
  );

  const handleSubmitGrievance = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      // Submit grievance
      setShowNewGrievanceModal(false);
      setFormStep(1);
      setNewGrievance({
        title: '',
        category: '',
        description: '',
        priority: 'medium',
        isAnonymous: false,
        location: '',
        attachments: []
      });
    }
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
                <h1 className="text-3xl font-bold text-gradient">Voice - Grievance System</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Submit and track your grievances</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setShowNewGrievanceModal(true)}>
                <Plus className="w-4 h-4 inline mr-1" />New Grievance
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['all', 'submitted', 'under_review', 'in_progress', 'resolved'].map((status) => (
            <motion.button
              key={status}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                filter === status
                  ? 'bg-aegis-forest dark:bg-aegis-emerald text-white'
                  : 'bg-white dark:bg-aegis-slate text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-aegis-dark-mist'
              }`}
            >
              {status.replace('_', ' ').toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Grievance List */}
        <div className="space-y-6">
          {filteredGrievances.map((grievance, index) => (
            <motion.div
              key={grievance.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover={true}
                className="cursor-pointer"
                onClick={() => setSelectedGrievance(grievance)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{grievance.title}</h3>
                      <Badge variant={getPriorityColor(grievance.priority)} size="sm">
                        {grievance.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <ClipboardList className="w-4 h-4" />
                        {grievance.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {grievance.createdAt}
                      </span>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(grievance.status)}>
                    {grievance.status.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-sm font-medium text-aegis-forest dark:text-aegis-emerald">
                      {grievance.timeline.length}/4 stages
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(grievance.timeline.length / 4) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-2 rounded-full"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      {/* New Grievance Modal */}
      <Modal
        isOpen={showNewGrievanceModal}
        onClose={() => {
          setShowNewGrievanceModal(false);
          setFormStep(1);
        }}
        title="Submit New Grievance"
        size="lg"
      >
        <div className="space-y-6">
          {/* Step Indicator */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 w-20 rounded-full transition-all duration-300 ${
                  formStep >= step ? 'bg-aegis-forest dark:bg-aegis-emerald' : 'bg-gray-300 dark:bg-aegis-slate'
                }`}
              />
            ))}
          </div>

          {formStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Basic Information</h3>
              <Input
                label="Grievance Title"
                placeholder="Brief description of the issue"
                value={newGrievance.title}
                onChange={(e) => setNewGrievance({ ...newGrievance, title: e.target.value })}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setNewGrievance({ ...newGrievance, category: cat })}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                        newGrievance.category === cat
                          ? 'border-aegis-forest dark:border-aegis-emerald bg-aegis-forest/5 dark:bg-aegis-emerald/10'
                          : 'border-gray-200 dark:border-aegis-slate'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Details</h3>

              {/* Anonymous Submission Toggle */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-aegis-dark-mist rounded-xl">
                <div>
                  <label htmlFor="isAnonymous" className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">
                    Submit Anonymously
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Your identity will be hidden from public view
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="isAnonymous"
                  checked={newGrievance.isAnonymous}
                  onChange={(e) => setNewGrievance({ ...newGrievance, isAnonymous: e.target.checked })}
                  className="w-5 h-5 text-aegis-forest bg-gray-100 border-gray-300 rounded focus:ring-aegis-forest dark:focus:ring-aegis-emerald dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={newGrievance.description}
                  onChange={(e) => setNewGrievance({ ...newGrievance, description: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-aegis-slate
                    bg-white dark:bg-aegis-dark-mist text-gray-900 dark:text-gray-100
                    focus:border-aegis-forest dark:focus:border-aegis-emerald focus:outline-none"
                  placeholder="Provide detailed information about your grievance..."
                  required
                />
              </div>

              {/* Location Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location (Optional)
                </label>
                <input
                  type="text"
                  value={newGrievance.location}
                  onChange={(e) => setNewGrievance({ ...newGrievance, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-aegis-slate
                    bg-white dark:bg-aegis-dark-mist text-gray-900 dark:text-gray-100
                    focus:border-aegis-forest dark:focus:border-aegis-emerald focus:outline-none"
                  placeholder="e.g., Block A - Room 204, Main Library, etc."
                />
              </div>

              {/* File Attachment Placeholder */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Attachments (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-aegis-slate rounded-xl p-6 text-center hover:border-aegis-forest dark:hover:border-aegis-emerald transition-colors cursor-pointer">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    Images or documents (Max 10MB)
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Priority Level
                </label>
                <div className="flex gap-3">
                  {['low', 'medium', 'high'].map((priority) => (
                    <motion.button
                      key={priority}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setNewGrievance({ ...newGrievance, priority })}
                      className={`flex-1 p-3 rounded-xl border-2 transition-all duration-300 capitalize ${
                        newGrievance.priority === priority
                          ? 'border-aegis-forest dark:border-aegis-emerald bg-aegis-forest/5 dark:bg-aegis-emerald/10'
                          : 'border-gray-200 dark:border-aegis-slate'
                      }`}
                    >
                      {priority}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {formStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Review & Submit</h3>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-6 space-y-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Title</p>
                  <p className="font-medium text-gray-900 dark:text-white">{newGrievance.title}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                  <p className="font-medium text-gray-900 dark:text-white">{newGrievance.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Submission Type</p>
                  <Badge variant={newGrievance.isAnonymous ? 'warning' : 'info'}>
                    {newGrievance.isAnonymous ? 'Anonymous' : 'Identified'}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Priority</p>
                  <Badge variant={getPriorityColor(newGrievance.priority)}>{newGrievance.priority.toUpperCase()}</Badge>
                </div>
                {newGrievance.location && (
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{newGrievance.location}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Description</p>
                  <p className="text-gray-900 dark:text-white">{newGrievance.description}</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex gap-3">
            {formStep > 1 && (
              <Button variant="ghost" onClick={() => setFormStep(formStep - 1)} className="flex-1">
                Back
              </Button>
            )}
            <Button onClick={handleSubmitGrievance} className="flex-1">
              {formStep === 3 ? 'Submit Grievance' : 'Continue'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Grievance Detail Modal */}
      <Modal
        isOpen={!!selectedGrievance}
        onClose={() => setSelectedGrievance(null)}
        title="Grievance Details"
        size="lg"
      >
        {selectedGrievance && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedGrievance.title}
              </h3>
              <div className="flex gap-2">
                <Badge variant={getStatusColor(selectedGrievance.status)}>
                  {selectedGrievance.status.replace('_', ' ').toUpperCase()}
                </Badge>
                <Badge variant={getPriorityColor(selectedGrievance.priority)}>
                  {selectedGrievance.priority.toUpperCase()}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-gray-600 dark:text-gray-300">{selectedGrievance.description}</p>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Status Timeline</h4>
              <div className="space-y-4">
                {selectedGrievance.timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${
                        index === selectedGrievance.timeline.length - 1
                          ? 'bg-aegis-forest dark:bg-aegis-emerald'
                          : 'bg-gray-300 dark:bg-aegis-slate'
                      }`} />
                      {index < selectedGrievance.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-300 dark:bg-aegis-slate mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <p className="font-medium text-gray-900 dark:text-white">{event.message}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GrievanceSystem;
