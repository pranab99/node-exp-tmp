var fs = require('fs');

function createBackendTemplate() {
    fs.appendFile('main.js','//', function (err) {
  if (err) throw err;
  console.log('File Created');
});
    fs.copyFile('backendTemplate.txt', 'main.js', function (err) {
  if (err) throw err;
  console.log('main.js template is ready!');
});


}
module.exports.createBackendTemplate = createBackendTemplate();