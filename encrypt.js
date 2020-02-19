const zilliqa = require('@zilliqa-js/crypto');


// kdf: 'pbkdf2' | 'scrypt'
const kdf = 'scrypt';
const privateKey = 'b87f4ba7dcd6e60f2cca8352c89904e3993c5b2b0b608d255002edcda6374de4';
const passphrase = 'test';

try {
    zilliqa.encryptPrivateKey(kdf, privateKey, passphrase).then(result => {
        console.log(result);
    });
} catch (error) {
    console.log(error);
}

