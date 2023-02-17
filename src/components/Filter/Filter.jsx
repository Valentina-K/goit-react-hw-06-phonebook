import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { filterContacts } from '../../redux/contactSlice';
import { FilterBox } from './Filter.styled';
const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
    dispatch(filterContacts(e.target.value));
  };
  return (
    <FilterBox>
      <span>Find contact by name</span>
      <input type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};

export default Filter;
