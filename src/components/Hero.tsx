import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profileImage from '@/assets/nandini-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-muted rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-secondary-muted rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Available for new opportunities</span>
            </div>

            {/* Hero Text */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
                Hey, I'm there
              </h2>
              <h1 className="hero-text mb-6">
                I AM<br />
                NANDINI
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                COMPUTER SCIENCE<br />
                <span className="text-gradient">ENGINEER</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Full-Stack Developer | AI & Cloud Enthusiast
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('#portfolio')}
                size="lg"
                className="bg-primary hover:bg-primary-muted text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <img
                  src={profileImage}
                  alt="Nandini Chittaluru"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-elegant"
                />
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#about')}
            className="p-2 rounded-full border border-primary/30 hover:border-primary transition-colors"
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;