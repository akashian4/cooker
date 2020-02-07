const express = require('express');
const router = express.Router({ mergeParams: true });
const Service = require('../Service/services');



//Customer
router.post('/registerCustomer', Service.registerCustomer);
router.post('/loginCustomer', Service.loginCustomer);
router.get('/readAllCustomers', Service.readAllCustomers);


//Seller 
router.post('/registerSeller', Service.registerSeller);
router.post('/loginSeller', Service.loginSeller);
router.get('/readAllSellers', Service.readAllSellers);


/* Carousel */
router.post('/addCarousel', Service.addCarousel);
router.delete('/deleteCarousel', Service.deleteCarousel);
router.get('/readAllCarousels', Service.readAllCarousels);


/* Daily Showcase */
router.post('/addDailyShowcase', Service.addDailyShowcase);
router.delete('/deleteDailyShowcase', Service.deleteDailyShowcase);
router.get('/readAllDailyShowcases', Service.readAllDailyShowcases);


/* Special discount */
router.post('/addSpecialdiscount', Service.addSpecialdiscount);
router.delete('/deleteSpecialdiscount', Service.deleteSpecialdiscount);
router.get('/readAllSpecialdiscounts', Service.readAllSpecialdiscounts);


/* Newest */
router.post('/addNewest', Service.addNewest);
router.delete('/deleteNewest', Service.deleteNewest);
router.get('/readAllNewests', Service.readAllNewests);


/* Cake */
router.post('/addCake', Service.addCake);
router.delete('/deleteCake', Service.deleteCake);
router.get('/readCake', Service.readCake);
router.put('/editCake', Service.editCake);



module.exports = router;
