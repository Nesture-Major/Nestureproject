import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  User,
  GraduationCap,
  Upload,
  Laptop as LaptopCode,
  Award,
  Trophy,
  FileText,
  Lightbulb,
  MessageSquare,
  Settings,
  Users,
  ClipboardCheck,
  CheckSquare,
  Copy,
  ChartLine,
  UserCog as UsersCog,
  Projector as ProjectorChart,
  Bell,
  Search,
  Briefcase,
  File as FilePdf,
  Star,
  Mail,
} from 'lucide-react';

interface SidebarProps {
  userRole: 'student' | 'mentor' | 'employer' | 'admin' | null;
  isOpen: boolean;
  onClose: () => void;
  logo: React.ReactNode;
}

export default function Sidebar({
  userRole,
  isOpen,
  onClose,
  logo,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-950 border-r border-border transition-transform duration-300 transform md:translate-x-0 overflow-y-auto',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4 border-b border-border">
        <div className="flex items-center space-x-2">{logo}</div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">
        {userRole === 'student' && <StudentNavigation />}
        {userRole === 'mentor' && <MentorNavigation />}
        {userRole === 'employer' && <EmployerNavigation />}
        {userRole === 'admin' && <AdminNavigation />}
      </nav>
    </aside>
  );
}

function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-6 mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </div>
      {children}
    </>
  );
}

function NavLink({
  icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: {
    count: number;
    type?: 'primary' | 'danger' | 'warning';
  };
}) {
  const badgeClasses = {
    primary: 'bg-primary text-primary-foreground',
    danger: 'bg-destructive text-destructive-foreground',
    warning: 'bg-warning-500 text-white',
  };

  return (
    <a
      href="#"
      className={cn(
        'flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-400 transition-all',
        active &&
          'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
      )}
    >
      {icon}
      <span>{label}</span>
      {badge && badge.count > 0 && (
        <span
          className={cn(
            'ml-auto bg-primary-500 text-white px-2 py-1 rounded-full text-xs',
            badge.type && badgeClasses[badge.type]
          )}
        >
          {badge.count}
        </span>
      )}
    </a>
  );
}

function StudentNavigation() {
  return (
    <>
      <NavSection title="Profile">
        <NavLink icon={<User size={18} />} label="Profile Overview" active />
      </NavSection>

      <NavSection title="Academic">
        <NavLink icon={<GraduationCap size={18} />} label="Academic Projects" />
        <NavLink icon={<Upload size={18} />} label="Upload Academic Project" />
        <NavLink icon={<Lightbulb size={18} />} label="Project Proposals" />
      </NavSection>

      <NavSection title="Personal">
        <NavLink icon={<LaptopCode size={18} />} label="Personal Projects" />
        <NavLink icon={<Upload size={18} />} label="Upload Personal Project" />
      </NavSection>

      <NavSection title="Portfolio">
        <NavLink icon={<Award size={18} />} label="Certifications" />
        <NavLink icon={<Trophy size={18} />} label="Achievements" />
        <NavLink icon={<FileText size={18} />} label="Resume & Portfolio" />
      </NavSection>

      <NavSection title="Communication">
        <NavLink
          icon={<MessageSquare size={18} />}
          label="Messages"
          badge={{ count: 3, type: 'primary' }}
        />
      </NavSection>

      <NavSection title="Settings">
        <NavLink icon={<Settings size={18} />} label="Settings" />
      </NavSection>
    </>
  );
}

function MentorNavigation() {
  return (
    <>
      <NavSection title="Profile">
        <NavLink icon={<User size={18} />} label="Profile Overview" active />
      </NavSection>

      <NavSection title="Students">
        <NavLink icon={<Users size={18} />} label="Assigned Students" />
      </NavSection>

      <NavSection title="Projects">
        <NavLink
          icon={<ClipboardCheck size={18} />}
          label="Review Proposals"
          badge={{ count: 5, type: 'warning' }}
        />
        <NavLink
          icon={<CheckSquare size={18} />}
          label="Review Projects"
          badge={{ count: 2, type: 'warning' }}
        />
        <NavLink icon={<Copy size={18} />} label="Plagiarism Reports" />
      </NavSection>

      <NavSection title="Communication">
        <NavLink
          icon={<MessageSquare size={18} />}
          label="Chat with Students"
          badge={{ count: 1, type: 'primary' }}
        />
      </NavSection>

      <NavSection title="Settings">
        <NavLink icon={<Settings size={18} />} label="Settings" />
      </NavSection>
    </>
  );
}

function EmployerNavigation() {
  return (
    <>
      <NavSection title="Profile">
        <NavLink icon={<User size={18} />} label="Profile Overview" active />
      </NavSection>

      <NavSection title="Student Profiles">
        <NavLink icon={<Search size={18} />} label="Browse Students" />
        <NavLink icon={<Briefcase size={18} />} label="View Portfolios" />
        <NavLink icon={<FilePdf size={18} />} label="View & Download Resumes" />
      </NavSection>

      <NavSection title="Recruitment">
        <NavLink icon={<Star size={18} />} label="Shortlisted Students" />
        <NavLink icon={<Mail size={18} />} label="Contact Panel" />
      </NavSection>

      <NavSection title="Settings">
        <NavLink icon={<Settings size={18} />} label="Settings" />
      </NavSection>
    </>
  );
}

function AdminNavigation() {
  return (
    <>
      <NavSection title="Overview">
        <NavLink icon={<ChartLine size={18} />} label="Dashboard" active />
      </NavSection>

      <NavSection title="User Management">
        <NavLink icon={<UsersCog size={18} />} label="Manage Users" />
      </NavSection>

      <NavSection title="Projects">
        <NavLink icon={<ProjectorChart size={18} />} label="Monitor Projects" />
        <NavLink
          icon={<Copy size={18} />}
          label="Plagiarism Logs"
          badge={{ count: 3, type: 'danger' }}
        />
        <NavLink icon={<Lightbulb size={18} />} label="Project Proposals" />
      </NavSection>

      <NavSection title="Communication">
        <NavLink icon={<Bell size={18} />} label="Announcements" />
      </NavSection>

      <NavSection title="Settings">
        <NavLink icon={<Settings size={18} />} label="Settings" />
      </NavSection>
    </>
  );
}
