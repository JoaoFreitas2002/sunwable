(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Y0U":
/*!**************************************************!*\
  !*** ./src/app/inverters/inverters.component.ts ***!
  \**************************************************/
/*! exports provided: InvertersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertersComponent", function() { return InvertersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { data1: a0, data2: "inverters" }; };
const _c1 = function (a0) { return { data: a0 }; };
function InvertersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r1.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", inv_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", inv_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, inv_r1.id)));
} }
class InvertersComponent {
    constructor(productSrv) {
        this.productSrv = productSrv;
        this.inverters = [];
    }
    ngOnInit() {
        localStorage.removeItem('id');
        localStorage.removeItem('productType');
        this.AllInverters();
    }
    AllInverters() {
        this.productSrv.getAllInverters().subscribe(data => this.inverters = data);
    }
    ChangeHeighProduct() {
        if (this.inverters.length > 3 && this.inverters.length < 7) {
            return { height: '55%' };
        }
        else if (this.inverters.length > 6 && this.inverters.length < 10) {
            return { height: '35%' };
        }
    }
    ChangeHeighContainer() {
        if (this.inverters.length > 3 && this.inverters.length < 7) {
            return { height: '700px' };
        }
        else if (this.inverters.length > 6 && this.inverters.length < 10) {
            return { height: '1100px' };
        }
    }
}
InvertersComponent.ɵfac = function InvertersComponent_Factory(t) { return new (t || InvertersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
InvertersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvertersComponent, selectors: [["app-inverters"]], decls: 28, vars: 1, consts: [["id", "container1", 1, "container-fluid"], [1, "row", "row-cols-1"], [1, "col", "align-self-start", 2, "height", "80px"], [1, "col", "d-flex", "justify-content-center", "align-self-center"], ["src", "assets/images/inverters/inverters2.svg", "alt", "", "width", "50%", "height", "auto", 1, "m-auto"], [1, "col", "align-self-end"], [1, "text-white", "text-uppercase", "text-center", "mb-n2", "mb-lg-n3"], ["id", "container2", 1, "container-xl"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-3"], ["class", "col pt-3 h-auto", 4, "ngFor", "ngForOf"], ["id", "container3-full", 1, "container-full"], ["id", "container3", 1, "container-xl", "h-100"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"], [1, "col", "pt-3", "h-auto"], [1, "row", "row-cols-2"], [1, "col", "col-left", "float-left"], [1, "col", "colTop"], ["src", "assets/images/inverters/inverters.svg", "alt", "", "width", "30%", "height", "auto", 1, "img1"], [1, "col"], [1, "col", "col-right", "float-right"], ["routerLink", "/product_detail", 1, "img-fluid", "my-5", 2, "cursor", "pointer", 3, "src", "alt", "state"]], template: function InvertersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "inverters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvertersComponent_div_10_Template, 16, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inverters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n.colTop[_ngcontent-%COMP%] {\r\n  min-height: 50%;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  background: #E43D30;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  height: 2500px;\r\n}\r\n#container2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n#container2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0.2rem solid #E43D30;\r\n  background-color: #E43D30;\r\n  color: white;\r\n}\r\n\r\n#container3-full[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n#container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n\r\n\r\n@media (min-width: 576px) {\r\n  \r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1500px;\r\n  }\r\n\r\n  \r\n  #container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1700px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  #container1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 900px;\r\n  }\r\n\r\n  \r\n  #container3-full[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludmVydGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTtBQUN4RTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBLDRFQUE0RTtBQUM1RTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBLDRFQUE0RTtBQUM1RTtFQUNFLGFBQWE7RUFDYixnRUFBb0Y7QUFDdEY7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFFBQVE7QUFDVjtBQUdBLHVFQUF1RTtBQUN2RSxpREFBaUQ7QUFDakQ7RUFDRSwyRUFBMkU7RUFDM0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7RUFDVjs7QUFFRjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxjQUFjO0VBQ2hCOztBQUVGO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSwyRUFBMkU7RUFDM0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6ImludmVydGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGdsb2JhbCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ucm93IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuLmNvbFRvcCB7XHJcbiAgbWluLWhlaWdodDogNTAlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMSB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTQzRDMwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMiB7XHJcbiAgaGVpZ2h0OiAyNTAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIyIGg2IHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjIgYnV0dG9uIHtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNDNEMzA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMy1mdWxsIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFpbmVyM19pbWFnZS5zdmdcIikgcmlnaHQgbm8tcmVwZWF0LCAjRTQzRDMwO1xyXG59XHJcblxyXG4jY29udGFpbmVyMyAuYnRuIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHdoaXRlO1xyXG4gIHRvcDogMzUlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIG1lZGlhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMSBpbWcge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiAxNTAwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIzIC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDQ1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIxIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIyIHtcclxuICAgIGhlaWdodDogMTcwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIxIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIxIGltZyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMiB7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMy1mdWxsIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKkV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiAxMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvertersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inverters',
                templateUrl: './inverters.component.html',
                styleUrls: ['./inverters.component.css']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\sunwable -project\front-end\app\src\main.ts */"zUnb");


/***/ }),

/***/ "1tsv":
/*!***************************************************!*\
  !*** ./src/app/services/website/apresentation.ts ***!
  \***************************************************/
/*! exports provided: Apresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apresentation", function() { return Apresentation; });
class Apresentation {
}


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_website_apresentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/website/apresentation */ "1tsv");
/* harmony import */ var _services_website_characteristic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/website/characteristic */ "xdg1");
/* harmony import */ var _services_website_ourNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/website/ourNumbers */ "h1vZ");
/* harmony import */ var _services_website_website_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/website/website.service */ "OX9N");
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-countup */ "34hJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










const _c0 = function (a0) { return { "background": a0, "background-size": "cover" }; };
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carousel_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", first_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.70) 40%,\n" + "rgba(0, 0, 0, 0.50) 60%, rgba(0, 0, 0, 0.30) 80%, rgba(0, 0, 0, 0) 100%), url(" + carousel_r1.image + ") no-repeat center center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carousel_r1.imageTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](carousel_r1.imageCaption);
} }
class HomeComponent {
    constructor(document, websiteSrv) {
        this.document = document;
        this.websiteSrv = websiteSrv;
        this.options = {
            duration: 2,
            useEasing: false
        };
        this.options2 = {
            duration: 2.5,
            useEasing: false
        };
        this.carousel = [];
    }
    ngOnInit() {
        this.GetAll();
    }
    GetAll() {
        this.apresentation = new _services_website_apresentation__WEBPACK_IMPORTED_MODULE_2__["Apresentation"]();
        this.characteristic = new _services_website_characteristic__WEBPACK_IMPORTED_MODULE_3__["Characteristic"]();
        this.ourNumbers = new _services_website_ourNumbers__WEBPACK_IMPORTED_MODULE_4__["OurNumbers"]();
        this.websiteSrv.GetApresentation().subscribe(data => this.apresentation = data[0]);
        this.websiteSrv.GetCharacteristic().subscribe(data => this.characteristic = data[0]);
        this.websiteSrv.GetAllCarousel().subscribe(data => this.carousel = data);
        this.websiteSrv.GetOurNumbers().subscribe(data => this.ourNumbers = data[0]);
    }
    onWindowScroll() {
        const height = window.pageYOffset;
        const width = window.screen.width;
        if (width >= 768 && width <= 1024) {
            if (height > 922) {
                this.countUp = true;
            }
            else {
                this.countUp = false;
            }
        }
        else if (width >= 1372) {
            if (height >= 1364 && height <= 2641) {
                this.countUp = true;
            }
            else {
                this.countUp = false;
            }
        }
        else if (width > 1024 && width < 1372) {
            if (height >= 1950 && height <= 2552) {
                this.countUp = true;
            }
            else {
                this.countUp = false;
            }
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_website_website_service__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 154, vars: 25, consts: [["id", "carouselControls", "data-ride", "carousel", "data-interval", "3500", "data-keyboard", "false", "data-pause", "false", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-inner", "text-center"], ["class", "carousel-item", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], ["href", "#carouselControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", "w-10"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselControls", "role", "button", "data-slide", "next", 1, "carousel-control-next", "w-10"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container-fluid", "text-center", "container1-apresen"], [1, "row"], [1, "col-lg", "h-100", "container1"], [1, "row", "row-cols-1", "row-cols-sm-3", "row-tr-3", "row-tr-sm-1"], [1, "col"], [1, "row", "row-cols-1"], [1, "col", "h-30", "h-sm-25", "mt-auto"], ["alt", "", "height", "100%", "width", "auto", 3, "src"], [1, "col", "h-30", "h-sm-35", "mb-auto"], ["alt", "", "width", "auto", "height", "100%", 3, "src"], [1, "container-fluid", "container2-charac"], [1, "container-lg", "h-100", "container2"], [1, "col", "h-15", "d-flex", "justify-content-center"], [1, "text-uppercase", "m-auto"], [1, "col", "h-85", "text-left", "pb-3"], [1, "row", "row-cols-1", "row-cols-lg-2", "no-gutters"], [1, "col", "col-img", "col-lg-4", "d-none", "d-md-block"], ["alt", "", "width", "100%", "height", "100%", 3, "src"], [1, "col", "col-container", "col-lg-8"], [1, "row", "row-cols-1", "row-cols-sm-2", "container2-1"], [1, "col", "col-charac"], [1, "col", "h-20", 2, "margin-top", "15px"], ["alt", "", "width", "auto", "height", "100%", 1, "pt-1", 3, "src"], [1, "col", "h-80"], [1, "h-25"], [1, "container-fluid", "container3-becomeInstaller"], [1, "container-lg", "h-100", "container3"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"], [1, "container-lg", "container4"], [1, "row", "row-cols-1", "text-center"], [1, "col", "h-15", "h-sm-20", "d-flex", "justify-content-center"], [1, "col", "h-85", "h-sm-80"], [1, "row", "row-cols-1", "row-tr-3", "row-cols-sm-3", "row-tr-sm-1"], [3, "countUp", "options"], [1, "container-fluid", "container5-contact"], [1, "container-lg", "h-100", "container5"], [1, "row", "row-cols-2", "text-left"], [1, "text-left", "m-auto", "text"], ["routerLink", "/contact", 1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent"], ["src", "assets/images/container5_icon.svg", "alt", "", "width", "100%", "height", "100%", 1, "float-right"], [1, "carousel-item", 3, "ngStyle"], [1, "d-flex", "h-100", "align-items-center", "justify-content-center", "text-white"], [2, "width", "80%", "margin", "auto"], [1, "text-uppercase"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "why Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "photovoltaic high performance modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Polycrystalline and Monocrystalline cells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "PV High-performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Green Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "25 years linear performance guarantee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "our numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "installed watts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "completed projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "satisfied customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Get in touch!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "For further information or any other contact please send us a email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.apresentation.missionImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apresentation.mission);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.apresentation.focusImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apresentation.focus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.apresentation.whyUsImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.apresentation.whyUs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.characteristic.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.characteristic.panelImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characteristic.panel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.characteristic.chargeImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characteristic.charge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.characteristic.selectionImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characteristic.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.characteristic.warrantyImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.characteristic.warranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ourNumbers.wattsImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx.ourNumbers.watts)("options", ctx.options2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ourNumbers.projectsImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx.ourNumbers.projects)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ourNumbers.clientsImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", ctx.ourNumbers.clients)("options", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_countup__WEBPACK_IMPORTED_MODULE_6__["CountUpDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".carousel-item[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n}\r\n.carousel-control-prev-icon[_ngcontent-%COMP%] {\r\n  background-image: url('arrow_left.png');\r\n  width: 20px;\r\n  height: 40px;\r\n}\r\n.carousel-control-next-icon[_ngcontent-%COMP%] {\r\n  background-image: url('arrow_right.png');\r\n  width: 20px;\r\n  height: 40px;\r\n}\r\n\r\n\r\n.container1-apresen[_ngcontent-%COMP%] {\r\n  height: 700px;\r\n  background: linear-gradient(to bottom, rgba(225, 225, 255, 0) 25%, rgba(225, 225, 224, 0.25) 50%,\r\n  rgba(225, 224, 224, 0.5) 75%, rgba(224, 224, 224, 0.75) 100%);\r\n  color: #E43D30;\r\n}\r\n.container1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #706F6F;\r\n}\r\n\r\n\r\n.container2-charac[_ngcontent-%COMP%] {\r\n  height: 1050px;\r\n  background: linear-gradient(to bottom, rgba(225, 225, 255, 0) 25%, rgba(225, 225, 224, 0) 50%,\r\n  rgba(225, 224, 224, 0.25) 75%, rgba(224, 224, 224, 0.50) 100%);\r\n  color: #706F6F;\r\n}\r\n.container2-1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n.container2-1[_ngcontent-%COMP%] {\r\n  margin: 0 10px;\r\n}\r\n.col-charac[_ngcontent-%COMP%] {\r\n  background-color: #f4f4f4;\r\n  height: 24%;\r\n  margin: auto;\r\n}\r\n.col-img[_ngcontent-%COMP%] {\r\n  height: 25%;\r\n}\r\n.col-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.container3-becomeInstaller[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n.container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n\r\n.container4[_ngcontent-%COMP%] {\r\n  height: 700px;\r\n  color: #706F6F;\r\n}\r\n\r\n\r\n.container5-contact[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  background: #F6F6F6;\r\n}\r\n.container5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n.container5[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  border: 0.2rem solid #E43D30;\r\n  width: 40%;\r\n  height: 20%;\r\n  top: 40%;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 576px) {\r\n\r\n  .container1-apresen[_ngcontent-%COMP%], .container4[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n\r\n  .container2-charac[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n  }\r\n\r\n  .col-charac[_ngcontent-%COMP%] {\r\n    max-width: 49%;\r\n    height: 49%;\r\n  }\r\n\r\n  .container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n  .container5-contact[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carousel-item[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n  }\r\n\r\n  .container2-charac[_ngcontent-%COMP%] {\r\n    height: 1050px;\r\n  }\r\n\r\n  .col-container[_ngcontent-%COMP%] {\r\n    height: 70%;\r\n  }\r\n\r\n  .container4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container1-apresen[_ngcontent-%COMP%], .container4[_ngcontent-%COMP%] {\r\n    height: 350px;\r\n  }\r\n\r\n  .carousel-item[_ngcontent-%COMP%] {\r\n    height: 736px;\r\n  }\r\n\r\n  .container2-charac[_ngcontent-%COMP%] {\r\n    height: 750px;\r\n  }\r\n\r\n  .col-img[_ngcontent-%COMP%], .col-container[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n\r\n  .container3-becomeInstaller[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n\r\n  .container5-contact[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEUsd0VBQXdFO0FBQ3hFLHdFQUF3RTtBQUd4RSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFLDRFQUE0RTtBQUU1RSwwRUFBMEU7QUFDMUUsMEVBQTBFO0FBQzFFO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSx1Q0FBMkQ7RUFDM0QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0Usd0NBQTREO0VBQzVELFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtFQUNiOytEQUM2RDtFQUM3RCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsNEVBQTRFO0FBQzVFLDRFQUE0RTtBQUM1RTtFQUNFLGNBQWM7RUFDZDtnRUFDOEQ7RUFDOUQsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsNEVBQTRFO0FBQzVFLDRFQUE0RTtBQUM1RTtFQUNFLGFBQWE7RUFDYixnRUFBb0Y7QUFDdEY7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFFBQVE7QUFDVjtBQUVBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7QUFFQSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7QUFFQSw0RUFBNEU7QUFDNUUsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtBQUNWO0FBR0EsdUVBQXVFO0FBQ3ZFLHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkUsaURBQWlEO0FBQ2pEOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtFQUNWOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgR0xPQkFMICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBHTE9CQUwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEdMT0JBTCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT01QT05FTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT01QT05FTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT01QT05FTlRTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ0FST1VTRUwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIENBUk9VU0VMICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9hcnJvd3MvYXJyb3dfbGVmdC5wbmdcIik7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9hcnJvd3MvYXJyb3dfcmlnaHQucG5nXCIpO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09OVEFJTkVSMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09OVEFJTkVSMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVyMS1hcHJlc2VuIHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjI1LCAyMjUsIDI1NSwgMCkgMjUlLCByZ2JhKDIyNSwgMjI1LCAyMjQsIDAuMjUpIDUwJSxcclxuICByZ2JhKDIyNSwgMjI0LCAyMjQsIDAuNSkgNzUlLCByZ2JhKDIyNCwgMjI0LCAyMjQsIDAuNzUpIDEwMCUpO1xyXG4gIGNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4uY29udGFpbmVyMSBwIHtcclxuICBjb2xvcjogIzcwNkY2RjtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIENPTlRBSU5FUjIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIENPTlRBSU5FUjIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNvbnRhaW5lcjItY2hhcmFjIHtcclxuICBoZWlnaHQ6IDEwNTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyNSwgMjI1LCAyNTUsIDApIDI1JSwgcmdiYSgyMjUsIDIyNSwgMjI0LCAwKSA1MCUsXHJcbiAgcmdiYSgyMjUsIDIyNCwgMjI0LCAwLjI1KSA3NSUsIHJnYmEoMjI0LCAyMjQsIDIyNCwgMC41MCkgMTAwJSk7XHJcbiAgY29sb3I6ICM3MDZGNkY7XHJcbn1cclxuXHJcbi5jb250YWluZXIyLTEgaDUge1xyXG4gIGNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4uY29udGFpbmVyMi0xIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmNvbC1jaGFyYWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgaGVpZ2h0OiAyNCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29sLWltZyB7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi5jb2wtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT05UQUlORVIzICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT05UQUlORVIzICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jb250YWluZXIzLWJlY29tZUluc3RhbGxlciB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhaW5lcjNfaW1hZ2Uuc3ZnXCIpIHJpZ2h0IG5vLXJlcGVhdCwgI0U0M0QzMDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjMgLmJ0biB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB3aGl0ZTtcclxuICB0b3A6IDM1JTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT05UQUlORVI0ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT05UQUlORVI0ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5jb250YWluZXI0IHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIGNvbG9yOiAjNzA2RjZGO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09OVEFJTkVSNSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09OVEFJTkVSNSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVyNS1jb250YWN0IHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGNkY2RjY7XHJcbn1cclxuXHJcbi5jb250YWluZXI1IHNwYW4ge1xyXG4gIGNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4uY29udGFpbmVyNSAuYnRuIHtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgdG9wOiA0MCU7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUVESUEgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1FRElBICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNRURJQSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKlNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcjEtYXByZXNlbiwgLmNvbnRhaW5lcjQge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIyLWNoYXJhYyB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbC1jaGFyYWMge1xyXG4gICAgbWF4LXdpZHRoOiA0OSU7XHJcbiAgICBoZWlnaHQ6IDQ5JTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIzIC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXI1LWNvbnRhY3Qge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qTWVkaXVtIGRldmljZXMgKHRhYmxldHMpKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIyLWNoYXJhYyB7XHJcbiAgICBoZWlnaHQ6IDEwNTBweDtcclxuICB9XHJcblxyXG4gIC5jb2wtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLypMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluZXIxLWFwcmVzZW4sIC5jb250YWluZXI0IHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDczNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjItY2hhcmFjIHtcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLWltZyxcclxuICAuY29sLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyMy1iZWNvbWVJbnN0YWxsZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXI1LWNvbnRhY3Qge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _services_website_website_service__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C55j":
/*!****************************************************!*\
  !*** ./src/app/structures/structures.component.ts ***!
  \****************************************************/
/*! exports provided: StructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuresComponent", function() { return StructuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StructuresComponent {
    constructor() { }
    ngOnInit() {
    }
}
StructuresComponent.ɵfac = function StructuresComponent_Factory(t) { return new (t || StructuresComponent)(); };
StructuresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StructuresComponent, selectors: [["app-structures"]], decls: 32, vars: 0, consts: [["id", "container1", 1, "container-fluid"], [1, "row", "row-cols-1"], [1, "col", "align-self-start", 2, "height", "80px"], [1, "col", "d-flex", "justify-content-center", "align-self-center"], ["src", "assets/images/structures/structures.svg", "alt", "Structures", "width", "50%", "height", "auto", 1, "m-auto"], [1, "col", "align-self-end"], [1, "text-white", "text-uppercase", "text-center", "mb-n2"], ["id", "container2", 1, "container-xl"], [1, "col", "h-25", "d-flex", "justify-content-center"], [1, "m-auto"], [1, "col", "h-75", "d-flex", "justify-content-center"], ["src", "assets/images/structures/structures2.svg", "alt", "", "width", "40%", "height", "auto", 1, "m-auto"], ["id", "container3-full", 1, "container-full"], ["id", "container3", 1, "container-xl", "h-100"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"]], template: function StructuresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Structures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "available soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  background: #E43D30;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  height: 700px;\r\n}\r\n\r\n#container3-full[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n#container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n\r\n\r\n@media (min-width: 576px) {\r\n  \r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n  }\r\n\r\n  \r\n  #container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  \r\n  #container3-full[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEU7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUEsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtBQUNmO0FBRUEsNEVBQTRFO0FBQzVFO0VBQ0UsYUFBYTtFQUNiLGdFQUFvRjtBQUN0RjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsUUFBUTtBQUNWO0FBR0EsdUVBQXVFO0FBQ3ZFLGlEQUFpRDtBQUNqRDtFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLFVBQVU7RUFDWjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0VBQ1Y7O0FBRUY7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSwyRUFBMkU7RUFDM0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsMkVBQTJFO0VBQzNFO0lBQ0UsY0FBYztFQUNoQjs7QUFFRjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InN0cnVjdHVyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBnbG9iYWwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNFNDNEMzA7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNjb250YWluZXIxIHtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNFNDNEMzA7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNjb250YWluZXIyIHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMy1mdWxsIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFpbmVyM19pbWFnZS5zdmdcIikgcmlnaHQgbm8tcmVwZWF0LCAjRTQzRDMwO1xyXG59XHJcblxyXG4jY29udGFpbmVyMyAuYnRuIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHdoaXRlO1xyXG4gIHRvcDogMzUlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIG1lZGlhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMSBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIzICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjMgLmJ0biB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRvcDogNDUlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMiB7XHJcbiAgICBoZWlnaHQ6IDExMDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKkxhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIxIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIzLWZ1bGwge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMSB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StructuresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-structures',
                templateUrl: './structures.component.html',
                styleUrls: ['./structures.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EPPC":
/*!*********************************************!*\
  !*** ./src/app/services/website/shedule.ts ***!
  \*********************************************/
/*! exports provided: Shedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shedule", function() { return Shedule; });
class Shedule {
}


/***/ }),

/***/ "H1SQ":
/*!**********************************************************!*\
  !*** ./src/app/solar-modules/solar-modules.component.ts ***!
  \**********************************************************/
/*! exports provided: SolarModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarModulesComponent", function() { return SolarModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { data1: a0, data2: "solarModules" }; };
const _c1 = function (a0) { return { data: a0 }; };
function SolarModulesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sm_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sm_r1.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, sm_r1.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sm_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sm_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, sm_r1.id)));
} }
class SolarModulesComponent {
    constructor(productSrv) {
        this.productSrv = productSrv;
        this.solarModules = [];
    }
    ngOnInit() {
        localStorage.removeItem('id');
        localStorage.removeItem('productType');
        this.AllSolarModules();
    }
    AllSolarModules() {
        this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
    }
}
SolarModulesComponent.ɵfac = function SolarModulesComponent_Factory(t) { return new (t || SolarModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
SolarModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolarModulesComponent, selectors: [["app-solar-modules"]], decls: 28, vars: 1, consts: [["id", "container1", 1, "container-fluid"], [1, "row", "row-cols-1"], [1, "col", "align-self-start", 2, "height", "80px"], [1, "col", "d-flex", "justify-content-center", "align-self-center"], ["src", "assets/images/solar%20modules/solarModules.svg", "alt", "", "width", "50%", "height", "auto", 1, "m-auto"], [1, "col", "align-self-end"], [1, "text-white", "text-uppercase", "text-center", "mb-n2", "mb-lg-n3"], ["id", "container2", 1, "container-xl"], [1, "row", "row-cols-1", "row-cols-sm-2", "row-cols-lg-3"], ["class", "col pt-3 h-auto", 4, "ngFor", "ngForOf"], ["id", "container3-full", 1, "container-full"], ["id", "container3", 1, "container-xl", "h-100"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"], [1, "col", "pt-3", "h-auto"], [1, "row", "row-cols-2"], [1, "col", "col-left", "float-left"], [1, "col"], ["src", "assets/images/solar%20modules/solarModules2.svg", "alt", "", "width", "30%", "height", "15%", 1, "img1"], ["routerLink", "/product_detail", 3, "state"], [1, "col", "col-right", "float-right"], ["routerLink", "/product_detail", 1, "img-fluid", 2, "cursor", "pointer", 3, "src", "alt", "state"]], template: function SolarModulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "solar modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SolarModulesComponent_div_10_Template, 16, 14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.solarModules);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  background: #E43D30;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  height: 2500px;\r\n}\r\n#container2[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n#container2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0.2rem solid #E43D30;\r\n  background-color: #E43D30;\r\n  color: white;\r\n}\r\n\r\n#container3-full[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n#container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n\r\n\r\n@media (min-width: 576px) {\r\n  \r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n\r\n  \r\n  #container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1400px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  #container1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 900px;\r\n  }\r\n\r\n  \r\n  #container3-full[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGFyLW1vZHVsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFDeEU7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUEsNEVBQTRFO0FBQzVFO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0VBQ2IsZ0VBQW9GO0FBQ3RGO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixRQUFRO0FBQ1Y7QUFHQSx1RUFBdUU7QUFDdkUsaURBQWlEO0FBQ2pEO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBLDRFQUE0RTtFQUM1RTtJQUNFLGNBQWM7RUFDaEI7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0VBQ1Y7O0FBRUY7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSwyRUFBMkU7RUFDM0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsY0FBYztFQUNoQjs7QUFFRjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUEsNEVBQTRFO0VBQzVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDRFQUE0RTtFQUM1RTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDRFQUE0RTtFQUM1RTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzb2xhci1tb2R1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZ2xvYmFsICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5yb3cge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMSB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTQzRDMwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMiB7XHJcbiAgaGVpZ2h0OiAyNTAwcHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIyIGg2IHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjIgYnV0dG9uIHtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNDNEMzA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMy1mdWxsIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGFpbmVyM19pbWFnZS5zdmdcIikgcmlnaHQgbm8tcmVwZWF0LCAjRTQzRDMwO1xyXG59XHJcblxyXG4jY29udGFpbmVyMyAuYnRuIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIHdoaXRlO1xyXG4gIHRvcDogMzUlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIG1lZGlhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMSBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiAxMTAwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIzIC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDQ1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIxIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIyIHtcclxuICAgIGhlaWdodDogMTQwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIxIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIxIGltZyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMiB7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMy1mdWxsIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKkV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiAxMTAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolarModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-solar-modules',
                templateUrl: './solar-modules.component.html',
                styleUrls: ['./solar-modules.component.css']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "N3k6":
/*!*****************************************!*\
  !*** ./src/app/services/solarModule.ts ***!
  \*****************************************/
/*! exports provided: SolarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarModule", function() { return SolarModule; });
class SolarModule {
}


/***/ }),

/***/ "OX9N":
/*!*****************************************************!*\
  !*** ./src/app/services/website/website.service.ts ***!
  \*****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WebsiteService {
    constructor(http) {
        this.http = http;
        this.apresentationUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/apresentation/';
        this.characteristicUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/characteristic/';
        this.ourNumbersUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/ourNumbers/';
        this.carouselUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/carousel/';
        this.sheduleUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/shedule/';
        this.emailUrl = 'http://127.0.0.1:8000/pt/website/mail/';
    }
    GetApresentation() {
        return this.http.get(this.apresentationUrl);
    }
    GetCharacteristic() {
        return this.http.get(this.characteristicUrl);
    }
    GetOurNumbers() {
        return this.http.get(this.ourNumbersUrl);
    }
    GetAllCarousel() {
        return this.http.get(this.carouselUrl);
    }
    GetShedule() {
        return this.http.get(this.sheduleUrl);
    }
    SendEmail(emailform) {
        return this.http.post(this.emailUrl, emailform);
    }
}
WebsiteService.ɵfac = function WebsiteService_Factory(t) { return new (t || WebsiteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebsiteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsiteService, factory: WebsiteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsiteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductsService {
    constructor(http) {
        this.http = http;
        this.solarModulesUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/products/solarModules/';
        this.invertersUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/products/inverters/';
    }
    getAllSolarModules() {
        return this.http.get(this.solarModulesUrl);
    }
    getSolarModule(id) {
        return this.http.get(this.solarModulesUrl + id);
    }
    getAllInverters() {
        return this.http.get(this.invertersUrl);
    }
    getInverter(id) {
        return this.http.get(this.invertersUrl + id);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sce5":
/*!**************************************************!*\
  !*** ./src/app/batteries/batteries.component.ts ***!
  \**************************************************/
/*! exports provided: BatteriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteriesComponent", function() { return BatteriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BatteriesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BatteriesComponent.ɵfac = function BatteriesComponent_Factory(t) { return new (t || BatteriesComponent)(); };
BatteriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BatteriesComponent, selectors: [["app-batteries"]], decls: 32, vars: 0, consts: [["id", "container1", 1, "container-fluid"], [1, "row", "row-cols-1"], [1, "col", "align-self-start", 2, "height", "80px"], [1, "col", "d-flex", "justify-content-center", "align-self-center"], ["src", "assets/images/batteries/batteries.svg", "alt", "", "width", "50%", "height", "auto", 1, "m-auto"], [1, "col", "align-self-end"], [1, "text-white", "text-uppercase", "text-center", "mb-n2"], ["id", "container2", 1, "container-xl"], [1, "col", "h-25", "d-flex", "justify-content-center"], [1, "m-auto"], [1, "col", "h-75", "d-flex", "justify-content-center"], ["src", "assets/images/batteries/batteries2.svg", "alt", "", "width", "40%", "height", "auto", 1, "m-auto"], ["id", "container3-full", 1, "container-full"], ["id", "container3", 1, "container-xl", "h-100"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"]], template: function BatteriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "batteries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "available soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  background: #E43D30;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  height: 700px;\r\n}\r\n\r\n#container3-full[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n#container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n\r\n\r\n@media (min-width: 576px) {\r\n  \r\n  #container1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n  }\r\n\r\n  \r\n  #container3[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  \r\n  #container3-full[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRlcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTtBQUN4RTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBLDRFQUE0RTtBQUM1RTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0FBQ2Y7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0VBQ2IsZ0VBQW9GO0FBQ3RGO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixRQUFRO0FBQ1Y7QUFHQSx1RUFBdUU7QUFDdkUsaURBQWlEO0FBQ2pEO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBLDRFQUE0RTtFQUM1RTtJQUNFLGFBQWE7RUFDZjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7RUFDVjs7QUFFRjtBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJFQUEyRTtFQUMzRTtJQUNFLGFBQWE7RUFDZjs7RUFFQSwyRUFBMkU7RUFDM0U7SUFDRSxjQUFjO0VBQ2hCOztBQUVGO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDRFQUE0RTtFQUM1RTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsc0RBQXNEO0FBQ3REO0VBQ0UsMkVBQTJFO0VBQzNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiYmF0dGVyaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZ2xvYmFsICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5yb3cge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMSB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTQzRDMwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jY29udGFpbmVyMiB7XHJcbiAgaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI2NvbnRhaW5lcjMtZnVsbCB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhaW5lcjNfaW1hZ2Uuc3ZnXCIpIHJpZ2h0IG5vLXJlcGVhdCwgI0U0M0QzMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjMgLmJ0biB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB3aGl0ZTtcclxuICB0b3A6IDM1JTtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKlNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEgaW1nIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIyIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIzIC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDQ1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXIxIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjIge1xyXG4gICAgaGVpZ2h0OiAxMTAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLypMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMy1mdWxsIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKkV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BatteriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-batteries',
                templateUrl: './batteries.component.html',
                styleUrls: ['./batteries.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AppComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.language = 'pt';
        translate.addLangs(['pt', 'en']);
        translate.setDefaultLang('pt');
        translate.use('pt');
    }
    ChangeLanguage() {
        if (this.language == this.translate.langs[0]) {
            this.language = this.translate.langs[1];
            this.translate.use('en');
        }
        else if (this.language == this.translate.langs[1]) {
            this.language = this.translate.langs[0];
            this.translate.use('pt');
        }
    }
    OnWindowScroll() {
        const number_width = window.screen.width;
        if (number_width <= 992) {
            document.getElementById('navbarNavDropdown').style.backgroundColor = '#E43D30';
            document.getElementById('lg').style.color = 'black';
        }
        else if (number_width > 992) {
            document.getElementById('navbarNavDropdown').style.backgroundColor = 'transparent';
            document.getElementById('lg').style.color = '#E43D30';
        }
        const number = window.pageYOffset;
        if (number > 100) {
            document.getElementById('nav').style.background = '#E43D30';
            document.getElementById('lg').style.color = '#000000';
        }
        else if (number < 100) {
            if (window.screen.width <= 995) {
                document.getElementById('nav').style.background = 'transparent';
                document.getElementById('lg').style.color = '#000000';
            }
            else {
                document.getElementById('nav').style.background = 'transparent';
                document.getElementById('lg').style.color = '#E43D30';
            }
        }
    }
    HeaderStyle() {
        if (!this.router.url.includes('/home')) {
            document.getElementById('nav').style.background = '#E43D30';
            document.getElementById('lg').style.color = '#000000';
        }
        else {
            this.OnWindowScroll();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.OnWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 98, vars: 2, consts: [["id", "nav", 1, "navbar", "navbar-expand-lg", "fixed-top", 3, "ngClass"], [1, "container-fluid", "h-100"], ["href", "#", 1, "navbar-brand", "h-100"], ["src", "assets/images/logo.svg", "alt", "", 1, "h-100"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "bi", "bi-list", 2, "font-size", "3rem", "color", "white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "p-3", "p-lg-0"], ["id", "navbar-nav", 1, "navbar-nav", "text-uppercase", "text-center", "ml-lg-auto"], [1, "nav-item", "active"], ["href", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "border-0", "m-auto"], ["routerLink", "/solar_modules", 1, "dropdown-item", "text-uppercase", "text-center"], ["routerLink", "/inverters", 1, "dropdown-item", "text-uppercase", "text-center"], ["routerLink", "/batteries", 1, "dropdown-item", "text-uppercase", "text-center"], ["routerLink", "/structures", 1, "dropdown-item", "text-uppercase", "text-center"], ["href", "#", "id", "navbarDropdownMenuLink2", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink2", 1, "dropdown-menu", "border-0", "m-auto"], [1, "dropdown-item", "text-uppercase", "text-center"], ["routerLink", "/contact", 1, "nav-link"], ["id", "lg", 1, "nav-link", "language", 3, "click"], [1, "container", "container-links"], [1, "row", "row-cols-1", "row-cols-sm-3"], [1, "col", "pt-3", "pt-sm-5"], [1, "row", "row-cols-1"], [1, "col", "align-self-start", "social_media", "px-md-5"], ["translate", "", 1, "text-uppercase", "font-weight-bold", "pb-md-5"], [1, "px-1"], [1, "bi-facebook"], [1, "bi-linkedin"], [1, "bi-instagram"], [1, "col", "align-self-start", "px-md-5"], [1, "text-uppercase", "font-weight-bold", "pb-md-5"], [1, "px-0"], [1, "pb-3"], ["routerLink", "/contact"], [1, "container-fluid", "footer"], [1, "row", "copyright", "d-flex", "justify-content-center"], [1, "text-center"], ["href", "http://www.paleta3.com/"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Solar Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inverters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Batteries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Structures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " suport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Met\u00F3do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Instala\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Downloads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_42_listener() { return ctx.ChangeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "h6", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "SUNWABLE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Solutions Unipessoal, Lda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h6", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "CONTACT INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Rua Brito Limpo, n\u00BA 31, 1 DRT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "4755-056 Barcelinhos - PORTUGAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Phone: +351 900 000 000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Email: info@sunwable.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "QUICK LINKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Disclaimers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Copyright \u00A92020 All rights reserved | by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Paleta3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.HeaderStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.language);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n  width: 55%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  height: 90px;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #C83D30;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  text-transform: none;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  background-color: #E43D30;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 0;\r\n}\r\n\r\n.language[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.container-links[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.social_media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n  font-size: 2rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n\r\n.container-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .container-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #706F6F;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  background-color: #E43D30;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 1023px) {\r\n  #navbarNav[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] {\r\n    max-width: 50%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 576px) {\r\n\r\n  .container-links[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n  .dropdown-toggle[_ngcontent-%COMP%]::after {\r\n    border-top: .4em solid;\r\n    border-right: .4em solid transparent;\r\n    border-left: .4em solid transparent;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1200px) {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUNBLDRFQUE0RTs7QUFDNUUsNEVBQTRFOztBQUM1RSw0RUFBNEU7O0FBRzVFLHFFQUFxRTs7QUFDckUscUVBQXFFOztBQUNyRTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxpRkFBaUY7O0FBQ2pGLGlGQUFpRjs7QUFDakY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUdBLHdFQUF3RTs7QUFDeEUsd0VBQXdFOztBQUN4RTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBLHVFQUF1RTs7QUFDdkUsdUVBQXVFOztBQUN2RSx1RUFBdUU7O0FBQ3ZFO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUEsaURBQWlEOztBQUNqRDs7RUFFRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLDJCQUEyQjs7QUFDM0I7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1DQUFtQztFQUNyQztBQUNGOztBQUVBLHNEQUFzRDs7QUFDdEQ7QUFDQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xyXG4gIHdpZHRoOiA1NSU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluayxcclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09NUE9ORU5UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09NUE9ORU5UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09NUE9ORU5UUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBOQVYgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE5BViAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5uYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogOTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDODNEMzA7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5sYW5ndWFnZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgQ09OVEFJTkVSLUxJTktTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBDT05UQUlORVItTElOS1MgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNvbnRhaW5lci1saW5rcyB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLnNvY2lhbF9tZWRpYSBpIHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbmg2IHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1saW5rcyBwLCAuY29udGFpbmVyLWxpbmtzIGEge1xyXG4gIGNvbG9yOiAjNzA2RjZGO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEZPT1RFUiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgRk9PVEVSICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQzRDMwO1xyXG59XHJcblxyXG4uZm9vdGVyIGg2LCAuZm9vdGVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNRURJQSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTUVESUEgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1FRElBICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAjbmF2YmFyTmF2LCAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG5cclxuICAuY29udGFpbmVyLWxpbmtzIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG59XHJcblxyXG4vKkxhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogLjRlbSBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogLjRlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1sZWZ0OiAuNGVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuLypFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { OnWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _solar_modules_solar_modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solar-modules/solar-modules.component */ "H1SQ");
/* harmony import */ var _inverters_inverters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inverters/inverters.component */ "+Y0U");
/* harmony import */ var _batteries_batteries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./batteries/batteries.component */ "Sce5");
/* harmony import */ var _structures_structures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./structures/structures.component */ "C55j");
/* harmony import */ var ngx_countup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countup */ "34hJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "vR3N");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_countup__WEBPACK_IMPORTED_MODULE_9__["CountUpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _solar_modules_solar_modules_component__WEBPACK_IMPORTED_MODULE_5__["SolarModulesComponent"],
        _inverters_inverters_component__WEBPACK_IMPORTED_MODULE_6__["InvertersComponent"],
        _batteries_batteries_component__WEBPACK_IMPORTED_MODULE_7__["BatteriesComponent"],
        _structures_structures_component__WEBPACK_IMPORTED_MODULE_8__["StructuresComponent"],
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_countup__WEBPACK_IMPORTED_MODULE_9__["CountUpModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _solar_modules_solar_modules_component__WEBPACK_IMPORTED_MODULE_5__["SolarModulesComponent"],
                    _inverters_inverters_component__WEBPACK_IMPORTED_MODULE_6__["InvertersComponent"],
                    _batteries_batteries_component__WEBPACK_IMPORTED_MODULE_7__["BatteriesComponent"],
                    _structures_structures_component__WEBPACK_IMPORTED_MODULE_8__["StructuresComponent"],
                    _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_countup__WEBPACK_IMPORTED_MODULE_9__["CountUpModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    })
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-PT' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_website_shedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/website/shedule */ "EPPC");
/* harmony import */ var _services_website_website_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/website/website.service */ "OX9N");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ContactComponent {
    constructor(websiteSrv) {
        this.websiteSrv = websiteSrv;
    }
    ngOnInit() {
        this.GetAll();
        this.EmailForm = {
            name: '',
            company: '',
            phone: '',
            place: '',
            email: '',
            message: ''
        };
    }
    SendEmail() {
        this.websiteSrv.SendEmail(this.EmailForm).subscribe();
    }
    GetAll() {
        this.shedule = new _services_website_shedule__WEBPACK_IMPORTED_MODULE_1__["Shedule"]();
        this.websiteSrv.GetShedule().subscribe(data => this.shedule = data[0]);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_website_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 77, vars: 7, consts: [["id", "container1", 1, "container-full"], [1, "row"], [1, "mapouter"], [1, "gmap_canvas"], ["id", "gmap_canvas", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maps.google.com/maps?q=N306%2030%2C%204755-056%20Barcelinhos&t=&z=17&ie=UTF8&iwloc=&output=embed")], ["id", "container2", 1, "container-xl", "py-5"], [1, "row", "row-cols-1", "row-cols-md-2"], [1, "col", "col-md-5"], [1, "col", "align-self-start", "text-left"], [1, "pb-5"], [1, "text-uppercase"], [1, "col", "pt-3", "align-self-center"], [1, "col", "pt-3", "align-self-end"], [3, "innerHTML"], [1, "col", "col-md-7"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "nome", "required", "required", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "company"], ["type", "text", "id", "company", "name", "company", "required", "required", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col"], ["for", "phone"], ["type", "text", "id", "phone", "name", "phone", "required", "required", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "place"], ["type", "text", "id", "place", "name", "place", "required", "required", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "message"], ["id", "message", "name", "mensagem", "rows", "8", "required", "required", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Onde estamos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "escrit\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rua B rito limpo, n\u00BA31, 1\u00BA drt. 4750-056 Barcelinhos - BCL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "portugal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "geral@sunwable.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Coordenadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "gps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "41\u00BA31'31.6\"N 8\u00BA37'18.8\"W");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "hor\u00E1rio de atendimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contacte-nos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_40_listener($event) { return ctx.EmailForm.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Empresa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_46_listener($event) { return ctx.EmailForm.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Telefone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_53_listener($event) { return ctx.EmailForm.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Concelho ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_59_listener($event) { return ctx.EmailForm.place = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_65_listener($event) { return ctx.EmailForm.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Mensagem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_71_listener($event) { return ctx.EmailForm.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "* Campos Obrigat\u00F3rios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_74_listener() { return ctx.SendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.shedule.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.place);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.EmailForm.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n}\r\n\r\n.mapouter[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: right;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.gmap_canvas[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  background: none !important;\r\n  height: 100%;\r\n  width: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n#gmap_canvas[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  height: 1700px;\r\n  background: white;\r\n  color: #706F6F;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], #container2[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #container2[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  border: 0.2rem solid #ced4da;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  background-color: #E43D30;\r\n  border: 0.2rem solid #E43D30;\r\n  width: 20%;\r\n  height: 20%;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 576px) {\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n\r\n  \r\n  #container2[_ngcontent-%COMP%] {\r\n    height: 1100px;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container1[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  #container2[_ngcontent-%COMP%]   .col-md-5[_ngcontent-%COMP%], #container2[_ngcontent-%COMP%]   .col-md-7[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1200px) {\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSw0RUFBNEU7O0FBQzVFO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsNEVBQTRFOztBQUM1RTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0EsdUVBQXVFOztBQUV2RSxpREFBaUQ7O0FBQ2pEO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUMzQjs7RUFFRSw0RUFBNEU7RUFDNUU7SUFDRSxjQUFjO0VBQ2hCOzs7QUFHRjs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0VBQ0UsNEVBQTRFO0VBQzVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUEsc0RBQXNEOztBQUN0RDtBQUNBIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjEgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI2NvbnRhaW5lcjEge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi5tYXBvdXRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nbWFwX2NhbnZhcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2dtYXBfY2FudmFzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIyICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNjb250YWluZXIyIHtcclxuICBoZWlnaHQ6IDE3MDBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzcwNkY2RjtcclxufVxyXG5cclxuI2NvbnRhaW5lcjIgLmNvbC1tZC01LCAjY29udGFpbmVyMiAuY29sLW1kLTcge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4jY29udGFpbmVyMiBpbnB1dCwgI2NvbnRhaW5lcjIgdGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICNjZWQ0ZGE7XHJcbn1cclxuXHJcbiNjb250YWluZXIyIGgyIHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjIgLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0M0QzMDtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbiNjb250YWluZXIyIC5idG4gc3BhbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIG1lZGlhICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKlNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxufVxyXG5cclxuLypNZWRpdW0gZGV2aWNlcyAodGFibGV0cykqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyMiB7XHJcbiAgICBoZWlnaHQ6IDExMDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLypMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgI2NvbnRhaW5lcjEge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gICNjb250YWluZXIyIC5jb2wtbWQtNSwgI2NvbnRhaW5lcjIgLmNvbC1tZC03IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8qRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _services_website_website_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"] }]; }, null); })();


/***/ }),

/***/ "h1vZ":
/*!************************************************!*\
  !*** ./src/app/services/website/ourNumbers.ts ***!
  \************************************************/
/*! exports provided: OurNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurNumbers", function() { return OurNumbers; });
class OurNumbers {
}


/***/ }),

/***/ "vR3N":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_solarModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/solarModule */ "N3k6");
/* harmony import */ var _services_inverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/inverter */ "zwQM");
/* harmony import */ var _services_website_characteristic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/website/characteristic */ "xdg1");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var _services_website_website_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/website/website.service */ "OX9N");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = function (a0) { return { data1: a0, data2: "solarModules" }; };
const _c1 = function (a0) { return { data: a0 }; };
function ProductDetailComponent_div_0_div_83_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_div_83_div_2_Template_img_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const sm_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.Refresh(sm_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sm_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sm_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sm_r7.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, sm_r7.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", sm_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", sm_r7.name);
} }
function ProductDetailComponent_div_0_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_0_div_83_div_2_Template, 16, 9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const first_r5 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", first_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3);
} }
function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "POT\u00CANCIA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Datasheet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Fechar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Imprimir Formul\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ProductDetailComponent_div_0_div_83_Template, 3, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.power);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.characteristic.panelImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.panel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.characteristic.chargeImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.charge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.characteristic.selectionImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.characteristic.warrantyImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.solarModule.warranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.solarModule.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.solarModule.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.ArrowStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.ArrowStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
} }
function ProductDetailComponent_div_1_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_1_div_35_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const inv_r16 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.Refresh(inv_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+ Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailComponent_div_1_div_35_div_2_Template_img_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const inv_r16 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.Refresh(inv_r16.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](inv_r16.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", inv_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", inv_r16.name);
} }
function ProductDetailComponent_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_div_1_div_35_div_2_Template, 17, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const first_r14 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", first_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r12);
} }
function ProductDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "POT\u00CANCIA DE SA\u00CDDA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Datasheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fechar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Imprimir Formul\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProductDetailComponent_div_1_div_35_Template, 3, 3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inverter.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inverter.resume);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inverter.power);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.inverter.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dimens\u00F5es: ", ctx_r1.inverter.dimensions, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.inverter.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.inverter.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slides);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.ArrowStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.ArrowStyle());
} }
class ProductDetailComponent {
    constructor(productSrv, websiteSrv) {
        this.productSrv = productSrv;
        this.websiteSrv = websiteSrv;
        this.solarModules = [];
        this.inverters = [];
        this.activate = false;
        this.slides = [[]];
    }
    chunk(arr, chunkSize, solarModule) {
        const R = [];
        // tslint:disable-next-line:only-arrow-functions
        const index = arr.map(function (e) {
            return e.id;
        }).indexOf(solarModule.id);
        if (index > -1) {
            arr.splice(index, 1);
        }
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ngOnInit() {
        this.SeeProductType();
        this.characteristic = new _services_website_characteristic__WEBPACK_IMPORTED_MODULE_3__["Characteristic"]();
    }
    SeeProductType() {
        if (localStorage.getItem('productType') === null) {
            this.productType = history.state.data.data2;
            localStorage.setItem('productType', this.productType);
            this.id = history.state.data.data1;
            localStorage.setItem('id', String(this.id));
        }
        else {
            this.productType = localStorage.getItem('productType');
            this.id = Number(localStorage.getItem('id'));
        }
        if (this.productType === 'solarModules') {
            this.solarModule = new _services_solarModule__WEBPACK_IMPORTED_MODULE_1__["SolarModule"]();
            this.GetAllSolarModules();
            this.GetSolarModule();
            this.GetCharacteristics();
        }
        else if (this.productType === 'inverters') {
            this.inverter = new _services_inverter__WEBPACK_IMPORTED_MODULE_2__["Inverter"]();
            this.GetAllInverters();
            this.GetInverter();
        }
    }
    GetAllSolarModules() {
        this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
    }
    GetSolarModule() {
        this.productSrv.getSolarModule(this.id).subscribe(data => {
            this.solarModule = data;
            this.OnWindowWidth();
        });
    }
    OnWindowWidth() {
        const ScreanWidth = window.screen.width;
        let size;
        if (ScreanWidth >= 576 && ScreanWidth < 768) {
            size = 2;
        }
        else if (ScreanWidth >= 768) {
            size = 3;
        }
        else if (ScreanWidth < 576) {
            size = 1;
        }
        this.slides = this.chunk(this.solarModules, size, this.solarModule);
    }
    GetCharacteristics() {
        this.websiteSrv.GetCharacteristic().subscribe(data => this.characteristic = data[0]);
    }
    GetAllInverters() {
        this.productSrv.getAllInverters().subscribe(data => this.inverters = data);
    }
    GetInverter() {
        this.productSrv.getInverter(this.id).subscribe(data => {
            this.inverter = data;
            this.slides = this.chunk(this.inverters, 3, this.inverter);
        });
    }
    Refresh(id) {
        localStorage.setItem('id', String(id));
        window.location.reload();
    }
    ArrowStyle() {
        if (this.productType === 'solarModule') {
            if (this.solarModules.length <= 3) {
                return { display: 'none' };
            }
        }
        else if (this.productType === 'inverters') {
            if (this.inverters.length <= 3) {
                return { display: 'none' };
            }
        }
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_website_website_service__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], hostBindings: function ProductDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProductDetailComponent_resize_HostBindingHandler() { return ctx.OnWindowWidth(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 19, vars: 2, consts: [["class", "container-xl container-detail margintop-90", 4, "ngIf"], ["class", "container", "id", "container3", 4, "ngIf"], ["id", "container6-full", 1, "container-full"], ["id", "container6", 1, "container-lg", "h-100"], [1, "row", "row-cols-2", "text-white"], [1, "col", "h-100", "d-flex"], [1, "text", "m-auto", "text-left"], [1, "d-none", "d-md-block"], [1, "col", "h-100", "d-flex", "justify-content-center"], [1, "btn", "m-auto", "position-absolute", "bg-transparent"], [1, "font-weight-bold", "bg-transparent", "text-white"], [1, "container-xl", "container-detail", "margintop-90"], [1, "row", "row-cols-1"], [1, "col", "order-first", "col-first"], [1, "row", "row-cols-1", "row-cols-md-2"], [1, "col", "order-last", "order-md-first", "col-info"], [1, "row", "row-cols-1", "d-flex"], [1, "col", "pt-3", "pt-md-5", "col-text"], ["src", "assets/images/solar%20modules/solarModules2.svg", "alt", "", "width", "auto", "height", "8%"], ["id", "h1", 1, "mt-1"], [1, "mb-5", "p"], [1, "m-0", "p", "potencia"], [1, "overflow-auto", "p", "max-h-50"], [1, "col-md", "pt-3", "col-detail"], [1, "row", "row-cols-1", "row-cols-sm-2"], [1, "col", "mr-auto", "col-col-detail"], [1, "col", "col-img", 2, "margin-top", "10px"], ["alt", "", "height", "80%", "width", "auto", 1, "py-2", 3, "src"], [1, "col", "col-text"], [1, "overflow-auto", "p", "max-h-90"], [1, "col", "ml-auto", "col-col-detail"], [1, "col", "order-first", "order-md-last", "col-img-detail"], [1, "col", "pt-3", "d-flex", "justify-content-center", 2, "height", "85%"], [1, "img-fluid", 3, "src", "alt"], [1, "col", "pt-3", "d-flex", "justify-content-center", 2, "height", "15%"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", 1, "form_btn", "m-auto"], ["id", "myModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"], [1, "col", "col-align-center"], [1, "col", "order-last", "col-align-last"], [1, "col", "col-top", "pt-2"], [1, "row"], [1, "col-2", "h-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "ngStyle"], ["src", "assets/arrows/detail-carousel-arrow-left.svg", "alt", "", "width", "30", "height", "30"], [1, "sr-only"], [1, "col-8", "h-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "ngStyle"], ["src", "assets/arrows/detail-carousel-arrow-right.svg", "alt", "", "width", "30", "height", "30"], [1, "col", "col-bottom"], ["id", "carouselExampleControls", "data-ride", "carousel", "data-interval", "false", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "carousel-item"], ["class", "col pt-3", "style", "height: 305px;max-width: 350px", 4, "ngFor", "ngForOf"], [1, "col", "pt-3", 2, "height", "305px", "max-width", "350px"], [1, "row", "row-cols-2"], [1, "col", "col-left", "float-left"], [1, "col"], ["src", "assets/images/solar%20modules/solarModules2.svg", "alt", "", "width", "30%", "height", "15%", 1, "img1"], [1, "col", "align-self-end"], ["routerLink", "/product_detail", 3, "state"], [1, "col", "col-right", "float-right"], [1, "img-fluid", 2, "cursor", "pointer", 3, "src", "alt", "click"], ["id", "container3", 1, "container"], ["id", "container4", 1, "container"], ["src", "assets/images/inverters/inverters.svg", "alt", "Inverters", "width", "15%", "height", "15%", 1, "img1"], [1, "p", 2, "color", "#E43D30", "margin-top", "10%", "font-size", "1.1rem"], [2, "margin-top", "0", "font-size", "1.1rem"], [2, "margin-top", "5%"], ["width", "auto", "height", "80%", 1, "img2", 3, "src", "alt"], [1, "btn"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal2", 1, "form_btn"], ["id", "myModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel2", "aria-hidden", "true", 1, "modal", "fade"], ["id", "container5", 1, "container"], ["id", "carouselExampleControls2", "data-ride", "carousel", "data-interval", "false", 1, "carousel", "slide"], ["href", "#carouselExampleControls2", "role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "ngStyle"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], ["href", "#carouselExampleControls2", "role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "ngStyle"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "row", 2, "height", "100%", "padding", "0"], [1, "col", "float-left", "col-left", 2, "padding", "0"], [1, "row", 2, "padding", "0", "height", "100%"], [1, "col", "col-top"], ["src", "assets/images/inverters/inverters.svg", "alt", "", "width", "30%", "height", "30%", 1, "img1_carousel"], [2, "margin-top", "5%", "min-height", "5%", "color", "#E43D30"], [2, "margin-top", "10%", "min-height", "30%"], [1, "w-100", 2, "height", "0"], [2, "margin-top", "20%", 3, "click"], [1, "col", "float-right", 2, "padding", "0", "margin", "auto"], ["width", "100%", "height", "auto", 1, "img2_carousel", 2, "cursor", "pointer", 3, "src", "alt", "click"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 84, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailComponent_div_1_Template, 44, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "we are not just a supplier,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " we are a partner!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Increase your business with at SUNWABLE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "We have more than 10 years of experience and knowledge in the development of energy solutions.We invite you to be a part of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "become an installer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productType === "solarModules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productType === "inverters");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: [".max-h-50[_ngcontent-%COMP%] {\r\n  max-height: 50%;\r\n}\r\n.max-h-90[_ngcontent-%COMP%] {\r\n  max-height: 95%;\r\n}\r\n\r\n.container-detail[_ngcontent-%COMP%] {\r\n  height: 2250px;\r\n}\r\n.col-info[_ngcontent-%COMP%], .col-text[_ngcontent-%COMP%] {\r\n  height: 60%;\r\n}\r\n.col-img[_ngcontent-%COMP%], .col-img-detail[_ngcontent-%COMP%], .col-detail[_ngcontent-%COMP%] {\r\n  height: 40%;\r\n}\r\n.col-first[_ngcontent-%COMP%] {\r\n  height: 70%;\r\n}\r\n.col-align-center[_ngcontent-%COMP%] {\r\n  height: 5px;\r\n  background-color: #E43D30;\r\n  border: 0.2rem solid #E43D30;\r\n  border-radius: 50px;\r\n  margin: auto;\r\n}\r\n.align-self-end[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n.col-align-last[_ngcontent-%COMP%] {\r\n  height: 310px;\r\n}\r\n.col-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0.2rem solid #E43D30;\r\n  background-color: #E43D30;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n.carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%] {\r\n  opacity: 100%;\r\n  width: 100%;\r\n}\r\n.carousel-control-next[_ngcontent-%COMP%] {\r\n  padding-right: 15px;\r\n}\r\n.carousel-control-prev[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n}\r\n.col-top[_ngcontent-%COMP%] {\r\n  height: 20%;\r\n}\r\n.col-bottom[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n}\r\n.carousel-arrow[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n  font-size: 3rem;\r\n}\r\nh1[_ngcontent-%COMP%], .potencia[_ngcontent-%COMP%] {\r\n  color: #E43D30;\r\n}\r\n.p[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n}\r\n.col-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #706f6f;\r\n}\r\n.col-col-detail[_ngcontent-%COMP%] {\r\n  background-color: #f4f4f4;\r\n  max-width: 49%;\r\n  max-height: 48%;\r\n}\r\n.form_btn[_ngcontent-%COMP%] {\r\n  background-color: #E43D30;\r\n  color: white;\r\n  border: 0.2rem solid #E43D30;\r\n  width: 30%;\r\n  height: 50%;\r\n}\r\n\r\n#container6-full[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  background: url('container3_image.svg') right no-repeat, #E43D30;\r\n}\r\n#container6[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  height: 30%;\r\n  border: 0.2rem solid white;\r\n  top: 35%;\r\n}\r\n\r\n\r\n@media (min-width: 576px) {\r\n  \r\n  .container-detail[_ngcontent-%COMP%] {\r\n    height: 2250px;\r\n  }\r\n\r\n  .p[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  \r\n  #container6[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    top: 45%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  \r\n  .container-detail[_ngcontent-%COMP%] {\r\n    height: 1350px;\r\n  }\r\n\r\n  .col-img-detail[_ngcontent-%COMP%], .col-info[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\r\n\r\n  .p[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .form_btn[_ngcontent-%COMP%] {\r\n    height: 30%;\r\n  }\r\n\r\n  .col-top[_ngcontent-%COMP%] {\r\n    height: 10%;\r\n  }\r\n\r\n  .col-bottom[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  \r\n  #container6-full[_ngcontent-%COMP%] {\r\n    height: 450px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  \r\n  .container-detail[_ngcontent-%COMP%] {\r\n    height: 1600px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBLDRFQUE0RTtBQUM1RTtFQUNFLGNBQWM7QUFDaEI7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7QUFFQTs7O0VBR0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQSw0RUFBNEU7QUFDNUU7RUFDRSxhQUFhO0VBQ2IsZ0VBQW9GO0FBQ3RGO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixRQUFRO0FBQ1Y7QUFFQSx1RUFBdUU7QUFDdkUsaURBQWlEO0FBQ2pEO0VBQ0UsNEVBQTRFO0VBQzVFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQSw0RUFBNEU7RUFDNUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7RUFDVjs7QUFFRjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLDRFQUE0RTtFQUM1RTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVGO0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsNEVBQTRFO0VBQzVFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSw0RUFBNEU7RUFDNUU7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBnbG9iYWwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm1heC1oLTUwIHtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5tYXgtaC05MCB7XHJcbiAgbWF4LWhlaWdodDogOTUlO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVyLWRldGFpbCB7XHJcbiAgaGVpZ2h0OiAyMjUwcHg7XHJcbn1cclxuXHJcbi5jb2wtaW5mbyxcclxuLmNvbC10ZXh0IHtcclxuICBoZWlnaHQ6IDYwJTtcclxufVxyXG5cclxuLmNvbC1pbWcsXHJcbi5jb2wtaW1nLWRldGFpbCxcclxuLmNvbC1kZXRhaWwge1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uY29sLWZpcnN0IHtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLmNvbC1hbGlnbi1jZW50ZXIge1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNDNEMzA7XHJcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgI0U0M0QzMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZW5kIGg2IHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuLmNvbC1hbGlnbi1sYXN0IHtcclxuICBoZWlnaHQ6IDMxMHB4O1xyXG59XHJcblxyXG4uY29sLWxlZnQgYnV0dG9uIHtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNDNEMzA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQsXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbC10b3Age1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4uY29sLWJvdHRvbSB7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1hcnJvdyB7XHJcbiAgY29sb3I6ICNFNDNEMzA7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG5oMSwgLnBvdGVuY2lhIHtcclxuICBjb2xvcjogI0U0M0QzMDtcclxufVxyXG5cclxuLnAge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uY29sLWRldGFpbCBwIHtcclxuICBjb2xvcjogIzcwNmY2ZjtcclxufVxyXG5cclxuLmNvbC1jb2wtZGV0YWlsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIG1heC13aWR0aDogNDklO1xyXG4gIG1heC1oZWlnaHQ6IDQ4JTtcclxufVxyXG5cclxuLmZvcm1fYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQzRDMwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRTQzRDMwO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXI2ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNjb250YWluZXI2LWZ1bGwge1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250YWluZXIzX2ltYWdlLnN2Z1wiKSByaWdodCBuby1yZXBlYXQsICNFNDNEMzA7XHJcbn1cclxuXHJcbiNjb250YWluZXI2IC5idG4ge1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgd2hpdGU7XHJcbiAgdG9wOiAzNSU7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBtZWRpYSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4vKlNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cCkqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5jb250YWluZXItZGV0YWlsIHtcclxuICAgIGhlaWdodDogMjI1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnAge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyNiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICNjb250YWluZXI2IC5idG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0b3A6IDQ1JTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKk1lZGl1bSBkZXZpY2VzICh0YWJsZXRzKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBjb250YWluZXIxICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmNvbnRhaW5lci1kZXRhaWwge1xyXG4gICAgaGVpZ2h0OiAxMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29sLWltZy1kZXRhaWwsXHJcbiAgLmNvbC1pbmZvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLmZvcm1fYnRuIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC10b3Age1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY29sLWJvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKkxhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIGNvbnRhaW5lcjYgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAjY29udGFpbmVyNi1mdWxsIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKkV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgY29udGFpbmVyMSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5jb250YWluZXItZGV0YWlsIHtcclxuICAgIGhlaWdodDogMTYwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-detail',
                templateUrl: './product-detail.component.html',
                styleUrls: ['./product-detail.component.css']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _services_website_website_service__WEBPACK_IMPORTED_MODULE_5__["WebsiteService"] }]; }, { OnWindowWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', []]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _solar_modules_solar_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solar-modules/solar-modules.component */ "H1SQ");
/* harmony import */ var _inverters_inverters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inverters/inverters.component */ "+Y0U");
/* harmony import */ var _batteries_batteries_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./batteries/batteries.component */ "Sce5");
/* harmony import */ var _structures_structures_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structures/structures.component */ "C55j");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "vR3N");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");











const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'solar_modules', component: _solar_modules_solar_modules_component__WEBPACK_IMPORTED_MODULE_2__["SolarModulesComponent"] },
    { path: 'inverters', component: _inverters_inverters_component__WEBPACK_IMPORTED_MODULE_3__["InvertersComponent"] },
    { path: 'batteries', component: _batteries_batteries_component__WEBPACK_IMPORTED_MODULE_4__["BatteriesComponent"] },
    { path: 'structures', component: _structures_structures_component__WEBPACK_IMPORTED_MODULE_5__["StructuresComponent"] },
    { path: 'product_detail', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xdg1":
/*!****************************************************!*\
  !*** ./src/app/services/website/characteristic.ts ***!
  \****************************************************/
/*! exports provided: Characteristic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Characteristic", function() { return Characteristic; });
class Characteristic {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zwQM":
/*!**************************************!*\
  !*** ./src/app/services/inverter.ts ***!
  \**************************************/
/*! exports provided: Inverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inverter", function() { return Inverter; });
class Inverter {
}


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map