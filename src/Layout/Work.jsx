import WorkCard from "../components/WorkCard"

const cards = [
    {
        company: "Fuse TG",
        jobTitle: "Software Developer",
        techStack: "Vue, TypeScript, PHP, Node/Express, Svelte/Svelte-kit, Dart/Flutter",
        color: "border-yellow-500",
        duration: "March 2023 - Current",
        backOfCard: {
            title: "Into the unknown",
            content: `
                My work at Fuse has been a giant step in terms of learning. 
                I manage multiple different clients and the software I write is different day to day.
                From the cutting edge in Svelte, making sure older legacy PHP projects stay updated, 
                to mobile development using Flutter.
            `
        }
    }, 
    {
        company: "Partech",
        jobTitle: "Software Developer",
        techStack: "React, Laravel, PHP, C#, JQuery, JavaScript, Jest",
        color: "border-pink-500",
        duration: "May 2022 - March 2023",
        backOfCard: {
            title: "Breaking in",
            content: `
                Partech remains dear in my heart. 
                It was my first Software Development job and I learned so much. 
                I also was able to be assigned to a client whom spoke Japanese, which was even better!
            `
        }
    },
    {
        company: "Freelance",
        jobTitle: "Translator",
        techStack: "Japanese and English... wait this isn't a tech stack...",
        color: "border-red-500",
        duration: "June 2019 - Sometimes I take gigs now even", 
        backOfCard: {
            title: "The odd ball",
            content: `
                Translation was my go to. I am good at it, but it always seemed like I could be more impactful. 
                To this day in order to keep my Japanese skills up, I sometimes do free fan translations or small 
                side jobs. Before I got into tech, it was Japanese all day every day!
            `
        }
    }
]


export default function Work() {
    return (
        <div className="flex row md:column bg-gray-900">
            <div className="py-10 px-5 mx-auto text-center">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                    Sloan's Career 
                </h1>
                <span className="mb-5 text-xl font-bold tracking-tight leading-none text-gray-600">
                    Tap to view the stepping stones of my career
                </span>
                <div className="mt-8 max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cards.map((card) => (
                            <WorkCard 
                                company={card.company}
                                jobTitle={card.jobTitle}
                                techStack={card.techStack}
                                color={card.color}
                                duration={card.duration}
                                backOfCard={card.backOfCard}
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}