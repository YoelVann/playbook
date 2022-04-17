const user = {
    name: "Yoel Hoil Calderón",
    presentation: "All you needis love ❤",
    school: "UADY",
    lives: "Ubication",
    relationship: "complex",
    joinDate: "April 2011",
    followers: 119,
    friends: 2500
}

console.log("User: ", user);

const post = {
    id: 99,
    content: "HAHAHA Tienes que ver ésto",
    shared: true,
    originalContent: "Michi Norteño",
    photo: false,
    photos: [],
    video: true,
    videoLink: 'videolink.facebook.com/fsdfsdf',
    reactions: {like:1, love:20, haha:2, hate: 0, import: 0},
    comments: [{userId:99, commentId: 100, content: "HAHAH SII"}]
}

console.log("Post: ", post);

const biography = {
    posts: [{postId: 1, content: 'post 1'}],
    information: {school: "UADY", friends: 2500},
    friends: [{idUser:1, friend: true}, {idUser:2, friend: true}],
    photos: ['photolink1', 'photolink2', 'photolink3'],
    videos: ['videolink1', 'videolink2', 'videolink3'],
    visits: ['Celestún', 'Campeche', 'Playa del Carmen', 'Mérida']
}

console.log("Biography: ", biography);