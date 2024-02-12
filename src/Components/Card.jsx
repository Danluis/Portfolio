import image from '../assets/paisaje.jpg'
export default function Card(){
    return(
        <div className="container mx-auto max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image}alt="Something" className="w-full"/>
            <div className='px-6 py-4'>
                <div className='font-bold'>The coldest sunset</div>
                <p className='text-gray-700 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati non dolorem, maiores nisi eos voluptatem maxime quasi cupiditate aspernatur deserunt laborum deleniti necessitatibus error alias consequuntur enim a eaque.</p>
            </div>
            <span className='inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-3 ml-3'>#photography</span>

            <span className='inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-3 ml-3'>#travel</span>

            <span className='inline-block bg-gray-200 rounded-full text-sm font-semibold py-1 px-3 ml-3'>#winter</span>
        </div>
    )
}