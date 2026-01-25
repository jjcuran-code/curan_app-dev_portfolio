import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Data Analytics Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Data Visualization Elements */}
        <svg className="absolute top-20 right-10 w-96 h-96 opacity-20" viewBox="0 0 200 200">
          {/* Bar Chart */}
          <rect x="20" y="140" width="20" height="40" fill="#3b82f6" rx="2"/>
          <rect x="50" y="110" width="20" height="70" fill="#3b82f6" rx="2"/>
          <rect x="80" y="130" width="20" height="50" fill="#3b82f6" rx="2"/>
          <rect x="110" y="90" width="20" height="90" fill="#3b82f6" rx="2"/>
          <rect x="140" y="120" width="20" height="60" fill="#3b82f6" rx="2"/>
        </svg>
        
        {/* Line Chart */}
        <svg className="absolute bottom-20 left-10 w-96 h-96 opacity-20" viewBox="0 0 200 200">
          <polyline points="20,150 50,120 80,140 110,80 140,100 170,60" 
            fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="150" r="4" fill="#8b5cf6"/>
          <circle cx="50" cy="120" r="4" fill="#8b5cf6"/>
          <circle cx="80" cy="140" r="4" fill="#8b5cf6"/>
          <circle cx="110" cy="80" r="4" fill="#8b5cf6"/>
          <circle cx="140" cy="100" r="4" fill="#8b5cf6"/>
          <circle cx="170" cy="60" r="4" fill="#8b5cf6"/>
        </svg>
        
        {/* Pie Chart */}
        <svg className="absolute top-1/2 left-1/4 w-64 h-64 opacity-15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" 
            strokeDasharray="75 25" transform="rotate(-90 50 50)"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="20" 
            strokeDasharray="25 75" strokeDashoffset="-75" transform="rotate(-90 50 50)"/>
        </svg>
        
        {/* Scatter Plot */}
        <svg className="absolute top-1/3 right-1/4 w-80 h-80 opacity-15" viewBox="0 0 200 200">
          <circle cx="30" cy="150" r="3" fill="#ec4899"/>
          <circle cx="60" cy="120" r="3" fill="#ec4899"/>
          <circle cx="45" cy="140" r="3" fill="#ec4899"/>
          <circle cx="90" cy="100" r="3" fill="#ec4899"/>
          <circle cx="75" cy="130" r="3" fill="#ec4899"/>
          <circle cx="120" cy="80" r="3" fill="#ec4899"/>
          <circle cx="105" cy="110" r="3" fill="#ec4899"/>
          <circle cx="150" cy="60" r="3" fill="#ec4899"/>
          <circle cx="135" cy="90" r="3" fill="#ec4899"/>
          <circle cx="165" cy="70" r="3" fill="#ec4899"/>
        </svg>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Curan | Data Analyst</h1>
            <div className="flex gap-6">
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#learning" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Learning</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-2">
                <div className="relative w-48 h-48 overflow-hidden rounded-full ring-4 ring-white dark:ring-gray-800 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Jerech Jan Curan"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Data Analyst
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Transforming raw data into actionable insights through statistical analysis, visualization, and storytelling
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section - "The Big Three" */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Three projects that demonstrate my journey: what I know, what I learned, and what I'm aspiring to build
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1: What You Know */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">📊</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-2">WHAT I KNOW</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Sales Dashboard Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interactive dashboard analyzing sales trends, customer behavior, and revenue patterns using Python and Tableau.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Tableau</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">Excel</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    View Demo →
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline font-medium">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: What You Learned */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">🎯</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2">WHAT I LEARNED</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Customer Segmentation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Applied clustering algorithms and SQL queries to segment customers, improving targeted marketing strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">Pandas</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">Scikit-learn</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                    View Demo →
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline font-medium">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: What You're Aspiring To */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-green-600 dark:text-green-400 text-sm font-semibold mb-2">ASPIRING TO BUILD</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Predictive Analytics Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Building a real-time predictive model for business forecasting using machine learning and cloud technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Machine Learning</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">Azure</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline font-medium">
                    View Demo →
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline font-medium">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section id="learning" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Currently Learning
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Expanding my data analytics toolkit with new technologies and methodologies
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Advanced SQL & Database Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mastering complex queries, optimization techniques, and database architecture for large-scale data analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Power BI & Data Visualization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating interactive dashboards and reports that tell compelling data stories for business stakeholders
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Statistical Analysis & R
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Applying statistical methods and R programming for hypothesis testing and predictive modeling
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Machine Learning Fundamentals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Exploring ML algorithms and techniques to enhance predictive analytics capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Looking for data-driven insights? Let's discuss how I can help transform your data into actionable strategies
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a 
              href="mailto:jererchjancuran2@gmail.com" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/jjcuran-code" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200 font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jerech-jan-curan-0049a23a7/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center text-gray-400">
        <p>© 2026 Jerech Jan Curan. Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
