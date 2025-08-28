import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Home, 
  CheckSquare, 
  Upload, 
  Users, 
  Layers, 
  Target, 
  Settings, 
  HelpCircle, 
  LogOut,
  Search,
  Filter,
  MoreHorizontal,
  FileText,
  Image,
  Video,
  File,
  Edit,
  Trash2,
  Check,
  Circle
} from 'lucide-react';

const FranchiseDashboard: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: CheckSquare, label: 'Stages & Checklist' },
    { icon: Upload, label: 'Upload Docs' },
    { icon: Users, label: 'Preferred Vendors' },
    { icon: Layers, label: 'Tech Stack' },
    { icon: Target, label: 'Targets' },
    { icon: Target, label: 'Zee Sales Targets' },
    { icon: Settings, label: 'MAI Settings' },
    { icon: HelpCircle, label: 'Pending Questions', badge: 3 },
  ];

  const documents = [
    {
      id: '1',
      name: 'Tech requirements.pdf',
      size: '200 KB',
      type: 'pdf',
      category: 'Legal',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Full'
    },
    {
      id: '2',
      name: 'Dashboard screenshot.jpg',
      size: '720 KB',
      type: 'jpg',
      category: 'Vendors & Assets',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Onboarding'
    },
    {
      id: '3',
      name: 'Dashboard prototype recording.mp4',
      size: '18 MB',
      type: 'mp4',
      category: 'Technology',
      aiInclusion: false,
      dashboardInclusion: true,
      stageAccess: 'Franchisee'
    },
    {
      id: '4',
      name: 'Financial Overview',
      size: '4.2 MB',
      type: 'docx',
      category: 'Financial',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Prospect'
    },
    {
      id: '5',
      name: 'UX Design Guidelines.docx',
      size: '400 KB',
      type: 'docx',
      category: 'Legal',
      aiInclusion: true,
      dashboardInclusion: false,
      stageAccess: 'Onboarding'
    },
    {
      id: '6',
      name: 'Dashboard interaction.aep',
      size: '12 MB',
      type: 'aep',
      category: 'Legal',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Onboarding'
    },
    {
      id: '7',
      name: 'Briefing call recording.mp3',
      size: '18.8 MB',
      type: 'mp3',
      category: 'Financial',
      aiInclusion: false,
      dashboardInclusion: false,
      stageAccess: 'Prospect'
    }
  ];

  const prospectLeads = [
    { name: 'Wade Warren', stage: 'Initial Inquiry' },
    { name: 'Ava Wright', stage: 'Initial Inquiry' },
    { name: 'Cody Fisher', stage: 'Initial Inquiry' }
  ];

  const getFileIcon = (type: string) => {
    const iconClass = "h-4 w-4";
    switch (type) {
      case 'pdf': return <div className="bg-red-500 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">PDF</div>;
      case 'jpg': return <div className="bg-orange-500 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">JPG</div>;
      case 'mp4': return <div className="bg-blue-500 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">MP4</div>;
      case 'docx': return <div className="bg-blue-600 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">DOC</div>;
      case 'aep': return <div className="bg-purple-500 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">AEP</div>;
      case 'mp3': return <div className="bg-red-500 text-white p-1 rounded text-xs font-bold flex items-center justify-center w-8 h-8">MP3</div>;
      default: return <File className={iconClass} />;
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Legal': return <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">Legal</Badge>;
      case 'Vendors & Assets': return <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">Vendors & Assets</Badge>;
      case 'Technology': return <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">Technology</Badge>;
      case 'Financial': return <Badge className="bg-purple-500 hover:bg-purple-600 text-white text-xs">Financial</Badge>;
      default: return <Badge className="bg-gray-500 hover:bg-gray-600 text-white text-xs">{category}</Badge>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col bg-teal-700">
        <div className="flex flex-col flex-1">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 bg-teal-800">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
                <div className="text-teal-700 text-lg font-bold">⚡</div>
              </div>
              <span className="text-white font-semibold text-lg">FrameTech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-all duration-200 ${
                    item.active
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-teal-100 hover:bg-teal-600 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <Badge className="ml-auto bg-white text-teal-700 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 pb-4">
            <div className="flex items-center px-3 py-2.5 text-sm font-medium text-teal-100 rounded-lg cursor-pointer hover:bg-teal-600 hover:text-white transition-all duration-200">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Financials & Targets
            </h1>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-3 py-1">
                Adityaa Dey
              </Badge>
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-gray-300">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Top Section with Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Account Progress + Steps */}
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Account Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="#e5e7eb"
                            strokeWidth="10"
                            fill="none"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            stroke="#0891b2"
                            strokeWidth="10"
                            fill="none"
                            // strokeDasharray={${85 * 3.14}, 314}
                            className="transition-all duration-500"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl font-bold text-gray-900">85%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Steps Completed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {[
                        { name: 'Profile Setup', completed: true },
                        { name: 'Initial Training', completed: true },
                        { name: 'Legal Documents', completed: true },
                        { name: 'Financial Integration', completed: false },
                        { name: 'Final Review', completed: false }
                      ].map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}>
                            {step.completed && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                          <span className="text-sm text-gray-700">{step.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Total Franchisees + Financial Wellbeing */}
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Total Franchisees Onboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-gray-900">14</span>
                      <Badge className="ml-3 bg-green-100 text-green-700 border-green-200">
                        ↗ 7.4%
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Avatar key={i} className="h-6 w-6 border border-white">
                          <AvatarFallback className="text-xs bg-gray-200">U</AvatarFallback>
                        </Avatar>
                      ))}
                      <span className="text-xs text-gray-500 ml-2">+7</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex space-x-1 mb-2">
                        <div className="h-2 bg-blue-500 rounded" style={{width: '20%'}}></div>
                        <div className="h-2 bg-blue-400 rounded" style={{width: '50%'}}></div>
                        <div className="h-2 bg-blue-300 rounded" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-gray-600">Stage 1 (Initial Inquiry)</span>
                        </div>
                        <span className="font-semibold">02</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-gray-600">Stage 2 (Document Submission)</span>
                        </div>
                        <span className="font-semibold">07</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                          <span className="text-gray-600">Stage 3 (IT Training)</span>
                        </div>
                        <span className="font-semibold">05</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Financial Wellbeing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-gray-900">20</span>
                      <Badge className="ml-3 bg-green-100 text-green-700 border-green-200">
                        ↗ 2.1%
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">Total Franchisees</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Target</div>
                        <div className="text-xl font-bold text-gray-900">$500,000</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Current</div>
                        <div className="text-xl font-bold text-gray-900">$450,000</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Insights + Prospect Leads */}
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Key Insights & Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">10%</span>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          Top Performer
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">Sales Growth</div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700 mb-2">Feedback</div>
                      <div className="text-gray-600">
                        • Franchisees are requesting more detailed training materials.
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Prospect Leads
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {prospectLeads.map((lead, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gray-200 text-xs">
                              {lead.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                            <p className="text-xs text-gray-500">Stage: {lead.stage}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* My Uploads Section with Pink Border */}
            <div className="border-4 border-pink-400 rounded-lg bg-white p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900">My Uploads</h2>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Documents that are uploaded by you.
              </p>

              {/* Search and Filter */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search here..."
                    className="pl-9"
                  />
                </div>
                <Button variant="outline" className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>

              {/* Documents Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 text-left">
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Document Name</th>
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">AI App Inclusion</th>
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dashboard Inclusion</th>
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stage Access</th>
                      <th className="pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {documents.map((doc, index) => (
                      <tr key={doc.id} className="border-b border-gray-100">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            {getFileIcon(doc.type)}
                            <div>
                              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                              <p className="text-xs text-gray-500">{doc.size}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          {getCategoryBadge(doc.category)}
                        </td>
                        <td className="py-4">
                          <Switch
                            checked={doc.aiInclusion}
                            className="data-[state=checked]:bg-blue-500"
                          />
                        </td>
                        <td className="py-4">
                          <Switch
                            checked={doc.dashboardInclusion}
                            className="data-[state=checked]:bg-blue-500"
                          />
                        </td>
                        <td className="py-4">
                          <Select defaultValue={doc.stageAccess.toLowerCase()}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                              <SelectItem value="prospect">Prospect</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                              Delete
                            </Button>
                            <Button variant="outline" size="sm" className="text-blue-500 hover:text-blue-700">
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bryan Hoda Profile Card */}
            <div className="absolute top-80 left-80 bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-10">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gray-200">BH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">Bryan Hoda</p>
                  <p className="text-sm text-gray-500">Key Performing</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FranchiseDashboard;