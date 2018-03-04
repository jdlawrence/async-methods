function getJSON(cb) {
  // Our JSON object to be passed to the callback
  let fakeJSON = {
    "Jamil": "cool guy"
  };

  // Simulating some random amount of time to completion for our asynchronous function
  // Also we add the time to the fakeJSON object so that we can differentiate
  // each invocation
  let time = Math.random();
  fakeJSON.time = time;

  setTimeout(() => {
    cb(JSON.stringify(fakeJSON));
  }, time);
}



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




// createLogger returns a function with clojure over the results array
// When the returned function has been called five times, we log the result
const createLogger = () => {
  let results = [];

  return (data) => {
    results.push(data);
    if (results.length >= 5) {
      console.log('results are', results);
    }
  };
};

const logData = createLogger();

// Logs something like:
/*
results are [ '{"Jamil":"cool guy","time":0.833740596226406}',
'{"Jamil":"cool guy","time":0.8789151526112358}',
'{"Jamil":"cool guy","time":0.019798040543230533}',
'{"Jamil":"cool guy","time":0.4729462050942326}',
'{"Jamil":"cool guy","time":0.9870582160353376}',
'{"Jamil":"cool guy","time":0.4860649104312529}' ]
*/





// getJSON((data) => {
//   logData(data);
//   getJSON((data) => {
//     logData(data);
//     getJSON((data) => {
//       logData(data);
//       getJSON((data) => {
//         logData(data);
//         getJSON((data) => {
//           logData(data);
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

function callLogDataPromise(data) {
  logData(data);
  return getJSONPromise();
}

getJSONPromise()
  .then(callLogDataPromise)
  .then(callLogDataPromise)
  .then(callLogDataPromise)
  .then(callLogDataPromise)
  .then(callLogDataPromise);

// // Or with a loop:
let callPromise = getJSONPromise();

for(let i = 0; i < 5; i++) {
  callPromise.then(callLogDataPromise);
}




function getJSONPromiseAll() {
  let promiseArr = [];

  for (let i = 0; i < 5; i++) {
    promiseArr.push(getJSONPromise());
  }
  Promise.all(promiseArr).then(values => {
    console.log(values);
  });
}

// getJSONPromiseAll();



async function getJSONAsync(cb) {
  let data = await getJSONPromise();
  cb(data);
}


getJSONAsync(logData);
getJSONAsync(logData);
getJSONAsync(logData);
getJSONAsync(logData);
getJSONAsync(logData);

// Or, with a loop:
for (let i = 0; i < 5; i++) {
  getJSONAsync(logData);
}














function getJSONGenerator(gen, cb) {
  let fakeJSON = {
    "Jamil": "cool guy"
  };

  let time = Math.random();
  fakeJSON.time = time;

  setTimeout(() => {
    const it = gen(JSON.stringify(fakeJSON));
    cb(it.next().value);
  }, time);
}


function* gen(val) {
  yield val;
}

// getJSONGenerator(gen, logData);
// getJSONGenerator(gen, logData);
// getJSONGenerator(gen, logData);
// getJSONGenerator(gen, logData);
// getJSONGenerator(gen, logData);

// Or, with a loop:
for (let i = 0; i < 5; i++) {
  getJSONGenerator(gen, logData);
}




















