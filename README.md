#FURIA Chatbot

Um assistente virtual feito com Rasa e React para responder perguntas relacionadas ao time de CS:GO da FURIA.

## 📌 Funcionalidades

O bot responde a:

- Próximos torneios
- Próximas partidas
- Partidas ao vivo
- Informações sobre jogadores
- Line-up atual do time de CS da FURIA
- Redes sociais da FURIA
- Saudações e despedidas

## 🛠️ Tecnologias Utilizadas

- **Rasa** (backend com Python)
- **React** (frontend com Node.js)

## 📁 Estrutura do Projeto

```
furia-bot/
└── furIA/                
    ├── actions/          
    ├── tests/           
    ├── models/           
    ├── config.yml        
    ├── credentials.yml   
    ├── domain.yml        
    ├── endpoints.yml    
    └── README.md
frontend/                 
```

## 📋 Requisitos

### Python **3.8.1**

### Backend (Rasa)

Veja todos os requisitos em `requirements.txt`. Principais pacotes:

- `rasa==3.6.21`
- `rasa-sdk==3.6.2`
- `tensorflow==2.12.0`
- `aiohttp`, `redis`, `scikit-learn`, entre outros

### Frontend (React)

Veja `package.json` para dependências. Destaques:

- `react-chatbot-kit`
- `axios`
- `socket.io-client`
- `styled-components`

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia-bot.git
cd furia-bot
```

### 2. Instale os requisitos do Rasa

Recomenda-se usar um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

pip install -r requirements.txt
```

### 3. Inicie o backend do Rasa

Em dois terminais separados, execute:

```bash
# Terminal 1 - Ações customizadas
cd furIA
rasa run actions
```

```bash
# Terminal 2 - Servidor principal
cd furIA
rasa run --cors "*" --enable-api
```

### 4. Inicie o frontend React

```bash
cd frontend
npm install
npm start
```

A interface estará disponível em [http://localhost:3000](http://localhost:3000)

## 🧠 Treinamento do Modelo

Para treinar o modelo Rasa:

```bash
cd furIA
rasa train
```

## 📷 Exemplo de uso

![imagem-furia-chatbot](https://github.com/user-attachments/assets/92431233-6994-4ab5-b596-0a0287697b76)
