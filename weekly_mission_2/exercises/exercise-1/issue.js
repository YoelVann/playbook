const Issue = {
    title: "06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "Playbook",
    status: "OPEN",
    numberOfComments: 27,
    labels: ['Semana-2','Finalizado', 'Próximo live'],
    author: "carlogilmar",
    dateCreated: "12 April 2022",
    lastUpdated: "16 April 2022",
    getTitleAndAuthor: function(){
        return `Issue name: ${ this.title }, Author: ${ this.author }`
    },
    getGeneralInfo: function(){
        return `This issue was created by ${ this.author } on ${ this.dateCreated }, status: ${ this.status }`
    }
}

console.log(Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());