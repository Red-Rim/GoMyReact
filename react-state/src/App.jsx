import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Raphinha",
      profession: "Footballer",
      bio: "Brazilian professional footballer who plays as a winger for FC Barcelona",
      imgSrc: "rapha2.png", 
    },
    show: false,  //if the profile is displayed or not
    time: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() =>
      this.setState((prevState) => ({ time: prevState.time + 1 })), 
    1000);  //update the time every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));  //toggle the show state
  };

  //render the profile if show is true
  render() {
    const { fullName, profession, bio, imgSrc } = this.state.person;
    const { show, time } = this.state;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl mb-4">Profile</h1>
        <button onClick={this.toggleShow} className="bg-blue-600 px-4 py-2 rounded">
          {show ? "Hide" : "Show"}
        </button>

        {show && (
          <div className="mt-4 text-center bg-gray-800 p-6 rounded">
            <img src={imgSrc} className="w-40 h-44 rounded-full mx-auto mb-4" />
            <h2>{fullName}</h2>
            <p className="text-gray-400">{profession}</p>
            <p>{bio}</p>
          </div>
        )}

        <p className="mt-4">Time: {time}s</p>
      </div>
    );
  }
}

export default App;