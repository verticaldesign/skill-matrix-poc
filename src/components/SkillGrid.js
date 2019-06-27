import React, { Component } from "react";
import Chance from "chance";
import UserDetails from "./UserDetails";

const chance = new Chance();
const generateGridData = colHeaders => {
  const numOfUsers = 30;
  let result = [];
  let totalRow = {};
  for (var i = 0; i < numOfUsers; i++) {
    let newobj = {};
    colHeaders.forEach(el => {
      if (totalRow[el] === undefined) {
        totalRow[el] = 0;
      }
      const temp = chance.natural({ min: 0, max: 15 });
      const x = temp > 5 ? 0 : temp;
      newobj[el] = x;
      totalRow[el] = totalRow[el] + x;
      newobj.name = chance.name();
      return newobj;
    });
    result.push(newobj);
  }

  totalRow.name = "Total";
  result.unshift(totalRow);
  return result;
};

class SkillGrid extends Component {
  state = {
    gridData: [],
    colHeaders: [
      "SAP",
      "SQL",
      "MongoDB",
      "Spring Boot",
      "Java",
      "REST",
      "Web Tech",
      "NPM",
      "Node",
      "WebPack",
      "Javascript",
      "React",
      "Angular",
      "Vue",
      "jQuery",
      "SCSS",
      "LESS",
      "Bootstrap 3+",
      "CSS"
    ]
  };
  componentDidMount() {
    const gridData = generateGridData(this.state.colHeaders);
    this.setState({ gridData });
  }
  showDetails = user => {
    this.setState({ selectedUser: user, showDetails: true });
  };
  handleDetailsClose = () => {
    this.setState({ showDetails: false });
  };

  render() {
    const renderTotalCell = row => {
      const total = Object.keys(row).reduce((acc, cur) => {
        return cur !== "name" ? row[cur] + acc : acc;
      }, 0);
      const cn = total > 5 ? (total > 10 ? (total > 15 ? 5 : 4) : 3) : 1;
      return <td className={`rated-cell-${cn}`}>{total > 99 ? "" : total}</td>;
    };
    return (
      <div>
        <div className="page-header">
          <h2 className="title">People Grid</h2>
          <div>
            <label>
              Group:
              <select>
                <option>Sales Center</option>
                <option>OM</option>
              </select>
            </label>
            <label className="u-margin-left">
              Category View:
              <select>
                <option>Technologies</option>
                <option>Soft Skills</option>
              </select>
            </label>
          </div>
        </div>
        <div className="page-content">
          <div className="grid-container">
            <div className="grid-header-row">
              <div
                className="skill-grid-header-cell placeholder-cell"
                style={{ width: "161px" }}
              />
              <div className={`skill-grid-header-cell`}>
                <div className="vertical-header ">Total</div>
              </div>
              {this.state.colHeaders.map((col, index) => {
                return (
                  <div className={`skill-grid-header-cell`} key={index}>
                    <div className="vertical-header ">{col}</div>
                  </div>
                );
              })}
            </div>
            <table className="grid-rating">
              <tbody>
                {this.state.gridData.map((row, index) => {
                  return (
                    <tr key={index}>
                      <td
                        className="grid-name"
                        onClick={() => this.showDetails(row)}
                      >
                        {row.name}
                      </td>
                      {renderTotalCell(row)}

                      {Object.keys(row).map(el => {
                        return (
                          el !== "name" && (
                            <td key={el} className={`rated-cell-${row[el]}`}>
                              {row[el] > 0 && row[el]}
                            </td>
                          )
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className={`overlay ${this.state.showDetails && "showing"}`} />
          <div
            className={`user-details ${this.state.showDetails && "showing"}`}
          >
            <UserDetails
              user={this.state.selectedUser}
              handleClose={this.handleDetailsClose}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SkillGrid;
