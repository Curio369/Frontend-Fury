import React from 'react';

const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error = '',
  required = false,
  icon = null,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 ${icon ? 'pl-10' : ''} rounded-xl border-2 border-gray-200 dark:border-aegis-slate
            bg-white dark:bg-aegis-dark-mist text-gray-900 dark:text-gray-100
            focus:border-aegis-forest dark:focus:border-aegis-emerald focus:outline-none
            transition-colors duration-300 ${error ? 'border-red-500' : ''}`}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
