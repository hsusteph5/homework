import React from 'react';

import GiphysIndexItem from './giphys_index_item';
import GiphysSearch from './giphys_search';

const GiphysIndex =({giphys, fetchSearchGiphys}) => {
  console.log(giphys);
  return (
    <div>
      <GiphysSearch fetchSearchGiphys={fetchSearchGiphys}/>
      <ul>
        {
          giphys.map((giphy) =>
            (<li><img src={giphy.images.downsized.url}></img></li>)
          )
        }
      </ul>
    </div>
  );
}

export default GiphysIndex;
