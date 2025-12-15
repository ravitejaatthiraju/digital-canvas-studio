import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Dashboard',
    description: 'A real-time analytics dashboard powered by machine learning for predictive insights and data visualization.',
    image: '🤖',
    tags: ['React', 'Python', 'TensorFlow'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: '🛒',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'A modern social platform with real-time messaging, post sharing, and AI-powered content recommendations.',
    image: '💬',
    tags: ['React Native', 'Node.js', 'Socket.io'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Task Management',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
    image: '📋',
    tags: ['Vue.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
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
                  <div className="h-48 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                    <span className="text-7xl">{project.image}</span>
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
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
