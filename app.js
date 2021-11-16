const express = require('express');
const path = require('path');

/* 서버 설정 */
const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/', express.static(path.join(__dirname, 'public')));   //css 불러오기

/* 라우팅 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/login.html'));
});
app.get('/month', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/month.html'));
});
app.get('/week', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/week.html'));
});
app.get('/day', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/day.html'));
});

/* 에러 로그 */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message)
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});
