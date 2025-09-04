import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Live Polling System',
      description: 'Real-time polling application with live results and interactive voting features using WebSockets for instant updates.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop&auto=format',
      technologies: ['React', 'Express.js', 'WebSockets', 'Node.js', 'MongoDB'],
      category: 'Full-Stack',
      featured: true
    },
    {
      title: 'Smart Attendance Monitoring',
      description: 'Cloud-based attendance system using Azure services with facial recognition and automated reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&h=300&fit=crop&auto=format',
      technologies: ['Azure', 'Computer Vision', 'Python', 'React', 'SQL'],
      category: 'Cloud & AI',
      featured: true
    },
    {
      title: 'Automated Sales Data ETL Pipeline',
      description: 'Scalable data pipeline using Azure Data Factory for automated data extraction, transformation, and loading.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&auto=format',
      technologies: ['Azure Data Factory', 'SQL', 'Python', 'Power BI'],
      category: 'Data Engineering'
    },
    {
      title: 'Privacy-Preserving Activity Tracker',
      description: 'On-screen activity monitoring system with privacy features using computer vision and machine learning.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop&auto=format',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Computer Vision'],
      category: 'Machine Learning'
    },
    {
      title: 'Sign Language to Text Conversion',
      description: 'AI-powered system for real-time sign language recognition and text conversion. Presented at National Symposium.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop&auto=format',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Deep Learning'],
      category: 'Machine Learning',
      award: 'National Symposium Presentation',
      featured: true
    }
  ];

  const categories = ['All', 'Full-Stack', 'Cloud & AI', 'Data Engineering', 'Machine Learning'];
  
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects and innovative solutions
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`card-hover bg-surface border-border overflow-hidden ${
              project.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                {project.award && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-secondary-foreground flex items-center gap-1">
                      <Award className="h-3 w-3" />
                      Award
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.award && (
                  <div className="mb-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <p className="text-sm text-secondary font-medium flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      {project.award}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.title === "Live Polling System" ? (
                    <>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary-muted text-primary-foreground"
                        asChild
                      >
                        <a href="/teacher">Teacher Portal</a>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 border-border hover:border-primary/50"
                        asChild
                      >
                        <a href="/student">Student Portal</a>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary-muted text-primary-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-border hover:border-primary/50"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">1</div>
            <div className="text-muted-foreground">National Recognition</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;