global.ABSPATH = __dirname; // объект в nodeJS аналог window дл JS
global.INCPATH = ABSPATH + '/libs'; // variable with way to library
const path = require('path'); // модульЮ который помогает быстро устанавливать правильные пути

const express = require('express'); // сам фреймлорк - оболочка над nodeJS
const app = express(); // это само мое приложение
const bodyParser = require('body-parser'); //  помогает читать тело запроса в читаемой форме без JSON.parse()
const config = require( INCPATH + '/config' ); //  инжектим отдельный файл
const log = require( INCPATH + '/log')(module); // лог это функция. которая вызывается с текущим моделем к которому подключен
const UserModel = require(INCPATH + '/mongoose').UserModel;
//https://github.com/expressjs/cors
const cors = require('cors');
const apiConfig = require(ABSPATH + '/api');

// app.use ->  это мидле варе - настройка моего сервера
app.use(cors());
app.use('/api', apiConfig);
app.use(express.static(__dirname)); // читает все статические файлы
app.use(bodyParser.json()); // инициализирую парсер
app.use(bodyParser.urlencoded({ extended: true })); // парсит url в читаемый объект

// require('./api.js'); // инжекчу главный файлб описывающий мои запросы


//  для получение статического index.html
app.get("/", function(req, res) {
    res.sendFile(path.resolve( __dirname , 'index.html' ));
});
// заглушка для получение других файлов или запросов
// app.get("/api/test", function(req, res) {
//     const user = UserModel({
//         name: 'test'
//     });
//
//     user.save(err => {
//         if(err) {
//             log.error('Error in inserting to Mongo');
//         }
//         UserModel.find((err, users) => {
//             if(err) {
//                 log.error('Error find users in Mongo');
//             }
//         console.log(users);
//         res.end('user save');
//         });
//     });
// });

// разворачивается порт и я его слушаю

app.listen(config.get('port'), function () {
    log.info('Server start running on port ' + config.get('port'));
});