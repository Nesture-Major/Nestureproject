{/* Full content of MentorDashboard.tsx with the apostrophe escaped */}
{/* Note: Only showing the relevant section for brevity, but the actual file would contain all code */}
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Hourglass as HourglassHalf, CheckCircle } from 'lucide-react';

export default function MentorDashboard() {
  // Mock data for demonstration
  const user = {
    fullName: 'Dr. Sarah Chen',
    department: 'Computer Science Department',
    title: 'Associate Professor',
    profilePicture: null,
    initials: 'SC',
    expertise: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Visualization',
      'Web Development',
      'Database Systems'
    ],
    contact: {
      email: 'sarah.chen@university.edu',
      phone: '+1 (555) 987-6543',
      officeHours: 'Mon, Wed 2-4 PM'
    }
  };
  
  const statistics = {
    assignedStudents: 15,
    pendingReviews: 7,
    completedReviews: 42
  };
  
  const pendingReviews = [
    {
      id: 1,
      project: {
        id: 101,
        title: 'Blockchain-based Supply Chain Tracking',
        abstract: 'A decentralized application for tracking the movement of goods through a supply chain using blockchain technology.',
        submitted_at: '2023-11-28',
        plagiarism_score: 12,
        student: { full_name: 'Michael Rodriguez' }
      }
    },
    {
      id: 2,
      project: {
        id: 102,
        title: 'Neural Network for Natural Language Understanding',
        abstract: 'Implementation of a neural network model for enhanced natural language understanding in chatbots.',
        submitted_at: '2023-12-01',
        plagiarism_score: 35,
        student: { full_name: 'Jennifer Kim' }
      }
    },
    {
      id: 3,
      project: {
        id: 103,
        title: 'IoT Smart Home System',
        abstract: 'Development of an integrated IoT system for smart home automation using Raspberry Pi and Arduino.',
        submitted_at: '2023-12-04',
        plagiarism_score: 5,
        student: { full_name: 'Brandon Taylor' }
      }
    }
  ];
  
  const plagiarismReports = [
    {
      id: 1,
      project: {
        title: 'Advanced Data Structures Implementation'
      },
      project_student: { full_name: 'Emma Wilson' },
      match_percentage: 58,
      innovation_score: 42,
      date: '2023-11-20'
    },
    {
      id: 2,
      project: {
        title: 'Mobile App for Health Monitoring'
      },
      project_student: { full_name: 'David Chen' },
      match_percentage: 23,
      innovation_score: 77,
      date: '2023-11-25'
    },
    {
      id: 3,
      project: {
        title: 'E-Commerce Platform Development'
      },
      project_student: { full_name: 'Sophia Martinez' },
      match_percentage: 12,
      innovation_score: 85,
      date: '2023-12-01'
    },
    {
      id: 4,
      project: {
        title: 'Cybersecurity Risk Assessment Tool'
      },
      project_student: { full_name: 'James Wilson' },
      match_percentage: 8,
      innovation_score: 91,
      date: '2023-12-02'
    },
    {
      id: 5,
      project: {
        title: 'Machine Learning for Stock Prediction'
      },
      project_student: { full_name: 'Olivia Wang' },
      match_percentage: 32,
      innovation_score: 68,
      date: '2023-12-03'
    }
  ];
  
  const recentMessages = [
    {
      id: 1,
      sender: {
        full_name: 'Michael Rodriguez',
        profile_picture: null,
        first_name: 'Michael',
        last_name: 'Rodriguez'
      },
      content: "Hello Dr. Chen, I have a question about the feedback you provided on my blockchain project. Would it be possible to schedule a quick meeting to discuss it?",
      sent_at: new Date(Date.now() - 1000 * 60 * 30),
      is_unread: true
    },
    {
      id: 2,
      sender: {
        full_name: 'Jennifer Kim',
        profile_picture: null,
        first_name: 'Jennifer',
        last_name: 'Kim'
      },
      content: "Thank you for your feedback on my NLP project. I\'ve made the suggested changes and resubmitted the project for your review.",
      sent_at: new Date(Date.now() - 1000 * 60 * 60 * 5),
      is_unread: false
    },
    {
      id: 3,
      sender: {
        full_name: 'Brandon Taylor',
        profile_picture: null,
        first_name: 'Brandon',
        last_name: 'Taylor'
      },
      content: "I\'ve encountered a challenge with implementing the sensor integration in my IoT project. Would you have any resources or suggestions that might help?",
      sent_at: new Date(Date.now() - 1000 * 60 * 60 * 24),
      is_unread: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Mentor Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor projects and provide feedback to students</p>
        </div>
        
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-white h-10 px-4 py-2 text-sm font-medium">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
              <rect x="9" y="3" width="6" height="4" rx="2"></rect>
              <path d="M9 14h.01"></path>
              <path d="M13 14h.01"></path>
              <path d="M17 14h.01"></path>
              <path d="M9 18h.01"></path>
              <path d="M13 18h.01"></path>
              <path d="M17 18h.01"></path>
            </svg> Review Projects
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-white text-gray-700 border border-gray-300 h-10 px-4 py-2 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg> My Students
          </button>
        </div>
      </div>
      
      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mentor Profile Card */}
        <Card className="p-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.profilePicture || ''} alt={user.fullName} />
              <AvatarFallback className="bg-primary text-white text-2xl font-semibold">
                {user.initials}
              </AvatarFallback>
            </Avatar>
            
            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{user.fullName}</h2>
            
            {user.department && (
              <p className="text-gray-600 dark:text-gray-400">{user.department}</p>
            )}
            
            {user.title && (
              <p className="text-gray-500 dark:text-gray-500 text-sm">{user.title}</p>
            )}
            
            <div className="w-full mt-6">
              <button className="w-full flex items-center justify-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg> Edit Profile
              </button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">Areas of Expertise</h3>
            
            <div className="flex flex-wrap gap-2">
              {user.expertise.map((area) => (
                <Badge key={area} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 px-3 py-1">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 uppercase tracking-wider mb-3">Contact</h3>
            
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 text-gray-400 dark:text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="ml-2">{user.contact.email}</span>
              </li>
              
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 text-gray-400 dark:text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="ml-2">{user.contact.phone}</span>
              </li>
              
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="w-5 text-gray-400 dark:text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="ml-2">{user.contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </Card>
        
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-blue-800 dark:text-blue-300">Assigned Students</p>
                <Users className="text-blue-400 dark:text-blue-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-2">{statistics.assignedStudents}</p>
            </Card>
            
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-yellow-800 dark:text-yellow-300">Pending Reviews</p>
                <HourglassHalf className="text-yellow-400 dark:text-yellow-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mt-2">{statistics.pendingReviews}</p>
            </Card>
            
            <Card className="bg-green-50 dark:bg-green-900/20 p-4">
              <div className="flex justify-between items-center">
                <p className="text-green-800 dark:text-green-300">Completed Reviews</p>
                <CheckCircle className="text-green-400 dark:text-green-500" size={20} />
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400 mt-2">{statistics.completedReviews}</p>
            </Card>
          </div>
          
          {/* Projects Pending Review */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Pending Reviews</h3>
              <a href="#" className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm">
                View All <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {pendingReviews.length > 0 ? (
              <div className="space-y-4">
                {pendingReviews.map((review) => (
                  <div key={review.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{review.project.title}</h4>
                          <Badge className="ml-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending Review</Badge>
                          <span className="ml-2 text-gray-500 dark:text-gray-500 text-xs">Submitted {new Date(review.project.submitted_at).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">{review.project.abstract}</p>
                      </div>
                      
                      <a href={`#/review-project/${review.project.id}`} className="text-primary hover:text-primary-600 dark:hover:text-primary-300">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg> Review
                      </a>
                    </div>
                    
                    <div className="mt-3 flex items-center">
                      <div className="flex items-center mr-4">
                        <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{review.project.student.full_name}</span>
                      </div>
                      
                      {review.project.plagiarism_score !== undefined && (
                        <div className="flex items-center">
                          <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <path d="M12 11h4"></path>
                            <path d="M12 16h4"></path>
                            <path d="M8 11h.01"></path>
                            <path d="M8 16h.01"></path>
                          </svg>
                          <span className={`text-sm ${
                            review.project.plagiarism_score > 50 ? 'text-red-600 dark:text-red-400' :
                            review.project.plagiarism_score > 25 ? 'text-yellow-600 dark:text-yellow-400' :
                            'text-green-600 dark:text-green-400'
                          }`}>
                            {review.project.plagiarism_score}% Match
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <svg className="w-12 h-12 mx-auto text-green-400 dark:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                </svg>
                <p className="text-gray-600 dark:text-gray-400 mt-2">No pending reviews at the moment.</p>
              </div>
            )}
          </Card>
          
          {/* Plagiarism Reports */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Plagiarism Reports</h3>
              <a href="#" className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm">
                View All <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {plagiarismReports.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Match %</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Innovation Score</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    {plagiarismReports.map((report) => (
                      <tr key={report.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{report.project.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{report.project_student.full_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                              <div className={`
                                ${report.match_percentage > 50 ? 'bg-red-500' :
                                  report.match_percentage > 25 ? 'bg-yellow-500' :
                                  'bg-green-500'} 
                                h-2 rounded-full`} 
                                style={{width: `${report.match_percentage}%`}}>
                              </div>
                            </div>
                            <span className={`text-sm
                              ${report.match_percentage > 50 ? 'text-red-600 dark:text-red-400' :
                                report.match_percentage > 25 ? 'text-yellow-600 dark:text-yellow-400' :
                                'text-green-600 dark:text-green-400'}`}>
                              {report.match_percentage}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                              <div className="bg-primary h-2 rounded-full" style={{width: `${report.innovation_score}%`}}></div>
                            </div>
                            <span className="text-sm text-primary-600 dark:text-primary-400">{report.innovation_score}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{new Date(report.date).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <a href={`#/plagiarism-detail/${report.id}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300">View Details</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-500 text-center py-4">No plagiarism reports available.</p>
            )}
          </Card>
          
          {/* Recent Messages */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Messages</h3>
              <a href="#" className="text-primary hover:text-primary-600 dark:hover:text-primary-300 text-sm">
                View All <span aria-hidden="true">→</span>
              </a>
            </div>
            
            {recentMessages.length > 0 ? (
              <div className="space-y-3">
                {recentMessages.map((message) => (
                  <div key={message.id} className={`flex items-start p-3 ${message.is_unread ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-800'} rounded-lg`}>
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={message.sender.profile_picture || ''} alt={message.sender.full_name} />
                      <AvatarFallback className="bg-gray-300 dark:bg-gray-700 text-white">
                        {message.sender.first_name.charAt(0) + message.sender.last_name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{message.sender.full_name}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {formatTimeAgo(message.sent_at)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-500 text-center py-4">No recent messages.</p>
            )}
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
    return Math.floor(interval) + " years ago";
  }
  
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  
  return Math.floor(seconds) + " seconds ago";
}