const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const gameContentElement = document.getElementById('game-content');
const languageSelectionElement = document.getElementById('language-selection');
const gameTitleElement = document.getElementById('game-title');

let currentScene = 0;
let language = 'en';

const scenes = {
    en: [
        {
            text: "You wake up in an empty and abandoned apartment. The floor is covered with yellow caterpillars with black spots. What do you do?",
            choices: [
                { text: "Explore the apartment", nextScene: 1 },
                { text: "Try to leave through the front door", nextScene: 2 }
            ]
        },
        {
            text: "You start exploring the apartment and find a rusty knife. What do you do?",
            choices: [
                { text: "Take the knife", nextScene: 3 },
                { text: "Ignore the knife and continue exploring", nextScene: 4 }
            ]
        },
        {
            text: "The door is locked and you can't open it. You hear a noise coming from one of the rooms. What do you do?",
            choices: [
                { text: "Investigate the noise", nextScene: 5 },
                { text: "Try to break the door open", nextScene: 6 }
            ]
        },
        {
            text: "You take the knife and continue exploring. Suddenly, you are attacked by an unknown person. What do you do?",
            choices: [
                { text: "Fight with the knife", nextScene: 7 },
                { text: "Run", nextScene: 8 }
            ]
        },
        {
            text: "You ignore the knife and continue exploring. You find a broken window. What do you do?",
            choices: [
                { text: "Try to escape through the window", nextScene: 9 },
                { text: "Continue exploring", nextScene: 10 }
            ]
        },
        {
            text: "You enter the room and see a man tied up. He asks for your help. What do you do?",
            choices: [
                { text: "Help the man", nextScene: 11 },
                { text: "Ignore the man and leave the room", nextScene: 12 }
            ]
        },
        {
            text: "You try to break the door open, but without success. The caterpillars start to climb up your legs. What do you do?",
            choices: [
                { text: "Try to shoo the caterpillars away", nextScene: 13 },
                { text: "Scream for help", nextScene: 14 }
            ]
        },
        {
            text: "You fight with the knife and manage to defend yourself, but you get injured in the process. What do you do?",
            choices: [
                { text: "Look for first aid", nextScene: 15 },
                { text: "Keep fighting", nextScene: 16 }
            ]
        },
        {
            text: "You run, but the person catches you and you are captured again. You pass out and never wake up again.",
            choices: []
        },
        {
            text: "You try to escape through the window, but it's too high and you fall, getting seriously injured. What do you do?",
            choices: [
                { text: "Scream for help", nextScene: 14 },
                { text: "Try to crawl away", nextScene: 17 }
            ]
        },
        {
            text: "You keep exploring and find a secret exit. What do you do?",
            choices: [
                { text: "Use the secret exit", nextScene: 18 },
                { text: "Explore more", nextScene: 19 }
            ]
        },
        {
            text: "You help the man and he shows you a secret passage. You both escape together and survive.",
            choices: []
        },
        {
            text: "You ignore the man and leave the room. The caterpillars start to cover your body. What do you do?",
            choices: [
                { text: "Scream for help", nextScene: 14 },
                { text: "Try to shoo the caterpillars away", nextScene: 13 }
            ]
        },
        {
            text: "You shoo the caterpillars away, but they quickly come back. What do you do?",
            choices: [
                { text: "Keep shooing", nextScene: 14 },
                { text: "Ignore the caterpillars", nextScene: 20 }
            ]
        },
        {
            text: "You scream for help, but no one comes. The caterpillars completely cover you. What do you do?",
            choices: [
                { text: "Try to stand up", nextScene: 21 },
                { text: "Give up", nextScene: 22 }
            ]
        },
        {
            text: "You find a first aid kit and treat your injuries. What do you do?",
            choices: [
                { text: "Look for an exit", nextScene: 18 },
                { text: "Rest", nextScene: 23 }
            ]
        },
        {
            text: "You keep fighting, but your injuries are too severe. You pass out and never wake up again.",
            choices: []
        },
        {
            text: "You try to crawl away, but you're too weak. You pass out and never wake up again.",
            choices: []
        },
        {
            text: "You use the secret exit and escape the apartment. You survive.",
            choices: []
        },
        {
            text: "You decide to explore more and find a room full of documents about experiments with caterpillars. What do you do?",
            choices: [
                { text: "Read the documents", nextScene: 24 },
                { text: "Ignore the documents", nextScene: 25 }
            ]
        },
        {
            text: "You try to shoo the caterpillars away again, but without success. They cover you and you pass out. You never wake up again.",
            choices: []
        },
        {
            text: "You stand up and try to escape, but the caterpillars cover you again. You pass out. You never wake up again.",
            choices: []
        },
        {
            text: "You decide to rest, but fall into a deep sleep. You pass out and never wake up again.",
            choices: []
        },
        {
            text: "You read the documents and discover that the apartment was a secret laboratory for experiments with caterpillars. What do you do?",
            choices: [
                { text: "Try to escape immediately", nextScene: 18 },
                { text: "Keep reading", nextScene: 26 }
            ]
        },
        {
            text: "You ignore the documents and continue exploring. What do you do?",
            choices: [
                { text: "Look for another exit", nextScene: 18 },
                { text: "Investigate the room again", nextScene: 5 }
            ]
        },
        {
            text: "You keep reading and discover a possible cure for the caterpillar bites. What do you do?",
            choices: [
                { text: "Look for the cure", nextScene: 27 },
                { text: "Ignore the cure", nextScene: 18 }
            ]
        },
        {
            text: "You find the ingredients for the cure and prepare it. What do you do?",
            choices: [
                { text: "Use the cure", nextScene: 28 },
                { text: "Keep the cure and escape", nextScene: 18 }
            ]
        },
        {
            text: "You use the cure and feel better. What do you do?",
            choices: [
                { text: "Look for an exit", nextScene: 18 },
                { text: "Explore more", nextScene: 19 }
            ]
        }
    ],
    pt: [
        {
            text: "Você acorda em um apartamento vazio e abandonado. O chão está coberto de lagartas amarelas com pintas pretas. O que você faz?",
            choices: [
                { text: "Explorar o apartamento", nextScene: 1 },
                { text: "Tentar sair pela porta da frente", nextScene: 2 }
            ]
        },
        {
            text: "Você começa a explorar o apartamento e encontra uma faca enferrujada. O que você faz?",
            choices: [
                { text: "Pegar a faca", nextScene: 3 },
                { text: "Ignorar a faca e continuar explorando", nextScene: 4 }
            ]
        },
        {
            text: "A porta está trancada e você não consegue abri-la. Você ouve um barulho vindo de um dos quartos. O que você faz?",
            choices: [
                { text: "Investigar o barulho", nextScene: 5 },
                { text: "Tentar arrombar a porta", nextScene: 6 }
            ]
        },
        {
            text: "Você pega a faca e continua explorando. De repente, você é atacado por uma pessoa desconhecida. O que você faz?",
            choices: [
                { text: "Lutar com a faca", nextScene: 7 },
                { text: "Correr", nextScene: 8 }
            ]
        },
        {
            text: "Você ignora a faca e continua explorando. Você encontra uma janela quebrada. O que você faz?",
            choices: [
                { text: "Tentar escapar pela janela", nextScene: 9 },
                { text: "Continuar explorando", nextScene: 10 }
            ]
        },
        {
            text: "Você entra no quarto e vê um homem amarrado. Ele pede sua ajuda. O que você faz?",
            choices: [
                { text: "Ajudar o homem", nextScene: 11 },
                { text: "Ignorar o homem e sair do quarto", nextScene: 12 }
            ]
        },
        {
            text: "Você tenta arrombar a porta, mas sem sucesso. As lagartas começam a subir pelas suas pernas. O que você faz?",
            choices: [
                { text: "Tentar espantar as lagartas", nextScene: 13 },
                { text: "Gritar por ajuda", nextScene: 14 }
            ]
        },
        {
            text: "Você luta com a faca e consegue se defender, mas se machuca no processo. O que você faz?",
            choices: [
                { text: "Procurar primeiros socorros", nextScene: 15 },
                { text: "Continuar lutando", nextScene: 16 }
            ]
        },
        {
            text: "Você corre, mas a pessoa te pega e você é capturado novamente. Você desmaia e nunca mais acorda.",
            choices: []
        },
        {
            text: "Você tenta escapar pela janela, mas é muito alto e você cai, se machucando gravemente. O que você faz?",
            choices: [
                { text: "Gritar por ajuda", nextScene: 14 },
                { text: "Tentar rastejar para longe", nextScene: 17 }
            ]
        },
        {
            text: "Você continua explorando e encontra uma saída secreta. O que você faz?",
            choices: [
                { text: "Usar a saída secreta", nextScene: 18 },
                { text: "Explorar mais", nextScene: 19 }
            ]
        },
        {
            text: "Você ajuda o homem e ele mostra uma passagem secreta. Vocês dois escapam juntos e sobrevivem.",
            choices: []
        },
        {
            text: "Você ignora o homem e sai do quarto. As lagartas começam a cobrir seu corpo. O que você faz?",
            choices: [
                { text: "Gritar por ajuda", nextScene: 14 },
                { text: "Tentar espantar as lagartas", nextScene: 13 }
            ]
        },
        {
            text: "Você espanta as lagartas, mas elas rapidamente voltam. O que você faz?",
            choices: [
                { text: "Continuar espantando", nextScene: 14 },
                { text: "Ignorar as lagartas", nextScene: 20 }
            ]
        },
        {
            text: "Você grita por ajuda, mas ninguém vem. As lagartas cobrem completamente você. O que você faz?",
            choices: [
                { text: "Tentar se levantar", nextScene: 21 },
                { text: "Desistir", nextScene: 22 }
            ]
        },
        {
            text: "Você encontra um kit de primeiros socorros e trata seus ferimentos. O que você faz?",
            choices: [
                { text: "Procurar uma saída", nextScene: 18 },
                { text: "Descansar", nextScene: 23 }
            ]
        },
        {
            text: "Você continua lutando, mas seus ferimentos são graves demais. Você desmaia e nunca mais acorda.",
            choices: []
        },
        {
            text: "Você tenta rastejar para longe, mas está muito fraco. Você desmaia e nunca mais acorda.",
            choices: []
        },
        {
            text: "Você usa a saída secreta e escapa do apartamento. Você sobrevive.",
            choices: []
        },
        {
            text: "Você decide explorar mais e encontra uma sala cheia de documentos sobre experimentos com lagartas. O que você faz?",
            choices: [
                { text: "Ler os documentos", nextScene: 24 },
                { text: "Ignorar os documentos", nextScene: 25 }
            ]
        },
        {
            text: "Você tenta espantar as lagartas novamente, mas sem sucesso. Elas cobrem você e você desmaia. Você nunca mais acorda.",
            choices: []
        },
        {
            text: "Você se levanta e tenta escapar, mas as lagartas cobrem você novamente. Você desmaia. Você nunca mais acorda.",
            choices: []
        },
        {
            text: "Você decide descansar, mas cai em um sono profundo. Você desmaia e nunca mais acorda.",
            choices: []
        },
        {
            text: "Você lê os documentos e descobre que o apartamento era um laboratório secreto para experimentos com lagartas. O que você faz?",
            choices: [
                { text: "Tentar escapar imediatamente", nextScene: 18 },
                { text: "Continuar lendo", nextScene: 26 }
            ]
        },
        {
            text: "Você ignora os documentos e continua explorando. O que você faz?",
            choices: [
                { text: "Procurar outra saída", nextScene: 18 },
                { text: "Investigar a sala novamente", nextScene: 5 }
            ]
        },
        {
            text: "Você continua lendo e descobre uma possível cura para as mordidas das lagartas. O que você faz?",
            choices: [
                { text: "Procurar a cura", nextScene: 27 },
                { text: "Ignorar a cura", nextScene: 18 }
            ]
        },
        {
            text: "Você encontra os ingredientes para a cura e a prepara. O que você faz?",
            choices: [
                { text: "Usar a cura", nextScene: 28 },
                { text: "Guardar a cura e escapar", nextScene: 18 }
            ]
        },
        {
            text: "Você usa a cura e se sente melhor. O que você faz?",
            choices: [
                { text: "Procurar uma saída", nextScene: 18 },
                { text: "Explorar mais", nextScene: 19 }
            ]
        }
    ]
};

function selectLanguage(selectedLanguage) {
    language = selectedLanguage;
    if (language === 'en') {
        gameTitleElement.textContent = "The Captivity of the Golden Caterpillars";
        document.title = "The Captivity of the Golden Caterpillars";
    } else if (language === 'pt') {
        gameTitleElement.textContent = "O Cativeiro das Lagartas Douradas";
        document.title = "O Cativeiro das Lagartas Douradas";
    }
    languageSelectionElement.style.display = 'none';
    gameContentElement.style.display = 'block';
    startGame();
}

function startGame() {
    currentScene = 0;
    showScene();
}

function showScene() {
    const scene = scenes[language][currentScene];
    storyElement.textContent = scene.text;
    choicesElement.innerHTML = '';

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.nextScene;
            showScene();
        };
        choicesElement.appendChild(button);
    });
}

showScene();
