import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LikeButton from './components/LikeButton';
import { TO_MAIN, FROM_MAIN } from './constants/channels';
import { CustomWindow } from './types/Window';

declare let window: CustomWindow;

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);

// TODO: Remove jquery when this PoC is removed
// eslint-disable-next-line @typescript-eslint/no-var-requires
const $ = require('jquery');
let sno = 0;

$('#add-to-list').on('click', () => {
    const name = $('#Name').val();
    const email ='fsdfsdf';

    window.api.send(TO_MAIN, {type: 'saveData', name, email});

    addEntry(name, email);
});

function addEntry(name: string, email: string) {
    if(name && email) {
        sno++;
        const updateString = '<tr><td>'+ sno + '</td><td>'+ name +'</td><td>' 
         + email +'</td></tr>';
        $('#contact-table').append(updateString);
    }
}

window.api.receive(FROM_MAIN, (data: string[]) => {
    data.forEach((contact) => {
        const [ name, email ] = contact.split(',');
        addEntry(name, email);
    });
});

window.api.send(TO_MAIN, {type: 'loadData'});