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
      <div className=" flex flex-col gap-5 lg:p-28 max-w-6xl px-3 mx-auto ">
        <h1 className="text-3xl  font-bold text-slate-700 lg:text-6xl">
          Welcome to my Blog
        </h1>

        <p className="text-emerald-700 text-sm sm:text-md ">
          Step into a world where curiosity knows no bounds, and every click
          unveils a new adventure.
        </p>
        <p className="text-emerald-700 text-sm sm:text-md">
          Welcome , where imagination meets enlightenment and
          every page turn sparks inspiration. From the latest trends to timeless
          wisdom, we're your passport to a universe of captivating stories,
          thought-provoking insights, and endless possibilities. Join our
          community of seekers, dreamers, and doers as we journey through the
          exhilarating landscapes of discovery. Get ready to ignite your
          imagination and embark on an electrifying exploration unlike any
          other!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-sky-600 font-bold hover:underline"
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
