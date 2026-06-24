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

let perguntaAtual = 0;
const botao_comecar = document.querySelector('.comecar');
const tela_inicio = document.querySelector('#inicio');
const tela_quiz = document.querySelector('#quiz');
let pergunta = document.querySelector('.pergunta');
let textoAlternativas = document.querySelectorAll('.texto-alternativa');
const botao_prox = document.querySelector('.botao_prox');
const tela_resultado = document.querySelector('#resultado');
const radios = document.querySelectorAll('input[type="radio"]');







const mostrarPergunta = () => {

    pergunta.textContent = perguntas[perguntaAtual].pergunta;

    for (let i = 0; i < textoAlternativas.length; i++) {
        textoAlternativas[i].textContent = perguntas[perguntaAtual].alternativas[i].texto;
        radios[i].checked = false;
    }
}

const ranking = Object.entries(pontuacao);

let maior = ranking[0];
for (let i = 0; i < ranking.length; i++) {
    if (ranking[i][1] >= maior[i]) {
        maior = ranking[i];
    }
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
    console.log(pontuacao);

    if (perguntaAtual < 9) {
        perguntaAtual++;
        mostrarPergunta ();
    } else {
        tela_quiz.style.display = 'none';
        tela_resultado.style.display = 'block';
    }
    
});



