import express from "express";

const app = express();
const post = 4000;

app.listen(post, () => {
  console.log(`Server is ring at ${post}`);
});

app.get("/profiles", (req, res) => {
  try {
    console.log(200);
    return res.json({
      data: {
        name: "john",
        age: 20,
      },
    });
  } catch (error) {
    console.log(400);
  }
});
