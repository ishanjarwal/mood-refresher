const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.resolve(__dirname, "dist"), {
    setHeaders: function (res, path, stat) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    }
}))

app.listen(8080, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server Started")
    }
})