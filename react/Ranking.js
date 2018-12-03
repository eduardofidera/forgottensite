import React, { Component, Fragment } from "react"
import Player from "./Player"

class Ranking extends Component {
  state = {
    options: {
      filterBy: "level",
      orderBy: "DESC"
    },
    players: []
  }

  componentDidMount() {
    this.getPlayers()
  }

  getUrlConvertedFromJson = data => {
    return Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
      })
      .join("&")
  }

  getPlayers = async () => {
    const { options } = this.state
    const raw = await fetch(`/api/players?${this.getUrlConvertedFromJson(options)}`)
    const players = await raw.json()

    this.setState({
      players: players.data
    })
  }

  handleOptionChange = (option, e) => {
    let { options } = this.state
    options[option] = e.target.value
    this.setState({
      options
    })

    this.getPlayers()
  }

  render() {
    const { players, options } = this.state
    const { filterBy, orderBy } = options
    const { handleOptionChange } = this

    if (!players.length) {
      return null
    }

    return (
      <div className="ranking">
        <h1>Highscores</h1>
        <select name="ranking__filter" value={filterBy} onChange={e => handleOptionChange("filterBy", e)}>
          <option value="level">Level</option>
          <option value="maglevel">Magic Level</option>
          <option value="shielding">Shielding</option>
        </select>
        <select name="ranking__order" value={orderBy} onChange={e => handleOptionChange("orderBy", e)}>
          <option value="DESC">DESC</option>
          <option value="ASC">ASC</option>
        </select>
        <p className="ranking__header">
          <span className="header__index">#</span>
          <span className="header__name">name</span>
          <span className="header__vocation">vocation</span>
          <span className="header__filter">{filterBy}</span>
        </p>
        {players &&
          players.map((player, i) => <Player key={player.id} {...player} index={i + 1} filterBy={player[filterBy]} />)}
      </div>
    )
  }
}

export default Ranking
