# use BlogServer

# db.createCollection("Posts")
# db.createCollection("Users")

# db.Posts.save({ "postid": 1, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 1", "body": "Hello, world!" })
# db.Posts.save({ "postid": 2, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 2", "body": "I am here." })

# db.Users.save({ "username": "cs144", "password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6" })
# db.Users.save({ "username": "user2", "password": "$2a$10$kTaFlLbfY1nnHnjb3ZUP3OhfsfzduLwl2k/gKLXvHew9uX.1blwne" })

use BlogServer

db.createCollection("Posts")
db.createCollection("Users")

db.Posts.save({ "postid": 1, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 1", "body": "Hello, world!" })
db.Posts.save({ "postid": 10, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 10", "body": "I am here." })
db.Posts.save({ "postid": 11, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 11", "body": "Hello, world!" })
db.Posts.save({ "postid": 18, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 18", "body": "I am here." })
db.Posts.save({ "postid": 6, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 6", "body": "Hello, world!" })
db.Posts.save({ "postid": 7, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 7", "body": "I am here." })
db.Posts.save({ "postid": 8, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 8", "body": "Hello, world!" })
db.Posts.save({ "postid": 9, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 9", "body": "I am here." })

db.Users.save({ "username": "cs144", "password": "$2a$10$2DGJ96C77f/WwIwClPwSNuQRqjoSnDFj9GDKjg6X/PePgFdXoE4W6" })
db.Users.save({ "username": "user2", "password": "$2a$10$kTaFlLbfY1nnHnjb3ZUP3OhfsfzduLwl2k/gKLXvHew9uX.1blwne" })

