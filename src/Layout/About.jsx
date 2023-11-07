// ... other imports
import Canvas from "../components/Canvas";

export default function About() {
    return (
        <section className="relative overflow-hidden">
            <Canvas isFooter={true} className="absolute top-0 left-0 w-full h-full z-0"/>
            <div className="container mx-auto px-6 py-10 lg:py-20 relative z-10">
                <h1 className="text-4xl font-bold text-center text-white">
                    About Me
                </h1>
                <p className="text-xl text-center text-gray-300 mt-4">
                    A brief introduction...
                </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800/50 backdrop-filter backdrop-blur-sm z-0"></div>
        </section>
    );
}
