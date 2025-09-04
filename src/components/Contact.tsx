import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nandinichittaluru123@gmail.com',
      href: 'mailto:nandinichittaluru123@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9390706177',
      href: 'tel:+919390706177'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nandini-chittaluru',
      href: 'https://linkedin.com/in/nandini-chittaluru'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg font-semibold hover:text-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="pt-8 space-y-4">
              <h4 className="text-xl font-semibold mb-4">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary-muted text-primary-foreground"
                  onClick={() => window.open('mailto:nandinichittaluru123@gmail.com')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://linkedin.com/in/nandini-chittaluru', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-surface border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-muted text-primary-foreground font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Nandini Chittaluru. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;