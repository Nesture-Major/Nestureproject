import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, BarChart2, Copy, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  // Mock data for demonstration
  const analytics = {
    totalStudents: 248,
    totalMentors: 32,
    totalEmployers: 17,
    totalProjects: 412,
    highPlagiarismAlerts: 14,
    pendingProposals: 23,
    totalCertifications: 186,
    activeChats: 76,
  };

  const projectStats = {
    academic: 302,
    personal: 110,
    approved: 264,
    pending: 87,
    rejected: 61,
  };

  const recentPlagiarismAlerts = [
    {
      id: 1,
      project: {
        title: 'Neural Network Implementation with TensorFlow',
        student: {
          full_name: 'Emma Wilson',
        },
      },
      match_percentage: 78,
      detection_date: '2023-12-01',
      source: 'GitHub Repository: machine-learning-models/neural-networks',
    },
    {
      id: 2,
      project: {
        title: 'E-Commerce Web Application',
        student: {
          full_name: 'Alex Chen',
        },
      },
      match_percentage: 62,
      detection_date: '2023-11-28',
      source: 'Previous Student Project (2022): Online Shop Platform',
    },
    {
      id: 3,
      project: {
        title: 'Blockchain Smart Contract Implementation',
        student: {
          full_name: 'Jordan Patel',
        },
      },
      match_percentage: 54,
      detection_date: '2023-11-25',
      source: 'Multiple Sources (5+)',
    },
  ];

  const topStudents = [
    {
      id: 1,
      full_name: 'Marcus Johnson',
      university: 'MIT',
      project_count: 8,
      avg_innovation_score: 94,
      top_skill: 'Machine Learning',
    },
    {
      id: 2,
      full_name: 'Sophia Martinez',
      university: 'Stanford',
      project_count: 6,
      avg_innovation_score: 92,
      top_skill: 'Computer Vision',
    },
    {
      id: 3,
      full_name: 'David Kim',
      university: 'Carnegie Mellon',
      project_count: 7,
      avg_innovation_score: 89,
      top_skill: 'Cybersecurity',
    },
    {
      id: 4,
      full_name: 'Olivia Wang',
      university: 'UC Berkeley',
      project_count: 5,
      avg_innovation_score: 87,
      top_skill: 'Data Science',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor platform activity and manage users
          </p>
        </div>

        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-10 px-4 py-2 text-sm font-medium">
            <Users size={16} className="mr-2" /> Manage Users
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 h-10 px-4 py-2 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            <BarChart2 size={16} className="mr-2" /> View Reports
          </button>
        </div>
      </div>

      {/* Overview Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Students
              </p>
              <p className="text-2xl font-bold">{analytics.totalStudents}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Projects
              </p>
              <p className="text-2xl font-bold">{analytics.totalProjects}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-purple-600 dark:text-purple-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Pending Reviews
              </p>
              <p className="text-2xl font-bold">{projectStats.pending}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Plagiarism Alerts
              </p>
              <p className="text-2xl font-bold">
                {analytics.highPlagiarismAlerts}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </Card>
      </div>

      {/* Project Distribution Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Project Distribution
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Academic Projects
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {projectStats.academic}
                </span>
              </div>
              <Progress
                value={
                  (projectStats.academic /
                    (projectStats.academic + projectStats.personal)) *
                  100
                }
                className="h-2"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Personal Projects
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {projectStats.personal}
                </span>
              </div>
              <Progress
                value={
                  (projectStats.personal /
                    (projectStats.academic + projectStats.personal)) *
                  100
                }
                className="h-2"
              />
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Approved
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {projectStats.approved}
                </span>
              </div>
              <Progress
                value={
                  (projectStats.approved /
                    (projectStats.approved +
                      projectStats.pending +
                      projectStats.rejected)) *
                  100
                }
                className="h-2 bg-gray-200 dark:bg-gray-700"
              >
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${
                      (projectStats.approved /
                        (projectStats.approved +
                          projectStats.pending +
                          projectStats.rejected)) *
                      100
                    }%`,
                  }}
                />
              </Progress>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Pending
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {projectStats.pending}
                </span>
              </div>
              <Progress
                value={
                  (projectStats.pending /
                    (projectStats.approved +
                      projectStats.pending +
                      projectStats.rejected)) *
                  100
                }
                className="h-2 bg-gray-200 dark:bg-gray-700"
              >
                <div
                  className="h-full bg-yellow-500"
                  style={{
                    width: `${
                      (projectStats.pending /
                        (projectStats.approved +
                          projectStats.pending +
                          projectStats.rejected)) *
                      100
                    }%`,
                  }}
                />
              </Progress>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rejected
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {projectStats.rejected}
                </span>
              </div>
              <Progress
                value={
                  (projectStats.rejected /
                    (projectStats.approved +
                      projectStats.pending +
                      projectStats.rejected)) *
                  100
                }
                className="h-2 bg-gray-200 dark:bg-gray-700"
              >
                <div
                  className="h-full bg-red-500"
                  style={{
                    width: `${
                      (projectStats.rejected /
                        (projectStats.approved +
                          projectStats.pending +
                          projectStats.rejected)) *
                      100
                    }%`,
                  }}
                />
              </Progress>
            </div>
          </div>
        </Card>

        {/* User Role Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Platform Statistics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* User Distribution */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                User Distribution
              </h4>
              <div className="aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* This would be a proper chart in a real app */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="20"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 *
                        Math.PI *
                        40 *
                        (1 -
                          analytics.totalStudents /
                            (analytics.totalStudents +
                              analytics.totalMentors +
                              analytics.totalEmployers))
                      }
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="20"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 *
                        Math.PI *
                        40 *
                        (1 -
                          analytics.totalMentors /
                            (analytics.totalStudents +
                              analytics.totalMentors +
                              analytics.totalEmployers))
                      }
                      transform={`rotate(${
                        (360 * analytics.totalStudents) /
                          (analytics.totalStudents +
                            analytics.totalMentors +
                            analytics.totalEmployers) -
                        90
                      } 50 50)`}
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="20"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 *
                        Math.PI *
                        40 *
                        (1 -
                          analytics.totalEmployers /
                            (analytics.totalStudents +
                              analytics.totalMentors +
                              analytics.totalEmployers))
                      }
                      transform={`rotate(${
                        (360 *
                          (analytics.totalStudents + analytics.totalMentors)) /
                          (analytics.totalStudents +
                            analytics.totalMentors +
                            analytics.totalEmployers) -
                        90
                      } 50 50)`}
                    />
                  </svg>
                </div>
                <div className="text-center z-10">
                  <span className="text-xl font-bold">
                    {analytics.totalStudents +
                      analytics.totalMentors +
                      analytics.totalEmployers}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Total Users
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Students: {analytics.totalStudents}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Mentors: {analytics.totalMentors}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Employers: {analytics.totalEmployers}
                  </span>
                </div>
              </div>
            </div>

            {/* Activity Metrics */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activity Metrics
              </h4>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    Active Chats
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {analytics.activeChats}
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    Pending Proposals
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                  >
                    {analytics.pendingProposals}
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Certifications
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  >
                    {analytics.totalCertifications}
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    High Plagiarism
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  >
                    {analytics.highPlagiarismAlerts}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Plagiarism Alerts */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Plagiarism Alerts
          </h3>
          <a
            href="#"
            className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
          >
            View All <span aria-hidden="true">→</span>
          </a>
        </div>

        {recentPlagiarismAlerts.length > 0 ? (
          <div className="space-y-4">
            {recentPlagiarismAlerts.map((alert) => (
              <div
                key={alert.id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {alert.project.title}
                      </h4>
                      <Badge className="ml-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        {alert.match_percentage}% Match
                      </Badge>
                      <span className="ml-2 text-gray-500 dark:text-gray-500 text-xs">
                        {new Date(alert.detection_date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <span className="font-medium">Student:</span>{' '}
                      {alert.project.student.full_name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      <span className="font-medium">Source:</span>{' '}
                      {alert.source}
                    </p>
                  </div>

                  <a
                    href={`#/plagiarism-details/${alert.id}`}
                    className="text-primary hover:text-primary-600 dark:hover:text-primary-300"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></path>
                      <path d="M14 2h6v6"></path>
                      <path d="M18 8 8 18"></path>
                    </svg>
                  </a>
                </div>

                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-red-600 dark:bg-red-500 h-2.5 rounded-full"
                      style={{ width: `${alert.match_percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-500 text-center py-4">
            No recent plagiarism alerts.
          </p>
        )}
      </Card>

      {/* Top Students */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top Students by Innovation Score
          </h3>
          <a
            href="#"
            className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm"
          >
            View Report <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Student
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  University
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Projects
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Top Skill
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Innovation Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {topStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {student.full_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.university}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.project_count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                      {student.top_skill}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-grow h-2 mr-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 dark:bg-green-600 rounded-full"
                          style={{ width: `${student.avg_innovation_score}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {student.avg_innovation_score}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
