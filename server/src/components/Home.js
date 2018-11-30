import React, { Fragment } from "react"

export default class Home extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    fetch("/api/players")
      .then(res => {
        return res.json()
      })
      .then(data => {
        const { data: players } = data
        this.setState({
          players
        })
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
          : "no players"}
      </Fragment>
    )
  }
}
