# 🚀 Deployment Guide - Root Block Design System Demo

## Despliegue en Vercel

### **Método 1: CLI (Más rápido)**

1. **Instalar Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login en Vercel**:
```bash
vercel login
```

3. **Desplegar desde la raíz del proyecto**:
```bash
cd /Users/moofarrif/Documents/sb/front/dev/web-components/nx-wc/root-block-wc
vercel
```

4. **Seguir el wizard**:
   - Set up and deploy? **Yes**
   - Which scope? **Tu cuenta**
   - Link to existing project? **No**
   - Project name: **root-block-design-system** (o el que prefieras)
   - In which directory is your code located? **.**
   - Want to override settings? **No** (usará `vercel.json`)

5. **Deploy a producción**:
```bash
vercel --prod
```

---

### **Método 2: GitHub + Vercel Dashboard (Recomendado para CI/CD)**

1. **Push tu código a GitHub**:
```bash
cd /Users/moofarrif/Documents/sb/front/dev/web-components/nx-wc/root-block-wc
git init
git add .
git commit -m "Initial commit: Root Block Design System"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/root-block-wc.git
git push -u origin main
```

2. **Importar en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de `vercel.json`
   - Click en "Deploy"

3. **Configuración automática**:
   - Vercel usará los settings de `vercel.json`
   - Cada push a `main` desplegará automáticamente
   - Los PRs obtendrán preview deployments

---

## 📋 **Configuración Incluida**

El archivo `vercel.json` ya está configurado con:

```json
{
  "buildCommand": "npm run build:tokens && npm run build:ui && npm run demo:build",
  "outputDirectory": "dist/apps/demo",
  "installCommand": "npm install",
  "framework": null,
  "devCommand": "npm run demo"
}
```

### **¿Qué hace?**
1. **Build Command**: Compila tokens → UI → demo en orden
2. **Output Directory**: Apunta a donde Vite genera el build del demo
3. **Install Command**: Instala todas las dependencias del monorepo
4. **Framework**: `null` porque es una app Vite personalizada

---

## 🔧 **Solución de Problemas**

### **Error: "Build failed"**
```bash
# Verifica que el build funcione localmente:
npm run build:tokens
npm run build:ui
npm run demo:build

# Si funciona local pero falla en Vercel, revisa los logs
```

### **Error: "Output directory not found"**
```bash
# Verifica que dist/apps/demo existe después del build:
ls -la dist/apps/demo
```

### **Error: "Module not found"**
- Asegúrate de que todas las dependencias estén en `package.json`
- Vercel corre `npm install` en la raíz del proyecto

---

## 🌐 **URLs Esperadas**

Después del despliegue, tendrás:

- **Production**: `https://root-block-design-system.vercel.app`
- **Preview** (PRs): `https://root-block-design-system-git-branch.vercel.app`

---

## 📊 **Ventajas de Vercel**

✅ **Deploy automático** en cada push  
✅ **Preview deployments** para PRs  
✅ **SSL gratis** con certificado automático  
✅ **CDN global** con edge caching  
✅ **Analytics** incluido  
✅ **Custom domains** gratis  
✅ **Rollback** a versiones anteriores con un click  

---

## 🔄 **Actualizar el Deploy**

### **Con CLI**:
```bash
vercel --prod
```

### **Con GitHub** (automático):
```bash
git add .
git commit -m "Update demo"
git push
```

Vercel desplegará automáticamente en 1-2 minutos.

---

## 🎨 **Demo en Vivo**

Una vez desplegado, tu demo estará disponible en:
- **https://TU-PROYECTO.vercel.app**

Mostrará:
- 336 casos de botones (4 variantes × 3 tipos × 7 estados × 4 configs)
- Selector de 6 marcas
- Selector de temas (light/dark)
- Headers jerárquicos
- Iconos de plus en círculo

---

## 📝 **Variables de Entorno** (si las necesitas)

Si en el futuro necesitas variables de entorno:

1. **En Vercel Dashboard**:
   - Settings → Environment Variables
   - Agrega `VARIABLE_NAME` = `value`

2. **En el código**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. **En vercel.json** (opcional):
```json
{
  "env": {
    "VITE_API_URL": "https://api.example.com"
  }
}
```

---

## 🎯 **Próximos Pasos Recomendados**

1. ✅ Desplegar demo
2. ✅ Configurar custom domain (opcional)
3. ✅ Habilitar Analytics en Vercel
4. ✅ Configurar GitHub Actions para tests antes del deploy
5. ✅ Agregar badge de status en README:
   ```md
   [![Deploy](https://vercel.com/button)](https://vercel.com/import/project?template=...)
   ```

---

## 📚 **Recursos**

- [Vercel Docs](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Deploy with GitHub](https://vercel.com/docs/git)

---

**¡Tu Design System estará en vivo en minutos!** 🚀

