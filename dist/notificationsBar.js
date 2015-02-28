(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	factory((global.NotificationsBar = {}), global.React)
}(this, function (exports, React) { 'use strict';

	var NotificationsBar = React['default'].createClass({
		render: function () {
		}
	});

	exports['default'] = NotificationsBar;

}));