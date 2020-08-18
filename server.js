"use strict";

app.use("/", express.static("www", { index: "inicio.html" }));

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
