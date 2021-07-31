const express = require("express");
const app = express();
const faker = require("faker");
const port = 8000;


class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.name.findName() ;
        this.address = {
            street: faker.address.streetName(),
            city : faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }


    }
}


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


const user = new User();
app.get("/api/users/new", (req, res) => {
    res.json(user);
});


const company = new Company();
app.get("/api/companies/new", (req, res) => {
    res.json(company);
    
});

const userCompany = {
    user : new User(),
    company : new Company()
}

app.get("/api/user/company", (req, res) => {
    res.json(userCompany);
    
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );