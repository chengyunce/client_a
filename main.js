const fs = require('fs');

const dotenv = require('dotenv');
const message = require('./message');

dotenv.configDotenv();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = message.create(name, number);

console.log(result);

fs.writeFile('result.txt', result, (err) => {
    if(err){
        console.err('ファイルの書き込みエラー:', err);
    }else{
        console.log('結果が result.txt に書き込まれました。');
    }
})