import SkillCard from "../components/SkillCard"

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
                        <SkillCard skillName={"Frontend Development"} details={"React, JS/TS, Vue, Svelte, Svelte-Kit"} backOfCard={"orange"} borderColor="bg-orange-500" />
                        <SkillCard skillName={"Backend Development"} details={"Node, Express, C#, MySQL, NoSQL"} backOfCard={"purple"} borderColor="bg-purple-500" />
                        <SkillCard skillName={"Mobile Development"} details={"Dart, Flutter, Swift, SwiftUI"} backOfCard={"blue"} borderColor="bg-blue-500" />
                        <SkillCard skillName={"Full Stack!"} details={"Bringing everything together as one!"} backOfCard={"green"} borderColor="bg-green-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}