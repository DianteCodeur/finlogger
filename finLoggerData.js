db.users.insertMany([{
  "user_id": "USER_1",
  "email": "johndoe@example.com",
  "profile": {
    "firstname": "John",
    "lastname": "Doe",
    "income": 1400
  }
},
{
  "user_id": "USER_2",
  "email": "emilybrown@example.com",
  "profile": {
    "firstname": "Emily",
    "lastname": "Brown",
    "income": 1200
  }
}]);

//db.expense_categories.deleteMany({});


db.expense_categories.insertMany([
  { _id: "CAT_EDU", name: "Education" },
  { _id: "CAT_ENT", name: "Entertainment" },
  { _id: "CAT_FOOD", name: "Food" },
  { _id: "CAT_HEALTH", name: "Healthcare" },
  { _id: "CAT_HOUSE", name: "Housing" },
  { _id: "CAT_INS", name: "Insurance" },
  { _id: "CAT_MISC", name: "Miscellaneous" },
  { _id: "CAT_PCARE", name: "Personal Care" },
  { _id: "CAT_SAVINV", name: "Savings and Investments" },
  { _id: "CAT_TAX", name: "Taxes" },
  { _id: "CAT_TRANS", name: "Transportation" },
  { _id: "CAT_UTIL", name: "Utilities" },
]);


db.expenses.insertMany([
    {
        "user_id": "USER_1",
        "description": "Electricity Bill",
        "amount": 37,
        "date": new ISODate("2020-01-02T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Groceries",
        "amount": 54,
        "date": new ISODate("2020-01-03T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Groceries",
        "amount": 28,
        "date": new ISODate("2020-01-15T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Groceries",
        "amount": 44,
        "date": new ISODate("2020-01-22T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Haircut",
        "amount": 33,
        "date": new ISODate("2020-01-03T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 110,
        "date": new ISODate("2020-01-04T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Life Insurance",
        "amount": 80,
        "date": new ISODate("2020-01-05T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Internet Bill",
        "amount": 17,
        "date": new ISODate("2020-01-05T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Gym Membership",
        "amount": 33,
        "date": new ISODate("2020-01-02T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Tution Fee",
        "amount": 44,
        "date": new ISODate("2020-01-09T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 83,
        "date": new ISODate("2020-01-10T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Water Bill",
        "amount": 28,
        "date": new ISODate("2020-01-11T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Rent",
        "amount": 280,
        "date": new ISODate("2020-01-04T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Haircut",
        "amount": 22,
        "date": new ISODate("2020-01-12T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Mutual Funds",
        "amount": 20,
        "date": new ISODate("2020-01-17T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Stocks",
        "amount": 11,
        "date": new ISODate("2020-01-07T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Retirement Account",
        "amount": 47,
        "date": new ISODate("2020-01-23T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Doctor Visit",
        "amount": 40,
        "date": new ISODate("2020-01-24T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Fuel",
        "amount": 21,
        "date": new ISODate("2020-01-13T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Car Maintenance",
        "amount": 90,
        "date": new ISODate("2020-01-24T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 25,
        "date": new ISODate("2020-01-25T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 43,
        "date": new ISODate("2020-02-09T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 159,
        "date": new ISODate("2020-02-10T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 30,
        "date": new ISODate("2020-02-15T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 79,
        "date": new ISODate("2020-02-16T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Books purchased",
        "amount": 103,
        "date": new ISODate("2020-02-17T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 57,
        "date": new ISODate("2020-02-17T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "personal care products",
        "amount": 64,
        "date": new ISODate("2020-02-20T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Advance tax",
        "amount": 70,
        "date": new ISODate("2020-02-22T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 118,
        "date": new ISODate("2020-02-23T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Car service",
        "amount": 46,
        "date": new ISODate("2020-02-28T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 47,
        "date": new ISODate("2020-03-04T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 35,
        "date": new ISODate("2020-03-04T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 85,
        "date": new ISODate("2020-03-18T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Movie",
        "amount": 80,
        "date": new ISODate("2020-03-22T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Mobile bill",
        "amount": 35,
        "date": new ISODate("2020-03-25T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Life insurance",
        "amount": 47,
        "date": new ISODate("2020-03-28T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 24,
        "date": new ISODate("2020-04-02T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 24,
        "date": new ISODate("2020-04-06T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 43,
        "date": new ISODate("2020-04-06T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 140,
        "date": new ISODate("2020-04-13T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Vacation",
        "amount": 72,
        "date": new ISODate("2020-04-13T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 275,
        "date": new ISODate("2020-04-15T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Life insurance",
        "amount": 92,
        "date": new ISODate("2020-04-15T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Mobile bill",
        "amount": 75,
        "date": new ISODate("2020-04-19T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Movie",
        "amount": 71,
        "date": new ISODate("2020-04-21T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 92,
        "date": new ISODate("2020-04-24T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 62,
        "date": new ISODate("2020-05-03T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Mobile bill",
        "amount": 22,
        "date": new ISODate("2020-05-03T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 256,
        "date": new ISODate("2020-05-05T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Grocery",
        "amount": 61,
        "date": new ISODate("2020-05-11T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Petrol",
        "amount": 119,
        "date": new ISODate("2020-05-11T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 61,
        "date": new ISODate("2020-05-12T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 41,
        "date": new ISODate("2020-05-13T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 122,
        "date": new ISODate("2020-05-17T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Movie",
        "amount": 41,
        "date": new ISODate("2020-05-18T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Birthday",
        "amount": 72,
        "date": new ISODate("2020-05-18T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 65,
        "date": new ISODate("2020-05-19T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 75,
        "date": new ISODate("2020-05-20T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Mutual Funds",
        "amount": 65,
        "date": new ISODate("2020-05-26T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 22,
        "date": new ISODate("2020-05-28T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 83,
        "date": new ISODate("2020-06-02T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Petrol",
        "amount": 59,
        "date": new ISODate("2020-06-02T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Vacation",
        "amount": 26,
        "date": new ISODate("2020-06-06T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 38,
        "date": new ISODate("2020-06-08T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 54,
        "date": new ISODate("2020-06-11T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "personal care products",
        "amount": 38,
        "date": new ISODate("2020-06-16T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 54,
        "date": new ISODate("2020-06-18T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Birthday",
        "amount": 26,
        "date": new ISODate("2020-06-19T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Car service",
        "amount": 59,
        "date": new ISODate("2020-06-22T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 25,
        "date": new ISODate("2020-06-24T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 95,
        "date": new ISODate("2020-06-24T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 25,
        "date": new ISODate("2020-06-25T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 73,
        "date": new ISODate("2020-06-28T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 26,
        "date": new ISODate("2020-07-02T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 58,
        "date": new ISODate("2020-07-03T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 32,
        "date": new ISODate("2020-07-03T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 49,
        "date": new ISODate("2020-07-04T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Rent",
        "amount": 247,
        "date": new ISODate("2020-07-08T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 58,
        "date": new ISODate("2020-07-12T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Advance tax",
        "amount": 71,
        "date": new ISODate("2020-07-12T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 32,
        "date": new ISODate("2020-07-13T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 26,
        "date": new ISODate("2020-07-21T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 49,
        "date": new ISODate("2020-07-24T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Mobile bill",
        "amount": 53,
        "date": new ISODate("2020-08-04T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 44,
        "date": new ISODate("2020-08-06T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 125,
        "date": new ISODate("2020-08-07T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 147,
        "date": new ISODate("2020-08-07T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Rent",
        "amount": 125,
        "date": new ISODate("2020-08-11T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Birthday",
        "amount": 61,
        "date": new ISODate("2020-08-12T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Advance tax",
        "amount": 116,
        "date": new ISODate("2020-08-16T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 55,
        "date": new ISODate("2020-08-18T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 33,
        "date": new ISODate("2020-08-23T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 43,
        "date": new ISODate("2020-08-23T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Movie",
        "amount": 33,
        "date": new ISODate("2020-08-25T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Books purchased",
        "amount": 44,
        "date": new ISODate("2020-08-28T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 91,
        "date": new ISODate("2020-09-04T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 64,
        "date": new ISODate("2020-09-06T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Birthday",
        "amount": 28,
        "date": new ISODate("2020-09-07T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Petrol",
        "amount": 101,
        "date": new ISODate("2020-09-12T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Movie",
        "amount": 70,
        "date": new ISODate("2020-09-13T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "personal care products",
        "amount": 74,
        "date": new ISODate("2020-09-16T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Vacation",
        "amount": 28,
        "date": new ISODate("2020-09-18T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 98,
        "date": new ISODate("2020-09-20T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 119,
        "date": new ISODate("2020-09-23T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Rent",
        "amount": 119,
        "date": new ISODate("2020-09-25T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 64,
        "date": new ISODate("2020-09-27T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 81,
        "date": new ISODate("2020-10-04T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Mutual Funds",
        "amount": 63,
        "date": new ISODate("2020-10-05T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 21,
        "date": new ISODate("2020-10-11T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 33,
        "date": new ISODate("2020-10-12T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "School Fees",
        "amount": 106,
        "date": new ISODate("2020-10-13T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 21,
        "date": new ISODate("2020-10-13T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 127,
        "date": new ISODate("2020-10-14T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Policy",
        "amount": 63,
        "date": new ISODate("2020-10-15T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Car service",
        "amount": 113,
        "date": new ISODate("2020-10-17T00:00:00.000Z"),
        "category_id": "CAT_TRANS"
    },
    {
        "user_id": "USER_1",
        "description": "Grocery",
        "amount": 103,
        "date": new ISODate("2020-10-21T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 70,
        "date": new ISODate("2020-10-25T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 33,
        "date": new ISODate("2020-10-26T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "personal care products",
        "amount": 58,
        "date": new ISODate("2020-10-27T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 24,
        "date": new ISODate("2020-11-02T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Mutual Funds",
        "amount": 113,
        "date": new ISODate("2020-11-04T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    },
    {
        "user_id": "USER_1",
        "description": "Vacation",
        "amount": 37,
        "date": new ISODate("2020-11-08T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Books purchased",
        "amount": 100,
        "date": new ISODate("2020-11-09T00:00:00.000Z"),
        "category_id": "CAT_EDU"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 37,
        "date": new ISODate("2020-11-10T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 50,
        "date": new ISODate("2020-11-11T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Medicines",
        "amount": 24,
        "date": new ISODate("2020-11-11T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 33,
        "date": new ISODate("2020-11-14T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 130,
        "date": new ISODate("2020-11-17T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Birthday",
        "amount": 37,
        "date": new ISODate("2020-11-17T00:00:00.000Z"),
        "category_id": "CAT_MISC"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 130,
        "date": new ISODate("2020-11-18T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Gym subscription",
        "amount": 33,
        "date": new ISODate("2020-11-24T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Tax",
        "amount": 37,
        "date": new ISODate("2020-11-25T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Term insurance",
        "amount": 98,
        "date": new ISODate("2020-11-26T00:00:00.000Z"),
        "category_id": "CAT_INS"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 35,
        "date": new ISODate("2020-12-05T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "personal care products",
        "amount": 79,
        "date": new ISODate("2020-12-08T00:00:00.000Z"),
        "category_id": "CAT_PCARE"
    },
    {
        "user_id": "USER_1",
        "description": "Mobile bill",
        "amount": 40,
        "date": new ISODate("2020-12-08T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Electricity bill",
        "amount": 40,
        "date": new ISODate("2020-12-08T00:00:00.000Z"),
        "category_id": "CAT_UTIL"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 142,
        "date": new ISODate("2020-12-09T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Repair",
        "amount": 142,
        "date": new ISODate("2020-12-12T00:00:00.000Z"),
        "category_id": "CAT_HOUSE"
    },
    {
        "user_id": "USER_1",
        "description": "Grocery",
        "amount": 44,
        "date": new ISODate("2020-12-15T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Dinner",
        "amount": 44,
        "date": new ISODate("2020-12-18T00:00:00.000Z"),
        "category_id": "CAT_FOOD"
    },
    {
        "user_id": "USER_1",
        "description": "Advance tax",
        "amount": 60,
        "date": new ISODate("2020-12-18T00:00:00.000Z"),
        "category_id": "CAT_TAX"
    },
    {
        "user_id": "USER_1",
        "description": "Outing",
        "amount": 35,
        "date": new ISODate("2020-12-21T00:00:00.000Z"),
        "category_id": "CAT_ENT"
    },
    {
        "user_id": "USER_1",
        "description": "Health check-up",
        "amount": 76,
        "date": new ISODate("2020-12-27T00:00:00.000Z"),
        "category_id": "CAT_HEALTH"
    },
    {
        "user_id": "USER_1",
        "description": "Mutual Funds",
        "amount": 155,
        "date": new ISODate("2020-12-28T00:00:00.000Z"),
        "category_id": "CAT_SAVINV"
    }
]);