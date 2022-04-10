import BlogJsApp from './App';
import ReactDOM from 'react-dom';
import React from 'react'

test('renders learn react link', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BlogJsApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
