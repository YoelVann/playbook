export default class PullRequest{
    constructor(
        title,
        branchName,
        author,
        dateCreated,
        status,
        repositoryNameAssociated
    ){
        this.title = title,
        this.branchName = branchName,
        this.author = author,
        this.dateCreated = dateCreated,
        this.status = status,
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus(){
        return `The status for this branch is: ${ this.status }`;
    }

    getTitleAndAutor(){ 
        return `PR title: ${ this.title }, author: ${ this.author }`;
    }
}