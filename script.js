const perguntas = [
    {
        pergunta: 'Você abre um aplicativo e percebe que algo não está funcionando direito. O que você pensa primeiro?',

        alternativas : [
            {
                texto: 'Será que uma IA poderia ajudar a resolver isso?',
                area: 'ia'
            },
            {
                texto: 'Será que os usuários estão conseguindo entender a tela?',
                area: 'uxui'
            },
            {
                texto: 'Como eu corrigiria esse erro com código?',
                area: 'desenvolvimento'
            },
            {
                texto: 'Quais informações poderiam explicar esse problema?',
                area: 'dados'
            },
            {
                texto: 'Será que o servidor ou a rede estão com problema',
                area: 'redes'
            },
            {
                texto: 'Será que existe alguma falha de segurança aqui?',
                area: 'seguranca'
            },
            {
                texto: 'Será que o processo de atualização foi feito corretamente?',
                area: 'devops'
            }
        ]
    },
    {
        pergunta: 'Qual destas tarefas parece mais divertida?',

        alternativas : [
            {
                texto: 'Fazer um programa aprender com exemplos.',
                area: 'ia'
            },
            {
                texto: 'Criar um aplicativo do zero.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Testar a segurança de um sistema.',
                area: 'seguranca'
            },
            {
                texto: 'Automatizar tarefas para que tudo funcione sozinho.',
                area: 'devops'
            },
            {
                texto: 'Montar computadores, redes e servidores.',
                area: 'redes'
            },
            {
                texto: 'Desenhar telas para um aplicativo.',
                area: 'uxui'
            },
            {
                texto: 'Analisar uma planilha cheia de informações.',
                area: 'dados'
            }
        ]
    },
    {
        pergunta: 'O que costuma chamar mais sua atenção?',

        alternativas : [
            {
                texto: 'Como tudo está conectado.',
                area: 'redes'
            },
            {
                texto: 'Organização e eficiência.',
                area: 'devops'
            },
            {
                texto: 'O comportamento das pessoas.',
                area: 'uxui'
            },
            {
                texto: 'Tecnologias inovadoras.',
                area: 'ia'
            },
            {
                texto: 'Como as coisas são construídas.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Riscos e possíveis problemas.',
                area: 'seguranca'
            },
            {
                texto: 'Números, gráficos e estatísticas.',
                area: 'dados'
            }
        ]
    },
    {
        pergunta: 'Imagine que você tem uma loja online. O que seria mais importante para você?',

        alternativas : [
            {
                texto: 'Automatizar processos da loja.',
                area: 'devops'
            },
            {
                texto: 'Proteger os dados dos clientes.',
                area: 'seguranca'
            },
            {
                texto: 'Tornar a navegação simples e agradável.',
                area: 'uxui'
            },
            {
                texto: 'Recomendar produtos usando IA.',
                area: 'ia'
            },
            {
                texto: 'Garantir que o site nunca saia do ar.',
                area: 'redes'
            },
            {
                texto: 'Criar novas funções para o site.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Entender o que os clientes mais compram.',
                area: 'dados'
            }
        ]
    },
    {
        pergunta: 'Na escola ou em um curso, qual atividade você costuma gostar mais?',

        alternativas : [
            {
                texto: 'Planejar e coordenar tarefas.',
                area: 'devops'
            },
            {
                texto: 'Fazer projetos práticos.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Aprender tecnologias novas.',
                area: 'ia'
            },
            {
                texto: 'Resolver desafios e encontrar erros.',
                area: 'seguranca'
            },
            {
                texto: 'Trabalhar com informações e pesquisas.',
                area: 'dados'
            },
            {
                texto: 'Organizar equipamentos e recursos.',
                area: 'redes'
            },
            {
                texto: 'Pensar em apresentações e visual.',
                area: 'uxui'
            }
        ]
    },
    {
        pergunta: 'Qual destas conquistas parece mais interessante?',

        alternativas : [
            {
                texto: 'Criar um sistema automatizado que economiza tempo.',
                area: 'devops'
            },
            {
                texto: 'Fazer uma empresa inteira ficar conectada sem falhas.',
                area: 'redes'
            },
            {
                texto: 'Desenvolver uma IA inteligente.',
                area: 'ia'
            },
            {
                texto: 'Descobrir uma informação importante escondida nos dados.',
                area: 'dados'
            },
            {
                texto: 'Melhorar a experiência de milhares de usuários.',
                area: 'uxui'
            },
            {
                texto: 'Criar um programa útil para muitas pessoas.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Impedir que um sistema seja invadido.',
                area: 'seguranca'
            }
        ]
    },
    {
        pergunta: 'Se você pudesse assistir uma palestra agora, qual escolheria?',

        alternativas : [
            {
                texto: 'Como são criados aplicativos famosos.',
                area: 'desenvolvimento'
            },
            {
                texto: 'O futuro da inteligência artificial.',
                area: 'ia'
            },
            {
                texto: 'Como hackers atacam empresas.',
                area: 'seguranca'
            },
            {
                texto: 'Como grandes empresas usam dados para tomar decisões.',
                area: 'dados'
            },
            {
                texto: 'Como criar interfaces bonitas e fáceis de usar.',
                area: 'uxui'
            },
            {
                texto: 'Como grandes empresas gerenciam seus sistemas.',
                area: 'devops'
            },
            {
                texto: 'Como funciona a internet por trás dos sites.',
                area: 'redes'
            }
        ]
    },
    {
        pergunta: 'Qual dessas situações parece mais satisfatória?',

        alternativas : [
            {
                texto: 'Ver tudo funcionando de forma organizada e automática.',
                area: 'devops'
            },
            {
                texto: 'Resolver uma falha técnica complexa.',
                area: 'redes'
            },
            {
                texto: 'Encontrar um problema que ninguém tinha percebido.',
                area: 'seguranca'
            },
            {
                texto: 'Ver uma IA acertando tarefas difíceis.',
                area: 'ia'
            },
            {
                texto: 'Descobrir uma tendência analisando informações.',
                area: 'dados'
            },
            {
                texto: 'Receber elogios pela facilidade de uso de um produto.',
                area: 'uxui'
            },
            {
                texto: 'Ver algo funcionando depois de muito desenvolvimento.',
                area: 'desenvolvimento'
            }
        ]
    },
    {
        pergunta: 'Você entra em uma sala misteriosa com um computador, só pode apertar um botão. Qual escolhe?',

        alternativas : [
            {
                texto: 'O botão que transforma a interface para ficar mais bonita e fácil de usar.',
                area: 'uxui'
            },
            {
                texto: 'O botão que revela informações escondidas e padrões nos dados.',
                area: 'dados'
            },
            {
                texto: 'O botão que ativa uma inteligência artificial super avançada.',
                area: 'ia'
            },
            {
                texto: 'O botão que mostra como toda a tecnologia da sala está conectada.',
                area: 'redes'
            },
            {
                texto: 'O botão que permite criar qualquer aplicativo que você imaginar.',
                area: 'desenvolvimento'
            },
            {
                texto: 'O botão que faz todos os sistemas trabalharem juntos automaticamente.',
                area: 'devops'
            },
            {
                texto: 'O botão que mostra todas as tentativas de invasão que aconteceram no sistema.',
                area: 'seguranca'
            }
        ]
    },
    {
        pergunta: 'Em um jogo, qual missão você escolheria primeiro?',

        alternativas : [
            {
                texto: 'Melhorar a experiência dos jogadores.',
                area: 'uxui'
            },
            {
                texto: 'Restaurar a comunicação entre diferentes regiões.',
                area: 'redes'
            },
            {
                texto: 'Treinar um robô para cumprir tarefas.',
                area: 'ia'
            },
            {
                texto: 'Defender a base contra invasores.',
                area: 'seguranca'
            },
            {
                texto: 'Automatizar recursos para a equipe evoluir mais rápido.',
                area: 'devops'
            },
            {
                texto: 'Construir ferramentas para ajudar a equipe.',
                area: 'desenvolvimento'
            },
            {
                texto: 'Analisar pistas para descobrir um segredo.',
                area: 'dados'
            }
        ]
    },
]

const pontuacao = {
    desenvolvimento: 0,
    dados: 0,
    ia: 0,
    redes: 0,
    seguranca: 0,
    uxui: 0,
    devops: 0
}

const resultados = {
    desenvolvimento: {
        titulo: 'Desenvolvimento de Software',
        descricao: 'Você gosta de criar soluções para problemas, construir aplicações e entender a lógica que faz programas e sistemas funcionarem. Pessoas com esse perfil costumam se interessar por desenvolvimento, criatividade aplicada à tecnologia e aprendizado constante.',
        habilidades: [
            'Lógica de programação',
            'Algoritmos',
            'JavaScript',
            'Java ou Python',
            'Git e GitHub',
            'Resolução de problemas'
        ]
    },
    dados: {
        titulo: 'Dados',
        descricao: 'Você gosta de analisar informações, encontrar padrões e transformar grandes quantidades de dados em respostas que ajudam pessoas e empresas a tomar decisões melhores. Seu perfil combina com atividades que exigem investigação, raciocínio analítico e atenção aos detalhes.',
        habilidades: [
            'Estatística básica',
            'SQL',
            'Excel',
            'Visualização de dados',
            'Python',
            'Pensamento analítico'
        ]
    },
    ia: {
        titulo: 'Inteligência Artificial (IA)',
        descricao: 'Você gosta de explorar tecnologias inovadoras, resolver problemas complexos e descobrir como as máquinas podem aprender, reconhecer padrões e tomar decisões. Pessoas com esse perfil geralmente são curiosas e gostam de desafios intelectuais.',
        habilidades: [
            'Python',
            'Matemática básica para IA',
            'Machine Learning',
            'Análise de dados',
            'Pensamento lógico',
            'Redes neurais'
        ]
    },
    redes: {
        titulo: 'Redes',
        descricao: 'Você gosta de entender como diferentes dispositivos e sistemas se conectam e trabalham juntos. Seu perfil combina com quem se interessa pelos bastidores da tecnologia e gosta de garantir que tudo funcione de forma estável, rápida e segura.',
        habilidades: [
            'Redes TCP/IP',
            'Linux',
            'Infraestrutura de TI',
            'Diagnóstico de problemas',
            'Segurança de redes',
            'Cloud Computing'
        ]
    },
    seguranca: {
        titulo: 'Segurança da Informação',
        descricao: 'Você gosta de investigar problemas, identificar riscos e encontrar maneiras de proteger sistemas e informações contra ameaças digitais. Pessoas com esse perfil costumam ser curiosas, observadoras e gostam de descobrir falhas antes que elas se tornem problemas maiores.',
        habilidades: [
            'Lógica de programação',
            'Redes de computadores',
            'Linux',
            'Análise de vulnerabilidades',
            'Segurança ofensiva e defensiva',
            'Python'
        ]
    },
    uxui: {
        titulo: 'UX/UI',
        descricao: 'Você gosta de pensar na experiência das pessoas, entender suas necessidades e criar produtos digitais que sejam intuitivos, agradáveis e fáceis de usar. Seu perfil une criatividade, empatia e interesse por comportamento humano.',
        habilidades: [
            'Figma',
            'Design de interfaces',
            'Pesquisa com usuários',
            'Prototipação',
            'Experiência do usuário',
            'Comunicação visual'
        ]
    },
    devops: {
        titulo: 'DevOps',
        descricao: 'Você gosta de organização, automação e eficiência. Seu perfil combina com quem busca melhorar processos, integrar diferentes tecnologias e garantir que sistemas e aplicações funcionem de forma confiável e contínua.',
        habilidades: [
            'Linux',
            'Automação',
            'Git e GitHub',
            'Docker',
            'Cloud Computing',
            'Integração e entrega contínua (CI/CD)'
        ]
    }
}

let perguntaAtual = 0;
const botao_comecar = document.querySelector('.comecar');
const tela_inicio = document.querySelector('#inicio');
const tela_quiz = document.querySelector('#quiz');
let pergunta = document.querySelector('.pergunta');
let textoAlternativas = document.querySelectorAll('.texto-alternativa');
const botao_prox = document.querySelector('.botao_prox');
const tela_resultado = document.querySelector('#resultado');
const radios = document.querySelectorAll('input[type="radio"]');
let areaResultado = document.querySelector('.area-resultado');
let descricaoResultado = document.querySelector('.descricao-resultado');
let textoHabilidades = document.querySelectorAll('.texto-habilidade');
let outraArea = document.querySelector('.outra-area');
const contadorPergunta = document.querySelector('.contador');
const barraProgresso = document.querySelector('.progresso');
const botao_refazer = document.querySelector('.botao_refazer');



const mostrarPergunta = () => {

    contadorPergunta.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    
    let porcentagem = (perguntaAtual + 1) / perguntas.length * 100;
    barraProgresso.style.width = `${porcentagem}%`;

    pergunta.textContent = perguntas[perguntaAtual].pergunta;

    for (let i = 0; i < textoAlternativas.length; i++) {
        textoAlternativas[i].textContent = perguntas[perguntaAtual].alternativas[i].texto;
        radios[i].checked = false;
    }
}

const mostrarResultado = () => {

    const ranking = Object.entries(pontuacao);
    let maior = ranking[0];

    for (let i = 0; i < ranking.length; i++) {
        if (ranking[i][1] > maior[1]) {
            maior = ranking[i];
        }
    }

    let segunda_maior;

    for (let i = 0; i < ranking.length; i++) {
        if (ranking[i][0] != maior[0]) {
            if (segunda_maior == undefined || ranking[i][1] > segunda_maior[1]) {
                segunda_maior = ranking[i];
            }
        }
    }

    tela_quiz.style.display = 'none';
    tela_resultado.style.display = 'block';

    areaResultado.textContent = resultados[maior[0]].titulo;
    descricaoResultado.textContent = resultados[maior[0]].descricao;

    for (let i = 0; i < textoHabilidades.length; i++) {
        textoHabilidades[i].textContent = resultados[maior[0]].habilidades[i];
    }
    
    outraArea.textContent = resultados[segunda_maior[0]].titulo;
}



botao_comecar.addEventListener('click', () => {

    tela_inicio.style.display = 'none';
    tela_quiz.style.display = 'block';

    mostrarPergunta ();
});

botao_prox.addEventListener('click', () => {

    let alternativaEscolhida;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alternativaEscolhida = i ;
        }
    }

    if (alternativaEscolhida == undefined) {
        alert('Selecione uma alternativa.');
        return;
    }

    const areaEscolhida =
    perguntas[perguntaAtual].alternativas[alternativaEscolhida].area;
    pontuacao[areaEscolhida]++;

    if (perguntaAtual < 9) {
        perguntaAtual++;
        mostrarPergunta ();
    } else {
        mostrarResultado();
    }
    
});

botao_refazer.addEventListener('click', () => {
    tela_resultado.style.display = 'none';
    tela_inicio.style.display = 'block';

    perguntaAtual = 0;

    for (let area in pontuacao) {
        pontuacao[area] = 0;
    }

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});
