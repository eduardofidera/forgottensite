import React, { Fragment } from "react"

const Player = ({ name, level, index }) => (
  <div className="player">
    <span className="player__index">{index}</span>
    <a className="player__name" href="#">
      {name}
    </a>
    <span className="player__level">{level}</span>
    <span className="player__vocation" />
  </div>
)

export default Player
