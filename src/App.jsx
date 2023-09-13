import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [timeRead, setTimeRead] = useState(0);

  const handleBookMarks = (blog) => {
    setBookMarks([...bookMarks, blog]);
  };

  const handleMarkAsRead = (time) => {
    setTimeRead(timeRead + time);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Blogs
          handleBookMarks={handleBookMarks}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookMarks={bookMarks} timeRead={timeRead} />
      </main>
    </>
  );
}

export default App;
