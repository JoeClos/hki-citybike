import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>&#169; Josephine Closan - 2023. All Rights Reserved </p>
      <a href="https://github.com/JoeClos/hki-citybike" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="github-icon"/>
      </a>
    </div>
  );
};

export default Footer;
