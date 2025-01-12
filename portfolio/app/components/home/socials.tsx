import { GithubSvg } from "@/public/icons-social/github";
import { LinkedinSvg } from "@/public/icons-social/linkedin";
import { XSvg } from "@/public/icons-social/x";

const Socials = () => {
  return (
    <div className="social-icons">
      <a
        className="buttons"
        href="https://www.linkedin.com/in/ajayedupuganti/"
        target="_blank"
      >
        <LinkedinSvg />
        <span>Linkedin</span>
      </a>
      <a className="buttons" href="https://github.com/AJAYKE" target="_blank">
        <GithubSvg />
        <span>Github</span>
      </a>
      <a
        className="buttons"
        href="https://x.com/AjayEdupuganti"
        target="_blank"
      >
        <XSvg />
        <span>X</span>
      </a>
    </div>
  );
};

export default Socials;
