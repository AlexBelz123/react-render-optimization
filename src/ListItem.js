import { memo, useEffect, useRef } from 'react';
import { randomColor } from './List';

const ListItem = ({ item: { id, value }, checked, onCheck }) => {
  const background = useRef(`#${randomColor()}`); // to prevent unnecessary rerenders (updating the ref dont causes component rerender)

  useEffect(() => {
    background.current = `#${randomColor()}`;
  }, [checked]);

  const handleChange = ({ target: { checked } }) => onCheck(checked, id);

  console.log('render'); // I didnt remove this console log, so you can see everything is working properly

  return (
    <div style={{ userSelect: 'none', background: background.current }}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        {value}; renderID: {background.current}
      </label>
    </div>
  );
};

export default memo(ListItem);
