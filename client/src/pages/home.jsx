import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/calltoaction.jsx";
import PostCard from "../components/postcard.jsx";

export default function home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getposts`);
      const data = await res.json();
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className=" flex flex-col gap-7 lg:p-28 max-w-6xl px-3 mx-auto ">
        <h1 className="text-3xl  font-bold lg:text-6xl">Welcome to my Blog</h1>

        <p className="text-gray-500 text-xs sm:text-sm ">
          vsdvdsdssdddddddddddddddddddddcx csdv sdds asd dfs df fdfdfd df dfbh
          dfdf fgfd gfd f ddfd df f fdg dsfgf gdfs dg fg
          fdfddsfffasdfasfdsfvdzvdae f dva fd sd fAd DFSfd
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View ALL
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-center">Recent posts</h2>
            <div className=" flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
