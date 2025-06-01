import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, Laptop as LaptopCode, Award } from 'lucide-react';

export default function StudentDashboard() {
  // Mock data for demonstration
  const user = {
    fullName: 'Alex Johnson',
    university: 'Stanford University',
    degree: 'Computer Science',
    graduationYear: '2024',
    profilePicture: null,
    initials: 'AJ',
    bio: 'Full-stack developer passionate about building scalable web applications and exploring new technologies. Experienced in React, TypeScript, and Node.js.',
    skills: [
      { name: 'React', proficiency: 90 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Node.js', proficiency: 75 },
      { name: 'Python', proficiency: 80 },
      { name: 'Django', proficiency: 70 },
    ],
    contact: {
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'linkedin.com/in/alexjohnson',
      github: 'github.com/alexjohnson',
    },
  };

  const projectStats = {
    academic: 5,
    personal: 3,
    certifications: 4,
  };

  const recentProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      type: 'academic',
      status: 'approved',
      abstract:
        'A full-featured e-commerce platform with inventory management, payment processing, and user authentication.',
      createdAt: '2023-06-15',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'AI Image Recognition',
      type: 'academic',
      status: 'pending',
      abstract:
        'An artificial intelligence application that can identify objects in images using machine learning algorithms.',
      createdAt: '2023-07-22',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      type: 'personal',
      status: 'approved',
      abstract:
        'A responsive portfolio website showcasing my projects, skills, and professional experience.',
      createdAt: '2023-05-10',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      project: { title: 'Advanced Database Systems Final Project' },
      dueDate: '2023-12-15',
      daysLeft: 3,
    },
    {
      id: 2,
      project: { title: 'Web Development Capstone' },
      dueDate: '2023-12-20',
      daysLeft: 8,
    },
  ];

  const personalProjects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      abstract:
        'A responsive portfolio website showcasing my projects and skills.',
    },
    {
      id: 2,
      title: 'Weather Forecast App',
      abstract: 'A React-based weather application with location detection.',
    },
    {
      id: 3,
      title: 'Budget Tracker',
      abstract: 'A personal finance application to track expenses and income.',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-03',
    },
    {
      id: 2,
      title: 'Professional React Developer',
      issuer: 'Meta',
      issueDate: '2022-11',
    },
    {
      id: 3,
      title: 'Python for Data Science',
      issuer: 'IBM',
      issueDate: '2022-06',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your student profile and showcase your skills
          </p>
        </div>

        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-10 px-4 py-2 text-sm font-medium">
            <span className="mr-2">+</span> New Academic Project
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 h-10 px-4 py-2 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            <span className="mr-2">+</span> New Personal Project
          </button>
        </div>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="md:col-span-1 p-6">
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

            {user.university && (
              <p className="text-gray-600 dark:text-gray-400">
                {user.university}
              </p>
            )}

            {user.degree && (
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                {user.degree} - {user.graduationYear}
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
                </svg>
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 px-3 py-1"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
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
                <span className="ml-2">{user.contact.linkedin}</span>
              </li>

              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 text-gray-400 dark:text-gray-500 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="ml-2">{user.contact.github}</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Bio Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                About Me
              </h3>
              <button className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>{' '}
                Edit
              </button>
            </div>

            {user.bio ? (
              <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>
            ) : (
              <p className="text-gray-500 dark:text-gray-500">
                No bio added yet. Tell employers and mentors about yourself.
              </p>
            )}
          </Card>

          {/* Project Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-blue-800 dark:text-blue-300">
                  Academic Projects
                </p>
                <GraduationCap
                  className="text-blue-400 dark:text-blue-500"
                  size={20}
                />
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-2">
                {projectStats.academic}
              </p>
            </Card>

            <Card className="bg-teal-50 dark:bg-teal-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-teal-800 dark:text-teal-300">
                  Personal Projects
                </p>
                <LaptopCode
                  className="text-teal-400 dark:text-teal-500"
                  size={20}
                />
              </div>
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-2">
                {projectStats.personal}
              </p>
            </Card>

            <Card className="bg-purple-50 dark:bg-purple-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-purple-800 dark:text-purple-300">
                  Certifications
                </p>
                <Award
                  className="text-purple-400 dark:text-purple-500"
                  size={20}
                />
              </div>
              <p className="text-2xl font-bold text-purple-700 dark:text-purple-400 mt-2">
                {projectStats.certifications}
              </p>
            </Card>
          </div>

          {/* Recent Projects */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Projects
              </h3>
              <a
                href="#"
                className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
              >
                View All <span aria-hidden="true">→</span>
              </a>
            </div>

            {recentProjects.length > 0 ? (
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {project.title}
                          </h4>
                          <Badge
                            className={
                              project.type === 'academic'
                                ? 'ml-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                : 'ml-2 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300'
                            }
                          >
                            {project.type === 'academic'
                              ? 'Academic'
                              : 'Personal'}
                          </Badge>
                          <span className="ml-2 text-gray-500 dark:text-gray-500 text-xs">
                            {new Date(project.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {project.abstract}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <Badge
                          className={
                            project.status === 'approved'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : project.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          }
                        >
                          {project.status.charAt(0).toUpperCase() +
                            project.status.slice(1)}
                        </Badge>
                      </div>
                    </div>

                    {project.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14.7 6.7A7 7 0 0 0 9.6 4.1c-.9 0-1.7.2-2.5.5"></path>
                  <path d="M7.9 20.6c-1.9-.8-3.6-2.2-4.7-4"></path>
                  <path d="M13.1 20.9c.3 0 .5 0 .8-.1"></path>
                  <path d="M3 3l18 18"></path>
                  <rect x="13" y="13" width="6" height="8" rx="1"></rect>
                  <path d="M12 20v1a1 1 0 0 0 1-1"></path>
                  <path d="M8 17h.1"></path>
                  <path d="M5 14h.1"></path>
                  <path d="M17 14v-3a4 4 0 0 0-4-4h-2.5"></path>
                </svg>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  You don't have any projects yet.
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-9 px-4 py-2 text-sm font-medium">
                    Upload Academic Project
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 h-9 px-4 py-2 text-sm font-medium">
                    Upload Personal Project
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Upcoming Deadlines
              </h3>
            </div>

            {upcomingDeadlines.length > 0 ? (
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline) => (
                  <div
                    key={deadline.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center">
                      <div className="bg-yellow-100 dark:bg-yellow-900/50 rounded-full p-2 mr-3">
                        <svg
                          className="w-5 h-5 text-yellow-700 dark:text-yellow-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {deadline.project.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Due on{' '}
                          {new Date(deadline.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Badge
                        className={
                          deadline.daysLeft <= 3
                            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                            : deadline.daysLeft <= 7
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        }
                      >
                        {deadline.daysLeft} days left
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-500 text-center py-4">
                No upcoming deadlines.
              </p>
            )}
          </Card>
        </div>
      </div>

      {/* Portfolio Preview */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Portfolio Preview
          </h3>
          <a
            href="#"
            className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
          >
            Manage Portfolio <span aria-hidden="true">→</span>
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is how employers will see your profile. Make sure to keep your
          portfolio updated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Projects */}
          <Card className="bg-gray-50 dark:bg-gray-900 p-5">
            <div className="flex items-center mb-3">
              <LaptopCode className="text-teal-500 mr-2" size={18} />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Personal Projects
              </h4>
            </div>

            {personalProjects.length > 0 ? (
              <div className="space-y-2">
                {personalProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700"
                  >
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </h5>
                    <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">
                      {project.abstract}
                    </p>
                  </div>
                ))}
                {personalProjects.length > 3 && (
                  <p className="text-xs text-right text-primary">
                    +{personalProjects.length - 3} more projects
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-500">
                No personal projects yet.
              </p>
            )}
          </Card>

          {/* Certifications */}
          <Card className="bg-gray-50 dark:bg-gray-900 p-5">
            <div className="flex items-center mb-3">
              <Award className="text-purple-500 mr-2" size={18} />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Certifications
              </h4>
            </div>

            {certifications.length > 0 ? (
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700"
                  >
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.issuer} • {cert.issueDate}
                    </p>
                  </div>
                ))}
                {certifications.length > 3 && (
                  <p className="text-xs text-right text-primary">
                    +{certifications.length - 3} more certifications
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-500">
                No certifications yet.
              </p>
            )}
          </Card>

          {/* Skills Visualization */}
          <Card className="bg-gray-50 dark:bg-gray-900 p-5">
            <div className="flex items-center mb-3">
              <svg
                className="w-5 h-5 text-primary-500 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
              <h4 className="font-medium text-gray-900 dark:text-white">
                Skills
              </h4>
            </div>

            {user.skills.length > 0 ? (
              <div className="space-y-3">
                {user.skills.slice(0, 5).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
                {user.skills.length > 5 && (
                  <p className="text-xs text-right text-primary">
                    +{user.skills.length - 5} more skills
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-500">
                No skills added yet.
              </p>
            )}
          </Card>
        </div>
      </Card>
    </div>
  );
}
