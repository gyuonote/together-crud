import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';
import SearchList from '../components/posts/SearchList';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <SearchList />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
