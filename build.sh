#!/bin/bash

# Script de build para Netlify
echo "🚀 Iniciando build do projeto..."

# Verificar versão do Node
echo "📋 Versão do Node: $(node --version)"
echo "📋 Versão do NPM: $(npm --version)"

# Limpar cache do npm
echo "🧹 Limpando cache do npm..."
npm cache clean --force

# Instalar dependências
echo "📦 Instalando dependências..."
npm ci --legacy-peer-deps

# Fazer build
echo "🔨 Fazendo build do projeto..."
npm run build

echo "✅ Build concluído com sucesso!"
