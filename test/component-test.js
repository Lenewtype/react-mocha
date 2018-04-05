require('./dom-mock')('<html><body></body></html>');


var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-dom/test-utils');

describe('Testing my div', function() {
	jsdom({ skipWindowCheck : true});

	it('should contain text: You made a simple component!', function() {
		var SimpleComponent = require('../components/SimpleComponent.jsx');
		var myDiv = TestUtils.renderIntoDocument(
			<SimpleComponent />
		);

		var divText = TestUtils.findRenderedDOMComponentWithTag(SimpleComponent, 'span');

		assert.equal(divText.textContent, 'You made a simple component!');
	})
})