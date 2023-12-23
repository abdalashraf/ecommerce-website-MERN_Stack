const express = require("express");
const app = express();
const { Product, Order } = require("./db"); // Import both models from the db module
let fs=require("fs")
let multer=require('multer')

// Middleware to parse JSON
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = './server/UploadPic/' + req.body.name;

    fs.mkdir(path, { recursive: true }, function (err) {
      if (err) {
        console.error("Error creating directory:", err);
        cb({ message: "Error creating directory", error: err }, null);
      } else {
        cb(null, path);
      }
    });
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});


const upload = multer({ storage: storage })

app.use("/uploads", express.static("server/UploadPic"));

app.post("/addProduct", upload.single("file"), async function (req, res) {
  console.log(req.body);
  let pData = new Product({
    name: req.body.name,
    Details: req.body.Details,
    Category: req.body.Category,
    price: req.body.price,
    file: '/uploads/' + req.body.name + '/' + req.file.originalname,
  });

  await pData.save();
  res.send("Product added successfully!");
});

// Route for fetching product data
app.get("/productdata", async function (req, res) {
  try {
    const productData = await Product.find(); 
    res.json(productData);
    console.log("ok", productData);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.get("/category", async function (req, res) {
  try {
    const category = req.query.anc; // Extract category from query parameters
    let productData;

    if (category) {
      productData = await Product.find({ Category: category });
    } else {
      productData = await Product.find();
    }

    res.json(productData);
    console.log("ok", productData);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/singleproduct", async function (req, res) {
  try {
    const singleProduct = await Product.findById(req.query.anc);
    if (singleProduct) {
      res.json(singleProduct);
    } else {
      res.status(404).end("Product not found");
    }
    console.log(req.query.anc);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).end("Internal Server Error");
  }
});
// Route handling the DELETE request for deleting a product
app.delete("/product-delete", async function (req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.query.anc);
    if (deletedProduct) {
      res.end("Delete ho gaya ");
    } else {
      res.status(404).end("Product not found");
    }
    console.log(req.query.anc);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).end("Internal Server Error");
  }
});

// Route handling the POST request for adding an order
app.post("/addorder", async function (req, res) {
  console.log(req.body);
  let oData = new Order({
    Name: req.body.Name,
    address: req.body.address,
    email: req.body.email,
    number: req.body.number,
  });
  await oData.save();
  res.send("Order added successfully!");
});

app.get("/orderdata", async function (req, res) {
  try {
    const orderData = await Order.find();
    res.json(orderData);
    console.log("ok", orderData);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.delete("/orderdelete", async function (req, res) {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.query.anc);
    if (deletedOrder) {
      res.end("Delete ho gaya ");
    } else {
      res.status(404).end("Product not found");
    }
    console.log(req.query.anc);
  } catch (error) {
    console.error("Error deleting deletedOrder:", error);
    res.status(500).end("Internal Server Error");
  }
});
// Server listening on port 9001
const PORT = 9001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
