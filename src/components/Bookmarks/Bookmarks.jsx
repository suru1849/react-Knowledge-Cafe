import PropTypes from "prop-types";

const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="w-1/3">
      <h1>BookMarks: {bookMarks.length}</h1>
    </div>
  );
};

Bookmarks.porpTypes = {
  bookMarks: PropTypes.array,
};

export default Bookmarks;
