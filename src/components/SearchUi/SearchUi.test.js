import SearchUi from './SearchUi';
import ReactDOM from 'react-dom';
import React from 'react';

it('renders without crashing', () =>{
    const section = document.createElement('section');
    ReactDOM.render(<SearchUi/>,section)
    ReactDOM.unmountComponentAtNode(section);
})



