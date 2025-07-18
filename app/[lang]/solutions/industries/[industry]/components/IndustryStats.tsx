'use client';

import { AnimateElement } from '@/components/ui/animated-wrapper';
import { IndustryStat } from '@/config/industries';

interface IndustryStatsProps {
  stats: IndustryStat[];
  industryName: string;
}

export default function IndustryStats({
  stats,
  industryName,
}: IndustryStatsProps) {
  return (
    <AnimateElement type="slideUp">
      <section className="mb-20 rounded-2xl bg-blue-50 p-8 lg:p-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Trusted by {industryName} Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See how {industryName.toLowerCase()} organizations worldwide are
            benefiting from cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimateElement key={index} type="slideUp">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="mb-1 text-lg font-semibold text-gray-900">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </AnimateElement>
          ))}
        </div>
      </section>
    </AnimateElement>
  );
}
