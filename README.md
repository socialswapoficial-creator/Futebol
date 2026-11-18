# Centro Esportivo HB — Prévia visual

Estrutura demonstrativa do site e do painel, usando Next.js com exportação estática para a Vercel. Sem login, banco de dados ou envio de formulários.

## Executar

Node.js 22 e npm.

```sh
npm ci
npm run dev
```

## Compilar

```sh
npm run build
```

O resultado estático é gerado em `out/`. As configurações da Vercel estão em `vercel.json`. O formulário apenas demonstra a interface e informa que nada foi enviado ou salvo. O painel mostra o estado vazio demonstrativo.

As imagens e o vídeo podem ser enviados em outra etapa, mantendo os caminhos `public/images/` e `public/videos/`. Os arquivos de banco e ferramentas da versão original ficam como referência e não são usados nesta prévia.
