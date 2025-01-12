"use client";

import BestBlogs from "../bestBlogs";
import About from "./about";
import Header from "./header";
import Socials from "./socials";
import { HomeStyles } from "./styles/homeStyles";

const Homepage = () => {
  return (
    <HomeStyles>
      <Header />
      <div className="children">
        <div className="children-left">
          <About />
          <Socials />
        </div>
        <BestBlogs />
      </div>
    </HomeStyles>
  );
};

export default Homepage;
