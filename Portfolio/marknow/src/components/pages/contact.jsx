function Contact() {
  return (
    <main>
      <div>
        <section id="form">
          <div>
            <form method="GET">
              <fieldset>
                <legend>
                  Your contact information
                </legend>
                <div>
                  <label for="name">Name: </label> <br />
                    <input type="text" id="name" required placeholder="Your name" />
                </div>
                <div>
                  <label for="email">Email: </label> <br />
                    <input type="email" id="email" placeholder="Your email" required />
                </div>
                <div>
                  <label for="msg">Message: </label> <br />
                    <textarea id="msg" cols="30" rows="10" required placeholder="Send us a message..."></textarea>
                </div>
                <div>
                  <input type="submit" value="Let's make profit" class="prim-button" />
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;