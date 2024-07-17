const hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Smileys Landscaping and Tree Specialists</h1>
        <p>
          We offer a complete A-Z landscaping service including all tree work
          throughout Llanelli, Swansea and the Carmarthenshire area
        </p>
        <button>Contact Now</button>
      </div>

      <div className="hero-images">
        <img
          src="./src/assets/patio1.jpg"
          alt="Patio Work Completed by Smiley's"
          className="hero-patio1"
        />
        <img
          className="hero-tree"
          src="./src/assets/tree.png"
          alt="Man up in tree working"
        />
        <img
          src="./src/assets/patio2.jpg"
          alt="Patio Work Completed by Smiley's"
          className="hero-patio2"
        />
      </div>
    </div>
  );
};

export default hero;
