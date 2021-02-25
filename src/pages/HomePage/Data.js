import { FaLinkedin, FaBehance, FaGithubAlt, FaFilePdf } from 'react-icons/fa';

export const homeOjbOne = {
  lightBg: true,
  primary: true,
  imgStart: 'start',
  lightSubtitle: false,
  lightTextDesc: false,
  buttonLabel: 'contact',
  headLine: 'Tiago',
  headLine2: 'Gonçalves',
  description: `Brazilian developer with 10 years of experience as a graphic designer, so I’m looking for a company where both skills come into play.
    I am proficient within React (HTML, CSS, JS) and I have a solid knowledge of Rest API using Node.js, Express , MySql (Knex.js).
    With a background as a designer, I am also highly skilled in quickly mock-up ideas and I also have vast experience designing art exhibitions and catalogues.`,
  lightText: false,
  subtitle: `DEVELOPER_DESIGNER`,
  start: '',
  img: require('../../images/tiago.jpg').default,
  alt: 'Tiago',
  rounded: true,
  border: true,
  someList: [
    {
      link: 'https://github.com/tiago86g',
      iconName: <FaGithubAlt />,
      someName: 'GitHub',
    },
    {
      link: 'https://www.behance.net/tiago86g',
      iconName: <FaBehance />,
      someName: 'Behance',
    },
    {
      link: 'https://www.linkedin.com/in/tiago86g',
      iconName: <FaLinkedin />,
      someName: 'Linkedin',
    },
    {
      link: `export default __webpack_public_path__ + "static/media/Tiago-Goncalves_CV.b1e6787a.pdf";`,
      iconName: <FaFilePdf />,
      someName: 'PDF cv link',
    },
  ],
};

export const homeOjbTwo = {
  lightBg: true,
  primary: false,
  imgStart: '',
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: 'Get started',
  headLine: 'Lead generation specialist for online business',
  description:
    'We help business owners to increase their revenue, Our team of unique specialist can help you to achieve your goals',
  lightText: false,
  topLine: 'White background and image on the right',
  start: '',
  img: require('../../images/home_img.svg').default,
  alt: 'Image',
};

export const homeOjbThree = {
  lightBg: false,
  primary: false,
  imgStart: 'start',
  lightTopLine: false,
  lightTextDesc: true,
  buttonLabel: 'Get started',
  headLine: 'Lead generation specialist for online business',
  description:
    'We help business owners to increase their revenue, Our team of unique specialist can help you to achieve your goals',
  lightText: true,
  topLine: 'Marketing Agency',
  start: 'true',
  img: require('../../images/home_img.svg').default,
  alt: 'Image',
};

export const projectsData = {
  headLine: 'Projects',
  description:
    'We help business owners to increase their revenue, Our team of unique specialist can help you to achieve your goals',
  projects: [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Short description about the project',
      tools: ['Indesign', 'Illustrator', 'Photoshop'],
    },

    {
      id: 2,
      title: 'Project Title 2',
      description: 'Short description about the project',
      tools: ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
};
