import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20.5 11.5L30 16L20.5 20.5L16 30L11.5 20.5L2 16L11.5 11.5L16 2Z" 
                fill="currentColor" opacity="0.2"/>
          <path d="M16 6L18.5 13.5L26 16L18.5 18.5L16 26L13.5 18.5L6 16L13.5 13.5L16 6Z" 
                fill="currentColor"/>
        </svg>
      ),
      title: 'Safe Space',
      description: 'Invite-only community ensuring authentic connections and meaningful interactions in a secure environment.',
      highlight: 'Privacy First'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2"/>
          <circle cx="20" cy="12" r="3" fill="currentColor" opacity="0.2"/>
          <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.2"/>
          <path d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z" fill="currentColor"/>
          <path d="M20 15C21.1046 15 22 14.1046 22 13C22 11.8954 21.1046 11 20 11C18.8954 11 18 11.8954 18 13C18 14.1046 18.8954 15 20 15Z" fill="currentColor"/>
          <path d="M16 23C17.1046 23 18 22.1046 18 21C18 19.8954 17.1046 19 16 19C14.8954 19 14 19.8954 14 21C14 22.1046 14.8954 23 16 23Z" fill="currentColor"/>
          <path d="M12 15L20 15M16 19L12 15M16 19L20 15" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        </svg>
      ),
      title: 'Community-Based',
      description: 'Build genuine relationships through shared interests, values, and experiences with like-minded individuals.',
      highlight: 'Real Connections'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="10" width="20" height="16" rx="2" fill="currentColor" opacity="0.2"/>
          <path d="M8 14L14 18L24 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="22" cy="8" r="4" fill="currentColor"/>
          <path d="M20 8L21 9L24 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Reward-Centric',
      description: 'Earn rewards for positive contributions, meaningful conversations, and helping others in the community.',
      highlight: 'Value Recognition'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="features" className="features">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-badge">
            <span className="badge">✨ Features</span>
          </div>
          <h2 className="section-title">
            Why Choose <span className="gradient-text">MyCommune</span>?
          </h2>
          <p className="section-subtitle">
            Experience the future of social networking with our unique approach to community building.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <div className="card-background"></div>
              <div className="card-content">
                <div className="feature-header">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-highlight">
                    {feature.highlight}
                  </div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="features-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to join our community?</h3>
            <p className="cta-subtitle">
              Be among the first to experience the future of meaningful connections.
            </p>
            <div className="cta-actions">
              <a href="#waitlist" className="btn btn-primary btn-lg">
                Join the Waitlist
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="cta-stats">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Already joined</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="features-background">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
      </div>
    </section>
  );
};

export default Features;