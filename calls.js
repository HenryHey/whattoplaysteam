const params = {
  "falseGames": [
    "610340"
  ]
};

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

const getAllApps = (callback) => {
  loadJSON("all.json", (response) => {
    // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    // return first key
    callback(actual_JSON);
  });
};