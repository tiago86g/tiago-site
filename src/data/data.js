export default {
  about: {
    id: 1,
    urlPath: 'about',
    title: 'TiagoGonçalves',
    text:
      'Brazilian developer with10 years of experience as a graphic designer, so I’m looking for a company where both skills come into play. I am proficient within React (HTML, CSS, JS) and I have a solid knowledge of Rest API using Node.js, Express , MySql (Knex.js).With a background as a designer, I am also highly skilled in quickly mock-up ideas and I also have vast experience designing art exhibitions and catalogues.',
  },
  experience: {
    id: 2,
    urlPath: 'experience',
    title: 'experience',
    experienceList: [
      {
        id: 1,
        company: {
          name: 'anna.co (HYF)',
          description: 'Anna makes restaurant hiring easier.',
          site: '',
        },
        date: '2020',
        position: 'Front-end developer',
        responsibilities: [
          'Chat app for internal communication in restaurants',
          'React structure',
          'CSS style',
        ],
        link: '',
      },
      {
        id: 2,
        company: {
          name: 'TUBA Denmark',
          description:
            'Therapy and counseling for young people who have grown up in families with alcohol or drug abuse.',
          site: 'http://www.tuba.dk',
        },
        date: '2019 - 2021',
        position: 'Graphic designer',
        responsibilities: ['New visual identity, marketing campaigns'],
        links: '',
      },
      {
        id: 3,
        company: {
          name: 'Fairytell IVS',
          description: 'International app for children’s books.',
          site: 'https://fairytell.dk/',
        },
        date: '2020',
        position: 'Graphic designer',
        responsibilities: [
          'Design and adaptation of books to different languages',
        ],
        links: '',
      },
    ],
  },
  projetos: {
    id: 3,
    urlPath: 'projects',
    title: 'Projects',
    projectList: [
      {
        id: 1,
        urlPath: 'project-test-1',
        title: 'Project test 1',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, aliquid? Debitis repudiandae at ratione nulla, vitae atque officiis ipsam ex?',
        images: [
          { id: 1, imageUrl: '', imageCaption: '' },
          { id: 2, imageUrl: '', imageCaption: '' },
        ],
        tools: ['html', 'css', 'javascript', 'react-js'],
      },
      {
        id: 2,
        urlPath: 'project-test-1',
        title: 'Project test 1',
        text:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, aliquid? Debitis repudiandae at ratione nulla, vitae atque officiis ipsam ex? Debitis repudiandae at ratione nulla, vitae atque officiis ipsam ex?',
        images: [
          { id: 1, imageUrl: '', imageCaption: '' },
          { id: 2, imageUrl: '', imageCaption: '' },
        ],
        tools: ['indesign', 'illustrator', 'photoshop', 'typography'],
      },
    ],
  },
  education: {
    id: 4,
    urlPath: 'education',
    title: 'Education',
    educationList: [
      {
        id: 1,
        institution: {
          name: 'ESDI',
          description: 'Escola Superior de Desenho Industrial',
          site: 'http://www.esdi.uerj.br/graduacao/design/curriculo-antigo',
        },
        date: '2006 - 2011',
        title: 'Bachelor of Graphic design and Product Design',
        subjects: [
          'Typography',
          'Product design',
          'ergonomics',
          'Branding',
          'Photography',
        ],
        thesis: {
          title: 'A typographic study for adult education',
          thesisUrl: '',
        },
      },
      {
        id: 2,
        institution: {
          name: 'HYF',
          description: 'Hack Your Future - Copenhagen',
          site: 'http://www.esdi.uerj.br/graduacao/design/curriculo-antigo',
        },
        date: '2006 - 2011',
        title: 'Bachelor of Graphic design and Product Design',
        subjects: [
          'Typography',
          'Product design',
          'ergonomics',
          'Branding',
          'Photography',
        ],
        thesis: {
          title: 'A typographic study for adult education',
          thesisUrl: '',
        },
      },
    ],
  },
};
