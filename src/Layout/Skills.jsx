import SkillCard from "../components/SkillCard"

const cards = [
    {
        skillName: "Frontend Development",
        details: "React,  JS/TS, Vue, Svelte, Svelte-Kit",
        borderColor: "bg-orange-500"
    }, 
    {
        skillName: "Backend Development",
        details: "Node, Express, C#/.NET, MySQL, NoSQL",
        borderColor: "bg-purple-500"
    }, 
    {
        skillName: "Mobile Development",
        details: "Dart, Flutter, Swift, SwiftUI",
        borderColor: "bg-blue-500"
    },
    {
        skillName: "Full Stack!", 
        details: "Bringing it all together as one!",
        borderColor: "bg-green-500"
    }, 
    {
        skillName: "Bilingual Translation",
        details: "Japanese to English translation",
        borderColor: "bg-yellow-500"
    }
]

export default function Skills() {
    return (
        <div className="flex row md:column">
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
                            /> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}