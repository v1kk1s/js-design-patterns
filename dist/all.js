require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsFactoryViewJs = require('../views/factoryView.js');

var _viewsFactoryViewJs2 = _interopRequireDefault(_viewsFactoryViewJs);

var _routerRouter = require('../router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

var RecentController = (function () {
  function RecentController(container) {
    _classCallCheck(this, RecentController);

    this.view = new _viewsFactoryViewJs2['default'](container);
    this.router = new _routerRouter2['default'](document.getElementById('app'));
    this.render();
  }

  _createClass(RecentController, [{
    key: 'initEvents',
    value: function initEvents() {}
  }, {
    key: 'render',
    value: function render() {
      return this.view.render();
    }
  }]);

  return RecentController;
})();

exports['default'] = RecentController;
module.exports = exports['default'];

},{"../router/router":3,"../views/factoryView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginModel = function LoginModel() {
  _classCallCheck(this, LoginModel);

  this.credentials = [{
    username: "admin",
    password: "admin"
  }, {
    username: "vika",
    password: "vika"
  }, {
    username: "z",
    password: "z"
  }];
};

exports["default"] = LoginModel;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersFactoryController = require('../controllers/FactoryController');

var _controllersFactoryController2 = _interopRequireDefault(_controllersFactoryController);

var Router = (function () {
	function Router(container) {
		_classCallCheck(this, Router);

		this.container = container;
		this.content = null;
		this.routes = [];
	}

	_createClass(Router, [{
		key: 'route',
		value: function route(path, content) {
			this.routes[path] = { content: content };
		}
	}, {
		key: 'getCurrentRoute',
		value: function getCurrentRoute() {
			return location.pathname || '/';
		}
	}, {
		key: 'run',
		value: function run() {
			var currentURL = this.getCurrentRoute();
			this.render(currentURL);
		}
	}, {
		key: 'go',
		value: function go(route, convId) {
			var _this = this;

			var stateObj = convId ? { convId: convId } : {};
			this.container.innerHTML = '';

			history.pushState(stateObj, route, route);

			this.routes[route].content.forEach(function (el) {
				return new el(_this.container);
			});
		}
	}, {
		key: 'render',
		value: function render(currentURL, convId) {
			this.route('/', [_controllersFactoryController2['default']]);

			this.go(currentURL, convId);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"../controllers/FactoryController":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function Routes() {
  _classCallCheck(this, Routes);

  this.routes = [{
    title: "Factory",
    link: '/'
  }];
};

exports["default"] = Routes;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FactoryView = (function () {
  function FactoryView(container) {
    _classCallCheck(this, FactoryView);

    this.container = container;
    this.content = null;
  }

  _createClass(FactoryView, [{
    key: 'render',
    value: function render() {

      this.content = '\n\t\t\t<div class="factory" >\n\n\t\t\t</div>\n\t\t';

      this.container.insertAdjacentHTML('beforeend', this.content);
    }
  }]);

  return FactoryView;
})();

exports['default'] = FactoryView;
module.exports = exports['default'];

},{}],"start":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = start;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerRouter = require('./router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

function start() {
	var router = new _routerRouter2['default'](document.getElementById('app'));
	router.run();
}

module.exports = exports['default'];

},{"./router/router":3}]},{},[1,"start",2,3,4,5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9jb250cm9sbGVycy9GYWN0b3J5Q29udHJvbGxlci5qcyIsIi92YXIvd3d3L2Rlc2lnbi1wYXR0ZXJucy1qcy9zcmMvYXBwL21vZGVscy9sb2dpbi5qcyIsIi92YXIvd3d3L2Rlc2lnbi1wYXR0ZXJucy1qcy9zcmMvYXBwL3JvdXRlci9yb3V0ZXIuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9yb3V0ZXIvcm91dGVzLmpzIiwiL3Zhci93d3cvZGVzaWduLXBhdHRlcm5zLWpzL3NyYy9hcHAvdmlld3MvZmFjdG9yeVZpZXcuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O2tDQ0FpQix5QkFBeUI7Ozs7NEJBQ3ZCLGtCQUFrQjs7OztJQUVoQixnQkFBZ0I7QUFDdkIsV0FETyxnQkFBZ0IsQ0FDdEIsU0FBUyxFQUFFOzBCQURMLGdCQUFnQjs7QUFFakMsUUFBSSxDQUFDLElBQUksR0FBRyxvQ0FBUyxTQUFTLENBQUMsQ0FBQztBQUNoQyxRQUFJLENBQUMsTUFBTSxHQUFHLDhCQUFXLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxRQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDZjs7ZUFMa0IsZ0JBQWdCOztXQU96QixzQkFBRyxFQUNaOzs7V0FFTSxrQkFBRztBQUNSLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUMzQjs7O1NBWmtCLGdCQUFnQjs7O3FCQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7OztJQ0hoQixVQUFVLEdBRWxCLFNBRlEsVUFBVSxHQUVmO3dCQUZLLFVBQVU7O0FBRzNCLE1BQUksQ0FBQyxXQUFXLEdB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QUFDLEdBQUcsRUFBRSxDQUFDO0NBQ2IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlld3MvZmFjdG9yeVZpZXcuanMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi9yb3V0ZXIvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjZW50Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyhjb250YWluZXIpO1xuICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBpbml0RXZlbnRzKCkge1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3LnJlbmRlcigpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Nb2RlbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IFtcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiYWRtaW5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcm5hbWU6IFwidmlrYVwiLFxuICAgICAgICBwYXNzd29yZDogXCJ2aWthXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiBcInpcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwielwiXG4gICAgICB9XG4gICAgXTtcbiAgfVxufSIsImltcG9ydCBGYWN0b3J5IGZyb20gJy4uL2NvbnRyb2xsZXJzL0ZhY3RvcnlDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdFx0dGhpcy5yb3V0ZXMgPSBbXTtcblx0fVxuXG5cdHJvdXRlIChwYXRoLCBjb250ZW50KSB7XG5cdFx0dGhpcy5yb3V0ZXNbcGF0aF0gPSB7Y29udGVudDogY29udGVudH07XG5cdH1cblxuXHRnZXRDdXJyZW50Um91dGUoKSB7XG5cdFx0cmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcblx0fVxuXG5cdHJ1biAoKSB7XG5cdFx0bGV0IGN1cnJlbnRVUkwgPSB0aGlzLmdldEN1cnJlbnRSb3V0ZSgpO1xuXHRcdHRoaXMucmVuZGVyKGN1cnJlbnRVUkwpO1xuXHR9XG5cblx0Z28ocm91dGUsIGNvbnZJZCkge1xuXHRcdGxldCBzdGF0ZU9iaiA9IGNvbnZJZCA/IHtjb252SWQ6IGNvbnZJZH0gOiB7fTtcblx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUw9ICcnO1xuXG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoc3RhdGVPYmosIHJvdXRlLCByb3V0ZSk7XG5cblx0XHR0aGlzLnJvdXRlc1tyb3V0ZV0uY29udGVudC5mb3JFYWNoKCAoZWwpID0+IHtcblx0XHRcdHJldHVybiAobmV3IGVsKHRoaXMuY29udGFpbmVyKSk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmVuZGVyIChjdXJyZW50VVJMLCBjb252SWQpIHtcblx0XHR0aGlzLnJvdXRlKCcvJywgW0ZhY3RvcnldKTtcblxuXHRcdHRoaXMuZ28oY3VycmVudFVSTCwgY29udklkKTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZhY3RvcnlcIixcbiAgICAgICAgbGluazogJy8nXG4gICAgICB9LFxuICAgIF07XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGYWN0b3J5VmlldyB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHRoaXMuY29udGVudCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJmYWN0b3J5XCIgPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG4gICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNvbnRlbnQgKTtcbiAgfVxufSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQgKCkge1xuXHRsZXQgcm91dGVyID0gbmV3IFJvdXRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXHRyb3V0ZXIucnVuKCk7XG59Il19

//# sourceMappingURL=all.js.map