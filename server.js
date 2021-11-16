const http = require('http');
const fs = require('fs').promises;

const portNum = 3000;
http.createServer(async (req, res) => {
    try{
        /*요청하는 HTML페이지 불러오기*/
        console.log(req.method, req.url);
        const content = await fs.readFile('./HTML/week.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8}'});
        return res.end(content);
    } catch (err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
    
}).listen(portNum, () => {
    console.log(`${portNum}번 포트에서 서버 대기 중입니다 !`)
})
