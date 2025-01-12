// Create web server
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Create a route for comments/new
// Create a route for comments/create

const express = require("express");
const router = express.Router();

// GET /comments
router.get("/", (req, res) => {
  res.send("INDEX /comments");
});

// GET /comments/:id
router.get("/:id", (req, res) => {
  res.send("SHOW /comments/:id");
});

// GET /comments/:id/edit
router.get("/:id/edit", (req, res) => {
  res.send("EDIT /comments/:id/edit");
});

// PUT /comments/:id
router.put("/:id", (req, res) => {
  res.send("UPDATE /comments/:id");
});

// DELETE /comments/:id
router.delete("/:id", (req, res) => {
  res.send("DELETE /comments/:id");
});

// GET /comments/new
router.get("/new", (req, res) => {
  res.send("NEW /comments/new");
});

// POST /comments
router.post("/", (req, res) => {
  res.send("CREATE /comments");
});

module.exports = router;