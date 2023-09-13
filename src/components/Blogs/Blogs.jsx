import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-3/4">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookMarks={handleBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleBookMarks: PropTypes.function,
  handleMarkAsRead: PropTypes.function,
};

export default Blogs;
