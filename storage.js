const fs = require("fs");


// a function to saves json to a file
function saveJson(collection, json) {
    
    // convert the json to a string
    let jsonStr = JSON.stringify(json);

    // write the json string to the file
    fs.writeFileSync("./" + collection + ".json", jsonStr);
}

// a function to read json from a collection
function readJson(collection) {
    
    // read the json string from the file
    let jsonStr = fs.readFileSync("./" + collection + ".json");
  
    if(!jsonStr)
      return null;

    // parse json
    try {

        let json = JSON.parse(jsonStr);

        return json;

    } catch(err) {
        return err;
    }
    
}

module.exports.saveJson = saveJson;

module.exports.readJson = readJson;