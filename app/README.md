<h1 align="center">Prime Guesser!</h1>
<p align="center">
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/4.0.3">
    <img src="https://img.shields.io/badge/expo--CLI-4.0.3-informational?logo=expo"></img>
   </a
 </p> 

Aplicativo desenvolvido utilizando React Native com Expo.

## Instalação

Primeiramente: 
```bash
npm install

```

<h4> Configuração do servidor </h4>

  Você deverá configurar o serverIP com o ip da sua máquina local. Essa configuração permite que integre a API (que estará
  rodando localmente) com o aplicativo. Para descobrir o ip da sua máquina (em sistemas linux), basta abrir o terminal e digitar:
  
  
  ```bash
    hostname -I
  ```
  
  Copie esse endereço e cole como valor na constante serverIp, localizada em:
  
  ```bash
    app/src/utils/constants.js
  ```
  Agora o aplicativo já está se comunicando com a API local :)

  Após a instalação, execute o comando:

```bash
npm start

```

Uma janela do Expo será aberta no seu navegador. Para rodar o sistema no seu celular, abra o Expo no seu dispositivo e 
scaneie o codigo QR fornecido na página.

Pronto! Tudo funcionando...Aproveite o jogo :)


 >*Author: [@MateusRangel0](https://github.com/MateusRangel0)*
