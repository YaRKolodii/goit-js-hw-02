const ChinaDelivery = 100;
const ChileDelivery = 250;
const AustraliaDelivery = 170;
const JamaicaDelivery = 120;

function getShippingCost(country) {
    let delivery;
    switch (country) {
        case "China":
            delivery = ChinaDelivery;
            break;
        case "Chile":
            delivery = ChileDelivery;
            break;
        case "Australia":
            delivery = AustraliaDelivery;
            break;
        case "Jamaica":
            delivery = JamaicaDelivery;
            break;
        default:
           return "Sorry, there is no delivery to your country"
        
    }
    return `Shipping to ${country} will cost ${delivery} credits`
};

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"