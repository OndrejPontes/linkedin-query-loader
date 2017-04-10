import { connect } from 'react-redux'
import { toggleCreateModal, openLinkedIn, copyQuery, queryBuilderOnChange, prepareToCopy } from '../actions'
import Input from '../components/Input'

const mapStateToProps = (state) => ({
  queryBuilder: state.queryBuilder,
  query: state.query
});

const mapDispatchToProps = {
  toggleCreateModal,
  openLinkedIn,
  copyQuery,
  queryBuilderOnChange,
  prepareToCopy
};

const QueryBuilder = connect(mapStateToProps, mapDispatchToProps)(Input);

export default QueryBuilder