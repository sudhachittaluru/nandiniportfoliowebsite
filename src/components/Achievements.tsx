import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, FileText, Users } from 'lucide-react';
import workspaceImage from '@/assets/workspace.jpg';

const Achievements = () => {
  const achievements = [
    {
      title: 'Highest CGPA in 10th Grade',
      description: 'Achieved perfect CGPA of 10.0 in secondary school education',
      icon: Trophy,
      category: 'Academic Excellence',
      year: '2019'
    },
    {
      title: 'National Symposium Presentation',
      description: 'Presented Sign Language to Text Conversion System at national level technical symposium',
      icon: Users,
      category: 'Research & Innovation',
      year: '2024'
    }
  ];

  const certifications = [
    {
      title: 'Data Analytics Workshop',
      provider: 'Industry Expert',
      description: 'Comprehensive training in data analysis techniques and tools',
      icon: FileText,
      type: 'Workshop'
    },
    {
      title: 'Fundamentals of Python',
      provider: 'Certified Institution',
      description: 'Core Python programming concepts and applications',
      icon: FileText,
      type: 'Certification'
    },
    {
      title: 'Responsive Web Design',
      provider: 'NxtWave',
      description: 'Modern web design principles and responsive development',
      icon: FileText,
      type: 'Certification'
    },
    {
      title: 'AI & ML Modules',
      provider: 'Tech Institution',
      description: 'Artificial Intelligence and Machine Learning fundamentals',
      icon: FileText,
      type: 'Course'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Achievements & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition of excellence and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={achievement.title} className="card-hover bg-surface border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-primary rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold">{achievement.title}</h4>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              {achievement.year}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">{achievement.description}</p>
                          <Badge variant="outline" className="border-secondary/30 text-secondary">
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FileText className="h-8 w-8 text-secondary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={cert.title} className="card-hover bg-surface border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold">{cert.title}</h4>
                            <Badge variant="outline" className="border-muted text-muted-foreground">
                              {cert.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-secondary font-medium mb-2">{cert.provider}</p>
                          <p className="text-muted-foreground text-sm">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Workspace Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={workspaceImage}
            alt="Professional Workspace"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60 flex items-center">
            <div className="max-w-2xl px-8 md:px-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Turning My Vision Into Reality
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Specialized in Web Design, UX/UI, Webflow, and Front-End Development. 
                Creating innovative solutions that make a difference.
              </p>
              <div className="flex gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">8.5</div>
                  <div className="text-muted-foreground">Current CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">4+</div>
                  <div className="text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;