function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <section className="footer">
        <img src="./src/assets/Brutanix Logo SVG.svg" alt="Brutanix Logo" />
        <p className="studioName sectionHeading">
          Brutanix <br /> A Design and Development Studio
        </p>
        <p className="Text">
          Forging visions into mighty designs and steadfast solutions. Let's
          craft something legendary.
        </p>
        <p className="copyright">
          Copyright &copy; {year} Brutanix Pvt. Ltd. <br /> All Rights Reserved
        </p>
      </section>
    </>
  );
}

export default Footer;
