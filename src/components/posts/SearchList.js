import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const SearchBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
`;

const SearchSelect = styled.select`
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
`;

const SearchInput = styled.input`
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
`;

const SearchList = ({ value }) => {
  return (
    <SearchBlock>
      <SearchForm>
        <SearchSelect>
          <option value="title">제목</option>
          <option value="body">내용</option>
          <option value="title_body">제목+내용</option>
        </SearchSelect>
        <SearchInput
          type="text"
          name="searchText"
          value={value}
          placeholder="검색어를 입력하세요"
        />
        <Button>검색</Button>
      </SearchForm>
    </SearchBlock>
  );
};

export default SearchList;
