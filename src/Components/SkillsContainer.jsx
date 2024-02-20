export default function SkillsContainer({Title, arrayImage}){
    return(
        <>
        <span className="ml-28 font-bold text-lightPurple border-l-2 border-lightPurple pl-2 text-xl">{Title}</span>
        <div className="flex mt-4 pl-28">
            <div className="flex w-full wrap gap-2"> {/* Ajusta el número de columnas según tu preferencia */}
                {arrayImage.map((image, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
                        <img src={image} alt={`Image ${index + 1}`} className=" w-14 h-14 object-cover" />
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}