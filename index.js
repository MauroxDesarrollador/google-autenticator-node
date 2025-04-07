const express = require('express');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta public

let secret;

// Generar un nuevo secreto y crear un código QR
app.get('/api/generate-secret', (req, res) => {
    secret = speakeasy.generateSecret({ length: 20 });
    qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
        res.json({ secret: secret.base32, qr: data_url });
    });
});

// Verificar el token proporcionado por el usuario
app.post('/api/verify', (req, res) => {
    const { token } = req.body;
    const verified = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token,
    });

    res.json({ verified });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});