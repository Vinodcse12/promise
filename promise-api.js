const promise_with_resolve = Promise.resolve({ id: 1});

promise_with_resolve.then(res => console.log(res));

const promise_with_reject = Promise.reject(new Error('reason for reject ...'));

promise_with_reject.catch(err => console.log(err));