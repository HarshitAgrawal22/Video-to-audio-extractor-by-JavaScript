const extractAudio = require('ffmpeg-extract-audio')


const extractor = async(video) => {
    console.log("started")
    await extractAudio({
        input: await new require("path").join(__dirname, `database/${video}`),
        output: "lol.mp3"
    });

    return output;
}

module.exports = { extractor };