export class Client {
  id: number;
  name: string;
  lastname: string;
  email: string;
  createdAt: Date;

  public set setName(value: string) {
    this.name = value;
  }
  public getName(): string {
    return this.name;
  }

  public setLastName(value: string) {
    this.lastname = value;
  }
  public getLastName(): string {
    return this.lastname;
  }

  public setEmail(value: string) {
    this.email = value;
  }
  public getEmail(): string {
    return this.email;
  }

  public setCreatedAt(value: Date) {
    this.createdAt = value;
  }
  public getCreatedAt(): Date {
    return this.createdAt;
  }
}
