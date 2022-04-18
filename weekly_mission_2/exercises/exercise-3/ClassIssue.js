export default class Issue{
    constructor(
        title,
        repositoryNameAssociated,
        status,
        numberOfCommits,
        labels,
        author,
        lastUpdated
    ){
        this.title = title,
        this.repositoryNameAssociated = repositoryNameAssociated,
        this.status = status,
        this.numberOfCommits = numberOfCommits,
        this.labels = labels,
        this.author = author,
        this.dateCreated = new Date(),
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor(){
        return `Issue name: ${ this.title }, Author: ${ this.author }`;
    }

    getGeneralInfo(){
        return `This issue was created by ${ this.author } on ${ this.dateCreated }, status: ${ this.status }`;
    }
}