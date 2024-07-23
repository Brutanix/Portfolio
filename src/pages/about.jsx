import React from "react";
import BrutanixCard from "../components/BrutanixCard";
import AboutGrid from "../components/AboutGrid";
import AboutActivity from "../components/AboutActivity";
import MoreDetail from "../components/MoreDetail";
import ReachOut from "../components/ReachOut";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <section id="aboutLanding">
        <BrutanixCard />
        <p className="aboutSectionText">
          In the heart of our digital forge, we craft products with unmatched
          clarity and finesse. Our artisans wield tools with the skill of
          dwarven smiths, ensuring every creation is both beautiful and
          functional.
        </p>
        <AboutGrid />
      </section>

      <section id="who">
        <p className="aboutSectionHeading">So, Who are we ?</p>
        <p className="aboutSectionText">
          We are a ragtag band of stout-hearted students and seasoned
          professionals who love to
        </p>
        <AboutActivity />
      </section>

      <section id="begin">
        <div style={{ marginBottom: "60px" }}>
          <p className="aboutSectionHeading">Where did we begin ?</p>
          <div id="activities">
            <div className="activity">
              <p>December 2023</p>
            </div>
            -
            <div className="activity">
              <p>April 2024</p>
            </div>
          </div>

          <p className="aboutSectionText">
            It all started when Lokesh, in his 4th semester of college, decided
            to start this studio on a whim. With determination, he got the
            company registered and began working with four clients. His success
            in making good connections began with his first internship during
            his first year. The diligent work he demonstrated caught the
            attention of many, leading to more projects and expanding our
            portfolio.
          </p>
          <p className="aboutSectionText">
            Through his experience working with multiple teams and understanding
            the market, Lokesh realized there was a significant need for a
            top-notch design and development studio. Thus, our journey began,
            driven by a passion for creating exceptional products and delivering
            outstanding services.
          </p>
        </div>
        <div>
          <p className="aboutSectionHeading">Then I joined</p>
          <div id="activities">
            <div className="activity">
              <p>April 2024</p>
            </div>
            -
            <div className="activity">
              <p>Present</p>
            </div>
          </div>
          <p className="aboutSectionText">
            Yes, I'm the guy who crafted this website and penned the story of
            our studio. Online, I'm known as Yonko, and I'm the lead designer
            here at Brutanix. Let me tell you, getting these designs just right
            was a lot of work!
          </p>
          <p className="aboutSectionText">
            When you start working with me, I weave a story with your brand,
            ensuring every detail is perfect and compelling.
          </p>
          <p className="aboutSectionText">
            So, Lokesh came to me for some design advice, and I thought, "Why
            not?" What started as a simple design ended up with me working for a
            client through Lokesh, absolutely filled with fear and caffeine! 😅
          </p>
        </div>
      </section>

      <section id="moreAboutUs">
        <p className="aboutSectionHeading">More about us</p>
        <MoreDetail />
      </section>
      <section id="reachOutSection">
        <ReachOut />
      </section>
      <Footer />
    </>
  );
};

export default About;
