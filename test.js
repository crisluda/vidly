console.log("Before");

getUser(1,getuser)
function displayCommit(commit) {

}
function getRepo(repos) {
  console.log("repos",repos);
}
function getuser(user) {
    console.log("user",user);
    getRepositories(user.gitHubUsername,getRepo)
}

console.log("after");

function getUser(id,callback) {
  setTimeout(()=>{
    console.log("reading user from a database...");
    callback({id:id,gitHubUsername:"luda"})
  },200);
}
function getRepositories(gitHubUsername,callback) {
  setTimeout(()=>{
    callback(["repo1","repo2","repo3"])
  },200)

}
