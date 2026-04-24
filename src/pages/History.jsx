import React, { useState } from 'react';
import { Edit2, Trash2, Eye, TrendingUp, Filter, Search } from 'lucide-react';

export default function History() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Just launched my new product!',
      originalContent: 'Excited to announce the launch of my new product...',
      date: '2 hours ago',
      engagement: 143,
      views: 1200,
      status: 'published',
    },
    {
      id: 2,
      title: 'Excited to share insights on AI',
      originalContent: 'Sharing some key insights I learned about AI...',
      date: '1 day ago',
      engagement: 287,
      views: 3400,
      status: 'published',
    },
    {
      id: 3,
      title: 'Best practices for remote teams',
      originalContent: 'After working remotely for 3 years, here are...',
      date: '3 days ago',
      engagement: 156,
      views: 2100,
      status: 'published',
    },
    {
      id: 4,
      title: 'Tips for career growth',
      originalContent: 'Here are my top tips for...',
      date: '1 week ago',
      engagement: 89,
      views: 1450,
      status: 'draft',
    },
    {
      id: 5,
      title: 'Networking strategies',
      originalContent: 'Building a strong professional network...',
      date: '2 weeks ago',
      engagement: 234,
      views: 3100,
      status: 'published',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  const handleEdit = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const filteredAndSortedPosts = posts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.originalContent.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || post.status === filterStatus;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'engagement') return b.engagement - a.engagement;
      if (sortBy === 'views') return b.views - a.views;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Post History</h1>
          <p className="text-gray-600">View and manage all your optimized posts</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            {/* Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Posts</option>
              <option value="published">Published</option>
              <option value="draft">Drafts</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="recent">Most Recent</option>
              <option value="engagement">Most Engaged</option>
              <option value="views">Most Views</option>
            </select>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Engagement</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Views</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedPosts.length > 0 ? (
                  filteredAndSortedPosts.map((post) => (
                    <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{post.title}</p>
                          <p className="text-sm text-gray-600 truncate">{post.originalContent}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <TrendingUp size={16} />
                          {post.engagement}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{post.views}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                            title="Edit"
                          >
                            <Edit2 size={18} className="text-blue-600" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                            title="Delete"
                          >
                            <Trash2 size={18} className="text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      No posts found. Create your first post!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {filteredAndSortedPosts.length > 0 && (
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredAndSortedPosts.length} of {posts.length} posts
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Post</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                defaultValue={selectedPost.title}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-4"
              />
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                defaultValue={selectedPost.originalContent}
                className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-6"
              />
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowModal(false);
                    alert('Post updated successfully!');
                  }}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
