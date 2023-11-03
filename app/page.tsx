import HomeScreen from "./screens/Home/page";
import Post from "./components/Post/page";
import feed from "./assets/data/feed";
export default function Base() {
  return (
    <>
      {/* <HomeScreen /> */}
      <Post />
      <Post />
      <Post />
    </>
  );
}
