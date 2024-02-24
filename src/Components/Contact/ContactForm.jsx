export default function ContactForm() {
    return (
        <div className="mt-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Email</label>
            <input type="email" id="email" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter yout email" required />

            <label htmlFor="email" className="block mb-2 mt-4 text-sm font-medium text-gray-50 dark:text-white">Message</label>
            <textarea id="textarea" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Message" required />


                <button className="mt-4 w-full bg-blue-500 text-sm text-white text-center mb-4 rounded-lg h-10 hover:bg-blue-700">Send Email</button>

                       
        </div>
    )
}