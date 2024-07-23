function AboutGrid() {
  return (
    <>
      <div className="gridAbout">
        <div className="mission">
          <p className="Text">Currently we're on a mission</p>
          <p className="aboutSectionSeperateText">
            Playing Ghost Recon: Wildlands
          </p>
        </div>
        <div className="locationStats">
          <div className="locationAbout">
            <p className="aboutSectionSeperateText">
              <img src="./src/assets/india.png" alt="Indian Flag" />
              Based in India
            </p>
          </div>
          <div className="socialsAboutStats">
            <div className="socialsAbout">
              <img
                src="./src/assets/brand-twitter.png"
                id="twitter"
                alt="Social Icon"
              />
              <img
                src="./src/assets/brand-dribbble.png"
                id="dribbble"
                alt="Social Icon"
              />
              <img
                src="./src/assets/brand-instagram.png"
                id="instagram"
                alt="Social Icon"
              />
              <img
                src="./src/assets/brand-youtube.png"
                id="youtube"
                alt="Social Icon"
              />
            </div>
            <div className="statsAbout">
              <p id="num">12</p>
              <p className="gridseperate">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGrid;
