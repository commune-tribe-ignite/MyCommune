import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Sophisticated Navigation */}
      <motion.nav 
        className="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container">
          <div className="nav-content">
            <motion.div 
              className="logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">MyCommune</span>
            </motion.div>
            
            <motion.div 
              className="nav-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#features" className="nav-link">Features</a>
              <a href="#waitlist" className="nav-link">Waitlist</a>
              <a href="#waitlist" className="btn btn-primary btn-sm">Get Early Access</a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            {/* Text Content */}
            <div className="hero-text">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="badge">✨ Coming Soon</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Re-Imagine
                <br />
                <span className="gradient-text">Connecting</span>
              </motion.h1>
              
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Join a community where authentic connections flourish, meaningful conversations happen, 
                and every interaction is rewarded.
              </motion.p>
              
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a href="#waitlist" className="btn btn-primary btn-lg">
                  Join the Waitlist
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#features" className="btn btn-ghost">Learn More</a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Early Adopters</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Communities</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Active Connections</span>
                </div>
              </motion.div>
            </div>
            
            {/* Visual Element */}
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="visual-container">
                {/* Floating Cards */}
                <motion.div 
                  className="floating-card card-1"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="card-content">
                    <div className="card-avatar"></div>
                    <div className="card-text">
                      <div className="card-line"></div>
                      <div className="card-line short"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="floating-card card-2"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="card-content">
                    <div className="card-avatar"></div>
                    <div className="card-text">
                      <div className="card-line"></div>
                      <div className="card-line short"></div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="floating-card card-3"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <div className="card-content">
                    <div className="card-avatar"></div>
                    <div className="card-text">
                      <div className="card-line"></div>
                      <div className="card-line short"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Central Connection Hub */}
                <motion.div 
                  className="connection-hub"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="hub-ring">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="hub-dot"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Sophisticated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-mesh"></div>
      </div>
    </section>
  );
};

export default Hero;