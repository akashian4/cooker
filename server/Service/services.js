// var { Customer, Seller } = require('../Models/models');
const persianDate = require('persian-date');
const dbFunction = require('../db/dbFunction');

const MD5 = require('md5');

//customer
/* API to register new Customer */
let registerCustomer = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {

      let customer = {
        username: req.body.username
      };

      const checkCustomer = await dbFunction.getCustomer(customer);
      if (checkCustomer && checkCustomer.length == 1) {
        res.status(401).json({ message: 'username already registered' });
      } else {
        let customerData = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          phone: req.body.phone,
          password: MD5(MD5(req.body.password)),
        };

        const addCustomer = await dbFunction.createCustomer(customerData);
        console.log("s13");
        if (addCustomer) {
          res.header('x-auth', addCustomer.token);
          res.status(200).json({ message: 'Customer registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }
    } catch (error) {
      res.status(404).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to login Customer */
let loginCustomer = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let username = {
        username: req.body.username
      };
      const checkCustomer = await dbFunction.getCustomer(username);

      if (checkCustomer && checkCustomer.length > 0) {
        let user = {
          username: req.body.username,
          password: MD5(MD5(req.body.password))
        };
        const checkPassword = await dbFunction.getCustomer(user);
        if (checkPassword && checkPassword.length == 1) {
          res.header('x-auth', checkPassword[0].token);
          res.status(200).json({
            message: 'Logged in successfully!',
            result: checkPassword[0],
            token: checkPassword[0].token
          });
        } else {
          res.status(401).json({ message: 'Incorrect password' });
        }
      } else {
        res.status(401).json({ message: 'Username not exist!' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read Customers */
let readAllCustomers = async (req, res) => {
  try {
    const customers = await dbFunction.getAllCustomers();
    res.status(200).json(customers);

  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};


//seller
/* API to register new Seller */
let registerSeller = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let username = {
        username: req.body.username
      };

      const checkSeller = await dbFunction.getSeller(username);
      if (checkSeller && checkSeller.length == 1) {
        res.status(401).json({ message: 'username already registered' });
      } else {
        let SellerData = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          phone: req.body.phone,
          password: MD5(MD5(req.body.password)),
        };

        const addSeller = await dbFunction.createSeller(SellerData);
        if (addSeller) {
          res.header('x-auth', addSeller.token);
          res.status(200).json({ message: 'Seller registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }
    } catch (error) {
      res.status(404).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to login Seller */
let loginSeller = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let username = {
        username: req.body.username
      };
      const checkSeller = await dbFunction.getSeller(username);

      if (checkSeller && checkSeller.length > 0) {
        let user = {
          username: req.body.username,
          password: MD5(MD5(req.body.password))
        };
        const checkPassword = await dbFunction.getSeller(user);
        if (checkPassword && checkPassword.length == 1) {
          res.header('x-auth', checkPassword[0].token);
          res.status(200).json({
            message: 'Logged in successfully!',
            result: checkPassword[0],
            token: checkPassword[0].token
          });
        } else {
          res.status(401).json({ message: 'Incorrect password' });
        }
      } else {
        res.status(401).json({ message: 'Username not exist!' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read Sellers */
let readAllSellers = async (req, res) => {
  try {
    const sellers = await dbFunction.getAllSelers();
    res.status(200).json(sellers);

  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};



//carousel
/* API to add Carousel */
let addCarousel = async (req, res) => {
  if (!req.body.headerText || !req.body.bodyText || !req.body.img) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };

      const checkCarousel = await dbFunction.getCarousel(headerText);

      if (checkCarousel && checkCarousel.length == 1) {
        res.status(401).json({ message: 'headerText already registered' });
      } else {
        let CarouselData = {
          headerText: req.body.headerText,
          bodyText: req.body.bodyText,
          img: req.body.img
        };

        const addCustomer = await dbFunction.createCarousel(CarouselData);
        if (addCustomer) {
          res.status(200).json({ message: 'addCustomer registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }


    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to delete Carousel */
let deleteCarousel = async (req, res) => {
  if (!req.body.headerText) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };
      const checkCarousel = await dbFunction.getCarousel(headerText);
      if (checkCarousel && checkCarousel.length == 1) {
        const deleteCustomer = await dbFunction.removeCarousel(headerText);
        if (deleteCustomer) {
          console.log(deleteCustomer);
          res.status(200).json({ message: 'deleted successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      } else {
        res.status(401).json({ message: 'headerText in not exist' });

      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read all Carousels */
let readAllCarousels = async (req, res) => {
  try {
    const Carousels = await dbFunction.getAllCarousels();
    res.status(200).json(Carousels);
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};




/* API to add Daily Showcase */
let addDailyShowcase = async (req, res) => {
  if (!req.body.headerText || !req.body.bodyText || !req.body.img) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };

      const checkDailyShowcase = await dbFunction.getDailyShowcase(headerText);

      if (checkDailyShowcase && checkDailyShowcase.length == 1) {
        res.status(401).json({ message: 'headerText already registered' });
      } else {
        let DailyShowcaseData = {
          headerText: req.body.headerText,
          bodyText: req.body.bodyText,
          img: req.body.img
        };

        const addDailyShowcase= await dbFunction.createDailyShowcase(DailyShowcaseData);
        if (addDailyShowcase) {
          res.status(200).json({ message: 'addDailyShowcase registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }


    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to delete Daily Showcase */
let deleteDailyShowcase = async (req, res) => {
  if (!req.body.headerText) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };
      const checkDailyShowcase = await dbFunction.getDailyShowcase(headerText);
      if (checkDailyShowcase && checkDailyShowcase.length == 1) {
        const deleteDailyShowcase = await dbFunction.removeDailyShowcase(headerText);
        if (deleteDailyShowcase) {
          console.log(deleteDailyShowcase);
          res.status(200).json({ message: 'deleted successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      } else {
        res.status(401).json({ message: 'headerText in not exist' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read Daily Showcases */
let readAllDailyShowcases = async (req, res) => {
  try {
    const DailyShowcase = await dbFunction.getAllDailyShowcase();
    res.status(200).json(DailyShowcase);
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};



//special discount
/* API to add Special discount */
let addSpecialdiscount = async (req, res) => {
  if (!req.body.headerText || !req.body.bodyText || !req.body.img) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };

      const checkSpecialdiscount = await dbFunction.getSpecialdiscount(headerText);

      if (checkSpecialdiscount && checkSpecialdiscount.length == 1) {
        res.status(401).json({ message: 'headerText already registered' });
      } else {
        let SpecialdiscountData = {
          headerText: req.body.headerText,
          bodyText: req.body.bodyText,
          img: req.body.img
        };

        const addSpecialdiscount= await dbFunction.createSpecialdiscount(SpecialdiscountData);
        if (addSpecialdiscount) {
          res.status(200).json({ message: 'addSpecialdiscount registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }


    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to delete Special discount */
let deleteSpecialdiscount = async (req, res) => {
  if (!req.body.headerText) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };
      const checkSpecialdiscount = await dbFunction.getSpecialdiscount(headerText);
      if (checkSpecialdiscount && checkSpecialdiscount.length == 1) {
        const deleteSpecialdiscount = await dbFunction.removeSpecialdiscount(headerText);
        if (deleteSpecialdiscount) {
          console.log(deleteSpecialdiscount);
          res.status(200).json({ message: 'deleted successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      } else {
        res.status(401).json({ message: 'headerText in not exist' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read all Special discounts */
let readAllSpecialdiscounts = async (req, res) => {
  try {
    const Specialdiscount = await dbFunction.getAllSpecialdiscounts();
    res.status(200).json(Specialdiscount);
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};


//Newest
/* API to add Newest */
let addNewest = async (req, res) => {
  if (!req.body.headerText || !req.body.bodyText || !req.body.img) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };

      const checkNewest = await dbFunction.getNewest(headerText);

      if (checkNewest && checkNewest.length == 1) {
        res.status(401).json({ message: 'headerText already registered' });
      } else {
        let NewestData = {
          headerText: req.body.headerText,
          bodyText: req.body.bodyText,
          img: req.body.img
        };

        const addNewest= await dbFunction.createNewest(NewestData);
        if (addNewest) {
          res.status(200).json({ message: 'addNewest registered successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      }


    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to delete Newest */
let deleteNewest = async (req, res) => {
  if (!req.body.headerText) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {
      let headerText = {
        headerText: req.body.headerText
      };
      const checkNewest = await dbFunction.getNewest(headerText);
      if (checkNewest && checkNewest.length == 1) {
        const deleteNewest = await dbFunction.removeNewest(headerText);
        if (deleteNewest) {
          console.log(deleteNewest);
          res.status(200).json({ message: 'deleted successfully!' });
        } else {
          res.status(403).json({ message: 'Something went wrong' });
        }
      } else {
        res.status(401).json({ message: 'headerText in not exist' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read Newests */
let readAllNewests = async (req, res) => {
  try {
    const Newests = await dbFunction.getAllNewests();
    res.status(200).json(Newests);
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong', error: error });
  }
};



//Cake
/* API to add Cake */
let addCake = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {

    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to delete Cake */
let deleteCake = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {

    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to read Cakes */
let readCake = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {

    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};

/* API to edit Cake */
let editCake = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({ message: 'Parameters are missing 1' });
  } else {
    try {

    } catch (error) {
      res.status(401).json({ message: 'Something went wrong 2', error: error });
    }
  }
};




module.exports = {
  registerCustomer: registerCustomer,
  registerSeller: registerSeller,
  readAllCustomers: readAllCustomers,
  loginCustomer: loginCustomer,
  loginSeller: loginSeller,
  readAllSellers: readAllSellers,
  addCarousel: addCarousel,
  deleteCarousel: deleteCarousel,
  readAllCarousels: readAllCarousels,
  addDailyShowcase: addDailyShowcase,
  deleteDailyShowcase: deleteDailyShowcase,
  readAllDailyShowcases: readAllDailyShowcases,
  addSpecialdiscount: addSpecialdiscount,
  deleteSpecialdiscount: deleteSpecialdiscount,
  readAllSpecialdiscounts: readAllSpecialdiscounts,
  addNewest: addNewest,
  deleteNewest: deleteNewest,
  readAllNewests: readAllNewests,
  addCake: addCake,
  deleteCake: deleteCake,
  readCake: readCake,
  editCake: editCake

};
