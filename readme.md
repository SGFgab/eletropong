# 🏓 ELT TT Tournament (Eletropong)

Um sistema completo, leve e responsivo para gerenciamento e marcação de pontos em torneios de tênis de mesa (Ping Pong). Desenvolvido com foco em usabilidade mobile, modo tablet e controle rápido de sets, ideal para telas de LED ou dispositivos operados na beira da mesa.

---

## ✨ Funcionalidades Principais

* **👥 Gerenciamento de Fila Dinâmico:** Adicione e remova jogadores facilmente. O app gerencia automaticamente quem está jogando e quem é o próximo da vez.
* **▶️ Painel de Partida Completo:** Visualização clara da pontuação atual, histórico de pontos do set (bolinhas de progresso), indicador de saque automático e alertas de *Match Point*.
* **🏆 Ranking Automatizado:** Tabela de classificação baseada em aproveitamento (Vitórias/Derrotas) com opção de exportar o relatório do dia em formato `.txt`.
* **📜 Histórico de Sets:** Registro completo de todas as partidas finalizadas, incluindo placar, duração do set e horário.
* **⬜ Modo Tablet:** Interface dedicada para telas maiores montadas em suportes na mesa, otimizando o espaço para visualização dos atletas.

---

## ⚡ Novas Implementações Importantes

### 1. 🕶️ Modo Contra a Luz (Filtro de Alto Contraste)
Pensado para jogos em ambientes externos ou sob refletores intensos onde o reflexo da tela dificulta a leitura. O botão de tema agora alterna ciclicamente entre três estados:
* **Modo Escuro:** Visual moderno com fundo escuro.
* **Modo Claro:** Interface limpa com tons pastéis.
* **Modo Contra a Luz:** Força contraste absoluto (Fundo `#ffffff` puro e textos/números em `#000000` absoluto), garantindo leitura cristalina mesmo sob a luz direta do sol. *Disponível em todas as telas, incluindo o Placar Rápido e Modo Tablet.*

### 2. ⚙️ Chave de Vantagem (Tie-Break Opcional)
Agora o organizador pode escolher como a partida termina através do toggle **"Exigir diferença de 2 pts (Tie-Break)"**:
* **Ativado (Padrão):** Segue a regra oficial. Se o jogo empatar no limite (ex: 4x4 ou 10x10), a partida continua até que um jogador abra 2 pontos de vantagem.
* **Desativado:** Modo "Sudden Death". Quem alcançar a pontuação máxima escolhida (3, 5 ou 11) primeiro ganha o set imediatamente (ex: 5x4 encerra o jogo).

### 3. ⚡ Placar Rápido Totalmente Integrado
O modo de marcação cru (sem necessidade de registro de nomes) foi atualizado para uma experiência de primeira classe:
* Herda instantaneamente o tema global ativo (como o modo Contra a Luz).
* Respeita a configuração ativa de Tie-Break.
* Inclui um banner dinâmico de *Match Point* para aumentar a emoção na hora decisiva.

---

## 🛠️ Atalhos de Teclado & Controle Remoto

O app é compatível com mini-teclados sem fio e controles bluetooth (passadores de slide/remotos de selfie adaptados):

* **Tecla `1` ou Volume `+`:** Ponto para o Jogador 1 / Lado Esquerdo.
* **Tecla `2` ou Volume `-`:** Ponto para o Jogador 2 / Lado Direito.
* **Tecla `Enter`:** Fecha a tela de vitória e inicia a próxima partida da fila.

---

## 🚀 Como Executar

Por ser um sistema construído puramente em **HTML5, CSS3 e JavaScript**, ele não precisa de compilação ou servidores complexos:

1. Baixe o arquivo `index.html`.
2. Dê um duplo clique no arquivo para abrir em qualquer navegador moderno (Chrome, Safari, Edge, Firefox).
3. Para salvar os dados localmente, o app utiliza o `localStorage` do navegador. Os jogadores e o ranking não somem ao atualizar a página.

---

## 💾 Tecnologias Utilizadas

* **Linguagens:** HTML5, CSS3 (CSS Variables para os Temas), JavaScript (ES6+).
* **Fontes:** Google Fonts (*Bebas Neue* e *DM Sans*).
* **Áudio:** Web Audio API (Sintetizador nativo para efeitos sonoros de pontos e vitória sem arquivos externos).