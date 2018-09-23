const params = {
  "falseGames": [
    "610340", "244830", "236890"
  ]
};

const isValidGame = (response, appId) => {
  try {
    return (
      !params.falseGames.includes(appId) &&
      response.success &&
      response.data && 
      response.data.type === "game" &&
      !response.data.release_date.coming_soon
    );
  } catch (e) {
    console.log("Error :", e);
  } 
  return false;
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