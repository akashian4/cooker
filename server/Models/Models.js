var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        default: null
    },
    username: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    password: {
        type: String,
        trim: true,
        select: false,
        default: null,
        required: true
    },
    phone: {
        type: String
        // minlength: 11,
        // maxlength: 11
    },
    token: {
        type: String,
        trim: true
    }
});

let SellerSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        default: null
    },
    username: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    password: {
        type: String,
        trim: true,
        select: false,
        default: null,
        required: true
    },
    phone: {
        type: String
        // minlength: 11,
        // maxlength: 11
    },
    token: {
        type: String,
        trim: true
    }
});

let CarouselSchema = new Schema({
    headerText: {
        type: String,
        default: "hederText",
        required: true
    },
    bodyText: {
        type: String,
        default: null,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});

let DailyShowcaseSchema = new Schema({
    headerText: {
        type: String,
        default: "hederText",
        required: true
    },
    bodyText: {
        type: String,
        default: null,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});

let SpecialdiscountSchema = new Schema({
    headerText: {
        type: String,
        default: "hederText",
        required: true
    },
    bodyText: {
        type: String,
        default: null,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});

let NewestSchema = new Schema({
    headerText: {
        type: String,
        default: "hederText",
        required: true
    },
    bodyText: {
        type: String,
        default: null,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});


CustomerSchema.statics.findByTokenCustomer = function (token) {
    let Customer = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'cooker');
    } catch (e) {
        return Promise.reject();
    }

    return Customer.findOne({
        username: decoded.username,
        token: token
    });
};

SellerSchema.statics.findByTokenSeller = function (token) {
    let Seller = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'cooker');
    } catch (e) {
        return Promise.reject();
    }

    return Seller.findOne({
        username: decoded.username,
        token: token
    });
};

let Customer = mongoose.model('Customer', CustomerSchema);
let Seller = mongoose.model('Seller', SellerSchema);
let Carousel = mongoose.model('Carousel', CarouselSchema);
let DailyShowcase = mongoose.model('DailyShowcase', DailyShowcaseSchema);
let Specialdiscount = mongoose.model('Specialdiscount', SpecialdiscountSchema);
let Newest = mongoose.model('Newest', NewestSchema);

module.exports = {
    Customer: Customer,
    Seller: Seller,
    Carousel: Carousel,
    DailyShowcase: DailyShowcase,
    Specialdiscount:Specialdiscount,
    Newest:Newest
};
