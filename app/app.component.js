"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\" [class.selected]=\"hero === selectedHero\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\t\t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n  ",
            styles: ["\n  \t.selected {\n    \tbackground-color: #CFD8DC !important;\n    \tcolor: white;\n\t\t}\n  \t.heroes {\n    \tmargin: 0 0 2em 0;\n    \tlist-style-type: none;\n    \tpadding: 0;\n    \twidth: 15em;\n  \t}\n  \t.heroes li {\n    \tcursor: pointer;\n    \tposition: relative;\n    \tleft: 0;\n    \tbackground-color: #EEE;\n    \tmargin: .5em;\n    \tpadding: .3em 0;\n    \theight: 1.6em;\n    \tborder-radius: 4px;\n  \t}\n  \t.heroes li.selected:hover {\n    \tbackground-color: #BBD8DC !important;\n    \tcolor: white;\n  \t}\n  \t.heroes li:hover {\n    \tcolor: #607D8B;\n    \tbackground-color: #DDD;\n    \tleft: .1em;\n  \t}\n  \t.heroes .text {\n    \tposition: relative;\n    \ttop: -3px;\n\t\t}\n  \t.heroes .badge {\n    \tdisplay: inline-block;\n    \tfont-size: small;\n    \tcolor: white;\n    \tpadding: 0.8em 0.7em 0 0.7em;\n    \tbackground-color: #607D8B;\n    \tline-height: 1em;\n    \tposition: relative;\n    \tleft: -1px;\n    \ttop: -4px;\n    \theight: 1.8em;\n    \tmargin-right: .8em;\n    \tborder-radius: 4px 0 0 4px;\n\t\t}\n\t"],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map