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

// JSON Database
export const db = {
  about: [
    {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil molestiae, culpa veritatis ipsum consectetur, modi magni repellendus harum dolorum sunt repudiandae ratione fugiat, accusamus praesentium obcaecati! Voluptatibus aliquam repellendus tenetur?',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita nesciunt minus porro in iusto labore nihil velit a neque?',
    },
  ],
  career: [
    {
      year: 2023,
      title: 'Student developer',
      duration: '',
      details:
        'I`ve been teaching myself to code since January 2023. I focus on web development with Javascript, TypeScript and NodeJS.',
    },
    {
      year: 2019,
      title: 'Member of the Board of JuLis Ostwestfalen-Lippe',
      duration: '1.16 Years',
      details:
        'As an assessor on the district board of the Young Liberals in Ostwestfalen-Lippe, I was responsible for maintaining the website of the district association.',
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
