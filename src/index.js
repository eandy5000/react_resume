import './styles/style.css';
import swimmer from '../src/images/test_image.jpeg';

const foo = () => console.log('I still workzzzzzzz');

foo();

const image = document.createElement('img');
image.src = swimmer;

document.body.appendChild(image);


