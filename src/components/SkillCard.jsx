import { useState } from "react";



const SkillCard = ({ skillName, details, backOfCard, borderColor }) => {

    const [isFlipped, setIsFlipped] = useState(false)
    
    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const animationClass = isFlipped ? 'animate-flip-to-back' : 'animate-flip-to-front'

    return (
        <div onClick={handleFlip} className={`relative flex justify-center mt-5 cursor-pointer ${animationClass} transition duration-400 lg:mr-4 `}>
            <div className={`absolute inset-0 z-0 transform translate-x-2 translate-y-2 rounded-md transition ease-in duration-400 ${!isFlipped ? borderColor : `bg-black`}`}></div>
            <a className={`relative block p-4 ${isFlipped ? borderColor : `bg-black`} bg-black z-10 w-full sm:w-80 h-60 sm:h-80 rounded-md transition-transform overflow-hidden`}>
            { isFlipped ? (
                <div className="text-wrap absolute">
                    <h1 className="text-left text-lg m:text-2xl font-bold tracking-tight mb-1 text-white drop-shadow-md">{backOfCard.title}</h1>
                    <p className="text-gray-300 mt-1 text-left text-sm sm:text-base overflow-auto">
                        {backOfCard.content}
                    </p>
                </div>
            ): (
                <div>
                    <h5 className="text-left text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">{skillName}</h5>
                    <p className="text-gray-400 mt-2 text-left text-sm sm:text-base">{details}</p>
                </div>
            )}
            </a>
        </div>
    )
}

export default SkillCard;
