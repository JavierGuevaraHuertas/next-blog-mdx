import PostsLists from "@/components/PostsLists";
import { allPosts, Post } from "contentlayer/generated";

interface Props {
    params: {
        number: string;
    };
}
const posts:Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPost = posts.length;
const postPerPage = 2;
const totalPage = Math.ceil(totalPost/postPerPage);

const LayoutPages = ({params}:Props) => {
    console.log(params);
  return <div>
  <h1 className="text-center my-4 text-3xl">Posts</h1>
  <div className="grid gap-4">
  <PostsLists posts ={posts}/>
  </div>
</div>
};

export default LayoutPages;