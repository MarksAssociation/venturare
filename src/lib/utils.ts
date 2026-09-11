export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getReadingTimeText(minutes: number): string {
  return `${minutes} min de leitura`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    estrategia: 'Estratégia',
    tecnologia: 'Tecnologia',
    transformacao: 'Transformação',
    execucao: 'Execução',
  };
  return labels[category] || category;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    estrategia: 'bg-venturare-green/10 text-venturare-green',
    tecnologia: 'bg-venturare-navy/30 text-venturare-muted',
    transformacao: 'bg-venturare-copper/10 text-venturare-copper',
    execucao: 'bg-venturare-graphite text-venturare-muted',
  };
  return colors[category] || 'bg-venturare-graphite text-venturare-muted';
}
