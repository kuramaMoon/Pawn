exports.getHomePage = (req, res) => {
  res.render('pages/home');  
};

exports.getPlayPage = (req, res) => {
  res.render('pages/play');  
};

exports.getTrainingPage = (req, res) => {
  res.render('pages/training');  
};

exports.getLessonPage = (req, res) => {
  res.render('pages/lesson');  
};