interface HeroProps {
  title: string;
  description?: string;
  lastUpdated?: string;
  backgroundImage?: string;
}

export default function Hero({ 
  title, 
  description, 
  lastUpdated,
  backgroundImage
}: HeroProps) {
  const currentDate = lastUpdated || new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-600/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          <div className="inline-flex items-center bg-green-600/20 backdrop-blur-sm border border-green-500/30 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-300 font-bold text-sm">
              Last Updated: {currentDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
