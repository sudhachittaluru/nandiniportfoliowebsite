import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'Dr. M.G.R Educational and Research Institute',
      year: '2025',
      grade: 'CGPA 8.5',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana College',
      year: '2021',
      grade: '70%',
      icon: Calendar,
    },
    {
      degree: 'Secondary School',
      institution: 'Ravindra Bharathi School',
      year: '2019',
      grade: 'CGPA 10',
      icon: Award,
    },
  ];

  const strengths = [
    'Problem-Solving',
    'Adaptability', 
    'Collaboration',
    'Quick Learning',
    'Communication',
    'Leadership'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, education, and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">My Story</h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                I am a Computer Science Engineering graduate (2025) with strong foundations in 
                data structures, algorithms, and operating systems. My passion lies in creating 
                innovative solutions that bridge the gap between complex technical challenges 
                and real-world applications.
              </p>
              <p>
                Skilled in Java, Python, and full-stack development with React and Express.js, 
                I have hands-on experience in building scalable, real-time, and cloud-based 
                applications using Azure. My expertise extends to machine learning, computer 
                vision, and data engineering.
              </p>
              <p>
                I'm passionate about solving problems, learning new technologies, and building 
                impactful software solutions that make a difference in people's lives.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Key Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((strength, index) => (
                  <div 
                    key={strength}
                    className="bg-surface rounded-lg p-3 border border-border hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <Card key={index} className="card-hover bg-surface border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                          <p className="text-muted-foreground mb-2">{edu.institution}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm bg-muted px-3 py-1 rounded-full">
                              {edu.year}
                            </span>
                            <span className="text-sm font-medium text-primary">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;