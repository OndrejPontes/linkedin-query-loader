import { connect } from 'react-redux'
import { updateQuery, deleteQuery, toggleModal} from '../actions'

const mapStateToProps = (state) => ({
  queries: state.queries.items
});

const mapDispatchToProps = {
  updateQuery: updateQuery,
  deleteQuery: deleteQuery,
  toggleModal: toggleModal
};

// const Keywords = connect(mapStateToProps, mapDispatchToProps)();

export default Keywords;
