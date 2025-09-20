import "./contact.css";

const Contact = ({ contactIconColor }) => {
  return (
    <section id="contacts">
      <h1 className="section-title">Let's connect</h1>
      <div className="contact">
        <div>
          <p>I am available for 2025 New Grade roles.</p>
          <p>Connect with me through email or phone.</p>
          <div className="contact-info-container">
            <div className="contact-info">
              <img
                src={`https://img.icons8.com/material-rounded/100/${contactIconColor}/new-post.png`}
                alt="email"
              />
              <p>dtaponzi@students.kennesaw.edu | doriantaponzing@gmail.com</p>
            </div>
            <div className="contact-info">
              <img
                src={`https://img.icons8.com/ios-glyphs/100/${contactIconColor}/phone--v1.png`}
                alt="phone"
              />
              <p>+1 470-439-9907</p>
            </div>
            <div className="contact-info">
              <img
                src={`https://img.icons8.com/material-rounded/100/${contactIconColor}/marker.png`}
                alt="location"
              />
              <p>Lilburn, Georgia, USA</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/myzdrody"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter your email" />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Write your message here"
          ></textarea>
          <button className="submit-btn">Submit now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
