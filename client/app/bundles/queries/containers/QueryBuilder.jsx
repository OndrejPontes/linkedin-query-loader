import { connect } from 'react-redux'
import { toggleModal, openLinkedIn, copyQuery } from '../actions'
import Input from '../components/Input'

const mapStateToProps = (state) => ({
  queryBuilder: state.queryBuilder,
  query: state.query
});

const mapDispatchToProps = {
  toggleCreateQuery: toggleModal,
  openLinkedIn: openLinkedIn,
  copyQuery: copyQuery
};

const QueryBuilder = connect(mapStateToProps, mapDispatchToProps)(Input);

export default QueryBuilder;