'use client';

import { Check, Shield, Zap, Code, Globe } from 'lucide-react';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { languagesType } from '@/lib/i18n';
import { CustomButton } from '@/components/ui/button-custom';

// Lazy load the AnimateElement component using Next.js dynamic for better optimization
const AnimateElement = dynamic(
  () =>
    import('@/components/ui/animated-wrapper').then((mod) => ({
      default: mod.AnimateElement,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="mt-[140px] flex min-h-[400px] items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading content...</div>
      </div>
    ),
  },
);

// Define translations for different languages
const translations = {
  en: {
    title: 'Why Choose Sealos',
    subtitle:
      'A lightweight Kubernetes-based cloud operating system that simplifies cloud-native development',
    advantages: [
      {
        icon: 'zap',
        title: 'One-Click Environment Setup',
        description:
          'Provision complete cloud environments with just a few clicks, eliminating thousands of lines of YAML configuration and complex manual setup.',
      },
      {
        icon: 'shield',
        title: 'Built-in Kubernetes Power',
        description:
          'Enjoy all the benefits of Kubernetes - container orchestration, service discovery, and declarative infrastructure - without becoming a Kubernetes expert.',
      },
      {
        icon: 'code',
        title: 'Integrated DevOps Tools',
        description:
          'Access a comprehensive suite of integrated tools including S3-compatible storage, managed databases, and AI endpoints without configuring external services.',
      },
      {
        icon: 'globe',
        title: 'Snapshot-Based Releases',
        description:
          'Capture your entire application environment state with versioned releases, enabling seamless deployment and rollback capabilities with minimal risk.',
      },
    ],
    comparison: {
      title: 'Sealos vs Traditional Solutions',
      sealos: 'Sealos',
      traditional: 'Traditional Cloud',
      features: [
        {
          name: 'Deployment Complexity',
          sealos: 'Streamlined Interface',
          traditional: '100+ Lines of Configuration',
        },
        {
          name: 'Kubernetes Expertise',
          sealos: 'Not Required',
          traditional: 'Extensive Knowledge Needed',
        },
        {
          name: 'DevOps Personnel',
          sealos: 'Minimal Requirements',
          traditional: 'Specialized Teams Needed',
        },
        {
          name: 'Application Management',
          sealos: 'Unified Platform',
          traditional: 'Multiple Management Tools',
        },
      ],
    },
    cta: {
      text: 'Explore Sealos Docs',
    },
  },
  'zh-cn': {
    title: '为什么选择 Sealos',
    subtitle: '基于 Kubernetes 的轻量级云操作系统，简化云原生开发',
    advantages: [
      {
        icon: 'zap',
        title: '一键环境设置',
        description:
          '只需几次点击即可配置完整的云环境，消除数千行 YAML 配置和复杂的手动设置。',
      },
      {
        icon: 'shield',
        title: '内置 Kubernetes 能力',
        description:
          '享受 Kubernetes 的所有优势 - 容器编排、服务发现和声明式基础设施 - 无需成为 Kubernetes 专家。',
      },
      {
        icon: 'code',
        title: '集成 DevOps 工具',
        description:
          '访问全面的集成工具套件，包括 S3 兼容存储、托管数据库和 AI 端点，无需配置外部服务。',
      },
      {
        icon: 'globe',
        title: '基于快照的发布',
        description:
          '捕获整个应用环境状态并创建版本化发布，实现无缝部署和回滚功能，将风险降至最低。',
      },
    ],
    comparison: {
      title: 'Sealos 与传统解决方案对比',
      sealos: 'Sealos',
      traditional: '传统云服务',
      features: [
        {
          name: '部署复杂度',
          sealos: '简化界面',
          traditional: '100+ 行配置代码',
        },
        {
          name: 'Kubernetes 专业知识',
          sealos: '不需要',
          traditional: '需要丰富经验',
        },
        {
          name: 'DevOps 人员需求',
          sealos: '最小化需求',
          traditional: '需要专业团队',
        },
        {
          name: '应用管理',
          sealos: '统一平台',
          traditional: '多种管理工具',
        },
      ],
    },
    cta: {
      text: '探索 SEALOS 文档',
    },
  },
};

// Map icon names to components for more efficient rendering
const iconMap = {
  zap: (className: string) => <Zap className={className} />,
  shield: (className: string) => <Shield className={className} />,
  code: (className: string) => <Code className={className} />,
  globe: (className: string) => <Globe className={className} />,
};

// Color map for icons
const iconColors = {
  zap: 'text-[#44BCFF]',
  shield: 'text-[#FF44EC]',
  code: 'text-[#FF675E]',
  globe: 'text-[#44BCFF]',
};

export default function WhyChooseUs({ lang = 'en' as languagesType }) {
  const t = translations[lang];

  // Advantages component for better SSR support
  const Advantages = () => (
    <>
      {t.advantages.map((advantage, index) => (
        <div
          key={index}
          className="group flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="mb-4">
            {iconMap[advantage.icon as keyof typeof iconMap](
              `h-6 w-6 ${iconColors[advantage.icon as keyof typeof iconColors]}`,
            )}
          </div>
          <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-[#44BCFF]">
            {advantage.title}
          </h3>
          <p className="text-sm text-gray-600">{advantage.description}</p>
        </div>
      ))}
    </>
  );

  // Comparison table component for better SSR support
  const ComparisonTable = () => (
    <>
      {/* Mobile: Card layout */}
      <div className="block lg:hidden">
        <div className="space-y-4 p-4">
          {t.comparison.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="mb-1 text-xs font-semibold text-gray-500">
                {feature.name}
              </div>
              <div className="mb-1 flex items-center">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                  <Check className="h-3 w-3 text-[#44BCFF]" />
                </span>
                <span className="text-sm font-medium text-[#44BCFF]">
                  {t.comparison.sealos}:
                </span>
                <span className="ml-2 text-sm text-gray-900">
                  {feature.sealos}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-500">
                  {t.comparison.traditional}:
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {feature.traditional}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: Table layout */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-[#44BCFF] uppercase"
              >
                {t.comparison.sealos}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                {t.comparison.traditional}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {t.comparison.features.map((feature, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
              >
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                  {feature.name}
                </td>
                <td className="flex items-center px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-3 w-3 text-[#44BCFF]" />
                  </span>
                  {feature.sealos}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  {feature.traditional}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  // Main content component for better SSR support
  const Content = () => (
    <div>
      <div className="text-center">
        <h2 className="text-base font-bold text-black sm:text-4xl">
          {t.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-lg">
          {t.subtitle}
        </p>
      </div>

      {/* Advantages Grid - with optimized rendering */}
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
        <Advantages />
      </div>

      {/* Comparison Table - with optimized rendering */}
      <div className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md">
        <div className="border-b border-gray-200 bg-gradient-to-r from-[#F8FBFF] to-white p-6">
          <h3 className="text-xl font-semibold">{t.comparison.title}</h3>
        </div>
        <ComparisonTable />
      </div>

      {/* Call to action */}
      {/* <div className="mt-16 text-center">
        <CustomButton
          href={`/${lang === 'zh-cn' ? 'zh-cn/' : ''}docs`}
          className="bg-custom-bg text-custom-primary-text shadow-button inline-flex items-center justify-center rounded-md px-6 py-3 hover:bg-[#97D9FF]"
          title={t.cta.text}
          actionType="url"
          location="why-choose-us-cta"
        >
          {t.cta.text}
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </CustomButton>
      </div> */}
    </div>
  );

  return (
    <Suspense
      fallback={
        <div className="mt-[140px] flex min-h-[400px] items-center justify-center">
          <div className="text-center text-gray-500">Loading...</div>
        </div>
      }
    >
      <AnimateElement type="slideUp">
        <Content />
      </AnimateElement>
    </Suspense>
  );
}
