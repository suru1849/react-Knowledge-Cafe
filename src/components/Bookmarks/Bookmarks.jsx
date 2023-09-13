import PropTypes from "prop-types";
import Bookmark from "../BookMark/Bookmark";

const Bookmarks = ({ bookMarks, timeRead }) => {
  return (
    <div className="w-1/3 ml-6  text-center">
      {/* total time to read */}
      <div className="bg-gray-200 p-6 mb-5 rounded-md text-2xl font-bold text-blue-500 border-[1px] border-blue-500">
        <h1>Spent time on read : {timeRead}min </h1>
      </div>
      {/* bookMarks */}
      <div className="bg-gray-200 p-6 mb-5 rounded-md">
        <h1 className="text-2xl font-bold ">
          Bookmarked Blogs: {bookMarks.length}
        </h1>
        {bookMarks.map((bookMark, index) => (
          <Bookmark key={index} bookMark={bookMark} />
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  timeRead: PropTypes.number,
};

export default Bookmarks;
