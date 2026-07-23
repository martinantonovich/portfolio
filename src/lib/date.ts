const MONTHS = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

/** Formatea una fecha "YYYY-MM" como "Mes YYYY" (ej: "2024-03" -> "marzo 2024"). */
export function formatMonthYear(value: string): string {
  const [year, month] = value.split('-').map(Number);
  const monthName = MONTHS[(month ?? 1) - 1] ?? '';
  return `${monthName} ${year}`;
}

/** Arma el rango "inicio — fin" para experiencia/educación. Sin endDate = "Presente". */
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : 'Presente';
  return `${start} — ${end}`;
}
