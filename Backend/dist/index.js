import express from "express";
const app = express();
// GET 
// PUT
// POST
// DELETE
app.use(express.json());
app.post("/hello", (req, res, next) => {
    console.log(req.body);
    return res.send("Hello");
});
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map