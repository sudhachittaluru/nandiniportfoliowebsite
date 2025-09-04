import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain,
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  Handshake
} from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', level: 90, icon: Code2 },
    { name: 'Python', level: 85, icon: Code2 },
    { name: 'React.js', level: 88, icon: Code2 },
    { name: 'Express.js', level: 82, icon: Code2 },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'Azure Cloud', level: 80, icon: Cloud },
    { name: 'Docker', level: 75, icon: Cloud },
    { name: 'Git/GitHub', level: 90, icon: Code2 },
    { name: 'TensorFlow', level: 78, icon: Brain },
    { name: 'OpenCV', level: 76, icon: Brain },
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: Lightbulb },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Teamwork', icon: Users },
    { name: 'Adaptability', icon: Target },
    { name: 'Leadership', icon: Handshake },
    { name: 'Quick Learning', icon: Brain },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={skill.name} className="card-hover bg-surface border-border">
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-gradient-primary rounded-full">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-surface rounded-xl border border-border">
              <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
              <p className="text-muted-foreground">
                I'm constantly updating my skills and exploring new technologies. 
                Currently focusing on advanced machine learning techniques, cloud architecture, 
                and modern web development frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;