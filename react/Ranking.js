import React, { Component, Fragment } from "react"
import Player from "./Player"

class Ranking extends Component {
  state = {
    options: {},
    players: []
  }

  async componentDidMount() {
    const { options } = this.state
    const raw = await fetch(`/api/players?options=${this.getUrlConvertedFromJson(options)}`)
    const players = await raw.json()

    this.setState({
      players: players.data
    })
  }

  getUrlConvertedFromJson = data => {
    return Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
      })
      .join("&")
  }

  render() {
    const { players } = this.state
    console.log(this.state)

    if (!players.length) {
      return null
    }

    return (
      <div className="ranking">
        <h1>Highscores</h1>

        {players && players.map((player, i) => <Player key={player.id} {...player} index={i + 1} />)}
      </div>
    )
  }
}

export default Ranking
