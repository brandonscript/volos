/*
 * This little server runs the "expressserver" from the Quota tests using
 * the Apigee SPI.
 */

 var apigeeOauth = require('volos-oauth-apigee');
 var config = require('./volos/testconfig/testconfig-apigee');
 var server = require('./volos/oauth/test/fixtures/expressserver');

 var quota = apigeeOauth.create(config.config);

 // Build an Express server using the code from the cache module
 var app = server(quota);

 app.listen(process.env.PORT || 9003);
