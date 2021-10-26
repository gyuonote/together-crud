import React from 'react';
import Search from '../../components/posts/search';
import {useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';



const SearchContainer = ({ location, match }) => {
    const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    }));

     // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여 주지 않음
  if (!posts || loading) return null;

  const {username} = match.params;