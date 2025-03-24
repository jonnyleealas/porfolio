import HeadShot from "../assets/images/headShot.jpeg"
import "./Home.css"
const Home: React.FC = () => {
  return (
    <div className="Home">
  <div className="text-container">
    <h1>Hi, I'm Jonathon Lee</h1>
    <p>
      Software Developer with more than 15 years experience with customer
      service. Attended and graduated from Code Fellows Premier Tech Academy,
      for full stack web development using JavaScript and React. Recently gained
      experience in Linux, Mac, and Windows systems troubleshooting as an IT
      Apprentice at Google (2021-2022). Recently earned the CompTIA Network+
      ce Certification, Google IT Certification, and Coursera Python Scripting
      Certification. Focused on projects that are meaningful, challenging, and
      helpful to users. Passionate about Web development, Linux, and all things IT.
    </p>
  </div>

  <div className="head-shot-container">
    <img src={HeadShot} alt="headShot" className="head-shot" />
  </div>
</div>

  );
}

export default Home;