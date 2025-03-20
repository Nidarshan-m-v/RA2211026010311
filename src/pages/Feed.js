import { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../services/api";
import UserCard from "../components/UserCard";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        const postsData = await getUserPosts(1); 
        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching feed data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="heading-p3">Feed</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Top Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Recent Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
