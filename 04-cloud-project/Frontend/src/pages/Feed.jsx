import { useEffect, useState } from "react";
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1784750362102-5aeb553c415f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
      caption: "The iconic Main Entrance arch at VDNKh",
    },
  ]);

  useEffect(()=>{

    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      // console.log(res.data)
      setPosts(res.data.posts)
      
    })
  },[])

  return(
    <section className="flex flex-col items-center gap-2">
      <h1 className="text-5xl font-mono m-5 p-5">POSTS</h1>
        {
            posts.length > 0 ? 
            (
                posts.map((post) => (
                    <div 
                    className="flex flex-col items-center h-120 w-100 p-5 bg-cover bg-amber-100"
                    key={post._id}>
                        <img 
                          className="h-[85%] w-[95%] bg-cover" 
                          src={post.image} 
                          alt={post.caption} 
                        />
                        <p className="py-2 mt-3">{post.caption}</p>
                    </div>
                ))
            ) 
            : 
            (<h1>No Posts Available</h1>)
        }
    </section>
  )
};
export default Feed;
