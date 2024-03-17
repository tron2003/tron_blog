import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function postpage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setpost] = useState(null);

  useEffect(() => {
    // console.log(postSlug)
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const data = await fetch(`/api/post/getposts?slug=${postSlug}`);
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setpost(data.post[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
        // console.log(data.message);
      }
    };
  }, [postSlug]);
  return <div>postpage</div>;
}
