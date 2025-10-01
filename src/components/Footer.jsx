import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <h3 className="gradient-text">MyCommune</h3>
            <p>Re-Imagine connecting</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#waitlist">Join Waitlist</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Guidelines</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Updates</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 MyCommune. All rights reserved.</p>
          <p>Building the future of authentic social connection.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer