# 🚀 Guia de Deploy - Luz do Céu Kids BR

## Configurações do Netlify

### Configurações Manuais no Netlify (se necessário):

1. **Build Settings:**
   - Build command: `chmod +x build.sh && ./build.sh`
   - Publish directory: `dist`
   - Base directory: (deixar vazio)

2. **Environment Variables:**
   - `NODE_VERSION`: `18.19.0`
   - `NPM_FLAGS`: `--legacy-peer-deps`
   - `CI`: `false`

3. **Deploy Settings:**
   - Branch to deploy: `main`
   - Auto publishing: Enabled

## Troubleshooting

### Se o build falhar:

1. **Erro de dependências:**
   - Verificar se o `--legacy-peer-deps` está sendo usado
   - Deletar `node_modules` e `package-lock.json` localmente
   - Rodar `npm install --legacy-peer-deps`

2. **Erro de versão do Node:**
   - Verificar se está usando Node 18+
   - Confirmar se `.nvmrc` e `.node-version` estão no repositório

3. **Erro de build do Vite:**
   - Verificar se todas as dependências estão instaladas
   - Testar build localmente: `npm run build`

## Arquivos Importantes para Deploy:

- ✅ `netlify.toml` - Configurações do Netlify
- ✅ `.nvmrc` - Versão do Node para nvm
- ✅ `.node-version` - Versão do Node alternativa
- ✅ `build.sh` - Script de build customizado
- ✅ `package.json` - Dependências e scripts

## Comandos Locais para Testar:

```bash
# Instalar dependências
npm install --legacy-peer-deps

# Testar build
npm run build

# Testar preview
npm run preview
```

## URLs Úteis:

- **Netlify Dashboard:** https://app.netlify.com/
- **Deploy Logs:** Disponível no dashboard do Netlify
- **Site Preview:** Gerado automaticamente após deploy
