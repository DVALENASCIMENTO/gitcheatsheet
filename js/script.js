const sections = [
    {
      number: 1,
      emoji: "⚙️",
      title: "Configuração Inicial",
      color: "yellow",
      commands: [
        { cmd: "git config --global user.name \"Seu Nome\"", desc: "Define o nome de usuário global do Git." },
        { cmd: "git config --global user.email \"seu@email.com\"", desc: "Define o email de usuário global do Git." },
        { cmd: "git config --global core.editor \"code --wait\"", desc: "Define o editor de texto padrão (por exemplo, Visual Studio Code)." },
        { cmd: "git config --global color.ui auto", desc: "Habilita a colorização automática da saída de comandos do Git." },
        { cmd: "git config --list", desc: "Exibe todas as configurações globais do Git atualmente definidas." }
      ]
    },
    {
      number: 2,
      emoji: "📁",
      title: "Criar Repositório",
      color: "violet",
      commands: [
        { cmd: "git init", desc: "Inicializa um novo repositório Git na pasta atual." },
        { cmd: "git clone <url_do_repositorio>", desc: "Clona um repositório remoto existente para o computador local." }
      ]
    },
    {
      number: 3,
      emoji: "📊",
      title: "Status e Informações",
      color: "blue",
      commands: [
        { cmd: "git status", desc: "Mostra o estado atual do repositório (modificações, arquivos não rastreados etc.)." },
        { cmd: "git log", desc: "Exibe o histórico de commits (todos os commits, com detalhes)." },
        { cmd: "git log --oneline", desc: "Exibe o histórico de commits de forma compacta (uma linha por commit)." },
        { cmd: "git log --graph --all", desc: "Exibe o histórico de commits de todas as branches de forma gráfica." },
        { cmd: "git show <commit>", desc: "Mostra detalhes das mudanças em um commit específico." },
        { cmd: "git diff", desc: "Mostra as diferenças entre o diretório de trabalho e o índice (staged)." },
        { cmd: "git diff --staged", desc: "Mostra as diferenças entre o índice (staged) e o último commit." }
      ]
    },
    {
      number: 4,
      emoji: "➕",
      title: "Adicionar e Commitar Arquivos",
      color: "red",
      commands: [
        { cmd: "git add <arquivo>", desc: "Adiciona um arquivo específico ao índice para o próximo commit." },
        { cmd: "git add .", desc: "Adiciona todas as mudanças atuais ao índice para o próximo commit." },
        { cmd: "git commit -m \"mensagem\"", desc: "Cria um commit com a mensagem informada (apenas arquivos no índice)." },
        { cmd: "git commit -am \"mensagem\"", desc: "Adiciona todos os arquivos modificados (já rastreados) e cria um commit em uma etapa." }
      ]
    },
    {
      number: 5,
      emoji: "🌿",
      title: "Trabalhando com Branches",
      color: "orange",
      commands: [
        { cmd: "git branch", desc: "Lista todas as branches locais no repositório." },
        { cmd: "git branch <nome-branch>", desc: "Cria uma nova branch com o nome especificado." },
        { cmd: "git checkout <nome-branch>", desc: "Muda para a branch especificada." },
        { cmd: "git switch <nome-branch>", desc: "Muda para a branch especificada (comando alternativo mais recente)." },
        { cmd: "git checkout -b <nova-branch>", desc: "Cria e já muda para uma nova branch nomeada." },
        { cmd: "git switch -c <nova-branch>", desc: "Cria e já muda para uma nova branch (alternativa de 'checkout -b')." },
        { cmd: "git branch -d <nome-branch>", desc: "Deleta a branch local especificada (deve estar mesclada)." }
      ]
    },
    {
      number: 6,
      emoji: "🔀",
      title: "Merge e Rebase",
      color: "pink",
      commands: [
        { cmd: "git merge <nome-branch>", desc: "Realiza um merge da branch especificada na branch atual." },
        { cmd: "git rebase <nome-branch>", desc: "Rebaseia a branch atual em cima da branch especificada." },
        { cmd: "git rebase -i HEAD~3", desc: "Inicia um rebase interativo nos últimos 3 commits (para squash/reordenar etc.)." },
        { cmd: "git rebase --abort", desc: "Aborta um rebase em andamento, restaurando o estado anterior." }
      ]
    },
    {
      number: 7,
      emoji: "🔄",
      title: "Atualizando o Repositório",
      color: "teal",
      commands: [
        { cmd: "git pull", desc: "Faz fetch e merge das mudanças do repositório remoto na branch atual." },
        { cmd: "git fetch", desc: "Busca as atualizações do repositório remoto, mas não faz merge automático." },
        { cmd: "git merge origin/main", desc: "Faz merge da branch 'main' do remoto 'origin' na branch atual." },
        { cmd: "git pull origin main", desc: "Puxa (fetch + merge) a branch 'main' do remoto 'origin'." },
        { cmd: "git fetch --all", desc: "Busca atualizações de todos os repositórios remotos configurados." }
      ]
    },
    {
      number: 8,
      emoji: "☁️",
      title: "Trabalhando com Remotos",
      color: "cyan",
      commands: [
        { cmd: "git remote -v", desc: "Lista os repositórios remotos configurados (nome e URL)." },
        { cmd: "git remote add origin <url>", desc: "Adiciona o repositório remoto com o nome 'origin' e a URL informada." },
        { cmd: "git push -u origin main", desc: "Envia a branch 'main' para o remoto 'origin' e define o upstream." },
        { cmd: "git push origin <nome-branch>", desc: "Envia a branch especificada para o remoto 'origin'." },
        { cmd: "git pull origin main", desc: "Puxa as mudanças da branch 'main' do remoto 'origin'." },
        { cmd: "git remote remove origin", desc: "Remove o repositório remoto 'origin'." }
      ]
    },
    {
      number: 9,
      emoji: "🗄️",
      title: "Stash",
      color: "purple",
      commands: [
        { cmd: "git stash", desc: "Guarda temporariamente as alterações não commitadas no stash." },
        { cmd: "git stash save \"mensagem\"", desc: "Guarda as alterações no stash com uma mensagem opcional." },
        { cmd: "git stash list", desc: "Lista os itens salvos no stash." },
        { cmd: "git stash apply", desc: "Aplica as alterações do último stash na branch atual." },
        { cmd: "git stash pop", desc: "Aplica e remove o último stash da pilha." },
        { cmd: "git stash drop", desc: "Remove o último stash da pilha." },
        { cmd: "git stash clear", desc: "Limpa todos os itens salvos no stash." }
      ]
    },
    {
      number: 10,
      emoji: "🏷️",
      title: "Tags",
      color: "green",
      commands: [
        { cmd: "git tag", desc: "Lista todas as tags existentes localmente." },
        { cmd: "git tag -a v1.0 -m \"mensagem\"", desc: "Cria uma tag anotada 'v1.0' com a mensagem especificada." },
        { cmd: "git tag -d v1.0", desc: "Deleta a tag especificada localmente." },
        { cmd: "git push --tags", desc: "Envia todas as tags locais para o repositório remoto." }
      ]
    },
    {
      number: 11,
      emoji: "📦",
      title: "Submódulos",
      color: "gray",
      commands: [
        { cmd: "git submodule add <url> <caminho>", desc: "Adiciona um repositório como submódulo no caminho especificado." },
        { cmd: "git submodule init", desc: "Inicializa os arquivos de submódulos registrados em .gitmodules." },
        { cmd: "git submodule update", desc: "Clona ou atualiza os arquivos dos submódulos para as versões definidas." },
        { cmd: "git submodule update --remote", desc: "Atualiza todos os submódulos para o commit mais recente no repositório remoto." }
      ]
    },
    {
      number: 12,
      emoji: "↩️",
      title: "Desfazendo Alterações",
      color: "brown",
      commands: [
        { cmd: "git checkout -- <arquivo>", desc: "Descarta alterações locais em um arquivo (traz do último commit)." },
        { cmd: "git restore <arquivo>", desc: "Restaura o arquivo a partir do último commit (novo comando Git)." },
        { cmd: "git reset", desc: "Remove todas as mudanças do índice (staged) sem alterar os arquivos." },
        { cmd: "git reset --soft HEAD~1", desc: "Move o HEAD para o commit anterior, mantendo mudanças no índice." },
        { cmd: "git reset --hard HEAD~1", desc: "Volta ao commit anterior descartando todas as mudanças locais." },
        { cmd: "git revert <commit>", desc: "Cria um novo commit que desfaz as mudanças do commit especificado." }
      ]
    },
    {
      number: 13,
      emoji: "🚫",
      title: "Ignorar Arquivos",
      color: "amber",
      commands: [
        { cmd: "git clean -n", desc: "Mostra quais arquivos não rastreados seriam removidos sem de fato removê-los." },
        { cmd: "git clean -f", desc: "Remove todos os arquivos não rastreados do diretório de trabalho." },
        { cmd: "git rm --cached <arquivo>", desc: "Remove o arquivo do índice (mantém-no no diretório, útil para .gitignore)." }
      ]
    },
    {
      number: 14,
      emoji: "⚠️",
      title: "Resolvendo Conflitos",
      color: "orange",
      commands: [
        { cmd: "git status", desc: "Mostra arquivos com conflitos após um merge ou rebase." },
        { cmd: "git merge --abort", desc: "Cancela o merge em andamento e volta ao estado anterior." },
        { cmd: "git rebase --abort", desc: "Cancela o rebase em andamento e restaura o estado anterior." },
        { cmd: "git add <arquivo>", desc: "Marca o arquivo como resolvido após editar conflitos." },
        { cmd: "git commit -m \"Resolvendo conflitos\"", desc: "Finaliza o merge criando o commit de resolução de conflitos." }
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
  