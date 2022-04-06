import { memo, useMemo } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checked, onCheck }) => {
  const background = `#${randomColor()}`;

  const handleChange = ({ target: { checked } }) => onCheck(checked, id);

  console.log('render');

  return (
    <div style={{ userSelect: 'none', background }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        {value}; renderID: {background}
      </label>
    </div>
  );
};

export default memo(ListItem);
