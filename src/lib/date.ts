export interface Bilingual {
  es: string;
  en: string;
}

const MONTHS_ES = [
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

const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** Formatea una fecha "YYYY-MM" como "Mes YYYY" en los dos idiomas. */
export function formatMonthYear(value: string): Bilingual {
  const [year, month] = value.split('-').map(Number);
  return {
    es: `${MONTHS_ES[(month ?? 1) - 1] ?? ''} ${year}`,
    en: `${MONTHS_EN[(month ?? 1) - 1] ?? ''} ${year}`,
  };
}

/** Arma el rango "inicio — fin" para experiencia/educación. Sin endDate = "Presente"/"Present". */
export function formatDateRange(startDate: string, endDate?: string): Bilingual {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : { es: 'Presente', en: 'Present' };
  return {
    es: `${start.es} — ${end.es}`,
    en: `${start.en} — ${end.en}`,
  };
}
