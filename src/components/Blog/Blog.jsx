import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";

const Blog = ({ blog, handleBookMarks }) => {
  console.log(blog);
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      {/* cover img */}
      <img
        className="w-full rounded-lg"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      {/* author details */}
      <div className="flex justify-between mt-8 mb-5">
        <div className="flex items-center">
          <img className="w-[60px]" src={author_img} alt="" />
          <div className="ml-4">
            <h3 className="text-2xl font-bold">{author}</h3>
            <h4 className="text-base font-semibold text-gray-400">
              {posted_date}
            </h4>
          </div>
        </div>
        <div className="flex items-center text-xl text-gray-400 font-medium">
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleBookMarks(blog)}
            className="ml-2 hover:text-red-600"
          >
            <BsBookmarks></BsBookmarks>
          </button>
        </div>
      </div>
      {/* title */}
      <h2 className="text-4xl">{title}</h2>
      {/* hashTags */}
      <p className="text-xl text-gray-400 font-medium">
        {hashtags.map((item, index) => (
          <span key={index}>
            <a href="#">{item} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMarks: PropTypes.funtion,
};
export default Blog;
