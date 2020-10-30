exports.get404 = (req, res, next) => {
    res.status(404).render('pages/404', 
    {
      pageTitle: 'Page Not Found',
      path: '/404'
    });
  };
  exports.get500 = (req, res, next) => {
    res.status(500).render('pages/500', 
    {
      pageTitle: 'Error!',
      path: '/500'
    });
  };
  