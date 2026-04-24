import React, { useState } from 'react';
import { Sparkles, Copy, Download, Send, AlertCircle } from 'lucide-react';
import { postAPI } from '../utils/api';

export default function PostOptimizer() {
  const [originalPost, setOriginalPost] = useState('');
  const [optimizedPost, setOptimizedPost] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('suggestions');

  const handleOptimize = async () => {
    setError('');
    if (!originalPost.trim()) {
      setError('Please paste a post to optimize');
      return;
    }

    setLoading(true);
    try {
      // Mock API call - replace with actual API when backend is ready
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockOptimized = `${originalPost}

#LinkedIn #CareerDevelopment #Innovation #GrowthMindset #Networking`;

      const mockSuggestions = [
        {
          id: 1,
          type: 'hashtag',
          title: 'Add Relevant Hashtags',
          description: 'These hashtags will help your post reach the right audience',
          current: 'No hashtags',
          suggested: '#LinkedIn #CareerDevelopment #Innovation #GrowthMindset #Networking',
          impact: 'High',
        },
        {
          id: 2,
          type: 'tone',
          title: 'Adjust Tone',
          description: 'Consider a more conversational and engaging tone',
          current: 'Formal',
          suggested: 'Add personal insights and questions',
          impact: 'Medium',
        },
        {
          id: 3,
          type: 'structure',
          title: 'Improve Structure',
          description: 'Use line breaks to make the post more readable',
          current: 'Single paragraph',
          suggested: 'Break into 2-3 short paragraphs',
          impact: 'High',
        },
        {
          id: 4,
          type: 'cta',
          title: 'Add Call to Action',
          description: 'Encourage engagement with a question or comment',
          current: 'No CTA',
          suggested: 'What are your thoughts? Let me know in the comments!',
          impact: 'High',
        },
      ];

      setOptimizedPost(mockOptimized);
      setSuggestions(mockSuggestions);
    } catch (err) {
      setError('Failed to optimize post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(optimizedPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = async () => {
    try {
      // Mock save - replace with actual API when backend is ready
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert('Post saved successfully!');
      setOriginalPost('');
      setOptimizedPost('');
      setSuggestions([]);
    } catch (err) {
      setError('Failed to save post. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
            <Sparkles className="text-primary" size={32} />
            LinkedIn Post Optimizer
          </h1>
          <p className="text-gray-600">
            Paste your LinkedIn post and get AI-powered suggestions to boost engagement
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Original Post</h2>
            <textarea
              value={originalPost}
              onChange={(e) => setOriginalPost(e.target.value)}
              placeholder="Paste your LinkedIn post here... Tell us about your achievement, insight, or story."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
            />
            <p className="text-sm text-gray-500 mt-2">
              Character count: {originalPost.length}/3000
            </p>

            <button
              onClick={handleOptimize}
              disabled={loading || !originalPost.trim()}
              className="w-full mt-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              {loading ? 'Optimizing...' : 'Optimize Post'}
            </button>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Tips for better optimization:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Be authentic and personal</li>
                <li>✓ Include specific details and examples</li>
                <li>✓ Use clear, concise language</li>
                <li>✓ Add relevant hashtags</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Optimized Version</h2>

            {optimizedPost ? (
              <>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 min-h-64 mb-6">
                  <p className="text-gray-800 whitespace-pre-wrap">{optimizedPost}</p>
                </div>

                <div className="flex gap-3 mb-6">
                  <button
                    onClick={handleCopy}
                    className={`flex-1 py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                      copied
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Copy size={18} />
                    {copied ? 'Copied!' : 'Copy Post'}
                  </button>
                  <button className="flex-1 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Save Post
                  </button>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-4">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveTab('suggestions')}
                      className={`px-4 py-2 font-medium border-b-2 transition ${
                        activeTab === 'suggestions'
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Suggestions ({suggestions.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('stats')}
                      className={`px-4 py-2 font-medium border-b-2 transition ${
                        activeTab === 'stats'
                          ? 'border-primary text-primary'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Stats
                    </button>
                  </div>
                </div>

                {/* Suggestions Tab */}
                {activeTab === 'suggestions' && (
                  <div className="space-y-4">
                    {suggestions.map((suggestion) => (
                      <div key={suggestion.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{suggestion.title}</h3>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              suggestion.impact === 'High'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {suggestion.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                        <div className="bg-gray-50 p-2 rounded text-xs text-gray-700">
                          <p className="font-medium mb-1">Suggested:</p>
                          <p>{suggestion.suggested}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats Tab */}
                {activeTab === 'stats' && (
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Estimated Engagement Lift</p>
                      <p className="text-3xl font-bold text-primary">+34%</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Post Quality Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                        <span className="font-bold text-gray-900">82/100</span>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm font-medium text-gray-900 mb-2">Key Improvements:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ Added 5 relevant hashtags</li>
                        <li>✓ Improved readability with line breaks</li>
                        <li>✓ Added call-to-action</li>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="h-64 flex items-center justify-center text-center">
                <p className="text-gray-500">
                  Paste a post and click "Optimize Post" to see AI-powered suggestions
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
