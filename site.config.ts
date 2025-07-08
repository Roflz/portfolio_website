// Centralized site content config for portfolio_website

import { User, MapPin, Calendar, Mail, Phone, Globe, Code, Database, Smartphone, Cloud, Palette, Settings } from 'lucide-react'

export const heroSection = {
  greeting: "Hello, I'm",
  name: "Your Name",
  title: "Software Developer & Full-Stack Engineer",
  description: `I build exceptional digital experiences that combine beautiful design with powerful functionality. Passionate about creating innovative solutions that make a difference.`,
  ctas: [
    { label: 'View My Work', action: 'scroll', target: 'projects', icon: null, style: 'primary' },
    { label: 'Get In Touch', action: 'scroll', target: 'contact', icon: Mail, style: 'secondary' },
    { label: 'Download CV', action: 'download', target: '/cv.pdf', icon: null, style: 'secondary' },
  ],
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
  scrollIndicator: { target: 'about' },
}

export const aboutSection = {
  heading: 'About Me',
  subheading: 'Get to know me better and understand my journey in software development',
  personalInfo: [
    { icon: User, label: 'Name', value: 'Your Full Name' },
    { icon: MapPin, label: 'Location', value: 'City, Country' },
    { icon: Calendar, label: 'Birthday', value: 'January 1, 1990' },
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: Globe, label: 'Website', value: 'www.yourwebsite.com' },
  ],
  profileImage: {
    // Add image URL or import if you want to use a real image
    src: '',
    alt: 'Profile Image',
  },
  profileBadge: '5+',
  whoIAm: {
    heading: 'Who I Am',
    paragraphs: [
      `I'm a passionate software developer with over 5 years of experience creating innovative digital solutions. I specialize in full-stack development, focusing on building scalable web applications and intuitive user experiences.`,
      `My journey in technology began with a curiosity about how things work, which evolved into a deep passion for creating software that solves real-world problems. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.`,
      `When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`,
    ],
  },
  whatIDo: {
    heading: 'What I Do',
    skills: [
      { title: 'Frontend Development', description: 'React, TypeScript, Next.js, Tailwind CSS' },
      { title: 'Backend Development', description: 'Node.js, Python, PostgreSQL, MongoDB' },
      { title: 'Mobile Development', description: 'React Native, Flutter, iOS, Android' },
      { title: 'DevOps & Tools', description: 'Docker, AWS, Git, CI/CD' },
    ],
  },
  downloadCV: { label: 'Download CV', icon: User, href: '/cv.pdf' },
}

export const skillsSection = {
  heading: 'My Skills',
  subheading: 'A comprehensive overview of my technical skills and expertise across various domains',
  skillCategories: [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 60 },
        { name: 'Mobile UI/UX', level: 80 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Nginx', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Adobe XD', level: 70 },
        { name: 'Photoshop', level: 65 },
        { name: 'Sketch', level: 60 },
        { name: 'UI/UX Design', level: 80 },
      ]
    },
    {
      icon: Settings,
      title: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Project Management', level: 75 },
        { name: 'Technical Writing', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Leadership', level: 75 },
      ]
    }
  ],
  additionalSkills: [
    'GraphQL', 'Redux', 'Vue.js', 'Angular', 'Sass', 'Webpack',
    'Jest', 'Cypress', 'Firebase', 'Redis', 'Elasticsearch', 'Kubernetes',
    'Terraform', 'Jenkins', 'GitHub Actions', 'Vercel', 'Netlify', 'Heroku'
  ],
}

export const experienceSection = {
  heading: 'Work Experience',
  subheading: 'My professional journey and educational background',
  workExperience: [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major project',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern technologies. Collaborated with design and product teams to deliver high-quality solutions.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Docker'],
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Improved code quality by implementing automated testing',
        'Reduced bug reports by 30% through better error handling'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various client projects. Worked closely with designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Webpack'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website performance scores by 20%',
        'Received 100% client satisfaction rating'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in software engineering and artificial intelligence. Completed thesis on machine learning applications in web development.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Focused on software development and computer systems. Graduated with honors and completed multiple internships.',
      gpa: '3.9/4.0'
    }
  ]
}

export const projectsSection = {
  heading: 'Featured Projects',
  subheading: 'Explore my latest work and see how I bring ideas to life through code',
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: true
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning that provides customer support and answers queries in real-time.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data, interactive maps, and detailed forecasts for multiple locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Vuetify'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/yourusername/project',
      featured: false
    }
  ],
  filters: [
    { id: 'all', label: 'All Projects', icon: 'Code' },
    { id: 'web', label: 'Web Apps', icon: 'Globe' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' },
    { id: 'ai', label: 'AI/ML', icon: 'Code' }
  ]
}

export const contactSection = {
  heading: 'Get In Touch',
  subheading: "Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.",
  contactInfo: [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ],
  connectHeading: "Let's Connect",
  connectText: "I'm always interested in hearing about new opportunities, interesting projects, or just want to chat about technology. Feel free to reach out!",
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:bg-gray-900' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', color: 'hover:bg-blue-600' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', color: 'hover:bg-blue-400' },
    { name: 'Dribbble', url: 'https://dribbble.com/yourusername', color: 'hover:bg-pink-500' }
  ],
  sendMessageHeading: 'Send Message',
  sentMessage: {
    heading: 'Message Sent!',
    text: 
      "Thank you for reaching out. I'll get back to you soon!"
  },
  formFields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
  submitLabel: 'Send Message',
}

export const footerSection = {
  brand: {
    name: 'Your Name',
    description: 'A passionate software developer dedicated to creating innovative digital solutions that make a difference. Let\'s build something amazing together.',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
      { name: 'Twitter', url: 'https://twitter.com/yourusername' },
      { name: 'Dribbble', url: 'https://dribbble.com/yourusername' }
    ]
  },
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ],
  contactInfo: [
    'your.email@example.com',
    '+1 (555) 123-4567',
    'San Francisco, CA'
  ],
  copyright: {
    year: new Date().getFullYear(),
    name: 'Your Name',
    madeWith: 'Made with',
    love: 'and lots of coffee.'
  },
  backToTop: 'Back to top',
}

export const headerSection = {
  logo: 'YourName',
  navItems: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
} 