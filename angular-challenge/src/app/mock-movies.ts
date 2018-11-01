import { Movie } from './movie';

export const MOVIES: Movie[] = [
    {
        id: 1,
        title: 'Avengers: Infinity War',
        year: 2018,
        // tslint:disable-next-line:max-line-length
        description: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain. - IMDb',
        img: './assets/images/avengers.jpg',
        trailer: 'https://youtu.be/6ZfuNTqbHE8'
    },
    {
        id: 2,
        title: 'Incredibles 2',
        year: 2018,
        // tslint:disable-next-line:max-line-length
        description: 'After the events of The Incredibles (2004), Elastigirl (Helen) is sent on a mission to make supers legal again. Mr. Incredible (Bob) is left to care for Jack-Jack, Violet, and Dash. When a dangerous new threat arises, it is up to the family to neutralize the threat and save the day once again. - IMDb',
        img: './assets/images/incredibles.jpg',
        trailer: 'https://youtu.be/i5qOzqD9Rms'
    },
    {
        id: 3,
        title: 'Jurassic World',
        year: 2018,
        // tslint:disable-next-line:max-line-length
        description: '22 years after the original Jurassic Park failed, the new park (also known as Jurassic World) is open for business. After years of studying genetics the scientists on the park genetically engineer a new breed of dinosaur. When everything goes horribly wrong, will our heroes make it off the island? - IMDb',
        img: './assets/images/jurassic.jpg',
        trailer: 'https://youtu.be/e0_96_YQu0k'

    },
    {
        id: 4,
        title: 'Rampage',
        year: 2018,
        // tslint:disable-next-line:max-line-length
        description: 'Primatologist Davis (Dwayne Johnson) shares an unshakable bond with George, the extraordinarily intelligent silverback gorilla who has been in his care since he was young. When a greed-fueled corporation\'s genetic experiment goes awry, George and other animals across the country are mutated into aggressive supercreatures who destroy everything in their path.In this adrenaline - filled ride, Davis tries to find an antidote, not only to halt a global catastrophe but also to save the fearsome creature who was once his friend. -IMDb',
        img: './assets/images/rampage.jpg',
        trailer: 'https://youtu.be/coOKvrsmQiI'
    }
];
