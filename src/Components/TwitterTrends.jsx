import TwitterTrendCard from "./TwitterTrendCard"
export default function TwitterTrends(){
    return(
        <>
            <div className="bg-lighBlack py-4 rounded-lg mr-20">
                <h1 className="text-gray-100 font-bold text-2xl pl-4">Trending in my life</h1>
                <TwitterTrendCard Ntrend={1} Ptrend={'#Family'} Pposted={'530K'}/>
                <TwitterTrendCard Ntrend={2} Ptrend={'#Programming'} Pposted={'1.85M'}/>
                <TwitterTrendCard Ntrend={3} Ptrend={'#Languages'} Pposted={'24.7K'}/>
                <TwitterTrendCard Ntrend={4} Ptrend={'#Learning'} Pposted={'50K'}/>
                <TwitterTrendCard Ntrend={5} Ptrend={'#Sports'} Pposted={'118K'}/>
           </div>
        </>
    )
}