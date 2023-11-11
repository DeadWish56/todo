import React, { Component } from "react";

export default class TaskFilter extends Component {
  render() {
    const { onFilter } = this.props
    console.log(this.props)
    return (
        <ul className="filters">
        <li>
          <button className="selected"
                  onClick={ () => {
                    onFilter('all')
                  }}
                  >All</button>
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