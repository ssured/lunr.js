module('lunr.trim');

test("trims whitespace", function () {
  equal(lunr.trim(" lunr.js FTW "), "lunr.js FTW", "space is trimmed");
});