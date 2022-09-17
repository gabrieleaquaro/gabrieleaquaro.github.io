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

export const images = {
  img: img,
  theme_1: theme_1,
  theme_2: theme_2,
};
