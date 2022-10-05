"use strict";
var App;
(function (App) {
    class Post {
        constructor() {
            this.title = 'My First Post';
            this.description = 'First Post Descriptionn';
        }
    }
    App.Post = Post;
})(App || (App = {}));
var App;
(function (App) {
    const post = new App.Post();
    console.log(post);
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map