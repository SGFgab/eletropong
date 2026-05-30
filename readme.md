# 🏓 ELT TT Tournament (Eletropong)

O **ELT TT Tournament** é um sistema web completo, responsivo e estático para gerenciamento e pontuação de torneios informais de Tênis de Mesa (Ping-Pong). Desenvolvido para rodar direto no navegador, o app gerencia filas de espera, calcula pontuações em tempo real, mantém um histórico de partidas e gera um ranking automatizado com taxa de aproveitamento dos jogadores.

🌐 **Acesse o projeto online:** [https://sgfgab.github.io/eletropong/](https://sgfgab.github.io/eletropong/)

---

## ✨ Funcionalidades Principais

* 👥 **Fila de Espera Dinâmica:** Adicione jogadores à fila. O sistema gerencia quem está jogando e quem é o próximo de forma visual (com adaptações exclusivas para Mobile e Desktop).
* 📊 **Placar em Tempo Real:** Pontuação interativa clicando na tela ou utilizando **atalhos do teclado**. Inclui indicador visual de quem está liderando a partida e barra de progresso adaptável.
* 🔄 **Sistema de Rotação Automática:** Ao finalizar a partida, o vencedor vai para a frente da fila (mantém a mesa) e o perdedor vai para o fim da fila para aguardar uma nova chance.
* ⚖️ **Regra de Vantagem Real (Deuce):** O jogo não termina estritamente na pontuação máxima se houver empate técnico. O sistema exige a diferença real de 2 pontos para consagrar o campeão (ex: 5x4 vai a 6, 10x10 vai a 12), seguindo as regras oficiais do esporte.
* 🔊 **Efeitos Sonoros Nativos:** Utiliza a *Audio Synthesis API* do navegador para gerar bipes realistas na marcação de pontos e uma fanfarra festiva ao decretar o vencedor, sem a necessidade de carregar arquivos pesados de áudio.
* 📥 **Exportação de Ranking:** Botão inteligente na aba de classificação que gera e faz o download instantâneo de um arquivo `.txt` formatado com as posições, vitórias, derrotas e taxa de aproveitamento de todos, pronto para mandar no grupo de WhatsApp.
* 📱 **Compartilhamento via QR Code:** Sistema integrado no cabeçalho que gera em tempo real o QR Code da URL atual do app, permitindo que novos jogadores entrem na fila apontando a câmera do celular.
* 🏆 **Ranking Automatizado:** Tabela de classificação baseada na taxa de vitória (%) e quantidade de vitórias, incluindo medalhas para o pódio (🥇, 🥈, 🥉).
* 📜 **Histórico de Partidas:** Registro completo de todos os jogos da sessão com horário, jogadores envolvidos e placar final.
* 💡 **Métricas Estatísticas Avançadas:** O painel exibe dados como o atual Líder, média de pontos por partida, maior sequência de vitórias (*win streak*) e a partida mais disputada do dia.
* 🌓 **Troca de Temas Inteligente:** Suporte a Modo Escuro (Dark) e Modo Claro (Light) com transições suaves e um sistema que alterna o tema automaticamente a cada 2 minutos para evitar o efeito Burn-in em telas fixas.
* 🚀 **PWA (Progressive Web App):** Configurado com Manifesto e suporte a Service Worker, permitindo que o site seja instalado na tela inicial do celular e funcione 100% offline à beira da mesa.
* 💬 **Curiosidades:** Um sistema rotativo no rodapé que exibe fatos históricos e regras sobre o tênis de mesa.

---

## ⌨️ Atalhos do Teclado (Produtividade na Mesa)

Para facilitar o controle enquanto a raquete está na mão, você pode controlar o painel usando apenas o teclado:
* `Teclado 1`: Computa ponto para o **Jogador 1** (Esquerda).
* `Teclado 2`: Computa ponto para o **Jogador 2** (Direita).
* `Teclado Enter`: Avança os modais (Vitória ou QR Code) e inicia automaticamente a próxima partida da fila.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando a stack web nativa, sem a necessidade de frameworks pesados, garantindo performance máxima:

* **HTML5:** Estruturação semântica e layouts otimizados.
* **CSS3 (Custom Properties & Grid/Flexbox):** Design moderno, responsivo e transições suaves de tema.
* **JavaScript (ES6+):** Lógica de estado da aplicação, gerenciamento de filas e manipulação do DOM.
* **Web Audio API & Canvas API:** Geração sintética de sons nativos e chuva de confetes customizada ao finalizar partidas.
* **LocalStorage:** Armazenamento interno no navegador para garantir que os dados não sejam perdidos ao recarregar a página.
* **Google Fonts:** Tipografia estilizada usando as fontes *Bebas Neue* e *DM Sans*.

---

## 🚀 Como Executar o Projeto Localmente

Como o projeto é feito em JavaScript puro e estático, você não precisa instalar nenhuma dependência (como Node.js). 

1. Baixe ou clone este repositório:
   ```bash
   git clone [https://github.com/sgfgab/eletropong.git](https://github.com/sgfgab/eletropong.git)