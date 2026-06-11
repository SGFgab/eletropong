# 🏓 ELT TT Tournament

O **Eletropong Table Tennis Tournament** é um ecossistema completo de gerenciamento, telemetria e análise para torneios corporativos de tênis de mesa. Desenvolvido em arquitetura vanilla de alta performance, o sistema opera de forma 100% autônoma (Client-Side), oferecendo persistência robusta, cálculos estatísticos avançados e suporte nativo a Progressive Web App (PWA).

---

## 🚀 Novas Funcionalidades & Engenharia do Sistema

A versão corrente introduz recursos críticos de nível corporativo para automação de quadra:

### 🎮 Controle de Arena Inteligente & Atalhos Rápidos
* **Teclas `1` e `2` Dinâmicas**: Computam pontos para o jogador da esquerda ou direita instantaneamente. Caso o modal de vitória esteja aberto, pressionar `1` ou `2` fecha a janela, salva os dados, rotaciona a mesa chamando o próximo desafiante e já computa o ponto inicial da nova partida.
* **Tecla `Enter`**: Fecha modais de anúncio e libera a mesa sem interferir no placar.
* **Inversão e Desfazimento**: Suporte completo a Rollback de pontuação (Undo em até 15 níveis) e inversão tática de lados de mesa.

### 📊 Algoritmo de Classificação ELO (Métricas ITTF/FIDE)
* O sistema abandonou contadores simples de vitória e adotou uma **Engine de ELO Matemático** baseada na probabilidade laplaciana (Fator K=32). O cálculo mede o peso técnico de cada confronto baseado no histórico de força de ambos os atletas.

### 🏆 Árvore Binária de Chaves Eliminatórias (Mata-Mata)
* Gerador automatizado de brackets baseado em potências matemáticas de base dois ($2^n$).
* Distribuição de seeds por embaralhamento aleatório (Shuffle).
* Avanço automatizado de fase com tratamento nativo para jogadores ímpares através de subida por **BYE W.O.**.

### 👤 Painel do Atleta com Telemetria Visual
* **Gráficos de Tendência Nativos**: Gráficos de linha gerados dinamicamente em formato SVG puro para ilustrar a consistência técnica recente (últimos 8 confrontos).
* **Armário de Conquistas**: Gamificação profunda que rastreia métricas de desempenho em tempo real para desbloqueio de medalhas como *"Batismo de Fogo"*, *"Lenda da Arena (ELO >= 1600)"*, e o raro *"Pneu Furado Absoluto (Set vencido de 0)"*.

### ⚡ Sub-Módulos e Telemetria de Rodapé
* **Placar de Treinamento Avulso**: Interface paralela isolada para partidas rápidas de aquecimento sem afetar o ranking global.
* **Estatísticas Globais**: Exibição em tempo real da média agregada de pontos por set, recordistas em sequência de vitórias (Streak) e identificação do set mais prolongado da história do servidor (Deuce Extremo).

---

## 🛠️ Tecnologias Utilizadas

* **Estrutura e Interface**: HTML5 Semântico, CSS3 Premium com arquitetura de variáveis para múltiplos temas visuais (Escuro, Claro, Cyberpunk e Alto Contraste).
* **Motor Lógico**: JavaScript Moderno (ES6+) estruturado em modelo de orientação a objetos isolados por responsabilidade.
* **Subsistema de Áudio**: *Web Audio API* nativa para síntese de ondas de frequência senoidais e dente-de-serra (impactos de raquete, efeitos arpejados de vitória e o áudio *Easter Egg* do placar 4x4).
* **Persistência**: Cache síncrono local via *LocalStorage Engine* com rotinas automatizadas de sanitização recursiva anti-corrupção de dados.

---

## ⌨️ Mapa de Operação Rápida por Teclado

| Tecla | Estado Regular | Com Modal de Vitória Aberto |
| :--- | :--- | :--- |
| <kbd>1</kbd> | Ponto para o Atleta da **Esquerda** | Fecha o modal, inicia nova partida e dá **+1 ponto para a Esquerda** |
| <kbd>2</kbd> | Ponto para o Atleta da **Direita** | Fecha o modal, inicia nova partida e dá **+1 ponto para a Direita** |
| <kbd>Enter</kbd> | *Nenhum* | Fecha o modal e inicia nova partida (Mesa Zerada) |

---

## 📦 Instalação e Distribuição Offline

Como o ecossistema é baseado em engenharia puramente Client-Side e configurado como PWA, não há necessidade de configuração de servidores Web robustos ou bancos de dados relacionais:

1. Clone ou copie o repositório para o diretório local.
2. Certifique-se de manter os arquivos `index.html`, `manifest.json` e o script do *Service Worker* no mesmo nível de diretório.
3. Para suporte completo a instalação offline em dispositivos móveis e desktops, hospede os arquivos sob um protocolo seguro (`https://`) ou execute localmente via ambiente seguro localhost.