function getJSON(cb) {
  let fakeJSON = {
    "Jamil": "cool guy"
  };

  let time = Math.random();
  fakeJSON.time = time;
  setTimeout(() => {
    cb(JSON.stringify(fakeJSON)); 
  }, time);
}

const callback = (data) => {
  console.log(`data is ${data}`);
};

getJSON(callback);