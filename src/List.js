import { useState, useCallback } from 'react';

import ListHeader from './ListHeader';
import ListItem from './ListItem';

const initialList = Array.from([1, 2, 3, 4, 5, 6], (value) => ({
  id: value * +new Date(),
  value,
}));

export const randomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

//   utils (we can move helper function in another file) - same for <randomColor> fn()
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const List = () => {
  const [list, setList] = useState(initialList);
  const [checkedIds, setChecked] = useState([]);

  const handleShuffle = useCallback(() => {
    setList((prev) => [...shuffle(prev)]); // return the same shuffled array
  }, []);

  const handleCheck = useCallback((checked, id) => {
    if (checked) {
      // I used <if else> instead of ternary operator for good readability
      setChecked((prev) => [...prev, id]); // this will work cuz it always have access to previous state
    } else {
      setChecked((prev) => prev.filter((checkedId) => checkedId !== id));
    }
  }, []); // if pass [checkedIds] indtead of using prev state - the function wil be recreated. It causes child component to rerender

  return (
    <>
      <ListHeader
        checkedItemsLength={checkedIds.length}
        onShuffle={handleShuffle}
      />
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          checked={checkedIds.includes(item.id)}
          onCheck={handleCheck}
        />
      ))}
    </>
  );
};

export default List;
