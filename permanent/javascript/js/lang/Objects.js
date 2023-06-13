"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #### Create object using object literal
const objLiteral = {
    balance: 500,
};
// #### Create object using a class
class ClassObject {
    constructor() {
        this.balance = 1000;
    }
}
const classObj = new ClassObject();
// #### Create object using a function
function FunctionObject() {
    const balance = 9000;
    function showMeBalance() {
        console.log(balance);
    }
}
const functionObj = new FunctionObject();
functionObj.showMeBalance();
// #### Create object using Object.create()
const objCreate = Object.create(objLiteral);
//# sourceMappingURL=Objects.js.map