import { WEBGL } from './webgl'
import ex01Init from './ex01';
import ex02Init from './ex02';
import ex03Init from './ex03';

if (WEBGL.isWebGLAvailable()) {
  // ex01Init();
  // ex02Init();
  ex03Init();
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
