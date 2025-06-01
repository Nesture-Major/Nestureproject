import { useState } from 'react';
import { FileText } from 'lucide-react';
import { ThemeProvider } from './components/theme-provider';
import AppLayout from './components/layouts/AppLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import MentorDashboard from './pages/mentor/MentorDashboard';
import EmployerDashboard from './pages/employer/EmployerDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import './App.css';

function App() {
  // In a real app, this would come from auth context or API
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'mentor' | 'employer' | 'admin' | null>(null);
  const [activePage, setActivePage] = useState('home');

  // For demo purposes - would be handled by router in real app
  const handleLogin = (role: 'student' | 'mentor' | 'employer' | 'admin') => {
    setIsAuthenticated(true);
    setUserRole(role);
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setActivePage('home');
  };

  // Simulate navigation
  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  // Render the appropriate dashboard based on user role
  const renderDashboard = () => {
    switch (userRole) {
      case 'student':
        return <StudentDashboard />;
      case 'mentor':
        return <MentorDashboard />;
      case 'employer':
        return <EmployerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage onLogin={handleLogin} />;
    }
  };

  // Render content based on authentication status and active page
  const renderContent = () => {
    if (!isAuthenticated) {
      switch (activePage) {
        case 'login':
          return <LoginPage onLogin={handleLogin} onNavigate={handleNavigation} />;
        case 'register':
          return <RegisterPage onNavigate={handleNavigation} />;
        default:
          return <HomePage onLogin={handleLogin} onNavigate={handleNavigation} />;
      }
    }

    return renderDashboard();
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="nesture-ui-theme">
      {isAuthenticated ? (
        <AppLayout 
          userRole={userRole} 
          onLogout={handleLogout} 
          logo={<Logo />}
        >
          {renderContent()}
        </AppLayout>
      ) : (
        renderContent()
      )}
    </ThemeProvider>
  );
}

// Logo component
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="p-1 bg-primary rounded-md text-white">
      <FileText size={20} />
    </div>
    <span className="font-bold text-xl">Nesture</span>
  </div>
);

export default App;