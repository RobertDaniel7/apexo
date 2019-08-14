(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/main-components/menu.tsx":
/*!**************************************!*\
  !*** ./src/main-components/menu.tsx ***!
  \**************************************/
/*! exports provided: MenuView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuView\", function() { return MenuView; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass Version extends react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"ver\" },\n            \"apexo\",\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"br\", null),\n            \" \",\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"span\", null, \"4.0.0\")));\n    }\n}\nlet MenuView = class MenuView extends react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"] {\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"menu-component\" },\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](Version, null),\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"visible-lg visible-md icon-list\" }, _core__WEBPACK_IMPORTED_MODULE_1__[\"menu\"].sortedItems.map((item, index) => {\n                const pageDisplayName = Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(item.name);\n                return (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__[\"TooltipHost\"], { key: item.key, content: pageDisplayName.charAt(0).toUpperCase() +\n                        pageDisplayName.substr(1), directionalHint: 12, tooltipProps: {\n                        calloutProps: {\n                            className: \"menu-item-tt\"\n                        }\n                    } },\n                    react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"item\" +\n                            ` bg-menu-item-${item.key.toLowerCase()}` +\n                            (item.name ===\n                                _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].currentNamespace\n                                ? \" selected\"\n                                : \"\"), onClick: item.onClick, \"data-testid\": \"menu-item-bg\" },\n                        react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__[\"Icon\"], { iconName: item.icon }))));\n            })),\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__[\"Panel\"], { className: \"menu\", isLightDismiss: true, isOpen: _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedMain === \"menu\", type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__[\"PanelType\"].smallFixedNear, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_1__[\"menu\"].hide(), hasCloseButton: false, \"data-testid\": \"menu-sd\" },\n                react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_3__[\"Nav\"], { groups: [\n                        {\n                            links: _core__WEBPACK_IMPORTED_MODULE_1__[\"menu\"].sortedItems.map(x => {\n                                return {\n                                    icon: x.icon,\n                                    name: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(x.name),\n                                    title: x.name.toLocaleLowerCase(),\n                                    key: x.key,\n                                    url: x.url,\n                                    onClick: x.onClick,\n                                    \"data-testid\": \"menu-item-sd\"\n                                };\n                            })\n                        }\n                    ], selectedKey: _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].currentNamespace, className: \"main-nav\" }))));\n    }\n};\nMenuView = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_2__[\"observer\"]\n], MenuView);\n\n\n\n//# sourceURL=webpack:///./src/main-components/menu.tsx?");

/***/ })

}]);