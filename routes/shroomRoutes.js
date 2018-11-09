const mongoose = require("mongoose");
const Shroom = mongoose.model("shrooms");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/api/shrooms", async (req, res) => {
    const shrooms = await Shroom.find({});
    res.send(shrooms);
  });

  app.post("/api/shrooms", requireLogin, async (req, res) => {
    console.log(req.body);
    const { common_name, genus, description, edible, image } = req.body;

    const shroom = new Shroom({
      common_name,
      genus,
      description,
      edible,
      image,
      _user: req.user.id
    });

    try {
      await shroom.save();
      res.send("Mushroom successfully saved to the database.");
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.delete("/api/shrooms/:id", requireLogin, async (req, res) => {
    const user = req.user;
    const shroomToFind = req.body.shroom.id;
    const shroom = Shroom.findById(shroomToFind);

    if (shroom._user === user) {
      try {
        await shroom.delete();
        res.send("Mushroom successfully deleted from the database.");
      } catch (error) {
        res.status(422).send(error);
      }
    }
  });
};
