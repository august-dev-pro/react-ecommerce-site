import React from "react";

const ContactPage = () => {
  return (
    <section className="contact_us">
      <div className="container">
        <form action="#" method="post" className="contact_form">
          <div className="form_titlte">Inscrivez vous !</div>
          <div className="form_content">
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                placeholder="Entrer votre nome"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="surname">Prenom</label>
              <input
                type="text"
                id="surname"
                placeholder="Entrer votre prenom"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                placeholder="aaaaaaaaa@gmail.com"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
