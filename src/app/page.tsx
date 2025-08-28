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
  Check
} from 'lucide-react';

// Main Dashboard Component
const FranchiseDashboard = () => {
  // Navigation menu items
  const menuItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Stages & Checklist', icon: CheckSquare },
    { name: 'Upload Docs', icon: Upload },
    { name: 'Preferred Vendors', icon: Users },
    { name: 'Tech Stack', icon: Layers },
    { name: 'Targets', icon: Target },
    { name: 'Zee Sales Targets', icon: Target },
    { name: 'MAI Settings', icon: Settings },
    { name: 'Pending Questions', icon: HelpCircle, badge: '3' },
  ];

  // Document data
  const documents = [
    {
      id: 1,
      name: 'Tech requirements.pdf',
      size: '200 KB',
      type: 'PDF',
      category: 'Legal',
      categoryColor: 'bg-blue-500',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Full'
    },
    {
      id: 2,
      name: 'Dashboard screenshot.jpg',
      size: '720 KB',
      type: 'PDF',
      category: 'Vendors & Assets',
      categoryColor: 'bg-green-500',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Onboarding'
    },
    {
      id: 3,
      name: 'Dashboard prototype recording.mp4',
      size: '16 MB',
      type: 'DOC',
      category: 'Technology',
      categoryColor: 'bg-orange-500',
      aiInclusion: false,
      dashboardInclusion: true,
      stageAccess: 'Franchisee'
    },
    {
      id: 4,
      name: 'Financial Overview',
      size: '4.2 MB',
      type: 'DOC',
      category: 'Financial',
      categoryColor: 'bg-purple-500',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Prospect'
    },
    {
      id: 5,
      name: 'UX Design Guidelines.docx',
      size: '400 KB',
      type: 'DOC',
      category: 'Legal',
      categoryColor: 'bg-blue-500',
      aiInclusion: true,
      dashboardInclusion: false,
      stageAccess: 'Onboarding'
    },
    {
      id: 6,
      name: 'Dashboard interaction.aep',
      size: '12 MB',
      type: 'PDF',
      category: 'Legal',
      categoryColor: 'bg-blue-500',
      aiInclusion: true,
      dashboardInclusion: true,
      stageAccess: 'Onboarding'
    },
    {
      id: 7,
      name: 'Briefing call recording.mp3',
      size: '18.6 MB',
      type: 'PDF',
      category: 'Financial',
      categoryColor: 'bg-purple-500',
      aiInclusion: false,
      dashboardInclusion: false,
      stageAccess: 'Prospect'
    }
  ];

  // Progress circle component
  const ProgressCircle = ({ percentage }:{percentage:any}) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
        </div>
      </div>
    );
  };

  // File type icon component
  const FileTypeIcon = ({ type }:{type:any}) => {
    const getFileColor = () => {
      if (type === 'PDF') return 'bg-red-500';
      if (type === 'DOC') return 'bg-blue-500';
      return 'bg-gray-500';
    };

    return (
      <div className={`${getFileColor()} text-white text-xs font-bold w-8 h-8 rounded flex items-center justify-center`}>
        {type}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-teal-700 text-white">
        <div className="p-4">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center">
              <span className="text-teal-700 font-bold">⚡</span>
            </div>
            <span className="text-lg font-semibold">FrameTech</span>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active 
                      ? 'bg-teal-600 text-white' 
                      : 'text-teal-100 hover:bg-teal-600'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="flex-1 text-sm">{item.name}</span>
                  {item.badge && (
                    <span className="bg-white text-teal-700 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Logout at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center px-3 py-2 text-teal-100 hover:bg-teal-600 rounded-lg cursor-pointer transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              Financials & Targets
            </h1>
            <div className="flex items-center space-x-3">
              <Badge className="bg-red-500 text-white px-3 py-1">
                Adityaa Dey
              </Badge>
              <Avatar className="w-8 h-8">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Left Column - Account Progress */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">Account Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-6">
                      <ProgressCircle percentage={85} />
                    </div>
                    
                    {/* Steps Completed Section */}
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-gray-900 mb-4">Steps Completed</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Profile Setup', completed: true },
                          { name: 'Initial Training', completed: true },
                          { name: 'Legal Documents', completed: true }
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-700">{step.name}</span>
                            <div className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                      
                    {/* Steps Remaining Section */}
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-4">Steps Remaining</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'Financial Integration' },
                          { name: 'Final Review' }
                        ].map((step, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mr-3">
                              <div className="w-2 h-2 bg-gray-500 rounded-full ml-1 mt-1"></div>
                            </div>
                            <span className="text-sm text-gray-700">{step.name}</span>
                            <div className="ml-auto w-5 h-5 bg-gray-300 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Center Column - Franchisees & Financial */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-gray-600">Total Franchisees Onboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="text-4xl font-bold text-gray-900 mr-4">14</span>
                        <Badge className="bg-green-100 text-green-700 border-green-300 text-sm px-2 py-1">
                          ↗ 7.4%
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Avatar key={i} className="w-7 h-7 border-2 border-white -ml-1 first:ml-0">
                            <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                              {String.fromCharCode(64 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        <span className="ml-3 text-sm text-gray-600 font-medium">+7</span>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="mb-6">
                      <div className="flex h-3 bg-gray-200 rounded-full overflow-hidden gap-1">
                        <div className="bg-blue-700 flex-1 rounded-full"></div>
                        <div className="bg-blue-500 flex-[2.5] rounded-full"></div>
                        <div className="bg-blue-300 flex-[1.5] rounded-full"></div>
                      </div>
                    </div>

                    {/* Stage Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-700 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Stage 1 (Initial Inquiry)</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">02</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Stage 2 (Document Submission)</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">07</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-300 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">Stage 3 (IT Training)</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">05</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Wellbeing Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-600">Financial Wellbeing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <span className="text-3xl font-bold text-gray-900">20</span>
                      <Badge className="ml-3 bg-green-50 text-green-700 border border-green-200">
                        ↗ 2.1%
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Total Franchisees</p>
                    
                    {/* Target vs Current */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Target</p>
                          <p className="text-xl font-bold text-gray-900">$500,000</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Current</p>
                          <p className="text-xl font-bold text-gray-900">$450,000</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Key Insights & Prospect Leads */}
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-600">Key Insights & Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">10%</span>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                          <div className="w-6 h-6 border-2 border-gray-400 rounded-full border-dashed"></div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">Top Performer</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Sales Growth</p>
                    
                    {/* Feedback Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
                      <p className="text-sm text-gray-700">
                        • Franchisees are requesting more detailed training materials.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Prospect Leads Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-600">Prospect Leads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Wade Warren', stage: 'Initial Inquiry' },
                        { name: 'Ava Wright', stage: 'Initial Inquiry' },
                        { name: 'Cody Fisher', stage: 'Initial Inquiry' }
                      ].map((lead, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                              {lead.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
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

            {/* My Uploads Section - Simple card with no pink border */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-gray-900">My Uploads</h2>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mb-6">Documents that are uploaded by you.</p>

                {/* Search and Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input placeholder="Search here..." className="pl-9" />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>

                {/* Documents Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase w-8">
                          {/* Checkbox column */}
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          Document Name
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          Document Type
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          AI App Inclusion
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          Dashboard Inclusion
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          Stage Access
                        </th>
                        <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map((doc) => (
                        <tr key={doc.id} className="border-b hover:bg-gray-50">
                          <td className="py-4">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <FileTypeIcon type={doc.type} />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                                <p className="text-xs text-gray-500">{doc.size}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <Badge className={`${doc.categoryColor} text-white text-xs`}>
                              {doc.category}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <Switch checked={doc.aiInclusion} />
                          </td>
                          <td className="py-4">
                            <Switch checked={doc.dashboardInclusion} />
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
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm" className="text-red-500">
                                Delete
                              </Button>
                              <Button variant="ghost" size="sm" className="text-blue-500">
                                Edit
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FranchiseDashboard;