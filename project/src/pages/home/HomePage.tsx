import { FileText, Upload, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onLogin?: (role: 'student' | 'mentor' | 'employer' | 'admin') => void;
  onNavigate?: (page: string) => void;
}

export default function HomePage({ onLogin, onNavigate }: HomePageProps) {
  // Navigation handlers
  const handleLoginClick = () => {
    if (onNavigate) onNavigate('login');
  };
  
  const handleRegisterClick = () => {
    if (onNavigate) onNavigate('register');
  };
  
  const handleDemoLogin = (role: 'student' | 'mentor' | 'employer' | 'admin') => {
    if (onLogin) onLogin(role);
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-primary rounded-md text-white">
                <FileText size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nesture</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400">Home</a>
              <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400">Features</a>
              <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400">How it Works</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={handleLoginClick}
                className="border-primary text-primary hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950"
              >
                Login
              </Button>
              <Button onClick={handleRegisterClick}>
                Register
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">Your Project Nest in the Digital World</h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Showcase. Validate. Hire.</p>
            <p className="mt-6 text-gray-600 dark:text-gray-400">Nesture is a comprehensive platform for students to showcase their projects, mentors to provide feedback, and employers to discover talent.</p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={handleRegisterClick}>
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            
            {/* Quick login buttons for demo */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Demo Login:</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="secondary" size="sm" onClick={() => handleDemoLogin('student')}>
                  Student Demo
                </Button>
                <Button variant="secondary" size="sm" onClick={() => handleDemoLogin('mentor')}>
                  Mentor Demo
                </Button>
                <Button variant="secondary" size="sm" onClick={() => handleDemoLogin('employer')}>
                  Employer Demo
                </Button>
                <Button variant="secondary" size="sm" onClick={() => handleDemoLogin('admin')}>
                  Admin Demo
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            {/* Platform preview image/mockup */}
            <div className="aspect-video bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center p-4">
              <div className="w-full">
                <div className="w-full flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                    <div className="h-2 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                    
                    <div className="space-y-2">
                      <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-8 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="w-2/3">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-20 bg-primary-50 dark:bg-primary-900/20 rounded border border-primary-100 dark:border-primary-800 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-primary-200 dark:bg-primary-800"></div>
                      </div>
                      <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    </div>
                    
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-10 w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-2">
                        <div className="flex justify-between">
                          <div className="h-2 w-1/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="h-4 w-4 rounded-full bg-green-200 dark:bg-green-900"></div>
                        </div>
                      </div>
                      <div className="h-10 w-full bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 p-2">
                        <div className="flex justify-between">
                          <div className="h-2 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                          <div className="h-4 w-4 rounded-full bg-yellow-200 dark:bg-yellow-900"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mb-4">
                <Upload className="text-primary-600 dark:text-primary-400" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Upload Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">Students can upload, track, and manage project submissions with ease.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
                <User className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mentor Feedback</h3>
              <p className="text-gray-600 dark:text-gray-400">Mentors can monitor projects and provide valuable feedback to students.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                <Search className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Employer View</h3>
              <p className="text-gray-600 dark:text-gray-400">Employers can discover top talent by browsing student projects and portfolios.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/3 w-1/3 border-t-2 border-gray-200 dark:border-gray-800"></div>
            <div className="hidden md:block absolute top-16 right-1/3 w-1/3 border-t-2 border-gray-200 dark:border-gray-800"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <User className="text-primary-600 dark:text-primary-400" size={24} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full text-white flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Register</h3>
              <p className="text-gray-600 dark:text-gray-400">Create an account with your role: Student, Mentor, or Employer.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <Upload className="text-purple-600 dark:text-purple-400" size={24} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded-full text-white flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Upload Project or Join Team</h3>
              <p className="text-gray-600 dark:text-gray-400">Students can upload projects or join existing teams and collaborations.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 relative">
                <Search className="text-green-600 dark:text-green-400" size={24} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 dark:bg-green-500 rounded-full text-white flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Get-Reviewed or Search Talent</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects get reviewed by mentors or discovered by employers looking for talent.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Nesture */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Nesture?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Centralized project hub</h3>
                    <p className="text-gray-600 dark:text-gray-400">Keep all your academic and personal projects in one secure, organized location.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Built-in plagiarism checker</h3>
                    <p className="text-gray-600 dark:text-gray-400">Ensure academic integrity with our advanced plagiarism detection technology.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Auto resume builder from real work</h3>
                    <p className="text-gray-600 dark:text-gray-400">Automatically generate a professional resume based on your uploaded projects and achievements.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Student Dashboard</h3>
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <div className="w-full h-full p-2">
                    <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="h-10 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                      <div className="h-10 bg-purple-100 dark:bg-purple-900/30 rounded"></div>
                    </div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mentor Dashboard</h3>
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <div className="w-full h-full p-2">
                    <div className="h-2 w-1/2 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 w-full bg-yellow-100 dark:bg-yellow-900/30 rounded mb-2"></div>
                    <div className="space-y-1 mb-2">
                      <div className="h-3 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-3 w-4/6 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-6 w-6 rounded-full bg-green-200 dark:bg-green-900"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary dark:bg-primary-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to take your academic game to the next level?</h2>
          <Button size="lg" variant="secondary" onClick={handleRegisterClick}>
            Join Nesture Today
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nesture. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}