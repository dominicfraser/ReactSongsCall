import React from 'react';
import Header from '../components/Header'
import SongList from '../components/SongList'

class ChartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {songs: []}
  }

  render(){
    return (
        <div>
          <Header heading="Itunes Top 20"/>
          <SongList songs={this.state.songs}/>
        </div>
      )
  }
  

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.addEventListener('load', () => {
      if(request.status !== 200) return

      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.setState({songs: data.feed.entry})
    })
    request.send()
  }

}

export default ChartContainer