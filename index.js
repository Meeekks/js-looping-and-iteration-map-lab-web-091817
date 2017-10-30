// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(element) {
    const elementSplit = element.split(" ");
    const newArray = Object.assign({}, {firstName: elementSplit[0]}, {lastName: elementSplit[1]})
    return newArray;
  });
}

function attributesToPhrase(array) {
  return array.map(function(element) {
    return `${element["name"]} is from ${element["hometown"]}`;
  });
}
