"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../util/Util");
const demoMap = () => {
    const name1 = {
        first: 'john',
        last: 'doe',
    };
    const name2 = {
        first: 'jane',
        last: 'doe',
    };
    const name3 = {
        first: 'john',
        last: 'smith',
    };
    const names = [name1, name2];
    var formattedNames = [];
    names.forEach((name) => {
        if (name.first === 'john') {
            formattedNames.push({ first: 'John', last: 'Smith' });
        }
        else {
            formattedNames.push(name);
        }
    });
    console.log(formattedNames[0]);
};
function demoCollections() {
    (0, Util_1.h1)('Collections');
    demoMap();
}
exports.default = demoCollections;
//# sourceMappingURL=Collections.js.map