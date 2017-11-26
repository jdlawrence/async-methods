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
let results = [];
const callback = (data) => {
  // console.log(`data is ${data}`);
  results.push(data);
  console.log('results are', results);
};

getJSON((data) => {
  callback(data);
  getJSON((data) => {
    callback(data);
    getJSON((data) => {
      callback(data);
      getJSON((data) => {
        callback(data);
        getJSON((data) => {
          callback(data);
          getJSON(callback);
        });
      });
    });
  });
});