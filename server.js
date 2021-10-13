'use strict';

const app = require('./app.js');

const PORT = process.env.PORT || 8080;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`App listening in port ${PORT}`);
});

// 192.168.1.70
