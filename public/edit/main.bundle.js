webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'preview/:id', component: __WEBPACK_IMPORTED_MODULE_3__preview_preview_component__["a" /* PreviewComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-list></app-list>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular Blog';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__["a" /* PreviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__("../../../../jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// All the RxJS stuff we need


var Post = /** @class */ (function () {
    function Post(postid, created, modified, title, body) {
        this.postid = postid;
        this.created = created;
        this.modified = modified;
        this.title = title;
        this.body = body;
    }
    return Post;
}());

var BlogService = /** @class */ (function () {
    //private apiURL = 'http://localhost:3000/api';
    function BlogService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.apiURL = 'http://localhost:3000/api/';
        this.fetchPosts();
    }
    BlogService.prototype.decodeUsername = function () {
        console.log("Cookie: " + document.cookie);
        var allCookies = document.cookie.replace(/\s/g, '').split(';');
        var jwtCookie;
        for (var i = 0; i < allCookies.length; i++) {
            if (allCookies[i].startsWith('jwt=')) {
                jwtCookie = allCookies[i].replace('jwt=', '');
            }
        }
        if (jwtCookie == "undefined") {
            // console.log("Null jwt cookie...");
            return "";
        }
        // console.log("jwtCookie: " + jwtCookie);
        var decoded = __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__["decode"](jwtCookie, { complete: true });
        if (decoded == null) {
            // console.log("Null decoded cookie...");
            return "";
        }
        // console.log("decoded: " + decoded);
        return decoded.payload.usr;
    };
    /* This method must “populate” the posts property by retrieving all blog posts of the current user (whose username can be obtained from the jwt cookie). Send a GET request to /api/:username after setting up the response event handler, which populates posts property from the response. */
    BlogService.prototype.fetchPosts = function () {
        var _this = this;
        var username = this.decodeUsername();
        if (username == "")
            return;
        var usernameURL = this.apiURL + username;
        this.fetchPostsFromAPI(usernameURL).then(function (result) {
            var numOfPosts = Object.keys(result).length;
            for (var i = 0; i < numOfPosts; i++) {
                var post = new Post(result[i].postid, new Date(result[i].created), new Date(result[i].modified), result[i].title, result[i].body);
                _this.posts.push(post);
            }
        });
    };
    BlogService.prototype.fetchPostsFromAPI = function (url) {
        console.log("Sending a request to: " + url);
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.statusText);
                    }
                }
            };
            xhr.onerror = function (e) {
                reject(xhr.statusText);
            };
            xhr.withCredentials = true;
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.send(null);
        });
    };
    /* This method simply returns posts */
    BlogService.prototype.getPosts = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.posts);
    };
    /* Find the post with postid=id from posts and return it. */
    BlogService.prototype.getPost = function (id) {
        var numOfPosts = this.posts.length;
        for (var i = 0; i < numOfPosts; i++) {
            if (this.posts[i].postid === id) {
                return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.posts[i]);
            }
        }
        return null;
    };
    BlogService.prototype.getMaxID = function () {
        var numOfPosts = this.posts.length;
        var max = 0;
        for (var i = 0; i < numOfPosts; i++) {
            if (this.posts[i].postid > max) {
                max = this.posts[i].postid;
            }
        }
        return max;
    };
    /* Create a new post with a new postid, an empty title and body,
    and current creation and modification times, save it to localStorage,
    add it to posts, and return it. The postid of a new post should
    start at 1 and increase linearly. */
    BlogService.prototype.newPost = function () {
        var _this = this;
        var currMaxID = this.getMaxID();
        var newPostID = currMaxID + 1;
        var newCreated = new Date(Date.now());
        var newModified = new Date(Date.now());
        var newTitle = "";
        var newBody = "";
        var username = this.decodeUsername();
        var newPostURL = this.apiURL + username + newPostID;
        this.saveNewPost(newPostURL, newTitle, newBody)
            .then(function (code) {
            console.log("Fulfilled properly with code: " + code);
        }, function (onrejected) {
            var numOfPosts = _this.posts.length;
            for (var i = 0; i < numOfPosts; i++) {
                if (_this.posts[i].postid === newPostID) {
                    // delete from this.posts
                    _this.posts.splice(i, 1);
                    alert("Error: Unable to create a new post at the server");
                    _this.router.navigate(['/']);
                }
            }
            console.log("REJECT THIS!!!!!");
        })
            .catch(function (err) {
            console.log(err);
        });
        // set and return new Post 
        var newPost = new Post(newPostID, newCreated, newModified, newTitle, newBody);
        this.posts.push(newPost);
        return newPost;
    };
    BlogService.prototype.saveNewPost = function (url, title, body) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 201) {
                        resolve(xhr.status);
                    }
                    else {
                        reject(xhr.status);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify({ 'title': title, 'body': body }));
        });
    };
    /* From posts, find a post whose postid is the same as post.postid,
    update its title and body with the passed-in values, change its
    modification time to now, and update the post in localStorage.
    If no such post exists, do nothing. */
    BlogService.prototype.updatePost = function (post) {
        var _this = this;
        var numOfPosts = this.posts.length;
        var username = this.decodeUsername();
        var newPutURL = this.apiURL + username + post.postid;
        var _loop_1 = function (i) {
            if (this_1.posts[i].postid === post.postid) {
                this_1.saveUpdatePost(newPutURL, post.title, post.title)
                    .then(function (code) {
                    // update this.posts
                    _this.posts[i].modified = new Date(Date.now());
                    _this.posts[i].title = post.title;
                    _this.posts[i].body = post.body;
                    console.log("Updated post: " + code);
                }, function (onrejected) {
                    alert("Error: Unable to update post at the server");
                    _this.router.navigate(['/edit' + post.postid]);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < numOfPosts; i++) {
            _loop_1(i);
        }
    };
    BlogService.prototype.saveUpdatePost = function (url, title, body) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.status);
                    }
                    else {
                        console.log("Why is it sending an alert");
                        reject(xhr.status);
                    }
                }
            };
            xhr.open('PUT', url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify({ 'title': title, 'body': body }));
        });
    };
    /* From posts, find a post whose postid=id, delete it from posts,
    and delete a corresponding post from localStorage. If no such
    post exists, do nothing. */
    /* TODO: error check for null post */
    BlogService.prototype.deletePost = function (id) {
        var _this = this;
        var numOfPosts = this.posts.length;
        var username = this.decodeUsername();
        var newDeleteURL = this.apiURL + username + id;
        for (var i = 0; i < numOfPosts; i++) {
            if (this.posts[i].postid === id) {
                // delete from this.posts
                this.posts.splice(i, 1);
                // delete from server
                this.deletePostFromServer(newDeleteURL)
                    .then(function (code) {
                    // Delete post
                    console.log("Delete post: " + code);
                }, function (onrejected) {
                    alert("Error: Unable to delete post at the server");
                    _this.router.navigate(['/']);
                })
                    .catch(function (err) {
                    console.log(err);
                });
                return;
            }
        }
    };
    // 	 From posts, find a post whose postid is the same as the passed in value, delete it from posts, and send a DELETE request to /api/:username/:postid (after setting up the response event handler). If no such post exists, do nothing.
    // The response event handler should do nothing if the response status code is "204 (No content)". Otherwise, it should display an alert message saying that there was an error deleting the post at the server, and navigate to /, the "list pane" of the editor
    BlogService.prototype.deletePostFromServer = function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 204) {
                        resolve(xhr.status);
                    }
                    else {
                        reject(xhr.status);
                    }
                }
            };
            xhr.open('DELETE', url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhr.send();
        });
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editPane {\n\tpadding-left: 15px;\n\twidth: 60%;\n\tfloat: left;\n\tdisplay: block;\n\tmin-height: 605px;\n\tpadding: 10px;\n\tpadding-left: 15px;\n\n\tfont:15px arial,sans-serif;\n    color: #284b69;\n    font-weight: 700;\n\tletter-spacing: 1px;\n\tfont-family: 'Poppins', sans-serif;\n\n\t-webkit-transition-duration: 0.5s;\n\n\t        transition-duration: 0.5s;\n\tbackground-color: rgb(242,241,232);\n}\n\nlabel {\n\tdisplay: inline-block;\n    width: 3em;\n    margin: .5em 0;\n    font:18px arial,sans-serif;\n    color: #284b69;\n    font-weight: 700;\n\tletter-spacing: 1px;\n\tfont-family: 'Poppins', sans-serif;\n}\n\ninput {\n\tpadding: 5px;\n\tline-height: 20px;\n\tfont:15px arial,sans-serif;\n\tcolor: #717272;\n\tfont-family: 'Poppins', sans-serif;\n\tborder: 1px solid #717272;\n\tborder-radius: 4px;\n}\n\n.titleArea {\n\tdisplay: block;\n\tfont: 30px;\n\tbackground-color: rgb(146,210,209);\n\tpadding-left: 10px;\n\t-webkit-box-shadow: -2px -2px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: -2px -2px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);\n}\n\n.titleArea label{\n\twidth: 75%;\n}\n\n.bodyArea {\n\tpadding-left: 10px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.timeArea {\n\tpadding-left: 10px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 15px;\n\tbackground-color: rgb(146,210,209);\n\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ntextarea {\n\tborder-radius: 5px;\n\tmargin-top: 5px;\n}\n\nbutton {\n\tfont:12px arial,sans-serif;\n\tcolor: #717272;\n\tpadding-right: 30px;\n\tpadding-left: 30px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tcursor: pointer;\n\tfont-family: 'Poppins', sans-serif;\n\tborder-radius: 5px;\n\tfont-weight: 700;\n\tletter-spacing: 1px;\n\tborder: 1px solid #717272;\n\tmargin-top: 5px;\n\tmargin-bottom: 5px;\n\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nbutton:hover {\n\tbackground-color: #C9C9C9;\n}\n\nbutton:disabled {\n\tbackground-color: rgb(245, 112, 89);\n\tcursor: not-allowed;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n\t<div class=\"editPane\">\n\t\t<form [formGroup]=\"postForm\" novalidate>\n\t\t\t<div class=\"titleArea\">\n\t\t\t\t<label>Title: <input formControlName=\"titleControl\" [(ngModel)]=\"post.title\" name=\"title\" placeholder=\"title\"/>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"bodyArea\">\n\t\t\t\t<label>Body: <textarea [(ngModel)]=\"post.body\" name=\"body\" rows=\"10\" cols=\"50\" formControlName=\"bodyControl\"></textarea>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"timeArea\">\n\t\t\t\t<span>Last Modified: {{ post.modified.toLocaleString() }}</span>\n\t\t\t</div>\n\t\t\t<button type=\"button\" (click)=\"deletePost()\">Delete</button>\n\t\t\t<button type=\"button\" [disabled]=\"postForm.pristine\" (click)=\"updatePost()\">Save</button>\n\t\t\t<button type=\"button\" (click)=\"previewPost()\">Preview</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = /** @class */ (function () {
    function EditComponent(route, blogService, router) {
        var _this = this;
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        route.params.subscribe(function () { return _this.updatePost(); });
        route.params.subscribe(function () { return _this.getPost(); });
        this.postForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            titleControl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            bodyControl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
        });
    }
    EditComponent.prototype.ngOnDestroy = function () {
        this.updatePost();
    };
    EditComponent.prototype.ngOnChanges = function () {
        this.updatePost();
    };
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        var postReceived = this.blogService.getPost(id);
        if (postReceived == null) {
            this.router.navigate(['/']);
        }
        else {
            this.blogService.getPost(id).subscribe(function (post) { return _this.post = post; });
        }
    };
    EditComponent.prototype.deletePost = function () {
        this.blogService.deletePost(this.post.postid);
        this.post = null;
        this.router.navigate(['/']);
    };
    EditComponent.prototype.updatePost = function () {
        if (this.post) {
            if (!this.postForm.pristine) {
                this.blogService.updatePost(this.post);
                this.postForm.markAsPristine();
            }
        }
    };
    EditComponent.prototype.previewPost = function () {
        this.router.navigate(['/preview', this.post.postid]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__blog_service__["b" /* Post */])
    ], EditComponent.prototype, "post", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "updatePost", null);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listSidebar {\n\twidth: 400px;\n\tfloat: left;\n\tdisplay: block;\n\tbackground-color: rgb(245, 112, 89);\n\tmin-height: 625px;\n\tborder-right: 8px solid #D9D9D9;\n}\n\n.button {\n\tfont:12px arial,sans-serif;\n\tcolor: #717272;\n\tpadding-right: 30px;\n\tpadding-left: 30px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tmargin-left: 10px;\n\tmargin-top: 10px;\n\tcursor: pointer;\n\tfont-weight: 700;\n\tletter-spacing: 1px;\n\tfont-family: 'Poppins', sans-serif;\n\tborder-radius: 5px;\n\tborder: 1px solid #717272;\n\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.button:hover{\n\tbackground-color: #C9C9C9;\n}\n\n.postsList a {\n\ttext-decoration: none;\n\tposition: relative;\n\tdisplay: block;\n\twidth: 375px;\n\theight: 30px;\n\t\n\tline-height: 30px;\n\tcolor: #717272;\n\tbackground-color: white;\n}\n\n.postsList a:hover{\n\tbackground-color: #C9C9C9;\n}\n\n.postsList {\n\tlist-style-type: none;\n\tpadding: 0px;\n\tcolor: #717272;\n\twidth: 400px;\n}\n\n.postsList li {\n\tposition: relative;\n\tcursor: pointer;\n\tdisplay: list-item;\n\t\n\n\tmargin: 10px;\n\theight: 30px;\n\tline-height: 30px;\n\tdisplay: block;\n\ttext-decoration: none;\n\tlist-style-type: none;\n\tfont:15px arial,sans-serif;\n\tcolor: #717272;\n\tfont-family: 'Poppins', sans-serif;\n\n\tborder: 1px solid #717272;\n\tborder-radius: 2px;\n\t-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\t        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.postsList li:hover {\n\tbackground-color: #C9C9C9;\n}\n\n.badge {\n\tfloat: left;\n\tcolor: black;\n\tdisplay: inline-block;\n\n    -webkit-box-align: center;\n\n        -ms-flex-align: center;\n\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    height: 30px;\n  \tpadding-right: 10px;\n  \tpadding-left: 10px;\n  \tline-height: 30px;\n  \tmargin-right: 10px;\n  \tcolor: black;\n  \tfont-weight: 75;\n  \tfont: 12px;\n  \tletter-spacing: 0.5px;\n  \tborder-right: 1px solid;\n  \tbackground-color: rgb(242,241,232);\n}\n\nul {\n\tdisplay: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listSidebar\">\n\t<button class=\"button\" (click)=\"newPost()\">New Post</button>\n\n\t<ul class=\"postsList\">\n\t\t<li *ngFor=\"let post of posts\">\n\t\t\t<a routerLink=\"/edit/{{post.postid}}\">\n\t\t\t\t<span class=\"badge\">{{post.created.toLocaleString()}}</span>{{post.title}}\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
        this.posts = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    ListComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (posts) { return _this.posts = posts; });
    };
    ListComponent.prototype.newPost = function () {
        var newPost = this.blogService.newPost();
        this.router.navigateByUrl('/edit/' + newPost.postid);
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preview/preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n\tfont:12px arial,sans-serif;\n\tcolor: #717272;\n\tpadding-right: 30px;\n\tpadding-left: 30px;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n\tcursor: pointer;\n\tfont-family: 'Poppins', sans-serif;\n\tborder-radius: 5px;\n\tborder: 1px solid #717272;\n}\n\nbutton:hover{\n\tbackground-color: #C9C9C9;\n}\n\n.previewPane {\n\tpadding-left: 15px;\n\twidth: 60%;\n\tfloat: left;\n\tdisplay: block;\n\tmin-height: 605px;\n\tpadding: 10px;\n\tpadding-left: 15px;\n\n\t-webkit-transition-duration: 0.5s;\n\n\t        transition-duration: 0.5s;\n\tbackground-color: rgb(242,241,232);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"previewPane\">\n\t<button type=\"button\" (click)=\"editPost()\">Edit</button>\n\t<div [innerHTML]=\"convertedPostTitle\"></div>\n\t<div [innerHTML]=\"convertedPostBody\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_commonmark__ = __webpack_require__("../../../../commonmark/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_commonmark___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_commonmark__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_service__ = __webpack_require__("../../../../../src/app/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(route, blogService, router) {
        var _this = this;
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        route.params.subscribe(function () { return _this.getPost(); });
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.getPost = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.blogService.getPost(id).subscribe(function (post) { return _this.post = post; });
        this.convertMd(this.post.title, this.post.body);
    };
    PreviewComponent.prototype.convertMd = function (title, body) {
        var reader = new __WEBPACK_IMPORTED_MODULE_2_commonmark__["Parser"]();
        var writer = new __WEBPACK_IMPORTED_MODULE_2_commonmark__["HtmlRenderer"]();
        var parsedTitle = reader.parse(title);
        this.convertedPostTitle = writer.render(parsedTitle);
        var parsedBody = reader.parse(body);
        this.convertedPostBody = writer.render(parsedBody);
    };
    PreviewComponent.prototype.editPost = function () {
        this.router.navigate(['/edit', this.post.postid]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__blog_service__["b" /* Post */])
    ], PreviewComponent.prototype, "post", void 0);
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-preview',
            template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__blog_service__["a" /* BlogService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map