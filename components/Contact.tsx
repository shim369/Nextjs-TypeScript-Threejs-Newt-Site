function Contact() {
    return (
        <section className="contact" id="a04">
          <div className="container">
            <h1>Contact</h1>
            <div data-aos="fade-up">
            <p className='contact-read'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Veritatis voluptates ut eius aliquam dolorum consequuntur nemo quas.</p>
              
            <div className="contact-container">
              <div className="contact-inner">
                <form className="form-box" action="https://shim.form.newt.so/v1/vUf_6rML6" method="post">
                    <div className="form-item">
                        <input id="name" name="name" placeholder="Name" autoComplete="name" />
                        <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" />
                        <textarea id="message" name="message" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </form>
              </div>
            </div>
            </div>
  
            <div className="bnr-box" data-aos="fade-up">
                <a href="https://nuxtbase.vercel.app/" target="_blank">Nuxt Base</a>
                <a href="https://astrobase.vercel.app/" target="_blank">Astro Base</a>
            </div>
  
            <p className='contact-read'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="contact-logo">
            NEXT BASE
            </div>
          </div>
        </section>
    );
}
  
export default Contact;