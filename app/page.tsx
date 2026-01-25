import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-2">
                <div className="relative w-48 h-48 overflow-hidden rounded-full">
                  <Image
                    src="/profile.jpg"
                    alt="Jerech Jan Curan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Data Analyst
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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

            {/* Project 2: What You Learned */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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

            {/* Project 3: What You're Aspiring To */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
              href="jererchjancuran2@gmail.com" 
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
