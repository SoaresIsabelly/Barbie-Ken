function mudarTema(classeTema) {
    document.body.className = classeTema;
}


function mensagemMagica() {
    const titulos = [
        "O limite é a sua imaginação!",
        "Brilhe onde quer que você vá ✨",
        "Você já é uma estrela no Barbie World!"
    ];
    document.getElementById("hero-title").innerText = titulos[Math.floor(Math.random() * titulos.length)];

    const botao = document.querySelector(".btn");
    const areaDoBotao = botao.getBoundingClientRect();
    const centroX = areaDoBotao.left + areaDoBotao.width / 2;
    const centroY = areaDoBotao.top + areaDoBotao.height / 2;

    for (let indice = 0; indice < 30; indice += 1) {
        const brilho = document.createElement("span");
        const angulo = Math.random() * Math.PI * 2;
        const distancia = 45 + Math.random() * 90;

        brilho.className = "glitter-particle";
        brilho.innerText = Math.random() > 0.5 ? "✦" : "✧";
        brilho.style.left = `${centroX}px`;
        brilho.style.top = `${centroY}px`;
        brilho.style.setProperty("--x", `${Math.cos(angulo) * distancia}px`);
        brilho.style.setProperty("--y", `${Math.sin(angulo) * distancia}px`);
        brilho.style.setProperty("--delay", `${Math.random() * 0.15}s`);
        document.body.appendChild(brilho);

        brilho.addEventListener("animationend", () => brilho.remove());
    }
}


function avaliarModa() {
    const barbieVestido = document.getElementById("barbie-vestido").value;
    const barbieAcessorio = document.getElementById("barbie-acessorio").value;
    const kenRoupa = document.getElementById("ken-roupa").value;
    const kenAcessorio = document.getElementById("ken-acessorio").value;
    const feedbackBox = document.getElementById("fashion-feedback");
    const nomeVestido = document.getElementById("barbie-vestido").selectedOptions[0].text;
    const nomeAcessorioBarbie = document.getElementById("barbie-acessorio").selectedOptions[0].text;
    const nomeRoupa = document.getElementById("ken-roupa").selectedOptions[0].text;
    const nomeAcessorioKen = document.getElementById("ken-acessorio").selectedOptions[0].text;

    let mensagem = "";

    if (barbieVestido === "gala" && kenRoupa === "gala" && barbieAcessorio === "tiara" && kenAcessorio === "pasta") {
        mensagem = "🌟 Look Red Carpet Perfeito! Com o vestido de gala, a tiara, o smoking e a pasta executiva, o casal está pronto para brilhar em Hollywood.";
    } else if (barbieVestido === "praia" && kenRoupa === "praia" && barbieAcessorio === "oculos" && kenAcessorio === "prancha") {
        mensagem = "🏄‍♀️ Clima de Verão em Malibu! Os óculos retrô e a prancha completam o visual perfeito para um dia de praia.";
    } else if (barbieVestido === "profissional" && kenRoupa === "casual" && barbieAcessorio === "laptop") {
        mensagem = "💼 Reunião de Negócios! A Barbie chegou com seu laptop e seu terno poderoso, enquanto o Ken trouxe elegância casual.";
    } else if (barbieVestido === "casual" && kenRoupa === "skate" && barbieAcessorio === "bolsa" && kenAcessorio === "skate") {
        mensagem = "🛹 Passeio Fashion pela Dreamhouse! A bolsa com glitter e o skate deixaram esse look casual cheio de personalidade.";
    } else {
        mensagem = `💖 Mix Criativo Exclusivo! Barbie: ${nomeVestido} com ${nomeAcessorioBarbie}. Ken: ${nomeRoupa} com ${nomeAcessorioKen}. Um casal pronto para arrasar pela Dreamhouse!`;
    }

    feedbackBox.textContent = mensagem;
}


window.onload = avaliarModa;


function responderQuiz(escolha) {
    const resultadoDiv = document.getElementById("quiz-result");
    let textoResultado = "";

    if (escolha === 'tecnologia') {
        textoResultado = "🚀 Você seria a **Barbie Desenvolvedora de Software**! Criando aplicativos incríveis e mudando o mundo.";
    } else if (escolha === 'arte') {
        textoResultado = "💖 Você seria a **Barbie Designer & Diretora Criativa**! Dando vida a projetos visuais estonteantes.";
    } else if (escolha === 'ciencia') {
        textoResultado = "🌌 Você seria a **Barbie Astronauta & Cientista**! Explorando os confins do universo.";
    }

    resultadoDiv.innerHTML = textoResultado;
    resultadoDiv.style.opacity = 0;
    
    let opacidade = 0;
    let animar = setInterval(() => {
        if (opacidade >= 1) {
            clearInterval(animar);
        } else {
            opacidade += 0.1;
            resultadoDiv.style.opacity = opacidade;
        }
    }, 50);
}
