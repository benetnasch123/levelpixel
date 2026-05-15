document.addEventListener("DOMContentLoaded", () => {

  // ELEMENTOS

  const messages = document.getElementById("messages");
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  const chatbox = document.getElementById("chatbox");
  const chatToggle = document.getElementById("chat-toggle");
  const chatHeader = document.getElementById("chat-header");

  // =========================
  // ABRIR CHAT
  // =========================

  chatToggle.addEventListener("click", () => {

    chatbox.classList.toggle("hidden");

  });

  // =========================
  // MINIMIZAR CHAT
  // =========================

  chatHeader.addEventListener("click", () => {

    chatbox.classList.add("hidden");

  });

  // =========================
  // ADICIONAR MENSAGEM
  // =========================

  function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add(
      type === "user" ? "message-user" : "message-bot"
    );

    message.innerHTML = text;

    messages.appendChild(message);

    // scroll automático
    messages.scrollTop = messages.scrollHeight;

  }

  // =========================
  // RESPOSTAS DO BOT
  // =========================

  function getBotResponse(text) {

    text = text.toLowerCase();

    const respostas = {

      "oi": "Olá 👋 Como posso ajudar?",

      "olá": "Olá 😄 Tudo bem?",

      "bom dia": "Bom dia ☀️ Como posso ajudar?",

      "boa tarde": "Boa tarde 😄",

      "boa noite": "Boa noite 🌙",

      "horário": "Nosso horário é das 9h às 18h.",

      "endereço": "Estamos em Taubaté/SP.",

      "pagamento": "Aceitamos Pix e cartão.",

      "site": "Criamos landing pages modernas 🚀",

      "preço": "Nossos projetos começam em R$499."

    };

    for (let palavra in respostas) {

      if (text.includes(palavra)) {

        return respostas[palavra];

      }

    }

    return "Não entendi 😅";

  }

  // =========================
  // ENVIAR MENSAGEM
  // =========================

  function sendMessage() {

    const text = input.value.trim();

    if (text === "") return;

    // mensagem usuário
    addMessage(text, "user");

    // limpa input
    input.value = "";

    // resposta bot
    setTimeout(() => {

      const response = getBotResponse(text);

      addMessage(response, "bot");

    }, 600);

  }

  // =========================
  // BOTÃO ENVIAR
  // =========================

  sendBtn.addEventListener("click", sendMessage);

  // =========================
  // ENTER
  // =========================

  input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      sendMessage();

    }

  });

  // =========================
  // BOTÕES RÁPIDOS
  // =========================

  function showWelcomeOptions() {

    const options = document.createElement("div");

    options.classList.add("quick-options");

    options.innerHTML = `

      <button class="quick-btn">Orçamento</button>
      <button class="quick-btn">Preços</button>
      <button class="quick-btn">Sobre Nós</button>
      <button class="quick-btn">Contato</button>
      <button class="quick-btn">Redes Sociais</button>

    `;

    // adiciona no chat
    messages.appendChild(options);

    // pega os botões
    const buttons = options.querySelectorAll(".quick-btn");

    // eventos dos botões
    buttons.forEach(btn => {

      btn.addEventListener("click", () => {

        const text = btn.innerText;

        // mostra mensagem usuário
        addMessage(text, "user");

        let response = "";

        switch(text) {

          case "Orçamento":
            response = "Os orçamentos são feitos pelo WhatsApp 🚀";
          break;

          case "Preços":
            response = "Nossos projetos começam em R$149,90 modelo basico s/chatbot e 199,90 o modelo com chatbot.";
          break;

          case "Sobre Nós":
            response = "Criamos landing pages modernas, profissionais e focadas em conversão para empresas que querem crescer no digital.";
          break;

          case "Contato":
  response = `
    <a 
      href="https://wa.me/5512999999999?text=Olá,%20vim%20pela%20landing%20page" 
      target="_blank"
      class="chat-link-btn"
    >
      WhatsApp 💬
    </a>
  `;
break;

          case "Redes Sociais":
  response = `
    <a href="https://instagram.com/levell_pixel" target="_blank">
      Instagram 📸
    </a>
  `;
break;
        }

        // resposta do bot
        setTimeout(() => {

          addMessage(response, "bot");

        }, 500);

      });

    });

  }

  // inicia os botões
  showWelcomeOptions();

});