import React, { Component } from "react";
import Chance from "chance";
const chance = new Chance();

const pyramid = arr => {
  var newArr = [];
  arr.sort(function(a, b) {
    return a.value > b.value ? 1 : -1;
  });
  newArr.push(arr.pop());
  while (arr.length) {
    newArr[arr.length % 2 === 0 ? "push" : "unshift"](arr.pop());
  }
  return newArr;
};

const buildBlocks = len => {
  let res = [];
  for (let i = 0; i < 5; i++) {
    res.push(
      <div
        key={i}
        className={`skill-block rated-cell-${len} ${i > len && "empty"}`}
      />
    );
  }
  return res;
};
class UserDetails extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.user) {
      console.log("xxx");
      let tshape = { ...this.props.user };
      //tshape.
      let num0 = 0;
      let num1 = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      let temp = Object.keys(tshape).map(el => {
        switch (tshape[el]) {
          case 0:
            num0 = +num0;
            break;
          case 1:
            num1 = +num1;
            break;
          case 2:
            num2 = +num2;
            break;
          case 3:
            num3 = +num3;
            break;
          case 4:
            num4 = +num4;
            break;
          case 5:
            num5 = +num5;
            break;
          default:
            break;
        }
        return el !== "name" && { name: el, value: tshape[el] };
      });
      temp = temp.filter(el => el);
      tshape = pyramid(temp);
      this.setState({ tshape });
    }
  }
  render() {
    return this.props.user ? (
      <div className="user-details-container">
        <div className="details-actions-container u-margin-bottom">
          <h3 className="title">{this.props.user.name}</h3>
          <div className="btn" onClick={this.props.handleClose}>
            Close
          </div>
        </div>
        <div className="static-info">
          <div className="text-static-info">
            <div className="info-row">
              <label>
                Location:
                <span>JDIS</span>
              </label>
            </div>
            <div className="info-row">
              <label>
                Current Project:
                <span>OM</span>
              </label>
            </div>
            <div className="info-row">
              <label>
                Project Start Date:
                <span>{chance.date({ string: true })}</span>
              </label>
            </div>
            <div className="info-row">
              <label>
                Manager:
                <span>{chance.name()}</span>
              </label>
            </div>
          </div>
          <div className="image-static-info">
            <img
              className="profile-img"
              src={require("../img/male-profile.jpg")}
              alt=" "
            />
          </div>
        </div>
        <div className="shape-container">
          <div className="title">
            Knowledge Shape<span>Original</span>
          </div>
          <div className="spin-container">
            <div className="detail-grid-container">
              {Object.keys(this.props.user).map(el => {
                return (
                  el !== "name" && (
                    //this.props.user[el] > 0 &&
                    <div key={el} className={`user-detail-row `}>
                      <span
                        className={`skill-name ${this.props.user[el] === 0 &&
                          "none"}`}
                      >
                        {el}
                      </span>
                      {buildBlocks(this.props.user[el])}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="shape-container">
          <div className="title">
            Knowledge Shape<span>T-shifted</span>
          </div>
          <div className="spin-container">
            <div className="detail-grid-container">
              {this.state.tshape &&
                this.state.tshape.map(el => {
                  return (
                    //this.props.user[el] > 0 &&
                    <div key={el.name} className={`user-detail-row `}>
                      <span
                        className={`skill-name ${el.value === 0 && "none"}`}
                      >
                        {el.name}
                      </span>
                      {buildBlocks(el.value)}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="user-details-container"> No User Selected</div>
    );
  }
}

export default UserDetails;
