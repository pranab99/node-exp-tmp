var fs = require('fs');
function createBackendTemplate(options) {
    if (options == "mongoose") {
        fs.writeFile('.env', 'Store all environment variables here', function (err) {
            if (err) throw err;

        });
        fs.appendFile('main.js', '//', function (err) {
            if (err) throw err;

        });
        fs.copyFile('mongooseTemplate.txt', 'main.js', function (err) {
            if (err) throw err;
            console.log('main.js template is ready!');
        });
    }
    if (options == "basic") {
        fs.writeFile('.env', 'Store all environment variables here', function (err) {
            if (err) throw err;

        });
        fs.appendFile('main.js', '//', function (err) {
            if (err) throw err;

        });
        fs.copyFile('basicTemplate.txt', 'main.js', function (err) {
            if (err) throw err;
            console.log('main.js template is ready!');
        });

    }


}

module.exports = createBackendTemplate;