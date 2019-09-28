var _ = require('lodash');
//named import 반드시 {} 안에 동일한 이름을 사용한다.
import {area} from './js/circle';
import {circumference} from './js/circle';

//defualt inport{}없이 사용하되 이름을 임의로 바꿀 수 있다.
import bbb from './js/cube';

import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  return element;
}

console.log(area(10));
console.log(bbb.bulk(10));

console.log(circumference(5));

document.body.appendChild(component());

// webpack이 가져온 라이브러리를 컴파일 시켜주는 역할.