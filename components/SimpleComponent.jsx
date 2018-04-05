var React = require('react');

class SimpleComponent extends React.Component {
	render () {
		return (
			<div className="first-component">
				<span>You made a simple component!</span>
			</div>
		)
	}
};

module.exports = SimpleComponent