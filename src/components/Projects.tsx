import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Authenticated Login System',
    description: 'A full-stack authentication system featuring secure Email/Password login and OAuth 2.0 integration for Google and LinkedIn.',
    image: 'images/Login System.png',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript (Fetch API)', 'Flask', 'Python 3','OAuth 2.0 (OpenID Connect)','Gunicorn (Production WSGI server)'],
    liveUrl: 'https://ravitejaatthiraju.github.io/flask-login-system/',
    codeUrl: 'https://github.com/ravitejaatthiraju/flask-login-system',
  },
  {
    id: 2,
    title: 'AI Safety Shield',
    description: 'AI Safety Shield is a real-time multimodal surveillance system that uses computer vision and audio analysis to detect weapons, distress sounds, aggressive behavior, and overcrowding, and instantly alerts administrators via a live dashboard and email.',
    image: 'images/AI Safety Shield (2).png',
    tags: ['Flask', 'OpenCV', 'Ultralytics YOLOv8','MediaPipe','SpeechRecognition','Python','React.js','Tailwind CSS'],
    liveUrl: 'https://github.com/ravitejaatthiraju/AI-Safety-Shield',
    codeUrl: 'https://github.com/ravitejaatthiraju/AI-Safety-Shield',
  },
  {
    id: 3,
    title: 'Azure Demand Forecasting & Capacity Optimization',
    description: 'A full-stack end-to-end forecasting application that predicts Azure cloud resource usage using XGBoost, LSTM, and ARIMA models. Features a React dashboard for interactive visualization, model comparison, and capacity planning.',
    image: 'images/Azure.png',
    tags: ['React.js', 'Tailwind CSS', 'Lucide React','Python','Flask','Pandas & NumPy','Scikit-Learn'],
    liveUrl: 'https://github.com/ravitejaatthiraju/Azure-Demand-Forecasting-Capacity-Optimization',
    codeUrl: 'https://github.com/ravitejaatthiraju/Azure-Demand-Forecasting-Capacity-Optimization',
  },
  {
    id: 4,
    title: 'NEW YEAR PROJECT',
    description: 'A celebratory webpage featuring a live countdown to 2026 accompanied by animated fireworks effects.',
    image: 'images/new year.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript (Canvas API)'],
    liveUrl: 'https://ravitejaatthiraju.github.io/NEW-YEAR-PROJECT/',
    codeUrl: 'https://github.com/ravitejaatthiraju/NEW-YEAR-PROJECT',
  },
  {
    id: 5,
    title: 'Christmas Celebration',
    description: 'Interactive Christmas webpage with snow, flying Santa animations, music, and gift box revealing inspiring quotes.',
    image: 'images/christmas.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://ravitejaatthiraju.github.io/CHRISTMAS-PROJECT/',
    codeUrl: 'https://github.com/ravitejaatthiraju/CHRISTMAS-PROJECT',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 px-6 overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1 }}
                  className="project-card min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
                >
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary to-accent'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
