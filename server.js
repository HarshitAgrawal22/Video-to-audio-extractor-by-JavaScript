const express = require("express")
const path = require("path")
const app = express()
const multer = require("multer")
const upload = multer({ dest: "database/" })
const { extractor } = require("./extractor")
const port = 5000

app.use("/static", express.static("audios"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates/index.html"));
})

app.post("/extract", upload.single("video"), async function(req, res, next) {

    let audio = extractor(req.file.path)
    console.log(audio)
    res.sendFile(path.join(__dirname, `http://localhost:/${audio}.mp3`))
})

app.listen(port, () => {
    console.log(`Your Website is at http://localhost:${port}`);
})