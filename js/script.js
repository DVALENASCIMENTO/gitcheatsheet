const sections = [
    {
  "number": 1,
  "emoji": "⚙️",
  "title": "Configuração Inicial",
  "color": "yellow",
  "commands": [
    {
      "cmd": "git config --global user.name \"Seu Nome\"",
      "desc": "Este comando define o nome do usuário que será associado aos commits feitos globalmente no Git. Isso significa que todos os repositórios no seu sistema usarão este nome, a menos que uma configuração local o substitua."
    },
    {
      "cmd": "git config --global user.email \"seu@email.com\"",
      "desc": "Este comando define o e-mail que será vinculado aos seus commits Git globalmente. É importante usar o mesmo e-mail da sua conta no GitHub (ou outro serviço Git), para que os commits fiquem associados corretamente ao seu perfil."
    },
    {
      "cmd": "git config --global core.editor \"code --wait\"",
      "desc": "Este comando define o editor de texto padrão que o Git usará ao precisar de entrada do usuário (como mensagens de commit). O parâmetro `--wait` faz o Git aguardar até que o editor seja fechado. Aqui está sendo usado o Visual Studio Code como exemplo."
    },
    {
      "cmd": "git config --global color.ui auto",
      "desc": "Ativa a exibição de cores nos comandos do Git (como `git status` ou `git diff`), o que facilita a leitura e compreensão das saídas. O modo `auto` faz o Git decidir automaticamente quando usar cores, dependendo do ambiente."
    },
    {
      "cmd": "git config --list",
      "desc": "Exibe todas as configurações atualmente definidas no Git (globais, locais e de sistema). Útil para verificar se as configurações, como nome de usuário e e-mail, foram aplicadas corretamente."
    }
  ]
},
    {
  "number": 2,
  "emoji": "📁",
  "title": "Criar Repositório",
  "color": "violet",
  "commands": [
    {
      "cmd": "git init",
      "desc": "Cria um novo repositório Git vazio na pasta atual. Isso gera um diretório oculto chamado `.git`, onde o Git armazenará todo o histórico de versões e metadados. Use este comando quando quiser começar a versionar um projeto que ainda não está sob controle de versão."
    },
    {
      "cmd": "git clone <url_do_repositorio>",
      "desc": "Copia todo o conteúdo e histórico de um repositório remoto (por exemplo, no GitHub) para sua máquina local. Substitua `<url_do_repositorio>` pela URL HTTPS ou SSH do repositório. Esse comando também configura automaticamente o repositório remoto como 'origin'."
    }
  ]
},
    {
  "number": 3,
  "emoji": "📊",
  "title": "Status e Informações",
  "color": "blue",
  "commands": [
    {
      "cmd": "git status",
      "desc": "Exibe o estado atual do repositório, incluindo arquivos modificados, adicionados, deletados, não rastreados (untracked) e aqueles prontos para o commit (staged). É um comando essencial para acompanhar o que está acontecendo no seu repositório."
    },
    {
      "cmd": "git log",
      "desc": "Mostra o histórico completo de commits no repositório, incluindo autor, data, hash do commit e a mensagem associada. Permite acompanhar toda a evolução do projeto."
    },
    {
      "cmd": "git log --oneline",
      "desc": "Exibe o histórico de commits de maneira compacta, mostrando apenas o hash abreviado e a mensagem do commit em uma única linha. Útil para uma visão rápida e resumida."
    },
    {
      "cmd": "git log --graph --all",
      "desc": "Mostra um gráfico em árvore de todos os commits em todas as branches. Ajuda a visualizar como os ramos se conectam, especialmente em projetos com muitos merges e ramificações."
    },
    {
      "cmd": "git show <commit>",
      "desc": "Exibe os detalhes de um commit específico, incluindo as mudanças realizadas, o autor, a data e a mensagem. Substitua `<commit>` pelo hash do commit que você deseja inspecionar."
    },
    {
      "cmd": "git diff",
      "desc": "Compara as alterações entre o diretório de trabalho atual e a área de stage (índice). Mostra as modificações feitas nos arquivos antes de serem preparados para commit."
    },
    {
      "cmd": "git diff --staged",
      "desc": "Mostra as diferenças entre os arquivos que já foram adicionados à área de stage (staged) e o último commit. Útil para revisar o que exatamente será enviado no próximo commit."
    }
  ]
},
    {
  "number": 4,
  "emoji": "➕",
  "title": "Adicionar e Commitar Arquivos",
  "color": "red",
  "commands": [
    {
      "cmd": "git add <arquivo>",
      "desc": "Adiciona um arquivo específico ao índice (staging area), preparando-o para o próximo commit. Substitua `<arquivo>` pelo nome do arquivo desejado. O Git passará a acompanhar esse arquivo no próximo commit."
    },
    {
      "cmd": "git add .",
      "desc": "Adiciona todas as alterações de arquivos no diretório atual e subdiretórios (exceto os ignorados) ao índice. É um atalho para preparar múltiplas mudanças para o commit de uma vez."
    },
    {
      "cmd": "git commit -m \"mensagem\"",
      "desc": "Cria um novo commit com a mensagem informada, incluindo apenas os arquivos que foram adicionados ao índice com `git add`. Use mensagens claras e descritivas para facilitar o histórico do projeto."
    },
    {
      "cmd": "git commit -am \"mensagem\"",
      "desc": "Adiciona automaticamente todas as alterações em arquivos já rastreados e cria um commit em uma única etapa. **Não adiciona novos arquivos** — apenas os que já estão sendo monitorados pelo Git."
    }
  ]
},
    {
  "number": 5,
  "emoji": "🌿",
  "title": "Trabalhando com Branches",
  "color": "orange",
  "commands": [
    {
      "cmd": "git branch",
      "desc": "Lista todas as branches locais existentes no repositório. A branch atual é marcada com um asterisco (*)."
    },
    {
      "cmd": "git branch <nome-branch>",
      "desc": "Cria uma nova branch com o nome especificado. Essa branch ainda não é ativada automaticamente — você precisará mudar para ela usando `git checkout` ou `git switch`."
    },
    {
      "cmd": "git checkout <nome-branch>",
      "desc": "Muda para a branch indicada. Esse comando também atualiza os arquivos do diretório de trabalho conforme o conteúdo da branch escolhida. Requer Git anterior à versão 2.23 ou por compatibilidade."
    },
    {
      "cmd": "git switch <nome-branch>",
      "desc": "Alternativa moderna ao `git checkout`, usada exclusivamente para mudar de branch. Introduzida no Git 2.23 para tornar os comandos mais intuitivos."
    },
    {
      "cmd": "git checkout -b <nova-branch>",
      "desc": "Cria uma nova branch e já muda para ela em um único comando. Muito útil para começar rapidamente uma nova linha de desenvolvimento."
    },
    {
      "cmd": "git switch -c <nova-branch>",
      "desc": "Equivalente ao `git checkout -b`, mas com a sintaxe moderna. Cria e alterna para a nova branch de forma direta e clara."
    },
    {
      "cmd": "git branch -d <nome-branch>",
      "desc": "Deleta a branch local especificada. Só funciona se a branch já tiver sido mesclada (merged) com outra, evitando perda de trabalho. Para forçar a exclusão, use `-D` (com D maiúsculo)."
    }
  ]
},
    {
  "number": 6,
  "emoji": "🔀",
  "title": "Merge e Rebase",
  "color": "pink",
  "commands": [
    {
      "cmd": "git merge <nome-branch>",
      "desc": "Integra as alterações da branch especificada à branch atual. O Git criará um novo commit de merge se houver divergências. Ideal para preservar o histórico de desenvolvimento paralelo."
    },
    {
      "cmd": "git rebase <nome-branch>",
      "desc": "Reescreve o histórico da branch atual colocando seus commits 'por cima' da branch especificada, como se tivessem sido feitos após ela. Produz um histórico mais linear e limpo."
    },
    {
      "cmd": "git rebase -i HEAD~3",
      "desc": "Inicia um rebase interativo nos últimos 3 commits. Permite combinar (squash), reordenar ou editar mensagens de commits para melhorar a clareza e organização do histórico antes de enviá-lo para um repositório remoto."
    },
    {
      "cmd": "git rebase --abort",
      "desc": "Cancela um rebase em andamento, restaurando o repositório ao estado anterior ao início do rebase. Útil em caso de conflitos ou se você mudar de ideia durante o processo."
    }
  ]
},
    {
  "number": 7,
  "emoji": "🔄",
  "title": "Atualizando o Repositório",
  "color": "teal",
  "commands": [
    {
      "cmd": "git pull",
      "desc": "Combina dois comandos: `git fetch` e `git merge`. Busca atualizações do repositório remoto e aplica automaticamente na branch atual. Útil para manter o repositório local sincronizado."
    },
    {
      "cmd": "git fetch",
      "desc": "Busca atualizações (commits, branches, tags) do repositório remoto, mas **não** altera a branch atual. Permite inspecionar ou integrar as mudanças manualmente depois."
    },
    {
      "cmd": "git merge origin/main",
      "desc": "Faz merge manual da branch `main` do repositório remoto (`origin`) na branch local atual. Útil após `git fetch` para integrar as mudanças."
    },
    {
      "cmd": "git pull origin main",
      "desc": "Busca (`fetch`) e mescla (`merge`) diretamente a branch `main` do remoto `origin` na branch atual. Específico quando você quer controlar de onde vem a atualização."
    },
    {
      "cmd": "git fetch --all",
      "desc": "Busca atualizações de **todos os repositórios remotos** configurados no seu projeto. Não altera nenhuma branch local, apenas atualiza os dados de rastreamento remoto."
    }
  ]
},
    {
  "number": 8,
  "emoji": "☁️",
  "title": "Trabalhando com Remotos",
  "color": "cyan",
  "commands": [
    {
      "cmd": "git remote -v",
      "desc": "Exibe a lista de repositórios remotos configurados no projeto, mostrando seus nomes (ex: origin) e as URLs correspondentes. O `-v` mostra os detalhes de fetch e push."
    },
    {
      "cmd": "git remote add origin <url>",
      "desc": "Adiciona um repositório remoto com o nome `origin` e a URL especificada. Esse nome será usado para facilitar o push/pull do repositório remoto."
    },
    {
      "cmd": "git push -u origin main",
      "desc": "Envia a branch `main` para o repositório remoto `origin` e define um 'upstream'. Isso permite usar `git push` ou `git pull` diretamente nas próximas vezes sem especificar o nome da branch/remoto."
    },
    {
      "cmd": "git push origin <nome-branch>",
      "desc": "Envia a branch local especificada para o repositório remoto `origin`. Útil ao trabalhar com múltiplas branches."
    },
    {
      "cmd": "git pull origin main",
      "desc": "Busca e mescla as mudanças da branch `main` do remoto `origin` na branch atual local. Ideal para manter seu repositório atualizado com a versão remota."
    },
    {
      "cmd": "git remote remove origin",
      "desc": "Remove a referência ao repositório remoto chamado `origin`. Use com cuidado, pois isso desvincula seu repositório local do remoto correspondente."
    }
  ]
},
    {
  "number": 9,
  "emoji": "🗄️",
  "title": "Stash",
  "color": "purple",
  "commands": [
    {
      "cmd": "git stash",
      "desc": "Guarda temporariamente todas as alterações não commitadas (modificações e arquivos novos) em uma área de armazenamento chamada 'stash', limpando sua área de trabalho para que possa mudar de branch ou trabalhar em outra coisa."
    },
    {
      "cmd": "git stash save \"mensagem\"",
      "desc": "Salva as alterações no stash com uma mensagem descritiva, facilitando a identificação posteriormente. Essa forma é útil para organizar vários stashes."
    },
    {
      "cmd": "git stash list",
      "desc": "Exibe a lista de todos os stashes armazenados, mostrando suas mensagens e identificadores para que você possa escolher qual aplicar ou remover."
    },
    {
      "cmd": "git stash apply",
      "desc": "Aplica as alterações do stash mais recente na sua branch atual, mas mantém o stash salvo para reutilização futura, caso necessário."
    },
    {
      "cmd": "git stash pop",
      "desc": "Aplica as alterações do stash mais recente na sua branch atual e, ao mesmo tempo, remove esse stash da lista de armazenamento, liberando espaço."
    },
    {
      "cmd": "git stash drop",
      "desc": "Remove um stash específico da lista (por padrão o mais recente), liberando espaço e evitando confusão com stashes antigos."
    },
    {
      "cmd": "git stash clear",
      "desc": "Remove todos os stashes salvos, limpando completamente essa área de armazenamento temporário."
    }
  ]
},
    {
  "number": 10,
  "emoji": "🏷️",
  "title": "Tags",
  "color": "green",
  "commands": [
    {
      "cmd": "git tag",
      "desc": "Mostra uma lista de todas as tags que você criou localmente no repositório. Tags são marcadores que indicam versões específicas do projeto."
    },
    {
      "cmd": "git tag -a v1.0 -m \"mensagem\"",
      "desc": "Cria uma tag anotada chamada 'v1.0' com uma mensagem explicativa. Tags anotadas armazenam informações extras, como autor, data e descrição."
    },
    {
      "cmd": "git tag -d v1.0",
      "desc": "Remove localmente a tag chamada 'v1.0'. Isso não afeta tags já enviadas para repositórios remotos."
    },
    {
      "cmd": "git push --tags",
      "desc": "Envia todas as tags que existem localmente para o repositório remoto, tornando-as visíveis para todos os colaboradores."
    }
  ]
},
    {
  "number": 11,
  "emoji": "📦",
  "title": "Submódulos",
  "color": "gray",
  "commands": [
    {
      "cmd": "git submodule add <url> <caminho>",
      "desc": "Adiciona um repositório Git externo como um submódulo dentro do seu projeto, colocando-o no caminho especificado. Útil para incluir bibliotecas ou dependências versionadas separadamente."
    },
    {
      "cmd": "git submodule init",
      "desc": "Inicializa os arquivos de configuração dos submódulos presentes no arquivo .gitmodules, preparando o projeto para usar os submódulos."
    },
    {
      "cmd": "git submodule update",
      "desc": "Clona ou atualiza os submódulos para os commits específicos registrados no repositório principal, garantindo que cada submódulo esteja na versão correta."
    },
    {
      "cmd": "git submodule update --remote",
      "desc": "Atualiza todos os submódulos para os commits mais recentes do repositório remoto, ao invés de usar os commits fixados no projeto principal."
    }
  ]
},
    {
  "number": 12,
  "emoji": "↩️",
  "title": "Desfazendo Alterações",
  "color": "brown",
  "commands": [
    {
      "cmd": "git checkout -- <arquivo>",
      "desc": "Descarta todas as modificações locais feitas no arquivo especificado, restaurando-o para a versão do último commit. Use com cuidado, pois as mudanças locais serão perdidas."
    },
    {
      "cmd": "git restore <arquivo>",
      "desc": "Comando mais recente que substitui 'git checkout' para restaurar um arquivo ao estado do último commit, descartando alterações locais não commitadas."
    },
    {
      "cmd": "git reset",
      "desc": "Remove os arquivos do índice (área staged), ou seja, desfaz o 'git add', mas mantém as mudanças nos arquivos locais para serem editadas."
    },
    {
      "cmd": "git reset --soft HEAD~1",
      "desc": "Desfaz o último commit, movendo o ponteiro HEAD para o commit anterior, mas mantém as mudanças feitas no índice (prontas para novo commit)."
    },
    {
      "cmd": "git reset --hard HEAD~1",
      "desc": "Desfaz o último commit e descarta todas as alterações locais, tanto no índice quanto no diretório de trabalho. Atenção: essa ação é irreversível."
    },
    {
      "cmd": "git revert <commit>",
      "desc": "Cria um novo commit que desfaz as mudanças realizadas por um commit anterior específico, preservando o histórico e evitando problemas em repositórios compartilhados."
    }
  ]
},
    {
  "number": 13,
  "emoji": "🚫",
  "title": "Ignorar Arquivos",
  "color": "amber",
  "commands": [
    {
      "cmd": "git clean -n",
      "desc": "Simula a remoção de arquivos não rastreados, mostrando quais arquivos seriam deletados sem realmente apagá-los. Útil para ver o que será removido antes de executar o comando."
    },
    {
      "cmd": "git clean -f",
      "desc": "Remove todos os arquivos não rastreados do diretório de trabalho. Use com cuidado, pois arquivos deletados não podem ser recuperados pelo Git."
    },
    {
      "cmd": "git rm --cached <arquivo>",
      "desc": "Remove o arquivo do índice (staging area) sem deletá-lo do diretório local. Ideal para parar de rastrear arquivos que devem ser ignorados, como listados no .gitignore."
    }
  ]
},
    {
  "number": 14,
  "emoji": "⚠️",
  "title": "Resolvendo Conflitos",
  "color": "orange",
  "commands": [
    {
      "cmd": "git status",
      "desc": "Exibe o estado atual do repositório, destacando arquivos que estão em conflito após um merge ou rebase. Indica quais arquivos precisam ser corrigidos."
    },
    {
      "cmd": "git merge --abort",
      "desc": "Cancela o merge em andamento, desfazendo todas as alterações feitas durante o processo e retornando ao estado antes do merge. Útil para abandonar um merge com conflitos difíceis."
    },
    {
      "cmd": "git rebase --abort",
      "desc": "Cancela o rebase em andamento, restaurando o repositório ao estado antes do início do rebase. Use quando encontrar conflitos difíceis durante o rebase."
    },
    {
      "cmd": "git add <arquivo>",
      "desc": "Depois de resolver manualmente os conflitos em um arquivo, este comando marca o arquivo como resolvido e o adiciona ao índice para o próximo commit."
    },
    {
      "cmd": "git commit -m \"Resolvendo conflitos\"",
      "desc": "Finaliza o processo de merge criando um commit que registra a resolução dos conflitos. Essa mensagem pode ser personalizada."
    }
  ]
}
  ];
  
  // Gera as seções e botões no HTML
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('cheat-sheet');
  
    sections.forEach((sec, secIndex) => {
      const secEl = document.createElement('section');
      secEl.classList.add(sec.color);
  
      const header = document.createElement('h2');
      header.className = 'section-header';
      header.innerText = `${sec.number}. ${sec.emoji} ${sec.title}`;
      secEl.appendChild(header);
  
      const cmdContainer = document.createElement('div');
      cmdContainer.className = 'commands';
  
      sec.commands.forEach((cmdObj, cmdIndex) => {
        const btn = document.createElement('button');
        btn.className = 'cmd-button';
        btn.innerText = cmdObj.cmd;
        btn.setAttribute('data-sec', secIndex);
        btn.setAttribute('data-cmd', cmdIndex);
        btn.setAttribute('aria-label', cmdObj.cmd + ' — ' + cmdObj.desc);
        cmdContainer.appendChild(btn);
      });
  
      secEl.appendChild(cmdContainer);
      container.appendChild(secEl);
    });
  
    // Lógica do modal/pop-up
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');
  
    // Abre o modal ao clicar num comando
    container.addEventListener('click', function(e) {
      if (e.target.classList.contains('cmd-button')) {
        const secIndex = e.target.getAttribute('data-sec');
        const cmdIndex = e.target.getAttribute('data-cmd');
        const cmdObj = sections[secIndex].commands[cmdIndex];
        modalTitle.innerText = cmdObj.cmd;
        modalText.innerText = cmdObj.desc;
        modal.style.display = 'flex';
      }
    });
  
    // Fecha o modal ao clicar no "X" ou fora do conteúdo
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    // Fecha o modal com ESC
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });
  
  // Mostrar o botão quando rolar
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Voltar ao topo quando clicar
  document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  document.getElementById('btnTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  