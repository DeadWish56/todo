import React, { Component } from "react";

export default class TaskFilter extends Component {
  render() {
const style = {
  color: 'red',
}

    return (
        <ul className="filters">
        <li>
          <button className="selected" style = {style}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    )
  }
}

// export default function TaskFilter () {
//     return (
//         <ul className="filters">
//         <li>
//           <button className="selected">All</button>
//         </li>
//         <li>
//           <button>Active</button>
//         </li>
//         <li>
//           <button>Completed</button>
//         </li>
//       </ul>
//     )
// }