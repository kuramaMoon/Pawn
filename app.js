const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'localization')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
