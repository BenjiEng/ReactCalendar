class Label extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.label}</h3>
      </div>
    );
  }
}

Label.propTypes = {
  label: React.PropTypes.string
};
