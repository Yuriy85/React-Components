export function pageCount(totalCount: number, countPerPage: number): number {
  return Math.ceil(totalCount / countPerPage);
}

export function cardsOnPage<T>(
  params: T[],
  pageCount: number,
  countPerPage: number,
  page: number
): T[] {
  const pages: T[][] = Array(pageCount).fill('');
  const myParams: T[] = [...params];
  const newPages = pages.map(() => myParams.splice(0, countPerPage));
  return newPages[page - 1] || [];
}
