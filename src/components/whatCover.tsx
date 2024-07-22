interface Work {
  img: string;
  job: string;
}

const whatCover = () => {
  const WorkCovered = [
    {
      img: "./src/assets/SmallIcons/hedge.png",
      job: "Hedge Work",
    },
    {
      img: "./src/assets/SmallIcons/tree.png",
      job: "Tree Felling",
    },
    {
      img: "./src/assets/SmallIcons/turfing.png",
      job: "Turfing",
    },
    {
      img: "./src/assets/SmallIcons/fence.png",
      job: "Fencing",
    },
    {
      img: "./src/assets/SmallIcons/waterFeatures.png",
      job: "Water Features",
    },
    {
      img: "./src/assets/SmallIcons/pergolas.png",
      job: "Pergolas",
    },
    {
      img: "./src/assets/SmallIcons/decking.png",
      job: "Decking",
    },
    {
      img: "./src/assets/SmallIcons/other.png",
      job: "And More...",
    },
  ];

  const printList = () => {
    return (
      <div className="work-cover-jobs">
        {WorkCovered.map((work: Work, index: number) => (
          <div className="work-cover-card" key={index}>
            <img src={work.img} alt={work.job} />
            <p>{work.job}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="work-cover-container">
      <h1>What Work We Cover?</h1>
      <p>
        Our Work Includes but <span>NOT</span> limited to:
      </p>

      {printList()}
    </div>
  );
};

export default whatCover;
