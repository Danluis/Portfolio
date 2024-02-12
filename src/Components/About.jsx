import TwitterPost from "./TwitterCard"
import TwitterTrends from "./TwitterTrends"
import imagePerfil from '../assets/image.jpg'
import imagePost from '../assets/ITwitter.png'
export default function About(){
    return(
        <> 
        <h1 id='about' className='ml-28 mb-8 font-bold pt-20 text-4xl text-green-500'>About me</h1>
        <div className="ml-28">
        <div className="gap-12 grid grid-cols-2 ">
            <div className='w-full container mx-auto h-screen'>
                <TwitterPost imagePerfil={imagePerfil} imagePost={imagePost}/>
            </div>

            <div>
                <TwitterTrends/>
            </div>
        </div>
        
        </div>
        </>
    )
}