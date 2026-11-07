# Readia

## Resumen

Base web de Readia, un proyecto académico para orientar la adopción de IA a partir de un diagnóstico de capacidades de TI. Esta rama incluye una página de presentación, datos de ejemplo del diagnóstico e inicio de sesión con Supabase.

## Alcance de esta rama

- La [página de presentación](src/app/page.tsx) explica la propuesta y muestra un ejemplo de niveles, brechas y prioridades.
- La ruta [`/demo`](src/app/demo/page.tsx) muestra un diagnóstico y una hoja de ruta para una empresa ficticia, con datos de [demo-rows.json](src/content/demo-rows.json).
- Las rutas autenticadas incluyen una estructura inicial de panel en [src/app](src/app).

## Desarrollo local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Completa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` con la configuración de cliente de un proyecto de pruebas. Abre `http://localhost:3000`. La aplicación usa Next.js, TypeScript y Supabase.

Puedes abrir `/demo` sin configurar Supabase. Para probar el inicio de sesión, habilita los proveedores Google y GitHub en Supabase y autoriza la URL `/auth/callback` del sitio.

## English summary

The web foundation for Readia, an academic project exploring how an IT readiness assessment can guide AI adoption. This branch includes a landing page, sample assessment data, and Supabase sign-in.
