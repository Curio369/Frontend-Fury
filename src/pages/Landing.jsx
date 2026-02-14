import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';

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
      icon: '🗣️'
    },
    {
      title: 'Fate',
      subtitle: 'Academic Mastery',
      description: 'Master your academic journey with course management and knowledge vault.',
      icon: '📚'
    },
    {
      title: 'Growth',
      subtitle: 'Opportunities',
      description: 'Discover internships, projects, and tasks tailored for your growth.',
      icon: '🚀'
    },
    {
      title: 'Spirit',
      subtitle: 'Clubs & Events',
      description: 'Connect with clubs, join events, and build lasting campus memories.',
      icon: '🎭'
    },
    {
      title: 'Pulse',
      subtitle: 'Campus Feed',
      description: 'Stay updated with real-time announcements and campus news.',
      icon: '📡'
    },
    {
      title: 'Strength',
      subtitle: 'Health & Wellness',
      description: 'Access health services and maintain your wellbeing balance.',
      icon: '💪'
    },
    {
      title: 'Foundation',
      subtitle: 'Infrastructure',
      description: 'Manage hostel, transport, and campus facilities seamlessly.',
      icon: '🏛️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Mountain Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-aegis-sky/20 via-aegis-mist to-white dark:from-aegis-navy dark:via-aegis-dark-mist dark:to-aegis-navy">
          <svg className="absolute bottom-0 w-full h-2/3" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,400 L200,250 L400,350 L600,150 L800,300 L1000,200 L1200,350 L1200,600 L0,600 Z"
              fill="url(#mountain-gradient)"
              className="dark:opacity-20"
            />
            <defs>
              <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2D5016" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2D5016" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

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
              className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
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
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
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
                  <div className="text-5xl mb-4">{pillar.icon}</div>
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
