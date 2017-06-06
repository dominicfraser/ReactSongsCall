import React from 'react';

const Song = function(props){

return (
  <li className='song-detail'>
    <p>{props.position}:</p>
    <p>Title: {props.title}</p>
    <p>Artist: {props.artist}</p>
  </li>
  )

}

export default Song