The Promise is Object representation that it will complete, either result will true(complete) or false of asynchronous operation will give the result

- Some calls may be delay by its not require the network call, some other way promise can be useful

### Usage

- File access
- DataBase request
- Data calculation
- password encryption

Note: `BlueBird` and `Q` library were used by developer, to get the functionality like current day promise.

- After ES6, Promise were introduced inside the Javascript with more functionality, where is memory consumption were too high as well the performance were low. However, after update it resolved a lot.

## Creating a Promise

- we are storing the promise inside the variable, for understanding

```Javascript
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // See Usage for more info
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed")
})

// Once the Async operation is completed, It will call the resolve and get the message "Promise Consumed"
```

- However, we can directly use `.then` to the promise to execute the task. we do not have to store them into the variable

```Javascript
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async operation 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 is completed");
});

```

- we can pass the data to the resolve and access it later.

```Javascript
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Operation 3");
    resolve({ userName: "Javascript", email: "Javascript@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
```

- we can do the error handling in this promise, as if the promise has the error and promise does not have the error. It will create the callback hell.

```Javascript
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "Harshil", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or reject"));

```

- We can handle the promise with the `async` and `await`, It has the different syntax but same functionality

```Javascript
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ userName: "Harshil", password: 123 });
    } else {
      reject("I got the error");
    }
  }, 1000);
});

const consumePromiseFive = async function () {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();
```
