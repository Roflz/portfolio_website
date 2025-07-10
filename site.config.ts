// Centralized site content config for portfolio_website

import { User, MapPin, Calendar, Mail, Phone, Globe, Code, Database, Smartphone, Cloud, Palette, Settings, Github, Linkedin, ExternalLink, ShieldCheck, Zap, Terminal } from 'lucide-react'

export const heroSection = {
  greeting: "Hello, I'm",
  name: "Riley Mahn",
  title: "Generalist Software Developer with a Specialist’s Mindset",
  description: `I build automation, infrastructure, and intelligent software that scales. From DevOps pipelines to ML tools to responsive frontends and modern websites, I help turn complex problems into elegant, working code.`,
  ctas: [
    { label: 'View My Work', action: 'scroll', target: 'projects', icon: null, style: 'primary' },
    { label: 'Get In Touch', action: 'scroll', target: 'contact', icon: Mail, style: 'secondary' },
    { label: 'Download CV', action: 'download', target: '/cv.pdf', icon: null, style: 'secondary' },
  ],
  stats: [
    { value: '5+', label: 'Years in Software Development' },
    { value: '2', label: 'Gigs Built and Ready' },
    { value: '0', label: 'Projects Completed' },
    { value: '100%', label: 'Commitment to Client Success' },
  ],
  scrollIndicator: { target: 'about' },
}

export const aboutSection = {
  heading: 'About Me',
  subheading: 'Get to know me better and understand my journey in software development',
  personalInfo: [
    { icon: User, label: 'Name', value: 'Riley Mahn' },
    { icon: MapPin, label: 'Location', value: 'Denver, Colorado' },
    { icon: Calendar, label: 'Born', value: '1995' },
    { icon: Mail, label: 'Email', value: 'mahnriley@gmail.com', link: 'mailto:mahnriley@gmail.com' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/roflz' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/rileymahn/' },
    { icon: Globe, label: 'Fiverr', link: 'https://www.fiverr.com/yourfiverrusername' },
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
      `I started in bioengineering, but I kept getting pulled deeper into code. Scripting experiments, automating workflows, and building tools to make my job easier (and more fun). That curiosity turned into a passion for engineering software that scales, adapts, and actually solves problems.`,
      `These days, I focus on building clean interfaces, intelligent backend systems, and automated pipelines that tie it all together. I’ve worked with everything from machine learning models and CI/CD infrastructure to modern, responsive frontends and custom websites that just feel good to use.`,
      `I thrive in fast-paced environments where speed and quality both matter. Whether you're launching a product, automating your workflow, or just need a developer who gets it and gets it done. I’m here to help.`,
    ],
  },
  whatIDo: {
    heading: 'What I Do',
    skills: [
      { title: 'Frontend Development', description: 'React, TypeScript, Next.js, Tailwind CSS, HTML/CSS' },
      { title: 'Backend Development & Automation', description: 'Python, FastAPI, Node.js, PostgreSQL, MongoDB, Workflow Automation' },
      { title: 'Machine Learning & Data Tools', description: 'YOLOv8, CRNNs, OpenCV, scikit-learn, Pandas, NumPy' },
      { title: 'DevOps & Infrastructure', description: 'Docker, AWS, Git, CI/CD (GitHub Actions, GitLab CI, Jenkins)' },
    ],
  },
  downloadCV: { label: 'Download CV', icon: User, href: '/cv.pdf' },
}

// --- Sort skills in each category by level descending ---
const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
    ]
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 100 },
      { name: 'Node.js', level: 75 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 85 },
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD (Jenkins, GitLab CI)', level: 95 },
      { name: 'Linux', level: 80 },
      { name: 'Nginx', level: 70 },
    ]
  },
  {
    icon: Zap,
    title: 'Automation & ML',
    skills: [
      { name: 'Workflow Automation', level: 95 },
      { name: 'YOLOv8 / Computer Vision', level: 90 },
      { name: 'CRNN / OCR Tools', level: 85 },
      { name: 'OpenCV / Image Processing', level: 90 },
      { name: 'scikit-learn', level: 85 },
      { name: 'Pandas / NumPy', level: 80 },
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Software Verification & Testing',
    skills: [
      { name: 'Test Automation (Pytest, SpecFlow)', level: 95 },
      { name: 'Unit & Integration Testing', level: 95 },
      { name: 'Test Framework Development', level: 95 },
      { name: 'Gherkin / BDD', level: 95 },
      { name: 'Manual QA / Regression Testing', level: 85 },
      { name: 'Requirements-Based Verification', level: 95 },
    ]
  },
  {
    icon: Terminal,
    title: 'Languages',
    skills: [
      { name: 'Python', level: 100 },
      { name: 'C#', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Bash / Shell Scripting', level: 80 },
      { name: 'Gherkin', level: 95 },
    ]
  }
];

// Sort each skills array descending by level
skillCategories.forEach(cat => cat.skills.sort((a, b) => b.level - a.level));

export const skillsSection = {
  heading: 'My Skills',
  subheading: 'A comprehensive overview of my technical skills and expertise across various domains',
  skillCategories,
  additionalSkills: [
    // DevOps & CI/CD
    'GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform',

    // ML & Data Science
    'Tesseract OCR', 'Jupyter', 'Matplotlib', 'Seaborn', 'Label Studio', 'YOLOv5', 'PyTorch', 'TensorFlow',

    // Backend Frameworks & APIs
    'FastAPI', 'Flask',

    // Automation & Scripting
    'Selenium', 'Requests', 'BeautifulSoup', 'Pydantic',

    // Misc
    'VS Code', 'Postman', 'JSON/YAML', 'Regular Expressions'
  ],
}


export const experienceSection = {
  heading: 'Work Experience',
  subheading: 'My professional journey and educational background',
  workExperience: [
    {
      id: 1,
      title: 'Software Verification/DevOps Engineer',
      company: 'Boeing',
      location: 'Denver, CO (Remote)',
      period: 'Apr 2022 – Nov 2024',
      description: 'Ensured complete verification of large-scale, high-security projects with 100% accuracy. Designed and deployed advanced automation platforms for continuous test cycles. Executed software verification testing on embedded software for military drone aircraft using SpecFlow, Gherkin, C#, and Python. Developed technical documentation for methodologies, test strategies, and compliance.',
      technologies: ['Python', 'C#', 'SpecFlow', 'Gherkin', 'Jenkins', 'Bamboo', 'GitLab', 'Jira', 'CI/CD', 'Automation'],
      achievements: [
        'Automated statistical data analysis, visualization, and test execution with Python scripting',
        'Created CI/CD pipelines with Bamboo and Jenkins',
        'Integrated GitLab and Jira APIs for seamless data transfer and compliance',
        'Led Test Readiness Reviews (TRR) and Formal Qualification Testing (FQT)',
        'Developed real-time motor position monitoring solution for improved test accuracy',
        'Maintained aerospace industry standards for reliability and quality control'
      ]
    },
    {
      id: 2,
      title: 'Lead QA Test Automation Engineer',
      company: 'Agilent Technologies',
      location: 'Santa Clara, CA',
      period: 'Apr 2020 – Apr 2022',
      description: 'Built and led a QA Testing Automation platform and team. Developed and implemented automated QA testing frameworks in .NET using C# and Gherkin. Integrated SpecFlow for test execution and debugging. Oversaw Agile Scrum processes as Scrum Master.',
      technologies: ['C#', '.NET', 'SpecFlow', 'Gherkin', 'Jenkins', 'Visual Studio', 'Agile', 'Scrum'],
      achievements: [
        'Designed Jenkins-based CI pipeline with DevOps team',
        'Created and ran automated QA test scripts for Chromatography and Mass Spectrometry machines',
        'Conducted impact assessments of automation to refine testing strategies',
        'Implemented distributed systems for secure, scalable data management'
      ]
    },
    {
      id: 3,
      title: 'QA Test Engineer',
      company: 'Agilent Technologies',
      location: 'Santa Clara, CA',
      period: 'Dec 2019 – Apr 2020',
      description: 'Verified software functionality, evaluated scalability of big data systems, and ensured compliance with CFR regulations. Developed and deployed efficient test systems and compiled detailed reports.',
      technologies: ['QA', 'Big Data', 'CFR Compliance', 'Test Systems'],
      achievements: [
        'Contributed to yearly Software Test Life Cycle in Agile environment',
        'Addressed issues and implemented corrective actions with developers'
      ]
    },
    {
      id: 4,
      title: 'Chief Research Associate – Analytical Chemistry',
      company: 'i-Cultiver',
      location: 'Stanford, CA',
      period: 'Aug 2018 – Dec 2019',
      description: 'Initiated and executed chemical experiments to analyze plant compounds. Developed tailored chemical analysis protocols and managed extensive data analysis for research projects.',
      technologies: ['ICP-OES/MS', 'XRF', 'C/N Analysis', 'Data Analysis'],
      achievements: [
        'Performed nutrient and elemental analyses for research projects',
        'Managed analysis of 500+ experimental samples',
        'Influenced business strategy through insightful reporting'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Biomolecular Engineering',
      school: 'University of California, Santa Cruz',
      location: 'Santa Cruz, CA',
      period: '2013 – 2017',
      minors: ['Applied Mathematics', 'Bioinformatics'],
      description: 'Minors in Bioinformatics and Applied Mathematics. Managed multiple research labs, founded and led the Bioengineering Club, and completed a demanding senior project for an international competition. Developed computational tools for bioinformatics and molecular analysis.',
      gpa: undefined
    }
  ],
  research: [
    {
      id: 1,
      title: 'Research Associate – Molecular Biology',
      company: 'Mendel Biological Solutions',
      location: 'Hayward, CA',
      period: 'Feb 2018 – Aug 2018',
      description: 'Evaluated natural products using molecular techniques and bioassays. Improved laboratory workflows with automated liquid-handling robots and presented complex data to stakeholders.'
    },
    {
      id: 2,
      title: 'Undergraduate Researcher',
      company: 'Partch Lab, UCSC',
      location: 'Santa Cruz, CA',
      period: 'Aug 2016 – Mar 2017',
      description: 'Researched circadian rhythm proteins in human cells using molecular cloning and photo-induction systems.'
    },
    {
      id: 3,
      title: 'Metabolic Engineer',
      company: 'UCSC Team iGEM',
      location: 'Santa Cruz, CA',
      period: 'May 2016 – Nov 2016',
      description: 'Engineered a novel metabolic pathway in Bacillus subtilis for erythritol synthesis as part of an international competition.'
    },
    {
      id: 4,
      title: 'Undergraduate Researcher',
      company: 'Bowman Lab, UCSC',
      location: 'Santa Cruz, CA',
      period: 'Sep 2015 – Jun 2016',
      description: 'Conducted cloning experiments and used molecular biology and bioinformatics techniques to analyze Neurospora crassa.'
    }
  ]
}

export const projectsSection = {
  heading: 'Featured Projects',
  subheading: 'Explore my latest work and see how I bring ideas to life through code',
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcases my work, skills, and experience with smooth animations and dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://portfolio-website-inky-nine-14.vercel.app/',
      githubUrl: 'https://github.com/roflz/portfolio_website',
      fiverrUrl: 'https://www.fiverr.com/yourfiverrusername/portfolio-website-gig',
      featured: true
    },
    {
      id: 2,
      title: 'Business Landing Page',
      description: 'A professional business landing page template designed for freelancers and agencies. Features dynamic backgrounds, responsive design, and customizable sections.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://business-landing-page-tau-orcin.vercel.app/',
      githubUrl: 'https://github.com/roflz/business_landing_page',
      fiverrUrl: 'https://www.fiverr.com/yourfiverrusername/business-landing-page-gig',
      featured: true
    }
  ],
  filters: [
    { id: 'all', label: 'All Projects', icon: 'Code' },
    { id: 'web', label: 'Web Apps', icon: 'Globe' },
  ]
}

export const contactSection = {
  heading: 'Get In Touch',
  subheading: "Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.",
  contactInfo: [
    {
      icon: Mail,
      title: 'Email',
      value: 'mahnriley@gmail.com',
      link: 'mailto:mahnriley@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Denver, CO'
    }
  ],
  connectHeading: "Let's Connect",
  connectText: "I'm always interested in hearing about new opportunities, interesting projects, or just want to chat about technology. Feel free to reach out!",
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Roflz', color: 'hover:bg-gray-900' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riley-mahn/', color: 'hover:bg-blue-600' },
    { name: 'Fiverr', url: 'https://fiverr.com/yourusername', color: 'hover:bg-blue-400' }
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
    name: 'Riley Mahn',
    description: 'A passionate software developer dedicated to creating innovative digital solutions that make a difference. Let\'s build something amazing together.',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/Roflz' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riley-mahn/' },
      { name: 'Fiverr', url: 'https://fiverr.com/yourusername' }
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
    'mahnriley@gmail.com',
    'Denver, CO'
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
  logo: 'Riley Mahn',
  navItems: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
} 