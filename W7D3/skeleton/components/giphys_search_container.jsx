import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import GiphysIndex from './giphys_index';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
});


const mapDispatchToProps = dispatch => {
  return {
    fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GiphysIndex);
