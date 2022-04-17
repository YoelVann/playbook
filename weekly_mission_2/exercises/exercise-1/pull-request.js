const PullRequest = {
    title: "First PR",
    branchName: "main",
    author: "YoelVann",
    dateCreated: "16 April 2022",
    status: "PENDING",
    repositoryNameAssociated: "Playbook",
    getStatus: function(){
        return `The status for this branch is: ${ this.status }`
    },
    getTitleAndAutor: function(){ 
        return `PR title: ${ this.title }, author: ${ this.author }`
    }
}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAutor())