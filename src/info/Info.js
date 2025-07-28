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
            link: "https://github.com/Nei7uj",
            icon: "fa fa-github",
            label: 'github'
        },
    ],
    bio: "Moi c'est Julien, je suis étudiant en intégrateur web chez OpenClassrooms. Je suis passionné par les jeux vidéo et le monde de la technologie, mais je suis aussi guitariste à mes heures perdues. J'aime aussi cuisiner et bricoler.",
    skills:
        {
            proficientWith: ['- javascript', '- react', '- github', '- html5', '- css3', '- sass'],
        }
    ,
    hobbies: [
        {
            label: 'Technologie',
            emoji: '💻'
        },
        {
            label: 'Jeux vidéo',
            emoji: '🎮'
        },
        {
            label: 'Musique',
            emoji: '🎸​'
        },
        {
            label: 'Bricolage',
            emoji: '🛠️​'
        },
        {
            label: 'Cuisine',
            emoji: '🥘​​'
        }
    ],
    portfolio: [
        {
            title: "Sophie Bluel ~ Architecte d'intérieur",
            source: "https://github.com/Nei7uj/P6-JS", 
            image: mock1
        },
        {
            title: "Kasa ~ Location immobilière",
            source: "https://github.com/Nei7uj/P7-Kasa",
            image: mock2
        },
    ]
}