import { useState } from 'react';
import ProjectsCard from "../Components/Projects/ProjectsCard";
import ProjectsCardHover from "../Components/Projects/ProjectsCardHover";

export default function Projects() {
    const data = [
        {
            title:'Rick and Morty',
            description:'"Rick & Morty App" es una aplicación web que utiliza React y Tailwind CSS para consumir la API de Rick and Morty, ofreciendo a los usuarios una forma sencilla de explorar personajes y episodios',
            img: 'https://i.imgur.com/G1g9mLZ.png',
            url: 'https://rickandmortydtg.netlify.app/',
            arrayLabel:  ['HTML', 'CSS', 'JS', 'REACT', 'tailwind'],
        },
        {
            title:'CRUD C#',
            description:'"Una aplicación de escritorio creada con C# y Windows Forms que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos local o remota.',
            img: 'https://i.imgur.com/Jbrk1gg.png',
            url: 'https://github.com/Danluis/CRUD_NCAPASSQL',
            arrayLabel: ['CSharp', 'Tailwind', 'SQL'],
        },
        {
            title:'Rest-Api Node JS',
            description:'REST API construida con Node.js que consume datos almacenados en formato JSON. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los datos proporcionados.',
            img:'https://i.imgur.com/FAqCDuv.png',
            url: 'https://github.com/Danluis/rest-api-Node-JS/tree/main',
            arrayLabel:  ['NodeJs', 'Express', 'Postman'],
        },
    ];

    const [hoverStates, setHoverStates] = useState(Array(data.length).fill(false));

    const handleHover = (index, isHovered) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = isHovered;
        setHoverStates(newHoverStates);
    };

    return (
        <>
            <h1 id='projects' className='p-4 lg:ml-20 ml-6 mb-8 font-bold pt-20 text-4xl text-blue-500'>Projects</h1>
            <div className='sm:pb-0 pb-8 sm:block flex flex-col lg:ml-24 md:ml-10 ml-4 w-full container mx-auto lg:h-screen h-full cursor-pointer'>

                {data.map((project, index) => (
                    hoverStates[index] ? (
                        <ProjectsCardHover
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            onMouseLeave={() => handleHover(index, false)}
                        />
                    ) : (
                        <ProjectsCard
                            key={project.title}
                            img={project.img}
                            title={project.title}
                            arrayLabel={project.arrayLabel}
                            onMouseEnter={() => handleHover(index, true)}
                        />
                    )
                ))}
            </div>
        </>
    );
}
