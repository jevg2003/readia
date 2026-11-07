import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosisTable } from "@/components/landing-page/diagnosis-table";
import demoRows from "@/content/demo-rows.json";

export const metadata: Metadata = {
  title: "Diagnóstico de ejemplo | Readia",
  description: "Explora un diagnóstico de madurez en IA para una distribuidora ficticia.",
};

const roadmap = [
  {
    title: "Unificar el catálogo de inventario",
    description:
      "Acordar un código único por producto y revisar duplicados antes de entrenar un modelo con el historial de ventas.",
  },
  {
    title: "Asignar responsables y capacitar al equipo",
    description:
      "Nombrar un responsable de los datos de ventas y practicar cómo contrastar un pronóstico con el resultado real.",
  },
  {
    title: "Medir un piloto de pronóstico",
    description:
      "Probar con una categoría de productos. Comparar el error del pronóstico y los quiebres de inventario con el proceso actual.",
  },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold underline underline-offset-4">
          Volver a Readia
        </Link>
        <header className="mb-10 mt-8 max-w-3xl">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
            Datos de demostración · Empresa ficticia
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            ¿Está lista una distribuidora para pronosticar su demanda con IA?
          </h1>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            La distribuidora registra sus ventas, pero usa dos catálogos de inventario.
            Explora las brechas que detectó la evaluación y abre cada recomendación
            para ver qué haría el equipo después.
          </p>
        </header>

        <DiagnosisTable rows={demoRows} />

        <section aria-labelledby="roadmap-title" className="mt-10">
          <h2 id="roadmap-title" className="mb-4 text-2xl font-semibold">
            Hoja de ruta sugerida
          </h2>
          <ol className="space-y-3">
            {roadmap.map(({ title, description }, index) => (
              <li key={title} className="rounded-xl border bg-card p-4 text-card-foreground">
                <details>
                  <summary className="cursor-pointer font-semibold">
                    {index + 1}. {title}
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm md:text-base">
                    {description}
                  </p>
                </details>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
