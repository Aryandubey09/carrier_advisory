import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GraduationCap, Users, Building2, BookOpen, Target, Heart } from 'lucide-react';

interface LandingPageProps {
  onRoleSelect: (role: 'student' | 'counsellor' | 'government') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl">CareerGuide</h1>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-600">Your Path to Success</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            One-Stop Career Personalizer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering students with personalized career guidance, connecting them with counsellors, 
            and helping government institutes bridge the awareness gap in education.
          </p>
          
          {/* Key Focus Areas */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-6xl mx-auto shadow-lg">
            <h3 className="text-2xl mb-6 text-gray-800">Our Mission: Transforming Student Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg mb-2 text-green-700">Boost Enrollment</h4>
                <p className="text-sm text-gray-600">Increasing government college enrollment through informed decision-making</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg mb-2 text-blue-700">Reduce Dropouts</h4>
                <p className="text-sm text-gray-600">Preventing student dropouts with personalized guidance and support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg mb-2 text-pink-700">Empower Girls</h4>
                <p className="text-sm text-gray-600">Special focus on girls' education with NGO partnerships & free transportation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg mb-2 text-purple-700">Aware Parents</h4>
                <p className="text-sm text-gray-600">Educating parents through counsellors, videos, and roadmaps for better decisions</p>
              </div>
            </div>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Student Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-200 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">As a Student</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Discover your ideal career path, explore courses, find nearby colleges, 
                  and get personalized guidance for your future.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                  <li>✓ Prevent dropouts with personalized guidance</li>
                  <li>✓ Increase government college enrollment</li>
                  <li>✓ Girls' education support & free bus service</li>
                  <li>✓ Career-to-college mapping</li>
                  <li>✓ Stress management & mental health support</li>
                </ul>
                <Button 
                  onClick={() => onRoleSelect('student')}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                  size="lg"
                >
                  Get Started as Student
                </Button>
              </CardContent>
            </Card>

            {/* Counsellor Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">As a Counsellor</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Connect with students, provide expert guidance, and help shape 
                  the future generation's career decisions.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                  <li>✓ Connect with students</li>
                  <li>✓ Manage counselling sessions</li>
                  <li>✓ Track student progress</li>
                  <li>✓ Provide expert guidance</li>
                  <li>✓ Build your practice</li>
                </ul>
                <Button 
                  onClick={() => onRoleSelect('counsellor')}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  size="lg"
                >
                  Join as Counsellor
                </Button>
              </CardContent>
            </Card>

            {/* Government Institute Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Government Institute</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Showcase your programs, connect with students, and increase 
                  enrollment through better awareness and outreach.
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                  <li>✓ List your programs</li>
                  <li>✓ Reach more students</li>
                  <li>✓ Increase enrollment</li>
                  <li>✓ Share resources</li>
                  <li>✓ Track applications</li>
                </ul>
                <Button 
                  onClick={() => onRoleSelect('government')}
                  className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
                  size="lg"
                >
                  Register Institute
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-red-800">The Education Crisis We're Solving</h3>
            <p className="text-gray-700 max-w-4xl mx-auto mb-8">
              Government degree colleges face declining enrollment not due to poor infrastructure, 
              but because of a critical awareness gap about career opportunities and educational pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2 text-red-600">📉</div>
              <h4 className="text-lg mb-2">Low Enrollment</h4>
              <p className="text-sm text-gray-600">Students unaware of government college benefits and quality programs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2 text-orange-600">🚪</div>
              <h4 className="text-lg mb-2">High Dropout Rates</h4>
              <p className="text-sm text-gray-600">Lack of career clarity leads to course changes and dropouts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2 text-yellow-600">❓</div>
              <h4 className="text-lg mb-2">Career Confusion</h4>
              <p className="text-sm text-gray-600">Students struggle to choose right streams and understand job prospects</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2 text-purple-600">👩‍🎓</div>
              <h4 className="text-lg mb-2">Girls' Education Gap</h4>
              <p className="text-sm text-gray-600">Transportation and safety concerns limit girls' access to higher education</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl mb-2 text-indigo-600">👨‍👩‍👧‍👦</div>
              <h4 className="text-lg mb-2">Parent Awareness Gap</h4>
              <p className="text-sm text-gray-600">Lack of parent understanding about career opportunities and education value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4">Our Comprehensive Solution</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Bridging the awareness gap through personalized guidance, comprehensive resources, targeted support for girls' education, and parent awareness programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-xl mb-2">Personalized Career Guidance</h4>
              <p className="text-gray-600">
                AI-driven recommendations based on interests, aptitude, and career goals to reduce confusion and improve enrollment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-xl mb-2">Complete Resource Hub</h4>
              <p className="text-gray-600">
                E-books, study materials, scholarship information, and exam updates to support continuous learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h4 className="text-xl mb-2">Girls' Education Support</h4>
              <p className="text-gray-600">
                NGO partnerships providing free bus services, safety measures, and dedicated counselling for girls' education.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-xl mb-2">Parent Awareness Programs</h4>
              <p className="text-gray-600">
                Educating parents through counsellor sessions, educational videos, and career roadmaps for informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl mb-4 text-green-800">Expected Impact</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Transforming the education landscape through data-driven guidance and inclusive support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl mb-4 text-green-700">📈 Increased Enrollment</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Better awareness of government college benefits</li>
                <li>• Clear understanding of career opportunities</li>
                <li>• Informed decision-making about course selection</li>
                <li>• Reduced migration to expensive private institutions</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl mb-4 text-blue-700">🎯 Reduced Dropouts</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Continuous career guidance and support</li>
                <li>• Stress management and mental health resources</li>
                <li>• Regular counsellor interactions</li>
                <li>• Clear roadmap for academic and career progression</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-500 to-rose-600 text-white p-8 rounded-xl text-center">
            <h4 className="text-2xl mb-4">🚌 Girls' Education Initiative</h4>
            <p className="text-lg mb-4">Breaking barriers through NGO partnerships</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Free Transportation</strong><br/>
                Safe bus services to colleges
              </div>
              <div>
                <strong>Safety First</strong><br/>
                Secure routes and timings
              </div>
              <div>
                <strong>Community Support</strong><br/>
                Local NGO coordination
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-400" />
                <h3 className="text-xl">CareerGuide</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Bridging the education awareness gap and empowering students to make informed career decisions.
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-4">Our Focus</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>🎯 Reducing dropout rates</li>
                <li>📈 Increasing enrollment</li>
                <li>👩‍🎓 Supporting girls' education</li>
                <li>🚌 Free transportation initiatives</li>
                <li>👨‍👩‍👧‍👦 Parent awareness programs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg mb-4">Partnership</h4>
              <p className="text-sm text-gray-300 mb-2">
                Working with NGOs and government institutions to provide:
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• Safe transportation for girls</li>
                <li>• Career counselling services</li>
                <li>• Educational resource access</li>
                <li>• Parent education through videos & roadmaps</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 CareerGuide. Transforming education through awareness and accessibility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};