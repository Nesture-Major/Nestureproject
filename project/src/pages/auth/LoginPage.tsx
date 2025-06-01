import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface LoginPageProps {
  onLogin?: (role: 'student' | 'mentor' | 'employer' | 'admin') => void;
  onNavigate?: (page: string) => void;
}

export default function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo, determine role from email prefix
    let role: 'student' | 'mentor' | 'employer' | 'admin' = 'student';
    
    if (email.startsWith('mentor')) {
      role = 'mentor';
    } else if (email.startsWith('employer')) {
      role = 'employer';
    } else if (email.startsWith('admin')) {
      role = 'admin';
    }
    
    if (onLogin) {
      onLogin(role);
    }
  };
  
  const handleRegisterClick = () => {
    if (onNavigate) {
      onNavigate('register');
    }
  };
  
  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <button 
            onClick={handleHomeClick}
            className="inline-flex items-center"
          >
            <div className="p-1 bg-primary rounded-md text-white">
              <FileText size={24} />
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Nesture</span>
          </button>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your account</p>
        </div>
        
        {/* Login Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </Label>
              <Input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com" 
                required 
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Demo: Use "student@", "mentor@", "employer@", or "admin@" as email prefix
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <Label htmlFor="password" className="block text-sm font-medium">
                  Password
                </Label>
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-600 dark:hover:text-primary-400">
                  Forgot password?
                </a>
              </div>
              <Input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required 
              />
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember-me" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label 
                  htmlFor="remember-me" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </Label>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <button 
                onClick={handleRegisterClick}
                className="font-medium text-primary hover:text-primary-600 dark:hover:text-primary-400"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nesture. All rights reserved.</p>
      </div>
    </div>
  );
}