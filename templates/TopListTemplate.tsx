import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ListingCard from '@/components/ListingCard';
import { SchemaMarkup } from '@/components/SEOMetadata';

interface Listing {
  rank: number;
  isBest?: boolean;
  logo: string;
  name: string;
  url: string;
  pros: string[];
  cons: string[];
  rating: number;
  userRatings: number;
  dealText?: string;
  dealExpiry?: string;
}

interface TopListTemplateProps {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription?: string;
  introTitle: string;
  introText: string[];
  listings: Listing[];
  fullReviewContent?: React.ReactNode;
  canonical?: string;
}

export default function TopListTemplate({
  seoTitle,
  seoDescription,
  heroTitle,
  heroDescription,
  introTitle,
  introText,
  listings,
  fullReviewContent,
  canonical
}: TopListTemplateProps) {
  return (
    <>
      <SchemaMarkup
        reviews={listings.map(l => ({
          name: l.name,
          rating: l.rating,
          author: "Smart Consumer Insight Editorial Team"
        }))}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <Hero 
          title={heroTitle}
          description={heroDescription}
        />
        
        {/* Intro Section - Better spacing and typography */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-10 text-gray-900 leading-tight">
              {introTitle}
            </h2>
            <div className="space-y-6">
              {introText.map((paragraph, index) => (
                <p key={index} className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                <p className="text-lg lg:text-xl font-bold text-gray-900">
                  📊 Here are our Top {listings.length} Picks for 2025, with a{' '}
                  <a href="#full-review" className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-2">
                    detailed review of our #1 recommendation
                  </a>{' '}
                  at the bottom of the page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Section - More breathing room */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
                Our Top {listings.length} Rankings
              </h2>
              <p className="text-xl text-gray-600">
                Tested, reviewed, and ranked by our independent editorial team
              </p>
            </div>
            
            {listings.map((listing) => (
              <ListingCard
                key={listing.rank}
                rank={listing.rank}
                isBest={listing.isBest}
                logo={listing.logo}
                name={listing.name}
                url={listing.url}
                pros={listing.pros}
                cons={listing.cons}
                rating={listing.rating}
                userRatings={listing.userRatings}
                dealText={listing.dealText}
                dealExpiry={listing.dealExpiry}
              />
            ))}
          </div>
        </section>

        {/* Best Overall Highlight Section */}
        <section className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-green-600 text-white px-10 py-4 rounded-2xl text-2xl lg:text-3xl font-black shadow-2xl mb-6 transform hover:scale-105 transition-transform">
                <span className="text-4xl mr-3">🏆</span>
                <span>Our #1 Recommendation for 2025</span>
                <span className="text-4xl ml-3">🏆</span>
              </div>
              <p className="text-xl text-gray-700 font-semibold max-w-3xl mx-auto">
                After extensive testing and comparison, this is the service we recommend above all others
              </p>
            </div>
            
            {listings[0] && (
              <div className="bg-white rounded-3xl shadow-2xl p-4">
                <ListingCard
                  rank={listings[0].rank}
                  isBest={true}
                  logo={listings[0].logo}
                  name={listings[0].name}
                  url={listings[0].url}
                  pros={listings[0].pros}
                  cons={listings[0].cons}
                  rating={listings[0].rating}
                  userRatings={listings[0].userRatings}
                  dealText={listings[0].dealText}
                  dealExpiry={listings[0].dealExpiry}
                />
              </div>
            )}
          </div>
        </section>

        {/* Full Review Section */}
        {fullReviewContent && (
          <section id="full-review" className="bg-white py-20 lg:py-28">
            <div className="container mx-auto max-w-5xl">
              <div className="prose prose-lg max-w-none">
                {fullReviewContent}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="container mx-auto text-center">
            <div className="mb-8 flex flex-wrap justify-center gap-6">
              <a href="/about" className="hover:text-green-400 transition-colors font-semibold text-lg">
                About Us
              </a>
              <a href="/privacy" className="hover:text-green-400 transition-colors font-semibold text-lg">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-green-400 transition-colors font-semibold text-lg">
                Terms of Use
              </a>
              <a href="/contact" className="hover:text-green-400 transition-colors font-semibold text-lg">
                Contact Us
              </a>
            </div>
            <p className="text-gray-400 text-lg mb-6">
              © {new Date().getFullYear()} SmartConsumerInsight.com - All Rights Reserved
            </p>
            <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
              <em>
                This website provides independent reviews and comparisons. We test products ourselves 
                and provide unbiased analysis. We may earn commissions from purchases made through 
                links on this site at no additional cost to you. All opinions are our own based on 
                thorough testing and research.
              </em>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
