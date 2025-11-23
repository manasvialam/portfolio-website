import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  X,
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});

  const [selectedExp, setSelectedExp] = useState(null);   


  const allSkills = [
    // Programming Languages
    { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "R", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

    // Frontend & Web
    { name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Flask", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },

    // Machine Learning & Data Science
    { 
      name: "NumPy", 
      logoUrl: "https://raw.githubusercontent.com/numpy/numpy/main/branding/logo/primary/numpylogo.svg" 
    },
    { name: "Pandas", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "TensorFlow", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "Scikit-learn", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "OpenCV", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Matplotlib", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Seaborn", logoUrl: "/portfolio-website/seaborn-1.svg" },
    { name: "NLTK", logoUrl: "https://placehold.co/40x40/4096c4/FFFFFF?text=NLTK" },
    { name: "LangChain", logoUrl: "/portfolio-website/lanchain.png" },

    // Databases & Big Data
    { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "ChromaDB", logoUrl: "/portfolio-website/chromadb.png" },
    { name: "Hadoop", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "Tableau", logoUrl: "/portfolio-website/tableau.jpeg" },

    // DevOps & MLOps
    { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "DVC", logoUrl: "/portfolio-website/dvc.png" },
    { name: "MLFlow", logoUrl: "/portfolio-website/mlflow.png" },
    { name: "Insomnia", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" },
  ];
  
  const education = [
    {
      degree: "B.Tech.Computer Science & Engineering (Artificial Intelligence & Data Science)",
      institution: "SASTRA Deemed University",
      year: "2020 - 2024",
      details: "Covered core areas like ML, Deep Learning, Data Science, NLP, and Big Data Technologies",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
    degree: "Higher Secondary Education",
    institution: "Thamarai International School",
    year: "2018 - 2020",
    details: "Completed Science stream with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB).",
    icon: <GraduationCap className="w-5 h-5" />,
  },

  ];

  const projects = [
    {
      title: "Predictive Modeling Platform",
      description: "Developed a platform using Python and Flask to deploy various machine learning models with real-time feedback.",
      tags: ["Python", "Flask", "ML", "Deployment"],
      link: "#",
    },
    {
      title: "Decentralized Voting System",
      description: "Implemented a secure, blockchain-based voting system prototype using Solidity and React.",
      tags: ["Blockchain", "Solidity", "React", "Security"],
      link: "#",
    },
  ];

const experiences = [
    {
      title: "Machine Learning Engineer",
      organization: "Exponential AI",
      period: "Nov 2024 – Present",
      location: "Hyderabad, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "/portfolio-website/expo.jpeg", // ← in public folder
      highlights: [
        "Leading a 10-member team building LLM-powered RAG systems preventing $20M+ claim denials yearly",
        "Deployed custom embedding + reranker pipelines hitting 98.2% accuracy in production",
        "Built intelligent email & multi-format parser cutting processing time by 89%",
        "Systems live at Fortune 500 healthcare and $2B+ Medicaid platforms across the US"
      ]
    },
    {
      title: "AI Research Intern",
      organization: "Harvard Medical School – Shafiee Lab",
      period: "Feb 2024 – Jul 2024",
      location: "Boston, USA",
      icon: <Building2 className="w-5 h-5" />,
      logoUrl: "/portfolio-website/harvard.png",
      highlights: [
        "Co-invented SPyDERMAN — GAN-based smartphone diagnostics for Hepatitis C (Science Advances 2024)",
        "Developed VISTA — electricity-free AI-powered viral testing cartridge (Advanced Materials Technologies 2025)",
        "Achieved 94.59% accuracy detecting HCV at 574 IU/ml — works in areas with no labs or power",
        "Presented AI-for-IVF work at ASRM 2024"
      ]
    },
    {
      title: "Full-Stack Intern",
      organization: "Fidelity Investments",
      period: "Jun 2023 – Aug 2023",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "/portfolio-website/Fidelity-Logo.png",
      highlights: [
        "Led a team of 15 interns to merge 4 internal platforms into one unified NextGen UI",
        "Reduced transaction processing time from 8–10 minutes to under 3 minutes (90% efficiency gain)",
        "Built production-ready dashboards used daily by brokerage operations teams",
        "Presented to senior leadership and received outstanding rating"
      ]
    },
    {
      title: "Data Science Intern",
      organization: "Exposys Data Labs",
      period: "Oct 2022 - Nov 2022",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "/portfolio-website/exposys.jpeg",
      highlights: [
        "Developed Early Diabetes Prediction model on 10,000+ patient records",
        "Performed full EDA + feature engineering to reveal key risk patterns",
        "Achieved 99.2% accuracy using Random Forest — best among all classifiers tested",
        "Built complete end-to-end ML pipeline ready for deployment"
      ]
    },
    {
      title: "Web Development Intern",
      organization: "Sonata Software",
      period: "Feb 2022 – May 2022",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "/portfolio-website/sonata.jpeg",
      highlights: [
        "Built fully responsive heritage preservation website for INTACH Bangalore with 360° virtual tours",
        "Led front-end development using HTML, CSS, JavaScript, and Bootstrap",
        "Collaborated with team of 8 to deliver accessible platform promoting Indian cultural heritage",
        "Live website → https://www.intachblr.org/ulsoorsomeshwara/"
      ]
    }
  ];

  const achievements = [
    "Recipient of the National Research Fellowship (2024).",
    "Led a team of 5 engineers to successfully launch a major product feature.",
    "Mentored junior researchers on effective data visualization techniques.",
    "Published 4 papers in top-tier conferences.",
  ];

  const certifications = [
    { name: "Introduction to Statistics", issuer: "Stanford", year: "2024",link: "https://coursera.org/share/07c7aa198f2e9a9f7718a10468250d2f" },
    { name: "Machine Learning Onramp", issuer: "Mathworks", year: "2023",link: "https://drive.google.com/file/d/1uJhVk-fng4tGvp5hqpXQuq2rzLk20w2z/view?usp=drive_link" },
    { name: "Machine Learning Pipelines with Azure ML Studio", issuer: "Coursera", year: "2023",link: "https://coursera.org/share/3a469b119570440950a3f49a5ebafd08" },
    { name: "Building Custom Regional Reports with Google Analytics", issuer: "Coursera", year: "2022",link: "https://coursera.org/share/bf1f348ab6c7a6f49c516340916e0e91" },
    { name: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2022", link: "https://coursera.org/share/de96bbab709727c499afaf9124478810" },
    {
      name: "Machine Learning A-Z : Hands-On Python & R in Data science",
      issuer: "Udemy",
      year: "2022",
      link: "https://www.udemy.com/certificate/UC-d06ed1db-630f-4f3d-af03-ac46e0293387/"
    },
    {
    name: "Introduction to TensorFlow & Keras",
    issuer: "Great Learning",
    year: "2022",
    link: "https://www.mygreatlearning.com/certificate/AMZWCOYO?referrer_code=GL55GYXVJEY1C"
  }
  ];

  const publications = [
    {
      title: "Reducing hepatitis C diagnostic disparities with a fully automated deep learning–enabled microfluidic system for HCV antigen detection",
      authors: "Hui Chen, Yuxin Gao, Gaojian Li, Manasvi Alam, Srisruthi Udayakumar, Qazi Noorul Mateen, Sahar Rostamian, Katherine Cilley, Sungwan Kim, Giwon Cho, Juyong Gwak, Yixuan Song, Joseph Michael Hardie, Manoj Kumar Kanakasabapathy, Hemanth Kandula, Prudhvi Thirumalaraju, Younseong Song, Azim Parandakh, Arafeh Bigdeli, Gregory P. Fricker, Jenna Gustafson, Raymond T. Chung, Jorge Mera, Hadi Shafiee",
      venue: "Science Advances",
      year: "2025",
      description:
        "Contributed to the design and implementation of the deep learning architecture (SPyDERMAN) for smartphone-based HCV antigen detection, enabling accurate classification from microfluidic assay images using adaptive adversarial learning and minimal labeled data.",
      tags: ["GANs", "Adversarial Training", "Few-Shot Learning"],
      link: "https://www.science.org/doi/full/10.1126/sciadv.adt3803",
      imageUrl: "portfolio-website/science.jpeg",
      highlightAuthor: "Manasvi Alam"
    },
    {
      title: "Automated, Deep Learning-Enabled Immunoassay Microfluidic Cartridge for Viral Pathogen Detection",
      authors: "Joseph Michael Hardie, Sungwan Kim, Zehua Yin, Juhyeon Chun, Jack Minahan, Jisan Kim, Teertha Ayanji, Prudhvi Thirumalaraju, Manoj Kumar Kanakasabapathy, Manasvi Alam, Aditya Vardhan Reddy Katkuri, Gianna Gallagher, Harshitha Mariadoss Yuvaraj, Ahmed Shokr, Ella Weinmann, Daniel Robert Kuritzkes, Jonathan Zheng Li, Raymond Taeyong Chung, Jorge Mera, Hadi Shafiee",
      venue: "Advanced Materials Technologies",
      year: "2025",
      description:
        "Developed a compact neural network for smartphone-based assay reading (~94% accuracy) on VISTA, a low-cost, electricity-free microfluidic platform detecting SARS-CoV-2 and HCV in <45 minutes and at low viral loads, enabling lab-quality diagnostics in resource-limited settings.",
      tags: ["CNNs", "On-Device Inference", "Model Quantization"],
      link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admt.202500025",
      imageUrl: "portfolio-website/advance.jpeg", 
      // Add this line to highlight your name
      highlightAuthor: "Manasvi Alam"
    },
    {
      title: "Enhancing IVF Success Prediction with AI: Integrating Patient Data, Cycle Metrics, and Embryo Imaging",
      authors: "Hemanth Kandula, Victoria S. Jiang, Manoj Kanakasabapathy, Prudhvi Thirumalaraju, Niveditha Kovilakath, Tinendra Kandula, Aditya Vardhan Reddy Katkuri, Manasvi Alam, Irene Souter, Charles L. Bormann, Hadi Shafiee",
      venue: "American Society of Reproductive Medicine (ASRM), Fertility and Sterility (Poster)",
      year: "2024",
      description:
        "Proposed an ensemble AI model that predicts live birth rates by combining patient data, cycle outcomes, and embryo imaging, enabling more personalized IVF counseling and decisions.",
      tags: ["Multimodal Fusion", "Ensemble Models", "Vision Transformers"],
      link: "https://www.fertstert.org/article/S0015-0282(24)01161-0/fulltext",
      imageUrl: "portfolio-website/asrm.png", 
      // Add this line to highlight your name
      highlightAuthor: "Manasvi Alam"
    },
    {
      title: "Deep Learning Models for Classification of Remote Sensed Images",
      authors: "Manasvi Alam, Srimansi Ramesh Kumar, Dr. Revathy G",
      venue: "Applied Intelligence, SCIE Springer Journal (UNDER REVIEW)",
      year: "2024",
      description:
      "We compare a custom CNN with fine-tuned pre-trained architectures for land-use and land-cover classification on the UCM dataset. Using metrics like accuracy, precision, recall, and F1-score, the study shows clear benefits of transfer learning. Fine-tuned models, especially ResNet152V2, achieve the best overall performance.",
      tags: ["Computer Vision", "Transfer Learning", "Aerial Imagery"],
      link: "https://drive.google.com/file/d/1pH-nB-CqpBsSuOLDNIE7avvbelcse9aK/view?usp=drive_link",
      imageUrl: "portfolio-website/miniproject.jpeg", 
      // Add this line to highlight your name
      highlightAuthor: "Manasvi Alam"
    },
    {
      title: "IMPROVING EMBRYO PLOIDY PREDICTION ACCURACY USING VOTING ENSEMBLES OF DEEP NEURAL NETWORKS",
      authors: "Manasvi Alam",
      venue: "Undergraduate Thesis",
      year: "2024",
      description:"Built a multimodal ensemble using CNN imaging + clinical parameters to predict embryo euploidy with 89.4% accuracy (+11.5% over baseline). Deployed at MGH on 699 blastocysts, improving IVF embryo selection without PGT-A.",
      tags: ["IVF AI", "Multimodal Ensemble", "Non-Invasive PGT-A"],
      link: "https://drive.google.com/file/d/1huVK79TIKXwhYZcg1IhQ86NiPg9Plbze/view?usp=drive_link",
      imageUrl: "portfolio-website/final_year_prjjeect.jpeg", 
      // Add this line to highlight your name
      highlightAuthor: "Manasvi Alam"
    }
  ];

useEffect(() => {
  // Hero is always visible
  setIsVisible({ hero: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    if (section.id !== "hero") observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

// ← ADD THIS (fixes modal + background scroll forever)
useEffect(() => {
  if (selectedExp) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
  };
}, [selectedExp]);

  const NavLink = ({ href, children }) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;
    return (
      <a
        href={href}
        className={`text-xs font-medium transition-all duration-200 
          ${
            isActive
              ? "text-blue-700 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
          }
          py-1 whitespace-nowrap
        `}
        onClick={() => setActiveSection(sectionId)}
      >
        {children}
      </a>
    );
  };

  const getSectionClass = (id) =>
    `py-20 px-4 transition-all duration-1000 ease-out 
    ${
      isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;
    
    // Helper component for content cards
    const Card = ({ title, children, className = "" }) => (
      <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${className}`}>
        {title && <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>}
        {children}
      </div>
    );

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      {/* Navigation Bar - FIXED: Hidden on mobile, visible on md: and above */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-extrabold text-gray-800 tracking-tight md:mb-0">
            Manasvi Alam
          </h1>
          <div className="flex gap-4 overflow-x-auto py-1 md:py-0 justify-center items-center">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Adjusted pt-28 to pt-16 since the nav bar is now hidden on mobile */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16 md:pt-20">
        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text Content - Left */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight 
                bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Manasvi Alam
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-700 tracking-tight">
                Machine Learning Engineer & Data Scientist
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                I enjoy designing systems that blend strong engineering with practical machine learning. I’m driven by clarity, simplicity, and building tools that genuinely help people get things done.
              </p>

              {/* Social Icons - Perfectly spaced & sized */}
              <div className="flex gap-5 justify-center md:justify-start pt-4">
                <a
                  href="https://github.com/manasvialam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manasvi-alam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:manasvialam03@gmail.com"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Photo - Right */}
            <div className="order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-white shadow-2xl">
                  <img
                    src="/portfolio-website/profile.png" 
                    alt="Manasvi Alam"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={getSectionClass("about")}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-2xl border border-blue-100">
            <div className="space-y-5 text-base leading-relaxed text-gray-700 max-w-3xl mx-auto">
              <p>
                I build and ship production AI systems using LLMs, RAG, and custom deep learning pipelines. At Exponential AI, I lead the development of high-accuracy RAG and intelligent document processing platforms used across major US healthcare networks. Previously, I conducted deep learning diagnostics research at Harvard Medical School, with publications in Science Advances and Advanced Materials Technologies.
                I care about clean, scalable code, reliable ML infrastructure, and turning research into real systems.
              </p>
              <p className="text-blue-600 font-medium pt-3">
                Always open to thoughtful conversations, whether about tech, careers, or creative ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section - IMPROVED MOBILE TIMELINE */}
      <section id="experience" className={getSectionClass("experience")}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-md transition-all duration-500 
                          border border-gray-100 hover:border-transparent hover:shadow-2xl 
                          hover:-translate-y-2 overflow-hidden"
              >
                {/* Soft Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-sky-500/10 blur-2xl -z-10"></div>

                {/* Static Top Gradient Bar (Always Visible) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500"></div>

                <div className="p-5 md:p-7">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-5 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Logo with Subtle Glow */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-sky-400/20 
                                        rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        <div className="bg-white p-2.5 rounded-xl shadow-md ring-1 ring-gray-200 
                                        group-hover:ring-blue-300 group-hover:shadow-xl transition-all duration-400">
                          {exp.logoUrl ? (
                            <img src={exp.logoUrl} alt="" className="w-12 h-12 object-contain rounded" />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded flex items-center justify-center text-white font-bold text-xl">
                              {exp.organization[0]}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-400">
                          {exp.title}
                        </h3>
                        <p className="text-base font-medium text-blue-600 flex items-center gap-1.5 mt-0.5 group-hover:text-blue-700 transition-colors">
                          <Building2 className="w-4 h-4" />
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="text-left md:text-right text-sm space-y-0.5">
                      <div className="flex items-center gap-1.5 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 group-hover:text-gray-700 transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-gray-700 text-sm md:text-base leading-snug">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start group-hover:text-gray-800 transition-colors duration-300">
                        <span className="text-cyan-500 font-bold mr-3 mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - FIXED: Icons stay in full color */}
      <section id="skills" className={getSectionClass("skills")}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="space-y-16">
            {/* CORE SKILLS - Machine Learning & AI */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left 
                            relative inline-block after:content-[''] after:absolute  after:left-0 after:-bottom-3 
                            after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500 after:rounded-full">
                Core Expertise • Machine Learning & AI
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-6 md:gap-8">
                {["Python", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "LangChain", "OpenCV", "NLTK", 
                  "NumPy", "Pandas", "Matplotlib", "Seaborn", "FastAPI", "Flask", "DVC", "MLFlow"].map((skill) => {
                  const skillData = allSkills.find(s => s.name === skill) || {
                    name: skill,
                    logoUrl: skill === "PyTorch" 
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                      : "https://placehold.co/40x40/6366F1/FFFFFF?text=" + skill.slice(0,2)
                  };
                  return (
                    <div key={skill} className="flex flex-col items-center group">
                      <div className="p-3 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 
                                      hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-1">
                        <img src={skillData.logoUrl} alt={skill} className="w-10 h-10 object-contain" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill.replace("Scikit-learn", "sklearn").replace("NumPy", "Numpy")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TOOLS & PLATFORMS */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left 
                            relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-3 
                            after:w-24 after:h-1 after:bg-gradient-to-r after:from-cyan-500 after:to-teal-500 after:rounded-full">
                Tools, DevOps & Data Platforms
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-6 md:gap-8">
                {["Docker", "Kubernetes", "Git", "PostgreSQL", "MongoDB", "ChromaDB", "Hadoop", "Tableau", 
                  "Bitbucket", "Insomnia", "SQL"].map((skill) => {
                  const skillData = allSkills.find(s => s.name === skill) || {
                    name: skill,
                    logoUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase()}/${skill.toLowerCase()}-original.svg`
                  };
                  return (
                    <div key={skill} className="flex flex-col items-center group">
                      <div className="p-3 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 
                                      hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-1">
                        <img 
                          src={skillData.logoUrl} 
                          alt={skill} 
                          className="w-10 h-10 object-contain" 
                          onError={(e) => e.target.src = "https://placehold.co/40x40/94A3B8/FFFFFF?text=" + skill[0]}
                        />
                      </div>
                      <p className="mt-3 text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WEB & OTHERS */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center md:text-left 
                            relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-3 
                            after:w-24 after:h-1 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:rounded-full">
                Web Technologies & Others
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-6 md:gap-8">
                {["JavaScript", "React", "Angular", "HTML", "CSS", "Bootstrap", "C++", "R"].map((skill) => {
                  const skillData = allSkills.find(s => s.name === skill);
                  return (
                    <div key={skill} className="flex flex-col items-center group">
                      <div className="p-3 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 
                                      hover:border-blue-200 transition-all duration-300 group-hover:-translate-y-1">
                        <img src={skillData.logoUrl} alt={skill} className="w-10 h-10 object-contain" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {skill}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section - IMPROVED MOBILE TIMELINE */}
      <section id="education" className={getSectionClass("education")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Education
          </h2>

          {/* Mobile: Clean Vertical Timeline */}
          <div className="md:hidden space-y-8">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>

              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 relative mb-8">
                  {/* Circle Icon */}
                  <div className="absolute left-4 top-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg ring-4 ring-blue-50 z-10">
                    {edu.icon}
                  </div>

                  {/* Card */}
                  <div className="ml-16 flex-1 bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100">
                    <p className="text-xs text-gray-500 font-semibold">{edu.year}</p>
                    <h3 className="text-lg font-bold text-gray-800 mt-1">{edu.degree}</h3>
                    <p className="text-blue-600 text-sm font-medium mt-1">{edu.institution}</p>
                    <p className="text-gray-700 text-sm mt-3 leading-relaxed">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Your Original Beautiful Timeline — 100% Unchanged */}
          <div className="hidden md:block space-y-6 relative">
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-blue-400 transform md:-translate-x-1/2"></div>
            
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`flex justify-start ${
                  idx % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                <div
                  className={`w-full md:w-1/2 p-3 ${
                    idx % 2 !== 0 ? "md:pr-8" : "md:pl-8"
                  } rounded-xl`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] transform origin-center">
                    <div
                      className={`absolute top-0 transform -translate-y-1/2 
                        left-[14px] md:left-1/2 md:translate-x-[-15px]
                        p-1.5 rounded-full bg-blue-600 text-white ring-6 ring-blue-50 z-10`}
                    >
                      {edu.icon}
                    </div>

                    <p className="text-xs text-gray-500 mb-1 font-semibold pt-3">
                      {edu.year}
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 text-sm leading-normal">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Publications Section - IMPROVED MOBILE STACKING AND IMAGE SIZING */}
      {/* Publications Section - Perfect Image Alignment on Mobile & Desktop */}
      {/* Publications Section - Mobile: Full Image on Top | Desktop: Side-by-Side */}
      {/* Publications Section - With Soft Hover Glow (Only Change) */}
      <section id="publications" className={getSectionClass("publications")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 
                          hover:shadow-2xl hover:border-transparent transition-all duration-500 
                          hover:-translate-y-1 overflow-hidden"
              >
                {/* Soft Glow on Hover - ONLY NEW THING */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-sky-500/10 blur-2xl -z-10"></div>

                {/* Static Top Gradient Bar (Already there) */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500"></div>

                {/* Your original content - 100% unchanged */}
                {/* Mobile: Full Image at Top */}
                {pub.imageUrl && (
                  <a
                    href={pub.link || "#"}
                    target={pub.link ? "_blank" : undefined}
                    rel={pub.link ? "noopener noreferrer" : undefined}
                    onClick={(e) => !pub.link && e.preventDefault()}
                    className="block md:hidden"
                  >
                    <img
                      src={pub.imageUrl}
                      alt={`${pub.title} cover`}
                      className="w-full h-auto object-cover rounded-t-xl"
                    />
                  </a>
                )}

                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                    {/* Desktop: Image on Left */}
                    {pub.imageUrl && (
                      <a
                        href={pub.link || "#"}
                        target={pub.link ? "_blank" : undefined}
                        rel={pub.link ? "noopener noreferrer" : undefined}
                        onClick={(e) => !pub.link && e.preventDefault()}
                        className="hidden md:block flex-shrink-0"
                      >
                        <img
                          src={pub.imageUrl}
                          alt={`${pub.title} cover`}
                          className="w-48 h-auto object-cover rounded-lg shadow-md border border-gray-200 hover:opacity-90 transition-opacity"
                        />
                      </a>
                    )}

                    {/* Text Content - 100% unchanged */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-3">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight pr-2">
                          {pub.title}
                        </h3>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shadow-sm flex-shrink-0"
                            title="View Publication"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-gray-600 mt-2 mb-1 italic leading-relaxed">
                        {pub.authors.split(", ").map((author, i, arr) => (
                          <span key={i}>
                            {pub.highlightAuthor && author.includes(pub.highlightAuthor) ? (
                              <strong className="font-extrabold text-black">{author}</strong>
                            ) : (
                              author
                            )}
                            {i < arr.length - 1 && ", "}
                          </span>
                        ))}
                      </p>

                      <p className="text-sm font-bold text-blue-600 mb-2">
                        {pub.venue}, {pub.year}
                      </p>

                      <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-3">
                        {pub.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {pub.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={getSectionClass("projects")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="hover:scale-[1.01] transform origin-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 leading-normal mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Leadership Section */}
      <section id="achievements" className={getSectionClass("achievements")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Achievements & Leadership
          </h2>
          <Card className="p-8">
            <ul className="space-y-3 list-none p-0">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-gray-700">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={getSectionClass("certifications")}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Certifications
          </h2>

          {/* Forces exactly 2 rows: 4 on top, 3 on bottom (or 3+4 on small screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 max-w-4xl mx-auto">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transform transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-xl p-5 shadow-md hover:shadow-xl 
                                border border-gray-100 hover:border-blue-300 transition-all duration-300 
                                h-full flex flex-col justify-between text-center">
                  
                  <div className="space-y-2">
                    <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 
                                  group-hover:text-blue-700 transition-colors leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">{cert.issuer}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 text-xs">
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.year}
                    </span>

                    <div className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-medium">View</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className={getSectionClass("contact")}>
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-md text-gray-600 mb-8">
            Interested in collaboration or have questions about my research?<br className="hidden sm:block" />
            Feel free to reach out—I'd love to chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:manasvialam03@gmail.com"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm"
            >
              <Mail className="w-4 h-4 inline mr-2" /> Send Email
            </a>

            {/* FIXED: Now downloads your CV correctly */}
            <a
              href="/portfolio-website/Manasvi_CV.pdf"                
              download="Manasvi_Alam_Resume.pdf"   
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-gray-700 rounded-full font-semibold shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-blue-200 bg-white/70">
        <div className="max-w-5xl mx-auto text-center text-xs text-gray-600">
          <p className="font-medium">
            © 2025 Manasvi Alam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;