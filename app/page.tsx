'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [projectsAnalyzed, setProjectsAnalyzed] = useState(0);
  const [dataVisualized, setDataVisualized] = useState(0);
  const [insightsDelivered, setInsightsDelivered] = useState(0);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [statsVisible]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const projectsTarget = 25;
    const dataTarget = 10;
    const insightsTarget = 50;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setProjectsAnalyzed(Math.floor(projectsTarget * progress));
      setDataVisualized(Math.floor(dataTarget * progress));
      setInsightsDelivered(Math.floor(insightsTarget * progress));

      if (currentStep >= steps) {
        clearInterval(interval);
        setProjectsAnalyzed(projectsTarget);
        setDataVisualized(dataTarget);
        setInsightsDelivered(insightsTarget);
      }
    }, duration / steps);
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Data Analytics Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-20">
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100, 116, 139, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 116, 139, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Data Visualization Elements */}
        <svg className="absolute top-20 right-10 w-96 h-96 opacity-30 dark:opacity-20" viewBox="0 0 200 200">
          {/* Bar Chart */}
          <rect x="20" y="140" width="20" height="40" fill="#3b82f6" rx="2"/>
          <rect x="50" y="110" width="20" height="70" fill="#3b82f6" rx="2"/>
          <rect x="80" y="130" width="20" height="50" fill="#3b82f6" rx="2"/>
          <rect x="110" y="90" width="20" height="90" fill="#3b82f6" rx="2"/>
          <rect x="140" y="120" width="20" height="60" fill="#3b82f6" rx="2"/>
        </svg>
        
        {/* Line Chart */}
        <svg className="absolute bottom-20 left-10 w-96 h-96 opacity-30 dark:opacity-20" viewBox="0 0 200 200">
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
        <svg className="absolute top-1/2 left-1/4 w-64 h-64 opacity-25 dark:opacity-15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" 
            strokeDasharray="75 25" transform="rotate(-90 50 50)"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" strokeWidth="20" 
            strokeDasharray="25 75" strokeDashoffset="-75" transform="rotate(-90 50 50)"/>
        </svg>
        
        {/* Scatter Plot */}
        <svg className="absolute top-1/3 right-1/4 w-80 h-80 opacity-25 dark:opacity-15" viewBox="0 0 200 200">
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
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
              Curan | Data Analyst
            </a>
            <div className="flex items-center gap-6">
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#learning" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Learning</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
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
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  {projectsAnalyzed}+
                </div>
                <div className="text-white/90 text-lg font-medium">Projects Analyzed</div>
                <div className="text-white/70 text-sm mt-2">Data-driven insights delivered</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  {dataVisualized}K+
                </div>
                <div className="text-white/90 text-lg font-medium">Data Points Visualized</div>
                <div className="text-white/70 text-sm mt-2">Charts and dashboards created</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  {insightsDelivered}+
                </div>
                <div className="text-white/90 text-lg font-medium">Insights Delivered</div>
                <div className="text-white/70 text-sm mt-2">Actionable recommendations</div>
              </div>
            </div>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden group cursor-pointer">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  <div className="text-white text-6xl group-hover:rotate-12 transition-transform duration-300">📊</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-2 group-hover:animate-pulse">WHAT I KNOW</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Sales Dashboard Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interactive dashboard analyzing sales trends, customer behavior, and revenue patterns using Python and Tableau.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Python</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Tableau</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Excel</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium hover:translate-x-1 transition-transform inline-block">
                    View Demo →
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline font-medium hover:translate-x-1 transition-transform inline-block">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: What You Learned */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden group cursor-pointer">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  <div className="text-white text-6xl group-hover:rotate-12 transition-transform duration-300">🎯</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2 group-hover:animate-pulse">WHAT I LEARNED</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Customer Segmentation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Applied clustering algorithms and SQL queries to segment customers, improving targeted marketing strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">SQL</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Pandas</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Scikit-learn</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline font-medium hover:translate-x-1 transition-transform inline-block">
                    View Demo →
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:underline font-medium">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: What You're Aspiring To */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden group cursor-pointer">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  <div className="text-white text-6xl group-hover:rotate-12 transition-transform duration-300">🚀</div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-green-600 dark:text-green-400 text-sm font-semibold mb-2 group-hover:animate-pulse">ASPIRING TO BUILD</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Predictive Analytics Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Building a real-time predictive model for business forecasting using machine learning and cloud technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Machine Learning</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Power BI</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm hover:scale-110 transition-transform cursor-pointer">Azure</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline font-medium hover:translate-x-1 transition-transform inline-block">
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
