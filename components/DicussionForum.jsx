import DicussionCards from "./DicussionCards";
import DicussionData from "@/data/discussion_forum_posts.json";
const DicussionForum = () => {
  return (
    <>
      {/* ======Dicussion Forum Starts==== */}
      <div className=" p-4 flex flex-col gap-4 z-[100]  ">
        <div>
          <h2 class="mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl  ">
            Dicussion Forum
          </h2>
        </div>
        {/* Card Starts */}
        {DicussionData.map((data) => (
          <DicussionCards data={data} />
        ))}
        {/* Card End */}
      </div>

      {/* ======Dicussion Forum Ends==== */}
    </>
  );
};

export default DicussionForum;
