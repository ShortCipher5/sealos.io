'use client';

import { AnimateElement } from '@/components/ui/animated-wrapper';
import { IndustryBenefit } from '@/config/industries';

interface IndustryBenefitsProps {
  benefits: IndustryBenefit[];
  industryName: string;
}

export default function IndustryBenefits({
  benefits,
  industryName,
}: IndustryBenefitsProps) {
  return (
    <AnimateElement type="slideUp">
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Why Sealos is Perfect for {industryName}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Sealos provides a comprehensive cloud platform specifically designed
            to address the unique needs of the {industryName.toLowerCase()}{' '}
            industry, offering scalable, secure, and cost-effective solutions.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <AnimateElement key={index} type="slideUp">
              <div className="flex h-full min-h-[180px] flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`h-8 w-8 ${benefit.iconColor}`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="flex-1 leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateElement>
          ))}
        </div>
      </section>
    </AnimateElement>
  );
}
