const app = require("./app")
const PORT = process.env.PORT || 4000;


//Listening to port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});