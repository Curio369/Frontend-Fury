import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, BookOpen, Rocket, Users, Radio, HeartPulse, Landmark, CheckCircle, Activity, BookUser } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';
import heroImage from '../Images/IIT-Mandi-Featured-Image.jpg';

const Landing = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const pillars = [
    {
      title: 'Voice',
      subtitle: 'Grievance System',
      description: 'Your voice matters. Submit, track, and resolve grievances with complete transparency.',
      icon: MessageSquare
    },
    {
      title: 'Fate',
      subtitle: 'Academic Mastery',
      description: 'Master your academic journey with course management and knowledge vault.',
      icon: BookOpen
    },
    {
      title: 'Growth',
      subtitle: 'Opportunities',
      description: 'Discover internships, projects, and tasks tailored for your growth.',
      icon: Rocket
    },
    {
      title: 'Spirit',
      subtitle: 'Clubs & Events',
      description: 'Connect with clubs, join events, and build lasting campus memories.',
      icon: Users
    },
    {
      title: 'Pulse',
      subtitle: 'Campus Feed',
      description: 'Stay updated with real-time announcements and campus news.',
      icon: Radio
    },
    {
      title: 'Strength',
      subtitle: 'Health & Wellness',
      description: 'Access health services and maintain your wellbeing balance.',
      icon: HeartPulse
    },
    {
      title: 'Foundation',
      subtitle: 'Infrastructure',
      description: 'Manage hostel, transport, and campus facilities seamlessly.',
      icon: Landmark
    }
  ];

  const stats = [
    { label: 'Active Students', value: '5000+', icon: Users },
    { label: 'Faculty Members', value: '200+', icon: BookUser },
    { label: 'Resolved Issues', value: '1500+', icon: CheckCircle },
    { label: 'System Uptime', value: '99.9%', icon: Activity }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

        {/* Additional Gradient for Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-aegis-sky/20 via-aegis-mist to-white dark:from-aegis-navy dark:via-aegis-dark-mist dark:to-aegis-navy">
          {/* Mist Effect */}
          <motion.div
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-aegis-slate/20 to-transparent"
          />
        </div>

        {/* Theme Toggle - Top Right */}
        <div className="absolute top-6 right-6 z-10">
          <ThemeToggle />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6 text-gradient relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                textShadow: '0 0 40px rgba(45, 80, 22, 0.5), 0 0 80px rgba(45, 80, 22, 0.3), 0 0 120px rgba(45, 80, 22, 0.2)',
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
              }}
            >
              AEGIS
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-aegis-forest dark:text-gray-300 font-light mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The Unified Digital Citadel
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A powerful platform unifying all campus systems into one secure, elegant fortress.
              Built for students, faculty, and administration to thrive together.
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button onClick={() => navigate('/login')} size="lg">
                Enter the Citadel
              </Button>
              <Button onClick={() => navigate('/register')} variant="secondary" size="lg">
                Join AEGIS
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-aegis-forest dark:border-aegis-emerald rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-aegis-forest dark:bg-aegis-emerald rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white/80 dark:bg-aegis-navy/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <stat.icon className="w-12 h-12 text-aegis-forest dark:text-aegis-emerald" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-4xl font-bold text-aegis-forest dark:text-aegis-emerald mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Pillars Section */}
      <section className="py-20 px-4 bg-white dark:bg-aegis-navy">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient mb-4">The Seven Pillars</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Foundations of your digital campus experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={true} className="h-full">
                  <div className="mb-4">
                    <pillar.icon className="w-12 h-12 text-aegis-forest dark:text-aegis-emerald" />
                  </div>
                  <h3 className="text-2xl font-bold text-aegis-forest dark:text-aegis-emerald mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {pillar.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-aegis-mist dark:from-aegis-navy dark:to-aegis-dark-mist">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-aegis-forest dark:text-aegis-emerald mb-6">
              Built Like a Citadel
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Like the ancient fortresses nestled in the Himalayas, AEGIS stands strong and unified.
              Every system, every service, every voice protected within one secure digital fortress.
              Experience the calm power of integrated campus life.
            </p>
            <Button onClick={() => navigate('/login')} size="lg">
              Begin Your Journey
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
