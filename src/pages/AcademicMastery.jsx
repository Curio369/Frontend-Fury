import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import Input from '../components/Input';
import ThemeToggle from '../components/ThemeToggle';

const AcademicMastery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      code: 'CS301',
      name: 'Data Structures & Algorithms',
      instructor: 'Dr. Sarah Johnson',
      credits: 4,
      progress: 75,
      grade: 'A',
      attendance: 92,
      nextClass: '2024-02-15 10:00 AM'
    },
    {
      id: 2,
      code: 'CS302',
      name: 'Database Management Systems',
      instructor: 'Prof. Michael Chen',
      credits: 3,
      progress: 60,
      grade: 'A-',
      attendance: 88,
      nextClass: '2024-02-15 2:00 PM'
    },
    {
      id: 3,
      code: 'CS303',
      name: 'Operating Systems',
      instructor: 'Dr. Emily White',
      credits: 4,
      progress: 50,
      grade: 'B+',
      attendance: 85,
      nextClass: '2024-02-16 11:00 AM'
    },
    {
      id: 4,
      code: 'CS304',
      name: 'Computer Networks',
      instructor: 'Prof. David Kumar',
      credits: 3,
      progress: 45,
      grade: 'A',
      attendance: 90,
      nextClass: '2024-02-16 3:00 PM'
    }
  ];

  const resources = [
    { id: 1, title: 'Introduction to Graph Algorithms', type: 'PDF', course: 'CS301', size: '2.5 MB', date: '2024-02-10' },
    { id: 2, title: 'SQL Query Optimization', type: 'Video', course: 'CS302', duration: '45 min', date: '2024-02-11' },
    { id: 3, title: 'Process Scheduling Lecture', type: 'Slides', course: 'CS303', pages: 42, date: '2024-02-12' },
    { id: 4, title: 'TCP/IP Protocol Suite', type: 'PDF', course: 'CS304', size: '3.8 MB', date: '2024-02-13' },
    { id: 5, title: 'Dynamic Programming Exercises', type: 'Document', course: 'CS301', size: '1.2 MB', date: '2024-02-14' },
    { id: 6, title: 'Normalization Tutorial', type: 'Video', course: 'CS302', duration: '30 min', date: '2024-02-14' }
  ];

  const upcomingEvents = [
    { date: '15', day: 'Thu', event: 'DSA Quiz', time: '10:00 AM', course: 'CS301' },
    { date: '16', day: 'Fri', event: 'DBMS Assignment Due', time: '11:59 PM', course: 'CS302' },
    { date: '18', day: 'Sun', event: 'OS Mid-term Exam', time: '2:00 PM', course: 'CS303' },
    { date: '20', day: 'Tue', event: 'Networks Lab Submission', time: '5:00 PM', course: 'CS304' }
  ];

  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const averageProgress = Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length);

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResourceIcon = (type) => {
    const icons = {
      PDF: '📄',
      Video: '🎥',
      Slides: '📊',
      Document: '📝'
    };
    return icons[type] || '📁';
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
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </motion.button>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Fate - Academic Mastery</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Master your academic journey</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Credit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card hover={false}>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Total Credits</p>
                <p className="text-5xl font-bold text-gradient mb-2">{totalCredits}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">This Semester</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card hover={false}>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Average Progress</p>
                <p className="text-5xl font-bold text-gradient mb-2">{averageProgress}%</p>
                <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-2 mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${averageProgress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-2 rounded-full"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card hover={false}>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Enrolled Courses</p>
                <p className="text-5xl font-bold text-gradient mb-2">{courses.length}</p>
                <Badge variant="success">All Active</Badge>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {['courses', 'vault', 'calendar'].map((tab) => (
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
              {tab === 'vault' ? 'Vault of Knowledge' : tab}
            </motion.button>
          ))}
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={true} className="cursor-pointer" onClick={() => setSelectedCourse(course)}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.code} • {course.instructor}</p>
                    </div>
                    <Badge variant="primary">{course.credits} Credits</Badge>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Course Progress</span>
                        <span className="font-medium text-aegis-forest dark:text-aegis-emerald">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-2 rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Grade</p>
                          <p className="font-bold text-aegis-forest dark:text-aegis-emerald">{course.grade}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Attendance</p>
                          <p className="font-bold text-gray-900 dark:text-white">{course.attendance}%</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Next Class</p>
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{course.nextClass}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Vault Tab */}
        {activeTab === 'vault' && (
          <div>
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search resources by title or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card hover={true} className="cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="text-4xl">{getResourceIcon(resource.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{resource.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="info" size="sm">{resource.course}</Badge>
                          <Badge variant="default" size="sm">{resource.type}</Badge>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {resource.size || resource.duration || `${resource.pages} pages`} • {resource.date}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover={true}>
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-aegis-forest to-aegis-emerald rounded-xl flex flex-col items-center justify-center text-white"
                      >
                        <span className="text-2xl font-bold">{event.date}</span>
                        <span className="text-xs">{event.day}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{event.event}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.time}</p>
                        <Badge variant="primary" size="sm">{event.course}</Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Course Detail Modal */}
      <Modal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        title="Course Details"
        size="lg"
      >
        {selectedCourse && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCourse.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{selectedCourse.code}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Instructor</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedCourse.instructor}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Credits</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedCourse.credits}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Current Grade</p>
                <p className="font-medium text-aegis-forest dark:text-aegis-emerald">{selectedCourse.grade}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Attendance</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedCourse.attendance}%</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="font-medium text-gray-900 dark:text-white">Course Progress</p>
                <p className="text-aegis-forest dark:text-aegis-emerald font-bold">{selectedCourse.progress}%</p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedCourse.progress}%` }}
                  transition={{ duration: 1 }}
                  className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-3 rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AcademicMastery;
