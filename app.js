const express = require("express");
const app = express();
const PORT = process.env.PORT || 3010;

app.listen(3010, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
