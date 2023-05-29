import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="social-media">
        <button>
          <img src="/imagens/fb.png" alt="" />
        </button>
        <button>
          <img src="/imagens/tw.png" alt="" />
        </button>
        <button>
          <img src="/imagens/ig.png" alt="" />
        </button>
      </div>
      <div className="project-logo">
        <img src="/imagens/logo.svg" alt="" />
      </div>
      <div className="created-by">
        <span>Desenvolvido por Rennan Zaniboni.</span>
      </div>
    </section>
  );
};

export default Footer;
