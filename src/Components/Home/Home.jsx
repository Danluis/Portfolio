import curriculum from '../Home/curriculum.pdf'

export default function Home() {
    return (
       

        <div id="home" className="lg:ml-28 container mx-auto sm:pt-44 pt-36 w-full min-h-screen bg-home lg:text-left text-center sm:px-0 px-8">
            <span className="text-6xl sm:text-7xl text-center mb-4 sm:mb-8 text-white"> Hello, I'm a <br /> <span className="text-green-500">Frontend</span> </span> <span className="text-blue-500 text-6xl sm:text-7xl">Developer</span>
            <div className="mt-8">
                <span className="text-slate-300 ">I'm Danluis Tejada, a web developer with a passion for turning lines of code <br className="sm:block hidden"/>into interactive and functional experiences.</span>
            </div>
            <a href={curriculum} download={'Danluis CV'}>
            <button className="bg-blue-500 py-2 px-8 text-center text-white mt-8 rounded">Descargar CV</button>
            </a>
        </div>
    
        
    )
}


