const chatbots = [
    {
        nome: "FutebolGenius",
        descricao: "Transforme sua paixão pelo futebol com FutebolGenius, seu assistente inteligente que traz análises, estatísticas e dicas para elevar seu conhecimento sobre Futebol!!!",
        link: "https://google-ia-vagner.vercel.app/" 
    },
    {
        nome: "CODEAI",
        descricao: "É um chatbot especializado em tecnologia com o intuito ajudar em programação, auxiliando desde a criação de sites e aplicativos web até o desenvolvimento de softwares para desktop e mobile.",
        link: "https://google-ai-studio-ten.vercel.app/" 
    },
    {
        nome: "ChocoChat",
        descricao: "Descubra receitas, dicas e truques para criar delícias irresistíveis. Pergunte sobre ingredientes, técnicas ou curiosidades e transforme-se no confeiteiro que sempre sonhou ser!",
        link: "https://aula-nuvens.vercel.app/" 
    },
    {
        nome: "Teenage IA",
        descricao: "A IA atua como um amigo, permitindo que você desabafe, oferecendo orientações para aumentar sua autoconfiança, ajudar a lidar com estresse, superar as inseguranças dos adolescentes e sugerir busca por apoio profissional.",
        link: "https://scintillating-entremet-bf3f05.netlify.app/ia" 
    },
    {
        nome: "ChatCar",
        descricao: "Este é um Chatbot sobre o cenário automotivo atual, basta perguntar que ele o responderá sobre os mais diversos assuntos do automobilismo 🏎️🏎️🏍️🏍️🚀🚀✈️🏁🏁",
        link: "chatgpt4-orcin-nine.vercel.app" 
    },
    {
        nome: "ConectaBot",
        descricao: " O ConectaBot de acordo com a sua pergunta oferece respostas rápidas e personalizadas, o que garante que você encontre exatamente o que precisa. Ele faz a diferença em sua experiência!",
        link: "https://2309mongo.vercel.app/" 
    },
    {
        nome: "NeuroAssist",
        descricao: "Este chatbot é projetado para fornecer informações sobre condições neurológicas, sintomas e tratamentos.",
        link: "https://charming-medovik-c08e3d.netlify.app/" 
    },
    {
        nome: "BotNoGenius",
        descricao: "O chat bot  é um software baseado em uma Inteligência Artificial criado para responder perguntas, fornecer explicação medica e ajudar os usuarios, facilitando a vida atraves de uma conversa por texto em tempo.",
        link: "  https://gemili.vercel.app/" 
    },
    {
        nome: "TaskMaster",
        descricao: "Descubra um assistente inteligente que organiza suas tarefas, otimiza seu tempo e encontra promoções imperdíveis. Transforme sua rotina e alcance seus objetivos de forma rápida e eficiente!",
        link: "https://geminivs.vercel.app" 
    },
    {
        nome: "Tigrão das Invests",
        descricao: "Conheça o Tigrão das Invests, seu especialista em investimentos e apostas! Ele oferece análises, dicas e estratégias personalizadas, ajudando você a maximizar ganhos e a tomar decisões inteligentes no mundo financeiro.",
        link: "https://servicos-nuvem.vercel.app/" 
    },
    {
        nome: "GamerBot",
        descricao: "Para todos os fãs de jogos digitais, ou jogos classicos! Teste o chatbot que te leva para os espaço dos games 🎮 e o mundo dos jogos 🪐",
        link: "https://chatbot-vagner.vercel.app/" 
    },
    {
        nome: "Nome",
        descricao: "Descrição da IA atua como um amigo, permitindo que você desabafe, oferecendo orientações para aumentar sua autoconfiança, ajudar a lidar com estresse, superar as inseguranças dos adolescentes e sugerir busca por apoio profissional.",
        link: "https://scintillating-entremet-bf3f05.netlify.app/" 
    },
    {
        nome: "Nome",
        descricao: "Descrição da IA atua como um amigo, permitindo que você desabafe, oferecendo orientações para aumentar sua autoconfiança, ajudar a lidar com estresse, superar as inseguranças dos adolescentes e sugerir busca por apoio profissional.",
        link: "https://scintillating-entremet-bf3f05.netlify.app/" 
    }
    // Adicione os dados de outros chatbots aqui...
];


const chatbotContainer = document.querySelector(".chatbot-container");

chatbots.forEach(chatbot => {
    const card = document.createElement("div");
    card.classList.add("chatbot-card");
{/* <img src="${chatbot.imagem}" alt="${chatbot.nome}"></img> */}
    card.innerHTML = `
        
        <h2>${chatbot.nome}</h2>
        <p>${chatbot.descricao}</p>
        <a href="${chatbot.link}" target="_blank">Acessar Chatbot</a>
    `;

    chatbotContainer.appendChild(card);
});


