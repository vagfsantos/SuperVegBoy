'use strict';

var _GameEngine = require('./../dist/GameEngine.js');

var _GameEngine2 = _interopRequireDefault(_GameEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  console.log(_GameEngine2.default);
};

new Main();