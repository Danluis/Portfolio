import TwitterCard from "./TwitterCard"
import TwitterTrends from "./TwitterTrends"
import imagePerfil from '../assets/image.jpg'
import imagePost from '../assets/ITwitter.png'
import trends from '../assets/trends.png'
export default function About(){
    return(
        <div className="sm:ml-28 sm:px-0 px-6 bg-black">
        <h1 id='about' className='mb-8 font-bold pt-20 text-4xl text-green-500'>About me</h1>
       
        <div className="sm:gap-12 grid sm:grid-cols-2 sm:pb-0 pb-16">
            <div className='w-full container mx-auto sm:h-screen h-min'>
                <TwitterCard imagePerfil={imagePerfil} imagePost={imagePost} description={'Hi, I am Danluis, I am 20 years old, I am a student at ITLA and I focus on web development.'}/>
            </div>

            <div className='sm:hidden block w-full container mx-auto sm:h-screen h-min'>
                <TwitterCard imagePerfil={imagePerfil} imagePost={trends} description={'There are my life trendings!!'}/>
            </div>

            <div className="sm:block hidden">
                <TwitterTrends/>
            </div>
        </div>
        
        </div>
    )
}