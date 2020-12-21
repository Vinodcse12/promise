
// getUser(1)
//  .then(user => getRepositories(user.gitHubUsername))
//  .then(repos => getCommits(repos[0]))
//  .then(commits => console.log(commits))
//  .catch(err => console.log(err.message));

async function getUserCommits() {
  console.log('sfdsdf')
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commit = await getCommits(repos[0]);
    console.log(commit);
  } 
  catch(err) {
    console.log(err.message);
  }
};


getUserCommits();


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