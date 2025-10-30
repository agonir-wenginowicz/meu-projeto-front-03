# meu-projeto-front-03
Descrição: Projeto da disciplina Desenvolvimento Front-End Para Web atividade 03

Estrutura

index.html\
content/\
├──projetos.html\
├──cadastro.html\
├──contato.html\
img/ (placeholders SVG)
css/\
├── base/\
│ ├── _reset.css # Reset ou Normalize\
│ ├── _typography.css # Estilos de elementos HTML base (h1, p, a)\
│ └── _base.css # Estilos globais do body, etc.\
├── settings/\
│ └── _variables.css # 🔑 Sistema de Design (Cores, Fontes, Espaçamento)\
├── components/\
│ ├── _button.css # Botões\
│ ├── _card.css # Cards responsivos\
│ ├── _form.css # Formulários e validação\
│ └── _navigation.css # Menu Principal e Hambúrguer\
├── layout/\
│ └── _grid.css # 🔑 CSS Grid (12 colunas) e Estrutura geral\
├── pages/\
│ └── _home.css # Estilos específicos para a página inicial\
└── style.css # Arquivo principal que importa todos os módulos\

Fase 3 do projeto com isso temos:\
Injeção de HTML via innerHTML e criação de elementos (templates.js).

SPA: Navegação sem recarga (spa.js usando fetch e history.pushState).

Templates: Geração de HTML a partir de dados JS (templates.js).

Eventos: Captura do submit do formulário e dos cliques de navegação.

Armazenamento Local: Salvamento dos dados do usuário (form.js).

Consistência de Dados: Validação dos campos do formulário (form.js).
