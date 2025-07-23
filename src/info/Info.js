import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;
export const info = {
    firstName: "Julien",
    lastName: "Dille",
    initials: "jd", 
    position: "Intégrateur Web",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "💼",
            text: "Etudiant OpenClassrooms"
        },
        {
            emoji: "📧",
            text: "julien.dille@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'github', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'Jeux vidéos',
            emoji: '📖'
        },
        {
            label: 'Films',
            emoji: '🎥'
        },
        {
            label: 'Bricoler',
            emoji: '🌶'
        }
    ],
    portfolio: [
        {
            title: "Project 1",
            source: "https://github.com/paytonjewell", 
            image: mock1
        },
        {
            title: "Project 2",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
    ]
}