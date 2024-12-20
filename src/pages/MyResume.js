import React from "react";
import Navbar from "../components/navbar/navbar";
import Resume from "../components/resume/header/header";
import About from "../components/resume/about/about";
import Work from "../components/resume/work/work";
import Education from "../components/resume/education/education";
import Certification from "../components/resume/certification/certify";
import Info from "../components/resume/info/info";
import Footer from "../components/resume/footer/footer";

function MyResume() {
  return (
    <div >
     
     <Navbar />
     <Resume />
     <About />
     <Work />
     <Education />
     <Certification />
     <Info />
     <Footer />
     
    </div>
  );
}

export default MyResume;
