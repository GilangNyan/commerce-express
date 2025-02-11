export abstract class BaseModel {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(id: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
