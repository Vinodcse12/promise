// If one of promise get rejected then we will not get result from other also
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('first api call like facebook');
    //resolve(1);
    reject(new Error('Rejected'));
  }, 2000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('second api call like tiwtter api');
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })