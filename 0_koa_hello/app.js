const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // リクエストが来たURLを取得
    const url = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(__dirname, 'public', url);

    // ファイルの読み込み
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // ファイルが見つからない場合は404エラーを返す
            res.writeHead(404);
            res.end('File not found');
        } else {
            // 正常な場合はファイルの内容を返す
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
