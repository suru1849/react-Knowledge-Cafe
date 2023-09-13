import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
}

export default App;
