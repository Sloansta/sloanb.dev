const SkillCard = ({ skillName, details, backOfCard, borderColor }) => {
    return (
        <div className="relative flex justify-center mt-5 transition duration-400 hover:-translate-y-5">
            <div className={`absolute inset-0 z-0 transform translate-x-2 translate-y-2 ${borderColor} rounded-md`}></div>
            <a href="#" className={`relative block p-4 bg-black z-10 w-full sm:w-80 h-56 sm:h-80 rounded-md`}>
                <h5 className="text-left text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">{skillName}</h5>
                <p className="text-gray-400 mt-2 text-left text-sm sm:text-base">{details}</p>
            </a>
        </div>
    )
}

export default SkillCard;
