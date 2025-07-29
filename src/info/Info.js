import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import { Description } from "@mui/icons-material";


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;
export const info = {
    firstName: "Julien",
    lastName: "Dille",
    initials: "jd", 
    position: "Intégrateur Web",
    selfPortrait: self,
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
            description: "Site vitrine pour une architecte d'intérieur, avec un design épuré et moderne réalisé en JavaScript et Swagger pour les API.",
            source: "https://github.com/Nei7uj/P6-JS", 
            image: mock1
        },
        {
            title: "Kasa ~ Location immobilière",
            description: "Site de location immobilière avec un design moderne et une navigation fluide, réalisé en React.",
            source: "https://github.com/Nei7uj/P7-Kasa",
            image: mock2
        },
    ]
}