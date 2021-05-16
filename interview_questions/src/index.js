
var buttonClickCount = 0;

const buttonClickCounterEl = $("#button_click_counter");
const increaseBtn = $("#increase_button");

increaseBtn.click(() => {
  ++buttonClickCount;
  buttonClickCounterEl.text(buttonClickCount);
});

const start = $("#startArray");
const stop = $("#stopArray");
var interval;
var arr = ["a", "b", "c"];

start.click(() => {
  interval = setInterval(myTimer, 1000);
});

function myTimer() {
  $("#array").append(arr + "_");
  arr.unshift(arr.pop());
}

stop.click(() => {
  clearInterval(interval);
});

/*
let group = {
  title: "Our Players",
  players: ["John", "Pete", "Alice"],

  showList() {
    this.players.forEach(function (player) {
      alert(this.title + ": " + player);
    });
  }
};

group.showList();
*/

/*
let group = {
  title: "Our Players",
  players: ["John", "Pete", "Alice"],

  showList() {
    this.players.forEach(
      function (player) {
        alert(this.title + ": " + player);
      }.bind(this)
    );
  }
};

group.showList();
*/

/*
let group = {
  title: "Our Players",
  players: ["John", "Pete", "Alice"],

  showList() {
    this.players.forEach((player) => {
      alert(this.title + ": " + player);
    });
  }
};


group.showList();
*/
