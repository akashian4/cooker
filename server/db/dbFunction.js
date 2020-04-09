var { Customer, Seller, Carousel, DailyShowcase, Specialdiscount, Newest, Cake, GroupingValue } = require('../Models/Models');
var jwt = require('jsonwebtoken');

//read Customer
const getCustomer = customer =>
    new Promise((resolve, reject) => {
        Customer.find(customer)
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read Seller
const getSeller = seller =>
    new Promise((resolve, reject) => {
        Seller.find(seller)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read Carousel
const getCarousel = carousel =>
    new Promise((resolve, reject) => {
        Carousel.find(carousel)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read DailyShowcase
const getDailyShowcase = dailyShowcase =>
    new Promise((resolve, reject) => {
        DailyShowcase.find(dailyShowcase)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read Specialdiscount
const getSpecialdiscount = specialdiscount =>
    new Promise((resolve, reject) => {
        Specialdiscount.find(specialdiscount)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read Newest
const getNewest = newest =>
    new Promise((resolve, reject) => {
        Newest.find(newest)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read Cake
const getCake = cake =>
    new Promise((resolve, reject) => {
        Cake.find(cake)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });

//read Grouping Value
const getGroupingValue = groupingValue =>
    new Promise((resolve, reject) => {
        GroupingValue.find(groupingValue)
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });





//read all Sellers
const getAllSelers = () =>
    new Promise((resolve, reject) => {
        Seller.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Carousels
const getAllCarousels = () =>
    new Promise((resolve, reject) => {
        Carousel.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Customers
const getAllCustomers = () =>
    new Promise((resolve, reject) => {
        Customer.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all DailyShowcase
const getAllDailyShowcase = () =>
    new Promise((resolve, reject) => {
        DailyShowcase.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Specialdiscounts
const getAllSpecialdiscounts = () =>
    new Promise((resolve, reject) => {
        Specialdiscount.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Newest
const getAllNewests = () =>
    new Promise((resolve, reject) => {
        Newest.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Cakes
const getAllCakes = () =>
    new Promise((resolve, reject) => {
        Cake.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });

//read all Grouping Value
const getAllGroupingValues = () =>
    new Promise((resolve, reject) => {
        GroupingValue.find({})
            .then(client => resolve(client))
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });





//create new Customer
const createCustomer = customer => {
    let token = jwt
        .sign(
            {
                username: customer.username
            },
            'cooker'
        )
        .toString();
    customer.token = token;
    return new Promise((resolve, reject) => {
        new Customer(customer)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Seller
const createSeller = seller => {
    let token = jwt
        .sign(
            {
                username: seller.username
            },
            'cooker'
        )
        .toString();
    seller.token = token;
    return new Promise((resolve, reject) => {
        new Seller(seller)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Carousel
const createCarousel = carousel => {
    return new Promise((resolve, reject) => {
        new Carousel(carousel)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new DailyShowcase
const createDailyShowcase = dailyShowcase => {
    return new Promise((resolve, reject) => {
        new DailyShowcase(dailyShowcase)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Specialdiscount
const createSpecialdiscount = specialdiscount => {
    return new Promise((resolve, reject) => {
        new Specialdiscount(specialdiscount)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Newest
const createNewest = newest => {
    return new Promise((resolve, reject) => {
        new Newest(newest)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Cake
const createCake = cake => {
    return new Promise((resolve, reject) => {
        new Cake(cake)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};

//create new Grouping Value
const createGroupingValue = groupingValue => {
    return new Promise((resolve, reject) => {
        new GroupingValue(groupingValue)
            .save()
            .then(client => resolve(client))
            .catch(err => {
                reject(err);
                console.log(err);
            });
    });
};





//delete Carousel
const removeCarousel = (carousel) =>
    new Promise((resolve, reject) => {
        Carousel.findOneAndRemove(carousel)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });

//delete DailyShowcase
const removeDailyShowcase = (dailyShowcase) =>
    new Promise((resolve, reject) => {
        DailyShowcase.findOneAndRemove(dailyShowcase)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });

//delete Specialdiscount
const removeSpecialdiscount = (specialdiscount) =>
    new Promise((resolve, reject) => {
        Specialdiscount.findOneAndRemove(specialdiscount)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });

//delete Newest
const removeNewest = (newest) =>
    new Promise((resolve, reject) => {
        Newest.findOneAndRemove(newest)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });

//delete GroupingValue
const removeGroupingValue = (groupingValue) =>
    new Promise((resolve, reject) => {
        GroupingValue.findOneAndRemove(groupingValue)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });

//delete Cake
const removeCake = (cake) =>
    new Promise((resolve, reject) => {
        Cake.findOneAndRemove(cake)
            .exec()
            .then(client => resolve(client))
            .catch(err => reject(err));
    });





//update the Cake
const updateCake = (criteria, dataToSet) =>
  new Promise((resolve, reject) => {
    Cake.findOneAndUpdate(criteria, dataToSet)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

//update the GroupingValue
const updateGroupingValue = (criteria, dataToSet) =>
  new Promise((resolve, reject) => {
    GroupingValue.findOneAndUpdate(criteria, dataToSet)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });





module.exports = {
    createCustomer: createCustomer,
    getCustomer: getCustomer,
    getAllCustomers: getAllCustomers,

    createSeller: createSeller,
    getSeller: getSeller,
    getAllSelers: getAllSelers,

    createCarousel: createCarousel,
    getCarousel: getCarousel,
    removeCarousel: removeCarousel,
    getAllCarousels: getAllCarousels,

    getDailyShowcase: getDailyShowcase,
    createDailyShowcase: createDailyShowcase,
    getAllDailyShowcase: getAllDailyShowcase,
    removeDailyShowcase: removeDailyShowcase,

    getSpecialdiscount: getSpecialdiscount,
    getAllSpecialdiscounts: getAllSpecialdiscounts,
    createSpecialdiscount: createSpecialdiscount,
    removeSpecialdiscount: removeSpecialdiscount,

    getNewest: getNewest,
    getAllNewests: getAllNewests,
    createNewest: createNewest,
    removeNewest: removeNewest,

    getCake: getCake,
    getAllCakes: getAllCakes,
    createCake: createCake,
    removeCake: removeCake,
    updateCake:updateCake,
    
    getGroupingValue: getGroupingValue,
    getAllGroupingValues: getAllGroupingValues,
    createGroupingValue: createGroupingValue,
    removeGroupingValue: removeGroupingValue,
    updateGroupingValue:updateGroupingValue

}
