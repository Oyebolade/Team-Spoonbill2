const express = require("express");
const globalErrorHandler = require("../Backend/controllers/errorController");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const app = express();
const { favicons } = require('favicons');
const icons = require('./Icons/iconsFactory/iconsFactory');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
// const router =express.Router()


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'Backend/views'))

// 1) GLOBAL MIDDLEWARES

// Serving static files
// app.use(express.static(path.join(__dirname, 'Backend')))



// load assets
// app.use('/css', express.static(path.resolve(__dirname, "Public/css")));
// app.use('/img', express.static(path.resolve(__dirname, "Public/img")));
// app.use('/js', express.static(path.resolve(__dirname, "Public/js")));



// router.get('/',function(req,res){
//  res.render('Backend/views/index');
  //__dirname : It will resolve to your project folder.
// });

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/Public/About Us.html'));
// });

// router.get('/contact',function(req,res){
//   res.sendFile(path.join(__dirname+'/Public/Contact Us.html'));
// });

// router.get('/login',function(req,res){
//   res.sendFile(path.join(__dirname+'/Public/login.html'));
// });

// router.get('/signup',function(req,res){
//   res.sendFile(path.join(__dirname+'/Public/signup.html'));
// });

//add the router
// app.use('/', router);


// Body parser
app.use(express.json());

app.use(cors({
  origin: "*",
}));

// Development loging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}





// try {
//   const response = favicons(sources, icons.configuration);
//   console.log(response)
//     console.log(response.images);
//     console.log(response.files);
//     console.log(response.html);
// } catch (error) {
//     console.log(error.messages);
// }

// const faviconGen = favicons(sources, icons.configuration);
// faviconGen.then((response) => {
//   console.log(response.html[0]);
//   console.log(response.images[0]);
//   // const data=response.images
//   const html = response.html;
  // fs.writeFile('./Backend/Icons/iconGen/icon.html', html.map(el => el + '\n').join(''), (err) => {
  //   if (err) throw err;
  //   console.log('The file has been saved!');
  // });

  // function writeImage(response) {
  //   // fs.mkdirSync('imageIcons');
  //   response.images.forEach(image => {
  //     fs.writeFile(`./Backend/Icons/iconGen/${image.name}`, image.contents, err => {
  //       if (err) throw err;
  //     });
  //   });

  // }; 
  

  // writeImage(response);

// }).catch((error) => {
//   console.log(error.messages)
// })



// Routes
app.use("/api/users", userRouter);
app.use(globalErrorHandler);
module.exports = app;
