// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

getUser(1)
  .then((user) => {
    return getRepositories(user.gitHubUsername)
  })
  .then((repos) => {
    return getCommits(repos[0]);
  })
  .then((commit) => {
    console.log(commit);
  })
  .catch((err) => {
    console.log(err);
  })


function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First api get user is calling ');
      resolve({ id: id, gitHubUsername: 'mosh' })
    },2000)
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling second api get Repositories');
      resolve(['repo1', 'repo2', 'repo3']);
    })
  }); 
}

function getCommits(repo, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['commit'])
    }, 2000)
  });
}