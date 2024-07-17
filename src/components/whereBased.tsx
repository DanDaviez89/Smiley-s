const whereBased = () => {
  return (
    <div className="where-based-container">
      <h1>Where We're Based?</h1>

      <div className="where-based-content">
        <div className="where-based-locations">
          <div>
            <img src="./src/assets/SmallIcons/tick.png" alt="Tick" />
            <h3>Llanelli</h3>
          </div>
          <div>
            <img src="./src/assets/SmallIcons/tick.png" alt="Tick" />{" "}
            <h3>Swansea</h3>
          </div>
          <div>
            <img src="./src/assets/SmallIcons/tick.png" alt="Tick" />{" "}
            <h3>Carmarthenshire</h3>
          </div>
        </div>

        <img
          src="./src/assets/treeCutting.png"
          alt="Tree cutting before and after"
          className="tree-cut"
        />
      </div>
    </div>
  );
};

export default whereBased;
