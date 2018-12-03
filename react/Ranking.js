import React, { Component, Fragment } from "react"
import Player from "./Player"

class Ranking extends Component {
  state = {
    options: {
      filterBy: "level",
      orderBy: "DESC",
      page: 1,
      limit: 5
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
    const result = await raw.json()

    const { data: players, maxRows } = result

    this.setState({
      players,
      maxRows
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

  handlePageChange = async page => {
    let { options, maxRows } = this.state
    switch (page) {
      case "next":
        options.page++
        await this.setState({
          options
        })
        break

      case "prev":
        options.page--
        await this.setState({
          options
        })
        break
    }
    this.getPlayers()
  }

  render() {
    const { players, options, maxRows } = this.state
    const { filterBy, orderBy } = options
    const { handleOptionChange, handlePageChange } = this

    console.log(maxRows)
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
          players.map((player, i) => (
            <Player
              key={player.id}
              {...player}
              index={(options.page - 1) * options.limit + i + 1}
              filterBy={player[filterBy]}
            />
          ))}
        <span onClick={() => handlePageChange("prev")}>previous</span>
        <span onClick={() => handlePageChange("next")}> next</span>
      </div>
    )
  }
}

export default Ranking
