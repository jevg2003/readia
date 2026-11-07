# Readia

Proyecto académico sobre diagnóstico de capacidades de TI para orientar la adopción de IA. Esta base web incluye una página de presentación, una demostración con datos ficticios e inicio de sesión con Supabase cuando está configurado.

[Ver Readia](https://readia.vercel.app/) · [Abrir la demostración](https://readia.vercel.app/demo) · [Código fuente](https://github.com/jevg2003/readia)

## Alcance y estado

- La [página de presentación](src/app/page.tsx) explica la propuesta y muestra un ejemplo de niveles, brechas y prioridades.
- La ruta [`/demo`](src/app/demo/page.tsx) presenta un diagnóstico y una hoja de ruta para una empresa ficticia. Los datos de [demo-rows.json](src/content/demo-rows.json) y las recomendaciones son ilustrativos.
- Las rutas autenticadas incluyen una estructura inicial de panel en [src/app](src/app).

La demostración muestra cómo consultar un diagnóstico de ejemplo. El alcance publicado no incluye un motor que evalúe empresas reales ni resultados de adopción de IA.

## Decisiones técnicas

- Next.js App Router y React organizan las páginas y los componentes; TypeScript define sus tipos. Consulta [package.json](package.json).
- El diagnóstico de ejemplo utiliza un archivo JSON y una tabla reutilizable en [diagnosis-table.tsx](src/components/landing-page/diagnosis-table.tsx).
- [middleware.ts](src/middleware.ts) deja disponible `/demo` sin configurar Supabase. Las rutas privadas conservan el flujo de inicio de sesión.
- Los clientes de Supabase para navegador y servidor están separados en [src/utils/supabase](src/utils/supabase).

## Aportes de Jorge Velásquez

Jorge participó en el desarrollo junto con el equipo. En el [commit de la demostración](https://github.com/jevg2003/readia/commit/60d728a8aac9ec3e97c0f6ae840f5e39092a238d), atribuido a `jevg2003`, añadió la ruta `/demo`, ajustó la tabla y los datos ilustrativos y adaptó el acceso público cuando falta la configuración de Supabase. Esta contribución corresponde a la base web y la presentación del diagnóstico.

## Desarrollo local

Instala Node.js y pnpm. Para explorar la demostración sin autenticación:

```bash
git clone https://github.com/jevg2003/readia.git
cd readia
pnpm install
pnpm dev
```

Abre `http://localhost:3000/demo`. Puedes ejecutar este recorrido sin un archivo de entorno de Supabase.

Para probar el inicio de sesión, crea `.env.local` a partir de [.env.example](.env.example) y sustituye los valores de ejemplo por la configuración de cliente de un proyecto Supabase de pruebas:

```dotenv
NODE_ENV=development
NEXT_PUBLIC_SUPABASE_URL=<URL_DEL_PROYECTO_DE_PRUEBAS>
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<CLAVE_PUBLICA_DEL_PROYECTO_DE_PRUEBAS>
```

Habilita los proveedores Google y GitHub en Supabase y autoriza `http://localhost:3000/auth/callback` para la prueba local. Usa únicamente la clave pública de cliente en estas variables.

Los scripts de [package.json](package.json) incluyen:

```bash
pnpm build
pnpm start
```

Al revisar la demo, comprueba que los datos estén identificados como ficticios y abre las recomendaciones de la hoja de ruta.

## English summary

Readia is an academic web foundation exploring how an IT readiness assessment can guide AI adoption. It includes a landing page, a public demonstration with fictional assessment data and a Supabase sign-in flow when configured.
