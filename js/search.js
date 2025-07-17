// Sistema de busca inteligente para procedimentos
class IntelligentSearch {
    constructor() {
        this.procedures = [];
        this.videos = [];
        this.searchIndex = new Map();
        this.init();
    }

    async init() {
        await this.loadData();
        this.buildSearchIndex();
        this.setupEventListeners();
    }

    async loadData() {
        // Dados dos procedimentos
        this.procedures = [
            {
                id: 'protocolo-atendimento',
                title: 'POP 3.1 - Protocolo de Atendimento',
                description: 'Processo completo de matrícula de alunos em cursos de segurança privada, desde o primeiro contato até a confirmação definitiva.',
                keywords: ['matrícula', 'aluno', 'curso', 'segurança privada', 'atendimento', 'protocolo', 'documentos', 'certidões', 'cadastro', 'RA', 'turma', 'contrato'],
                content: `
                    Identificar tipo de curso (Formação, Reciclagem, Extensão)
                    Verificar pré-requisitos e disponibilidade de turmas
                    Coletar informações iniciais e realizar pré-cadastro
                    Entregar lista de documentos obrigatórios
                    Conferir documentação completa incluindo certidões
                    Realizar cadastro completo com RA (XYYZZZZ)
                    Alocar aluno na turma adequada
                    Selecionar pacote, plano de pagamento e parcelas
                    Gerar parcelas no sistema
                    Confirmar matrícula
                    Gerar contrato de prestação de serviços
                    Lançar produtos adicionais se necessário
                    Conferir documentação no Drive
                `,
                url: 'protocolo-atendimento.html'
            },
            {
                id: 'controle-produtos',
                title: 'POP 3.2 - Controle de Produtos',
                description: 'Gestão de estoque, cadastro, movimentação e distribuição de todos os itens físicos utilizados pela instituição.',
                keywords: ['produtos', 'estoque', 'cadastro', 'movimentação', 'distribuição', 'apostilas', 'materiais', 'vendas', 'compras', 'fornecedor', 'relatórios'],
                content: `
                    Cadastro de produtos com descrição, unidade, custo e preço
                    Definir estoque mínimo, máximo e atual
                    Venda de produtos para alunos e responsáveis
                    Compra de produtos de fornecedores
                    Emissão de relatórios de vendas e estoque
                    Controle de produtos abaixo do estoque mínimo
                    Extrato de movimentações de produtos
                    Previsão de entrega de materiais
                `,
                url: 'controle-produtos.html'
            },
            {
                id: 'controle-financeiro',
                title: 'POP 3.3 - Controle Financeiro',
                description: 'Registro, acompanhamento e conferência de todas as movimentações monetárias, incluindo contas a pagar e receber.',
                keywords: ['financeiro', 'contas', 'pagar', 'receber', 'caixa', 'pagamento', 'recebimento', 'banco', 'transferência', 'fornecedor', 'relatórios', 'fechamento'],
                content: `
                    Lançamento de contas a pagar com fornecedor e vencimento
                    Lançamento de contas a receber de alunos
                    Transferências bancárias entre contas
                    Fechamento de caixa diário
                    Cadastro de bancos, fornecedores e centros de custo
                    Cadastro de plano de contas e subcontas
                    Formas de recebimento e pagamento
                    Meios de pagamento com tolerância
                `,
                url: 'controle-financeiro.html'
            },
            {
                id: 'pacotes-modulos',
                title: 'POP 3.4 - Pacotes, Módulos e Apostilas',
                description: 'Estruturação curricular e comercial através de pacotes que reúnem módulos com base na matriz pedagógica.',
                keywords: ['pacotes', 'módulos', 'apostilas', 'curricular', 'comercial', 'curso', 'carga horária', 'plano pagamento', 'desconto', 'bônus', 'contrato'],
                content: `
                    Criar ou revisar apostilas com valor simbólico
                    Criar módulos com carga horária e apostila vinculada
                    Criar pacotes vinculando módulos
                    Configurar informações do pacote (aulas semanais, duração, valores)
                    Configurar planos de pagamento (à vista, parcelado)
                    Definir descontos para ex-alunos e bônus de pontualidade
                    Vincular contrato padrão ao pacote
                    Revisar descontos e bônus permitidos
                    Ativar pacote no sistema
                `,
                url: 'pacotes-modulos.html'
            },
            {
                id: 'controle-turmas',
                title: 'POP 3.5 - Controle de Turmas',
                description: 'Gestão operacional de cursos, desde a criação da turma até aplicação de módulos e controle de frequência.',
                keywords: ['turmas', 'cursos', 'módulos', 'notas', 'presença', 'frequência', 'alunos', 'horários', 'lotação', 'abertura', 'finalização'],
                content: `
                    Abertura de turmas com código padrão X0YYZZZZ
                    Definir lotação máxima (60 alunos)
                    Selecionar pacote de curso correspondente
                    Configurar datas de início e término
                    Configurar horários das aulas
                    Iniciar e finalizar módulos das turmas
                    Controle de notas por módulo e aluno
                    Controle de presença diária
                    Marcar presença por data, sala e professor
                `,
                url: 'controle-turmas.html'
            }
        ];

        // Dados dos vídeos
        this.videos = [
            {
                id: 'lembrete-vencimento',
                title: 'Lembrete de vencimento',
                description: 'Como configurar e enviar lembretes de vencimento através do aplicativo',
                keywords: ['lembrete', 'vencimento', 'aplicativo', 'notificação', 'aluno', 'filtro'],
                content: 'Acessar aplicativo pelo login do administrador, selecionar data, filtrar, enviar notificação'
            },
            {
                id: 'passos-implantacao',
                title: 'Passos de Implantação',
                description: 'Orientações iniciais para implantação do DKSoft na unidade escolar',
                keywords: ['implantação', 'DKSoft', 'sistema', 'cadastros', 'configuração', 'escola']
            },
            {
                id: 'conteudo-online',
                title: 'Como adicionar link de conteúdo online ao módulo do curso',
                description: 'Compartilhar links de materiais online nos módulos dos cursos',
                keywords: ['conteúdo', 'online', 'módulo', 'curso', 'link', 'material', 'vídeo', 'PDF']
            },
            {
                id: 'exportar-alunos',
                title: 'Como exportar dados dos alunos para planilha Excel',
                description: 'Exportar dados cadastrais dos alunos e responsáveis',
                keywords: ['exportar', 'alunos', 'planilha', 'excel', 'dados', 'cadastrais']
            },
            {
                id: 'alterar-parcela',
                title: 'Como alterar informações de uma parcela do aluno',
                description: 'Modificar valor, vencimento e outras informações de parcelas',
                keywords: ['alterar', 'parcela', 'aluno', 'pagamento', 'vencimento', 'valor']
            },
            {
                id: 'aplicativo-dkescolar',
                title: 'Como enviar dados de acesso ao aplicativo DKEscolar',
                description: 'Enviar QR codes e dados de acesso do aplicativo para alunos',
                keywords: ['aplicativo', 'DKEscolar', 'acesso', 'QR code', 'download', 'dados']
            }
        ];
    }

    buildSearchIndex() {
        // Indexar procedimentos
        this.procedures.forEach(proc => {
            const searchableText = `${proc.title} ${proc.description} ${proc.keywords.join(' ')} ${proc.content}`.toLowerCase();
            const words = searchableText.split(/\s+/);
            
            words.forEach(word => {
                if (word.length > 2) {
                    if (!this.searchIndex.has(word)) {
                        this.searchIndex.set(word, []);
                    }
                    this.searchIndex.get(word).push({
                        type: 'procedure',
                        item: proc,
                        relevance: this.calculateRelevance(word, proc)
                    });
                }
            });
        });

        // Indexar vídeos
        this.videos.forEach(video => {
            const searchableText = `${video.title} ${video.description} ${video.keywords.join(' ')} ${video.content || ''}`.toLowerCase();
            const words = searchableText.split(/\s+/);
            
            words.forEach(word => {
                if (word.length > 2) {
                    if (!this.searchIndex.has(word)) {
                        this.searchIndex.set(word, []);
                    }
                    this.searchIndex.get(word).push({
                        type: 'video',
                        item: video,
                        relevance: this.calculateRelevance(word, video)
                    });
                }
            });
        });
    }

    calculateRelevance(word, item) {
        let relevance = 0;
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const keywords = item.keywords.join(' ').toLowerCase();

        if (title.includes(word)) relevance += 10;
        if (description.includes(word)) relevance += 5;
        if (keywords.includes(word)) relevance += 8;
        if (item.content && item.content.toLowerCase().includes(word)) relevance += 3;

        return relevance;
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const searchResults = document.getElementById('searchResults');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                if (query.length > 2) {
                    this.performSearch(query);
                } else {
                    this.hideResults();
                }
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(searchInput.value.trim());
                }
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch(searchInput.value.trim());
            });
        }

        // Fechar resultados ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideResults();
            }
        });
    }

    performSearch(query) {
        if (!query || query.length < 2) {
            this.hideResults();
            return;
        }

        const results = this.search(query);
        this.displayResults(results, query);
    }

    search(query) {
        const queryWords = query.toLowerCase().split(/\s+/);
        const resultMap = new Map();

        queryWords.forEach(word => {
            // Busca exata
            if (this.searchIndex.has(word)) {
                this.searchIndex.get(word).forEach(result => {
                    const key = `${result.type}-${result.item.id}`;
                    if (!resultMap.has(key)) {
                        resultMap.set(key, { ...result, totalRelevance: 0 });
                    }
                    resultMap.get(key).totalRelevance += result.relevance;
                });
            }

            // Busca parcial (fuzzy)
            this.searchIndex.forEach((results, indexWord) => {
                if (indexWord.includes(word) || word.includes(indexWord)) {
                    results.forEach(result => {
                        const key = `${result.type}-${result.item.id}`;
                        if (!resultMap.has(key)) {
                            resultMap.set(key, { ...result, totalRelevance: 0 });
                        }
                        resultMap.get(key).totalRelevance += result.relevance * 0.7; // Menor relevância para busca parcial
                    });
                }
            });
        });

        // Converter para array e ordenar por relevância
        return Array.from(resultMap.values())
            .sort((a, b) => b.totalRelevance - a.totalRelevance)
            .slice(0, 10); // Limitar a 10 resultados
    }

    displayResults(results, query) {
        const searchResults = document.getElementById('searchResults');
        if (!searchResults) return;

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-result-item no-results">
                    <i class="fas fa-search"></i>
                    <div>
                        <h4>Nenhum resultado encontrado</h4>
                        <p>Tente usar palavras-chave diferentes como "matrícula", "financeiro", "turmas", etc.</p>
                    </div>
                </div>
            `;
        } else {
            searchResults.innerHTML = results.map(result => {
                const item = result.item;
                const icon = this.getIcon(result.type, item.id);
                const highlightedTitle = this.highlightText(item.title, query);
                const highlightedDescription = this.highlightText(item.description, query);
                
                return `
                    <div class="search-result-item" onclick="window.location.href='${item.url || '#'}'">
                        <div class="result-icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="result-content">
                            <h4>${highlightedTitle}</h4>
                            <p>${highlightedDescription}</p>
                            <span class="result-type">${result.type === 'procedure' ? 'Procedimento' : 'Vídeo'}</span>
                        </div>
                        <div class="result-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                `;
            }).join('');
        }

        this.showResults();
    }

    getIcon(type, id) {
        if (type === 'video') return 'fas fa-play-circle';
        
        const iconMap = {
            'protocolo-atendimento': 'fas fa-user-check',
            'controle-produtos': 'fas fa-boxes',
            'controle-financeiro': 'fas fa-calculator',
            'pacotes-modulos': 'fas fa-book',
            'controle-turmas': 'fas fa-users'
        };
        
        return iconMap[id] || 'fas fa-file-alt';
    }

    highlightText(text, query) {
        if (!query) return text;
        
        const queryWords = query.split(/\s+/);
        let highlightedText = text;
        
        queryWords.forEach(word => {
            const regex = new RegExp(`(${word})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        
        return highlightedText;
    }

    showResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.classList.add('show');
        }
    }

    hideResults() {
        const searchResults = document.getElementById('searchResults');
        if (searchResults) {
            searchResults.classList.remove('show');
        }
    }

    // Sugestões inteligentes
    getSuggestions(query) {
        const suggestions = [
            'Como fazer matrícula de aluno',
            'Controle de estoque de produtos',
            'Lançar contas a pagar',
            'Criar nova turma',
            'Configurar pacote de curso',
            'Marcar presença de alunos',
            'Emitir relatório financeiro',
            'Cadastrar fornecedor',
            'Alterar parcela do aluno',
            'Exportar dados para Excel'
        ];

        return suggestions.filter(suggestion => 
            suggestion.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    }
}

// CSS para os resultados de busca
const searchCSS = `
.search-results {
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    max-height: 400px;
    overflow-y: auto;
    z-index: 1000;
}

.search-result-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.search-result-item:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: translateX(5px);
}

.search-result-item:last-child {
    border-bottom: none;
}

.result-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.result-icon i {
    color: #000;
    font-size: 1.2rem;
}

.result-content {
    flex: 1;
}

.result-content h4 {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1rem;
    font-weight: 600;
}

.result-content p {
    margin: 0 0 0.5rem 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
}

.result-type {
    background: #FFD700;
    color: #000;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 500;
}

.result-arrow {
    color: #FFD700;
    transition: transform 0.3s ease;
}

.search-result-item:hover .result-arrow {
    transform: translateX(5px);
}

.no-results {
    text-align: center;
    padding: 2rem;
    color: #666;
}

.no-results i {
    font-size: 2rem;
    color: #ccc;
    margin-bottom: 1rem;
}

mark {
    background: #FFD700;
    color: #000;
    padding: 0.1rem 0.2rem;
    border-radius: 3px;
    font-weight: 600;
}

/* Scrollbar personalizada */
.search-results::-webkit-scrollbar {
    width: 6px;
}

.search-results::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
}

.search-results::-webkit-scrollbar-thumb {
    background: #FFD700;
    border-radius: 3px;
}

.search-results::-webkit-scrollbar-thumb:hover {
    background: #FFA500;
}
`;

// Adicionar CSS ao documento
const style = document.createElement('style');
style.textContent = searchCSS;
document.head.appendChild(style);

// Inicializar busca quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.intelligentSearch = new IntelligentSearch();
});

// Exportar para uso global
window.IntelligentSearch = IntelligentSearch;

