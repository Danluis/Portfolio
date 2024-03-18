export default function ProjectsCard ({title, arrayLabel=['HTML','CSS','JS'], onMouseEnter, img}){
    return(
        <>
             <div key={title} className="mt-4 sm:w-1/4 rounded overflow-hidden shadow-lg bg-gray-100 inline-block mr-8 h-4/5" onMouseEnter={onMouseEnter}>
                <img className="w-full sm:h-1/2 h-40" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl text-black">{title}</div>
                </div>
                <div className="px-6 pt-2 pb-2 h-40">
                    {arrayLabel.map((span) =>(
                        <span key={span} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{span}</span>
                    ))
                     
                    }
                </div>
                </div>
        </>
    )
}