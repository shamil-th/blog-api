const Blogs = require("../model/model");


function validateBlogData(blog) {
    const errors = [];

    if (!blog.img) {
        errors.push("Image is required");
    }
    if (!blog.title) {
        errors.push("Title is required");
    }
    if (!blog.titleDescription) {
        errors.push("Title Description is required")
    }
    if (!blog.description) {
        errors.push("Description is required")
    }

    return errors;
}

// post a blog
exports.create = (req, res) => {

    const newBlog = req.body;
    const validationErrors = validateBlogData(newBlog);

    if (validationErrors.length > 0) {
        res.status(400).json({ errors: validationErrors });
    } else {
        const blog = new Blogs({
            img: req.body.img,
            title: req.body.title,
            titleDescription: req.body.titleDescription,
            date: req.body.date,
            description: req.body.description,
            tags: req.body.tags,
        })
        //    save blogs in database
        blog
            .save(blog)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured during create operation"
                })
            })

    }
}

// Get all blogs
exports.find = (req, res) => {
    Blogs.find()
        .then(blogs => {
            res.send(blogs)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error occured while retrieving information"
            });
        });
}


