const SPA_CONTAINER_ID = 'spa-content';
const CONTENT_PATH = 'content/';

const loadPageContent = async (page) => {
    const container = document.getElementById(SPA_CONTAINER_ID);
    if (!container) return;

    try {
        // Manipulação do DOM: Mostra um estado de carregamento
        container.innerHTML = '<section class="hero"><h2 id="hero-title">Carregando...</h2></section>';
        
        // 1. Fetch para buscar o conteúdo HTML da "página"
        const response = await fetch(`${CONTENT_PATH}${page}`);
        if (!response.ok) {
            throw new Error(`Erro ao carregar a página: ${response.statusText}`);
        }
        
        const html = await response.text();
        
        // 2. Manipulação do DOM: Injeta o novo conteúdo
        container.innerHTML = html;
        
        // 3. Execução de funções específicas após carregar o conteúdo
        if (page === 'projetos.html') {
            // Se for a página de projetos, renderiza os cards dinâmicos
            renderProjects(); 
        } else if (page === 'cadastro.html') {
            // Se for a página de cadastro, configura o listener de formulário
            setupFormListener();
        }

    } catch (error) {
        console.error("Falha no SPA:", error);
        container.innerHTML = '<section class="hero"><h2 id="hero-title" class="alert alert-error">Erro ao carregar o conteúdo.</h2></section>';
    }
};

const handleNavigation = (event) => {
    const target = event.target.closest('.nav-link');
    if (target) {
        event.preventDefault(); // Impede a navegação padrão (recarregar a página)
        
        const path = target.getAttribute('data-path');
        
        // Atualiza a URL do navegador para simular a navegação (sem recarregar)
        window.history.pushState({ path: path }, '', `/${path}`);
        
        // Carrega o conteúdo da nova "página"
        loadPageContent(path);
        
        // Opcional: Fecha o menu mobile se estiver aberto
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle && menuToggle.checked) {
            menuToggle.checked = false; 
        }
    }
};

// Inicialização: Carrega o conteúdo da página inicial ao abrir o site
document.addEventListener('DOMContentLoaded', () => {
    // Configura o ouvinte de cliques para toda a navegação
    document.querySelector('.nav-menu').addEventListener('click', handleNavigation);
    
    // Carrega a página inicial ou o caminho atual da URL
    const initialPath = window.location.pathname.endsWith('.html') ? window.location.pathname.split('/').pop() : 'index.html';
    loadPageContent(initialPath);
    
    // Listener para o botão "voltar" do navegador
    window.addEventListener('popstate', (event) => {
        const popPath = event.state ? event.state.path : 'index.html';
        loadPageContent(popPath);
    });

    console.log("SPA Iniciado.");
});
