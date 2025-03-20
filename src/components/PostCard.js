const PostCard = ({ post }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.body}</p>
      </div>
    );
  };
  
  export default PostCard;
  