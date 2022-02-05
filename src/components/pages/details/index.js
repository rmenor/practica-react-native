import {connect} from 'react-redux';
import Component from './view';

const mapStateToProps = state => {
  return {
    people: state.people.item,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const connectConfigured = connect(mapStateToProps, mapDispatchToProps);

const ConnectedComponent = connectConfigured(Component);

export default ConnectedComponent;
