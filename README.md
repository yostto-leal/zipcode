# 📦 ZipCode (ViaCEP + JavaScript)

**Consulta de CEP no Brasil via API ViaCep com JavaScript puro**

Um pequeno app para buscar CEPs usando `fetch` diretamente na API gratuita ViaCep, retornando os dados de forma padronizada (logradouro, bairro, município, UF e DDD).

---

## 📑 Índice

1. [📋 Pré-requisitos](#pré-requisitos)  
2. [🚀 Como usar](#como-usar)  
3. [💡 Exemplo](#exemplo)  
4. [📁 Estrutura do projeto](#estrutura-do-projeto)  
5. [🤝 Contribuição](#contribuição)  
6. [📝 Licença](#licença)  
7. [📬 Contato](#contato)

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- Um navegador moderno com suporte à Fetch API  
- Acesso à internet para consumir o serviço [ViaCep](https://viacep.com.br)

---

## 🚀 Como usar

1. Clone ou baixe este repositório  
2. No seu HTML, inclua o arquivo `app.js`  
3. Configure um campo de input para o CEP  
4. Use a função `fetchViaCep(cep)` para buscar os dados

---

## 💡 Exemplo

```html
<input id="cep" placeholder="Digite o CEP (somente números)" />
<button onclick="buscarCep()">Buscar CEP</button>

<script src="app.js"></script>
<script>
  function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    fetchViaCep(cep)
      .then(dados => {
        if (dados.erro) {
          alert('CEP não encontrado');
        } else {
          console.log(dados);
          alert(`Endereço: ${dados.logradouro}, ${dados.bairro}, ${dados.localidade}-${dados.uf}`);
        }
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao consultar o CEP.');
      });
  }
</script>

/
├── README.md
├── index.html       ← interface simples com input e botão
└── app.js           ← lógica JavaScript para consultar ViaCep

🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork

Crie uma branch: git checkout -b minha-melhora

Faça commit: git commit -am 'Adicionei uma melhoria'

Envie para o fork: git push origin minha-melhora

Abra um Pull Request!

📝 Licença
MIT © Ariosto Leal — sinta-se livre para usar, modificar e redistribuir conforme os termos da licença MIT.

📬 Contato
Caso queira contribuir ou tenha dúvidas:

GitHub: @yostto-leal

Ou abra uma issue diretamente neste repositório

---


