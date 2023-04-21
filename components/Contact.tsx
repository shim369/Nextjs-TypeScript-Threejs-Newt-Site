function Contact() {
    return (
        <section className="contact" id="a04">
          <div className="container">
            <h1>Contact</h1>
            <p className='contact-read'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Veritatis voluptates ut eius aliquam dolorum consequuntur nemo quas.</p>
              
            <div className="contact-container">
              <div className="contact-inner">
                <form className="form-box" action="https://shim.form.newt.so/v1/vUf_6rML6" method="post">
                    <div className="form-item">
                        <input id="name" name="name" placeholder="Name" />
                        <input id="email" name="email" type="email" placeholder="Email" />
                        <textarea id="message" name="message" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </form>
              </div>
            </div>
  
            <div className="bnr-box">
                {/* <a href="https://nextbase-iota.vercel.app/" target="_blank">Next Base</a> */}
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