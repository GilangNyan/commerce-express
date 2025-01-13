import { DatabaseUserRepository } from "../infrastructures/database/repositories/user/UserRepository";
import { GetAllUsers } from "../usecases/user/GetAllUsers";
import { UserDependencies } from "./registers/UserDependencies";

// Dependency Injection
class DIContainer {
  private static dependencies = new Map<string, unknown>();
  private static isInitialized = false

  static register<T>(key: string, dependency: T) {
    this.dependencies.set(key, dependency);
  }

  static resolve<T>(key: string): T {
    let dependency = this.dependencies.get(key);
    if (!this.isInitialized && !dependency) {
      this.init()
      dependency = this.dependencies.get(key);
      if (!dependency) {
        throw new Error(`Dependency with key ${key} is not registered.`);
      }
    }
    return dependency as T;
  }

  static reset() {
    this.dependencies.clear();
  }

  static init() {
    if (this.isInitialized) {
      console.log('Already initialized');
      return;
    }
    UserDependencies.register();

    this.isInitialized = true;
  }
}

export { DIContainer }