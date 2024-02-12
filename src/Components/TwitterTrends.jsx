import TwitterTrendCard from "./TwitterTrendCard"
export default function TwitterTrends(){
    return(
        <>
            <div className="bg-lighBlack py-4  rounded-lg mr-20">
                <h1 className="text-gray-100 font-bold text-2xl pl-4">Trending in my life</h1>
                <TwitterTrendCard Ntrend={1} Ptrend={'#Family'}/>
                <TwitterTrendCard Ntrend={2} Ptrend={'#Programming'}/>
                <TwitterTrendCard Ntrend={3} Ptrend={'#Languages'}/>
                <TwitterTrendCard Ntrend={4} Ptrend={'#Learn'}/>
                <TwitterTrendCard Ntrend={5} Ptrend={'#Sports'}/>
                <TwitterTrendCard Ntrend={6} Ptrend={'#Read'}/>
            </div>
        </>
    )
}