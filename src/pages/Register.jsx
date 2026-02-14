import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookUser, Briefcase, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import ThemeToggle from '../components/ThemeToggle';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    universityId: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const roles = [
    { id: 'student', name: 'Student', icon: GraduationCap, description: 'Undergraduate or Graduate' },
    { id: 'faculty', name: 'Faculty', icon: BookUser, description: 'Teaching Staff' },
    { id: 'authority', name: 'Authority', icon: Briefcase, description: 'Administrative Staff' },
    { id: 'admin', name: 'Admin', icon: Shield, description: 'System Administrator' }
  ];

  const validateInstituteEmail = (email) => {
    const validDomains = ['university.edu', 'iitmandi.ac.in', 'students.iitmandi.ac.in'];
    const emailDomain = email.split('@')[1];
    return validDomains.includes(emailDomain);
  };

  const validateStep1 = () => {
    setError('');

    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }

    if (!validateInstituteEmail(formData.email)) {
      setError('Please use your institute email address (@iitmandi.ac.in or @university.edu)');
      return false;
    }

    if (!formData.universityId.trim()) {
      setError('Please enter your university ID');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else {
      if (!formData.role) {
        setError('Please select your role');
        return;
      }

      setIsLoading(true);

      try {
        const result = await register(
          formData.email,
          formData.password,
          formData.role,
          {
            fullName: formData.fullName,
            universityId: formData.universityId
          }
        );

        if (result.success) {
          // Show success message and redirect
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        } else {
          setError(result.message || 'Registration failed. Please try again.');
          setIsLoading(false);
        }
      } catch (err) {
        setError('An error occurred during registration. Please try again.');
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-aegis-sky/20 via-aegis-mist to-white dark:from-aegis-navy dark:via-aegis-dark-mist dark:to-aegis-slate pointer-events-none" />

      {/* Mountain Silhouette */}
      <svg className="absolute bottom-0 w-full h-1/3 opacity-10 pointer-events-none" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <path d="M0,200 L300,100 L600,150 L900,50 L1200,150 L1200,300 L0,300 Z" fill="currentColor" className="text-aegis-forest dark:text-aegis-emerald" />
      </svg>

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 w-full max-w-2xl"
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

        <Card glass={true} padding="lg" hover={false}>
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 mb-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
              </motion.div>
            )}

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
                  label="Institute Email"
                  placeholder="john.doe@iitmandi.ac.in"
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
                      <div className="mb-3"><role.icon className="w-10 h-10 text-aegis-forest dark:text-aegis-emerald" /></div>
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
                  <Button type="submit" className="flex-1" disabled={!formData.role || isLoading}>
                    {isLoading ? 'Submitting Request...' : 'Request Access'}
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
