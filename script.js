/**
 * ============================================================================
 * JS CODE QUEST - TRILHA DE 10 DESAFIOS COM DESBLOQUEIO SEQUENCIAL
 * ============================================================================
 * Aplicação cliente pura (frontend) com Monaco Editor, execução com new Function,
 * suíte de testes unitários isolados e persistência local via localStorage.
 */

/* ============================================================================
   1. BASE DE DADOS: OS 10 DESAFIOS DA TRILHA
   ============================================================================ */
const CHALLENGES = [
  {
    id: 1,
    title: "Sistema de Descontos VIP",
    difficulty: "Iniciante",
    tags: ["Condicionais", "Operadores", "Matemática"],
    problem: `Você foi contratado para implementar o módulo financeiro de um e-commerce moderno. A gerência de vendas instituiu um programa de fidelidade: clientes com status <strong>VIP</strong> recebem <strong>20% de desconto</strong> sobre o valor original de qualquer compra, enquanto clientes comuns pagam o <strong>valor integral</strong> (sem desconto).`,
    rules: [
      "Complete a função <code>calcularPreco(valor, isVip)</code>.",
      "O parâmetro <code>valor</code> é um número positivo que representa o valor original da compra.",
      "O parâmetro <code>isVip</code> é um booleano (<code>true</code> ou <code>false</code>).",
      "Se <code>isVip === true</code>, aplique 20% de desconto (retorne 80% do valor: <code>valor * 0.8</code>).",
      "Se <code>isVip === false</code>, retorne o próprio <code>valor</code> original sem alteração.",
      "A função deve sempre retornar um valor numérico."
    ],
    functionName: "calcularPreco",
    signature: "calcularPreco(valor, isVip)",
    initialCode: `function calcularPreco(valor, isVip) {
  // Escreva sua lógica aqui

}`,
    tip: "Você pode utilizar um operador ternário simples ou a estrutura condicional if/else. Lembre-se do retorno numérico!",
    testCases: [
      { id: 1, desc: "Cliente VIP recebe 20% de desconto sobre 100", args: [100, true], expected: 80, explanation: "100 com 20% off = 80" },
      { id: 2, desc: "Cliente comum paga valor integral sobre 100", args: [100, false], expected: 100, explanation: "Sem desconto = 100" },
      { id: 3, desc: "Cliente VIP com valor decimal (50.50)", args: [50.50, true], expected: 40.4, explanation: "50.50 com 20% off = 40.4" }
    ]
  },
  {
    id: 2,
    title: "Cálculo de Média Escolar",
    difficulty: "Iniciante",
    tags: ["Aritmética", "Funções"],
    problem: `Um colégio precisa de uma função para calcular a média aritmética simples de um aluno a partir de 3 notas bimestrais. A função deve somar as notas e dividir pelo total de avaliações (3).`,
    rules: [
      "Complete a função <code>calcularMedia(nota1, nota2, nota3)</code>.",
      "Os três parâmetros são números representando notas de provas.",
      "A fórmula da média aritmética é: <code>(nota1 + nota2 + nota3) / 3</code>.",
      "A função deve retornar a média calculada como um número."
    ],
    functionName: "calcularMedia",
    signature: "calcularMedia(nota1, nota2, nota3)",
    initialCode: `function calcularMedia(nota1, nota2, nota3) {
  // Escreva sua lógica aqui

}`,
    tip: "Atenção com a precedência matemática de operadores: envolva a soma entre parênteses antes de dividir por 3!",
    testCases: [
      { id: 1, desc: "Notas padrão 7, 8 e 9", args: [7, 8, 9], expected: 8, explanation: "(7 + 8 + 9) / 3 = 8" },
      { id: 2, desc: "Três notas iguais a 6", args: [6, 6, 6], expected: 6, explanation: "(6 + 6 + 6) / 3 = 6" },
      { id: 3, desc: "Notas variadas 10, 5 e 6", args: [10, 5, 6], expected: 7, explanation: "(10 + 5 + 6) / 3 = 7" }
    ]
  },
  {
    id: 3,
    title: "Verificador de Maioridade",
    difficulty: "Iniciante",
    tags: ["Condicionais", "Strings"],
    problem: `Para controlar o acesso a um evento exclusivo, precisamos validar se uma pessoa possui idade igual ou superior a 18 anos. Crie uma função que receba a idade e retorne a classificação textual correspondente.`,
    rules: [
      "Complete a função <code>verificarMaioridade(idade)</code>.",
      "O parâmetro <code>idade</code> é um número inteiro positivo.",
      "Se <code>idade >= 18</code>, retorne exatamente a string <code>\"Maior de idade\"</code>.",
      "Se <code>idade < 18</code>, retorne exatamente a string <code>\"Menor de idade\"</code>."
    ],
    functionName: "verificarMaioridade",
    signature: "verificarMaioridade(idade)",
    initialCode: `function verificarMaioridade(idade) {
  // Escreva sua lógica aqui

}`,
    tip: "Preste atenção às maiúsculas, minúsculas e acentos nas strings de retorno. Elas devem coincidir exatamente.",
    testCases: [
      { id: 1, desc: "Pessoa com exatamente 18 anos", args: [18], expected: "Maior de idade", explanation: "18 anos já é maior de idade" },
      { id: 2, desc: "Jovem com 15 anos", args: [15], expected: "Menor de idade", explanation: "Menor que 18" },
      { id: 3, desc: "Adulto com 21 anos", args: [21], expected: "Maior de idade", explanation: "Maior que 18" }
    ]
  },
  {
    id: 4,
    title: "Par ou Ímpar",
    difficulty: "Iniciante",
    tags: ["Operador Módulo", "Matemática"],
    problem: `Crie uma função matemática elementar que receba um número inteiro e identifique se ele é par ou ímpar utilizando o operador de resto da divisão (<code>%</code>).`,
    rules: [
      "Complete a função <code>verificarParidade(numero)</code>.",
      "O parâmetro <code>numero</code> é um número inteiro.",
      "Se o resto da divisão por 2 for zero (<code>numero % 2 === 0</code>), retorne exatamente <code>\"Par\"</code>.",
      "Caso contrário, retorne exatamente <code>\"Ímpar\"</code>."
    ],
    functionName: "verificarParidade",
    signature: "verificarParidade(numero)",
    initialCode: `function verificarParidade(numero) {
  // Escreva sua lógica aqui

}`,
    tip: "O número 0 é considerado Par, pois 0 dividido por 2 deixa resto 0.",
    testCases: [
      { id: 1, desc: "Número par positivo (4)", args: [4], expected: "Par", explanation: "4 % 2 = 0" },
      { id: 2, desc: "Número ímpar positivo (7)", args: [7], expected: "Ímpar", explanation: "7 % 2 = 1" },
      { id: 3, desc: "Zero (0)", args: [0], expected: "Par", explanation: "0 % 2 = 0" }
    ]
  },
  {
    id: 5,
    title: "Cálculo de IMC",
    difficulty: "Iniciante",
    tags: ["Matemática", "Ponto Flutuante"],
    problem: `O Índice de Massa Corporal (IMC) é uma medida adotada pela Organização Mundial da Saúde para calcular o peso ideal. A fórmula é dada pelo peso dividido pela altura ao quadrado: <code>IMC = peso / (altura * altura)</code>.`,
    rules: [
      "Complete a função <code>calcularIMC(peso, altura)</code>.",
      "O parâmetro <code>peso</code> é em quilogramas (ex: 70) e <code>altura</code> em metros (ex: 1.75).",
      "Calcule o IMC e retorne o valor numérico arredondado para 2 casas decimais.",
      "Dica: utilize <code>Number((peso / (altura * altura)).toFixed(2))</code>."
    ],
    functionName: "calcularIMC",
    signature: "calcularIMC(peso, altura)",
    initialCode: `function calcularIMC(peso, altura) {
  // Escreva sua lógica aqui

}`,
    tip: "toFixed(2) converte para string, portanto use Number() ou o operador unário + para devolver como número.",
    testCases: [
      { id: 1, desc: "Peso 70kg e altura 1.75m", args: [70, 1.75], expected: 22.86, explanation: "70 / (1.75 * 1.75) = 22.86" },
      { id: 2, desc: "Peso 80kg e altura 1.80m", args: [80, 1.80], expected: 24.69, explanation: "80 / (1.80 * 1.80) = 24.69" },
      { id: 3, desc: "Peso 95kg e altura 1.70m", args: [95, 1.70], expected: 32.87, explanation: "95 / (1.70 * 1.70) = 32.87" }
    ]
  },
  {
    id: 6,
    title: "Conversor de Temperatura",
    difficulty: "Iniciante",
    tags: ["Fórmula", "Conversão"],
    problem: `Um sistema meteorológico internacional necessita converter temperaturas registradas em graus Celsius para Fahrenheit. A fórmula padrão é: <code>F = (C * 1.8) + 32</code>.`,
    rules: [
      "Complete a função <code>celsiusParaFahrenheit(celsius)</code>.",
      "O parâmetro <code>celsius</code> é um número.",
      "Retorne o valor numérico correspondente em Fahrenheit."
    ],
    functionName: "celsiusParaFahrenheit",
    signature: "celsiusParaFahrenheit(celsius)",
    initialCode: `function celsiusParaFahrenheit(celsius) {
  // Escreva sua lógica aqui

}`,
    tip: "A fórmula também pode ser escrita como (celsius * 9 / 5) + 32.",
    testCases: [
      { id: 1, desc: "Ponto de congelamento da água (0°C)", args: [0], expected: 32, explanation: "(0 * 1.8) + 32 = 32" },
      { id: 2, desc: "Ponto de ebulição da água (100°C)", args: [100], expected: 212, explanation: "(100 * 1.8) + 32 = 212" },
      { id: 3, desc: "Temperatura ambiente agradável (25°C)", args: [25], expected: 77, explanation: "(25 * 1.8) + 32 = 77" }
    ]
  },
  {
    id: 7,
    title: "Calculadora de Gorjeta",
    difficulty: "Iniciante",
    tags: ["Porcentagem", "Finanças"],
    problem: `Em um restaurante, os clientes podem escolher a porcentagem de gorjeta que desejam deixar para o garçom. Crie uma função que calcule exatamente o valor em reais da gorjeta com base no valor total da conta e na taxa percentual informada.`,
    rules: [
      "Complete a função <code>calcularGorjeta(valorConta, percentual)</code>.",
      "Ambos os parâmetros são números positivos.",
      "A fórmula da gorjeta é: <code>valorConta * (percentual / 100)</code>.",
      "Retorne o valor numérico da gorjeta."
    ],
    functionName: "calcularGorjeta",
    signature: "calcularGorjeta(valorConta, percentual)",
    initialCode: `function calcularGorjeta(valorConta, percentual) {
  // Escreva sua lógica aqui

}`,
    tip: "Atenção: a função deve retornar somente o valor da gorjeta, e não a soma da conta com a gorjeta.",
    testCases: [
      { id: 1, desc: "Conta de R$ 100 com 10% de gorjeta", args: [100, 10], expected: 10, explanation: "10% de 100 = 10" },
      { id: 2, desc: "Conta de R$ 200 com 15% de gorjeta", args: [200, 15], expected: 30, explanation: "15% de 200 = 30" },
      { id: 3, desc: "Conta de R$ 50 com 20% de gorjeta", args: [50, 20], expected: 10, explanation: "20% de 50 = 10" }
    ]
  },
  {
    id: 8,
    title: "Maior de Três Números",
    difficulty: "Iniciante",
    tags: ["Comparações", "Math"],
    problem: `Crie uma função que receba três números como argumentos e identifique qual deles é o maior valor numérico, retornando-o.`,
    rules: [
      "Complete a função <code>encontrarMaior(a, b, c)</code>.",
      "Os três argumentos <code>a</code>, <code>b</code> e <code>c</code> são números.",
      "Você pode usar comparações condicionais ou o método nativo <code>Math.max(a, b, c)</code>.",
      "Retorne o maior número encontrado."
    ],
    functionName: "encontrarMaior",
    signature: "encontrarMaior(a, b, c)",
    initialCode: `function encontrarMaior(a, b, c) {
  // Escreva sua lógica aqui

}`,
    tip: "A função Math.max(a, b, c) aceita múltiplos argumentos e resolve o problema de forma concisa e elegante!",
    testCases: [
      { id: 1, desc: "O primeiro número é o maior (10, 5, 8)", args: [10, 5, 8], expected: 10, explanation: "10 é o maior" },
      { id: 2, desc: "O segundo número é o maior (3, 27, 14)", args: [3, 27, 14], expected: 27, explanation: "27 é o maior" },
      { id: 3, desc: "Números negativos (-5, -2, -9)", args: [-5, -2, -9], expected: -2, explanation: "-2 é o mais próximo de zero, logo o maior" }
    ]
  },
  {
    id: 9,
    title: "Conversor de Minutos em Horas",
    difficulty: "Iniciante",
    tags: ["Divisão Inteira", "Strings"],
    problem: `Um aplicativo de podcasts armazena a duração de faixas em minutos totais. Crie uma função que receba os minutos totais e devolva uma string formatada no padrão <code>\"{horas}h {minutos}m\"</code>.`,
    rules: [
      "Complete a função <code>formatarMinutos(totalMinutos)</code>.",
      "O parâmetro <code>totalMinutos</code> é um número inteiro positivo.",
      "Calcule as horas completas: <code>Math.floor(totalMinutos / 60)</code>.",
      "Calcule os minutos restantes com o operador de resto: <code>totalMinutos % 60</code>.",
      "Retorne a string exatamente no formato <code>\"{horas}h {minutos}m\"</code> (exemplo: <code>\"2h 10m\"</code>)."
    ],
    functionName: "formatarMinutos",
    signature: "formatarMinutos(totalMinutos)",
    initialCode: `function formatarMinutos(totalMinutos) {
  // Escreva sua lógica aqui

}`,
    tip: "Use template literals (crases) para montar a string com facilidade: `\${horas}h \${minutos}m`.",
    testCases: [
      { id: 1, desc: "130 minutos totais", args: [130], expected: "2h 10m", explanation: "130 = 2 horas (120min) + 10 minutos" },
      { id: 2, desc: "Exatamente 60 minutos", args: [60], expected: "1h 0m", explanation: "60 = 1 hora + 0 minutos" },
      { id: 3, desc: "Menos de uma hora (45 minutos)", args: [45], expected: "0h 45m", explanation: "45 = 0 horas + 45 minutos" }
    ]
  },
  {
    id: 10,
    title: "Salário Líquido (INSS Simplificado)",
    difficulty: "Iniciante",
    tags: ["Faixas Salariais", "Regra de Negócio"],
    problem: `O departamento de RH precisa calcular o salário líquido de um funcionário após o desconto simplificado de INSS com base em duas faixas salariais: até R$ 2.000,00 desconta 7.5%, acima de R$ 2.000,00 desconta 10%.`,
    rules: [
      "Complete a função <code>calcularSalarioLiquido(salarioBruto)</code>.",
      "Se <code>salarioBruto <= 2000</code>, o desconto é de 7.5% (retorne 92.5% do salário: <code>salarioBruto * 0.925</code>).",
      "Se <code>salarioBruto > 2000</code>, o desconto é de 10% (retorne 90% do salário: <code>salarioBruto * 0.9</code>).",
      "A função deve retornar o valor numérico final do salário líquido."
    ],
    functionName: "calcularSalarioLiquido",
    signature: "calcularSalarioLiquido(salarioBruto)",
    initialCode: `function calcularSalarioLiquido(salarioBruto) {
  // Escreva sua lógica aqui

}`,
    tip: "Um if (salarioBruto <= 2000) resolve a divisão de faixas. Lembre-se de retornar o valor líquido (após o desconto).",
    testCases: [
      { id: 1, desc: "Salário de R$ 1.000 (desconto 7.5%)", args: [1000], expected: 925, explanation: "1000 * 0.925 = 925" },
      { id: 2, desc: "Salário de R$ 2.000 no limite da primeira faixa", args: [2000], expected: 1850, explanation: "2000 * 0.925 = 1850" },
      { id: 3, desc: "Salário de R$ 3.000 na segunda faixa (desconto 10%)", args: [3000], expected: 2700, explanation: "3000 * 0.9 = 2700" }
    ]
  }
];

/* ============================================================================
   2. GERENCIADOR DE ESTADO & PERSISTÊNCIA (LOCALSTORAGE)
   ============================================================================ */
const STORAGE_KEYS = {
  UNLOCKED_MAX: "jsquest_unlocked_max",
  COMPLETED: "jsquest_completed",
  CURRENT_ID: "jsquest_current_id",
  CODE_PREFIX: "jsquest_code_"
};

const State = {
  unlockedMax: 1,
  completed: [],
  currentId: 1,

  load() {
    try {
      const savedUnlocked = localStorage.getItem(STORAGE_KEYS.UNLOCKED_MAX);
      const savedCompleted = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      const savedCurrentId = localStorage.getItem(STORAGE_KEYS.CURRENT_ID);

      this.unlockedMax = savedUnlocked ? parseInt(savedUnlocked, 10) : 1;
      this.completed = savedCompleted ? JSON.parse(savedCompleted) : [];
      this.currentId = savedCurrentId ? parseInt(savedCurrentId, 10) : 1;

      // Garantir limites válidos
      if (isNaN(this.unlockedMax) || this.unlockedMax < 1) this.unlockedMax = 1;
      if (this.unlockedMax > CHALLENGES.length) this.unlockedMax = CHALLENGES.length;
      if (this.currentId > this.unlockedMax) this.currentId = this.unlockedMax;
    } catch (e) {
      console.warn("Erro ao ler dados do localStorage, usando valores padrão.", e);
      this.unlockedMax = 1;
      this.completed = [];
      this.currentId = 1;
    }
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEYS.UNLOCKED_MAX, this.unlockedMax.toString());
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(this.completed));
      localStorage.setItem(STORAGE_KEYS.CURRENT_ID, this.currentId.toString());
    } catch (e) {
      console.warn("Erro ao salvar dados no localStorage.", e);
    }
  },

  saveCode(challengeId, code) {
    try {
      localStorage.setItem(STORAGE_KEYS.CODE_PREFIX + challengeId, code);
    } catch (e) {
      console.warn("Erro ao salvar código no localStorage.", e);
    }
  },

  getCode(challengeId) {
    try {
      return localStorage.getItem(STORAGE_KEYS.CODE_PREFIX + challengeId);
    } catch (e) {
      return null;
    }
  },

  clearCode(challengeId) {
    try {
      localStorage.removeItem(STORAGE_KEYS.CODE_PREFIX + challengeId);
    } catch (e) {}
  },

  resetAll() {
    localStorage.clear();
    this.unlockedMax = 1;
    this.completed = [];
    this.currentId = 1;
    this.save();
  },

  isCompleted(id) {
    return this.completed.includes(id);
  },

  isUnlocked(id) {
    return id <= this.unlockedMax;
  },

  markCompleted(id) {
    if (!this.completed.includes(id)) {
      this.completed.push(id);
    }
    // Desbloqueia o próximo se for o desafio máximo atual
    if (id === this.unlockedMax && this.unlockedMax < CHALLENGES.length) {
      this.unlockedMax++;
    }
    this.save();
  }
};

/* ============================================================================
   3. REFERÊNCIAS DO DOM & INSTÂNCIA DO MONACO
   ============================================================================ */
let monacoEditorInstance = null;

const dom = {
  // Top Navbar
  prevBtn: document.getElementById("prev-challenge-btn"),
  nextBtn: document.getElementById("next-challenge-btn"),
  openRoadmapBtn: document.getElementById("open-roadmap-btn"),
  currentStatusDot: document.getElementById("current-badge-status"),
  currentSummaryText: document.getElementById("current-challenge-summary"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  progressPercentage: document.getElementById("progress-percentage"),
  resetAllBtn: document.getElementById("reset-all-progress-btn"),

  // Painel Esquerdo
  badgesGroup: document.getElementById("challenge-badges"),
  challengeTitle: document.getElementById("challenge-title"),
  challengeBody: document.getElementById("challenge-body"),

  // Painel Direito (Editor & Terminal)
  monacoContainer: document.getElementById("monaco-container"),
  editorTabName: document.getElementById("editor-tab-name"),
  editorSavedStatus: document.getElementById("editor-saved-status"),
  runBtn: document.getElementById("run-btn"),
  resetCodeBtn: document.getElementById("reset-code-btn"),
  terminalOutput: document.getElementById("terminal-output"),
  terminalStatusDot: document.getElementById("terminal-status-dot"),
  clearConsoleBtn: document.getElementById("clear-console-btn"),

  // Modal
  roadmapModal: document.getElementById("roadmap-modal"),
  closeRoadmapBtn: document.getElementById("close-roadmap-btn"),
  challengeGrid: document.getElementById("challenge-grid")
};

/* ============================================================================
   4. RENDERIZADOR DE INSTRUÇÕES DO DESAFIO
   ============================================================================ */
function getCurrentChallenge() {
  return CHALLENGES.find(c => c.id === State.currentId) || CHALLENGES[0];
}

function renderChallengeInstructions(challenge) {
  // 1. Badges do topo
  dom.badgesGroup.innerHTML = `
    <span class="badge badge-difficulty">${challenge.difficulty}</span>
    <span class="badge badge-lang">JavaScript</span>
    ${challenge.tags.map(t => `<span class="badge badge-topic">${t}</span>`).join("")}
  `;

  // 2. Título
  dom.challengeTitle.textContent = `${challenge.id}. ${challenge.title}`;

  // 3. Montagem do corpo de regras e tabela de testes
  const rulesHtml = challenge.rules.map(r => `<li>${r}</li>`).join("");

  const tableRowsHtml = challenge.testCases.map(tc => {
    const argsStr = tc.args.map(formatValue).join(", ");
    const expStr = formatValue(tc.expected);
    return `
      <tr>
        <td><strong>${tc.id}</strong></td>
        <td><code>${escapeHtml(argsStr)}</code></td>
        <td><span class="tag-expected">${escapeHtml(expStr)}</span></td>
        <td>${escapeHtml(tc.explanation)}</td>
      </tr>
    `;
  }).join("");

  dom.challengeBody.innerHTML = `
    <!-- Situação Problema -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">📌</span> Situação Problema</h2>
      <p>${challenge.problem}</p>
    </section>

    <!-- Regras do Desafio -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">⚙️</span> Regras de Negócio</h2>
      <ul class="rule-list">
        ${rulesHtml}
      </ul>
    </section>

    <!-- Assinatura da Função -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">💻</span> Assinatura da Função</h2>
      <pre class="code-snippet"><code>${escapeHtml(challenge.initialCode)}</code></pre>
    </section>

    <!-- Casos de Teste -->
    <section class="section">
      <h2 class="section-title"><span class="section-icon">🧪</span> Casos de Teste Esperados</h2>
      <div class="table-container">
        <table class="test-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Entrada (${escapeHtml(challenge.signature.replace(/.*\((.*)\)/, "$1"))})</th>
              <th>Saída Esperada</th>
              <th>Explicação</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Dica -->
    <div class="tip-card">
      <span class="tip-icon">💡</span>
      <div>
        <strong>Dica do Engenheiro:</strong> ${escapeHtml(challenge.tip)}
      </div>
    </div>
  `;

  // Atualiza nome da aba do editor
  dom.editorTabName.textContent = `${challenge.functionName}.js`;
}

/* ============================================================================
   5. ATUALIZAÇÃO DA INTERFACE GERAL (STEPPER, PROGRESSO, MODAL)
   ============================================================================ */
function updateUiState() {
  const current = getCurrentChallenge();
  const total = CHALLENGES.length;
  const completedCount = State.completed.length;
  const percentage = Math.round((completedCount / total) * 100);

  // Barra de Progresso
  dom.progressPercentage.textContent = `${percentage}% (${completedCount}/${total})`;
  dom.progressBarFill.style.width = `${percentage}%`;

  // Resumo do Desafio Atual
  const isCurCompleted = State.isCompleted(current.id);
  const statusIcon = isCurCompleted ? "✅" : "🔓";
  dom.currentSummaryText.textContent = `Desafio ${current.id} de ${total}: ${current.title}`;
  dom.currentStatusDot.textContent = statusIcon;

  // Botões de Navegação Anterior / Próximo
  dom.prevBtn.disabled = current.id <= 1;
  // O botão próximo só fica habilitado se o próximo desafio já estiver desbloqueado!
  const nextId = current.id + 1;
  dom.nextBtn.disabled = nextId > total || !State.isUnlocked(nextId);

  // Atualiza Modal do Roadmap
  renderRoadmapGrid();
}

function renderRoadmapGrid() {
  dom.challengeGrid.innerHTML = "";

  CHALLENGES.forEach(c => {
    const isComp = State.isCompleted(c.id);
    const isUnlk = State.isUnlocked(c.id);
    const isActive = c.id === State.currentId;

    let cardClass = "grid-card";
    let statusBadgeText = "";
    let badgeClass = "";

    if (isComp) {
      cardClass += " completed";
      statusBadgeText = "✅ Concluído";
      badgeClass = "badge-pass";
    } else if (isUnlk) {
      cardClass += " unlocked";
      statusBadgeText = "🔓 Disponível";
      badgeClass = "badge-tag";
    } else {
      cardClass += " locked";
      statusBadgeText = "🔒 Bloqueado";
      badgeClass = "badge-fail";
    }

    if (isActive) {
      cardClass += " active-card";
    }

    const card = document.createElement("div");
    card.className = cardClass;
    card.title = isUnlk
      ? `Acessar Desafio ${c.id}: ${c.title}`
      : `Complete o Desafio ${c.id - 1} para desbloquear este.`;

    card.innerHTML = `
      <div class="grid-card-num">${c.id}</div>
      <div class="grid-card-content">
        <div class="grid-card-title">${c.title}</div>
        <div class="grid-card-func"><code>${c.functionName}()</code></div>
      </div>
      <span class="grid-card-status-badge ${badgeClass}">${statusBadgeText}</span>
    `;

    if (isUnlk) {
      card.addEventListener("click", () => {
        switchToChallenge(c.id);
        closeRoadmap();
      });
    }

    dom.challengeGrid.appendChild(card);
  });
}

/* ============================================================================
   6. TROCA DE DESAFIO & SINCRONIZAÇÃO COM MONACO
   ============================================================================ */
function switchToChallenge(targetId) {
  if (targetId < 1 || targetId > CHALLENGES.length) return;
  if (!State.isUnlocked(targetId)) {
    alert(`O Desafio ${targetId} está bloqueado. Conclua os testes do desafio anterior primeiro!`);
    return;
  }

  // 1. Salva código atual antes de trocar
  if (monacoEditorInstance) {
    State.saveCode(State.currentId, monacoEditorInstance.getValue());
  }

  // 2. Atualiza estado para o novo desafio
  State.currentId = targetId;
  State.save();

  const challenge = getCurrentChallenge();

  // 3. Renderiza instruções
  renderChallengeInstructions(challenge);

  // 4. Carrega código salvo ou inicial no editor
  if (monacoEditorInstance) {
    const savedCode = State.getCode(challenge.id);
    const codeToLoad = savedCode !== null ? savedCode : challenge.initialCode;
    monacoEditorInstance.setValue(codeToLoad);
  }

  // 5. Atualiza UI e limpa terminal
  updateUiState();
  clearTerminal();
  appendTerminalLine(
    "text-muted",
    `Carregado: <strong>Desafio ${challenge.id} - ${challenge.title}</strong>.\nEdite sua solução e pressione "▶ Executar Testes" (ou Ctrl+Enter).`
  );
}

/* ============================================================================
   7. INICIALIZAÇÃO DO MONACO EDITOR (VIA CDN REQUIREJS)
   ============================================================================ */
function initMonaco() {
  if (typeof require === "undefined") {
    console.error("RequireJS não foi carregado.");
    appendTerminalLine("log-error", "Erro ao carregar RequireJS para o Monaco Editor.");
    return;
  }

  require.config({
    paths: {
      vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs"
    }
  });

  require(["vs/editor/editor.main"], function () {
    const current = getCurrentChallenge();
    const savedCode = State.getCode(current.id);
    const initialContent = savedCode !== null ? savedCode : current.initialCode;

    monacoEditorInstance = monaco.editor.create(dom.monacoContainer, {
      value: initialContent,
      language: "javascript",
      theme: "vs-dark",
      automaticLayout: true,
      fontSize: 13.5,
      fontFamily: "'Fira Code', Consolas, 'Courier New', monospace",
      fontLigatures: true,
      tabSize: 2,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      roundedSelection: true,
      contextmenu: true,
      renderLineHighlight: "all",
      padding: { top: 12, bottom: 12 }
    });

    // Auto-save no Monaco ao digitar
    monacoEditorInstance.onDidChangeModelContent(() => {
      State.saveCode(State.currentId, monacoEditorInstance.getValue());
      dom.editorSavedStatus.textContent = "salvo";
    });

    // Atalho Ctrl+Enter (ou Cmd+Enter) para rodar testes
    monacoEditorInstance.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      executeTestSuite
    );

    console.log("Monaco Editor inicializado.");
  });
}

/* ============================================================================
   8. SISTEMA DE LOGS & TERMINAL
   ============================================================================ */
function clearTerminal() {
  dom.terminalOutput.innerHTML = "";
  updateStatusDot("idle");
}

function updateStatusDot(status) {
  dom.terminalStatusDot.className = "terminal-indicator";
  if (status === "success") dom.terminalStatusDot.classList.add("success");
  if (status === "failed") dom.terminalStatusDot.classList.add("failed");
}

function appendTerminalLine(className, htmlContent) {
  const line = document.createElement("div");
  line.className = `terminal-line ${className}`;
  line.innerHTML = htmlContent;
  dom.terminalOutput.appendChild(line);
  dom.terminalOutput.scrollTop = dom.terminalOutput.scrollHeight;
}

function formatValue(val) {
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "number") return val;
  if (typeof val === "boolean") return val ? "true" : "false";
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  return JSON.stringify(val);
}

function isValueEqual(actual, expected) {
  if (typeof actual === "number" && typeof expected === "number") {
    // Epsilon seguro para floats (ex: 50.50 * 0.8 = 40.400000000000006)
    return Math.abs(actual - expected) < 0.0001;
  }
  return actual === expected;
}

function escapeHtml(string) {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ============================================================================
   9. EXECUÇÃO DOS TESTES & DESBLOQUEIO SEQUENCIAL
   ============================================================================ */
function executeTestSuite() {
  if (!monacoEditorInstance) {
    alert("O editor ainda está inicializando. Aguarde um instante.");
    return;
  }

  clearTerminal();

  const challenge = getCurrentChallenge();
  const code = monacoEditorInstance.getValue();
  const timestamp = new Date().toLocaleTimeString();

  appendTerminalLine(
    "log-info",
    `[${timestamp}] 🚀 Executando testes para "${challenge.title}"...\n`
  );

  let compiledFn;

  // 1. Compilação e Extração Dinâmica com new Function()
  try {
    const wrappedCode = `
      "use strict";
      ${code};
      if (typeof ${challenge.functionName} !== 'function') {
        throw new ReferenceError("A função '${challenge.functionName}' não foi encontrada ou não é uma função válida.");
      }
      return ${challenge.functionName};
    `;

    const factory = new Function(wrappedCode);
    compiledFn = factory();
  } catch (compileError) {
    updateStatusDot("failed");
    appendTerminalLine(
      "log-error",
      `<span class="badge-tag badge-err">ERRO DE SINTAXE / COMPILAÇÃO</span>\n${escapeHtml(compileError.name)}: ${escapeHtml(compileError.message)}`
    );
    return;
  }

  // 2. Execução dos Casos de Teste Unitários
  let passedCount = 0;
  const totalCount = challenge.testCases.length;

  challenge.testCases.forEach((tc) => {
    try {
      const result = compiledFn(...tc.args);
      const argsFormatted = tc.args.map(formatValue).join(", ");
      const isPassed = isValueEqual(result, tc.expected);

      if (isPassed) {
        passedCount++;
        appendTerminalLine(
          "log-success",
          `<span class="badge-tag badge-pass">PASSOU</span> Teste ${tc.id}: ${challenge.functionName}(${argsFormatted}) ➔ Retornou: <strong>${formatValue(result)}</strong>`
        );
      } else {
        appendTerminalLine(
          "log-failure",
          `<span class="badge-tag badge-fail">FALHOU</span> Teste ${tc.id}: ${challenge.functionName}(${argsFormatted})\n` +
          `       ➔ Esperado: <strong>${formatValue(tc.expected)}</strong>\n` +
          `       ➔ Recebido: <strong>${formatValue(result)}</strong>`
        );
      }
    } catch (runtimeError) {
      const argsFormatted = tc.args.map(formatValue).join(", ");
      appendTerminalLine(
        "log-error",
        `<span class="badge-tag badge-err">ERRO EM EXECUÇÃO</span> Teste ${tc.id} (${argsFormatted}):\n` +
        `       ${escapeHtml(runtimeError.name)}: ${escapeHtml(runtimeError.message)}`
      );
    }
  });

  appendTerminalLine("terminal-line", "");

  // 3. Validação do Resultado & Desbloqueio
  if (passedCount === totalCount) {
    updateStatusDot("success");
    const wasAlreadyCompleted = State.isCompleted(challenge.id);

    // Marca como concluído e desbloqueia o próximo
    State.markCompleted(challenge.id);
    updateUiState();

    appendTerminalLine(
      "log-success log-summary",
      `🎉 PARABÉNS! Você passou em todos os ${totalCount} testes deste desafio!`
    );

    // Se houver próximo desafio, exibe banner com botão de avanço imediato
    if (challenge.id < CHALLENGES.length) {
      const nextChallenge = CHALLENGES.find(c => c.id === challenge.id + 1);
      
      const bannerHtml = `
        <div class="unlock-card">
          <div class="unlock-card-text">
            <span class="unlock-card-title">🔓 Desafio ${nextChallenge.id} Desbloqueado: ${escapeHtml(nextChallenge.title)}</span>
            <span class="unlock-card-desc">Você completou o desafio anterior com sucesso e pode avançar na trilha!</span>
          </div>
          <button id="btn-advance-now" class="btn-advance">
            Avançar para o Desafio ${nextChallenge.id} ➔
          </button>
        </div>
      `;
      appendTerminalLine("terminal-line", bannerHtml);

      const advanceBtn = document.getElementById("btn-advance-now");
      if (advanceBtn) {
        advanceBtn.addEventListener("click", () => {
          switchToChallenge(nextChallenge.id);
        });
      }
    } else {
      appendTerminalLine(
        "log-success log-summary",
        `🏆 FANTÁSTICO! VOCÊ COMPLETOU TODOS OS 10 DESAFIOS DA TRILHA DE JAVASCRIPT! 🌟`
      );
    }
  } else {
    updateStatusDot("failed");
    appendTerminalLine(
      "log-failure log-summary",
      `❌ ${passedCount} de ${totalCount} testes passaram. Para desbloquear o próximo desafio, corrija os erros e alcance 100% de aprovação.`
    );
  }
}

/* ============================================================================
   10. MODAL ROADMAP & EVENT LISTENERS
   ============================================================================ */
function openRoadmap() {
  renderRoadmapGrid();
  dom.roadmapModal.classList.remove("hidden");
}

function closeRoadmap() {
  dom.roadmapModal.classList.add("hidden");
}

function setupEventListeners() {
  // Executar testes
  dom.runBtn.addEventListener("click", executeTestSuite);

  // Limpar Terminal
  dom.clearConsoleBtn.addEventListener("click", clearTerminal);

  // Resetar Código do desafio atual
  dom.resetCodeBtn.addEventListener("click", () => {
    const current = getCurrentChallenge();
    const confirmed = confirm(`Deseja restaurar o código inicial do Desafio ${current.id}?`);
    if (confirmed) {
      State.clearCode(current.id);
      if (monacoEditorInstance) {
        monacoEditorInstance.setValue(current.initialCode);
      }
      clearTerminal();
      appendTerminalLine("text-muted", "Código restaurado para o template original.");
    }
  });

  // Botões de Navegação Rápida
  dom.prevBtn.addEventListener("click", () => {
    if (State.currentId > 1) {
      switchToChallenge(State.currentId - 1);
    }
  });

  dom.nextBtn.addEventListener("click", () => {
    if (State.currentId < CHALLENGES.length) {
      switchToChallenge(State.currentId + 1);
    }
  });

  // Modal do Roadmap
  dom.openRoadmapBtn.addEventListener("click", openRoadmap);
  dom.closeRoadmapBtn.addEventListener("click", closeRoadmap);
  dom.roadmapModal.addEventListener("click", (e) => {
    if (e.target === dom.roadmapModal) closeRoadmap();
  });

  // Resetar Trilha Toda
  dom.resetAllBtn.addEventListener("click", () => {
    const confirmed = confirm(
      "⚠️ ATENÇÃO: Deseja realmente reiniciar toda a sua trilha?\n\nIsso apagará o progresso de desbloqueio e todos os códigos salvos dos 10 desafios."
    );
    if (confirmed) {
      State.resetAll();
      const firstChallenge = CHALLENGES[0];
      renderChallengeInstructions(firstChallenge);
      if (monacoEditorInstance) {
        monacoEditorInstance.setValue(firstChallenge.initialCode);
      }
      updateUiState();
      clearTerminal();
      appendTerminalLine(
        "text-muted",
        "Trilha reiniciada com sucesso! Comece resolvendo o Desafio 1."
      );
    }
  });

  // Fechar modal com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dom.roadmapModal.classList.contains("hidden")) {
      closeRoadmap();
    }
  });
}

/* ============================================================================
   11. INICIALIZAÇÃO DA APLICAÇÃO
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  State.load();
  setupEventListeners();

  const current = getCurrentChallenge();
  renderChallengeInstructions(current);
  updateUiState();

  initMonaco();
});
