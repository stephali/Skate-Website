const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({
        "naples_locations": ["Naples Test Location 1:", "Naples Test Location 2:"],
        "ft_myers_locations": ["Fort Myers Test Location 1\n:", "Fort Myers Test Location 2:"]    });

});


app.listen(PORT, () => {
    console.log(PORT);

});