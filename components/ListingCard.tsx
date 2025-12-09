import React from 'react';
import Link from 'next/link';

interface ListingCardProps {
  rank: number;
  isBest?: boolean;
  logo: string;
  name: string;
  url: string;
  pros: string[];
  cons: string[];
  rating: number;
  userRatings: number;
  ctaText?: string;
  dealText?: string;
  dealExpiry?: string;
}

export default function ListingCard({
  rank,
  isBest = false,
  logo,
  name,
  url,
  pros,
  cons,
  rating,
  userRatings,
  ctaText = 'VISIT SITE',
  dealText,
  dealExpiry
}: ListingCardProps) {
  const getRatingLabel = (score: number) => {
    if (score >= 9.5) return 'Excellent';
    if (score >= 8.5) return 'Good';
    if (score >= 7.5) return 'Average';
    return 'Below Average';
  };

  const getStarCount = (score: number) => {
    if (score >= 9.5) return 5;
    if (score >= 8.5) return 4;
    if (score >= 7) return 3;
    return 2;
  };

  return (
    <div className={`relative bg-white rounded-2xl border-2 mb-16 overflow-visible transition-all duration-300 ${isBest ? 'border-green-500 shadow-2xl shadow-green-100' : 'border-gray-200 shadow-lg'}`}>
      {/* Rank Badge - More prominent */}
      <div className="absolute -top-6 left-10 z-10">
        {isBest ? (
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-black text-base shadow-2xl border-2 border-green-500 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>#{rank} BEST IN 2025</span>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-xl font-bold text-base shadow-xl">
            #{rank}
          </div>
        )}
      </div>

      <div className="p-10 pt-16 lg:p-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Logo Column - Bigger placeholder */}
          <div className="lg:col-span-3 flex flex-col items-center justify-start">
            <Link href={url} target="_blank" rel="nofollow noopener" className="block w-full">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 group">
                <span className="text-5xl font-black text-gray-300 group-hover:text-green-500 transition-colors">
                  {name.split(' ')[0]}
                </span>
              </div>
            </Link>
          </div>

          {/* Content Column - More spacious */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">{name}</h3>
            
            {/* Pros and Cons List with better spacing */}
            <ul className="space-y-4">
              {pros.map((pro, index) => (
                <li key={`pro-${index}`} className="flex items-start group">
                  <span className="text-green-600 font-black mr-4 mt-1 text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ✓
                  </span>
                  <span 
                    className="text-gray-700 text-lg leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: pro }} 
                  />
                </li>
              ))}
              {cons.map((con, index) => (
                <li key={`con-${index}`} className="flex items-start group">
                  <span className="text-red-600 font-black mr-4 mt-1 text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    ✗
                  </span>
                  <span 
                    className="text-gray-700 text-lg leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: con }} 
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Rating & CTA Column - More prominent */}
          <div className="lg:col-span-3 flex flex-col space-y-5">
            {/* Rating Block - Redesigned */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center border-2 border-gray-200 shadow-lg">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Overall Score
              </div>
              <div className="relative">
                <div className="text-7xl font-black mb-4 bg-gradient-to-br from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent leading-none">
                  {rating}
                </div>
              </div>
              <div className="text-base font-black text-green-600 mb-4 uppercase tracking-wide">
                {getRatingLabel(rating)}
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-3xl ${i < getStarCount(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-600 font-semibold">
                ({userRatings.toLocaleString()} reviews)
              </div>
            </div>

            {/* CTA Button - More prominent */}
            <Link
              href={url}
              target="_blank"
              rel="nofollow noopener"
              className="block w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white font-black py-5 px-8 rounded-xl text-center transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg border-2 border-green-500"
            >
              <span className="flex items-center justify-center gap-2">
                {ctaText}
                <span className="text-2xl">→</span>
              </span>
            </Link>

            {/* Deal Badge - Redesigned */}
            {dealText && (
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-6 rounded-xl text-center shadow-xl border-2 border-red-500 transform hover:scale-105 transition-transform">
                <div className="font-black text-2xl mb-2">{dealText}</div>
                {dealExpiry && (
                  <div className="text-sm font-bold opacity-95">
                    Sale Ends:<br />
                    <span className="text-base font-black">{dealExpiry}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
