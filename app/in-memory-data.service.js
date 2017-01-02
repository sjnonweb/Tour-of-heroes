"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Satish Vadera' },
            { id: 12, name: 'Vaibhav Jain' },
            { id: 13, name: 'Harsh Agrawal' },
            { id: 14, name: 'Swapnil singh' },
            { id: 15, name: 'Pranav Agrawal' },
            { id: 16, name: 'Batman' },
            { id: 17, name: 'Spider-man' },
            { id: 18, name: 'Joker' },
            { id: 19, name: 'Thor' },
            { id: 20, name: 'Loki' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map