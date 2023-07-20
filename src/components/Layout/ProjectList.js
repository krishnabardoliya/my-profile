import { DirectionsSubway } from "@mui/icons-material";
import ProjectItem from "./ProjectItem";
import classes from "../../styles/ProjectList.module.scss";
import InvoiceGeneratorImage from "../../images/invoice-generator.png";
import NatoursImage from "../../images/natours.png";

import ReactIcon from "../../images/react.png";
import ReduxIcon from "../../images/redux.svg";

import HTMLIcon from "../../images/html5.jpg";
import CssIcon from "../../images/css.png";
import JavascriptIcon from "../../images/javascript.png";
import SassIcon from "../../images/sass.svg";

import JokesImage from "../../images/jokes.png";

const ProjectList = () => {
  const projectItem = [
    {
      id: 1,
      title: "Invoice Generator",
      link: "https://krishnabardoliya.github.io/invoice-generator/",
      image: InvoiceGeneratorImage,
      technologies: [
        { pic: ReactIcon, caption: "React" },
        { pic: HTMLIcon, caption: "HTML5" },
        { pic: CssIcon, caption: "CSS" }
      ],
      description:
        "An Invoice creator project built with React. Uses jspdf-react to capture the data from the modal and convert it from canvas -> pdf.",
    },

    {
      id: 2,
      title: "Jokes App",
      link: "https://krishna-bardoliya.github.io",
      image: JokesImage,
      technologies: [
        { pic: JavascriptIcon, caption: "Javascript" },
        { pic: HTMLIcon, caption: "HTML5" },
        { pic: CssIcon, caption: "CSS" },
      ],
      description:
        'It is a simple Web application using vanilla JavaScript . It displays random jokes fetched from the API - "https://sv443.net/jokeapi/v2/". Users have an option to filter/blacklist jokes of certain categories as per choice.',
    },
    {
      id: 3,
      title: "Natours - Tour booking Web App",
      link: "https://natours-ten-tan.vercel.app/",
      image: NatoursImage,
      technologies: [
        { pic: CssIcon, caption: "CSS" },
        { pic: HTMLIcon, caption: "HTML5" },
      ],
      description:
        "It is a Dummy tour booking web application developed as a part of an online CSS course. Used Sass and applied advanced concepts such as variables, mixins, responsive design principles, media queries, graceful degradation using @supports, etc.",
    },
  ];
  return (
    <section className={classes["section-container"]}>
      <h2 id="projects" className={classes["section-heading-primary"]}>
        My Projects
      </h2>
      <div className={classes["section-project"]}>
        {projectItem.map((item) => (
          <div className={classes["section-project-item"]}>
            <ProjectItem
              key={item.id}
              id={item.id}
              technologies={item.technologies}
              title={item.title}
              link={item.link}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
