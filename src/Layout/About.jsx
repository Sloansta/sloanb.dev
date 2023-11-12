// ... other imports
import Canvas from "../components/Canvas";
import githubIcon from '../assets/github.svg'

export default function About({ id }) {
    return (
        <section id={id} className="relative overflow-hidden">
            <Canvas isFooter={true} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="container mx-auto px-3 pb-40 pt-1 relative z-10 mb-auto text-center">
                <h1 className="text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-white pt-2">
                    About Sloan
                </h1>
                <p className="text-xl text-center text-gray-300 mt-4 pt-5">
                    A brief introduction...
                </p>
                <p className="text-left tracking-wide leading-none mt-5 text-gray-400 lg:px-20 text-xl font-normal">
                    If you made it this far down in the site then you know that I'm Sloan.
                    I am a Software Developer based in Michigan. I never really knew I was going to be a developer until I had already become one.
                    My journey with code started with attempting to make things like the background of this section, and games.
                    Code was just a medium to make art, or interactive experiences for people to enjoy. In a way, development chose me, and I am happy that it did.
                    Other than writing code, I do quite a few things like weight training, language learning, and a fair bit of gaming. I also have a cat named Myla who I love dearly.
                    If you think this site is neat, or just want to connect, please feel free using the links below!
                    Thanks for stopping by :p
                </p>
            </div>
            <div className="flex justify-center space-x-4 items-center absolute bottom-20 left-0 right-0 z-10">
                <a href="https://github.com/sloansta" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="h-12 w-12 hover:opacity-80 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/sloan-boyce-3b89ba230/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none" stroke="white" className="hover:opacity-80 transition-opacity">
                        <g transform="scale(5.12, 5.12)">
                            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" fill="white"/>
                        </g>
                    </svg>
                </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800/50 backdrop-filter backdrop-blur-sm z-0"></div>
        </section>
    );
}
