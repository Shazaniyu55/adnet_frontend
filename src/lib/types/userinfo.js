// IndividualPersonalInfo Object
const IndividualPersonalInfo = {
    firstName: '',  // string
    lastName: '',   // string
    userName: '',   // string
    state: '',      // string
    lga: '',        // string
    address: '',    // string
    description: '',// string
    userId: ''      // string
};

// LGA Object
const LGA = {
    id: 0,          // number
    name: ''        // string
};

// State Object
const State = {
    id: 0,          // number
    name: '',       // string
    lgas: []        // array of LGA objects
};

// CompanyInfo Object
const CompanyInfo = {
    _id: '',        // optional string
    name: '',       // string
    email: '',      // string
    phone: '',      // string
    state: '',      // string
    lga: '',        // string
    officeAddress: '',  // string
    description: '',    // string
    userId: ''      // string
};

// SWExtra Object
const SWExtra = {
    services: [
        {
            title: '',        // string
            skills: [],       // array of strings
            description: '',  // string
            category: ''      // string
        }
    ],
    subscription: {
        type: '',            // string
        subscribedDate: new Date(), // Date
        expiringDate: new Date(),  // Date
        pop: '',             // string
        popConfirmed: false, // boolean
        amountPaid: 0       // number
    },
    bankDetails: {
        accountName: '',    // string
        accountNumber: '',  // string
        bankName: ''        // string
    },
    experience: [
        {
            title: '',        // string
            company: '',      // string
            onRole: false,    // boolean
            state: '',        // string
            lga: '',          // string
            address: '',      // string
            description: '',  // string
            startDate: new Date(),  // Date
            endDate: new Date()     // Date
        }
    ],
    level: 'Beginner',     // string (Beginner, Intermediate, Pro)
    onAJob: false,         // boolean
    catalog: [
        {
            filename: '',    // string
            title: '',       // string
            description: ''  // string
        }
    ]
};

// User Object
const User = {
    _id: '',           // string
    email: '',         // string
    password: '',      // string
    phone: '',         // string
    type: '',          // string
    typeClass: '',     // string
    dpFileName: '',    // string
    active: false,     // boolean
    verification: {
        idCardUrl: '',       // string
        capturedPhotoUrl: '', // string
        kycVerified: false    // boolean
    }
};

// UserExtra Object
const UserExtra = {
    rating: 0,            // number
    comments: [
        {
            comment: '',    // string
            clientId: ''    // string
        }
    ]
};

module.exports = {IndividualPersonalInfo, LGA, State, User, CompanyInfo, UserExtra, SWExtra}