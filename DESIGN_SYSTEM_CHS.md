# CHS Design System Token Reference

Este documento serve como a fonte de verdade para o Design System do módulo **CHS (Customer Health Score)**.

## 0. Como Usar (Quick Start)

Para criar um novo dashboard com este design system, utilize o arquivo CSS centralizado.

### Estrutura Básica
Crie um arquivo HTML e importe o CSS:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <!-- Fontes Obrigatórias -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Importar Design System -->
  <link rel="stylesheet" href="../../css/chs-design-system.css">
</head>
<body>
  <main class="container">
    <!-- Exemplo Card -->
    <div class="summary">
       <div class="box saude">
          <div class="kpi-label"><i class="fas fa-check grad-icon-success"></i> Exemplo</div>
          <div class="kpi-value">100</div>
       </div>
    </div>
  </main>
</body>
</html>
```

## 1. Cores e Variáveis (`:root`)

As variáveis CSS são o núcleo do tema. Use sempre as variáveis (`var(--name)`) em vez de códigos HEX hardcoded.

### Paleta Principal
| Token | Valor Hex | Descrição |
| :--- | :--- | :--- |
| `--tryvia-dark` | `#3a383b` | Texto principal, cinza quase preto. |
| `--tryvia-dark2` | `#2a2829` | Títulos, ênfase, preto suave. |
| `--tryvia-white` | `#ffffff` | Branco puro. |
| `--tryvia-gray` | `#f8f9fa` | Cinza muito claro, fundos de seção. |
| `--tryvia-border` | `#e0e6ed` | Bordas de cards e inputs. |

### Cores da Marca e Semânticas
| Token | Valor Hex | Significado |
| :--- | :--- | :--- |
| `--tryvia-cyan` | `#00d4ff` | **Primária**. Marca, links, focos, bordas de destaque. |
| `--tryvia-blue` | `#0066ff` | **Secundária**. Ações, gradientes. |
| `--tryvia-green` | `#00d084` | **Sucesso / Saúde Boa**. Promotores (NPS 9-10). |
| `--tryvia-yellow` | `#ffc107` | **Atenção / Saúde Média**. Neutros (NPS 7-8). |
| `--tryvia-red` | `#ff4757` | **Crítico / Saúde Ruim**. Detratores (NPS 0-6). |

### Gradientes
| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--tryvia-gradient` | `linear-gradient(135deg, #f0f4ff ...)` | Background geral da página (Body). |
| `--tryvia-cyan-bg` | `linear-gradient(135deg, rgba(0, 212, 255, 0.04) ...)` | Background de containers leves. |
| `--tryvia-accent-gradient` | `linear-gradient(135deg, #00d4ff, #00e4ff)` | Botões de destaque, barras de progresso. |

---

## 2. Tipografia

- **Títulos (Headings)**: `Poppins`, sans-serif. Pesos: 700 (Bold).
- **Corpo (Body)**: `Roboto`, Arial, sans-serif. Pesos: 400 (Regular), 700 (Bold).
- **KPI Values**: Frequentemente usam peso 900 (Black).

---

## 3. Sombras e Transições

### Sombras (Depth)
- **Card Shadow**: `var(--tryvia-card-shadow)` -> `0 8px 32px rgba(0, 212, 255, 0.12)` (Sombra colorida ciano suave).
- **Base Shadow**: `var(--tryvia-shadow)` -> `0 12px 40px rgba(0, 0, 0, 0.08)`.

### Transições
- **Fast**: `--tryvia-transition-fast` (0.2s) - Hover de botões.
- **Smooth**: `--tryvia-transition-smooth` (0.35s) - Movimentos maiores, modais.
- **Bounce**: `--tryvia-transition-bounce` (0.4s) - Efeitos de entrada.

---

## 4. Componentes UI

### Botões (`.btn`)
```css
.btn {
  border-radius: 12px;
  padding: .5rem .9rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
  color: var(--tryvia-dark);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.15);
  cursor: pointer;
  transition: all var(--tryvia-transition-fast);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 212, 255, 0.25);
}
```

### KPI Cards (`.box`)
Cards com efeito glassmorphism e cores semânticas.
- **Estrutura**: `.box` contendo `.kpi-label` (título) e `.kpi-value` (valor).
- **Variantes**:
    - `.saude`: Fundo verde claro, texto verde.
    - `.atencao`: Fundo amarelo claro, texto amarelo.
    - `.critico`: Fundo vermelho claro, texto vermelho.
    - `.geral`: Gradiente verde suave (usado no CHS Geral).

### Ranking Items (`.ranking-item`)
Cards compactos para listas de "Top 5" ou "Bottom 5".
- **Dimensões**: `padding: 5px 10px`, `min-height: 38px`, `border-radius: 10px`.
- **Elementos**:
    - `.rank-circle`: Círculo com o número do ranking.
    - `.client-name`: Nome truncado.
    - `.score-badge`: Badge sólida com a nota.

### Ícones Gradiente (`.grad-icon-*`)
Classes utilitárias para aplicar gradiente em ícones (FontAwesome).
- `.grad-icon-primary` (Ciano/Azul)
- `.grad-icon-success` (Verde)
- `.grad-icon-warning` (Amarelo/Laranja)
- `.grad-icon-danger` (Vermelho)

```css
.grad-icon-primary {
  background: linear-gradient(135deg, var(--tryvia-blue), var(--tryvia-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 5. Layout Containers

### Main Container (`.container`)
Container principal com efeito vidro fosco (backdrop-filter).
```css
.container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), ...;
  padding: 24px 44px;
}
```

### Dashboard Grids
- **Charts Row**: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;`
- **Summary Row**: `display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;`

---

## 6. Componentes Avançados (Interatividade)

### Inputs de Busca (`.search-input`)
Inputs estilizados com sombra e foco ciano.
```html
<input type="text" class="search-input" placeholder="Buscar cliente...">
```

### Lista de Sugestões (`.suggestions`)
Dropdown para autocomplete, usado em buscas.
```html
<div class="suggestions show">
  <div class="suggestion-item">
     <div class="suggestion-name">Cliente ABC</div>
     <div class="suggestion-chs">95</div>
  </div>
</div>
```

### Modais e Overlays (`.modal-overlay`)
Sistema de janelas modais com animação de entrada e fundo desfocado.
Estrutura recomendada:
```html
<div class="modal-overlay show" id="myModal">
  <div class="modal-box">
     <button class="close-btn">&times;</button>
     <h3>Título do Modal</h3>
     <p>Conteúdo aqui...</p>
  </div>
</div>
```

---
*Documento v1.1 - Gerado automaticamente com base na análise completa do arquivo `modules/chs/padrao.html`.*
