const MarketCards = ({ data }) => {
  const { image, title, content } = data;
  return (
    <div className="max-w-52 mx-auto rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <img
        className="rounded-t-lg h-28 w-full object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="p-2">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
};

export default MarketCards;
