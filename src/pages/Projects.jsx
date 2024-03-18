import { useState } from 'react';
import ProjectsCard from "../Components/Projects/ProjectsCard";
import ProjectsCardHover from "../Components/Projects/ProjectsCardHover";

export default function Projects() {
    const data = [
        {
            title:'Rick and Morty',
            description:'"Rick & Morty App" es una aplicación web que utiliza React y Tailwind CSS para consumir la API de Rick and Morty, ofreciendo a los usuarios una forma sencilla de explorar personajes y episodios',
            img: 'https://i.imgur.com/G1g9mLZ.png',
            arrayLabel:  ['HTML', 'CSS', 'JS', 'REACT', 'tailwind'],
        },
        {
            title:'CRUD C#',
            description:'CRUD C# es una aplicación web que utiliza React y Tailwind CSS para consumir la API de Rick and Morty, ofreciendo a los usuarios una forma sencilla de explorar personajes y episodios',
            img: 'https://i.imgur.com/G1g9mLZ.png',
            arrayLabel:  ['HTML', 'CSS', 'JS', 'REACT', 'tailwind'],
        },
        {
            title:'CRUD Node JS',
            description:'CRUD Node JS es una aplicación web que utiliza React y Tailwind CSS para consumir la API de Rick and Morty, ofreciendo a los usuarios una forma sencilla de explorar personajes y episodios',
            img: 'https://i.imgur.com/G1g9mLZ.png',
            arrayLabel:  ['HTML', 'CSS', 'JS', 'REACT', 'tailwind'],
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
