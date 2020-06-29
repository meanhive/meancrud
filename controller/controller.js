let ProductModel = require("../model/product.model");
const assert = require("assert");

module.exports = {
  home: (req, res) => {
    // read the content form db
    ProductModel.find((err, response) => {
      if (err) assert.equal(err, null);
      res.render("index.pug", { products: response });
    });
  },
  create: (req, res) => {
    res.render("create.pug");
  },
  addProduct: (req, res) => {
    let data = new ProductModel(req.body);

    data
      .save()
      .then((result) => {
        res.redirect("/"); // re direction to default page
        res.status(200).send("Successfully created new product");
      })
      .catch((err) => {
        res.status(400).send("Unable to save value into database");
      });
  },
  edit: (req, res) => {
    let id = req.params.id; // single id you are reading from URL Address

    ProductModel.findById({ _id: id }, (err, response) => {
      if (err) assert.equal(err, null);
      res.render("edit.pug", { product: response });
    });
  },
  updateProduct: (req, res) => {
    let id = req.params.id;
    ProductModel.findById({ _id: id }, (err, response) => {
      if (err) {
        res.status(400).send("No data found");
      } else {
        response.title = req.body.title;
        response.image = req.body.image;
        response.price = req.body.price;
        response.company = req.body.company;
        response.description = req.body.description;

        response
          .save()
          .then((result) => {
            res.redirect("/");
            res.status(200).send("successfully updated");
          })
          .catch((err) => {
            assert.equal(err, null);
          });
      }
    });
  },
  deleteProduct: (req, res) => {
    let id = req.params.id;
    ProductModel.findByIdAndDelete({ _id: id }, (err, data) => {
      if (err) assert.equal(err, null);
      res.redirect("/");
      res.status(200).send("Successfully Deleted");
    });
  },
};
