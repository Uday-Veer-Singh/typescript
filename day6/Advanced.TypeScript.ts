/** @format */

// ============================================================================
// PROFESSIONAL TYPESCRIPT - ADVANCED PATTERNS & BEST PRACTICES
// ============================================================================

// ----------------------------------------------------------------------------
// 1. ADVANCED TYPES
// ----------------------------------------------------------------------------

// --- Type Aliases vs Interfaces (When to use which) ---
// Type Alias: Best for unions, primitives, tuples
type UserID = string | number;
type Coordinates = [number, number]; // Tuple
type Status = "pending" | "loading" | "success" | "error"; // Union literal

// Interface: Best for object shapes, can be extended/merged
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// --- Intersection Types ---
interface Identifiable {
  id: string;
}

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

// Combine multiple types
type BaseEntity = Identifiable & Timestamps;

const user: BaseEntity = {
  id: "123",
  createdAt: new Date(),
  updatedAt: new Date(),
};

// --- Utility Types (Built-in) ---
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
}

// Partial<T> - All properties optional
type UpdateUserDto = Partial<User>; // { id?, name?, email?, password?, age? }

// Required<T> - All properties required
type RequiredUser = Required<UpdateUserDto>;

// Pick<T, K> - Select specific properties
type UserPublic = Pick<User, "id" | "name" | "email">;

// Omit<T, K> - Exclude specific properties
type UserCreateDto = Omit<User, "id">; // Exclude id

// Readonly<T> - Make all properties read-only
type ImmutableUser = Readonly<User>;

// Record<K, T> - Object with specific key/value types
type UserRoles = Record<string, boolean>; // { admin: true, editor: false }

// --- Custom Utility Types ---
// Nullable<T> - Add null to type
type Nullable<T> = T | null;

// NonNullable<T> - Remove null/undefined
type Strict<T> = NonNullable<T>;

// DeepPartial<T> - Recursively make all properties optional
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ----------------------------------------------------------------------------
// 2. GENERICS - ADVANCED PATTERNS
// ----------------------------------------------------------------------------

// --- Generic Constraints ---
interface HasId {
  id: string | number;
}

// T must extend HasId
function processEntity<T extends HasId>(entity: T): T {
  console.log(`Processing entity with ID: ${entity.id}`);
  return entity;
}

// --- Multiple Generic Parameters ---
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

type StringNumberPair = KeyValuePair<string, number>;

// --- Generic Defaults ---
interface Cache<T = string> {
  get(): T;
  set(value: T): void;
}

// --- Conditional Types ---
// Ternary-like syntax for types
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// --- Infer Keyword ---
// Extract return type from function type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Extract promise resolved value
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// --- Mapped Types ---
// Transform existing types
type ReadonlyVersion<T> = {
  readonly [P in keyof T]: T[P];
};

type OptionalVersion<T> = {
  [P in keyof T]?: T[P];
};

// Template Literal Types (TS 4.1+)
type EventName = "on" | "off" | "once";
type EventType = "click" | "scroll" | "hover";
type EventMethods = `${EventName}${Capitalize<EventType>}`;
// "onClick" | "onScroll" | "onHover" | "offClick" | ...

// ----------------------------------------------------------------------------
// 3. TYPE GUARDS & NARROWING
// ----------------------------------------------------------------------------

// --- Type Predicates ---
interface Dog {
  breed: string;
  bark(): void;
}

interface Cat {
  purr(): void;
}

type Animal = Dog | Cat;

// Custom type guard function
function isDog(animal: Animal): animal is Dog {
  return "bark" in animal;
}

function handleAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.bark(); // TypeScript knows it's a Dog
  } else {
    animal.purr(); // TypeScript knows it's a Cat
  }
}

// --- Discriminated Unions ---
interface SuccessResponse {
  status: "success";
  data: string;
}

interface ErrorResponse {
  status: "error";
  error: string;
}

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response) {
  // TypeScript narrows based on 'status' discriminant
  if (response.status === "success") {
    console.log(response.data); // Only accessible here
  } else {
    console.log(response.error); // Only accessible here
  }
}

// --- Exhaustive Checks ---
function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function handleStatus(status: Status) {
  switch (status) {
    case "pending":
      break;
    case "loading":
      break;
    case "success":
      break;
    case "error":
      break;
    default:
      assertNever(status); // Ensures all cases are handled
  }
}

// ----------------------------------------------------------------------------
// 4. ADVANCED INTERFACE PATTERNS
// ----------------------------------------------------------------------------

// --- Interface Merging ---
interface Config {
  apiUrl: string;
}

// Same interface name merges declarations
interface Config {
  timeout: number;
}

// Config now has both properties
const config: Config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

// --- Interface Extension ---
interface BaseUser {
  id: string;
  email: string;
}

interface AdminUser extends BaseUser {
  permissions: string[];
}

interface SuperAdmin extends AdminUser {
  canDeleteUsers: boolean;
}

// --- Implementing Multiple Interfaces ---
interface Loggable {
  log(message: string): void;
}

interface Serializable {
  serialize(): string;
}

class Logger implements Loggable, Serializable {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  serialize(): string {
    return JSON.stringify(this);
  }
}

// ----------------------------------------------------------------------------
// 5. DESIGN PATTERNS IN TYPESCRIPT
// ----------------------------------------------------------------------------

// --- Factory Pattern with Generics ---
interface Product {
  name: string;
  price: number;
}

class DigitalProduct implements Product {
  constructor(
    public name: string,
    public price: number,
    public downloadUrl: string
  ) {}
}

class PhysicalProduct implements Product {
  constructor(
    public name: string,
    public price: number,
    public shippingAddress: string
  ) {}
}

type ProductType = "digital" | "physical";

class ProductFactory {
  static create<T extends Product>(
    type: ProductType,
    name: string,
    price: number,
    extra: string
  ): T {
    if (type === "digital") {
      return new DigitalProduct(name, price, extra) as T;
    }
    return new PhysicalProduct(name, price, extra) as T;
  }
}

// --- Builder Pattern ---
interface QueryBuilder<T> {
  select(fields: (keyof T)[]): QueryBuilder<T>;
  where(condition: Partial<T>): QueryBuilder<T>;
  orderBy(field: keyof T, direction?: "asc" | "desc"): QueryBuilder<T>;
  limit(count: number): QueryBuilder<T>;
  build(): string;
}

class SqlQueryBuilder<T extends Record<string, any>>
  implements QueryBuilder<T>
{
  private tableName: string;
  private selectedFields: (keyof T)[] = [];
  private conditions: Partial<T> = {};
  private orderField?: keyof T;
  private orderDirection: "asc" | "desc" = "asc";
  private limitCount?: number;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  select(fields: (keyof T)[]): QueryBuilder<T> {
    this.selectedFields = fields;
    return this;
  }

  where(condition: Partial<T>): QueryBuilder<T> {
    this.conditions = condition;
    return this;
  }

  orderBy(field: keyof T, direction: "asc" | "desc" = "asc"): QueryBuilder<T> {
    this.orderField = field;
    this.orderDirection = direction;
    return this;
  }

  limit(count: number): QueryBuilder<T> {
    this.limitCount = count;
    return this;
  }

  build(): string {
    const fields =
      this.selectedFields.length > 0
        ? this.selectedFields.join(", ")
        : "*";
    let query = `SELECT ${fields} FROM ${this.tableName}`;

    if (Object.keys(this.conditions).length > 0) {
      const whereClause = Object.entries(this.conditions)
        .map(([key, value]) => `${key} = '${value}'`)
        .join(" AND ");
      query += ` WHERE ${whereClause}`;
    }

    if (this.orderField) {
      query += ` ORDER BY ${String(this.orderField)} ${this.orderDirection}`;
    }

    if (this.limitCount) {
      query += ` LIMIT ${this.limitCount}`;
    }

    return query;
  }
}

// Usage
const query = new SqlQueryBuilder<User>("users")
  .select(["id", "name", "email"])
  .where({ age: 30 })
  .orderBy("name", "desc")
  .limit(10)
  .build();

console.log(query);
// SELECT id, name, email FROM users WHERE age = '30' ORDER BY name desc LIMIT 10

// --- Strategy Pattern ---
interface PaymentStrategy {
  processPayment(amount: number): Promise<boolean>;
}

class CreditCardPayment implements PaymentStrategy {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via Credit Card`);
    return true;
  }
}

class PayPalPayment implements PaymentStrategy {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing $${amount} via PayPal`);
    return true;
  }
}

class PaymentContext {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  async pay(amount: number): Promise<boolean> {
    return this.strategy.processPayment(amount);
  }
}

// ----------------------------------------------------------------------------
// 6. ADVANCED FUNCTION PATTERNS
// ----------------------------------------------------------------------------

// --- Function Overloads ---
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string, b: number): string;
function combine(a: number, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// --- Currying ---
type CurriedAdd = (a: number) => (b: number) => (c: number) => number;

const add: CurriedAdd = (a) => (b) => (c) => a + b + c;
const result = add(1)(2)(3); // 6

// --- Higher-Order Functions with Generics ---
function mapWithIndex<T, U>(
  array: T[],
  fn: (item: T, index: number) => U
): U[] {
  return array.map(fn);
}

// --- Async Retry Pattern ---
async function retry<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay);
  }
}

// ----------------------------------------------------------------------------
// 7. DECORATORS (Experimental but widely used)
// ----------------------------------------------------------------------------

// Enable with "experimentalDecorators": true in tsconfig

function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with args:`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }
}

// ----------------------------------------------------------------------------
// 8. BEST PRACTICES
// ----------------------------------------------------------------------------

// ✅ DO: Use strict mode in tsconfig.json
// {
//   "compilerOptions": {
//     "strict": true,
//     "noImplicitAny": true,
//     "strictNullChecks": true,
//     "noUnusedLocals": true,
//     "noUnusedParameters": true
//   }
// }

// ✅ DO: Prefer interfaces for object shapes
interface CreateUserRequest {
  email: string;
  password: string;
}

// ✅ DO: Use type guards for runtime safety
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ✅ DO: Use branded types for primitives
type UserId = string & { readonly brand: unique symbol };
type Email = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}

// ✅ DO: Use const assertions for literal types
const API_ENDPOINTS = {
  users: "/api/users",
  posts: "/api/posts",
} as const;

// ✅ DON'T: Use 'any' - use 'unknown' instead
function safeParse(json: string): unknown {
  return JSON.parse(json);
}

// ✅ DO: Use template literal types for API routes
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiRoute = `/api/${"users" | "posts"}/${string}`;

interface ApiRequest {
  method: HttpMethod;
  route: ApiRoute;
}

// ----------------------------------------------------------------------------
// 9. REAL-WORLD EXAMPLE: TYPE-SAFE API CLIENT
// ----------------------------------------------------------------------------

interface ApiConfig {
  baseUrl: string;
  timeout: number;
  headers: Record<string, string>;
}

interface RequestConfig {
  method: HttpMethod;
  endpoint: string;
  body?: unknown;
  headers?: Record<string, string>;
}

class ApiClient {
  constructor(private config: ApiConfig) {}

  private async request<T>(config: RequestConfig): Promise<T> {
    const url = `${this.config.baseUrl}${config.endpoint}`;
    const response = await fetch(url, {
      method: config.method,
      headers: {
        ...this.config.headers,
        ...config.headers,
        "Content-Type": "application/json",
      },
      body: config.body ? JSON.stringify(config.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>({ method: "GET", endpoint });
  }

  post<T>(endpoint: string, body: unknown): Promise<T> {
    return this.request<T>({ method: "POST", endpoint, body });
  }

  put<T>(endpoint: string, body: unknown): Promise<T> {
    return this.request<T>({ method: "PUT", endpoint, body });
  }

  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>({ method: "DELETE", endpoint });
  }
}

// Usage with type safety
interface UserResponse {
  id: string;
  name: string;
  email: string;
}

const api = new ApiClient({
  baseUrl: "https://api.example.com",
  timeout: 5000,
  headers: { Authorization: "Bearer token" },
});

// TypeScript infers the response type
async function fetchUser(id: string) {
  const user = await api.get<UserResponse>(`/users/${id}`);
  console.log(user.name); // Type-safe access
}

// ============================================================================
// END OF PROFESSIONAL TYPESCRIPT GUIDE
// ============================================================================
