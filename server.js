const express = require("express");

const app = express()

app.get("/api", (req, res)=>{
    let slackName = req.query.slack_name;
    let track = req.query.track;
    let day = new Date();

    return res.json({slack_name: slackName, 
        current_day: Intl.DateTimeFormat("en-Us", {weekday: "long"}).format(day), 
        utc_time: day.toUTCString(),
        track: track,
        github_file_url: "https://github.com/Sir-ct/hng10-task1/server.js",
        github_repo_url: "https://github.com/Sir-ct/hng10-task1",
        status_code: 200
     })
})

app.listen(5001, ()=>{
    console.log("server listening on port " + 5001);
})