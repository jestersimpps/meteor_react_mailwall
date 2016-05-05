Meteor.methods({
  addPost(post) {
    Post.insert({
      body: "postbody",
      comments: 0,
      created_at: new Date(),
      description: "↵↵",
      downvotes: 0,
      from: "jov2all@gmail.com",
      img: ["http://res.cloudinary.com/dh5tcosp2/image/upload/v1461578501/vslrmmkjvctrmrclesip.png"],
      public: 0,
      site_name: "img",
      sorter: -1461596266,
      subject: "bi",
      title: "bi",
      upvotes: 0
    })
  }
});
