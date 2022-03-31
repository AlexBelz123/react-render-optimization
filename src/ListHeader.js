import { memo } from 'react';

import { randomColor } from './List';

const ListHeader = ({ checkedItemsLength, onShuffle }) =>
	<>
		<div style={{ background: `#${randomColor()}` }}>
			Checked: {checkedItemsLength}; renderID: {randomColor()}
		</div>
		<div>
			<button onClick={onShuffle}>Shuffle</button>
		</div>
	</>;

export default memo(ListHeader);
