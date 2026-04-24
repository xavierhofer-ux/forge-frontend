import React, { useState } from 'react';
import { Save, Lock, Bell, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { getUser, setUser } from '../utils/auth';

export default function Settings() {
  const user = getUser();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'AI enthusiast and LinkedIn content creator',
    website: 'https://example.com',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    optEngagementAlerts: true,
    weeklyDigest: true,
    postReminders: false,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profilePublic: true,
    allowMessages: true,
    analytics: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setError('');
    setSuccess('');
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser({ ...user, ...profileData });
      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  const handleChangePassword = async () => {
    setError('');
    setSuccess('');

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      setError('All password fields are required');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setError('New password must be at least 8 characters');
      return;
    }

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSuccess('Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setShowPasswordFields(false);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to change password');
    }
  };

  const handleSaveNotifications = async () => {
    setError('');
    setSuccess('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSuccess('Notification settings updated!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update settings');
    }
  };

  const handleSavePrivacy = async () => {
    setError('');
    setSuccess('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSuccess('Privacy settings updated!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to update settings');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account preferences and settings</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700">{success}</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-gray-200 flex-wrap">
          {[
            { id: 'profile', label: 'Profile' },
            { id: 'password', label: 'Security' },
            { id: 'notifications', label: 'Notifications' },
            { id: 'privacy', label: 'Privacy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleProfileChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <p className="text-xs text-gray-500 mt-1">200 characters max</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={profileData.website}
                  onChange={handleProfileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="w-full md:w-auto px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 justify-center"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === 'password' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>

            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700">
                Keep your account secure by using a strong, unique password. Never share your password with anyone.
              </p>
            </div>

            {!showPasswordFields ? (
              <button
                onClick={() => setShowPasswordFields(true)}
                className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-blue-50 transition flex items-center gap-2"
              >
                <Lock size={20} />
                Change Password
              </button>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter your current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    placeholder="Enter your new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">At least 8 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm your new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleChangePassword}
                    className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Update Password
                  </button>
                  <button
                    onClick={() => {
                      setShowPasswordFields(false);
                      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                    }}
                    className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  id: 'emailNotifications',
                  label: 'Email Notifications',
                  description: 'Receive important updates via email',
                },
                {
                  id: 'optEngagementAlerts',
                  label: 'Engagement Alerts',
                  description: 'Get notified when your posts get high engagement',
                },
                {
                  id: 'weeklyDigest',
                  label: 'Weekly Digest',
                  description: 'Receive a weekly summary of your post performance',
                },
                {
                  id: 'postReminders',
                  label: 'Post Reminders',
                  description: 'Get reminded to post on optimal times',
                },
              ].map((setting) => (
                <div key={setting.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <input
                    type="checkbox"
                    id={setting.id}
                    checked={notificationSettings[setting.id]}
                    onChange={(e) =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        [setting.id]: e.target.checked,
                      }))
                    }
                    className="w-5 h-5 mt-1 cursor-pointer"
                  />
                  <label htmlFor={setting.id} className="flex-1 cursor-pointer">
                    <p className="font-medium text-gray-900">{setting.label}</p>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveNotifications}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Bell size={20} />
              Save Preferences
            </button>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy & Data</h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  id: 'profilePublic',
                  label: 'Public Profile',
                  description: 'Allow others to view your LinkedIn optimization profile',
                },
                {
                  id: 'allowMessages',
                  label: 'Message Requests',
                  description: 'Allow users to send you messages',
                },
                {
                  id: 'analytics',
                  label: 'Analytics Sharing',
                  description: 'Help us improve by sharing anonymous usage data',
                },
              ].map((setting) => (
                <div key={setting.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <input
                    type="checkbox"
                    id={setting.id}
                    checked={privacySettings[setting.id]}
                    onChange={(e) =>
                      setPrivacySettings((prev) => ({
                        ...prev,
                        [setting.id]: e.target.checked,
                      }))
                    }
                    className="w-5 h-5 mt-1 cursor-pointer"
                  />
                  <label htmlFor={setting.id} className="flex-1 cursor-pointer">
                    <p className="font-medium text-gray-900">{setting.label}</p>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </label>
                </div>
              ))}
            </div>

            <div className="mb-8 p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2">Danger Zone</h3>
              <p className="text-sm text-gray-700 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
                Delete Account
              </button>
            </div>

            <button
              onClick={handleSavePrivacy}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Save Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
