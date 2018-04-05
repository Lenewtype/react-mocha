var React = require('react');

class SimpleComponent extends React.Component {
	render () {
		return (
			<div className="first-component">
				You made a simple component!
			</div>
		)
	}
};

module.exports = SimpleComponent