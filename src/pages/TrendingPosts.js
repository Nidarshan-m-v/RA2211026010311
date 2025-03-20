import { useEffect, useState } from "react";
import { getUserPosts } from "../services/api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getUserPosts(1); 
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="heading-p1">Trending Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
