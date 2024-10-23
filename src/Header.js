const FULL_NAME = "Wiktor Latanowicz";

const PHONE = "tel. +48 693 150 059"
const EMAIL = "wiktor@latanowicz.com"
const GITHUB = "github.com/wlatanowicz"

const Header = () => {
  return (
    <div className="section row">
      <h1 className="col">{FULL_NAME}</h1>
      <div className="contact-info col-right">
        <div>{PHONE}</div>
        <div>
          <a href={"mailto:" + EMAIL}>{EMAIL}</a>
        </div>
        <div>
          <a href={"https://" + GITHUB}>{GITHUB}</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
