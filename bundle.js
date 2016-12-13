/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const asistentes = [];
	asistentes.push(__webpack_require__(1));
	asistentes.push(__webpack_require__(2));
	asistentes.push(__webpack_require__(3));
	asistentes.push(__webpack_require__(4));
	
	const printname = persona => {
	  console.log(persona.name);
	};
	
	asistentes.forEach(printname);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Gabo Esquivel",
		"bio": "Software Developer and Consultant. Community leader and open source contributor. Organizer of tech meetups and NodeSchool mentor.",
		"website": "http://gaboesquivel.com",
		"email": "contact@gaboesquivel.com",
		"twitter": "gaboesquivel",
		"github": "gaboesquivel",
		"linkedin": "gaboesquivel",
		"ama": "https://github.com/gaboesquivel/ama"
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Laura Castillo",
		"bio": "Software Developer",
		"website": "http://laubits.com",
		"email": "contact@laubits.com",
		"twitter": "laubits",
		"github": "laubits",
		"linkedin": "laubits"
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Jeremias Ceciliano",
		"bio": "Fullstack software developer.",
		"website": "http://jereportal.com",
		"email": "jecel0911@gmail.com",
		"twitter": "jecel0911",
		"github": "jecel0911",
		"linkedin": "jeremiasceciliano",
		"ama": "https://github.com/jecel0911/ama"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Roberto Viquez",
		"bio": "Software Developer. Avid learner and infinite junior developer.",
		"website": "",
		"email": "robertoviquez@gmail.com",
		"twitter": "viquez1980",
		"github": "rviquez",
		"linkedin": "rviquez",
		"ama": ""
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map