import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

export const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Jobs Openings
      </h1>
      {/* multiple job card display here  */}

      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0, 6).map((job, index) => {
          return <LatestJobCards key={index} />; // Added return statement and key prop
        })}
      </div>
    </div>
  );
};
