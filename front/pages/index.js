import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

// 더미데이터는 필요없고 이제 리덕스스테이트가 가지고있다
// const dummy = {
//   isLoggedIn: true,
//   imagePaths: [],
// mainPosts: [{
//   User: {
//     id: 1,
//     nickname: '최현준',
//   },
//   content: '첫 번째 게시글',
//   img: 'https://cdn.pixabay.com/photo/2019/01/17/23/14/work-3938876_960_720.jpg',
// }],
// };

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user.isLoggedIn);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
