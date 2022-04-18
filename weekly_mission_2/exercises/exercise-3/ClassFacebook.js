class FacebookUser{
    constructor(
        name,
        lastName,
        presentation,
        school,
        lives,
        relationship,
        joinDate,
        followers,
        friends
    ){
        this.name = name,
        this.lastName = lastName,
        this.presentation = presentation,
        this.school = school,
        this.lives = lives,
        this.relationship = relationship,
        this.joinDate = joinDate,
        this.followers = followers,
        this.friends = friends
    }
}

class Post{
    constructor(
        id,
        content,
        shared,
        originalContent,
        photo,
        photos,
        video,
        videoLink,
        reactions,
        comments
    ){
        this.id = id,
        this.content = content,
        this.shared = shared,
        this.originalContent = originalContent,
        this.photo = photo,
        this.photos = photos,
        this.video = video,
        this.videoLink = videoLink,
        this.reactions = reactions,
        this.comments = comments
    }
}

class Biography{
    constructor(
        posts,
        information,
        friends,
        photos,
        videos,
        visits
    ){
        this.posts = posts,
        this.information = information,
        this.friends = friends,
        this.photos = photos,
        this.videos = videos,
        this.visits = visits
    }
}

export {
    FacebookUser,
    Post,
    Biography
}