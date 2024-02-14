import React from 'react';

const TwitterPost = ({imagePerfil, imagePost}) => {
  return (
  <>
     <div className=" grid grid-col-2 container mx-auto p-4 w-full h-min border-2 border-solid border-gray-700">

      <div className="flex items-center">
        <img src={imagePerfil} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="font-bold text-lg text-gray-100">Danluis Tejada</h2>
          <p className="text-gray-600">@DanluisDTG</p>
        </div>
      </div>
      <p className="text-gray-100 ml-16 mr-4 text-sm">Soy Danluis, tengo 20 años, soy estudiante de termino del ITLA y me enfoco en el desarrollo web.</p>
      <div className="flex justify-center ml-16 mr-4">
        <img src={imagePost} alt="Imagen adjunta" className="w-full h-72 rounded-lg mt-3" />
      </div>
      
      
      <div className="flex justify-between ml-16 mr-4 mt-2">
      
      <button className='text-gray-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 inline-block text-gray-100 w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        30
      </button>
      
      <button className='text-gray-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 inline-block text-gray-100 w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
        1.9k
      </button>
      

      <button className='text-gray-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 inline-block text-gray-100 w-4 h-4 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        7.7k
      </button>
      

      <button className='text-gray-100'>  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 inline-block text-gray-100 w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
        190k
      </button>
      

      




      </div>
    </div>
    </>
  );
};

export default TwitterPost;





