'use client';

import { GetStartedButton } from '@/components/ui/button-shiny';
import { TestimonialBadge } from '@/components/ui/testimonial-badge';
import { ReactNode } from 'react';
import { languagesType } from '@/lib/i18n';
import { CustomButton } from '../ui/button-custom';

interface HeroProps {
  children?: ReactNode;
  title: {
    main: string;
    sub: string;
  };
  mainTitleEmphasis: number;
  getStartedLink?: string;
  lang?: languagesType;
  testimonial?: boolean;
  videoCta?: boolean;
  secondaryCta?: {
    title: string;
    href: string;
  };
}

export default function Hero({
  children,
  title,
  mainTitleEmphasis,
  getStartedLink,
  lang = 'en',
  testimonial = true,
  videoCta = true,
  secondaryCta,
}: HeroProps) {
  const { partialTitle, highlightTitle } = splitTitle(
    title.main,
    mainTitleEmphasis,
  );

  const translations = {
    en: {
      watchDemo: 'Watch demo',
      getStarted: 'Get Started',
      scrollDown: 'Scroll down to learn more',
      trustedBy: 'Trusted by leading companies worldwide',
    },
    'zh-cn': {
      watchDemo: '观看演示',
      getStarted: '立即开始',
      scrollDown: '向下滚动了解更多',
      trustedBy: '全球领先企业的信赖之选',
    },
  };

  const t =
    translations[lang as keyof typeof translations] || translations['en'];

  return (
    <section className="relative pt-12 sm:pt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <p className="font-inter px-6 text-lg text-gray-600">{title.sub}</p>
          <h1 className="font-pj mt-5 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
            {partialTitle}
            <span className="relative inline-flex sm:inline">
              <span className="absolute inset-0 h-full w-full bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"></span>
              <span className="relative"> {highlightTitle}</span>
            </span>
          </h1>

          {getStartedLink && (
            <>
              {/* CTA buttons */}
              <div className="animate-fade-in-up mt-9 flex items-center justify-center space-x-5">
                <GetStartedButton
                  className="w-auto px-8 py-3 text-lg font-bold"
                  link={getStartedLink}
                  title={t.getStarted}
                  location="hero"
                />
                {secondaryCta && (
                  <CustomButton
                    className="font-pj inline-flex items-center justify-center rounded-xl border-2 border-gray-400 px-6 py-3 text-lg font-medium text-gray-900 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:border-gray-900 focus:bg-gray-900 focus:text-white focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-hidden"
                    title={secondaryCta.title}
                    href={secondaryCta.href}
                    location="hero"
                  >
                    {videoCta && (
                      <svg
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 18 18"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {secondaryCta.title}
                  </CustomButton>
                )}
              </div>

              {testimonial && (
                <>
                  {/* Testimonial badge */}
                  <div className="animate-fade-in-up-delayed mt-8 flex flex-col items-center justify-center">
                    <TestimonialBadge count="10K+" lang={lang} />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="mt-8">{children}</div>
    </section>
  );
}

function splitTitle(str: string, numLastWords: number) {
  let words = str.trim().split(/\s+/); // Split string into words
  if (words.length === 0 || numLastWords <= 0)
    return { partialTitle: str, extractedWord: '' };

  // Ensure we don't try to take more words than exist
  numLastWords = Math.min(numLastWords, words.length);

  // Get the last numLastWords words
  let extractedWords = words.splice(-numLastWords);

  return {
    partialTitle: words.join(' '),
    highlightTitle: extractedWords.join(' '),
  };
}
