import PostsLists from "@/components/PostsLists";
import { allPosts, Post } from "contentlayer/generated";

const posts:Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postPerPage = 2;
const totalPage = Math.ceil(totalPost/postPerPage);


export const metadata = {
    title: "Lista de todos los post",
    description: "Description posts - Generate by create next app",
};

const Posts = () => {
  return (
    <div>
        <h1 className="text-center my-4 text-3xl">Posts</h1>
        <div className="grid gap-4">
        <PostsLists posts ={posts}/>
        </div>
    </div>
 );
};

export default Posts;