import React from 'react';
import ReactDOM from 'react-dom';
// tslint:disable-next-line: no-submodule-imports;
import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: no-submodule-imports;
import Login from './containers/Login';


ReactDOM.render(<Login />, document.getElementById('app'));

export default hot(Login);
