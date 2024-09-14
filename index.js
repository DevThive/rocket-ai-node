const express = require('express');
const cors = require('cors'); // CORS 패키지 가져오기
const app = express();
const PORT = process.env.PORT || 4000; // 포트 번호를 4000으로 설정

app.use(cors()); // CORS 미들웨어 추가
app.use(express.json());

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    const responseMessage = message + ' + Hello World!';
    res.json({ response: responseMessage });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
