import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Data Analyst Portfolio</h1>
          <p className="text-xl text-gray-300">Transforming Data into Actionable Insights</p>
        </header>

        {/* Profile Image Frame */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            {/* Decorative frame border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            
            {/* Image container */}
            <div className="relative bg-gray-900 rounded-lg p-2">
              <div className="relative w-64 h-64 overflow-hidden rounded-lg">
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Data Analyst with expertise in extracting meaningful insights from complex datasets. 
            Skilled in statistical analysis, data visualization, and business intelligence tools including Python, SQL, 
            Excel, and Tableau. I specialize in turning raw data into compelling stories that drive strategic 
            decision-making and business growth.
          </p>
        </section>
      </div>
    </main>
  );
}
