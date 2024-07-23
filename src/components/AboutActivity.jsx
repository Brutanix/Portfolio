function AboutActivity() {
  const activitiesImages = [
    { activity: "Design", Image: "./src/assets/Design.png" },
    { activity: "Develop", Image: "./src/assets/Develop.png" },
    { activity: "Animate", Image: "./src/assets/Animate.png" },
    { activity: "Game", Image: "./src/assets/Game.png" },
    { activity: "Cycle", Image: "./src/assets/Bike.png" },
    { activity: "Camp", Image: "./src/assets/Camp.png" },
    { activity: "Photograph", Image: "./src/assets/Photograph.png" },
    { activity: "Gym", Image: "./src/assets/Gym.png" },
  ];

  return (
    <>
      <div id="activities">
        {activitiesImages.map((each) => (
          <div className="activity">
            <img src={each.Image} alt="Activity Icon" />
            <p>{each.activity}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutActivity;
