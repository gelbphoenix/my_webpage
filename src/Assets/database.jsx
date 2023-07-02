// icon imports
import {
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiMastodon,
} from 'react-icons/si';
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineStock,
  AiOutlineUser,
} from 'react-icons/ai';

// JSON Database
export const db = {
  about: [
    {
      text: 'Phoenix Paulina Schmid is a dedicated and talented student web developer with a passion for creating innovative digital solutions. With a strong background in programming languages such as HTML, CSS, and JavaScript, Paulina is constantly expanding her skills and staying up-to-date with the latest trends and technologies in the field. Her relentless curiosity and problem-solving mindset drive her to tackle complex challenges and deliver efficient and user-friendly websites.',
    },
    {
      text: 'Driven by her desire to combine functionality with aesthetics, Paulina strives to create visually appealing designs that enhance the user experience. She possesses a keen eye for detail and a natural instinct for intuitive navigation, ensuring that her projects not only meet technical requirements but also exceed expectations in terms of design and usability. Paulina`s commitment to continuous learning and her ability to adapt to new tools and frameworks make her a valuable asset in the ever-evolving world of web development. With a strong work ethic and a genuine enthusiasm for her craft, Paulina is poised to make a significant impact in the field of web development.',
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
  env: [
    {
      link: 'https://public.herotofu.com/v1/4397f080-18f1-11ee-8025-97a9fb2f29da',
    },
  ],
  profiles: [
    {
      title: 'Twitter',
      link: 'https://twitter.com/gelbphoenix',
      icon: <SiTwitter size={20} />,
    },
    {
      title: 'Instagram',
      link: 'https://instagram.com/gelbphoenix',
      icon: <SiInstagram size={20} />,
    },
    {
      title: 'Mastodon',
      link: 'https://mastodon.social/@gelbphoenix',
      icon: <SiMastodon size={20} />,
    },
    {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/gelbphoenix/',
      icon: <SiLinkedin size={20} />,
    },
    {
      title: 'Github',
      link: 'https://github.com/gelbphoenix',
      icon: <SiGithub size={20} />,
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
      icon: <AiOutlineUser size={20} />,
    },
    {
      title: 'Contact',
      link: '#contact',
      icon: <AiOutlineMail size={20} />,
    },
  ],
};
