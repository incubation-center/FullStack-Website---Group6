export function getPaginationResult(
    totalCount,
    perPage,
    resultLength,
    currentPage = 1,
) {
  return {
    total: totalCount,
    totalPage: Math.ceil(totalCount / perPage),
    currentPage: currentPage,
    perPage: perPage,
    from: (currentPage - 1) * perPage + 1,
    to: (currentPage - 1) * perPage + resultLength
  }
}
