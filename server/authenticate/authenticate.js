var { Customer,Seller } = require('../Models/Models');


let authenticateCustomer = function(req, res, next) {
  let token = req.header('x-auth');
  
  Customer.findByTokenCustomer(token)
    .then(Customer => {
      if (!Customer) {
        return Promise.reject();
      }

      req.customer = Customer;
      req.token = token;
      next();
    })
    .catch(err => {
      
      res.status(401).send();
    });
};

let authenticateSeller = function(req, res, next) {
    let token = req.header('x-auth');
    
    Seller.findByTokenSeller(token)
      .then(Seller => {
        if (!Seller) {
          return Promise.reject();
        }
  
        req.seller = Seller;
        req.token = token;
        next();
      })
      .catch(err => {
        
        res.status(401).send();
      });
  };

module.exports={
    authenticateCustomer,
    authenticateSeller
}