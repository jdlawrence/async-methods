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

// getJSONPromise().then(data => {
//   callback(data);
//   return getJSONPromise();
// })
// .then(data => {
//   callback(data);
//   return getJSONPromise();
// })
// .then(data => {
//   callback(data);
//   return getJSONPromise();
// })
// .then(data => {
//   callback(data);
//   return getJSONPromise();
// })
// .then(data => {
//   callback(data);
//   return getJSONPromise();
// });

async function demonstrateAsync() {
  let data;

  for (let i = 0; i < 5; i++) {
    data = await getJSONPromise();
    console.log(data);
    results.push(data);
  }
  console.log('results', results);
}
// demonstrateAsync();


function getJSONGenerator(cb) {
  let fakeJSON = {
    "Jamil": "cool guy"
  };

  let time = Math.random();
  fakeJSON.time = time;

  setTimeout(() => {
    it.next(JSON.stringify(fakeJSON));
  }, time);
}

function *demonstrateGenerator() {
  let data;

  for (let i = 0; i < 5; i++) {
    data = yield getJSONGenerator();
    console.log('data', data);
    results.push(data);
  }
  console.log('results', results);
}

let it = demonstrateGenerator();
it.next();
