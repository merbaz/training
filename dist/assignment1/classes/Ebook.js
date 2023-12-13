"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("./Book"));
class Ebook extends Book_1.default {
    constructor() {
        super(...arguments);
        this.format = "ENGLISH";
    }
}
exports.default = Ebook;
//# sourceMappingURL=Ebook.js.map