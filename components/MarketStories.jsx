import MarketCards from "./MarketCards";
import MarketData from "@/data/market_stories.json";
const MarketStories = () => {
  return (
    <>
      <div className="p-4  gap-2 ">
        <div className="flex flex-col gap-4">
          <h2 class="mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl  ">
            Market Stories
          </h2>
          {MarketData.map((data) => (
            <MarketCards data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MarketStories;
