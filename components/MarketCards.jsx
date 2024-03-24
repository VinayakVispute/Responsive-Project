const MarketCards = ({ data }) => {
  const { image, title, content } = data;
  return (
    <div className="flex flex-col  rounded-lg border border-gray-200 bg-white shadow ">
      <img
        className="rounded-t-lg h-full md:h-28 w-full object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="p-2">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 text-xs font-normal text-gray-700 ">{content}</p>
      </div>
    </div>
  );
};

export default MarketCards;
