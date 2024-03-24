import Image from "next/image";

import { FaHeart, FaRegEye, FaCommentAlt } from "react-icons/fa";
import { HiOutlineShare } from "react-icons/hi";
import TimeAgo from "react-timeago";

const DicussionCards = ({ data }) => {
  const {
    author,
    profile_picture,
    content,
    likes,
    comments,
    timestamp,
    views,
  } = data;
  return (
    <div className="flex flex-col p-2 justify-center items-start bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex m-2 gap-2 tracking-light justify-between pr-2 w-full">
        <div className="flex gap-2 items-center flex-wrap">
          <Image src={profile_picture} height={30} width={30} alt="author" />
          <p className="my-auto text-xs sm:text-sm text-nowrap text-black ">
            {author}
          </p>
          <span className="bg-blue-100 my-auto text-blue-800 text-xs font-medium leading-tight px-2 rounded-full ">
            Default
          </span>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-nowrap text-black ">
            <TimeAgo date={timestamp} live={true} />
          </p>
        </div>
      </div>

      <p className="mb-3 font-normal text-gray-700 ">{content}</p>

      <div className="flex justify-around items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <FaHeart className="text-red-500 transition duration-300 hover:text-red-300 cursor-pointer transform hover:scale-110" />
          {likes}
        </div>

        <div className="flex justify-center items-center gap-2">
          <FaRegEye className="text-blue-500 transition duration-300 hover:text-blue-300 cursor-pointer transform hover:scale-110" />
          {views}
        </div>

        <div className="flex justify-center items-center gap-2">
          <FaCommentAlt className="transition duration-300 text-gray-500 hover:text-gray-300 cursor-pointer transform hover:scale-110" />
          {comments}
          <span className="hidden laptop:block "> Comments</span>
        </div>

        <div className="flex justify-center items-center gap-2">
          <HiOutlineShare className="transition duration-300 text-gray-800 hover:text-slate-500 cursor-pointer transform hover:scale-110" />
          <span className="hidden laptop:block"> Share</span>
        </div>
      </div>
    </div>
  );
};

export default DicussionCards;
