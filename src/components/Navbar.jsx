import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import { isAuthenticated, getUser, logout } from '../utils/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = isAuthenticated();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive(path)
        ? 'text-primary bg-blue-50'
        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LP</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">
              LinkedPost
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {authenticated ? (
              <>
                <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                  Dashboard
                </Link>
                <Link to="/optimizer" className={navLinkClass('/optimizer')}>
                  Optimizer
                </Link>
                <Link to="/history" className={navLinkClass('/history')}>
                  History
                </Link>
                <Link to="/billing" className={navLinkClass('/billing')}>
                  Billing
                </Link>
                <Link to="/settings" className={navLinkClass('/settings')}>
                  Settings
                </Link>
              </>
            ) : null}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {authenticated ? (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span>{user?.name || 'User'}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {authenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block ${navLinkClass('/dashboard')} w-full text-left`}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/optimizer"
                  className={`block ${navLinkClass('/optimizer')} w-full text-left`}
                  onClick={() => setIsOpen(false)}
                >
                  Optimizer
                </Link>
                <Link
                  to="/history"
                  className={`block ${navLinkClass('/history')} w-full text-left`}
                  onClick={() => setIsOpen(false)}
                >
                  History
                </Link>
                <Link
                  to="/billing"
                  className={`block ${navLinkClass('/billing')} w-full text-left`}
                  onClick={() => setIsOpen(false)}
                >
                  Billing
                </Link>
                <Link
                  to="/settings"
                  className={`block ${navLinkClass('/settings')} w-full text-left`}
                  onClick={() => setIsOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  <LogOut size={18} className="inline mr-2" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 bg-primary text-white rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
