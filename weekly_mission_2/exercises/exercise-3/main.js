import Repo from './ClassRepo.js';
import Issue from './ClassIssue.js';
import PullRequest from './ClassPullRequest.js';

const playbook = new Repo('playbook', 'YoelVann', 'JavaScript', 20, 10, 5, 10, 1);

console.log("Playbook repository: ", playbook);

console.log(playbook.getGeneralInfo());
console.log("Total issues: " + playbook.getTotalIssues());

const liveIssue = new Issue('Live-3', 'playbook', 'OPEN', 20, ['LIVE-3','Semana-2'], 'carlogilmar', '17/0/2022');

console.log("Issue: "+ liveIssue);
console.log(liveIssue.getGeneralInfo());
console.log(liveIssue.getTitleAndAuthor());

const fisrtPR = new PullRequest('Finish to add new version', 'main', 'YoelVann','17/04/2022', 'PENDING', 'playbook');

console.log("First Pull Request: ", fisrtPR);
console.log(fisrtPR.getStatus());
console.log(fisrtPR.getTitleAndAutor());