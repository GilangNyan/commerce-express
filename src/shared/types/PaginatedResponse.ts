export class PaginatedResponse<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;

  constructor(data: T[], total: number, currentPage: number, pageSize: number) {
    this.data = data;
    this.total = total;
    this.totalPages = Math.ceil(total / pageSize);
    this.currentPage = currentPage;
    this.pageSize = pageSize;
  }
}
