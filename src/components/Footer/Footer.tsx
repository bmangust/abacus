import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      Handcrafted by
      <a className={css.link} href="https://github.com/bmangust">
        bmangust
      </a>
      . 2022
    </div>
  );
};

export default Footer;
