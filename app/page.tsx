'use client';

import Image from 'next/image';
import { useState, useEffect, FormEvent } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [projectsAnalyzed, setProjectsAnalyzed] = useState(0);
  const [dataVisualized, setDataVisualized] = useState(0);
  const [insightsDelivered, setInsightsDelivered] = useState(0);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xvzawpzq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

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
    const projectsTarget = 15;
    const dataTarget = 100;
    const insightsTarget = 30;

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
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-4 border-blue-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-20 border-4 border-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rotate-12 animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border-4 border-green-400/30 rounded-lg rotate-12 animate-spin-reverse"></div>
        
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
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  {projectsAnalyzed}+
                </div>
                <div className="text-white/90 text-lg font-medium">Projects Analyzed</div>
                <div className="text-white/70 text-sm mt-2">Data-driven insights delivered</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-white mb-2 transition-transform group-hover:scale-110">
                  {dataVisualized}K+
                </div>
                <div className="text-white/90 text-lg font-medium">Data Points Visualized</div>
                <div className="text-white/70 text-sm mt-2">Charts and dashboards created</div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
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
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Advanced SQL & Database Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Mastering complex queries, optimization techniques, and database architecture for large-scale data analysis
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1 inline-block">75% Complete</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Power BI & Data Visualization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Creating interactive dashboards and reports that tell compelling data stories for business stakeholders
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-1 inline-block">60% Complete</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Statistical Analysis & R
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Applying statistical methods and R programming for hypothesis testing and predictive modeling
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium mt-1 inline-block">50% Complete</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Machine Learning Fundamentals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Exploring ML algorithms and techniques to enhance predictive analytics capabilities
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                  </div>
                  <span className="text-sm text-orange-600 dark:text-orange-400 font-medium mt-1 inline-block">40% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Social Links & Info */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out through social media or send me a message directly.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://github.com/jjcuran-code" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jerech-jan-curan-0049a23a7/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:jerechjancuran2@gmail.com" 
                  className="inline-flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="font-medium">jerechjancuran2@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Side - Let's Connect & Form */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Looking for data-driven insights? Fill out the form and I'll get back to you!
              </p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? "Sending..." : "Send Message"}
                </button>
                
                {formStatus === "success" && (
                  <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center text-sm">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus === "error" && (
                  <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg text-center text-sm">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
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
