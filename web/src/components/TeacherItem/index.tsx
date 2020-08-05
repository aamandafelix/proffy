import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/16064248?s=400&u=faae62d3c1385934ba95e7adacd0c6d214a47bab&v=4" alt="Foto Amanda Bezerra"/>
        <div>
          <strong>Amanda Bezerra</strong>
          <span>Desenvolvimento Web</span>
        </div>
      </header>

      <p>
        Apaixonada por programação!
        <br /><br />
        Blablabla
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
