//const game = require("./steamworldHeist.json");

const loadJSON = (file, callback) => {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.onreadystatechange = () => {

    if (xobj.readyState === 4 && xobj.status === 200) {
      // Required use of an anonymous callback 
      // as .open() will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.open("GET", file, true);

  xobj.send(null);
};

const init = (callback) => {
  loadJSON("steamworldHeist.json", (response) => {
    // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    // return first key
    callback(actual_JSON[Object.keys(actual_JSON)[0]].data);
  });
};