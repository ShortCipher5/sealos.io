'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Cpu, HardDrive, Users, Activity } from 'lucide-react';

const scalingMetrics = [
  {
    label: 'CPU Usage',
    value: 45,
    unit: '%',
    color: 'bg-blue-500',
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    label: 'Memory',
    value: 62,
    unit: '%',
    color: 'bg-green-500',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    label: 'Storage',
    value: 78,
    unit: '%',
    color: 'bg-yellow-500',
    icon: <HardDrive className="h-5 w-5" />,
  },
  {
    label: 'Connections',
    value: 134,
    unit: '',
    color: 'bg-purple-500',
    icon: <Users className="h-5 w-5" />,
  },
];

const scalingFeatures = [
  {
    title: 'Real-time Monitoring',
    description: 'Continuous performance tracking with intelligent alerts',
    icon: <Activity className="h-8 w-8" />,
  },
  {
    title: 'Instant Auto-scaling',
    description: 'Resources scale automatically based on demand patterns',
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: 'Zero Downtime',
    description: 'Seamless scaling operations without service interruption',
    icon: <Cpu className="h-8 w-8" />,
  },
];

const performanceStats = [
  { label: 'Uptime SLA', value: '99.9%', color: 'text-blue-600' },
  { label: 'Scale Time', value: '<30s', color: 'text-green-600' },
  { label: 'Cost Reduction', value: '90%', color: 'text-purple-600' },
  { label: 'Downtime', value: '0ms', color: 'text-orange-600' },
];

export default function Scaling() {
  const [isScaling, setIsScaling] = useState(false);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          Auto-Scaling That Just Works
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          From startup to enterprise scale, our intelligent auto-scaling ensures
          optimal performance and cost efficiency without manual intervention.
        </p>
      </div>

      <div className="mb-16 grid gap-8 lg:grid-cols-3">
        {scalingFeatures.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Live Metrics Demo */}
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-gray-900">
              Live Database Metrics
            </h3>
            <button
              onClick={() => setIsScaling(!isScaling)}
              className={`rounded-lg px-4 py-2 font-medium transition-all ${
                isScaling
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {isScaling ? 'Stop Demo' : 'Start Demo'}
            </button>
          </div>

          <div className="space-y-6">
            {scalingMetrics.map((metric, index) => {
              const animatedValue = isScaling
                ? Math.min(95, metric.value + Math.random() * 20)
                : metric.value;

              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-600">{metric.icon}</div>
                      <span className="font-medium text-gray-900">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {Math.round(animatedValue)}
                      {metric.unit}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${metric.color}`}
                      style={{ width: `${animatedValue}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {isScaling && (
              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-blue-500" />
                  <span className="font-medium text-blue-700">
                    Auto-scaling in progress...
                  </span>
                </div>
                <p className="mt-2 text-sm text-blue-600">
                  Adding compute resources to handle increased demand
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
          <h3 className="mb-6 text-2xl font-semibold text-gray-900">
            Performance Guarantees
          </h3>

          <div className="mb-8 grid grid-cols-2 gap-6">
            {performanceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">
              Enterprise Features
            </h4>
            <ul className="space-y-3">
              {[
                'Predictive scaling based on ML patterns',
                'Custom scaling policies and thresholds',
                'Multi-region deployment capabilities',
                'Advanced monitoring and alerting',
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <span className="mr-3 text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
