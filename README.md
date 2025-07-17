# Central de Procedimentos Efaseg

# Link para o DKGuia
https://joaobosco25.github.io/DKGuia/

## Descrição

Website informativo e didático que centraliza todos os procedimentos operacionais padrão (POPs) da Efaseg, incluindo vídeos informativos do sistema DKSoft. O site foi desenvolvido com foco na usabilidade, design moderno e funcionalidade de busca inteligente.

## Características

### Design
- **Paleta de cores**: Preto (#000000), Dourado (#FFD700) e Branco (#FFFFFF)
- **Logo da Efaseg** integrado no cabeçalho
- **Design responsivo** para desktop, tablet e mobile
- **Animações suaves** e transições elegantes
- **Efeitos visuais dinâmicos** com gradientes e hover effects

### Funcionalidades
- **Busca inteligente com IA** que indexa todo o conteúdo
- **Páginas separadas** para cada procedimento
- **Navegação intuitiva** com breadcrumbs
- **Cards interativos** com animações
- **Menu responsivo** para dispositivos móveis

### Tecnologias
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com animações
- **JavaScript** - Interatividade e busca inteligente
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Roboto e Roboto Slab)

## Estrutura do Projeto

```
website/
├── index.html                    # Página principal
├── protocolo-atendimento.html    # POP 3.1
├── controle-produtos.html        # POP 3.2 (a ser criado)
├── controle-financeiro.html      # POP 3.3 (a ser criado)
├── pacotes-modulos.html          # POP 3.4 (a ser criado)
├── controle-turmas.html          # POP 3.5 (a ser criado)
├── videos.html                   # Página de vídeos
├── css/
│   ├── style.css                 # Estilos principais
│   ├── procedure.css             # Estilos para páginas de procedimentos
│   └── videos.css                # Estilos para página de vídeos
├── js/
│   ├── main.js                   # JavaScript principal
│   └── search.js                 # Sistema de busca inteligente
├── images/
│   └── efaseg_logo.jpg           # Logo da Efaseg
└── README.md                     # Documentação
```

## Procedimentos Incluídos

### POP 3.1 - Protocolo de Atendimento
- Processo completo de matrícula de alunos
- Documentação necessária
- Fluxo de cadastro no sistema
- Geração de contratos

### POP 3.2 - Controle de Produtos
- Cadastro de produtos
- Controle de estoque
- Vendas e compras
- Relatórios

### POP 3.3 - Controle Financeiro
- Contas a pagar e receber
- Fechamento de caixa
- Cadastros complementares
- Transferências bancárias

### POP 3.4 - Pacotes, Módulos e Apostilas
- Estruturação curricular
- Criação de pacotes
- Planos de pagamento
- Configurações comerciais

### POP 3.5 - Controle de Turmas
- Abertura de turmas
- Controle de módulos
- Gestão de notas e presença
- Acompanhamento pedagógico

## Vídeos Informativos

O site inclui uma seção dedicada aos vídeos do sistema DKSoft:
- Lembrete de vencimento
- Passos de implantação
- Conteúdo online em módulos
- Exportação de dados
- Gestão de parcelas
- Aplicativo DKEscolar
- Controle de horários
- Documentos e relatórios

## Sistema de Busca Inteligente

### Características
- **Indexação completa** de todos os procedimentos e vídeos
- **Busca fuzzy** com tolerância a erros de digitação
- **Relevância inteligente** baseada em título, descrição e palavras-chave
- **Resultados destacados** com texto marcado
- **Interface responsiva** com animações suaves

### Como Usar
1. Digite palavras-chave na barra de busca
2. Os resultados aparecem automaticamente
3. Clique em qualquer resultado para navegar
4. Use termos como "matrícula", "financeiro", "turmas", etc.

## Responsividade

### Desktop (1200px+)
- Layout em 3 colunas para cards
- Menu horizontal completo
- Animações completas

### Tablet (768px - 1199px)
- Layout em 2 colunas
- Menu adaptado
- Espaçamentos otimizados

### Mobile (até 767px)
- Layout em 1 coluna
- Menu hamburger
- Botões otimizados para touch
- Texto legível

## Animações e Efeitos

### Animações CSS
- **fadeInUp**: Entrada de elementos de baixo para cima
- **fadeInLeft/Right**: Entrada lateral
- **float**: Flutuação suave de elementos
- **shimmer**: Efeito de brilho
- **pulse**: Pulsação de elementos

### Interações JavaScript
- **Scroll effects**: Mudança do header ao rolar
- **Hover effects**: Efeitos ao passar o mouse
- **Ripple effects**: Ondulação ao clicar
- **Parallax**: Efeito de profundidade
- **Typing effect**: Digitação animada do título

## Compatibilidade

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dispositivos
- Desktop
- Tablet
- Smartphone
- Touch devices

## Hospedagem no GitHub

O projeto foi desenvolvido especificamente para hospedagem no GitHub Pages:
- Apenas HTML, CSS e JavaScript
- Sem dependências de servidor
- Arquivos otimizados
- Estrutura compatível com GitHub Pages

## Instalação

1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador
3. Para GitHub Pages:
   - Faça upload dos arquivos para um repositório
   - Ative GitHub Pages nas configurações
   - Acesse via URL do GitHub Pages

## Manutenção

### Adicionar Novo Procedimento
1. Crie arquivo HTML baseado em `protocolo-atendimento.html`
2. Adicione entrada no `search.js`
3. Inclua card na página principal
4. Teste a funcionalidade de busca

### Atualizar Conteúdo
1. Edite os arquivos HTML correspondentes
2. Atualize dados no `search.js` se necessário
3. Teste em diferentes dispositivos

## Suporte

Para dúvidas sobre os procedimentos, consulte o suporte técnico da Efaseg.
Para questões técnicas do website, verifique a documentação ou entre em contato com o desenvolvedor.

