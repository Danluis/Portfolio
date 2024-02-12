export default function TwitterTrendCard({Ntrend,Ptrend}){
    return(
        <>
            <div className="hover:bg-darkGray pt-4 pb-2 rounded px-4">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">{Ntrend} · Trending</span> 
                    <button className="text-gray-100 mr-2 font-bold rounded-full text-gray-500 ">···</button>
                </div>
                <p className="mt- text-gray-100 text-sm">{Ptrend}</p>
            </div>
        </>
    )
}

