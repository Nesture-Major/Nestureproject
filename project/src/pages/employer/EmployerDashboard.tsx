import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Eye, Mail } from 'lucide-react';

export default function EmployerDashboard() {
  // Mock data for demonstration
  const user = {
    fullName: 'Jake Thompson',
    companyName: 'TechInnovate Solutions',
    jobTitle: 'Senior Technical Recruiter',
    profilePicture: null,
    initials: 'JT',
    companyInfo: {
      website: 'www.techinnovate.com',
      industry: 'Information Technology',
      companySize: '250-500',
    },
    contact: {
      email: 'jake.thompson@techinnovate.com',
      phone: '+1 (555) 234-5678',
      linkedin: 'linkedin.com/in/jakethompson',
    },
  };

  const stats = {
    studentsViewed: 43,
    shortlisted: 12,
    messagesSent: 18,
  };

  const recentlyViewedStudents = [
    {
      id: 1,
      full_name: 'Emma Wilson',
      profile_picture: null,
      first_name: 'Emma',
      last_name: 'Wilson',
      student_profile: {
        degree: 'BS Computer Science',
        university: 'Stanford University',
        top_skills: [
          { id: 1, name: 'React' },
          { id: 2, name: 'TypeScript' },
          { id: 3, name: 'Node.js' },
        ],
      },
      is_shortlisted: true,
    },
    {
      id: 2,
      full_name: 'Alex Chen',
      profile_picture: null,
      first_name: 'Alex',
      last_name: 'Chen',
      student_profile: {
        degree: 'MS Data Science',
        university: 'MIT',
        top_skills: [
          { id: 1, name: 'Python' },
          { id: 2, name: 'Machine Learning' },
          { id: 3, name: 'TensorFlow' },
        ],
      },
      is_shortlisted: false,
    },
    {
      id: 3,
      full_name: 'Jordan Patel',
      profile_picture: null,
      first_name: 'Jordan',
      last_name: 'Patel',
      student_profile: {
        degree: 'BS Software Engineering',
        university: 'UC Berkeley',
        top_skills: [
          { id: 1, name: 'Java' },
          { id: 2, name: 'Spring Boot' },
          { id: 3, name: 'AWS' },
        ],
      },
      is_shortlisted: true,
    },
    {
      id: 4,
      full_name: 'Sophia Martinez',
      profile_picture: null,
      first_name: 'Sophia',
      last_name: 'Martinez',
      student_profile: {
        degree: 'BS Computer Engineering',
        university: 'Georgia Tech',
        top_skills: [
          { id: 1, name: 'C++' },
          { id: 2, name: 'CUDA' },
          { id: 3, name: 'Computer Vision' },
        ],
      },
      is_shortlisted: false,
    },
    {
      id: 5,
      full_name: 'Marcus Johnson',
      profile_picture: null,
      first_name: 'Marcus',
      last_name: 'Johnson',
      student_profile: {
        degree: 'MS Cybersecurity',
        university: 'Carnegie Mellon',
        top_skills: [
          { id: 1, name: 'Network Security' },
          { id: 2, name: 'Ethical Hacking' },
          { id: 3, name: 'Python' },
        ],
      },
      is_shortlisted: false,
    },
    {
      id: 6,
      full_name: 'Olivia Kim',
      profile_picture: null,
      first_name: 'Olivia',
      last_name: 'Kim',
      student_profile: {
        degree: 'BS Web Development',
        university: 'NYU',
        top_skills: [
          { id: 1, name: 'JavaScript' },
          { id: 2, name: 'React' },
          { id: 3, name: 'UI/UX Design' },
        ],
      },
      is_shortlisted: true,
    },
  ];

  const recentCommunications = [
    {
      id: 1,
      student: {
        id: 2,
        profile_picture: null,
        full_name: 'Alex Chen',
        first_name: 'Alex',
        last_name: 'Chen',
      },
      content:
        "Thank you for reaching out regarding the Machine Learning Engineer position. I'm very interested in this opportunity and would love to schedule an interview to discuss it further.",
      sent_at: new Date(Date.now() - 1000 * 60 * 30),
      is_unread: true,
    },
    {
      id: 2,
      student: {
        id: 1,
        profile_picture: null,
        full_name: 'Emma Wilson',
        first_name: 'Emma',
        last_name: 'Wilson',
      },
      content:
        "I've attached my updated resume with the recent project details you requested. Please let me know if you need any additional information.",
      sent_at: new Date(Date.now() - 1000 * 60 * 60 * 3),
      is_unread: false,
    },
    {
      id: 3,
      student: {
        id: 3,
        profile_picture: null,
        full_name: 'Jordan Patel',
        first_name: 'Jordan',
        last_name: 'Patel',
      },
      content:
        "I'm following up on our conversation about the Software Engineer position. I've completed the coding challenge and submitted it via the link you provided.",
      sent_at: new Date(Date.now() - 1000 * 60 * 60 * 24),
      is_unread: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Employer Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover top student talent and review portfolios
          </p>
        </div>

        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-10 px-4 py-2 text-sm font-medium">
            <Search size={16} className="mr-2" /> Browse Students
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 h-10 px-4 py-2 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            <Star size={16} className="mr-2" /> Shortlisted
          </button>
        </div>
      </div>

      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Employer Profile Card */}
        <Card className="p-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src={user.profilePicture || ''}
                alt={user.fullName}
              />
              <AvatarFallback className="bg-primary text-white text-2xl font-semibold">
                {user.initials}
              </AvatarFallback>
            </Avatar>

            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {user.fullName}
            </h2>

            {user.companyName && (
              <p className="text-gray-600 dark:text-gray-400">
                {user.companyName}
              </p>
            )}

            {user.jobTitle && (
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                {user.jobTitle}
              </p>
            )}

            <div className="w-full mt-6">
              <button className="w-full flex items-center justify-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>{' '}
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">
              Company Info
            </h3>

            <ul className="space-y-2">
              {user.companyInfo.website && (
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <a
                    href={`https://${user.companyInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {user.companyInfo.website}
                  </a>
                </li>
              )}

              {user.companyInfo.industry && (
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16"></path>
                    <path d="M1 21h22"></path>
                    <path d="M16 4v-.5A1.5 1.5 0 0 0 14.5 2h-5A1.5 1.5 0 0 0 8 3.5V4"></path>
                  </svg>
                  <span className="ml-2">{user.companyInfo.industry}</span>
                </li>
              )}

              {user.companyInfo.companySize && (
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="ml-2">
                    {user.companyInfo.companySize} employees
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">
              Contact
            </h3>

            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="ml-2">{user.contact.email}</span>
              </li>

              {user.contact.phone && (
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="ml-2">{user.contact.phone}</span>
                </li>
              )}

              {user.contact.linkedin && (
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a
                    href={`https://${user.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-blue-800 dark:text-blue-300">
                  Students Viewed
                </p>
                <Eye className="text-blue-400 dark:text-blue-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-2">
                {stats.studentsViewed}
              </p>
            </Card>

            <Card className="bg-purple-50 dark:bg-purple-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-purple-800 dark:text-purple-300">
                  Shortlisted
                </p>
                <Star
                  className="text-purple-400 dark:text-purple-500"
                  size={20}
                />
              </div>
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-400 mt-2">
                {stats.shortlisted}
              </p>
            </Card>

            <Card className="bg-green-50 dark:bg-green-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-green-800 dark:text-green-300">
                  Messages Sent
                </p>
                <Mail
                  className="text-green-400 dark:text-green-500"
                  size={20}
                />
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400 mt-2">
                {stats.messagesSent}
              </p>
            </Card>
          </div>

          {/* Recently Viewed Students */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recently Viewed Students
              </h3>
              <a
                href="#"
                className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
              >
                Browse All <span aria-hidden="true">→</span>
              </a>
            </div>

            {recentlyViewedStudents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentlyViewedStudents.slice(0, 6).map((student) => (
                  <div
                    key={student.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={student.profile_picture || ''}
                          alt={student.full_name}
                        />
                        <AvatarFallback className="bg-gray-300 dark:bg-gray-700 text-white flex items-center justify-center font-semibold">
                          {student.first_name.charAt(0) +
                            student.last_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {student.full_name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {student.student_profile.degree}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {student.student_profile.university}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {student.student_profile.top_skills
                        .slice(0, 3)
                        .map((skill) => (
                          <Badge
                            key={skill.id}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>

                    <div className="mt-3 flex justify-between">
                      <a
                        href={`#/student-profile/${student.id}`}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 text-sm"
                      >
                        View Profile
                      </a>

                      <button
                        className={`text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 ${
                          student.is_shortlisted
                            ? 'text-yellow-500 dark:text-yellow-400'
                            : ''
                        }`}
                      >
                        <Star size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <Search className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600" />
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You haven't viewed any student profiles yet.
                </p>
                <div className="mt-4">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-9 px-4 py-2 text-sm font-medium">
                    Browse Students
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Top Skills in Demand */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Top Skills in Demand
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Chart */}
              <div>
                <div className="h-64 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  {/* This would be a chart in a real application */}
                  <div className="h-full flex flex-col justify-center items-center">
                    <svg
                      className="w-16 h-16 text-gray-300 dark:text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      <path d="M12 3a9 9 0 0 1 9 9h-9V3z"></path>
                      <path d="M21 2.5v4h-4"></path>
                      <path d="M15.536.5h4v4"></path>
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Skills distribution chart would appear here
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Skills List */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full mr-3">
                        1
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Python
                      </span>
                    </div>
                    <Badge className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 px-2 py-1">
                      68 students
                    </Badge>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full mr-3">
                        2
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        JavaScript
                      </span>
                    </div>
                    <Badge className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 px-2 py-1">
                      56 students
                    </Badge>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full mr-3">
                        3
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        React
                      </span>
                    </div>
                    <Badge className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 px-2 py-1">
                      43 students
                    </Badge>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full mr-3">
                        4
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Machine Learning
                      </span>
                    </div>
                    <Badge className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 px-2 py-1">
                      37 students
                    </Badge>
                  </li>

                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full mr-3">
                        5
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Django
                      </span>
                    </div>
                    <Badge className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 px-2 py-1">
                      28 students
                    </Badge>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Recent Messages */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Communications
              </h3>
              <a
                href="#"
                className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
              >
                Contact Panel <span aria-hidden="true">→</span>
              </a>
            </div>

            <div>
              {recentCommunications.length > 0 ? (
                <>
                  <div className="space-y-3">
                    {recentCommunications.map((message) => (
                      <div
                        key={message.id}
                        className={`flex items-start p-3 ${
                          message.is_unread
                            ? 'bg-blue-50 dark:bg-blue-900/20'
                            : 'bg-gray-50 dark:bg-gray-800'
                        } rounded-lg`}
                      >
                        <Avatar className="w-10 h-10 mr-3">
                          <AvatarImage
                            src={message.student.profile_picture || ''}
                            alt={message.student.full_name}
                          />
                          <AvatarFallback className="bg-gray-300 dark:bg-gray-700 text-white">
                            {message.student.first_name.charAt(0) +
                              message.student.last_name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                              {message.student.full_name}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-500">
                              {formatTimeAgo(message.sent_at)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {message.content}
                          </p>
                          <div className="mt-2">
                            <a
                              href={`#/contact-student/${message.student.id}`}
                              className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                            >
                              Reply <span aria-hidden="true">↪</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
                    >
                      View all communications <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 dark:text-gray-500 text-center py-4">
                  No recent communications.
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper function to format time ago
function formatTimeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes ago';
  }

  return Math.max(Math.floor(seconds), 0) + ' seconds ago';
}
