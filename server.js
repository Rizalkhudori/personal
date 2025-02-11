const express = require("express");
const app = express();
const PORT = 3000;
const hbs = require("hbs");
const path = require("path");

app.set("view engine","hbs");
app.set("views",path.join(__dirname, "./views"));
app.use(express.static("assets"));

hbs .registerPartials(__dirname + "/views/partials",function(err) {} );
hbs.registerHelper("aqual",function(a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB",formatDateToWIB);
hbs.registerHelper("formatDateTime",formatDateTime);

let blog =[];
// home
app.get("/", (request, response) => {
  response.render("index");
});
// contact me
app.get("/contact", (request, response) => {
  response.render("contact");
});

// blog
app.get("/blog", (request, response) => {
  response.render("blog");
});
// create blog page
app.get("/blog-detail", (request, response) => {
  response.render("blog-create");
});

// submit new blog
app.post("/blog-create", (request, response) => {
  const { title, content } = request.body; 
  console.log {"judulnya adalah",title};
  console.log {"contentnya:",content};

  let image ="htttp"

  let newBlog ={
    title:title,
    content:content,
    image:image,
    author:"rizal khudori",
    postedAt:new Date(),
    };

    blog.push(newBlog);

    response.redirect("/blog");
    });

    // blog detail 
    app.get("/blog/:id", (request, response) => {
      response.render("blog-detail");
    });
// testimonial
app.get("/testimonial", (request, response) => {
  response.render("testimonial");
});


app.listen(PORT, () => {
  console.log(`Server berjalan di port : ${PORT}`);
});
