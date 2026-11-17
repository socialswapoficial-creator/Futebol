# Centro Esportivo HB — Escolinha de Futebol

Estrutura do site e painel administrativo da escolinha.

## Etapas do envio

O código, as páginas, os estilos, as configurações e as migrações do banco estão incluídos. As imagens e o vídeo serão adicionados posteriormente à pasta `public/`, preservando os caminhos usados pelo código.

## Executar

Requer Node.js 22.13 ou superior.

```sh
npm run install:ci
npm run dev
```

## Hospedagem

O projeto utiliza Vinext, Cloudflare Workers/D1 e autenticação do ChatGPT Sites. O banco de produção e as credenciais não são incluídos. Uma publicação em outro provedor, como a Vercel, exige adaptar o banco e a autenticação.
