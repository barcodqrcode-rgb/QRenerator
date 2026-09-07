const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("."));

app.get("/api/test", (req, res) => {
    res.json({
        message: "Node.js сървърът работи!",
        status: "OK"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Сървърът работи на порт ${PORT}`);
});