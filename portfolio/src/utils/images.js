import {
  FaCalendarCheck,
  FaChessBoard,
  FaBook,
  FaCode,
  FaBeer,
  FaInstagram,
  FaFacebook,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { VscGraphScatter } from "react-icons/vsc";
import img from "../img/generic-bg.jpg";
import theme_1 from "../img/projects_imgs/theme_1.png";
import theme_2 from "../img/projects_imgs/theme_2.png";
import platformer_1 from "../img/projects_imgs/platformer_1.png";
import platformer_2 from "../img/projects_imgs/platformer_2.png";
import platformer_3 from "../img/projects_imgs/platformer_3.png";
import platformer_4 from "../img/projects_imgs/platformer_4.png";
import cnn_1 from "../img/work4.jpg";

export const icons = {
  ai: <VscGraphScatter />,
  code: <FaCode />,
  chess: <FaChessBoard />,
  time: <FaCalendarCheck />,
  goal: <GiStairsGoal />,
  book: <FaBook />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
  google: <FaGoogle />,
  github: <FaGithub />,
  default: <FaBeer />,
};

export const projectImages = {
  img: img,
  theme_1: theme_1,
  theme_2: theme_2,
  cnn_1: cnn_1,
  platformer_1: platformer_1,
  platformer_2: platformer_2,
  platformer_3: platformer_3,
  platformer_4: platformer_4,
};
