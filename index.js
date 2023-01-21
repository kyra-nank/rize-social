const express = require('express');

const app = express();

require('./routes/addGuestsRoutes')(app);
require('./routes/guestListRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);