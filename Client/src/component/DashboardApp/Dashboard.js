// import Home from "../";


import NavBar from "../NavBar/NavBar";
import Home from "../HomePrincipale/Home";
import Work from "../HomeWork/Work";
import Profile from "../HomeProfil/Profil";
import About from "../HomeAbout/About";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Work />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
   
  
    </div>
  );
};

export default Dashboard;
