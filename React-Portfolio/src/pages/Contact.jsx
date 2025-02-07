const Contact = () => {
    return (
      <section className="container contact-section">
        <h1>Contact Me</h1>
        <p>Phone: <a href="tel:3477037291">347-703-7291</a></p>
        <p>Email: <a href="mailto:michael2000ny@gmail.com">michael2000ny@gmail.com</a></p>
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea className="form-control" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;  