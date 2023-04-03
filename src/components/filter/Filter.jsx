import { findTarget } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';

import { FindBlock, FindSection } from './filter.styles';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FindSection>
        <FindBlock>
          <label htmlFor="name">Find contact</label>
          <input
            onChange={e => {
              dispatch(findTarget(e.target.value));
            }}
            id="name"
            name="name"
            placeholder="Please enter name"
          />
        </FindBlock>
      </FindSection>
    </>
  );
};
