const nameElement = document.querySelector(".char-name") // Chamando do HTML o Nome do Personagem, para fazer a alteração quando clicado na esfera. 
const storyElement = document.querySelector(".story-char") // Chamando do HTML a historia do personagem, para fazer a alteração quando clicado na esfera.
const imgElement = document.querySelector(".dragonball-image") // Chamando do HTML a Imagem do personagem, para fazer a alteração quando clicado na esfera.


// - Banco de Dados: Um objeto contendo as informações de cada guerreiro. As chaves (goku, vegeta...)  é os IDs das esferas no HTML.
const characterData = {
    "goku": {
        name: "Son Goku",
        description: "É o personagem principal da série e o lutador mais forte do universo. Apesar de ingênuo e bondoso, é também um poderoso guerreiro saiyajin que acredita facilmente em tudo o que ouve, quase nunca percebendo a maldade dos outros. Tem uma grande predileção por lutas, como todos os guerreiros de sua raça, especialmente quando seu adversário é mais forte.Casado com Chi- Chi, tem dois filhos: Son Gohan e Son Goten",
        image: "./assets/goku.png"
    },

    "vegeta": {
        name: "Vegeta",
        description: "Vegeta é o filho do Rei Vegeta e Príncipe dos Saiyajins. Seu planeta Natal é o Planeta Vegeta, que foi destruído por Freeza quando Vegeta ainda era uma criança. Desde então passou a trabalhar para Freeza junto com seu tutor Nappa e o saiyajin irmão de Goku, Raditz. Apesar da arrogância, mais tarde, na série, conforma-se em ter o planeta Terra como seu lar, casa-se com Bulma e juntos têm dois filhos: Bra e Trunks.",
        image: "./assets/vegeta.png"
    },

    "piccolo": {
        name: "Piccolo",
        description: "Um Namekuseijin muito poderoso de linhagem guerreira. Inicialmente inimigo de Goku, aos poucos acaba se aliando a ele, passando até a treinar seu filho Gohan, na fase seguinte, por quem começa a ter um grande afeto.",
        image: "./assets/piccolo.png"
    },

    "gohan": {
        name: "Son Gohan",
        description: "É o primeiro filho de Goku e Chi-Chi e recebeu o mesmo nome do avô adotivo de Goku. Foi o primeiro cruzamento de um Saiyajin com um humano, o que resultou em um ser poderosíssimo. Gohan foi o Salvador da Terra na luta contra Cell.",
        image: "./assets/gohan.png"
    },

    "kuririn": {
        name: "Kuririn",
        description: "Kuririn é um humano e também o melhor amigo de Goku. Quandro criança, treinou ao lado de Goku com o Mestre Kame. Em Dragon Ball Z, Kuririn será de grande ajuda, enfrentando os Saiyajins, Freeza e muitos outros. Também criará a técnica Kienzan e irá se casar com a Andróide Nº 18.",
        image: "./assets/kuririn.png"
    },

    "goten": {
        name: "Son Goten",
        description: "Esse personagem deve ser entendido como dois. O Trunks do Futuro vem de um futuro alternativo, para alertar sobre a ameaça dos andróides, que tornaram seu tempo um inferno. Seu mestre de lutas foi Gohan, o único guerreiro vivo na sua linha temporal. O outro, é o Trunks do Presente, uma criança de 8 anos e o melhor amigo de Goten. Diferentemente de sua contra-parte, ele vive uma vida calma e divertida, em virtude de que os outros guerreiros estão vivos na sua linha temporal.",
        image: "./assets/goten.png"
    },

    "trunks": {
        name: "Trunks Briefs",
        description: "É o personagem principal da série e o lutador mais forte do universo. Apesar de ingênuo e bondoso, é também um poderoso guerreiro saiyajin que acredita facilmente em tudo o que ouve, quase nunca percebendo a maldade dos outros. Tem uma grande predileção por lutas, como todos os guerreiros de sua raça, especialmente quando seu adversário é mais forte.Casado com Chi- Chi, tem dois filhos: Son Gohan e Son Goten",
        image: "./assets/trunks.png"
    },

    "historia": {
        name: "historia",
        description: "Dragon Ball Z é conhecido por suas batalhas épicas, transformações lendárias e desenvolvimento de personagens. A série explora temas como superação, sacrifício, legado familiar, rivalidade e redenção, tornando-se um marco cultural e um dos animes mais populares do mundo. Além doanime, a franquia gerou filmes, jogos e adaptações remasterizadas, como Dragon Ball Kai.",
        image: "./assets/historia.png"
}
    

}

const spheres = document.querySelectorAll(".spheres") // Chamando do HTML todas as esferas

    // Clique nas esferas
spheres.forEach(sphere => {
    sphere.addEventListener("click", () => {
        const charId = sphere.id; // Descobre qual foi a esfera clicada pelo ID
        const info = characterData[charId]; // Busca os dodos correspondente do ID

        if (info) {
            nameElement.innerText = info.name; // Ao ser clicado na esfera ele muda o nome do personagme 
            storyElement.innerText = info.description; // Ao ser clicada na esfera ele muda a historia
            imgElement.src = info.image; // Ao ser clicada muda o personagem 
            imgElement.alt = info.name;// Aqui muda o nome da imagem
           
        }
    })
})

    // Aqui é o controle de musica Play/Pause
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');

musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        music.volume = 0.3; // Deixa o volume em 30% para não assustar o usuário
        musicIcon.src = "./assets/botao-som.png"; // Ícone de som ligado
    } else {
        music.pause();
        musicIcon.src = "./assets/som-off.png"; // Ícone de som desligado
    }
});


