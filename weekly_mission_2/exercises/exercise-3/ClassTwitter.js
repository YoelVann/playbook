class TwitterUser{
    constructor(
        tweets,
        tweetsAndAnswers,
        photosAndVideos,
        like,
        message
    ){
        this.tweets = tweets,
        this.tweetsAndAnswers = tweetsAndAnswers,
        this.photosAndVideos = photosAndVideos,
        this.like = like,
        this.message = message
    }
}

class TrendingTopic{
    constructor(
        trending
    ){
        this.trending = trending
    }
}

class HashTag{
    constructor(
        title,
        relatedTweetsId
    ){
        this.title = title,
        this.relatedTweetsId = relatedTweetsId
    }
}

export {
    TwitterUser,
    TrendingTopic,
    HashTag
}