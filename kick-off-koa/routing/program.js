var koa = require('koa')
var app = koa()

app.use(function*(next) {
	if (this.path === '/') {
		this.body = 'hello koa';
	} else if (this.path === '/404') {
        this.body = 'page not found';
	} else if (this.path === '/500') {
        this.body = 'internal server error';
	} else{
        return yield next;
    }
})

/**
 * koa-router version
 **/
// var router = require('koa-router')()
//
// router.get('/', function *(next) {
//     this.body = 'hello koa';
// })
//
// router.get('/404', function *(next) {
//     this.body = 'page not found';
// })
//
// router.get('/500', function *(next) {
//     this.body = 'internal server error';
// })
//
// app
//   .use(router.routes())
//   .use(router.allowedMethods());

/**
 * official version
 **/
// app.use(function* (next) {
//     if (this.path !== '/') {
//       return yield next;
//     }
//
//     this.body = 'hello koa';
// })
//
// app.use(function* (next) {
//   if (this.path !== '/404') {
//     return yield next;
//   }
//
//   this.body = 'page not found';
// });
//
// app.use(function* (next) {
//   if (this.path !== '/500') {
//     return yield next;
//   }
//
//   this.body = 'internal server error';
// });

app.listen(process.argv[2]);
