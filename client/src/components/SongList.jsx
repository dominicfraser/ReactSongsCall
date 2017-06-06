import React from 'react';
import Song from './Song.jsx'

const SongList = function(props){

  const songNodes = props.songs.map((song, index) => {
    return (
      <Song position={index+1} key={song.id.attributes["im:id"]} title={song["im:name"].label} artist={song["im:artist"].label}>
      </Song>
      )
  })

  return (
    <ul className='song-list'>
      {songNodes}
    </ul>
    )
}



export default SongList
