import SkillCard from "../components/SkillCard"

const cards = [
    {
        skillName: "Frontend Development",
        details: "React, JS/TS, Vue, Svelte, Svelte-Kit, Tailwindcss",
        borderColor: "bg-orange-700",
        backOfCard: {
            title: "Dynamic and Beautiful",
            content: `
                From React, making games using canvas using just HTML5 to 
                even using bleeding edge frameworks like Svelte (shh... don't tell React), I've tested, wrote, debugged and shipped 
                beautiful frontend code. In fact, this site was made using React and Tailwind!
            `
        }
    }, 
    {
        skillName: "Backend Development",
        details: "Node, Express, PHP/Laravel, C#/.NET, MySQL, NoSQL",
        borderColor: "bg-purple-700",
        backOfCard: {
            title: "The Unseen Power", 
            content: `
                I've made Twitch bots that keeps track of 
                users that visit the said streamer and things like
                complex management software that keeps tabs on incoming orders using the Shipstation API.
                I pride myself on becoming more of a query writing wizard day by day. 
            `
        }
    }, 
    {
        skillName: "Mobile Development",
        details: "Dart, Flutter, Swift, SwiftUI",
        borderColor: "bg-blue-700",
        backOfCard: {
            title: "We're Going Mobile",
            content: `
                The passion started when I was on the team to write an internal mobile app 
                for a company using Flutter. There were some deployment issues, specifically for IOS that made me want to learn
                Native Development. I quickly learned and began to take a liking to Swift, and that interest further expanded when learning SwiftUI. 
            `
        }
    },
    {
        skillName: "Full Stack!", 
        details: "Bringing it all together as one!",
        borderColor: "bg-green-700",
        backOfCard: {
            title: "Just Like PB&J Baby",
            content: `
                I call myself a Software Developer, but that's really because I don't want to limit myself to "x stack" or "y stack"
                Really, I am a fullstack developer at heart, mostly focusing on the web. 
                (Ask me which I prefer :p)
            `
        }
    }, 
    {
        skillName: "Bilingual Translation",
        details: "Japanese to English translation",
        borderColor: "bg-red-700",
        backOfCard: {
            title: "I Speak Japanese",
            content: `
                Before getting into development, I was a freelance Japanese translator. 
                I mainly focused on media translation from Japanese to English but occasionally got English to Japanese as well. 
                I am bilingual, and speak near native Japanese. I even lived there for a bit!
            `
        }
    }
]

export default function Skills({ id }) {
    return (
        <div className="flex row md:column" id={id}>
            <div className="py-10 px-5 mx-auto text-center">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                    Here is what Sloan can do
                </h1>
                <span className="mb-5 text-xl font-bold tracking-tight leading-none text-gray-600">
                    Tap the cards for more details
                </span>
                <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cards.map((card) => (
                            <SkillCard 
                                skillName={card.skillName}
                                details={card.details}
                                borderColor={card.borderColor}
                                backOfCard={card.backOfCard}
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}