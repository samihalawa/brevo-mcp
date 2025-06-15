"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    static getAttributeTypeMap() {
        return Cart.attributeTypeMap;
    }
}
exports.Cart = Cart;
Cart.discriminator = undefined;
Cart.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Cart.CurrencyEnum"
    },
    {
        "name": "specificAmount",
        "baseName": "specificAmount",
        "type": "number"
    }
];
(function (Cart) {
    let CurrencyEnum;
    (function (CurrencyEnum) {
        CurrencyEnum[CurrencyEnum["Eur"] = 'EUR'] = "Eur";
    })(CurrencyEnum = Cart.CurrencyEnum || (Cart.CurrencyEnum = {}));
})(Cart = exports.Cart || (exports.Cart = {}));
//# sourceMappingURL=cart.js.map