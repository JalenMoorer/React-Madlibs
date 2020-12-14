import { connect } from 'react-redux';
import { updateFieldAnswers, clearFieldAnswer, resetFields } from '../madlibs';

import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  updateFieldAnswers,
  clearFieldAnswer,
  resetFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
