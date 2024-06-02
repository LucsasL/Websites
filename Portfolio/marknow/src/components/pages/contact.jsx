import { useState } from "react";

function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  return (
    <main>
      <div>
        <section id="form">
          <div>
            <form method="GET">
              <fieldset>
                <legend>Your contact information</legend>
                <div>
                  <label htmlFor="name">Name: </label> <br />
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    minLength={8}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email: </label> <br />
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="msg">Message: </label> <br />
                  <textarea
                    id="msg"
                    cols="30"
                    rows="10"
                    placeholder="Send us a message..."
                    value={msgInput}
                    onChange={(e) => setMsgInput(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div>
                  <input
                    type="submit"
                    value="Let's make profit"
                    className="prim-button"
                    onClick={() =>
                      alert(
                        `This is a fictitious company and all of this site is a project to my portfolio. Check the full project in my GitHub.
Project Link: https://github.com/lucsasl`
                      )
                    }
                  />
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