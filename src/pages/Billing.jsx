import React, { useState } from 'react';
import { Check, Download, Calendar } from 'lucide-react';

export default function Billing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [currentPlan, setCurrentPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 290,
      description: 'Perfect for individuals just getting started',
      features: [
        '10 posts per month',
        'Basic AI suggestions',
        'Post history',
        'Email support',
        'Basic analytics',
      ],
      cta: 'Choose Plan',
    },
    {
      id: 'professional',
      name: 'Professional',
      monthlyPrice: 79,
      annualPrice: 790,
      description: 'Best for active professionals',
      features: [
        '100 posts per month',
        'Advanced AI suggestions',
        'Full analytics dashboard',
        'Priority support',
        'Hashtag recommendations',
        'Tone optimization',
        'Engagement predictions',
      ],
      cta: 'Your Current Plan',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      description: 'For teams and organizations',
      features: [
        'Unlimited posts',
        'Custom AI models',
        '24/7 phone support',
        'Team collaboration',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
    },
  ];

  const invoices = [
    {
      id: 'INV-001',
      date: 'April 1, 2026',
      amount: '$79.00',
      status: 'Paid',
      period: 'April 2026',
    },
    {
      id: 'INV-002',
      date: 'March 1, 2026',
      amount: '$79.00',
      status: 'Paid',
      period: 'March 2026',
    },
    {
      id: 'INV-003',
      date: 'February 1, 2026',
      amount: '$79.00',
      status: 'Paid',
      period: 'February 2026',
    },
  ];

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Billing & Plans</h1>
          <p className="text-gray-600">Manage your subscription and view invoices</p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition relative ${
                billingPeriod === 'annual'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual Billing
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl overflow-hidden transition ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {/* Card Header */}
              <div className={`p-8 ${plan.popular ? 'bg-opacity-90' : ''}`}>
                {plan.popular && (
                  <div className="mb-4 inline-block px-3 py-1 bg-white bg-opacity-20 text-white text-sm rounded-full font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? '' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                {plan.monthlyPrice ? (
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${plan.popular ? '' : 'text-gray-900'}`}>
                        ${getPrice(plan)}
                      </span>
                      <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className={`text-2xl font-bold ${plan.popular ? '' : 'text-gray-900'}`}>
                      Custom Pricing
                    </p>
                  </div>
                )}

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    plan.id === currentPlan
                      ? plan.popular
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-gray-200 text-gray-700 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'border-2 border-primary text-primary hover:bg-blue-50'
                  }`}
                  disabled={plan.id === currentPlan}
                >
                  {plan.id === currentPlan ? plan.cta : plan.cta}
                </button>
              </div>

              {/* Features List */}
              <div className={`p-8 border-t ${plan.popular ? 'border-blue-500 border-opacity-30' : 'border-gray-200'}`}>
                <p className={`text-sm font-semibold mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-900'}`}>
                  What's included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 ${plan.popular ? 'text-blue-100' : 'text-green-600'}`}
                      />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Current Plan Details */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Subscription</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Plan</p>
              <p className="text-2xl font-bold text-gray-900">Professional</p>
              <p className="text-sm text-gray-600 mt-1">100 posts/month</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Renewal Date</p>
              <p className="text-2xl font-bold text-gray-900">May 1, 2026</p>
              <p className="text-sm text-gray-600 mt-1">29 days remaining</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-2">Monthly Amount</p>
              <p className="text-2xl font-bold text-gray-900">$79.00</p>
              <p className="text-sm text-gray-600 mt-1">Auto-renewal enabled</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Upgrade Plan
            </button>
            <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-red-300 hover:text-red-600 transition">
              Cancel Subscription
            </button>
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing History</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Period</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{invoice.id}</td>
                    <td className="px-6 py-4 text-gray-600">{invoice.period}</td>
                    <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{invoice.amount}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:underline font-medium flex items-center gap-2 justify-end">
                        <Download size={16} />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
