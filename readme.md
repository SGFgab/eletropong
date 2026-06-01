# 🏓 ELT TT Tournament

Um aplicativo web progressivo (PWA) completo desenvolvido para gerenciar filas, placares e rankings de torneios de Tênis de Mesa (Ping Pong). Ideal para automatizar as partidas do dia a dia, cronometrar os jogos e manter o histórico de competições de forma simples e intuitiva.

## ✨ Funcionalidades

- **Gerenciamento de Fila de Espera:** Adicione jogadores à fila facilmente. O sistema rotaciona os jogadores automaticamente ao fim de cada partida.
- **Placar Interativo em Tempo Real:** Sistema de pontuação clicável ou via teclado, com detecção automática de *Deuce* (vantagem de 2 pontos) e alerta visual de *Match Point*.
- **Sistema de Saque Inteligente:** O aplicativo calcula e indica visualmente de quem é a vez de sacar (troca a cada 2 pontos).
- **Controles Avançados de Partida:** Opções para Desfazer ponto (Undo), Trocar Lados, Pausar a partida (congelando o cronômetro) e Cancelar.
- **Ranking Automático e Estatísticas:** Histórico de partidas, cálculo de vitórias/derrotas, taxa de aproveitamento (%) e estatísticas da sessão (maior sequência de vitórias, médias, etc.).
- **Exportação de Dados:** Exporte o ranking atualizado do dia para um arquivo `.txt` com um clique.
- **Modo Tablet Customizado:** Layout otimizado projetado especificamente para telas maiores, perfeito para deixar como placar visível para a torcida.
- **PWA e Suporte Offline:** Instalável no celular via navegador, com suporte a funcionamento offline graças à implementação de Service Workers (`sw.js`).
- **Acessibilidade e Design:** Modo Claro e Escuro, animações de confete e um gerador de QR Code interno para que outros jogadores possam escanear e acessar o app rapidamente.

## 🛠️ Estrutura e Tecnologias

O projeto foi construído utilizando tecnologias web nativas, garantindo leveza e alta velocidade sem dependência de bibliotecas externas complexas:
- **HTML5** e **CSS3** (Variáveis CSS, CSS Grid/Flexbox, animações nativas).
- **JavaScript (Vanilla)** para toda a lógica de estado, fila e armazenamento (`localStorage`).
- **Web Audio API** para os efeitos sonoros de rebatida e vitória.
- **PWA (`manifest.json` e `sw.js`)** para instalação e cache "Network First".

## 🚀 Como Usar

### Instalação (Hospedagem)
Basta hospedar os arquivos em qualquer servidor estático (como o **GitHub Pages**). Certifique-se de que os três arquivos principais estejam no mesmo diretório:
- `index.html`
- `sw.js`
- `manifest.json`

### Atalhos de Teclado
Para facilitar a marcação rápida durante o jogo, você pode usar o teclado:
- Tecla `1`: Ponto para o Jogador 1
- Tecla `2`: Ponto para o Jogador 2
- Tecla `Enter`: Fechar pop-ups e iniciar a próxima partida

## 💾 Cache e Atualizações

O aplicativo utiliza um Service Worker com estratégia *Network First*. Isso significa que ele sempre tentará buscar a versão mais recente caso haja internet. Para forçar uma atualização manual de versão após subir novos códigos, altere a constante `CACHE_NAME` dentro do arquivo `sw.js`.

---
Desenvolvido por Gabriel. Bora pro jogo! 🏓