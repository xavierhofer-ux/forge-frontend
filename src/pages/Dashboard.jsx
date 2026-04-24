import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, PenTool, Clock, Users } from 'lucide-react';
import { getUser } from '../utils/auth';

export default function Dashboard() {
  const user = getUser();
  const [stats, setStats] = useState({
    totalPosts: 24,
    totalEngagement: 2847,
    avgEngagementRate: 12.4,
    thisMonth: 8,
  });

  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: 'Just launched my new product!',
      date: '2 hours ago',
      engagement: 143,
      views: 1200,
    },
    {
      id: 2,
      title: 'Excited to share insights on AI',
      date: '1 day ago',
      engagement: 287,
      views: 3400,
    },
    {
      id: 3,
      title: 'Best practices for remote teams',
      date: '3 days ago',
      engagement: 156,
      views: 2100,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className="text-gray-600">Here's your LinkedIn optimization dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalPosts}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <PenTool className="text-primary" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-4">+4 this month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Engagement</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalEngagement}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-4">+23% from last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Engagement Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.avgEngagementRate}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Industry avg: 8.2%</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Profile Views</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1.2K</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Users className="text-orange-600" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-4">+15% this week</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/optimizer"
                  className="block w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition text-center"
                >
                  📝 Optimize New Post
                </Link>
                <Link
                  to="/history"
                  className="block w-full px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition text-center"
                >
                  📚 View History
                </Link>
                <Link
                  to="/billing"
                  className="block w-full px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition text-center"
                >
                  💳 Upgrade Plan
                </Link>
              </div>
            </div>

            {/* Plan Info */}
            <div className="bg-blue-50 rounded-xl p-6 mt-6 border border-blue-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Current Plan</h3>
              <p className="text-2xl font-bold text-primary mb-2">Professional</p>
              <p className="text-sm text-gray-600 mb-4">
                100 posts/month • Analytics • Priority support
              </p>
              <button className="text-sm text-primary font-semibold hover:underline">
                View all benefits →
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Recent Posts</h2>
                <Link to="/history" className="text-primary text-sm font-semibold hover:underline">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{post.title}</h3>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Your AI-optimized post with hashtag suggestions and tone improvements
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gray-600">
                        <TrendingUp className="inline mr-1" size={16} />
                        {post.engagement} engagements
                      </span>
                      <span className="text-gray-600">
                        <Users className="inline mr-1" size={16} />
                        {post.views} views
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
