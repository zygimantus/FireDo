var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
  id: "FireDo",
  label: "FireDo",
  icon: {
    16: './flame-16.png',
    32: './flame-32.png',
    64: './flame-64.png'
  },
  badge: "D",
  badgeColor: "#00AABB",
  onChange: makeFireDo
});

function makeFireDo(state) {
  if (state.checked) {
    button.badge = "A";
    button.badgeColor = "#AA00BB";
  } else {
    button.badge = "D";
    button.badgeColor = "#00AABB";
  }
}
