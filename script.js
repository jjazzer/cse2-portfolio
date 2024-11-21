const IMAGES = [
  {
    name: 'Profile Picture',
		id: 'profile-picture',
    group: ['profile'],
    date: 0,
    desc: () => `Image from ${getImageReference('photoshoot-4')}.`,
    path: '/images/profile-picture.jpg'
  },
  {
    name: 'Banner Image',
		id: 'banner-image',
    group: ['profile'],
    date: 0,
    desc: () => `Image from ${getImageReference('movie-poster')}.`,
    path: '/images/banner-image.png'
  },
  {
    name: 'Birthday Invitation',
		id: 'bday-invi',
    group: ['card'],
    date: Date.parse('Monday, August 12, 2024, 13:38:16 GMT+0800'),
    desc: 'A birthday invitation card for my next birthday, directed to our instructor.',
    path: '/images/bday-invi.png'
  },
  {
    name: 'Game Card: Allow',
		id: 'card-allow',
    group: ['card', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:54:51 GMT+0800'),
    desc: 'One of four trading cards for our own game concept.',
    path: '/images/card-allow.png'
  },
  {
    name: 'Game Card Cover',
		id: 'card-cover',
    group: ['card', 'cover', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:55:23 GMT+0800'),
    desc: 'The backside of the trading cards for our own game concept.',
    path: '/images/card-cover.png'
  },
  {
    name: 'Game Card: Time',
		id: 'card-time',
    group: ['card', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:54:31 GMT+0800'),
    desc: 'One of four trading cards for our own game concept.',
    path: '/images/card-time.png'
  },
  {
    name: 'Game Card: Will',
		id: 'card-will',
    group: ['card', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:53:37 GMT+0800'),
    desc: 'One of four trading cards for our own game concept.',
    path: '/images/card-will.png'
  },
  {
    name: 'Game Card: You',
		id: 'card-you',
    group: ['card', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:55:06 GMT+0800'),
    desc: 'One of four trading cards for our own game concept.',
    path: '/images/card-you.png'
  },
  {
    name: 'Collage',
		id: 'collage',
    group: ['collage'],
    date: Date.parse('Monday, July 29, 2024, 10:59:10 GMT+0800'),
    desc: 'A collection of images of me and my mother, and scenery from a resort.',
    path: '/images/collage.png'
  },
  {
    name: 'Game Cover: Will Time Allow You',
		id: 'game-cover',
    group: ['cover', 'game'],
    date: Date.parse('Friday, November 15, 2024, 11:55:48 GMT+0800'),
    desc: 'A box art for a game concept of our own.',
    path: '/images/game-cover.png'
  },
  {
    name: 'Logo: J.J. Studio',
		id: 'jj-studio-logo-split',
    group: ['logo'],
    date: Date.parse('Sunday, September 8, 2024, 22:15:09 GMT+0800'),
    desc: 'Logo design split for our very own brand.',
    path: '/images/jj-studio-logo-split.png'
  },
  {
    name: 'Movie Poster: Don\'t Leave Me in the Air',
		id: 'movie-poster',
    group: ['cover', 'movie'],
    date: Date.parse('Wednesday, September 11, 2024, 10:26:25 GMT+0800'),
    desc: 'A movie poster for our own movie concept.',
    path: '/images/movie-poster.png'
  },
  {
    name: 'Logo: O.V.J. Dress Shop',
		id: 'ovj-logo-split',
    group: ['logo'],
    date: Date.parse('Sunday, September 8, 2024, 22:13:46 GMT+0800'),
    desc: 'Logo design split for my mother\'s dress-making business.',
    path: '/images/ovj-logo-split.png'
  },
  {
    name: 'Pen Tool Masking',
		id: 'pen+filter',
    group: ['other'],
    date: Date.parse('Monday, August 19, 2024, 10:42:30 GMT+0800'),
    desc: 'Result of an activity involving the use of the pen tool to change the jacket color.',
    path: '/images/pen+filter.png'
  },
  {
    name: 'Photoshoot 1',
		id: 'photoshoot-1',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:56:29 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-1.png'
  },
  {
    name: 'Photoshoot 2',
		id: 'photoshoot-2',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:55:04 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-2.png'
  },
  {
    name: 'Photoshoot 3',
		id: 'photoshoot-3',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:55:25 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-3.png'
  },
  {
    name: 'Photoshoot 4',
		id: 'photoshoot-4',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:55:40 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-4.png'
  },
  {
    name: 'Photoshoot 5',
		id: 'photoshoot-5',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:55:57 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-5.png'
  },
  {
    name: 'Photoshoot 6',
		id: 'photoshoot-6',
    group: ['photoshoot'],
    date: Date.parse('Monday, September 23, 2024, 5:56:14 GMT+0800'),
    desc: 'One of six enhanced images for a photoshoot.',
    path: '/images/photoshoot-6.png'
  }
];

const E = {
  profilePicture: document.getElementById('profile-picture'),
  bannerImage: document.getElementById('banner-image')
};

function getImageReference(imageId) {
  const match = IMAGES.find(img => img.id === imageId);

  const link = document.createElement('a');
  link.textContent = match.name;
  link.href = location.origin + match.path;
  
  return link;
}

function loadProfileImages() {
  const profileMatch = IMAGES.find(img => img.id === 'profile-picture');
  E.profilePicture.src = location.origin + profileMatch.path;
  const bannerMatch = IMAGES.find(img => img.id === 'banner-image');
  E.bannerImage.src = location.origin + bannerMatch.path;
}

// window.onload = () => {
  loadProfileImages();
// };