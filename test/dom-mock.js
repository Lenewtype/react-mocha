module.exports = function(markup) {
	if(typeof document !== 'undefined') return;

	var jsdom = require('jsdom');
	const doc = new jsdom.JSDOM(markup || '');
	const win = doc.window;

	global.document = win.document;
	global.window = win;
	global.navigator = {
		userAgent: 'node.js'
	};
};