import "../styles/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-left" style={{ marginLeft: "20px" }}>
            <h2>Workflow</h2>
            <p>
              Manage your entire client lifecycle, from proposal to payment.
            </p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <h3>Product</h3>
              <a href="/product">Features</a>
              <a href="/templates">Templates</a>
              <a href="/pricing">Pricing</a>
              <a href="/reviews">Reviews</a>
            </div>
            <div className="footer-links">
              <h3>Company</h3>
              <a href="/about">About</a>
              <a href="/careers">Careers</a>
              <a href="/press">Press</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-links">
              <h3>Resources</h3>
              <a href="/blog">Blog</a>
              <a href="/guides">Guides</a>
              <a href="/webinars">Webinars</a>
              <a href="/podcast">Podcast</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <p>© 2021 Bonsai. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
