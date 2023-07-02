// icon imports
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMastodon,
} from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineStock,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

// image imports
import portfolioImg from './portfolio.webp';

// JSON Database
export const db = {
  career: [
    {
      year: 2023,
      title: 'Test',
      duration: 'x Years',
      details:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto cumque accusantium nam aliquid, eos voluptatem exercitationem iste ab similique ullam.',
    },
  ],
  profiles: [
    {
      title: 'Twitter',
      link: 'https://twitter.com/gelbphoenix',
      icon: <FaTwitter size={20} />,
    },
    {
      title: 'Instagram',
      link: 'https://instagram.com/gelbphoenix',
      icon: <FaInstagram size={20} />,
    },
    {
      title: 'Mastodon',
      link: 'mastodon.social/@gelbphoenix',
      icon: <FaMastodon size={20} />,
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/gelbphoenix/',
      icon: <FaLinkedinIn size={20} />,
    },
    {
      title: 'Github',
      link: 'https://github.com/gelbphoenix',
      icon: <FaGithub size={20} />,
    },
  ],
  projects: [
    {
      title: 'This Portfolio',
      img: portfolioImg,
      tech: 'ReactJS, Vite, TailwindCSS',
      link: 'https://github.com/gelbphoenix/my_webpage',
    },
  ],
  sites: [
    {
      title: 'Home',
      link: '#main',
      icon: <AiOutlineHome size={20} />,
    },
    {
      title: 'Career',
      link: '#career',
      icon: <AiOutlineStock size={20} />,
    },
    {
      title: 'Projects',
      link: '#projects',
      icon: <AiOutlineProject size={20} />,
    },
    {
      title: 'About',
      link: '#about',
      icon: <BsPerson size={20} />,
    },
    {
      title: 'Contact',
      link: '#contact',
      icon: <AiOutlineMail size={20} />,
    },
  ],
};
