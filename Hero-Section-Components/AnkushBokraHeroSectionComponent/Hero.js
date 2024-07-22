import hero from "./together.jpg";
const Hero = () => {
  return (
    <div className="hero dark">
      <div className="text">
      <div className="Content">
      <h2 className="mid">Grappl & Grow</h2>
     <h1 className="big"><span className="first">Connect</span> with the Tech <span>Talent</span> You need ,when you need it</h1>
     <h5 className="small">Skill up .Hire up.Tech up</h5>
      </div>
     <div className="btn">Explore Now</div>
      </div>

      <div className="hero-img">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
