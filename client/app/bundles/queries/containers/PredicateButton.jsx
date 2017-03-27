import { connect } from 'react-redux'
import { addPredicate, addToQueryBuilder } from '../actions'
import Button from '../components/Button'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(addPredicate(ownProps.predicate))
    dispatch(addToQueryBuilder(ownProps.predicate))
  }
});

const PredicateButton  = connect(undefined, mapDispatchToProps)(Button);

export default PredicateButton;