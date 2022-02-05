import {connect} from 'react-redux';
import * as peopleActions from '../../../redux/people/actions';
import Component from './view';

const mapStateToProps = state => {
  return {
    loading: state.people.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(peopleActions.postPeople(data)),
  };
};

const connectConfigured = connect(mapStateToProps, mapDispatchToProps);

const ConnectedComponent = connectConfigured(Component);

export default ConnectedComponent;
