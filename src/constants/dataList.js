const eventList = [
  {
    id: 1,
    name: 'EXPLORE HIDDEN JAPAN',
    image:
      'https://www.theinvisibletourist.com/wp-content/uploads/2020/03/featured_143.jpg',
    shortAddress: 'Osaka, Sapporo',
    longAddress: 'Osaka, Sapporo, Tokyo',
    date: '05-06-2021',
    isPay: false,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
  {
    id: 2,
    name: 'Digital First Conference 2021',
    image: 'https://indotix.com/wp-content/uploads/2021/05/2-14.jpg',
    shortAddress: 'Jakarta, Indonesia',
    longAddress: 'Jakarta City · Jakarta',
    date: '03-06-2021',
    isPay: false,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
  {
    id: 3,
    name: 'Tech Workshop May - Building Scalable & Realtime Search Engine',
    image: 'https://pbs.twimg.com/media/E1azh0rVcAALern.jpg',
    shortAddress: 'Jakarta, Indonesia',
    longAddress: 'Jakarta City · Jakarta',
    date: '29-05-2021',
    isPay: true,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
  {
    id: 4,
    name: 'Exploring Sumba Island NTT',
    image:
      'https://www.befreetour.com/img/produk/private-4-days-exploring-sumba-island-Indonesia/private-4-days-exploring-sumba-island-Indonesia_97e0b8521cfe7ebeb859b9843b27d2fded07d8b1.jpg',
    shortAddress: 'Soekarno Hatta Jakarta Airport',
    longAddress: 'Soekarno Hatta Jakarta Airport, Cengkareng · Jakarta',
    date: '28-05-2021',
    isPay: false,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
  {
    id: 5,
    name: 'google I/O 2018',
    image: 'https://miro.medium.com/max/1838/1*u22Q70C7ZrABgrlJkQqiBQ.jpeg',
    shortAddress: 'Shoreline Amphitheatre, California',
    longAddress:
      'One Amphitheatre Pkwy, Mountain View, CA 94043, Amerika Serikat',
    date: '08-05-2018',
    isPay: false,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
  {
    id: 6,
    name: 'Metallica Concert',
    image: 'https://i.ytimg.com/vi/UpBDxRUZP-8/maxresdefault.jpg',
    shortAddress: 'Palace Grounds, Bengaluru',
    longAddress:
      'Sadanandanagar, Bennigana Halli, Bengaluru, Karnataka 560033, India',
    date: '28-10-2011',
    isPay: true,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    rundown: [
      { time: '10:00:00', name: 'Opening Ceremony' },
      { time: '10:30:00', name: 'Greeting speache' },
      { time: '11:00:00', name: 'First Performance' },
      { time: '11:30:00', name: 'Main Performance' },
      { time: '12:00:00', name: 'Last Performance' },
      { time: '12:30:00', name: 'Closing Ceremony' },
    ],
  },
];

export default eventList;
