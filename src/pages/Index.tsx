import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Award,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroBg from '@/assets/hero-bg.jpg';

// Data Object - All portfolio content
const portfolioData = {
  personalInfo: {
    name: "Varnit Kumar",
    tagline: "Data Analyst & Machine Learning Enthusiast",
    bio: "To have a growth-oriented and challenging career where I can contribute my knowledge and skills to an organization and enhance my experience through continuous learning and teamwork. Currently pursuing a Master of Computer Applications.",
    location: "Delhi, India",
    email: "kumar.varnit.16@gmail.com",
    phone: "+91 8287848299",
    linkedin: "https://linkedin.com/in/varnit-kumar",
    github: "https://github.com/vannu07"
  },
  
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "BCIIT, GGSIPU",
      period: "2024-2026",
      status: "Pursuing",
      cgpa: "9.2/10"
    },
    {
      degree: "Bachelor of Computer Applications", 
      institution: "Institute of Technology and Management, HNBGU",
      period: "July 2020 – July 2023",
      status: "Completed",
      cgpa: "7.2/10"
    }
  ],
  
  skills: {
    technical: ["Python", "SQL", "MongoDB"],
    tools: ["AWS", "Excel", "MLflow", "ETL Tools", "Power BI"],
    other: ["DSA", "Computer Networking", "Prompt Engineering"],
    soft: ["Team Collaboration", "Problem Solving", "Time Management", "Communication"]
  },
  
  experience: [
    {
      title: "ML Data Associate",
      company: "Amazon",
      period: "Jun 2024 - Dec 2024",
      description: "Worked with a diverse team to analyze large-scale datasets and identify trends that boosted internal labeling accuracy by 25%. Designed interactive dashboards using Power BI and Matplotlib that helped stakeholders make faster decisions, especially non-technical teams. Collaborated with data scientists on building and testing 3 machine learning models to automate manual processes — reducing human errors by 30%. Actively participated in Agile sprints, ensuring projects stayed on track and met deadlines — maintained a 95% on-time delivery rate. Gained hands-on experience with cloud tools (AWS) and contributed to discussions on improving the data pipeline performance.",
      achievements: [
        "Boosted internal labeling accuracy by 25%",
        "Reduced human errors by 30% through ML automation", 
        "Maintained 95% on-time delivery rate",
        "Designed interactive dashboards for stakeholder decisions"
      ],
      technologies: ["Python", "Power BI", "Matplotlib", "AWS", "Machine Learning", "Data Pipeline"]
    }
  ],
  
  projects: [
    {
      title: "Farm-IQ AI-Powered Smart Farming Assistant",
      description: "Developed a web app for crop recommendation, fertilizer guidance, and plant disease detection using Python, Flask & ML models. Integrated real-time weather data (WeatherAPI) for context-aware predictions. Implemented Random Forest & CNN models for accurate agricultural insights. Built a responsive UI with Bootstrap and JavaScript for farmer-friendly access.",
      technologies: ["Python", "Flask", "Random Forest", "CNN", "WeatherAPI", "Bootstrap", "JavaScript"],
      category: "AI/ML",
      features: ["Crop Recommendation", "Fertilizer Guidance", "Disease Detection", "Weather Integration"]
    },
    {
      title: "Student Performance Analyzer", 
      description: "Built a complete ML pipeline to predict student performance using structured data and supervised learning models. Used SQL for data extraction, MLflow for experiment tracking, and followed modular SDLC-based architecture. Deployed the model via Flask on cloud with real-time API integration, ensuring scalable and production-ready MLOps workflow.",
      technologies: ["Python", "SQL", "MLflow", "Flask", "Cloud Deployment", "API Integration"],
      category: "End-to-End ML",
      features: ["Complete ML Pipeline", "Experiment Tracking", "Cloud Deployment", "Real-time API"]
    },
    {
      title: "Sentiment Analysis Project",
      description: "Enhanced a sentiment analysis model for e-commerce reviews. Preprocessed text using tokenization, lemmatization, and stop-word removal. Enforced TF-IDF and trained Logistic Regression, SVM, Random Forest. Achieved 85-90% accuracy using advanced ML techniques. Optimized model with hyperparameter tuning & feature engineering.",
      technologies: ["Python", "TF-IDF", "Logistic Regression", "SVM", "Random Forest", "NLP"],
      category: "NLP",
      features: ["Text Preprocessing", "Multiple ML Models", "85-90% Accuracy", "Hyperparameter Tuning"]
    },
    {
      title: "Traffic Sign Detection",
      description: "Refined a deep learning-based model for traffic sign detection and classification. Executed Convolutional Neural Networks (CNNs) for image recognition. Used TensorFlow, PyTorch, and OpenCV for model training and optimization. Applied data augmentation to improve accuracy and robustness. Integrated real-time traffic sign recognition using NLP and image processing.",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "CNN", "Data Augmentation", "Image Processing"],
      category: "Computer Vision", 
      features: ["Deep Learning", "Real-time Detection", "Data Augmentation", "Image Classification"]
    }
  ],
  
  certifications: [
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      category: "Data Analysis"
    },
    {
      title: "The Complete SQL Bootcamp: Go from Zero to Hero",
      issuer: "Udemy", 
      category: "Database"
    },
    {
      title: "Programming with Python Professional Certificate",
      issuer: "OpenEDG Python Institute",
      category: "Programming"
    },
    {
      title: "Fundamentals of Analytics on AWS (PART 1,2)",
      issuer: "AWS",
      category: "Cloud Analytics"
    },
    {
      title: "Master Microsoft Excel",
      issuer: "LinkedIn Learning",
      category: "Data Tools"
    },
    {
      title: "Essentials of Prompt Engineering",
      issuer: "AWS", 
      category: "AI/ML"
    },
    {
      title: "Fundamentals of Machine Learning & AI",
      issuer: "AWS",
      category: "AI/ML"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      category: "Database"
    }
  ],

  forageSimulations: [
    {
      company: "Deloitte Australia",
      program: "Data Analytics Job Simulation",
      date: "March 2025"
    },
    {
      company: "Accenture North America", 
      program: "Data Analytics and Visualization Job Simulation",
      date: "2024"
    },
    {
      company: "Tata",
      program: "Data Visualization: Empowering Business with Effective Insights Job Simulation",
      date: "2024"
    },
    {
      company: "Quantium",
      program: "Data Analytics Job Simulation", 
      date: "2024"
    }
  ],

  leadership: [
    {
      role: "Cultural & Engagement Ambassador",
      organization: "Amazon",
      period: "2024",
      description: "Led multiple cultural engagement initiatives to build team spirit and promote inclusivity across departments. Organized virtual and on-site events to boost morale, foster collaboration, and welcome new joiners. Acted as a communication bridge between leadership and peers, creating a more connected work environment."
    },
    {
      role: "Cricket Team Captain", 
      organization: "BCIIT",
      period: "2024-Present",
      description: "Leading the university cricket team in inter-college tournaments and campus leagues. Responsible for team selection, practice planning, and in-game strategy. Developed team spirit, managed performance pressure, and led by example on and off the field."
    }
  ]
};

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              VK
            </div>
            
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>
        )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {portfolioData.personalInfo.tagline}
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{portfolioData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-primary transition-colors">
                  {portfolioData.personalInfo.email}
                </a>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="btn-hero glow-effect"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ChevronRight size={18} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors glow-effect"
              >
                <Github size={24} />
              </a>
              <a 
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors glow-effect"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors glow-effect"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-gradient card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.technical.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <Database className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-lg">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Brain className="text-accent" size={24} />
                </div>
                <CardTitle className="text-lg">Other Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.other.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {portfolioData.experience.map((exp, index) => (
              <Card key={index} className="card-gradient card-hover mb-8">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="text-lg font-semibold text-primary mb-2">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="card-gradient card-hover group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-3">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} className="mr-2" />
                    View on GitHub
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="text-primary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                        <Badge variant="outline" className="text-xs">{cert.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Forage Simulations */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">Industry Simulations</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {portfolioData.forageSimulations.map((sim, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Database className="text-secondary" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">{sim.company}</h4>
                        <p className="text-xs text-foreground/70 mb-1">{sim.program}</p>
                        <p className="text-xs text-muted-foreground">{sim.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-accent">Leadership Experience</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {portfolioData.leadership.map((role, index) => (
                <Card key={index} className="card-gradient card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{role.role}</CardTitle>
                        <div className="text-accent font-medium">{role.organization}</div>
                      </div>
                      <Badge variant="outline">{role.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <Card key={index} className="card-gradient card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <div className="text-primary font-medium">{edu.institution}</div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <Badge variant={edu.status === "Pursuing" ? "default" : "secondary"}>
                      {edu.status}
                    </Badge>
                  </div>
                  <div className="text-lg font-semibold text-accent">
                    CGPA: {edu.cgpa}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in data science and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="flex-1 max-w-sm"
              >
                <Card className="card-gradient card-hover group cursor-pointer">
                  <CardContent className="p-6">
                    <Mail className="text-accent mx-auto mb-4" size={32} />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      {portfolioData.personalInfo.email}
                    </p>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-sm"
              >
                <Card className="card-gradient card-hover group cursor-pointer">
                  <CardContent className="p-6">
                    <Linkedin className="text-secondary mx-auto mb-4" size={32} />
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with me
                    </p>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-sm"
              >
                <Card className="card-gradient card-hover group cursor-pointer">
                  <CardContent className="p-6">
                    <Github className="text-primary mx-auto mb-4" size={32} />
                    <h3 className="font-semibold mb-2">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      View my code
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 {portfolioData.personalInfo.name}. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;