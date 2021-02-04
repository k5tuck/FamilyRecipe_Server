const express = require("express");
const router = express.Router();
const multer = require("multer");
const UPLOAD_URL = "/uploads/media/";
const upload = multer({ dest: "public" + UPLOAD_URL });

const { Recipe } = require("../models");

router
  .get("/api/recipes", async (req, res) => {
    // res.json("Grabbing All of Your Recipes...");
    const recipes = await Recipe.findAll();
    res.json({ message: "Grabbing All of Your Recipes...", recipes });
  })
  .post("/api/addrecipe", upload.single("file"), async (req, res) => {
    res.json("Yeah I gotchu");
    // res.json("Success! Added Recipe");
    // const { title, image, category, tod, ingredients, directions } = req.body;
    // // const { file } = req;
    // // console.log(file);
    // let mediaPic = file ? UPLOAD_URL + file.filename : "";
    // // console.log(image);

    // console.log({
    //   title,
    //   // image: mediaPic,
    //   category,
    //   tod,
    //   ingredients,
    //   directions,
    // });

    // const createdRecipe = await Recipe.create({
    //   title,
    //   //   image: mediaPic,
    //   category,
    //   tod,
    //   ingredients,
    //   directions,
    // });
    // res.json({ message: "Success! Added Recipe", recipe: createdRecipe.id });
  })
  .post("/api/addimage", upload.single("file"), (req, res) => {
    const { file } = req;
    // const { id } = req.body;
    console.log(file);
    // console.log(id);
    let mediaPic = file ? UPLOAD_URL + file.filename : "No Image";
    res.json({ message: "Image Received" });
  });

module.exports = router;
