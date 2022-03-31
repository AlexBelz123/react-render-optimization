import { StrictMode } from 'react';
import { render } from 'react-dom';

import List from './List';

render(
	<StrictMode><List /></StrictMode>,
	document.getElementById('root'),
);
