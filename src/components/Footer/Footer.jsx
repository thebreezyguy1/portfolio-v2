import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer">
        <div className="proverb">
          <p className="proverb-title">Proverbs 16:3</p>
          <p>
            "Commit your work to the Lord, and your plans will be established."
          </p>
        </div>
        <div className="footer-text-container">
          <div className="footer-links">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
          </div>
          <p className="copyright">
            &copy; Dorian Taponzing Donfack. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
