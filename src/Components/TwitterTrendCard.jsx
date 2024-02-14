export default function TwitterTrendCard({Ntrend,Ptrend,Pposted}){
    return(
        <>
            <div className="hover:bg-darkGray pt-4 rounded px-4">
                <div className="flex justify-between">
                    <div>
                        <span className="text-sm text-gray-500">{Ntrend} · Trending</span> 
                        <p className="text-gray-100 text-sm">{Ptrend}</p>
                        <p className="text-sm text-gray-500">{Pposted} posts</p>
                    </div>
                      <button className="text-gray-100 mr-2 font-bold rounded-full text-gray-500 w-8 h-8 hover:bg-darkBlue hover:text-blue-500">···</button>
                
                </div>
                
            </div>
        </>
    )
}

