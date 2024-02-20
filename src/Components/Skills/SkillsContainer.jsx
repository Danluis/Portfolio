export default function SkillsContainer({Title, arrayImage}){
    return(
        <>
        <span className="sm:ml-28 ml-8 font-bold text-lightPurple border-l-2 border-lightPurple pl-2 text-xl">{Title}</span>
        <div className="flex mt-4 sm:pl-28 pl-8">
            <div className="flex w-full flex-wrap gap-2"> {/* Ajusta el número de columnas según tu preferencia */}
                {arrayImage.map((image, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
                        <img src={image} alt={`Image ${index + 1}`} className=" sm:w-14 w-10 sm:h-14 h-10 object-cover" />
                        
                    </div>
                    
                ))}
            </div>
        </div>
    </>
    )
}