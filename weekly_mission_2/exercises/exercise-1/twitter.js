const user = {
    tweets: [{id: 1, content: "Tweet 1", share: 5, like: 5, response: 10},{id: 2, content: "Tweet 2", share: 5, like: 5, response: 10}],
    tweetsAndAnswers: [{id: 1, content: "Tweet 1", share: 5, like: 5, response: 10}, {tweetId: 1, answerId: 1, content: "answer content"}],
    photosAndVideos: [{photoId: 1, content: "Description"},{photoId: 100, content: "Description 100"}],
    like: [{tweedId: 100, like: true}, {tweedId: 101, like: true}],
    message: [{userId: 200, message: "Hello user"}, {userId: 300, message: "Hello again"}]
}

console.log("user: ", user)

const trending_topic = {
    trending: [{position: 1,title: "Tokyo Revengers", tweetsId: [12,14,15] }, {position: 2,title: "Coachella", tweetsId: [11,10,9] }]
}

console.log("Trending: ", trending_topic)

const hashtag = {
    title: "#TheBatman",
    relatedTweetsId: [100, 101, 102, 103]
}

console.log("Hashtags: ", hashtag);