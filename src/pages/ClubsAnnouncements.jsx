import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Camera, Mic, Music, Rocket, Sprout, Users, Check, Clock, MapPin, Megaphone, FolderOpen } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import ThemeToggle from '../components/ThemeToggle';

const ClubsAnnouncements = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('clubs');
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const clubs = [
    {
      id: 1,
      name: 'Coding Club',
      icon: Code,
      category: 'Technical',
      members: 245,
      description: 'A community of passionate programmers building projects and solving problems together.',
      upcomingEvent: 'Hackathon 2024',
      eventDate: '2024-02-20',
      isJoined: true
    },
    {
      id: 2,
      name: 'Photography Club',
      icon: Camera,
      category: 'Arts',
      members: 180,
      description: 'Capture moments, share stories, and explore the art of photography with fellow enthusiasts.',
      upcomingEvent: 'Photo Walk',
      eventDate: '2024-02-18',
      isJoined: true
    },
    {
      id: 3,
      name: 'Debate Society',
      icon: Mic,
      category: 'Literary',
      members: 120,
      description: 'Sharpen your argumentation skills and engage in thought-provoking discussions.',
      upcomingEvent: 'Inter-College Debate',
      eventDate: '2024-02-25',
      isJoined: false
    },
    {
      id: 4,
      name: 'Music Club',
      icon: Music,
      category: 'Arts',
      members: 200,
      description: 'From classical to contemporary, unite through the universal language of music.',
      upcomingEvent: 'Annual Concert',
      eventDate: '2024-03-01',
      isJoined: true
    },
    {
      id: 5,
      name: 'Innovation Lab',
      icon: Rocket,
      category: 'Technical',
      members: 150,
      description: 'Transform ideas into reality through innovation, entrepreneurship, and collaboration.',
      upcomingEvent: 'Startup Pitch Night',
      eventDate: '2024-02-22',
      isJoined: false
    },
    {
      id: 6,
      name: 'Environmental Club',
      icon: Sprout,
      category: 'Social',
      members: 190,
      description: 'Work towards a sustainable future through awareness campaigns and green initiatives.',
      upcomingEvent: 'Tree Plantation Drive',
      eventDate: '2024-02-19',
      isJoined: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Tech Talk: AI & Machine Learning',
      club: 'Coding Club',
      date: '2024-02-16',
      time: '5:00 PM',
      venue: 'Auditorium A',
      description: 'Industry expert sharing insights on AI trends and career opportunities.',
      registrations: 180,
      capacity: 200,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Photo Walk - Campus Heritage',
      club: 'Photography Club',
      date: '2024-02-18',
      time: '6:30 AM',
      venue: 'Main Gate',
      description: 'Explore and capture the architectural beauty of our historic campus.',
      registrations: 45,
      capacity: 50,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Open Mic Night',
      club: 'Music Club',
      date: '2024-02-17',
      time: '7:00 PM',
      venue: 'Student Center',
      description: 'Showcase your musical talent in a supportive and vibrant environment.',
      registrations: 120,
      capacity: 150,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Hackathon 2024 - Code for Good',
      club: 'Coding Club',
      date: '2024-02-20',
      time: '9:00 AM',
      venue: 'CS Block',
      description: '24-hour coding marathon to build solutions for social problems.',
      registrations: 90,
      capacity: 100,
      status: 'registration_open'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Campus Fest 2024 - Registration Open',
      category: 'Event',
      priority: 'high',
      time: '2 hours ago',
      content: 'The annual campus fest is back! Register your teams for various competitions and cultural events.',
      author: 'Student Council'
    },
    {
      id: 2,
      title: 'Library Timing Extension',
      category: 'Facility',
      priority: 'medium',
      time: '5 hours ago',
      content: 'Library will remain open until 11 PM during exam weeks starting next Monday.',
      author: 'Library Committee'
    },
    {
      id: 3,
      title: 'Guest Lecture by Industry Leader',
      category: 'Academic',
      priority: 'high',
      time: '1 day ago',
      content: 'Join us for an insightful session with the CTO of TechCorp on "Future of Software Engineering".',
      author: 'CS Department'
    },
    {
      id: 4,
      title: 'New Sports Facilities Inauguration',
      category: 'Facility',
      priority: 'medium',
      time: '2 days ago',
      content: 'New basketball and badminton courts will be inaugurated this Saturday. All are welcome!',
      author: 'Sports Committee'
    },
    {
      id: 5,
      title: 'Scholarship Applications Now Open',
      category: 'Academic',
      priority: 'high',
      time: '3 days ago',
      content: 'Apply for merit-based scholarships before the deadline. Check your email for details.',
      author: 'Academics Office'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technical: 'info',
      Arts: 'primary',
      Literary: 'warning',
      Social: 'success'
    };
    return colors[category] || 'default';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'success',
      medium: 'warning',
      high: 'danger'
    };
    return colors[priority] || 'default';
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
                <h1 className="text-3xl font-bold text-gradient">Spirit - Clubs & Events</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Connect, participate, and build memories</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {['clubs', 'events', 'announcements'].map((tab) => (
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

        {/* Clubs Tab */}
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Card hover={true} className="cursor-pointer h-full" onClick={() => setSelectedClub(club)}>
                  <div className="text-center">
                    <div className="mb-4"><club.icon className="w-14 h-14 text-aegis-forest dark:text-aegis-emerald mx-auto" /></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{club.name}</h3>
                    <Badge variant={getCategoryColor(club.category)} className="mb-3">
                      {club.category}
                    </Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{club.description}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Users className="w-4 h-4" />
                      <span>{club.members} members</span>
                    </div>

                    {club.upcomingEvent && (
                      <div className="bg-aegis-mist dark:bg-aegis-dark-mist rounded-xl p-3 mb-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Next Event</p>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{club.upcomingEvent}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{club.eventDate}</p>
                      </div>
                    )}

                    <Button
                      variant={club.isJoined ? 'secondary' : 'primary'}
                      size="sm"
                      className="w-full"
                    >
                      {club.isJoined ? <><Check className="w-4 h-4 inline mr-1" />Joined</> : 'Join Club'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover={true} className="cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 bg-gradient-to-br from-aegis-forest to-aegis-emerald rounded-xl flex flex-col items-center justify-center text-white"
                      >
                        <span className="text-3xl font-bold">{event.date.split('-')[2]}</span>
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                      </motion.div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {event.club}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.time}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.venue}</span>
                          </div>
                        </div>
                        <Badge variant={event.status === 'registration_open' ? 'success' : 'info'}>
                          {event.status === 'registration_open' ? 'Registration Open' : 'Upcoming'}
                        </Badge>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {event.registrations} / {event.capacity} registered
                            </span>
                          </div>
                          <div className="w-48 bg-gray-200 dark:bg-aegis-dark-mist rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(event.registrations / event.capacity) * 100}%` }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="bg-gradient-to-r from-aegis-forest to-aegis-emerald h-2 rounded-full"
                            />
                          </div>
                        </div>

                        <Button size="sm">Register Now</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover={true}>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{announcement.title}</h3>
                        <Badge variant={getPriorityColor(announcement.priority)} size="sm">
                          {announcement.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{announcement.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Megaphone className="w-4 h-4" /> {announcement.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FolderOpen className="w-4 h-4" /> {announcement.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {announcement.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Club Detail Modal */}
      <Modal
        isOpen={!!selectedClub}
        onClose={() => setSelectedClub(null)}
        title="Club Details"
        size="lg"
      >
        {selectedClub && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mb-4"><selectedClub.icon className="w-20 h-20 text-aegis-forest dark:text-aegis-emerald mx-auto" /></div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedClub.name}</h3>
              <Badge variant={getCategoryColor(selectedClub.category)} className="mb-4">
                {selectedClub.category}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-aegis-forest dark:text-aegis-emerald mb-1">
                  {selectedClub.members}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Members</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-aegis-forest dark:text-aegis-emerald mb-1">
                  {selectedClub.isJoined ? 'Joined' : 'Not Joined'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">About</h4>
              <p className="text-gray-600 dark:text-gray-300">{selectedClub.description}</p>
            </div>

            {selectedClub.upcomingEvent && (
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Upcoming Event</h4>
                <div className="bg-aegis-mist dark:bg-aegis-dark-mist rounded-xl p-4">
                  <p className="font-medium text-gray-900 dark:text-white mb-1">{selectedClub.upcomingEvent}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{selectedClub.eventDate}</p>
                </div>
              </div>
            )}

            <Button
              variant={selectedClub.isJoined ? 'secondary' : 'primary'}
              className="w-full"
            >
              {selectedClub.isJoined ? 'Leave Club' : 'Join Club'}
            </Button>
          </div>
        )}
      </Modal>

      {/* Event Detail Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title="Event Details"
        size="lg"
      >
        {selectedEvent && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedEvent.title}</h3>
              <Badge variant={selectedEvent.status === 'registration_open' ? 'success' : 'info'}>
                {selectedEvent.status === 'registration_open' ? 'Registration Open' : 'Upcoming'}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.time}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Venue</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.venue}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Organized By</p>
                <p className="font-medium text-gray-900 dark:text-white">{selectedEvent.club}</p>
              </div>
              <div className="bg-gray-50 dark:bg-aegis-dark-mist rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Registrations</p>
                <p className="font-medium text-aegis-forest dark:text-aegis-emerald">
                  {selectedEvent.registrations} / {selectedEvent.capacity}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Description</h4>
              <p className="text-gray-600 dark:text-gray-300">{selectedEvent.description}</p>
            </div>

            <Button className="w-full">Register for Event</Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ClubsAnnouncements;
