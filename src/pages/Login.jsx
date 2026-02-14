import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, GraduationCap, BookUser, Briefcase, Shield, DoorOpen } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showGateAnimation, setShowGateAnimation] = useState(false);

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap },
    { id: 'faculty', name: 'Faculty', icon: BookUser },
    { id: 'authority', name: 'Authority', icon: Briefcase },
    { id: 'admin', name: 'Admin', icon: Shield }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      setShowGateAnimation(true);

      // Navigate to dashboard after gate animation
      setTimeout(() => {
        navigate('/dashboard', { state: { role: formData.role || 'student' } });
      }, 2000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aegis-mist via-white to-aegis-sky/20 dark:from-aegis-navy dark:via-aegis-dark-mist dark:to-aegis-slate" />

      {/* Mountain Silhouette */}
      <svg className="absolute bottom-0 w-full h-1/3 opacity-10" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path d="M0,200 L300,100 L600,150 L900,50 L1200,150 L1200,300 L0,300 Z" fill="currentColor" className="text-aegis-forest dark:text-aegis-emerald" />
      </svg>

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      {/* Gate Opening Animation */}
      {showGateAnimation && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="fixed inset-y-0 left-0 w-1/2 bg-aegis-forest dark:bg-aegis-slate z-50 flex items-center justify-end pr-4"
          >
            <DoorOpen className="w-16 h-16 text-white" />
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-1/2 bg-aegis-forest dark:bg-aegis-slate z-50 flex items-center justify-start pl-4"
          >
            <DoorOpen className="w-16 h-16 text-white" />
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-5xl font-bold text-gradient mb-2"
          >
            The Iron Gate
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400">Enter the Digital Citadel</p>
        </div>

        <Card glass={true} padding="lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="your.email@university.edu"
              value={formData.email}
              onChange={handleChange}
              required
              icon={
                <Mail className="w-5 h-5" />
              }
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              icon={
                <Lock className="w-5 h-5" />
              }
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Select Your Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <motion.button
                    key={role.id}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormData({ ...formData, role: role.id })}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.role === role.id
                        ? 'border-aegis-forest dark:border-aegis-emerald bg-aegis-forest/5 dark:bg-aegis-emerald/10'
                        : 'border-gray-200 dark:border-aegis-slate hover:border-aegis-forest/50 dark:hover:border-aegis-emerald/50'
                    }`}
                  >
                    <div className="text-3xl mb-2">
                      <role.icon className="w-8 h-8 text-aegis-forest dark:text-aegis-emerald" />
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {role.name}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Opening Gates...' : 'Enter AEGIS'}
            </Button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have access?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-aegis-forest dark:text-aegis-emerald hover:underline font-medium"
              >
                Request Entry
              </button>
            </p>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
