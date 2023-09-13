import PropTypes from "prop-types";

function Bookmark({ bookMark }) {
  const { title } = bookMark;
  return (
    <div className="text-lg font-semibold p-4 m-2 bg-white rounded-lg">
      <h2>{title}</h2>
    </div>
  );
}

Bookmark.propTypes = {
  bookMark: PropTypes.object,
};

export default Bookmark;
