import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface AppLayoutProps {
  children: React.ReactNode;
  userRole: 'student' | 'mentor' | 'employer' | 'admin' | null;
  onLogout: () => void;
  logo: React.ReactNode;
}

export default function AppLayout({ children, userRole, onLogout, logo }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        userRole={userRole} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        logo={logo}
      />

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          userRole={userRole}
          onLogout={onLogout}
        />
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-5 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}