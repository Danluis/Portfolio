import ProjectsCard from "./ProjectsCard";
import ProjectsCardHover from "./ProjectsCardHover";

export default function Projects({ isHovered, setIsHovered, 
    isHovered2, setIsHovered2,
    isHovered3, setIsHovered3 }) {
  const Ecommerce = ['HTML', 'CSS', 'JS', 'REACT', 'CSharp', 'MYSQL'];
  return (
    <>
      <h1 id='projects' className='p-4 ml-20 mb-8 font-bold pt-20 text-4xl text-blue-500'>Projects</h1>
      <div className='w-full container mx-auto h-screen cursor-pointer'>
        {isHovered ? (
          <ProjectsCardHover 
            title={'Ecommerce'} 
            description='
            Un ecommerce, o comercio electrónico, es una plataforma en línea que permite a los usuarios comprar y vender productos y servicios a través de Internet.'
            onMouseLeave={() => setIsHovered(false)}
          />
        ) : (
          <ProjectsCard 
            title={'Ecommerce'} 
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
