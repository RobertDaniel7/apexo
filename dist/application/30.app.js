(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./src/modules/patients/components/page.patients.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/patients/components/page.patients.tsx ***!
  \***********************************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PatientsPage\", function() { return PatientsPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PatientDetailsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! modules/patients/components/patient-details */ \"./src/modules/patients/components/patient-details.tsx\")))\n            .PatientDetailsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst DentalHistoryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! modules/patients/components/dental-history */ \"./src/modules/patients/components/dental-history.tsx\")))\n            .DentalHistoryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet PatientsPage = class PatientsPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.dt = null;\n        this.selectedAppointmentId = \"\";\n    }\n    get selectedPatient() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].docs.find(patient => patient._id === _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID);\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditPatients;\n    }\n    get selectedAppointment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].docs.find(x => x._id === this.selectedAppointmentId);\n    }\n    tabs(patient) {\n        return [\n            {\n                key: \"details\",\n                title: \"Patient Details\",\n                icon: \"DietPlanNotebook\"\n            },\n            {\n                key: \"dental\",\n                title: \"Dental History\",\n                icon: \"teeth\",\n                bubbleContent: patient.teeth.filter(x => x.notes.length || x.condition !== \"sound\").length\n            },\n            {\n                key: \"gallery\",\n                title: \"Gallery and X-Rays\",\n                icon: \"PhotoCollection\",\n                bubbleContent: patient.gallery.length\n            },\n            {\n                key: \"appointments\",\n                title: \"Appointments\",\n                icon: \"Calendar\",\n                hidden: !_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canViewAppointments,\n                bubbleContent: patient.appointments.length\n            },\n            {\n                key: \"delete\",\n                title: \"Delete\",\n                icon: \"Trash\",\n                hidden: !this.canEdit,\n                hiddenOnPanel: true\n            }\n        ];\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"patients-component\" },\n            this.selectedPatient ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { key: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID, isOpen: !!this.selectedPatient, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect();\n                }, onRenderNavigation: () => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 22 },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: this.selectedPatient.name, size: 2, avatar: this.selectedPatient.avatar\n                                        ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this\n                                            .selectedPatient\n                                            .avatar]\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this\n                                                .selectedPatient\n                                                .avatar]\n                                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(this\n                                                .selectedPatient\n                                                .avatar)\n                                        : undefined })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 2, className: \"close\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { \"data-testid\": \"close-panel\", iconProps: {\n                                        iconName: \"cancel\"\n                                    }, onClick: () => {\n                                        _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect();\n                                    } }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab, onSelect: key => {\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectTab(key);\n                            }, items: this.tabs(this.selectedPatient) })));\n                } },\n                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](PatientDetailsPanel, { patient: this.selectedPatient, onChangeViewWhich: key => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectTab(key) })) : (\"\"),\n                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"dental\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](DentalHistoryPanel, { patient: this.selectedPatient })) : (\"\"),\n                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"gallery\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientGalleryPanel\"], { patient: this.selectedPatient })) : (\"\"),\n                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientAppointmentsPanel\"], { patient: this.selectedPatient })) : (\"\"),\n                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedTab === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All of the patient\")} ${this.selectedPatient.name}${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"'s data will be deleted along with\")} ${this.selectedPatient.appointments.length} ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"of appointments\")}.`),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                            iconName: \"delete\"\n                        }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\"), onClick: () => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].delete(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID);\n                            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect();\n                        } }))) : (\"\"))) : (\"\"),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { ref: dt => (this.dt = dt), maxItemsOnLoad: 10, className: \"patients-data-table\", heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patient\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Last/Next Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Total/Outstanding Payments\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Label\")\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].docs.map(patient => ({\n                    id: patient._id,\n                    className: \"pg-pn-\" +\n                        patient.name.toLowerCase().replace(/\\s/g, \"\"),\n                    searchableString: patient.searchableString,\n                    cells: [\n                        {\n                            dataValue: patient.name +\n                                \" \" +\n                                patient.gender +\n                                \" \" +\n                                patient.age,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: patient.name, avatar: patient.avatar\n                                        ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[patient.avatar]\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[patient.avatar]\n                                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(patient.avatar)\n                                        : undefined, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(patient.gender),\n                                        \" -\",\n                                        \" \",\n                                        patient.age,\n                                        \" \",\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"years old\")), size: 3 }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TableActions\"], { items: this.tabs(patient), onSelect: key => {\n                                        if (key === \"delete\") {\n                                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].deleteModal(patient._id);\n                                        }\n                                        else {\n                                            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectID(patient._id, key);\n                                        }\n                                    } }))),\n                            className: \"no-label\",\n                            onClick: () => {\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectID(patient._id, \"details\");\n                            }\n                        },\n                        {\n                            dataValue: (patient.lastAppointment ||\n                                patient.nextAppointment || { date: 0 }).date,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.lastAppointment\n                                        ? patient.lastAppointment\n                                            .treatment\n                                            ? patient\n                                                .lastAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: patient.lastAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                            .lastAppointment\n                                            .date, _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"))\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No last appointment\"), size: 3, onClick: patient.lastAppointment\n                                        ? () => {\n                                            this.selectedAppointmentId =\n                                                patient.lastAppointment._id;\n                                            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectSub(\"details\");\n                                        }\n                                        : undefined, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Previous\" })), initialsColor: patient.lastAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.nextAppointment\n                                        ? patient.nextAppointment\n                                            .treatment\n                                            ? patient\n                                                .nextAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: patient.nextAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                            .nextAppointment\n                                            .date, _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"))\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No next appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Next\" })), onClick: patient.nextAppointment\n                                        ? () => {\n                                            this.selectedAppointmentId =\n                                                patient.nextAppointment._id;\n                                            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectSub(\"details\");\n                                        }\n                                        : undefined, initialsColor: patient.nextAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: patient.totalPayments,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\") +\n                                        patient.totalPayments.toString(), subText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Payments made\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"CheckMark\" })), initialsColor: patient.totalPayments > 0\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkBlue\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\") +\n                                        (patient.differenceAmount < 0\n                                            ? patient.outstandingAmount.toString()\n                                            : patient.differenceAmount >\n                                                0\n                                                ? patient.overpaidAmount.toString()\n                                                : \"0\"), subText: patient.differenceAmount < 0\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Outstanding amount\")\n                                        : patient.differenceAmount >\n                                            0\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Overpaid amount\")\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No outstanding amount\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Cancel\" })), initialsColor: patient.differenceAmount !== 0\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkRed\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: patient.labels\n                                .map(x => x.text)\n                                .join(\",\"),\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null, patient.labels.map((label, index) => {\n                                return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { key: index, text: label.text, type: label.type, highlighted: this.dt\n                                        ? this.dt\n                                            .filterString ===\n                                            label.text\n                                        : false, onClick: () => {\n                                        if (this.dt) {\n                                            if (this.dt\n                                                .filterString ===\n                                                label.text) {\n                                                this.dt.filterString =\n                                                    \"\";\n                                            }\n                                            else {\n                                                this.dt.filterString =\n                                                    label.text;\n                                            }\n                                        }\n                                        this.forceUpdate();\n                                    } }));\n                            }))),\n                            className: \"hidden-xs\"\n                        }\n                    ]\n                })), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const patient = _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].new();\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].add(patient);\n                                _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectID(patient._id, \"details\");\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [] }),\n            this.selectedAppointment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.selectedAppointment, onDismiss: () => (this.selectedAppointmentId = \"\") })) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], PatientsPage.prototype, \"selectedAppointmentId\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], PatientsPage.prototype, \"selectedPatient\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], PatientsPage.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], PatientsPage.prototype, \"selectedAppointment\", null);\nPatientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], PatientsPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/patients/components/page.patients.tsx?");

/***/ })

}]);