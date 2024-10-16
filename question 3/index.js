//Question 3
/* A flight ticket can be booked either by the client himself or by the agent.

Create a class Client with the following private variables:
int clientId
String clientName
String passportNumber

Include getters and setters method in the Client class.

Create a class Agent (which should inherit Client) with the following private varibles:
String agencyName

include getters and setters method in the Agent class.
Create a method  void displayDetails() in the Agent class. This method should display the agent details along with the client details.

Create a Main class to test the above classes.

Sample input:
757
ShriRam
AU7634905

Sample output:
Client Id : 757
client Name : ShriRam
Passport Number : AU7634905
Agency Name : Emperor Traveline */

const express = require('express')
const readline = require('readline');

const app = express()
const PORT = 8080

class Client {
    constructor(clientId, clientName, passportNumber) {
        this._clientId = clientId;
        this._clientName = clientName;
        this._passportNumber = passportNumber;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        this._clientId = value;
    }

    get clientName() {
        return this._clientName;
    }

    set clientName(value) {
        this._clientName = value;
    }

    get passportNumber() {
        return this._passportNumber;
    }

    set passportNumber(value) {
        this._passportNumber = value;
    }
}

class Agent extends Client {
    constructor(clientId, clientName, passportNumber, agencyName) {
        super(clientId, clientName, passportNumber);
        this._agencyName = agencyName;
    }

    get agencyName() {
        return this._agencyName;
    }

    set agencyName(value) {
        this._agencyName = value;
    }

    displayDetails() {
        console.log(`Client Id : ${this.clientId}`);
        console.log(`Client Name : ${this.clientName}`);
        console.log(`Passport Number : ${this.passportNumber}`);
        console.log(`Agency Name : ${this.agencyName}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Client Id: ', (clientId) => {
    rl.question('Enter Client Name: ', (clientName) => {
        rl.question('Enter Passport Number: ', (passportNumber) => {
            const agencyName = "Emperor Traveline"; // Fixed agency name

            const agent = new Agent(parseInt(clientId), clientName, passportNumber, agencyName);
            agent.displayDetails();

            rl.close();
        });
    });
});



app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT} Port`)
})
