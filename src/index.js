import moment from 'moment';
import { internet } from 'faker';
import { student } from './name';

// Component Author
let authorWrap = document.createElement( 'h4' );
authorWrap.id = student.name;
authorWrap.title = student.group;
let author = document.body.appendChild( authorWrap );

author.textContent = `${ student.name }`;

// Component Pre
let el = document.body.appendChild( document.createElement( 'pre' ) );

el.textContent += `${ moment().format( "MMM Do YY" ) } \n${ internet.email() } \n`;


