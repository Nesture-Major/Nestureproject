import { useState } from 'react';
import { Menu, Bell, Mail, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
  toggleSidebar: () => void;
  userRole: 'student' | 'mentor' | 'employer' | 'admin' | null;
  onLogout: () => void;
}

export default function Navbar({ toggleSidebar, userRole, onLogout }: NavbarProps) {
  const [notificationCount] = useState(2);
  const [unreadMessages] = useState(3);
  
  // Dynamically determine page title based on role
  const getPageTitle = () => {
    switch (userRole) {
      case 'student':
        return 'Student Dashboard';
      case 'mentor':
        return 'Mentor Dashboard';
      case 'employer':
        return 'Employer Dashboard';
      case 'admin':
        return 'Admin Dashboard';
      default:
        return 'Dashboard';
    }
  };
  
  // Mock user data - would come from auth context in a real app
  const user = {
    fullName: userRole ? `John Doe (${userRole})` : 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: null,
    initials: 'JD'
  };
  
  return (
    <header className="bg-white dark:bg-gray-950 border-b border-border sticky top-0 z-20">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Mobile menu button */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
        >
          <Menu size={22} />
        </button>

        {/* Page title */}
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hidden md:block">
          {getPageTitle()}
        </h1>

        {/* Right side navigation items */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <div className="relative">
            <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
              <Bell size={20} />
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 bg-destructive text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
          
          {/* Messages */}
          <div className="relative">
            <button className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
              <Mail size={20} />
              {unreadMessages > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {unreadMessages}
                </span>
              )}
            </button>
          </div>
          
          {/* User avatar and dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.profilePicture || ''} alt={user.fullName} />
                  <AvatarFallback className="bg-primary-500 text-white">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.fullName}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

// Icon components
function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function Settings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LogOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}