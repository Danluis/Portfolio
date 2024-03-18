import ContactAside from '../Components/Contact/ContactAside'
import ContactForm from '../Components/Contact/ContactForm'

export default function Contact(){
    return (
        <>
            <div className="w-full h-screen grid lg:grid-cols-2 bg-blackLogin lg:p-6 md:p-6 lg:gap-4">
                
                <div className='lg:px-12 md:px-12 px-4 pt-10 lg:flex justify-center items-center'>

                    <div className="lg:px-8 lg:pt-8 pb-6 rounded-lg container mx-auto lg:h-min bg-blackRecovery">
                    <h1 id='contact' className='lg:py-4 lg:pr-4 lg:ml-0 mb-8 lg:text-left text-center font-bold text-4xl text-blue-500'>Connect with me</h1>
     
                         <div>
                              <ContactForm/>
                         </div>
                    </div>
                </div>
               
                <ContactAside image={'https://i.imgur.com/WESTwFG.png'}/>
                
            </div>
        </>
    )
}