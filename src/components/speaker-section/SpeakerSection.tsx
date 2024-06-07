import "./speaker-section.css";
import SpeakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import CirclesImg from "../../assets/home/desktop/pattern-circles.svg";
import Button from "../ui/button/Button";

const SpeakerSection = () => {
  return (
    <section className="speaker-section">
      <div className="container speaker-section-container">
        <img src={SpeakerImg} className="speaker-img" alt="" />
        <img src={CirclesImg} className="circle-img" alt="" />

        <div className="speaker-section-content">
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button to="./" isLink={true} type="dark">
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
