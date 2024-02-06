import PostSection from "./components/post/PostSection";
import "./App.css";
import ShowProfile from "./components/ShowProfile";
import Recommendations from "./components/Recommendations"

function App() {
  return (
    <main>
      <Recommendations />
      <ShowProfile />
      <PostSection />
    </main>
  );
}

export default App;
