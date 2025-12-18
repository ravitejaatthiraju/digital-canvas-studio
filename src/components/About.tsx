import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'HTML','React','Lucide React', 'Flask','JavaScript', 'Node.js', 'Python', 'AI/ML', 'CSS', 
  'Tailwind CSS', 'OpenCV', 'OAuth 2.0', 'Fetch API', 'SpeechRecognition'
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <img 
                   src="images/Prof pic.jpg"
                   alt="Atthiraju Raviteja" 
                   className="w-full h-full object-cover" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="text-primary text-sm font-semibold tracking-wider uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Building <span className="gradient-text">Intelligent</span> Experiences
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              I am a dedicated Developer and AI enthusiast with a mission to 
              bridge the gap between complex machine learning algorithms and 
              user-friendly web applications. With a strong academic foundation 
              in AI/ML and hands-on experience in Full Stack development, I love 
              turning raw data into actionable insights.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              I spend my offline time bridging the gap between complex AI tech 
              and practical use cases—researching breakthroughs, creating educational 
              content, and solving business problems.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-foreground font-semibold mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
