import { useState } from "react"

const WorkCard = ({ company, jobTitle, techStack, color, duration, backOfCard }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const animationClass = isFlipped ? 'animate-flip-to-back' : 'animate-flip-to-front'

    return (
        <div onClick={handleFlip} className={`relative flex justify-center mt-5 cursor-pointer transition ${animationClass} duration-400 lg:mr-4 `}>
            <div className={`absolute inset-0 z-0 transform translate-x-2 translate-y-2 rounded-md transition ease-in duration-400 ${isFlipped ? `bg-gray-800` : `bg-black`}`}></div>
            <a className={`relative block p-4 ${isFlipped ? `bg-black` : `bg-gray-800`} bg-black z-10 w-full sm:w-80 h-60 sm:h-80 rounded-md transition-transform overflow-hidden`}>
                {isFlipped ? (
                    <div className="text-wrap absolute">
                        <h1 className={`text-left text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 border-b-4 p-1 ${color}`}>{backOfCard.title}</h1>
                        <p className="text-gray-300 mt-1 text-left text-sm sm:text-base overflow-auto">
                            {backOfCard.content}
                        </p>
                    </div>
                ) : (
                    <div>
                        <h5 className={`text-left text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 border-b-4 rounded-sm p-1 ${color}`}>{company}</h5>
                        <h6 className="text-left text-md sm:text-lg font-bold tracking-tight text-gray-300 mb-1">
                            {jobTitle}
                        </h6>
                        <h6 className="text-left text-sm sm:text-lg font-bold tracking-tight text-gray-300 mb-1">
                            {duration}
                        </h6>
                        <p className="text-gray-400 mt-1 mb-0 text-left text-sm sm:text-base">Technologies:</p>
                        <p className="text-gray-400 mt-2 text-left text-sm sm:text-base">{techStack}</p>
                    </div>
                )}
            </a>
        </div>
    )
}

export default WorkCard