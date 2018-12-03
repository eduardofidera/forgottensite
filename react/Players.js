import React, { Fragment } from "react"

import Player from "./Player"

class Players extends React.Component {
  state = {
    players: []
  }

  async componentDidMount() {
    const raw = await fetch("/api/players")
    const players = await raw.json()

    this.setState({
      players: players.data
    })
  }

  render() {
    const { players } = this.state
    return (
      <Fragment>
        <h1>Players</h1>
        {players ? players.map(player => <Player key={player.id} {...player} />) : "no players"}
      </Fragment>
    )
  }
}

export default Players
