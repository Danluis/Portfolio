import ProjectsCard from "./ProjectsCard";
import ProjectsCardHover from "./ProjectsCardHover";

export default function Projects({ isHovered, setIsHovered, 
    isHovered2, setIsHovered2,
    isHovered3, setIsHovered3 }) {
  const Ecommerce = ['HTML', 'CSS', 'JS', 'REACT', 'tailwind'];
  return (
    <>
      <h1 id='projects' className='p-4 lg:ml-20 ml-6 mb-8 font-bold pt-20 text-4xl text-blue-500'>Projects</h1>
      <div className='sm:pb-0 pb-8 sm:block flex flex-col lg:ml-24 md:ml-10 ml-4 w-full container mx-auto lg:h-screen h-full cursor-pointer'>
        {isHovered ? (
          <ProjectsCardHover 
            title={'Rick and Morty'} 
            description='
            "Rick & Morty App" es una aplicación web que utiliza React y Tailwind CSS para consumir la API de Rick and Morty, ofreciendo a los usuarios una forma sencilla de explorar personajes y episodios'
            onMouseLeave={() => setIsHovered(false)}
          />
        ) : (
          <ProjectsCard 
          img={'https://i.imgur.com/G1g9mLZ.png'}
            title={'Rick and Morty App'} 
            arrayLabel={Ecommerce} 
            onMouseEnter={() => setIsHovered(true)}
          />
        )}

        {isHovered2 ? (
          <ProjectsCardHover 
            title={'Crud React + c#'} 
            description='
            Un ecommerce, o comercio electrónico, es una plataforma en línea que permite a los usuarios comprar y vender productos y servicios a través de Internet.'
            onMouseLeave={() => setIsHovered2(false)}
          />
        ) : (
          <ProjectsCard 
            title={'Crud React + c#'} 
            arrayLabel={Ecommerce} 
            onMouseEnter={() => setIsHovered2(true)}
          />
        )}

    {isHovered3 ? (
          <ProjectsCardHover 
            title={'Rest API'} 
            description='
            Un ecommerce, o comercio electrónico, es una plataforma en línea que permite a los usuarios comprar y vender productos y servicios a través de Internet.'
            onMouseLeave={() => setIsHovered3(false)}
          />
        ) : (
          <ProjectsCard 
            title={'Rest API'} 
            arrayLabel={Ecommerce} 
            onMouseEnter={() => setIsHovered3(true)}
          />
        )}  
      </div>
    </>
  );
}
