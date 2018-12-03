import React, { Fragment } from "react"

const Player = ({ name, filterBy, index, vocation }) => (
  <div className="player">
    <span className="player__index">{index}</span>
    <a className="player__name" href="#">
      {name}
    </a>
    <span className="player__vocation">{getVocationNameById(vocation)}</span>
    <span className="player__filter">{filterBy}</span>
  </div>
)

const getVocationNameById = id => {
  switch (id) {
    case 1:
      return "Sorcerer"
    case 2:
      return "Druid"
    case 3:
      return "Paladin"
    case 4:
      return "Knight"
    case 5:
      return "Master Sorcerer"
    case 6:
      return "Elder Druid"
    case 7:
      return "Royal Paladin"
    case 8:
      return "Elite Knight"
  }
}

export default Player
