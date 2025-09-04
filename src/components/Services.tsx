import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Cloud, 
  Brain, 
  Database,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description: 'Creating responsive, scalable web applications using modern technologies like React, Express.js, and databases.',
      icon: Code,
      features: [
        'Responsive UI/UX Design',
        'RESTful API Development',
        'Database Integration',
        'Performance Optimization'
      ],
      color: 'text-primary'
    },
    {
      title: 'Cloud-Based Solutions',
      description: 'Designing and implementing cloud infrastructure using Azure for scalable, secure, and efficient applications.',
      icon: Cloud,
      features: [
        'Azure Cloud Services',
        'Containerization with Docker',
        'CI/CD Pipeline Setup',
        'Scalable Architecture'
      ],
      color: 'text-secondary'
    },
    {
      title: 'Machine Learning & AI',
      description: 'Developing intelligent solutions using TensorFlow, computer vision, and data analysis for real-world problems.',
      icon: Brain,
      features: [
        'Computer Vision Applications',
        'Predictive Analytics',
        'Natural Language Processing',
        'AI Model Development'
      ],
      color: 'text-primary-muted'
    },
    {
      title: 'Data Engineering & Automation',
      description: 'Building automated data pipelines and ETL processes for efficient data processing and analysis.',
      icon: Database,
      features: [
        'ETL Pipeline Development',
        'Data Processing Automation',
        'Real-time Data Solutions',
        'Analytics Dashboard'
      ],
      color: 'text-secondary-muted'
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">I Can Help You With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tech solutions for modern businesses and innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="card-hover bg-surface border-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 bg-gradient-primary rounded-lg`}>
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-background text-foreground hover:bg-surface font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;