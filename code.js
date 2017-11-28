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
  results.push(data);
  if (results.length >= 5) {
    console.log('results are', results);
  }
};

// getJSON((data) => {
//   callback(data);
//   getJSON((data) => {
//     callback(data);
//     getJSON((data) => {
//       callback(data);
//       getJSON((data) => {
//         callback(data);
//         getJSON((data) => {
//           callback(data);
//           getJSON(callback);
//         });
//       });
//     });
//   });
// });

function getJSONPromise() {
  return new Promise((resolve, reject) => {
    let fakeJSON = {
      "Jamil": "cool guy"
    };

    let time = Math.random();
    fakeJSON.time = time;

    setTimeout(() => {
      resolve(JSON.stringify(fakeJSON));
    }, time);
  });
}

getJSONPromise().then(data => {
  callback(data);
  return getJSONPromise();
})
.then(data => {
  callback(data);
  return getJSONPromise();
})
.then(data => {
  callback(data);
  return getJSONPromise();
})
.then(data => {
  callback(data);
  return getJSONPromise();
})
.then(data => {
  callback(data);
  return getJSONPromise();
});
  