import { useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface RegisterPageProps {
  onNavigate?: (page: string) => void;
}

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!acceptTerms) {
      alert('You must accept the terms and conditions');
      return;
    }
    
    // In a real app, this would make an API call to register the user
    // For now, navigate to login page
    if (onNavigate) {
      onNavigate('login');
    }
  };
  
  const handleLoginClick = () => {
    if (onNavigate) {
      onNavigate('login');
    }
  };
  
  const handleHomeClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12">
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
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Create an account</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Join Nesture and start showcasing your projects</p>
        </div>
        
        {/* Registration Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <Label htmlFor="role" className="block text-sm font-medium mb-1">
                I am a
              </Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="mentor">Mentor</SelectItem>
                  <SelectItem value="employer">Employer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="first_name" className="block text-sm font-medium mb-1">
                  First name
                </Label>
                <Input 
                  type="text" 
                  id="first_name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="last_name" className="block text-sm font-medium mb-1">
                  Last name
                </Label>
                <Input 
                  type="text" 
                  id="last_name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe" 
                  required 
                />
              </div>
            </div>
            
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
            </div>
            
            <div className="mb-6">
              <Label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </Label>
              <Input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                required 
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Must be at least 8 characters with mixed case, numbers and symbols
              </p>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="confirm_password" className="block text-sm font-medium mb-1">
                Confirm password
              </Label>
              <Input 
                type="password" 
                id="confirm_password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••" 
                required 
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  className="mt-1"
                />
                <Label 
                  htmlFor="terms" 
                  className="ml-2 text-sm"
                >
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:text-primary-600 dark:hover:text-primary-400">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-primary hover:text-primary-600 dark:hover:text-primary-400">
                    Privacy Policy
                  </a>
                </Label>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <button 
                onClick={handleLoginClick}
                className="font-medium text-primary hover:text-primary-600 dark:hover:text-primary-400"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}