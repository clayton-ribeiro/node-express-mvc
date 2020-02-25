exports.getProducts = (req, res, next) => {
    res.send({'products':{'product1':'1','product2':'2','product3':'3'}});
  };
  
  exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    res.send(req.body);
  };