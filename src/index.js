import _ from 'lodash'
import $ from 'jquery'
import foo from './foo'
function component() {
  var element = $('<div></div>');

  // Lodash, now imported by this script
  element.html(_.join(['Hello','webpack'], ' '))
  return element.get(0);
}

document.body.appendChild(component());
console.log(foo.hi())
console.log(foo.cat)