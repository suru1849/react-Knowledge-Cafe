import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMarks = (blog) => {
    setBookMarks([...bookMarks, blog]);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Blogs handleBookMarks={handleBookMarks} />
        <Bookmarks bookMarks={bookMarks} />
      </main>
    </>
  );
}

export default App;
