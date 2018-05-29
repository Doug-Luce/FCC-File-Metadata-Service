
exports.homePage = (req, res) => {
  res.render('../views/index.pug');
};

exports.submitFile = (req, res) => {
  res.json({size: req.file.size});
};