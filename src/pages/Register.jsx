import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    universityId: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const roles = [
    { id: 'student', name: 'Student', icon: '🎓', description: 'Undergraduate or Graduate' },
    { id: 'faculty', name: 'Faculty', icon: '👨‍🏫', description: 'Teaching Staff' },
    { id: 'authority', name: 'Authority', icon: '👔', description: 'Administrative Staff' },
    { id: 'admin', name: 'Admin', icon: '🛡️', description: 'System Administrator' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Simulate registration
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aegis-sky/20 via-aegis-mist to-white dark:from-aegis-navy dark:via-aegis-dark-mist dark:to-aegis-slate" />

      {/* Mountain Silhouette */}
      <svg className="absolute bottom-0 w-full h-1/3 opacity-10" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path d="M0,200 L300,100 L600,150 L900,50 L1200,150 L1200,300 L0,300 Z" fill="currentColor" className="text-aegis-forest dark:text-aegis-emerald" />
      </svg>

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-5xl font-bold text-gradient mb-2"
          >
            Join AEGIS
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400">Request access to the Digital Citadel</p>

          {/* Step Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            <div className={`h-2 w-16 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-aegis-forest dark:bg-aegis-emerald' : 'bg-gray-300 dark:bg-aegis-slate'}`} />
            <div className={`h-2 w-16 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-aegis-forest dark:bg-aegis-emerald' : 'bg-gray-300 dark:bg-aegis-slate'}`} />
          </div>
        </div>

        <Card glass={true} padding="lg">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-bold text-aegis-forest dark:text-aegis-emerald mb-6">
                  Basic Information
                </h2>

                <Input
                  type="text"
                  name="fullName"
                  label="Full Name"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="email"
                  name="email"
                  label="University Email"
                  placeholder="john.doe@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="text"
                  name="universityId"
                  label="University ID"
                  placeholder="2024-CS-001"
                  value={formData.universityId}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="ghost" onClick={() => navigate('/login')} className="flex-1">
                    Back to Login
                  </Button>
                  <Button type="submit" className="flex-1">
                    Continue
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-bold text-aegis-forest dark:text-aegis-emerald mb-6">
                  Select Your Role
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <motion.button
                      key={role.id}
                      type="button"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, role: role.id })}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                        formData.role === role.id
                          ? 'border-aegis-forest dark:border-aegis-emerald bg-aegis-forest/5 dark:bg-aegis-emerald/10'
                          : 'border-gray-200 dark:border-aegis-slate hover:border-aegis-forest/50 dark:hover:border-aegis-emerald/50'
                      }`}
                    >
                      <div className="text-4xl mb-3">{role.icon}</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {role.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {role.description}
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="ghost" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1" disabled={!formData.role}>
                    Request Access
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
