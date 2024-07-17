const navigation = () => {
  return (
    <div className="navigation-container">
      <img
        className="navigation-logo"
        src="./src/assets/smiley'sLogoTrans.png"
        alt="Smiley's Logo"
      />

      <div className="navigation-contact-container">
        <div className="contact-details contact-location">
          <img
            src="./src/assets/SmallIcons/location.png"
            alt="Location Symbol"
          />
          <div>
            <h3>Our Location</h3>
            <p>20 Penywern SA154DF</p>
          </div>
        </div>
        <div className="contact-details">
          <img src="./src/assets/SmallIcons/phone.png" alt="Phone Symbol" />
          <div>
            <h3>Call Us</h3>
            <p>01554746922</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navigation;
