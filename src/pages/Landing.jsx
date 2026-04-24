import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, BarChart3, Lock, Smartphone } from 'lucide-react';

export default function Landing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Optimize Your LinkedIn Posts with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get AI-powered suggestions to boost engagement, reach, and impact on LinkedIn. Write better posts, grow your network faster.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="h-24 bg-gray-100 rounded-lg"></div>
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="h-20 bg-blue-50 rounded-lg border-2 border-blue-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Features Built for Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Optimization</h3>
              <p className="text-gray-600">
                Get instant suggestions to improve your posts using advanced AI algorithms.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">
                Track performance metrics and engagement rates for all your posts.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and never shared with third parties.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Ready</h3>
              <p className="text-gray-600">
                Optimize posts on the go with our responsive mobile design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$29', features: ['10 posts/month', 'Basic AI suggestions', 'Email support'] },
              { name: 'Professional', price: '$79', popular: true, features: ['100 posts/month', 'Advanced AI suggestions', 'Priority support', 'Analytics'] },
              { name: 'Enterprise', price: 'Custom', features: ['Unlimited posts', 'Custom AI models', '24/7 support', 'API access'] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-xl border-2 transition ${
                  plan.popular
                    ? 'border-primary bg-white shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 bg-primary text-white text-sm rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'border-2 border-primary text-primary hover:bg-blue-50'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to boost your LinkedIn presence?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who are already optimizing their posts
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Free Trial <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
