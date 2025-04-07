```markdown
# 🔒 Node.js Google Authenticator Integration

Proyecto de ejemplo para integrar autenticación de dos factores (2FA) con Google Authenticator en Node.js usando Express.js.

![Captura de pantalla](https://via.placeholder.com/800x400.png?text=Interfaz+de+Verificaci%C3%B3n+con+Google+Authenticator)

## ✨ Características
- Generación de secretos 2FA
- Creación de códigos QR para escanear en Google Authenticator
- Verificación de códigos TOTP
- Interfaz web integrada
- Servidor Express para montaje de archivos estáticos

## 📦 Prerrequisitos
- Node.js v18+
- npm v9+
- Dispositivo móvil con Google Authenticator

## 🚀 Instalación
1. Clonar repositorio:
```bash
git clone https://github.com/tu-usuario/node-google-authenticator.git
cd node-google-authenticator
```

2. Instalar dependencias:
```bash
npm install
```

## 🛠 Uso
Iniciar el servidor:
```bash
npm start
```

Acceder a la interfaz web:
```
http://localhost:3000
```

## 📌 Endpoints API
- `POST /generate-secret`: Genera nuevo secreto y QR code
  ```json
  // Respuesta:
  {
    "secret": "JBSWY3DPEHPK3PXP",
    "qrCodeUrl": "data:image/png;base64,..."
  }
  ```

- `POST /verify-totp`: Verifica código TOTP
  ```json
  // Request body:
  {
    "token": "123456",
    "secret": "JBSWY3DPEHPK3PXP"
  }

  // Respuesta exitosa:
  {
    "valid": true
  }
  ```

## 🔧 Configuración
Crear archivo `.env`:
```env
PORT=3000
# Opcional: Configurar tiempo de vida del token (default: 30s)
TOTP_STEP=30
```

## 🖥 Estructura de archivos
```
├── public/
│   └── index.html      # Interfaz de usuario
├── src/
│   ├── app.js         # Configuración Express
│   └── auth.js        # Lógica de autenticación
├── .env.example
└── package.json
```

## 📚 Tecnologías utilizadas
- [Express.js](https://expressjs.com/) - Servidor web
- [speakeasy](https://github.com/speakeasyjs/speakeasy) - Generación/verificación de TOTP
- [qrcode](https://www.npmjs.com/package/qrcode) - Generación de códigos QR
- [dotenv](https://www.npmjs.com/package/dotenv) - Manejo de variables de entorno

## 🧪 Probando la integración
1. Abre http://localhost:3000
2. Genera un nuevo secreto
3. Escanea el QR con Google Authenticator
4. Ingresa el código de 6 dígitos
5. ¡Verificación exitosa!

![Flujo de trabajo](https://via.placeholder.com/600x300.png?text=Generar+Secret+->+Escanear+QR+->+Verificar+Código)

## 📝 Notas importantes
- Los secretos generados son volátiles (se pierden al reiniciar el servidor)
- En producción, almacenar secretos en base de datos de forma segura
- Considerar implementar recuperación de códigos 2FA

## 🤝 Contribuir
Las contribuciones son bienvenidas! Abre un issue o PR siguiendo las [guías de contribución](CONTRIBUTING.md).

## 📄 Licencia
MIT License - Ver [LICENSE](LICENSE)
```
