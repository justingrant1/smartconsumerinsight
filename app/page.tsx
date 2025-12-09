import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  const categories = [
    {
      title: 'Digitizing Services',
      description: 'Preserve your precious memories forever. Compare top VHS, film, and photo digitizing services.',
      icon: '📹',
      link: '/digitizing/best-digitizing-services',
      business: 'HeritageBox',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Affordable Housing',
      description: 'Find Section 8 housing, affordable rentals, and housing resources for low-income families.',
      icon: '🏠',
      link: '/housing/section-8-housing',
      business: 'Casa8',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Baby Name Generators',
      description: 'Discover unique baby names with AI-powered tools. Find the perfect name for your little one.',
      icon: '👶',
      link: '/baby-names/best-baby-name-generators',
      business: 'AIBabyNamer',
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'AI Marketing Tools',
      description: 'Compare AI marketing agencies, automation tools, and lead generation solutions.',
      icon: '🤖',
      link: '/ai-marketing/best-ai-marketing-agencies',
      business: 'Coregent Solutions',
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart<span className="text-green-400">Consumer</span>Insight
            </h1>
            <p className="text-2xl mb-4 text-gray-200">
              Independent Reviews & Comparisons You Can Trust
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We test, compare, and review products and services so you don't have to. 
              Our editorial team provides unbiased, data-driven insights to help you make 
              the best decisions for your family and business.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Explore Our Expert Reviews
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.link}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                    <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 text-lg">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold group-hover:underline">
                          View Reviews →
                        </span>
                        <span className="text-sm text-gray-500">
                          Featuring {category.business}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Trust Smart Consumer Insight?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Independent Testing</h3>
                <p className="text-gray-600">
                  We purchase and test products ourselves, ensuring unbiased reviews.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Analysis</h3>
                <p className="text-gray-600">
                  Our reviews are based on comprehensive research and real-world testing.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Recommendations</h3>
                <p className="text-gray-600">
                  Our team has years of experience evaluating products and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make an Informed Decision?
            </h2>
            <p className="text-xl mb-6">
              Browse our expert reviews and find the best solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.link}
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <a href="/about" className="mx-3 hover:text-green-400">About Us</a>
              <a href="/privacy" className="mx-3 hover:text-green-400">Privacy Policy</a>
              <a href="/terms" className="mx-3 hover:text-green-400">Terms of Use</a>
              <a href="/contact" className="mx-3 hover:text-green-400">Contact Us</a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} SmartConsumerInsight.com All Rights Reserved
            </p>
            <p className="text-xs text-gray-500 mt-4 max-w-3xl mx-auto">
              <em>
                This website provides independent reviews and comparisons. We may earn 
                commissions from purchases made through links on this site at no additional 
                cost to you. All opinions are our own based on thorough testing and research.
              </em>
            </p>
          </div>
        </footer>
    </div>
  );
}
