import React from "react"
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Line() {
	return (
		<div className="hr-theme-slash-2">
  		<div className="hr-line"></div>
  		<FontAwesomeIcon className="hr-icon" icon={faSquare} style={{color: "#a69587"}}/>
  		<div className="hr-line"></div>
		</div>
	)
}