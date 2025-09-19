import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Bus, 
  Shield, 
  Users, 
  MapPin, 
  Clock, 
  Phone, 
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';

export const GirlsSupport: React.FC = () => {
  const busRoutes = [
    {
      id: '1',
      routeName: 'North District Route',
      pickupPoints: ['Central Market', 'Girls School', 'Hospital Junction', 'Main College'],
      timing: '7:30 AM - 5:30 PM',
      capacity: '40 students',
      ngoPartner: 'Sakhi Foundation',
      status: 'Active'
    },
    {
      id: '2',
      routeName: 'South District Route',
      pickupPoints: ['Village Center', 'Post Office', 'Bank Square', 'College Gate'],
      timing: '8:00 AM - 6:00 PM',
      capacity: '35 students',
      ngoPartner: 'Udaan NGO',
      status: 'Active'
    },
    {
      id: '3',
      routeName: 'East District Route',
      pickupPoints: ['Railway Station', 'Market Area', 'School Junction', 'College Campus'],
      timing: '7:45 AM - 5:45 PM',
      capacity: '42 students',
      ngoPartner: 'Pragati Trust',
      status: 'Starting Soon'
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Female Attendant',
      description: 'Dedicated female attendant in every bus for safety and support'
    },
    {
      icon: Phone,
      title: '24/7 Helpline',
      description: 'Emergency contact number for parents and students'
    },
    {
      icon: MapPin,
      title: 'GPS Tracking',
      description: 'Real-time location tracking shared with parents'
    },
    {
      icon: Users,
      title: 'Background Verified Staff',
      description: 'All drivers and attendants are police verified'
    }
  ];

  const supportServices = [
    'Free transportation to and from college',
    'Safe and reliable bus service',
    'Female attendant on board',
    'GPS tracking for parent peace of mind',
    'Emergency contact support',
    'Flexible pickup points near home',
    'Regular safety training for staff',
    'Parent feedback system'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Bus className="h-8 w-8 text-pink-600" />
            <h1 className="text-2xl">Girls' Education Support Initiative</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Breaking Barriers, Building Futures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our NGO partnerships provide safe, free transportation services specifically designed 
            to support girls' education and increase female enrollment in government colleges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Bus className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Free Transportation</h3>
              <p className="text-gray-600">No cost barrier for girls seeking higher education</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Safety First</h3>
              <p className="text-gray-600">Comprehensive safety measures and protocols</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Community Support</h3>
              <p className="text-gray-600">Local NGO partnerships and community involvement</p>
            </div>
          </div>
        </div>

        {/* Bus Routes Section */}
        <section className="mb-12">
          <h3 className="text-3xl mb-8 text-center">Available Bus Routes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {busRoutes.map((route) => (
              <Card key={route.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{route.routeName}</CardTitle>
                    <Badge variant={route.status === 'Active' ? 'default' : 'secondary'}>
                      {route.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        Pickup Points
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {route.pickupPoints.map((point, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{route.timing}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{route.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-pink-500" />
                        <span className="text-pink-600">{route.ngoPartner}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
                      disabled={route.status !== 'Active'}
                    >
                      {route.status === 'Active' ? 'Register for Route' : 'Notify When Available'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-12">
          <h3 className="text-3xl mb-8 text-center">Safety & Security Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Star className="h-6 w-6 mr-2 text-yellow-500" />
                  What We Provide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {supportServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">How to Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Register as Student</h4>
                      <p className="text-pink-100 text-sm">Complete your student registration on our platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Choose Your Route</h4>
                      <p className="text-pink-100 text-sm">Select the bus route closest to your location</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Submit Documents</h4>
                      <p className="text-pink-100 text-sm">Provide required documents for verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Start Your Journey</h4>
                      <p className="text-pink-100 text-sm">Begin your safe commute to college</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="text-center">
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-red-800 flex items-center justify-center">
                <Phone className="h-6 w-6 mr-2" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700 mb-4">
                24/7 helpline for any safety concerns or emergencies
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">
                📞 1800-GIRLS-HELP (1800-447577)
              </div>
              <p className="text-sm text-red-600">
                This helpline is monitored by our NGO partners and local authorities
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};