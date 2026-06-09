# 🏓 ELT TT Tournament

O **ELT TT Tournament** (Eletropong) é uma aplicação web moderna e responsiva (PWA) projetada para automatizar, gerir e marcar pontos em torneios casuais de ténis de mesa (ping-pong). Conta com suporte nativo para dispositivos móveis, computadores e um **Modo Tablet** dedicado para visualização na lateral da mesa.

---

## 🚀 Novidades e Funcionalidades Atuais

- **📱 Suporte Total PWA (Offline):** Graças ao Service Worker (`sw.js`) e ao manifesto, o site pode ser instalado no ecrã inicial do telemóvel ou tablet e funciona **totalmente sem internet**.
- **⬜ Modo Tablet Avançado:** Interface adaptada para ecrãs maiores colocados ao lado da mesa de jogo. Inclui um painel lateral dinâmico para gerir a fila, ver o ranking do dia ou o histórico em tempo real sem interromper o placar.
- **🔄 Lógica de Saque Blindada:** O indicador de serviço atualiza dinamicamente e de forma inteligente (de 2 em 2 pontos ou de 1 em 1 nas vantagens). Mesmo ao usar a função **"Trocar Lados"**, o marcador sabe exatamente quem está a sacar no plano real.
- **↩️ Sistema de Undo Avançado:** Permite desfazer até os últimos 10 pontos marcados para corrigir erros de arbitragem rapidamente.
- **⚡ Validação e UX Fluida:** Inputs de texto contam com animações de feedback visual (*shake/tremor*) em caso de nomes duplicados ou inválidos. O botão de cancelar partida agora exige confirmação para evitar cliques acidentais.
- **📊 Estatísticas Avançadas e Exportação:** O rodapé monitoriza métricas como média de pontos por partida, maior sequência de vitórias e a partida mais disputada. O ranking pode ser exportado instantaneamente num ficheiro `.txt`.
- **🔊 Feedback Sonoro e Tátil Nativo:** Utiliza a API de Áudio Web para gerar efeitos sonoros sintéticos de batida de bola e vitória, além de vibração no dispositivo (se suportado).
- **🌓 Temas Dinâmicos:** Alternância rápida entre Modo Escuro e Modo Claro com persistência local (`localStorage`).
- **💡 Curiosidades Semanais:** Sistema integrado que exibe factos e curiosidades sobre a história do ténis de mesa mundial no rodapé.

---

## ⌨️ Atalhos de Teclado e Controlo Remoto

O sistema está preparado para ser controlado à distância por mini-teclados ou comandos Bluetooth (como os que simulam botões de volume):

| Comando / Tecla | Ação Executada |
| :--- | :--- |
| `1` ou `Volume Up` | Marca ponto para o **Jogador 1** (Esquerda) |
| `2` ou `Volume Down` | Marca ponto para o **Jogador 2** (Direita) |
| `Enter` | Fecha o ecrã de vitória e inicia automaticamente o próximo jogo da fila |

---

## 📁 Estrutura do Projeto

Para o funcionamento correto de todas as tecnologias (especialmente a instalação offline), a pasta do projeto deve conter:

```text
├── index.html       # Interface, estilos e lógica principal do torneio
├── manifest.json    # Configurações de instalação do PWA e ícones
└── sw.js            # Service Worker para controlo de cache offline