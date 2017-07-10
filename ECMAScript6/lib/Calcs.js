
//由calc编译成es5得到,指令为:traceur --script Calc.js --out Calcs.js
var Calc = function() {
  "use strict";
  function Calc() {
    console.log('Calc constructor');
  }
  return ($traceurRuntime.createClass)(Calc, {add: function(a, b) {
      return a + b;
    }}, {});
}();
var c = new Calc();
console.log(c.add(2, 3));
