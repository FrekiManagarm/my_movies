import Image from "next/image"

const Card = () => {
    return (
        <div className="w-64 relative group flex justify-center shadow-xl rounded-xl items-center">
            <Image src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" width={275} height={375} alt="mammals" className="shadow-xl rounded-xl group-hover:blur-sm duration-300"/>
            <div className="opacity-0 group-hover:opacity-100 duration-300 absolute flex justify-center items-center text-xl text-black font-semibold">Dwayne</div>
        </div>
    )
}

export default Card