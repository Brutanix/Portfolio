import Client from "./Client";
import ServiceCard from "./ServiceCard";
import CustomMarquee from "./CustomMarquee";
import Collaborator from "./Collaborator";
import Social from "./Social";
import ContactForm from "./contactForm";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <section id="hero">
        <img
          src="./src/Assets/Brutanix Logo SVG.svg"
          alt="Brutanix Studios Logo"
          id="BrutanixLogoHero"
        />
        <p className="sectionHeading">
          Welcome to the Wonderland of Brutanix Studios
        </p>
        <p className="Text">
          Brace yourself for a visual feast! We are the wizards behind the
          scenes, crafting the brand enchantments and digital spells that make
          businesses shine.
        </p>

        <div id="bestDesigns">
          <div className="bestDesign">
            <img src="./src/Assets/settingPage.png" alt="Design One" />
          </div>
          <div className="bestDesign">
            <img src="./src/Assets/schLoginPage.png" alt="Design Two" />
          </div>
          <div className="bestDesign">
            <img src="./src/Assets/bhoomiLanding.png" alt="Design Three" />
          </div>
        </div>
      </section>

      <section id="clients">
        <p className="sectionHeading">Recent Works</p>
        <p className="Text">Our Design Adventures</p>
        <div className="clientCards">
          <Client
            date="Apr'24 - May'24"
            name="Bhoomi"
            des="List your land, find your perfect plot, and manage it all from our delightful dashboard. Dive into Bhoomi and let the land deals begin!"
            path={"./src/assets/bhoomiLogo.png"}
          />
          <Client
            date="May'24 - Jun'24"
            name="She Cyber Hub"
            des="List your land, find your perfect plot, and manage it all from our delightful dashboard. Dive into Bhoomi and let the land deals begin!"
            path={"./src/assets/schLogo.png"}
          />
          <Client
            date="Jun'24 - Jul'24"
            name="Guest Genius"
            des="Say goodbye to chaos and hello to smooth operations with Guest Genius, the virtual butler your hotel always needed!"
            path={"./src/assets/guestGenius.png"}
          />
          <Client
            date="Jun'24 - Jul'24"
            name="Bus Ease"
            des="Book tickets, manage fleets, and enjoy the ride with BusEase - because who needs travel stress when you can have travel ease? 🚍🎫"
            path={"./src/assets/busEaseLogo.png"}
          />
        </div>

        <a href="#" className="sectionButton">
          Show more{" "}
          <img src="./src/assets/showMoreArrow.png" alt="Show more arrow" />
        </a>
      </section>

      <section id="services">
        <p className="sectionHeading">Services We Provide</p>
        <p className="Text">Where Creativity Meets Functionality!</p>
        <div className="servicesCards">
          <ServiceCard
            path="./src/assets/brandIdentity.png"
            name="Brand Identity"
            description="Crafting identities with personality"
          />
          <ServiceCard
            path="./src/assets/logoDesign.png"
            name="Logo Design"
            description="Creating iconic symbols "
          />
          <ServiceCard
            path="./src/assets/socialMediaMarketing.png"
            name="Social Media Marketing"
            description="Making your feed fabulous"
          />
          <ServiceCard
            path="./src/assets/webDesign.png"
            name="Web Design"
            description="Turning clicks into smiles"
          />
          <ServiceCard
            path="./src/assets/productDesign.png"
            name="Product Design"
            description="Innovating one product at a time"
          />
          <ServiceCard
            path="./src/assets/appDevelopment.png"
            name="App Development"
            description="Making apps that make life better"
          />
        </div>
      </section>

      <section id="deck">
        <p className="sectionHeading">Our Deck</p>
        <p className="Text">Unveiling our digital forge</p>
        <CustomMarquee />
      </section>

      <section id="collaborators">
        <p className="sectionHeading">Chief Collaborators</p>
        <p className="Text">
          Meet the dwarven craftsmen behind the curtain, forging the magic you
          see!
        </p>
        <Collaborator />
      </section>

      <section id="listing">
        <p className="sectionHeading">Forged in Craftsmanship</p>
        <p className="Text">
          Our portfolio proudly stands on the following, embodying the essence
          of our mastery and precision.
        </p>
        <div id="listingCards">
          <a
            href="https://www.designrush.com/"
            target="blank"
            className="listing"
            id="rushCard"
          >
            <img src="./src/assets/designRush.png" alt="Design Rush Logo" />
          </a>
          <a
            href="https://clutch.co/"
            target="_blank"
            className="listing"
            id="clutchCard"
          >
            <img src="./src/assets/clutch.png" alt="Clutch Logo" />
          </a>
        </div>
      </section>

      <section id="onlinePresence">
        <p className="sectionHeading">Our Online Presence</p>
        <p
          className="Text"
          style={{ lineHeight: "160%", marginBottom: "16px" }}
        >
          Follow Our Digital Footprints! <br />
          Stay in the loop with our latest adventures and projects on:
        </p>

        <Social />
      </section>

      <section id="contact">
        <p className="sectionHeading" style={{ marginBottom: "16px" }}>
          Seeking the Smiths? Reach Out to Our Forge!
        </p>
        <p className="Text">
          Have a question or need assistance? Send your message to our forge,
          where our skilled dwarven craftsmen are ready to assist you. Whether
          it's a request for a custom design or a query about our services,
          we're here to help you forge your path to success.
        </p>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default Home;
