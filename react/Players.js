import React, { Fragment } from 'react'

class Players extends React.Component {
  state = {
    players: [],
  }

  async componentDidMount() {
    const raw = await fetch('/api/players')
    const players = await raw.json()

    this.setState({
      players: players.data,
    })
  }

  render() {
    const { players } = this.state
    return (
      <Fragment>
        <h1>Players</h1>
        {players
          ? players.map(player => (
              <Fragment>
                <h2>{player.name}</h2>
                <p>level: {player.level}</p>
              </Fragment>
            ))
          : 'no players'}
      </Fragment>
    )
  }
}

export default Players
