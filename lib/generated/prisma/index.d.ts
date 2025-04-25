
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model CourseReview
 * 
 */
export type CourseReview = $Result.DefaultSelection<Prisma.$CourseReviewPayload>
/**
 * Model CourseFavorite
 * 
 */
export type CourseFavorite = $Result.DefaultSelection<Prisma.$CourseFavoritePayload>
/**
 * Model CoursePurchase
 * 
 */
export type CoursePurchase = $Result.DefaultSelection<Prisma.$CoursePurchasePayload>
/**
 * Model CourseCategory
 * 
 */
export type CourseCategory = $Result.DefaultSelection<Prisma.$CourseCategoryPayload>
/**
 * Model CourseTeacher
 * 
 */
export type CourseTeacher = $Result.DefaultSelection<Prisma.$CourseTeacherPayload>
/**
 * Model CourseTag
 * 
 */
export type CourseTag = $Result.DefaultSelection<Prisma.$CourseTagPayload>
/**
 * Model CourseTagOnCourse
 * 
 */
export type CourseTagOnCourse = $Result.DefaultSelection<Prisma.$CourseTagOnCoursePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseContent
 * 
 */
export type CourseContent = $Result.DefaultSelection<Prisma.$CourseContentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseReview`: Exposes CRUD operations for the **CourseReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseReviews
    * const courseReviews = await prisma.courseReview.findMany()
    * ```
    */
  get courseReview(): Prisma.CourseReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseFavorite`: Exposes CRUD operations for the **CourseFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseFavorites
    * const courseFavorites = await prisma.courseFavorite.findMany()
    * ```
    */
  get courseFavorite(): Prisma.CourseFavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursePurchase`: Exposes CRUD operations for the **CoursePurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursePurchases
    * const coursePurchases = await prisma.coursePurchase.findMany()
    * ```
    */
  get coursePurchase(): Prisma.CoursePurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseCategory`: Exposes CRUD operations for the **CourseCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseCategories
    * const courseCategories = await prisma.courseCategory.findMany()
    * ```
    */
  get courseCategory(): Prisma.CourseCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseTeacher`: Exposes CRUD operations for the **CourseTeacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseTeachers
    * const courseTeachers = await prisma.courseTeacher.findMany()
    * ```
    */
  get courseTeacher(): Prisma.CourseTeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseTag`: Exposes CRUD operations for the **CourseTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseTags
    * const courseTags = await prisma.courseTag.findMany()
    * ```
    */
  get courseTag(): Prisma.CourseTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseTagOnCourse`: Exposes CRUD operations for the **CourseTagOnCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseTagOnCourses
    * const courseTagOnCourses = await prisma.courseTagOnCourse.findMany()
    * ```
    */
  get courseTagOnCourse(): Prisma.CourseTagOnCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseContent`: Exposes CRUD operations for the **CourseContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseContents
    * const courseContents = await prisma.courseContent.findMany()
    * ```
    */
  get courseContent(): Prisma.CourseContentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    CourseReview: 'CourseReview',
    CourseFavorite: 'CourseFavorite',
    CoursePurchase: 'CoursePurchase',
    CourseCategory: 'CourseCategory',
    CourseTeacher: 'CourseTeacher',
    CourseTag: 'CourseTag',
    CourseTagOnCourse: 'CourseTagOnCourse',
    Course: 'Course',
    CourseContent: 'CourseContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "courseReview" | "courseFavorite" | "coursePurchase" | "courseCategory" | "courseTeacher" | "courseTag" | "courseTagOnCourse" | "course" | "courseContent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      CourseReview: {
        payload: Prisma.$CourseReviewPayload<ExtArgs>
        fields: Prisma.CourseReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          findFirst: {
            args: Prisma.CourseReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          findMany: {
            args: Prisma.CourseReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          create: {
            args: Prisma.CourseReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          createMany: {
            args: Prisma.CourseReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          delete: {
            args: Prisma.CourseReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          update: {
            args: Prisma.CourseReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          deleteMany: {
            args: Prisma.CourseReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>[]
          }
          upsert: {
            args: Prisma.CourseReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseReviewPayload>
          }
          aggregate: {
            args: Prisma.CourseReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseReview>
          }
          groupBy: {
            args: Prisma.CourseReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CourseReviewCountAggregateOutputType> | number
          }
        }
      }
      CourseFavorite: {
        payload: Prisma.$CourseFavoritePayload<ExtArgs>
        fields: Prisma.CourseFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          findFirst: {
            args: Prisma.CourseFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          findMany: {
            args: Prisma.CourseFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>[]
          }
          create: {
            args: Prisma.CourseFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          createMany: {
            args: Prisma.CourseFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>[]
          }
          delete: {
            args: Prisma.CourseFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          update: {
            args: Prisma.CourseFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          deleteMany: {
            args: Prisma.CourseFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseFavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>[]
          }
          upsert: {
            args: Prisma.CourseFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseFavoritePayload>
          }
          aggregate: {
            args: Prisma.CourseFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseFavorite>
          }
          groupBy: {
            args: Prisma.CourseFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<CourseFavoriteCountAggregateOutputType> | number
          }
        }
      }
      CoursePurchase: {
        payload: Prisma.$CoursePurchasePayload<ExtArgs>
        fields: Prisma.CoursePurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursePurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursePurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          findFirst: {
            args: Prisma.CoursePurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursePurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          findMany: {
            args: Prisma.CoursePurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          create: {
            args: Prisma.CoursePurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          createMany: {
            args: Prisma.CoursePurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursePurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          delete: {
            args: Prisma.CoursePurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          update: {
            args: Prisma.CoursePurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          deleteMany: {
            args: Prisma.CoursePurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursePurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursePurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          upsert: {
            args: Prisma.CoursePurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          aggregate: {
            args: Prisma.CoursePurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursePurchase>
          }
          groupBy: {
            args: Prisma.CoursePurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursePurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursePurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<CoursePurchaseCountAggregateOutputType> | number
          }
        }
      }
      CourseCategory: {
        payload: Prisma.$CourseCategoryPayload<ExtArgs>
        fields: Prisma.CourseCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findFirst: {
            args: Prisma.CourseCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          findMany: {
            args: Prisma.CourseCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          create: {
            args: Prisma.CourseCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          createMany: {
            args: Prisma.CourseCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          delete: {
            args: Prisma.CourseCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          update: {
            args: Prisma.CourseCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          deleteMany: {
            args: Prisma.CourseCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>[]
          }
          upsert: {
            args: Prisma.CourseCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseCategoryPayload>
          }
          aggregate: {
            args: Prisma.CourseCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseCategory>
          }
          groupBy: {
            args: Prisma.CourseCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCategoryCountAggregateOutputType> | number
          }
        }
      }
      CourseTeacher: {
        payload: Prisma.$CourseTeacherPayload<ExtArgs>
        fields: Prisma.CourseTeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseTeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseTeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          findFirst: {
            args: Prisma.CourseTeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseTeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          findMany: {
            args: Prisma.CourseTeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>[]
          }
          create: {
            args: Prisma.CourseTeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          createMany: {
            args: Prisma.CourseTeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseTeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>[]
          }
          delete: {
            args: Prisma.CourseTeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          update: {
            args: Prisma.CourseTeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          deleteMany: {
            args: Prisma.CourseTeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseTeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseTeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>[]
          }
          upsert: {
            args: Prisma.CourseTeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTeacherPayload>
          }
          aggregate: {
            args: Prisma.CourseTeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseTeacher>
          }
          groupBy: {
            args: Prisma.CourseTeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseTeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseTeacherCountArgs<ExtArgs>
            result: $Utils.Optional<CourseTeacherCountAggregateOutputType> | number
          }
        }
      }
      CourseTag: {
        payload: Prisma.$CourseTagPayload<ExtArgs>
        fields: Prisma.CourseTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          findFirst: {
            args: Prisma.CourseTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          findMany: {
            args: Prisma.CourseTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[]
          }
          create: {
            args: Prisma.CourseTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          createMany: {
            args: Prisma.CourseTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[]
          }
          delete: {
            args: Prisma.CourseTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          update: {
            args: Prisma.CourseTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          deleteMany: {
            args: Prisma.CourseTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>[]
          }
          upsert: {
            args: Prisma.CourseTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagPayload>
          }
          aggregate: {
            args: Prisma.CourseTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseTag>
          }
          groupBy: {
            args: Prisma.CourseTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseTagCountArgs<ExtArgs>
            result: $Utils.Optional<CourseTagCountAggregateOutputType> | number
          }
        }
      }
      CourseTagOnCourse: {
        payload: Prisma.$CourseTagOnCoursePayload<ExtArgs>
        fields: Prisma.CourseTagOnCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseTagOnCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseTagOnCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          findFirst: {
            args: Prisma.CourseTagOnCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseTagOnCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          findMany: {
            args: Prisma.CourseTagOnCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>[]
          }
          create: {
            args: Prisma.CourseTagOnCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          createMany: {
            args: Prisma.CourseTagOnCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseTagOnCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>[]
          }
          delete: {
            args: Prisma.CourseTagOnCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          update: {
            args: Prisma.CourseTagOnCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseTagOnCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseTagOnCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseTagOnCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseTagOnCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTagOnCoursePayload>
          }
          aggregate: {
            args: Prisma.CourseTagOnCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseTagOnCourse>
          }
          groupBy: {
            args: Prisma.CourseTagOnCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseTagOnCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseTagOnCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseTagOnCourseCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseContent: {
        payload: Prisma.$CourseContentPayload<ExtArgs>
        fields: Prisma.CourseContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          findFirst: {
            args: Prisma.CourseContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          findMany: {
            args: Prisma.CourseContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>[]
          }
          create: {
            args: Prisma.CourseContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          createMany: {
            args: Prisma.CourseContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>[]
          }
          delete: {
            args: Prisma.CourseContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          update: {
            args: Prisma.CourseContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          deleteMany: {
            args: Prisma.CourseContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>[]
          }
          upsert: {
            args: Prisma.CourseContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseContentPayload>
          }
          aggregate: {
            args: Prisma.CourseContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseContent>
          }
          groupBy: {
            args: Prisma.CourseContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseContentCountArgs<ExtArgs>
            result: $Utils.Optional<CourseContentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    courseReview?: CourseReviewOmit
    courseFavorite?: CourseFavoriteOmit
    coursePurchase?: CoursePurchaseOmit
    courseCategory?: CourseCategoryOmit
    courseTeacher?: CourseTeacherOmit
    courseTag?: CourseTagOmit
    courseTagOnCourse?: CourseTagOnCourseOmit
    course?: CourseOmit
    courseContent?: CourseContentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    account: number
    session: number
    CourseReview: number
    CourseFavorite: number
    CoursePurchase: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | UserCountOutputTypeCountAccountArgs
    session?: boolean | UserCountOutputTypeCountSessionArgs
    CourseReview?: boolean | UserCountOutputTypeCountCourseReviewArgs
    CourseFavorite?: boolean | UserCountOutputTypeCountCourseFavoriteArgs
    CoursePurchase?: boolean | UserCountOutputTypeCountCoursePurchaseArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
  }


  /**
   * Count Type CourseCategoryCountOutputType
   */

  export type CourseCategoryCountOutputType = {
    courses: number
  }

  export type CourseCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseCategoryCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategoryCountOutputType
     */
    select?: CourseCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCategoryCountOutputType without action
   */
  export type CourseCategoryCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseTeacherCountOutputType
   */

  export type CourseTeacherCountOutputType = {
    courses: number
  }

  export type CourseTeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseTeacherCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseTeacherCountOutputType without action
   */
  export type CourseTeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacherCountOutputType
     */
    select?: CourseTeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseTeacherCountOutputType without action
   */
  export type CourseTeacherCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseTagCountOutputType
   */

  export type CourseTagCountOutputType = {
    courses: number
  }

  export type CourseTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseTagCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseTagCountOutputType without action
   */
  export type CourseTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagCountOutputType
     */
    select?: CourseTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseTagCountOutputType without action
   */
  export type CourseTagCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTagOnCourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    tags: number
    content: number
    CourseReview: number
    CourseFavorite: number
    CoursePurchase: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | CourseCountOutputTypeCountTagsArgs
    content?: boolean | CourseCountOutputTypeCountContentArgs
    CourseReview?: boolean | CourseCountOutputTypeCountCourseReviewArgs
    CourseFavorite?: boolean | CourseCountOutputTypeCountCourseFavoriteArgs
    CoursePurchase?: boolean | CourseCountOutputTypeCountCoursePurchaseArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTagOnCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseContentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseFavoriteWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCoursePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: Date | null
    image: string | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    emailVerified: Date | null
    image: string | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    emailVerified: number
    image: number
    address: number
    paymentMethod: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    emailVerified?: true
    image?: true
    address?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: string
    emailVerified: Date | null
    image: string | null
    address: JsonValue | null
    paymentMethod: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    address?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | User$accountArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    CourseReview?: boolean | User$CourseReviewArgs<ExtArgs>
    CourseFavorite?: boolean | User$CourseFavoriteArgs<ExtArgs>
    CoursePurchase?: boolean | User$CoursePurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    address?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    address?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    address?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "emailVerified" | "image" | "address" | "paymentMethod" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | User$accountArgs<ExtArgs>
    session?: boolean | User$sessionArgs<ExtArgs>
    CourseReview?: boolean | User$CourseReviewArgs<ExtArgs>
    CourseFavorite?: boolean | User$CourseFavoriteArgs<ExtArgs>
    CoursePurchase?: boolean | User$CoursePurchaseArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs>[]
      CourseReview: Prisma.$CourseReviewPayload<ExtArgs>[]
      CourseFavorite: Prisma.$CourseFavoritePayload<ExtArgs>[]
      CoursePurchase: Prisma.$CoursePurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: string
      emailVerified: Date | null
      image: string | null
      address: Prisma.JsonValue | null
      paymentMethod: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CourseReview<T extends User$CourseReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$CourseReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CourseFavorite<T extends User$CourseFavoriteArgs<ExtArgs> = {}>(args?: Subset<T, User$CourseFavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CoursePurchase<T extends User$CoursePurchaseArgs<ExtArgs> = {}>(args?: Subset<T, User$CoursePurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'Json'>
    readonly paymentMethod: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.CourseReview
   */
  export type User$CourseReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    cursor?: CourseReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * User.CourseFavorite
   */
  export type User$CourseFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    where?: CourseFavoriteWhereInput
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    cursor?: CourseFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseFavoriteScalarFieldEnum | CourseFavoriteScalarFieldEnum[]
  }

  /**
   * User.CoursePurchase
   */
  export type User$CoursePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    cursor?: CoursePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model CourseReview
   */

  export type AggregateCourseReview = {
    _count: CourseReviewCountAggregateOutputType | null
    _avg: CourseReviewAvgAggregateOutputType | null
    _sum: CourseReviewSumAggregateOutputType | null
    _min: CourseReviewMinAggregateOutputType | null
    _max: CourseReviewMaxAggregateOutputType | null
  }

  export type CourseReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type CourseReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type CourseReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CourseReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CourseReviewCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CourseReviewAvgAggregateInputType = {
    rating?: true
  }

  export type CourseReviewSumAggregateInputType = {
    rating?: true
  }

  export type CourseReviewMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CourseReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CourseReviewCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CourseReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseReview to aggregate.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseReviews
    **/
    _count?: true | CourseReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseReviewMaxAggregateInputType
  }

  export type GetCourseReviewAggregateType<T extends CourseReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseReview[P]>
      : GetScalarType<T[P], AggregateCourseReview[P]>
  }




  export type CourseReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithAggregationInput | CourseReviewOrderByWithAggregationInput[]
    by: CourseReviewScalarFieldEnum[] | CourseReviewScalarFieldEnum
    having?: CourseReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseReviewCountAggregateInputType | true
    _avg?: CourseReviewAvgAggregateInputType
    _sum?: CourseReviewSumAggregateInputType
    _min?: CourseReviewMinAggregateInputType
    _max?: CourseReviewMaxAggregateInputType
  }

  export type CourseReviewGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: CourseReviewCountAggregateOutputType | null
    _avg: CourseReviewAvgAggregateOutputType | null
    _sum: CourseReviewSumAggregateOutputType | null
    _min: CourseReviewMinAggregateOutputType | null
    _max: CourseReviewMaxAggregateOutputType | null
  }

  type GetCourseReviewGroupByPayload<T extends CourseReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CourseReviewGroupByOutputType[P]>
        }
      >
    >


  export type CourseReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseReview"]>

  export type CourseReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CourseReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["courseReview"]>
  export type CourseReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["courseReview"]>
    composites: {}
  }

  type CourseReviewGetPayload<S extends boolean | null | undefined | CourseReviewDefaultArgs> = $Result.GetResult<Prisma.$CourseReviewPayload, S>

  type CourseReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseReviewCountAggregateInputType | true
    }

  export interface CourseReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseReview'], meta: { name: 'CourseReview' } }
    /**
     * Find zero or one CourseReview that matches the filter.
     * @param {CourseReviewFindUniqueArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseReviewFindUniqueArgs>(args: SelectSubset<T, CourseReviewFindUniqueArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseReviewFindUniqueOrThrowArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindFirstArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseReviewFindFirstArgs>(args?: SelectSubset<T, CourseReviewFindFirstArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindFirstOrThrowArgs} args - Arguments to find a CourseReview
     * @example
     * // Get one CourseReview
     * const courseReview = await prisma.courseReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseReviews
     * const courseReviews = await prisma.courseReview.findMany()
     * 
     * // Get first 10 CourseReviews
     * const courseReviews = await prisma.courseReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseReviewFindManyArgs>(args?: SelectSubset<T, CourseReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseReview.
     * @param {CourseReviewCreateArgs} args - Arguments to create a CourseReview.
     * @example
     * // Create one CourseReview
     * const CourseReview = await prisma.courseReview.create({
     *   data: {
     *     // ... data to create a CourseReview
     *   }
     * })
     * 
     */
    create<T extends CourseReviewCreateArgs>(args: SelectSubset<T, CourseReviewCreateArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseReviews.
     * @param {CourseReviewCreateManyArgs} args - Arguments to create many CourseReviews.
     * @example
     * // Create many CourseReviews
     * const courseReview = await prisma.courseReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseReviewCreateManyArgs>(args?: SelectSubset<T, CourseReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseReviews and returns the data saved in the database.
     * @param {CourseReviewCreateManyAndReturnArgs} args - Arguments to create many CourseReviews.
     * @example
     * // Create many CourseReviews
     * const courseReview = await prisma.courseReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseReviews and only return the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseReview.
     * @param {CourseReviewDeleteArgs} args - Arguments to delete one CourseReview.
     * @example
     * // Delete one CourseReview
     * const CourseReview = await prisma.courseReview.delete({
     *   where: {
     *     // ... filter to delete one CourseReview
     *   }
     * })
     * 
     */
    delete<T extends CourseReviewDeleteArgs>(args: SelectSubset<T, CourseReviewDeleteArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseReview.
     * @param {CourseReviewUpdateArgs} args - Arguments to update one CourseReview.
     * @example
     * // Update one CourseReview
     * const courseReview = await prisma.courseReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseReviewUpdateArgs>(args: SelectSubset<T, CourseReviewUpdateArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseReviews.
     * @param {CourseReviewDeleteManyArgs} args - Arguments to filter CourseReviews to delete.
     * @example
     * // Delete a few CourseReviews
     * const { count } = await prisma.courseReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseReviewDeleteManyArgs>(args?: SelectSubset<T, CourseReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseReviews
     * const courseReview = await prisma.courseReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseReviewUpdateManyArgs>(args: SelectSubset<T, CourseReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseReviews and returns the data updated in the database.
     * @param {CourseReviewUpdateManyAndReturnArgs} args - Arguments to update many CourseReviews.
     * @example
     * // Update many CourseReviews
     * const courseReview = await prisma.courseReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseReviews and only return the `id`
     * const courseReviewWithIdOnly = await prisma.courseReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseReview.
     * @param {CourseReviewUpsertArgs} args - Arguments to update or create a CourseReview.
     * @example
     * // Update or create a CourseReview
     * const courseReview = await prisma.courseReview.upsert({
     *   create: {
     *     // ... data to create a CourseReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseReview we want to update
     *   }
     * })
     */
    upsert<T extends CourseReviewUpsertArgs>(args: SelectSubset<T, CourseReviewUpsertArgs<ExtArgs>>): Prisma__CourseReviewClient<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewCountArgs} args - Arguments to filter CourseReviews to count.
     * @example
     * // Count the number of CourseReviews
     * const count = await prisma.courseReview.count({
     *   where: {
     *     // ... the filter for the CourseReviews we want to count
     *   }
     * })
    **/
    count<T extends CourseReviewCountArgs>(
      args?: Subset<T, CourseReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseReviewAggregateArgs>(args: Subset<T, CourseReviewAggregateArgs>): Prisma.PrismaPromise<GetCourseReviewAggregateType<T>>

    /**
     * Group by CourseReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseReviewGroupByArgs['orderBy'] }
        : { orderBy?: CourseReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseReview model
   */
  readonly fields: CourseReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseReview model
   */
  interface CourseReviewFieldRefs {
    readonly id: FieldRef<"CourseReview", 'String'>
    readonly userId: FieldRef<"CourseReview", 'String'>
    readonly courseId: FieldRef<"CourseReview", 'String'>
    readonly rating: FieldRef<"CourseReview", 'Int'>
    readonly comment: FieldRef<"CourseReview", 'String'>
    readonly createdAt: FieldRef<"CourseReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseReview findUnique
   */
  export type CourseReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview findUniqueOrThrow
   */
  export type CourseReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview findFirst
   */
  export type CourseReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseReviews.
     */
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview findFirstOrThrow
   */
  export type CourseReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReview to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseReviews.
     */
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview findMany
   */
  export type CourseReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter, which CourseReviews to fetch.
     */
    where?: CourseReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseReviews to fetch.
     */
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseReviews.
     */
    cursor?: CourseReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseReviews.
     */
    skip?: number
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * CourseReview create
   */
  export type CourseReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseReview.
     */
    data: XOR<CourseReviewCreateInput, CourseReviewUncheckedCreateInput>
  }

  /**
   * CourseReview createMany
   */
  export type CourseReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseReviews.
     */
    data: CourseReviewCreateManyInput | CourseReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseReview createManyAndReturn
   */
  export type CourseReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CourseReviews.
     */
    data: CourseReviewCreateManyInput | CourseReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseReview update
   */
  export type CourseReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseReview.
     */
    data: XOR<CourseReviewUpdateInput, CourseReviewUncheckedUpdateInput>
    /**
     * Choose, which CourseReview to update.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview updateMany
   */
  export type CourseReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseReviews.
     */
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyInput>
    /**
     * Filter which CourseReviews to update
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to update.
     */
    limit?: number
  }

  /**
   * CourseReview updateManyAndReturn
   */
  export type CourseReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * The data used to update CourseReviews.
     */
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyInput>
    /**
     * Filter which CourseReviews to update
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseReview upsert
   */
  export type CourseReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseReview to update in case it exists.
     */
    where: CourseReviewWhereUniqueInput
    /**
     * In case the CourseReview found by the `where` argument doesn't exist, create a new CourseReview with this data.
     */
    create: XOR<CourseReviewCreateInput, CourseReviewUncheckedCreateInput>
    /**
     * In case the CourseReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseReviewUpdateInput, CourseReviewUncheckedUpdateInput>
  }

  /**
   * CourseReview delete
   */
  export type CourseReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    /**
     * Filter which CourseReview to delete.
     */
    where: CourseReviewWhereUniqueInput
  }

  /**
   * CourseReview deleteMany
   */
  export type CourseReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseReviews to delete
     */
    where?: CourseReviewWhereInput
    /**
     * Limit how many CourseReviews to delete.
     */
    limit?: number
  }

  /**
   * CourseReview without action
   */
  export type CourseReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
  }


  /**
   * Model CourseFavorite
   */

  export type AggregateCourseFavorite = {
    _count: CourseFavoriteCountAggregateOutputType | null
    _min: CourseFavoriteMinAggregateOutputType | null
    _max: CourseFavoriteMaxAggregateOutputType | null
  }

  export type CourseFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type CourseFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type CourseFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseFavorite to aggregate.
     */
    where?: CourseFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFavorites to fetch.
     */
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseFavorites
    **/
    _count?: true | CourseFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseFavoriteMaxAggregateInputType
  }

  export type GetCourseFavoriteAggregateType<T extends CourseFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseFavorite[P]>
      : GetScalarType<T[P], AggregateCourseFavorite[P]>
  }




  export type CourseFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseFavoriteWhereInput
    orderBy?: CourseFavoriteOrderByWithAggregationInput | CourseFavoriteOrderByWithAggregationInput[]
    by: CourseFavoriteScalarFieldEnum[] | CourseFavoriteScalarFieldEnum
    having?: CourseFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseFavoriteCountAggregateInputType | true
    _min?: CourseFavoriteMinAggregateInputType
    _max?: CourseFavoriteMaxAggregateInputType
  }

  export type CourseFavoriteGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    createdAt: Date
    _count: CourseFavoriteCountAggregateOutputType | null
    _min: CourseFavoriteMinAggregateOutputType | null
    _max: CourseFavoriteMaxAggregateOutputType | null
  }

  type GetCourseFavoriteGroupByPayload<T extends CourseFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], CourseFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type CourseFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseFavorite"]>

  export type CourseFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseFavorite"]>

  export type CourseFavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseFavorite"]>

  export type CourseFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type CourseFavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "createdAt", ExtArgs["result"]["courseFavorite"]>
  export type CourseFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseFavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      createdAt: Date
    }, ExtArgs["result"]["courseFavorite"]>
    composites: {}
  }

  type CourseFavoriteGetPayload<S extends boolean | null | undefined | CourseFavoriteDefaultArgs> = $Result.GetResult<Prisma.$CourseFavoritePayload, S>

  type CourseFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseFavoriteCountAggregateInputType | true
    }

  export interface CourseFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseFavorite'], meta: { name: 'CourseFavorite' } }
    /**
     * Find zero or one CourseFavorite that matches the filter.
     * @param {CourseFavoriteFindUniqueArgs} args - Arguments to find a CourseFavorite
     * @example
     * // Get one CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFavoriteFindUniqueArgs>(args: SelectSubset<T, CourseFavoriteFindUniqueArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFavoriteFindUniqueOrThrowArgs} args - Arguments to find a CourseFavorite
     * @example
     * // Get one CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteFindFirstArgs} args - Arguments to find a CourseFavorite
     * @example
     * // Get one CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFavoriteFindFirstArgs>(args?: SelectSubset<T, CourseFavoriteFindFirstArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteFindFirstOrThrowArgs} args - Arguments to find a CourseFavorite
     * @example
     * // Get one CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseFavorites
     * const courseFavorites = await prisma.courseFavorite.findMany()
     * 
     * // Get first 10 CourseFavorites
     * const courseFavorites = await prisma.courseFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseFavoriteWithIdOnly = await prisma.courseFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFavoriteFindManyArgs>(args?: SelectSubset<T, CourseFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseFavorite.
     * @param {CourseFavoriteCreateArgs} args - Arguments to create a CourseFavorite.
     * @example
     * // Create one CourseFavorite
     * const CourseFavorite = await prisma.courseFavorite.create({
     *   data: {
     *     // ... data to create a CourseFavorite
     *   }
     * })
     * 
     */
    create<T extends CourseFavoriteCreateArgs>(args: SelectSubset<T, CourseFavoriteCreateArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseFavorites.
     * @param {CourseFavoriteCreateManyArgs} args - Arguments to create many CourseFavorites.
     * @example
     * // Create many CourseFavorites
     * const courseFavorite = await prisma.courseFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseFavoriteCreateManyArgs>(args?: SelectSubset<T, CourseFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseFavorites and returns the data saved in the database.
     * @param {CourseFavoriteCreateManyAndReturnArgs} args - Arguments to create many CourseFavorites.
     * @example
     * // Create many CourseFavorites
     * const courseFavorite = await prisma.courseFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseFavorites and only return the `id`
     * const courseFavoriteWithIdOnly = await prisma.courseFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseFavorite.
     * @param {CourseFavoriteDeleteArgs} args - Arguments to delete one CourseFavorite.
     * @example
     * // Delete one CourseFavorite
     * const CourseFavorite = await prisma.courseFavorite.delete({
     *   where: {
     *     // ... filter to delete one CourseFavorite
     *   }
     * })
     * 
     */
    delete<T extends CourseFavoriteDeleteArgs>(args: SelectSubset<T, CourseFavoriteDeleteArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseFavorite.
     * @param {CourseFavoriteUpdateArgs} args - Arguments to update one CourseFavorite.
     * @example
     * // Update one CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseFavoriteUpdateArgs>(args: SelectSubset<T, CourseFavoriteUpdateArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseFavorites.
     * @param {CourseFavoriteDeleteManyArgs} args - Arguments to filter CourseFavorites to delete.
     * @example
     * // Delete a few CourseFavorites
     * const { count } = await prisma.courseFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseFavoriteDeleteManyArgs>(args?: SelectSubset<T, CourseFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseFavorites
     * const courseFavorite = await prisma.courseFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseFavoriteUpdateManyArgs>(args: SelectSubset<T, CourseFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseFavorites and returns the data updated in the database.
     * @param {CourseFavoriteUpdateManyAndReturnArgs} args - Arguments to update many CourseFavorites.
     * @example
     * // Update many CourseFavorites
     * const courseFavorite = await prisma.courseFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseFavorites and only return the `id`
     * const courseFavoriteWithIdOnly = await prisma.courseFavorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseFavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseFavorite.
     * @param {CourseFavoriteUpsertArgs} args - Arguments to update or create a CourseFavorite.
     * @example
     * // Update or create a CourseFavorite
     * const courseFavorite = await prisma.courseFavorite.upsert({
     *   create: {
     *     // ... data to create a CourseFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseFavorite we want to update
     *   }
     * })
     */
    upsert<T extends CourseFavoriteUpsertArgs>(args: SelectSubset<T, CourseFavoriteUpsertArgs<ExtArgs>>): Prisma__CourseFavoriteClient<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteCountArgs} args - Arguments to filter CourseFavorites to count.
     * @example
     * // Count the number of CourseFavorites
     * const count = await prisma.courseFavorite.count({
     *   where: {
     *     // ... the filter for the CourseFavorites we want to count
     *   }
     * })
    **/
    count<T extends CourseFavoriteCountArgs>(
      args?: Subset<T, CourseFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseFavoriteAggregateArgs>(args: Subset<T, CourseFavoriteAggregateArgs>): Prisma.PrismaPromise<GetCourseFavoriteAggregateType<T>>

    /**
     * Group by CourseFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: CourseFavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseFavorite model
   */
  readonly fields: CourseFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseFavorite model
   */
  interface CourseFavoriteFieldRefs {
    readonly id: FieldRef<"CourseFavorite", 'String'>
    readonly userId: FieldRef<"CourseFavorite", 'String'>
    readonly courseId: FieldRef<"CourseFavorite", 'String'>
    readonly createdAt: FieldRef<"CourseFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseFavorite findUnique
   */
  export type CourseFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CourseFavorite to fetch.
     */
    where: CourseFavoriteWhereUniqueInput
  }

  /**
   * CourseFavorite findUniqueOrThrow
   */
  export type CourseFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CourseFavorite to fetch.
     */
    where: CourseFavoriteWhereUniqueInput
  }

  /**
   * CourseFavorite findFirst
   */
  export type CourseFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CourseFavorite to fetch.
     */
    where?: CourseFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFavorites to fetch.
     */
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseFavorites.
     */
    cursor?: CourseFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseFavorites.
     */
    distinct?: CourseFavoriteScalarFieldEnum | CourseFavoriteScalarFieldEnum[]
  }

  /**
   * CourseFavorite findFirstOrThrow
   */
  export type CourseFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CourseFavorite to fetch.
     */
    where?: CourseFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFavorites to fetch.
     */
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseFavorites.
     */
    cursor?: CourseFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseFavorites.
     */
    distinct?: CourseFavoriteScalarFieldEnum | CourseFavoriteScalarFieldEnum[]
  }

  /**
   * CourseFavorite findMany
   */
  export type CourseFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which CourseFavorites to fetch.
     */
    where?: CourseFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseFavorites to fetch.
     */
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseFavorites.
     */
    cursor?: CourseFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseFavorites.
     */
    skip?: number
    distinct?: CourseFavoriteScalarFieldEnum | CourseFavoriteScalarFieldEnum[]
  }

  /**
   * CourseFavorite create
   */
  export type CourseFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseFavorite.
     */
    data: XOR<CourseFavoriteCreateInput, CourseFavoriteUncheckedCreateInput>
  }

  /**
   * CourseFavorite createMany
   */
  export type CourseFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseFavorites.
     */
    data: CourseFavoriteCreateManyInput | CourseFavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseFavorite createManyAndReturn
   */
  export type CourseFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many CourseFavorites.
     */
    data: CourseFavoriteCreateManyInput | CourseFavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseFavorite update
   */
  export type CourseFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseFavorite.
     */
    data: XOR<CourseFavoriteUpdateInput, CourseFavoriteUncheckedUpdateInput>
    /**
     * Choose, which CourseFavorite to update.
     */
    where: CourseFavoriteWhereUniqueInput
  }

  /**
   * CourseFavorite updateMany
   */
  export type CourseFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseFavorites.
     */
    data: XOR<CourseFavoriteUpdateManyMutationInput, CourseFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which CourseFavorites to update
     */
    where?: CourseFavoriteWhereInput
    /**
     * Limit how many CourseFavorites to update.
     */
    limit?: number
  }

  /**
   * CourseFavorite updateManyAndReturn
   */
  export type CourseFavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * The data used to update CourseFavorites.
     */
    data: XOR<CourseFavoriteUpdateManyMutationInput, CourseFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which CourseFavorites to update
     */
    where?: CourseFavoriteWhereInput
    /**
     * Limit how many CourseFavorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseFavorite upsert
   */
  export type CourseFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseFavorite to update in case it exists.
     */
    where: CourseFavoriteWhereUniqueInput
    /**
     * In case the CourseFavorite found by the `where` argument doesn't exist, create a new CourseFavorite with this data.
     */
    create: XOR<CourseFavoriteCreateInput, CourseFavoriteUncheckedCreateInput>
    /**
     * In case the CourseFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseFavoriteUpdateInput, CourseFavoriteUncheckedUpdateInput>
  }

  /**
   * CourseFavorite delete
   */
  export type CourseFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    /**
     * Filter which CourseFavorite to delete.
     */
    where: CourseFavoriteWhereUniqueInput
  }

  /**
   * CourseFavorite deleteMany
   */
  export type CourseFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseFavorites to delete
     */
    where?: CourseFavoriteWhereInput
    /**
     * Limit how many CourseFavorites to delete.
     */
    limit?: number
  }

  /**
   * CourseFavorite without action
   */
  export type CourseFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model CoursePurchase
   */

  export type AggregateCoursePurchase = {
    _count: CoursePurchaseCountAggregateOutputType | null
    _avg: CoursePurchaseAvgAggregateOutputType | null
    _sum: CoursePurchaseSumAggregateOutputType | null
    _min: CoursePurchaseMinAggregateOutputType | null
    _max: CoursePurchaseMaxAggregateOutputType | null
  }

  export type CoursePurchaseAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type CoursePurchaseSumAggregateOutputType = {
    price: Decimal | null
  }

  export type CoursePurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    price: Decimal | null
    purchasedAt: Date | null
  }

  export type CoursePurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    price: Decimal | null
    purchasedAt: Date | null
  }

  export type CoursePurchaseCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    price: number
    purchasedAt: number
    _all: number
  }


  export type CoursePurchaseAvgAggregateInputType = {
    price?: true
  }

  export type CoursePurchaseSumAggregateInputType = {
    price?: true
  }

  export type CoursePurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    price?: true
    purchasedAt?: true
  }

  export type CoursePurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    price?: true
    purchasedAt?: true
  }

  export type CoursePurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    price?: true
    purchasedAt?: true
    _all?: true
  }

  export type CoursePurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchase to aggregate.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursePurchases
    **/
    _count?: true | CoursePurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursePurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursePurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursePurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursePurchaseMaxAggregateInputType
  }

  export type GetCoursePurchaseAggregateType<T extends CoursePurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursePurchase[P]>
      : GetScalarType<T[P], AggregateCoursePurchase[P]>
  }




  export type CoursePurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithAggregationInput | CoursePurchaseOrderByWithAggregationInput[]
    by: CoursePurchaseScalarFieldEnum[] | CoursePurchaseScalarFieldEnum
    having?: CoursePurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursePurchaseCountAggregateInputType | true
    _avg?: CoursePurchaseAvgAggregateInputType
    _sum?: CoursePurchaseSumAggregateInputType
    _min?: CoursePurchaseMinAggregateInputType
    _max?: CoursePurchaseMaxAggregateInputType
  }

  export type CoursePurchaseGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    price: Decimal
    purchasedAt: Date
    _count: CoursePurchaseCountAggregateOutputType | null
    _avg: CoursePurchaseAvgAggregateOutputType | null
    _sum: CoursePurchaseSumAggregateOutputType | null
    _min: CoursePurchaseMinAggregateOutputType | null
    _max: CoursePurchaseMaxAggregateOutputType | null
  }

  type GetCoursePurchaseGroupByPayload<T extends CoursePurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursePurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursePurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]>
        }
      >
    >


  export type CoursePurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    price?: boolean
    purchasedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    price?: boolean
    purchasedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    price?: boolean
    purchasedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    price?: boolean
    purchasedAt?: boolean
  }

  export type CoursePurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "price" | "purchasedAt", ExtArgs["result"]["coursePurchase"]>
  export type CoursePurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CoursePurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CoursePurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursePurchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      price: Prisma.Decimal
      purchasedAt: Date
    }, ExtArgs["result"]["coursePurchase"]>
    composites: {}
  }

  type CoursePurchaseGetPayload<S extends boolean | null | undefined | CoursePurchaseDefaultArgs> = $Result.GetResult<Prisma.$CoursePurchasePayload, S>

  type CoursePurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursePurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursePurchaseCountAggregateInputType | true
    }

  export interface CoursePurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursePurchase'], meta: { name: 'CoursePurchase' } }
    /**
     * Find zero or one CoursePurchase that matches the filter.
     * @param {CoursePurchaseFindUniqueArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePurchaseFindUniqueArgs>(args: SelectSubset<T, CoursePurchaseFindUniqueArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursePurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePurchaseFindUniqueOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursePurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePurchaseFindFirstArgs>(args?: SelectSubset<T, CoursePurchaseFindFirstArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursePurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany()
     * 
     * // Get first 10 CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursePurchaseFindManyArgs>(args?: SelectSubset<T, CoursePurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursePurchase.
     * @param {CoursePurchaseCreateArgs} args - Arguments to create a CoursePurchase.
     * @example
     * // Create one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.create({
     *   data: {
     *     // ... data to create a CoursePurchase
     *   }
     * })
     * 
     */
    create<T extends CoursePurchaseCreateArgs>(args: SelectSubset<T, CoursePurchaseCreateArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursePurchases.
     * @param {CoursePurchaseCreateManyArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursePurchaseCreateManyArgs>(args?: SelectSubset<T, CoursePurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoursePurchases and returns the data saved in the database.
     * @param {CoursePurchaseCreateManyAndReturnArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursePurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursePurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoursePurchase.
     * @param {CoursePurchaseDeleteArgs} args - Arguments to delete one CoursePurchase.
     * @example
     * // Delete one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.delete({
     *   where: {
     *     // ... filter to delete one CoursePurchase
     *   }
     * })
     * 
     */
    delete<T extends CoursePurchaseDeleteArgs>(args: SelectSubset<T, CoursePurchaseDeleteArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursePurchase.
     * @param {CoursePurchaseUpdateArgs} args - Arguments to update one CoursePurchase.
     * @example
     * // Update one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursePurchaseUpdateArgs>(args: SelectSubset<T, CoursePurchaseUpdateArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursePurchases.
     * @param {CoursePurchaseDeleteManyArgs} args - Arguments to filter CoursePurchases to delete.
     * @example
     * // Delete a few CoursePurchases
     * const { count } = await prisma.coursePurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursePurchaseDeleteManyArgs>(args?: SelectSubset<T, CoursePurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursePurchaseUpdateManyArgs>(args: SelectSubset<T, CoursePurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePurchases and returns the data updated in the database.
     * @param {CoursePurchaseUpdateManyAndReturnArgs} args - Arguments to update many CoursePurchases.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursePurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursePurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoursePurchase.
     * @param {CoursePurchaseUpsertArgs} args - Arguments to update or create a CoursePurchase.
     * @example
     * // Update or create a CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.upsert({
     *   create: {
     *     // ... data to create a CoursePurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePurchase we want to update
     *   }
     * })
     */
    upsert<T extends CoursePurchaseUpsertArgs>(args: SelectSubset<T, CoursePurchaseUpsertArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseCountArgs} args - Arguments to filter CoursePurchases to count.
     * @example
     * // Count the number of CoursePurchases
     * const count = await prisma.coursePurchase.count({
     *   where: {
     *     // ... the filter for the CoursePurchases we want to count
     *   }
     * })
    **/
    count<T extends CoursePurchaseCountArgs>(
      args?: Subset<T, CoursePurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursePurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursePurchaseAggregateArgs>(args: Subset<T, CoursePurchaseAggregateArgs>): Prisma.PrismaPromise<GetCoursePurchaseAggregateType<T>>

    /**
     * Group by CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursePurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursePurchaseGroupByArgs['orderBy'] }
        : { orderBy?: CoursePurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursePurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursePurchase model
   */
  readonly fields: CoursePurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursePurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursePurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoursePurchase model
   */
  interface CoursePurchaseFieldRefs {
    readonly id: FieldRef<"CoursePurchase", 'String'>
    readonly userId: FieldRef<"CoursePurchase", 'String'>
    readonly courseId: FieldRef<"CoursePurchase", 'String'>
    readonly price: FieldRef<"CoursePurchase", 'Decimal'>
    readonly purchasedAt: FieldRef<"CoursePurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoursePurchase findUnique
   */
  export type CoursePurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase findUniqueOrThrow
   */
  export type CoursePurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase findFirst
   */
  export type CoursePurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase findFirstOrThrow
   */
  export type CoursePurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase findMany
   */
  export type CoursePurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchases to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase create
   */
  export type CoursePurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursePurchase.
     */
    data: XOR<CoursePurchaseCreateInput, CoursePurchaseUncheckedCreateInput>
  }

  /**
   * CoursePurchase createMany
   */
  export type CoursePurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePurchases.
     */
    data: CoursePurchaseCreateManyInput | CoursePurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoursePurchase createManyAndReturn
   */
  export type CoursePurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many CoursePurchases.
     */
    data: CoursePurchaseCreateManyInput | CoursePurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePurchase update
   */
  export type CoursePurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursePurchase.
     */
    data: XOR<CoursePurchaseUpdateInput, CoursePurchaseUncheckedUpdateInput>
    /**
     * Choose, which CoursePurchase to update.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase updateMany
   */
  export type CoursePurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePurchases.
     */
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoursePurchases to update
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number
  }

  /**
   * CoursePurchase updateManyAndReturn
   */
  export type CoursePurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * The data used to update CoursePurchases.
     */
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoursePurchases to update
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePurchase upsert
   */
  export type CoursePurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursePurchase to update in case it exists.
     */
    where: CoursePurchaseWhereUniqueInput
    /**
     * In case the CoursePurchase found by the `where` argument doesn't exist, create a new CoursePurchase with this data.
     */
    create: XOR<CoursePurchaseCreateInput, CoursePurchaseUncheckedCreateInput>
    /**
     * In case the CoursePurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursePurchaseUpdateInput, CoursePurchaseUncheckedUpdateInput>
  }

  /**
   * CoursePurchase delete
   */
  export type CoursePurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter which CoursePurchase to delete.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase deleteMany
   */
  export type CoursePurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchases to delete
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to delete.
     */
    limit?: number
  }

  /**
   * CoursePurchase without action
   */
  export type CoursePurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
  }


  /**
   * Model CourseCategory
   */

  export type AggregateCourseCategory = {
    _count: CourseCategoryCountAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  export type CourseCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourseCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourseCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourseCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourseCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategory to aggregate.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseCategories
    **/
    _count?: true | CourseCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type GetCourseCategoryAggregateType<T extends CourseCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseCategory[P]>
      : GetScalarType<T[P], AggregateCourseCategory[P]>
  }




  export type CourseCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseCategoryWhereInput
    orderBy?: CourseCategoryOrderByWithAggregationInput | CourseCategoryOrderByWithAggregationInput[]
    by: CourseCategoryScalarFieldEnum[] | CourseCategoryScalarFieldEnum
    having?: CourseCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCategoryCountAggregateInputType | true
    _min?: CourseCategoryMinAggregateInputType
    _max?: CourseCategoryMaxAggregateInputType
  }

  export type CourseCategoryGroupByOutputType = {
    id: string
    name: string
    _count: CourseCategoryCountAggregateOutputType | null
    _min: CourseCategoryMinAggregateOutputType | null
    _max: CourseCategoryMaxAggregateOutputType | null
  }

  type GetCourseCategoryGroupByPayload<T extends CourseCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CourseCategoryGroupByOutputType[P]>
        }
      >
    >


  export type CourseCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courses?: boolean | CourseCategory$coursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseCategory"]>

  export type CourseCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CourseCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["courseCategory"]>
  export type CourseCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseCategory$coursesArgs<ExtArgs>
    _count?: boolean | CourseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseCategory"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["courseCategory"]>
    composites: {}
  }

  type CourseCategoryGetPayload<S extends boolean | null | undefined | CourseCategoryDefaultArgs> = $Result.GetResult<Prisma.$CourseCategoryPayload, S>

  type CourseCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCategoryCountAggregateInputType | true
    }

  export interface CourseCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseCategory'], meta: { name: 'CourseCategory' } }
    /**
     * Find zero or one CourseCategory that matches the filter.
     * @param {CourseCategoryFindUniqueArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseCategoryFindUniqueArgs>(args: SelectSubset<T, CourseCategoryFindUniqueArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseCategoryFindUniqueOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseCategoryFindFirstArgs>(args?: SelectSubset<T, CourseCategoryFindFirstArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindFirstOrThrowArgs} args - Arguments to find a CourseCategory
     * @example
     * // Get one CourseCategory
     * const courseCategory = await prisma.courseCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany()
     * 
     * // Get first 10 CourseCategories
     * const courseCategories = await prisma.courseCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseCategoryFindManyArgs>(args?: SelectSubset<T, CourseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseCategory.
     * @param {CourseCategoryCreateArgs} args - Arguments to create a CourseCategory.
     * @example
     * // Create one CourseCategory
     * const CourseCategory = await prisma.courseCategory.create({
     *   data: {
     *     // ... data to create a CourseCategory
     *   }
     * })
     * 
     */
    create<T extends CourseCategoryCreateArgs>(args: SelectSubset<T, CourseCategoryCreateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseCategories.
     * @param {CourseCategoryCreateManyArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCategoryCreateManyArgs>(args?: SelectSubset<T, CourseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseCategories and returns the data saved in the database.
     * @param {CourseCategoryCreateManyAndReturnArgs} args - Arguments to create many CourseCategories.
     * @example
     * // Create many CourseCategories
     * const courseCategory = await prisma.courseCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseCategory.
     * @param {CourseCategoryDeleteArgs} args - Arguments to delete one CourseCategory.
     * @example
     * // Delete one CourseCategory
     * const CourseCategory = await prisma.courseCategory.delete({
     *   where: {
     *     // ... filter to delete one CourseCategory
     *   }
     * })
     * 
     */
    delete<T extends CourseCategoryDeleteArgs>(args: SelectSubset<T, CourseCategoryDeleteArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseCategory.
     * @param {CourseCategoryUpdateArgs} args - Arguments to update one CourseCategory.
     * @example
     * // Update one CourseCategory
     * const courseCategory = await prisma.courseCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseCategoryUpdateArgs>(args: SelectSubset<T, CourseCategoryUpdateArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseCategories.
     * @param {CourseCategoryDeleteManyArgs} args - Arguments to filter CourseCategories to delete.
     * @example
     * // Delete a few CourseCategories
     * const { count } = await prisma.courseCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseCategoryDeleteManyArgs>(args?: SelectSubset<T, CourseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseCategoryUpdateManyArgs>(args: SelectSubset<T, CourseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseCategories and returns the data updated in the database.
     * @param {CourseCategoryUpdateManyAndReturnArgs} args - Arguments to update many CourseCategories.
     * @example
     * // Update many CourseCategories
     * const courseCategory = await prisma.courseCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseCategories and only return the `id`
     * const courseCategoryWithIdOnly = await prisma.courseCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseCategory.
     * @param {CourseCategoryUpsertArgs} args - Arguments to update or create a CourseCategory.
     * @example
     * // Update or create a CourseCategory
     * const courseCategory = await prisma.courseCategory.upsert({
     *   create: {
     *     // ... data to create a CourseCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseCategory we want to update
     *   }
     * })
     */
    upsert<T extends CourseCategoryUpsertArgs>(args: SelectSubset<T, CourseCategoryUpsertArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryCountArgs} args - Arguments to filter CourseCategories to count.
     * @example
     * // Count the number of CourseCategories
     * const count = await prisma.courseCategory.count({
     *   where: {
     *     // ... the filter for the CourseCategories we want to count
     *   }
     * })
    **/
    count<T extends CourseCategoryCountArgs>(
      args?: Subset<T, CourseCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseCategoryAggregateArgs>(args: Subset<T, CourseCategoryAggregateArgs>): Prisma.PrismaPromise<GetCourseCategoryAggregateType<T>>

    /**
     * Group by CourseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseCategoryGroupByArgs['orderBy'] }
        : { orderBy?: CourseCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseCategory model
   */
  readonly fields: CourseCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends CourseCategory$coursesArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategory$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseCategory model
   */
  interface CourseCategoryFieldRefs {
    readonly id: FieldRef<"CourseCategory", 'String'>
    readonly name: FieldRef<"CourseCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseCategory findUnique
   */
  export type CourseCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findUniqueOrThrow
   */
  export type CourseCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory findFirst
   */
  export type CourseCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findFirstOrThrow
   */
  export type CourseCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategory to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseCategories.
     */
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory findMany
   */
  export type CourseCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which CourseCategories to fetch.
     */
    where?: CourseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseCategories to fetch.
     */
    orderBy?: CourseCategoryOrderByWithRelationInput | CourseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseCategories.
     */
    cursor?: CourseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseCategories.
     */
    skip?: number
    distinct?: CourseCategoryScalarFieldEnum | CourseCategoryScalarFieldEnum[]
  }

  /**
   * CourseCategory create
   */
  export type CourseCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseCategory.
     */
    data: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
  }

  /**
   * CourseCategory createMany
   */
  export type CourseCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory createManyAndReturn
   */
  export type CourseCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many CourseCategories.
     */
    data: CourseCategoryCreateManyInput | CourseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseCategory update
   */
  export type CourseCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseCategory.
     */
    data: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
    /**
     * Choose, which CourseCategory to update.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory updateMany
   */
  export type CourseCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory updateManyAndReturn
   */
  export type CourseCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * The data used to update CourseCategories.
     */
    data: XOR<CourseCategoryUpdateManyMutationInput, CourseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which CourseCategories to update
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to update.
     */
    limit?: number
  }

  /**
   * CourseCategory upsert
   */
  export type CourseCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseCategory to update in case it exists.
     */
    where: CourseCategoryWhereUniqueInput
    /**
     * In case the CourseCategory found by the `where` argument doesn't exist, create a new CourseCategory with this data.
     */
    create: XOR<CourseCategoryCreateInput, CourseCategoryUncheckedCreateInput>
    /**
     * In case the CourseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseCategoryUpdateInput, CourseCategoryUncheckedUpdateInput>
  }

  /**
   * CourseCategory delete
   */
  export type CourseCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
    /**
     * Filter which CourseCategory to delete.
     */
    where: CourseCategoryWhereUniqueInput
  }

  /**
   * CourseCategory deleteMany
   */
  export type CourseCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseCategories to delete
     */
    where?: CourseCategoryWhereInput
    /**
     * Limit how many CourseCategories to delete.
     */
    limit?: number
  }

  /**
   * CourseCategory.courses
   */
  export type CourseCategory$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * CourseCategory without action
   */
  export type CourseCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCategory
     */
    select?: CourseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseCategory
     */
    omit?: CourseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseCategoryInclude<ExtArgs> | null
  }


  /**
   * Model CourseTeacher
   */

  export type AggregateCourseTeacher = {
    _count: CourseTeacherCountAggregateOutputType | null
    _min: CourseTeacherMinAggregateOutputType | null
    _max: CourseTeacherMaxAggregateOutputType | null
  }

  export type CourseTeacherMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    title: string | null
    bio: string | null
  }

  export type CourseTeacherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    title: string | null
    bio: string | null
  }

  export type CourseTeacherCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    title: number
    bio: number
    _all: number
  }


  export type CourseTeacherMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    title?: true
    bio?: true
  }

  export type CourseTeacherMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    title?: true
    bio?: true
  }

  export type CourseTeacherCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    title?: true
    bio?: true
    _all?: true
  }

  export type CourseTeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTeacher to aggregate.
     */
    where?: CourseTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTeachers to fetch.
     */
    orderBy?: CourseTeacherOrderByWithRelationInput | CourseTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseTeachers
    **/
    _count?: true | CourseTeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseTeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseTeacherMaxAggregateInputType
  }

  export type GetCourseTeacherAggregateType<T extends CourseTeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseTeacher[P]>
      : GetScalarType<T[P], AggregateCourseTeacher[P]>
  }




  export type CourseTeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTeacherWhereInput
    orderBy?: CourseTeacherOrderByWithAggregationInput | CourseTeacherOrderByWithAggregationInput[]
    by: CourseTeacherScalarFieldEnum[] | CourseTeacherScalarFieldEnum
    having?: CourseTeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseTeacherCountAggregateInputType | true
    _min?: CourseTeacherMinAggregateInputType
    _max?: CourseTeacherMaxAggregateInputType
  }

  export type CourseTeacherGroupByOutputType = {
    id: string
    name: string
    avatar: string
    title: string | null
    bio: string | null
    _count: CourseTeacherCountAggregateOutputType | null
    _min: CourseTeacherMinAggregateOutputType | null
    _max: CourseTeacherMaxAggregateOutputType | null
  }

  type GetCourseTeacherGroupByPayload<T extends CourseTeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseTeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseTeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTeacherGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTeacherGroupByOutputType[P]>
        }
      >
    >


  export type CourseTeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    title?: boolean
    bio?: boolean
    courses?: boolean | CourseTeacher$coursesArgs<ExtArgs>
    _count?: boolean | CourseTeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTeacher"]>

  export type CourseTeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    title?: boolean
    bio?: boolean
  }, ExtArgs["result"]["courseTeacher"]>

  export type CourseTeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    title?: boolean
    bio?: boolean
  }, ExtArgs["result"]["courseTeacher"]>

  export type CourseTeacherSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    title?: boolean
    bio?: boolean
  }

  export type CourseTeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "title" | "bio", ExtArgs["result"]["courseTeacher"]>
  export type CourseTeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseTeacher$coursesArgs<ExtArgs>
    _count?: boolean | CourseTeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseTeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseTeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseTeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseTeacher"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string
      title: string | null
      bio: string | null
    }, ExtArgs["result"]["courseTeacher"]>
    composites: {}
  }

  type CourseTeacherGetPayload<S extends boolean | null | undefined | CourseTeacherDefaultArgs> = $Result.GetResult<Prisma.$CourseTeacherPayload, S>

  type CourseTeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseTeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseTeacherCountAggregateInputType | true
    }

  export interface CourseTeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseTeacher'], meta: { name: 'CourseTeacher' } }
    /**
     * Find zero or one CourseTeacher that matches the filter.
     * @param {CourseTeacherFindUniqueArgs} args - Arguments to find a CourseTeacher
     * @example
     * // Get one CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTeacherFindUniqueArgs>(args: SelectSubset<T, CourseTeacherFindUniqueArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseTeacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseTeacherFindUniqueOrThrowArgs} args - Arguments to find a CourseTeacher
     * @example
     * // Get one CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseTeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTeacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherFindFirstArgs} args - Arguments to find a CourseTeacher
     * @example
     * // Get one CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTeacherFindFirstArgs>(args?: SelectSubset<T, CourseTeacherFindFirstArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTeacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherFindFirstOrThrowArgs} args - Arguments to find a CourseTeacher
     * @example
     * // Get one CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseTeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseTeachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTeachers
     * const courseTeachers = await prisma.courseTeacher.findMany()
     * 
     * // Get first 10 CourseTeachers
     * const courseTeachers = await prisma.courseTeacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseTeacherWithIdOnly = await prisma.courseTeacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseTeacherFindManyArgs>(args?: SelectSubset<T, CourseTeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseTeacher.
     * @param {CourseTeacherCreateArgs} args - Arguments to create a CourseTeacher.
     * @example
     * // Create one CourseTeacher
     * const CourseTeacher = await prisma.courseTeacher.create({
     *   data: {
     *     // ... data to create a CourseTeacher
     *   }
     * })
     * 
     */
    create<T extends CourseTeacherCreateArgs>(args: SelectSubset<T, CourseTeacherCreateArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseTeachers.
     * @param {CourseTeacherCreateManyArgs} args - Arguments to create many CourseTeachers.
     * @example
     * // Create many CourseTeachers
     * const courseTeacher = await prisma.courseTeacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseTeacherCreateManyArgs>(args?: SelectSubset<T, CourseTeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseTeachers and returns the data saved in the database.
     * @param {CourseTeacherCreateManyAndReturnArgs} args - Arguments to create many CourseTeachers.
     * @example
     * // Create many CourseTeachers
     * const courseTeacher = await prisma.courseTeacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseTeachers and only return the `id`
     * const courseTeacherWithIdOnly = await prisma.courseTeacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseTeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseTeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseTeacher.
     * @param {CourseTeacherDeleteArgs} args - Arguments to delete one CourseTeacher.
     * @example
     * // Delete one CourseTeacher
     * const CourseTeacher = await prisma.courseTeacher.delete({
     *   where: {
     *     // ... filter to delete one CourseTeacher
     *   }
     * })
     * 
     */
    delete<T extends CourseTeacherDeleteArgs>(args: SelectSubset<T, CourseTeacherDeleteArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseTeacher.
     * @param {CourseTeacherUpdateArgs} args - Arguments to update one CourseTeacher.
     * @example
     * // Update one CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseTeacherUpdateArgs>(args: SelectSubset<T, CourseTeacherUpdateArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseTeachers.
     * @param {CourseTeacherDeleteManyArgs} args - Arguments to filter CourseTeachers to delete.
     * @example
     * // Delete a few CourseTeachers
     * const { count } = await prisma.courseTeacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseTeacherDeleteManyArgs>(args?: SelectSubset<T, CourseTeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTeachers
     * const courseTeacher = await prisma.courseTeacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseTeacherUpdateManyArgs>(args: SelectSubset<T, CourseTeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTeachers and returns the data updated in the database.
     * @param {CourseTeacherUpdateManyAndReturnArgs} args - Arguments to update many CourseTeachers.
     * @example
     * // Update many CourseTeachers
     * const courseTeacher = await prisma.courseTeacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseTeachers and only return the `id`
     * const courseTeacherWithIdOnly = await prisma.courseTeacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseTeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseTeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseTeacher.
     * @param {CourseTeacherUpsertArgs} args - Arguments to update or create a CourseTeacher.
     * @example
     * // Update or create a CourseTeacher
     * const courseTeacher = await prisma.courseTeacher.upsert({
     *   create: {
     *     // ... data to create a CourseTeacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseTeacher we want to update
     *   }
     * })
     */
    upsert<T extends CourseTeacherUpsertArgs>(args: SelectSubset<T, CourseTeacherUpsertArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherCountArgs} args - Arguments to filter CourseTeachers to count.
     * @example
     * // Count the number of CourseTeachers
     * const count = await prisma.courseTeacher.count({
     *   where: {
     *     // ... the filter for the CourseTeachers we want to count
     *   }
     * })
    **/
    count<T extends CourseTeacherCountArgs>(
      args?: Subset<T, CourseTeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseTeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseTeacherAggregateArgs>(args: Subset<T, CourseTeacherAggregateArgs>): Prisma.PrismaPromise<GetCourseTeacherAggregateType<T>>

    /**
     * Group by CourseTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseTeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTeacherGroupByArgs['orderBy'] }
        : { orderBy?: CourseTeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseTeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseTeacher model
   */
  readonly fields: CourseTeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseTeacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends CourseTeacher$coursesArgs<ExtArgs> = {}>(args?: Subset<T, CourseTeacher$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseTeacher model
   */
  interface CourseTeacherFieldRefs {
    readonly id: FieldRef<"CourseTeacher", 'String'>
    readonly name: FieldRef<"CourseTeacher", 'String'>
    readonly avatar: FieldRef<"CourseTeacher", 'String'>
    readonly title: FieldRef<"CourseTeacher", 'String'>
    readonly bio: FieldRef<"CourseTeacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseTeacher findUnique
   */
  export type CourseTeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter, which CourseTeacher to fetch.
     */
    where: CourseTeacherWhereUniqueInput
  }

  /**
   * CourseTeacher findUniqueOrThrow
   */
  export type CourseTeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter, which CourseTeacher to fetch.
     */
    where: CourseTeacherWhereUniqueInput
  }

  /**
   * CourseTeacher findFirst
   */
  export type CourseTeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter, which CourseTeacher to fetch.
     */
    where?: CourseTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTeachers to fetch.
     */
    orderBy?: CourseTeacherOrderByWithRelationInput | CourseTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTeachers.
     */
    cursor?: CourseTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTeachers.
     */
    distinct?: CourseTeacherScalarFieldEnum | CourseTeacherScalarFieldEnum[]
  }

  /**
   * CourseTeacher findFirstOrThrow
   */
  export type CourseTeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter, which CourseTeacher to fetch.
     */
    where?: CourseTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTeachers to fetch.
     */
    orderBy?: CourseTeacherOrderByWithRelationInput | CourseTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTeachers.
     */
    cursor?: CourseTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTeachers.
     */
    distinct?: CourseTeacherScalarFieldEnum | CourseTeacherScalarFieldEnum[]
  }

  /**
   * CourseTeacher findMany
   */
  export type CourseTeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter, which CourseTeachers to fetch.
     */
    where?: CourseTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTeachers to fetch.
     */
    orderBy?: CourseTeacherOrderByWithRelationInput | CourseTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseTeachers.
     */
    cursor?: CourseTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTeachers.
     */
    skip?: number
    distinct?: CourseTeacherScalarFieldEnum | CourseTeacherScalarFieldEnum[]
  }

  /**
   * CourseTeacher create
   */
  export type CourseTeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseTeacher.
     */
    data: XOR<CourseTeacherCreateInput, CourseTeacherUncheckedCreateInput>
  }

  /**
   * CourseTeacher createMany
   */
  export type CourseTeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseTeachers.
     */
    data: CourseTeacherCreateManyInput | CourseTeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseTeacher createManyAndReturn
   */
  export type CourseTeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * The data used to create many CourseTeachers.
     */
    data: CourseTeacherCreateManyInput | CourseTeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseTeacher update
   */
  export type CourseTeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseTeacher.
     */
    data: XOR<CourseTeacherUpdateInput, CourseTeacherUncheckedUpdateInput>
    /**
     * Choose, which CourseTeacher to update.
     */
    where: CourseTeacherWhereUniqueInput
  }

  /**
   * CourseTeacher updateMany
   */
  export type CourseTeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseTeachers.
     */
    data: XOR<CourseTeacherUpdateManyMutationInput, CourseTeacherUncheckedUpdateManyInput>
    /**
     * Filter which CourseTeachers to update
     */
    where?: CourseTeacherWhereInput
    /**
     * Limit how many CourseTeachers to update.
     */
    limit?: number
  }

  /**
   * CourseTeacher updateManyAndReturn
   */
  export type CourseTeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * The data used to update CourseTeachers.
     */
    data: XOR<CourseTeacherUpdateManyMutationInput, CourseTeacherUncheckedUpdateManyInput>
    /**
     * Filter which CourseTeachers to update
     */
    where?: CourseTeacherWhereInput
    /**
     * Limit how many CourseTeachers to update.
     */
    limit?: number
  }

  /**
   * CourseTeacher upsert
   */
  export type CourseTeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseTeacher to update in case it exists.
     */
    where: CourseTeacherWhereUniqueInput
    /**
     * In case the CourseTeacher found by the `where` argument doesn't exist, create a new CourseTeacher with this data.
     */
    create: XOR<CourseTeacherCreateInput, CourseTeacherUncheckedCreateInput>
    /**
     * In case the CourseTeacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTeacherUpdateInput, CourseTeacherUncheckedUpdateInput>
  }

  /**
   * CourseTeacher delete
   */
  export type CourseTeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
    /**
     * Filter which CourseTeacher to delete.
     */
    where: CourseTeacherWhereUniqueInput
  }

  /**
   * CourseTeacher deleteMany
   */
  export type CourseTeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTeachers to delete
     */
    where?: CourseTeacherWhereInput
    /**
     * Limit how many CourseTeachers to delete.
     */
    limit?: number
  }

  /**
   * CourseTeacher.courses
   */
  export type CourseTeacher$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * CourseTeacher without action
   */
  export type CourseTeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTeacher
     */
    select?: CourseTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTeacher
     */
    omit?: CourseTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTeacherInclude<ExtArgs> | null
  }


  /**
   * Model CourseTag
   */

  export type AggregateCourseTag = {
    _count: CourseTagCountAggregateOutputType | null
    _min: CourseTagMinAggregateOutputType | null
    _max: CourseTagMaxAggregateOutputType | null
  }

  export type CourseTagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourseTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CourseTagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourseTagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseTagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseTagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourseTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTag to aggregate.
     */
    where?: CourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTags to fetch.
     */
    orderBy?: CourseTagOrderByWithRelationInput | CourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseTags
    **/
    _count?: true | CourseTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseTagMaxAggregateInputType
  }

  export type GetCourseTagAggregateType<T extends CourseTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseTag[P]>
      : GetScalarType<T[P], AggregateCourseTag[P]>
  }




  export type CourseTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTagWhereInput
    orderBy?: CourseTagOrderByWithAggregationInput | CourseTagOrderByWithAggregationInput[]
    by: CourseTagScalarFieldEnum[] | CourseTagScalarFieldEnum
    having?: CourseTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseTagCountAggregateInputType | true
    _min?: CourseTagMinAggregateInputType
    _max?: CourseTagMaxAggregateInputType
  }

  export type CourseTagGroupByOutputType = {
    id: string
    name: string
    _count: CourseTagCountAggregateOutputType | null
    _min: CourseTagMinAggregateOutputType | null
    _max: CourseTagMaxAggregateOutputType | null
  }

  type GetCourseTagGroupByPayload<T extends CourseTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTagGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTagGroupByOutputType[P]>
        }
      >
    >


  export type CourseTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courses?: boolean | CourseTag$coursesArgs<ExtArgs>
    _count?: boolean | CourseTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTag"]>

  export type CourseTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseTag"]>

  export type CourseTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseTag"]>

  export type CourseTagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CourseTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["courseTag"]>
  export type CourseTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | CourseTag$coursesArgs<ExtArgs>
    _count?: boolean | CourseTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseTag"
    objects: {
      courses: Prisma.$CourseTagOnCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["courseTag"]>
    composites: {}
  }

  type CourseTagGetPayload<S extends boolean | null | undefined | CourseTagDefaultArgs> = $Result.GetResult<Prisma.$CourseTagPayload, S>

  type CourseTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseTagCountAggregateInputType | true
    }

  export interface CourseTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseTag'], meta: { name: 'CourseTag' } }
    /**
     * Find zero or one CourseTag that matches the filter.
     * @param {CourseTagFindUniqueArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTagFindUniqueArgs>(args: SelectSubset<T, CourseTagFindUniqueArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseTagFindUniqueOrThrowArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindFirstArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTagFindFirstArgs>(args?: SelectSubset<T, CourseTagFindFirstArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindFirstOrThrowArgs} args - Arguments to find a CourseTag
     * @example
     * // Get one CourseTag
     * const courseTag = await prisma.courseTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTags
     * const courseTags = await prisma.courseTag.findMany()
     * 
     * // Get first 10 CourseTags
     * const courseTags = await prisma.courseTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseTagWithIdOnly = await prisma.courseTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseTagFindManyArgs>(args?: SelectSubset<T, CourseTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseTag.
     * @param {CourseTagCreateArgs} args - Arguments to create a CourseTag.
     * @example
     * // Create one CourseTag
     * const CourseTag = await prisma.courseTag.create({
     *   data: {
     *     // ... data to create a CourseTag
     *   }
     * })
     * 
     */
    create<T extends CourseTagCreateArgs>(args: SelectSubset<T, CourseTagCreateArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseTags.
     * @param {CourseTagCreateManyArgs} args - Arguments to create many CourseTags.
     * @example
     * // Create many CourseTags
     * const courseTag = await prisma.courseTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseTagCreateManyArgs>(args?: SelectSubset<T, CourseTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseTags and returns the data saved in the database.
     * @param {CourseTagCreateManyAndReturnArgs} args - Arguments to create many CourseTags.
     * @example
     * // Create many CourseTags
     * const courseTag = await prisma.courseTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseTags and only return the `id`
     * const courseTagWithIdOnly = await prisma.courseTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseTag.
     * @param {CourseTagDeleteArgs} args - Arguments to delete one CourseTag.
     * @example
     * // Delete one CourseTag
     * const CourseTag = await prisma.courseTag.delete({
     *   where: {
     *     // ... filter to delete one CourseTag
     *   }
     * })
     * 
     */
    delete<T extends CourseTagDeleteArgs>(args: SelectSubset<T, CourseTagDeleteArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseTag.
     * @param {CourseTagUpdateArgs} args - Arguments to update one CourseTag.
     * @example
     * // Update one CourseTag
     * const courseTag = await prisma.courseTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseTagUpdateArgs>(args: SelectSubset<T, CourseTagUpdateArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseTags.
     * @param {CourseTagDeleteManyArgs} args - Arguments to filter CourseTags to delete.
     * @example
     * // Delete a few CourseTags
     * const { count } = await prisma.courseTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseTagDeleteManyArgs>(args?: SelectSubset<T, CourseTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTags
     * const courseTag = await prisma.courseTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseTagUpdateManyArgs>(args: SelectSubset<T, CourseTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTags and returns the data updated in the database.
     * @param {CourseTagUpdateManyAndReturnArgs} args - Arguments to update many CourseTags.
     * @example
     * // Update many CourseTags
     * const courseTag = await prisma.courseTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseTags and only return the `id`
     * const courseTagWithIdOnly = await prisma.courseTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseTag.
     * @param {CourseTagUpsertArgs} args - Arguments to update or create a CourseTag.
     * @example
     * // Update or create a CourseTag
     * const courseTag = await prisma.courseTag.upsert({
     *   create: {
     *     // ... data to create a CourseTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseTag we want to update
     *   }
     * })
     */
    upsert<T extends CourseTagUpsertArgs>(args: SelectSubset<T, CourseTagUpsertArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagCountArgs} args - Arguments to filter CourseTags to count.
     * @example
     * // Count the number of CourseTags
     * const count = await prisma.courseTag.count({
     *   where: {
     *     // ... the filter for the CourseTags we want to count
     *   }
     * })
    **/
    count<T extends CourseTagCountArgs>(
      args?: Subset<T, CourseTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseTagAggregateArgs>(args: Subset<T, CourseTagAggregateArgs>): Prisma.PrismaPromise<GetCourseTagAggregateType<T>>

    /**
     * Group by CourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTagGroupByArgs['orderBy'] }
        : { orderBy?: CourseTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseTag model
   */
  readonly fields: CourseTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends CourseTag$coursesArgs<ExtArgs> = {}>(args?: Subset<T, CourseTag$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseTag model
   */
  interface CourseTagFieldRefs {
    readonly id: FieldRef<"CourseTag", 'String'>
    readonly name: FieldRef<"CourseTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseTag findUnique
   */
  export type CourseTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter, which CourseTag to fetch.
     */
    where: CourseTagWhereUniqueInput
  }

  /**
   * CourseTag findUniqueOrThrow
   */
  export type CourseTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter, which CourseTag to fetch.
     */
    where: CourseTagWhereUniqueInput
  }

  /**
   * CourseTag findFirst
   */
  export type CourseTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter, which CourseTag to fetch.
     */
    where?: CourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTags to fetch.
     */
    orderBy?: CourseTagOrderByWithRelationInput | CourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTags.
     */
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[]
  }

  /**
   * CourseTag findFirstOrThrow
   */
  export type CourseTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter, which CourseTag to fetch.
     */
    where?: CourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTags to fetch.
     */
    orderBy?: CourseTagOrderByWithRelationInput | CourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTags.
     */
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[]
  }

  /**
   * CourseTag findMany
   */
  export type CourseTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter, which CourseTags to fetch.
     */
    where?: CourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTags to fetch.
     */
    orderBy?: CourseTagOrderByWithRelationInput | CourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseTags.
     */
    cursor?: CourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTags.
     */
    skip?: number
    distinct?: CourseTagScalarFieldEnum | CourseTagScalarFieldEnum[]
  }

  /**
   * CourseTag create
   */
  export type CourseTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseTag.
     */
    data: XOR<CourseTagCreateInput, CourseTagUncheckedCreateInput>
  }

  /**
   * CourseTag createMany
   */
  export type CourseTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseTags.
     */
    data: CourseTagCreateManyInput | CourseTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseTag createManyAndReturn
   */
  export type CourseTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * The data used to create many CourseTags.
     */
    data: CourseTagCreateManyInput | CourseTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseTag update
   */
  export type CourseTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseTag.
     */
    data: XOR<CourseTagUpdateInput, CourseTagUncheckedUpdateInput>
    /**
     * Choose, which CourseTag to update.
     */
    where: CourseTagWhereUniqueInput
  }

  /**
   * CourseTag updateMany
   */
  export type CourseTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseTags.
     */
    data: XOR<CourseTagUpdateManyMutationInput, CourseTagUncheckedUpdateManyInput>
    /**
     * Filter which CourseTags to update
     */
    where?: CourseTagWhereInput
    /**
     * Limit how many CourseTags to update.
     */
    limit?: number
  }

  /**
   * CourseTag updateManyAndReturn
   */
  export type CourseTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * The data used to update CourseTags.
     */
    data: XOR<CourseTagUpdateManyMutationInput, CourseTagUncheckedUpdateManyInput>
    /**
     * Filter which CourseTags to update
     */
    where?: CourseTagWhereInput
    /**
     * Limit how many CourseTags to update.
     */
    limit?: number
  }

  /**
   * CourseTag upsert
   */
  export type CourseTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseTag to update in case it exists.
     */
    where: CourseTagWhereUniqueInput
    /**
     * In case the CourseTag found by the `where` argument doesn't exist, create a new CourseTag with this data.
     */
    create: XOR<CourseTagCreateInput, CourseTagUncheckedCreateInput>
    /**
     * In case the CourseTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTagUpdateInput, CourseTagUncheckedUpdateInput>
  }

  /**
   * CourseTag delete
   */
  export type CourseTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
    /**
     * Filter which CourseTag to delete.
     */
    where: CourseTagWhereUniqueInput
  }

  /**
   * CourseTag deleteMany
   */
  export type CourseTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTags to delete
     */
    where?: CourseTagWhereInput
    /**
     * Limit how many CourseTags to delete.
     */
    limit?: number
  }

  /**
   * CourseTag.courses
   */
  export type CourseTag$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    where?: CourseTagOnCourseWhereInput
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    cursor?: CourseTagOnCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseTagOnCourseScalarFieldEnum | CourseTagOnCourseScalarFieldEnum[]
  }

  /**
   * CourseTag without action
   */
  export type CourseTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTag
     */
    select?: CourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTag
     */
    omit?: CourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagInclude<ExtArgs> | null
  }


  /**
   * Model CourseTagOnCourse
   */

  export type AggregateCourseTagOnCourse = {
    _count: CourseTagOnCourseCountAggregateOutputType | null
    _min: CourseTagOnCourseMinAggregateOutputType | null
    _max: CourseTagOnCourseMaxAggregateOutputType | null
  }

  export type CourseTagOnCourseMinAggregateOutputType = {
    courseId: string | null
    tagId: string | null
  }

  export type CourseTagOnCourseMaxAggregateOutputType = {
    courseId: string | null
    tagId: string | null
  }

  export type CourseTagOnCourseCountAggregateOutputType = {
    courseId: number
    tagId: number
    _all: number
  }


  export type CourseTagOnCourseMinAggregateInputType = {
    courseId?: true
    tagId?: true
  }

  export type CourseTagOnCourseMaxAggregateInputType = {
    courseId?: true
    tagId?: true
  }

  export type CourseTagOnCourseCountAggregateInputType = {
    courseId?: true
    tagId?: true
    _all?: true
  }

  export type CourseTagOnCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTagOnCourse to aggregate.
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTagOnCourses to fetch.
     */
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseTagOnCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTagOnCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTagOnCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseTagOnCourses
    **/
    _count?: true | CourseTagOnCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseTagOnCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseTagOnCourseMaxAggregateInputType
  }

  export type GetCourseTagOnCourseAggregateType<T extends CourseTagOnCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseTagOnCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseTagOnCourse[P]>
      : GetScalarType<T[P], AggregateCourseTagOnCourse[P]>
  }




  export type CourseTagOnCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTagOnCourseWhereInput
    orderBy?: CourseTagOnCourseOrderByWithAggregationInput | CourseTagOnCourseOrderByWithAggregationInput[]
    by: CourseTagOnCourseScalarFieldEnum[] | CourseTagOnCourseScalarFieldEnum
    having?: CourseTagOnCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseTagOnCourseCountAggregateInputType | true
    _min?: CourseTagOnCourseMinAggregateInputType
    _max?: CourseTagOnCourseMaxAggregateInputType
  }

  export type CourseTagOnCourseGroupByOutputType = {
    courseId: string
    tagId: string
    _count: CourseTagOnCourseCountAggregateOutputType | null
    _min: CourseTagOnCourseMinAggregateOutputType | null
    _max: CourseTagOnCourseMaxAggregateOutputType | null
  }

  type GetCourseTagOnCourseGroupByPayload<T extends CourseTagOnCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseTagOnCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseTagOnCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTagOnCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTagOnCourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseTagOnCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    tagId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTagOnCourse"]>

  export type CourseTagOnCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    tagId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTagOnCourse"]>

  export type CourseTagOnCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    courseId?: boolean
    tagId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTagOnCourse"]>

  export type CourseTagOnCourseSelectScalar = {
    courseId?: boolean
    tagId?: boolean
  }

  export type CourseTagOnCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"courseId" | "tagId", ExtArgs["result"]["courseTagOnCourse"]>
  export type CourseTagOnCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }
  export type CourseTagOnCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }
  export type CourseTagOnCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tag?: boolean | CourseTagDefaultArgs<ExtArgs>
  }

  export type $CourseTagOnCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseTagOnCourse"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      tag: Prisma.$CourseTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      courseId: string
      tagId: string
    }, ExtArgs["result"]["courseTagOnCourse"]>
    composites: {}
  }

  type CourseTagOnCourseGetPayload<S extends boolean | null | undefined | CourseTagOnCourseDefaultArgs> = $Result.GetResult<Prisma.$CourseTagOnCoursePayload, S>

  type CourseTagOnCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseTagOnCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseTagOnCourseCountAggregateInputType | true
    }

  export interface CourseTagOnCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseTagOnCourse'], meta: { name: 'CourseTagOnCourse' } }
    /**
     * Find zero or one CourseTagOnCourse that matches the filter.
     * @param {CourseTagOnCourseFindUniqueArgs} args - Arguments to find a CourseTagOnCourse
     * @example
     * // Get one CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTagOnCourseFindUniqueArgs>(args: SelectSubset<T, CourseTagOnCourseFindUniqueArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseTagOnCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseTagOnCourseFindUniqueOrThrowArgs} args - Arguments to find a CourseTagOnCourse
     * @example
     * // Get one CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTagOnCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseTagOnCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTagOnCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseFindFirstArgs} args - Arguments to find a CourseTagOnCourse
     * @example
     * // Get one CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTagOnCourseFindFirstArgs>(args?: SelectSubset<T, CourseTagOnCourseFindFirstArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseTagOnCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseFindFirstOrThrowArgs} args - Arguments to find a CourseTagOnCourse
     * @example
     * // Get one CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTagOnCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseTagOnCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseTagOnCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTagOnCourses
     * const courseTagOnCourses = await prisma.courseTagOnCourse.findMany()
     * 
     * // Get first 10 CourseTagOnCourses
     * const courseTagOnCourses = await prisma.courseTagOnCourse.findMany({ take: 10 })
     * 
     * // Only select the `courseId`
     * const courseTagOnCourseWithCourseIdOnly = await prisma.courseTagOnCourse.findMany({ select: { courseId: true } })
     * 
     */
    findMany<T extends CourseTagOnCourseFindManyArgs>(args?: SelectSubset<T, CourseTagOnCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseTagOnCourse.
     * @param {CourseTagOnCourseCreateArgs} args - Arguments to create a CourseTagOnCourse.
     * @example
     * // Create one CourseTagOnCourse
     * const CourseTagOnCourse = await prisma.courseTagOnCourse.create({
     *   data: {
     *     // ... data to create a CourseTagOnCourse
     *   }
     * })
     * 
     */
    create<T extends CourseTagOnCourseCreateArgs>(args: SelectSubset<T, CourseTagOnCourseCreateArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseTagOnCourses.
     * @param {CourseTagOnCourseCreateManyArgs} args - Arguments to create many CourseTagOnCourses.
     * @example
     * // Create many CourseTagOnCourses
     * const courseTagOnCourse = await prisma.courseTagOnCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseTagOnCourseCreateManyArgs>(args?: SelectSubset<T, CourseTagOnCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseTagOnCourses and returns the data saved in the database.
     * @param {CourseTagOnCourseCreateManyAndReturnArgs} args - Arguments to create many CourseTagOnCourses.
     * @example
     * // Create many CourseTagOnCourses
     * const courseTagOnCourse = await prisma.courseTagOnCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseTagOnCourses and only return the `courseId`
     * const courseTagOnCourseWithCourseIdOnly = await prisma.courseTagOnCourse.createManyAndReturn({
     *   select: { courseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseTagOnCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseTagOnCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseTagOnCourse.
     * @param {CourseTagOnCourseDeleteArgs} args - Arguments to delete one CourseTagOnCourse.
     * @example
     * // Delete one CourseTagOnCourse
     * const CourseTagOnCourse = await prisma.courseTagOnCourse.delete({
     *   where: {
     *     // ... filter to delete one CourseTagOnCourse
     *   }
     * })
     * 
     */
    delete<T extends CourseTagOnCourseDeleteArgs>(args: SelectSubset<T, CourseTagOnCourseDeleteArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseTagOnCourse.
     * @param {CourseTagOnCourseUpdateArgs} args - Arguments to update one CourseTagOnCourse.
     * @example
     * // Update one CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseTagOnCourseUpdateArgs>(args: SelectSubset<T, CourseTagOnCourseUpdateArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseTagOnCourses.
     * @param {CourseTagOnCourseDeleteManyArgs} args - Arguments to filter CourseTagOnCourses to delete.
     * @example
     * // Delete a few CourseTagOnCourses
     * const { count } = await prisma.courseTagOnCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseTagOnCourseDeleteManyArgs>(args?: SelectSubset<T, CourseTagOnCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTagOnCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTagOnCourses
     * const courseTagOnCourse = await prisma.courseTagOnCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseTagOnCourseUpdateManyArgs>(args: SelectSubset<T, CourseTagOnCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTagOnCourses and returns the data updated in the database.
     * @param {CourseTagOnCourseUpdateManyAndReturnArgs} args - Arguments to update many CourseTagOnCourses.
     * @example
     * // Update many CourseTagOnCourses
     * const courseTagOnCourse = await prisma.courseTagOnCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseTagOnCourses and only return the `courseId`
     * const courseTagOnCourseWithCourseIdOnly = await prisma.courseTagOnCourse.updateManyAndReturn({
     *   select: { courseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseTagOnCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseTagOnCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseTagOnCourse.
     * @param {CourseTagOnCourseUpsertArgs} args - Arguments to update or create a CourseTagOnCourse.
     * @example
     * // Update or create a CourseTagOnCourse
     * const courseTagOnCourse = await prisma.courseTagOnCourse.upsert({
     *   create: {
     *     // ... data to create a CourseTagOnCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseTagOnCourse we want to update
     *   }
     * })
     */
    upsert<T extends CourseTagOnCourseUpsertArgs>(args: SelectSubset<T, CourseTagOnCourseUpsertArgs<ExtArgs>>): Prisma__CourseTagOnCourseClient<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseTagOnCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseCountArgs} args - Arguments to filter CourseTagOnCourses to count.
     * @example
     * // Count the number of CourseTagOnCourses
     * const count = await prisma.courseTagOnCourse.count({
     *   where: {
     *     // ... the filter for the CourseTagOnCourses we want to count
     *   }
     * })
    **/
    count<T extends CourseTagOnCourseCountArgs>(
      args?: Subset<T, CourseTagOnCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseTagOnCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseTagOnCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseTagOnCourseAggregateArgs>(args: Subset<T, CourseTagOnCourseAggregateArgs>): Prisma.PrismaPromise<GetCourseTagOnCourseAggregateType<T>>

    /**
     * Group by CourseTagOnCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTagOnCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseTagOnCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTagOnCourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseTagOnCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseTagOnCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseTagOnCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseTagOnCourse model
   */
  readonly fields: CourseTagOnCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseTagOnCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTagOnCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends CourseTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseTagDefaultArgs<ExtArgs>>): Prisma__CourseTagClient<$Result.GetResult<Prisma.$CourseTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseTagOnCourse model
   */
  interface CourseTagOnCourseFieldRefs {
    readonly courseId: FieldRef<"CourseTagOnCourse", 'String'>
    readonly tagId: FieldRef<"CourseTagOnCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseTagOnCourse findUnique
   */
  export type CourseTagOnCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter, which CourseTagOnCourse to fetch.
     */
    where: CourseTagOnCourseWhereUniqueInput
  }

  /**
   * CourseTagOnCourse findUniqueOrThrow
   */
  export type CourseTagOnCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter, which CourseTagOnCourse to fetch.
     */
    where: CourseTagOnCourseWhereUniqueInput
  }

  /**
   * CourseTagOnCourse findFirst
   */
  export type CourseTagOnCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter, which CourseTagOnCourse to fetch.
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTagOnCourses to fetch.
     */
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTagOnCourses.
     */
    cursor?: CourseTagOnCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTagOnCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTagOnCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTagOnCourses.
     */
    distinct?: CourseTagOnCourseScalarFieldEnum | CourseTagOnCourseScalarFieldEnum[]
  }

  /**
   * CourseTagOnCourse findFirstOrThrow
   */
  export type CourseTagOnCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter, which CourseTagOnCourse to fetch.
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTagOnCourses to fetch.
     */
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTagOnCourses.
     */
    cursor?: CourseTagOnCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTagOnCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTagOnCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTagOnCourses.
     */
    distinct?: CourseTagOnCourseScalarFieldEnum | CourseTagOnCourseScalarFieldEnum[]
  }

  /**
   * CourseTagOnCourse findMany
   */
  export type CourseTagOnCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter, which CourseTagOnCourses to fetch.
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTagOnCourses to fetch.
     */
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseTagOnCourses.
     */
    cursor?: CourseTagOnCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTagOnCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTagOnCourses.
     */
    skip?: number
    distinct?: CourseTagOnCourseScalarFieldEnum | CourseTagOnCourseScalarFieldEnum[]
  }

  /**
   * CourseTagOnCourse create
   */
  export type CourseTagOnCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseTagOnCourse.
     */
    data: XOR<CourseTagOnCourseCreateInput, CourseTagOnCourseUncheckedCreateInput>
  }

  /**
   * CourseTagOnCourse createMany
   */
  export type CourseTagOnCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseTagOnCourses.
     */
    data: CourseTagOnCourseCreateManyInput | CourseTagOnCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseTagOnCourse createManyAndReturn
   */
  export type CourseTagOnCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CourseTagOnCourses.
     */
    data: CourseTagOnCourseCreateManyInput | CourseTagOnCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseTagOnCourse update
   */
  export type CourseTagOnCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseTagOnCourse.
     */
    data: XOR<CourseTagOnCourseUpdateInput, CourseTagOnCourseUncheckedUpdateInput>
    /**
     * Choose, which CourseTagOnCourse to update.
     */
    where: CourseTagOnCourseWhereUniqueInput
  }

  /**
   * CourseTagOnCourse updateMany
   */
  export type CourseTagOnCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseTagOnCourses.
     */
    data: XOR<CourseTagOnCourseUpdateManyMutationInput, CourseTagOnCourseUncheckedUpdateManyInput>
    /**
     * Filter which CourseTagOnCourses to update
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * Limit how many CourseTagOnCourses to update.
     */
    limit?: number
  }

  /**
   * CourseTagOnCourse updateManyAndReturn
   */
  export type CourseTagOnCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * The data used to update CourseTagOnCourses.
     */
    data: XOR<CourseTagOnCourseUpdateManyMutationInput, CourseTagOnCourseUncheckedUpdateManyInput>
    /**
     * Filter which CourseTagOnCourses to update
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * Limit how many CourseTagOnCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseTagOnCourse upsert
   */
  export type CourseTagOnCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseTagOnCourse to update in case it exists.
     */
    where: CourseTagOnCourseWhereUniqueInput
    /**
     * In case the CourseTagOnCourse found by the `where` argument doesn't exist, create a new CourseTagOnCourse with this data.
     */
    create: XOR<CourseTagOnCourseCreateInput, CourseTagOnCourseUncheckedCreateInput>
    /**
     * In case the CourseTagOnCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTagOnCourseUpdateInput, CourseTagOnCourseUncheckedUpdateInput>
  }

  /**
   * CourseTagOnCourse delete
   */
  export type CourseTagOnCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    /**
     * Filter which CourseTagOnCourse to delete.
     */
    where: CourseTagOnCourseWhereUniqueInput
  }

  /**
   * CourseTagOnCourse deleteMany
   */
  export type CourseTagOnCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTagOnCourses to delete
     */
    where?: CourseTagOnCourseWhereInput
    /**
     * Limit how many CourseTagOnCourses to delete.
     */
    limit?: number
  }

  /**
   * CourseTagOnCourse without action
   */
  export type CourseTagOnCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: Decimal | null
    originalPrice: Decimal | null
    students: number | null
    rating: Decimal | null
    totalDuration: Decimal | null
    sortOrder: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: Decimal | null
    originalPrice: Decimal | null
    students: number | null
    rating: Decimal | null
    totalDuration: Decimal | null
    sortOrder: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    teacherId: string | null
    description: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    students: number | null
    rating: Decimal | null
    totalDuration: Decimal | null
    isPublished: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    categoryId: string | null
    teacherId: string | null
    description: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    students: number | null
    rating: Decimal | null
    totalDuration: Decimal | null
    isPublished: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    categoryId: number
    teacherId: number
    description: number
    youWillLearn: number
    suitableFor: number
    price: number
    originalPrice: number
    students: number
    rating: number
    totalDuration: number
    images: number
    isPublished: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    originalPrice?: true
    students?: true
    rating?: true
    totalDuration?: true
    sortOrder?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    originalPrice?: true
    students?: true
    rating?: true
    totalDuration?: true
    sortOrder?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    teacherId?: true
    description?: true
    price?: true
    originalPrice?: true
    students?: true
    rating?: true
    totalDuration?: true
    isPublished?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    teacherId?: true
    description?: true
    price?: true
    originalPrice?: true
    students?: true
    rating?: true
    totalDuration?: true
    isPublished?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    categoryId?: true
    teacherId?: true
    description?: true
    youWillLearn?: true
    suitableFor?: true
    price?: true
    originalPrice?: true
    students?: true
    rating?: true
    totalDuration?: true
    images?: true
    isPublished?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn: string[]
    suitableFor: string[]
    price: Decimal
    originalPrice: Decimal
    students: number
    rating: Decimal
    totalDuration: Decimal
    images: string[]
    isPublished: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    teacherId?: boolean
    description?: boolean
    youWillLearn?: boolean
    suitableFor?: boolean
    price?: boolean
    originalPrice?: boolean
    students?: boolean
    rating?: boolean
    totalDuration?: boolean
    images?: boolean
    isPublished?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
    tags?: boolean | Course$tagsArgs<ExtArgs>
    content?: boolean | Course$contentArgs<ExtArgs>
    CourseReview?: boolean | Course$CourseReviewArgs<ExtArgs>
    CourseFavorite?: boolean | Course$CourseFavoriteArgs<ExtArgs>
    CoursePurchase?: boolean | Course$CoursePurchaseArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    teacherId?: boolean
    description?: boolean
    youWillLearn?: boolean
    suitableFor?: boolean
    price?: boolean
    originalPrice?: boolean
    students?: boolean
    rating?: boolean
    totalDuration?: boolean
    images?: boolean
    isPublished?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    teacherId?: boolean
    description?: boolean
    youWillLearn?: boolean
    suitableFor?: boolean
    price?: boolean
    originalPrice?: boolean
    students?: boolean
    rating?: boolean
    totalDuration?: boolean
    images?: boolean
    isPublished?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    categoryId?: boolean
    teacherId?: boolean
    description?: boolean
    youWillLearn?: boolean
    suitableFor?: boolean
    price?: boolean
    originalPrice?: boolean
    students?: boolean
    rating?: boolean
    totalDuration?: boolean
    images?: boolean
    isPublished?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "categoryId" | "teacherId" | "description" | "youWillLearn" | "suitableFor" | "price" | "originalPrice" | "students" | "rating" | "totalDuration" | "images" | "isPublished" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
    tags?: boolean | Course$tagsArgs<ExtArgs>
    content?: boolean | Course$contentArgs<ExtArgs>
    CourseReview?: boolean | Course$CourseReviewArgs<ExtArgs>
    CourseFavorite?: boolean | Course$CourseFavoriteArgs<ExtArgs>
    CoursePurchase?: boolean | Course$CoursePurchaseArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CourseCategoryDefaultArgs<ExtArgs>
    teacher?: boolean | CourseTeacherDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      category: Prisma.$CourseCategoryPayload<ExtArgs>
      teacher: Prisma.$CourseTeacherPayload<ExtArgs>
      tags: Prisma.$CourseTagOnCoursePayload<ExtArgs>[]
      content: Prisma.$CourseContentPayload<ExtArgs>[]
      CourseReview: Prisma.$CourseReviewPayload<ExtArgs>[]
      CourseFavorite: Prisma.$CourseFavoritePayload<ExtArgs>[]
      CoursePurchase: Prisma.$CoursePurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      categoryId: string
      teacherId: string
      description: string
      youWillLearn: string[]
      suitableFor: string[]
      price: Prisma.Decimal
      originalPrice: Prisma.Decimal
      students: number
      rating: Prisma.Decimal
      totalDuration: Prisma.Decimal
      images: string[]
      isPublished: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CourseCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseCategoryDefaultArgs<ExtArgs>>): Prisma__CourseCategoryClient<$Result.GetResult<Prisma.$CourseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends CourseTeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseTeacherDefaultArgs<ExtArgs>>): Prisma__CourseTeacherClient<$Result.GetResult<Prisma.$CourseTeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Course$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Course$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTagOnCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    content<T extends Course$contentArgs<ExtArgs> = {}>(args?: Subset<T, Course$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CourseReview<T extends Course$CourseReviewArgs<ExtArgs> = {}>(args?: Subset<T, Course$CourseReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CourseFavorite<T extends Course$CourseFavoriteArgs<ExtArgs> = {}>(args?: Subset<T, Course$CourseFavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseFavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CoursePurchase<T extends Course$CoursePurchaseArgs<ExtArgs> = {}>(args?: Subset<T, Course$CoursePurchaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly categoryId: FieldRef<"Course", 'String'>
    readonly teacherId: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly youWillLearn: FieldRef<"Course", 'String[]'>
    readonly suitableFor: FieldRef<"Course", 'String[]'>
    readonly price: FieldRef<"Course", 'Decimal'>
    readonly originalPrice: FieldRef<"Course", 'Decimal'>
    readonly students: FieldRef<"Course", 'Int'>
    readonly rating: FieldRef<"Course", 'Decimal'>
    readonly totalDuration: FieldRef<"Course", 'Decimal'>
    readonly images: FieldRef<"Course", 'String[]'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
    readonly sortOrder: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.tags
   */
  export type Course$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTagOnCourse
     */
    select?: CourseTagOnCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseTagOnCourse
     */
    omit?: CourseTagOnCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTagOnCourseInclude<ExtArgs> | null
    where?: CourseTagOnCourseWhereInput
    orderBy?: CourseTagOnCourseOrderByWithRelationInput | CourseTagOnCourseOrderByWithRelationInput[]
    cursor?: CourseTagOnCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseTagOnCourseScalarFieldEnum | CourseTagOnCourseScalarFieldEnum[]
  }

  /**
   * Course.content
   */
  export type Course$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    where?: CourseContentWhereInput
    orderBy?: CourseContentOrderByWithRelationInput | CourseContentOrderByWithRelationInput[]
    cursor?: CourseContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseContentScalarFieldEnum | CourseContentScalarFieldEnum[]
  }

  /**
   * Course.CourseReview
   */
  export type Course$CourseReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseReview
     */
    select?: CourseReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseReview
     */
    omit?: CourseReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseReviewInclude<ExtArgs> | null
    where?: CourseReviewWhereInput
    orderBy?: CourseReviewOrderByWithRelationInput | CourseReviewOrderByWithRelationInput[]
    cursor?: CourseReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseReviewScalarFieldEnum | CourseReviewScalarFieldEnum[]
  }

  /**
   * Course.CourseFavorite
   */
  export type Course$CourseFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseFavorite
     */
    select?: CourseFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseFavorite
     */
    omit?: CourseFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseFavoriteInclude<ExtArgs> | null
    where?: CourseFavoriteWhereInput
    orderBy?: CourseFavoriteOrderByWithRelationInput | CourseFavoriteOrderByWithRelationInput[]
    cursor?: CourseFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseFavoriteScalarFieldEnum | CourseFavoriteScalarFieldEnum[]
  }

  /**
   * Course.CoursePurchase
   */
  export type Course$CoursePurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    cursor?: CoursePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseContent
   */

  export type AggregateCourseContent = {
    _count: CourseContentCountAggregateOutputType | null
    _avg: CourseContentAvgAggregateOutputType | null
    _sum: CourseContentSumAggregateOutputType | null
    _min: CourseContentMinAggregateOutputType | null
    _max: CourseContentMaxAggregateOutputType | null
  }

  export type CourseContentAvgAggregateOutputType = {
    order: number | null
  }

  export type CourseContentSumAggregateOutputType = {
    order: number | null
  }

  export type CourseContentMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    videoUrl: string | null
    isPreview: boolean | null
  }

  export type CourseContentMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    content: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    videoUrl: string | null
    isPreview: boolean | null
  }

  export type CourseContentCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    content: number
    order: number
    createdAt: number
    updatedAt: number
    videoUrl: number
    isPreview: number
    _all: number
  }


  export type CourseContentAvgAggregateInputType = {
    order?: true
  }

  export type CourseContentSumAggregateInputType = {
    order?: true
  }

  export type CourseContentMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    content?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    isPreview?: true
  }

  export type CourseContentMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    content?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    isPreview?: true
  }

  export type CourseContentCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    content?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    videoUrl?: true
    isPreview?: true
    _all?: true
  }

  export type CourseContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseContent to aggregate.
     */
    where?: CourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseContents to fetch.
     */
    orderBy?: CourseContentOrderByWithRelationInput | CourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseContents
    **/
    _count?: true | CourseContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseContentMaxAggregateInputType
  }

  export type GetCourseContentAggregateType<T extends CourseContentAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseContent[P]>
      : GetScalarType<T[P], AggregateCourseContent[P]>
  }




  export type CourseContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseContentWhereInput
    orderBy?: CourseContentOrderByWithAggregationInput | CourseContentOrderByWithAggregationInput[]
    by: CourseContentScalarFieldEnum[] | CourseContentScalarFieldEnum
    having?: CourseContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseContentCountAggregateInputType | true
    _avg?: CourseContentAvgAggregateInputType
    _sum?: CourseContentSumAggregateInputType
    _min?: CourseContentMinAggregateInputType
    _max?: CourseContentMaxAggregateInputType
  }

  export type CourseContentGroupByOutputType = {
    id: string
    courseId: string
    title: string
    content: string
    order: number
    createdAt: Date
    updatedAt: Date
    videoUrl: string | null
    isPreview: boolean
    _count: CourseContentCountAggregateOutputType | null
    _avg: CourseContentAvgAggregateOutputType | null
    _sum: CourseContentSumAggregateOutputType | null
    _min: CourseContentMinAggregateOutputType | null
    _max: CourseContentMaxAggregateOutputType | null
  }

  type GetCourseContentGroupByPayload<T extends CourseContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseContentGroupByOutputType[P]>
            : GetScalarType<T[P], CourseContentGroupByOutputType[P]>
        }
      >
    >


  export type CourseContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    isPreview?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseContent"]>

  export type CourseContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    isPreview?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseContent"]>

  export type CourseContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    isPreview?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseContent"]>

  export type CourseContentSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    content?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videoUrl?: boolean
    isPreview?: boolean
  }

  export type CourseContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "content" | "order" | "createdAt" | "updatedAt" | "videoUrl" | "isPreview", ExtArgs["result"]["courseContent"]>
  export type CourseContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseContent"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      content: string
      order: number
      createdAt: Date
      updatedAt: Date
      videoUrl: string | null
      isPreview: boolean
    }, ExtArgs["result"]["courseContent"]>
    composites: {}
  }

  type CourseContentGetPayload<S extends boolean | null | undefined | CourseContentDefaultArgs> = $Result.GetResult<Prisma.$CourseContentPayload, S>

  type CourseContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseContentCountAggregateInputType | true
    }

  export interface CourseContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseContent'], meta: { name: 'CourseContent' } }
    /**
     * Find zero or one CourseContent that matches the filter.
     * @param {CourseContentFindUniqueArgs} args - Arguments to find a CourseContent
     * @example
     * // Get one CourseContent
     * const courseContent = await prisma.courseContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseContentFindUniqueArgs>(args: SelectSubset<T, CourseContentFindUniqueArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseContentFindUniqueOrThrowArgs} args - Arguments to find a CourseContent
     * @example
     * // Get one CourseContent
     * const courseContent = await prisma.courseContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseContentFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentFindFirstArgs} args - Arguments to find a CourseContent
     * @example
     * // Get one CourseContent
     * const courseContent = await prisma.courseContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseContentFindFirstArgs>(args?: SelectSubset<T, CourseContentFindFirstArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentFindFirstOrThrowArgs} args - Arguments to find a CourseContent
     * @example
     * // Get one CourseContent
     * const courseContent = await prisma.courseContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseContentFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseContents
     * const courseContents = await prisma.courseContent.findMany()
     * 
     * // Get first 10 CourseContents
     * const courseContents = await prisma.courseContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseContentWithIdOnly = await prisma.courseContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseContentFindManyArgs>(args?: SelectSubset<T, CourseContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseContent.
     * @param {CourseContentCreateArgs} args - Arguments to create a CourseContent.
     * @example
     * // Create one CourseContent
     * const CourseContent = await prisma.courseContent.create({
     *   data: {
     *     // ... data to create a CourseContent
     *   }
     * })
     * 
     */
    create<T extends CourseContentCreateArgs>(args: SelectSubset<T, CourseContentCreateArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseContents.
     * @param {CourseContentCreateManyArgs} args - Arguments to create many CourseContents.
     * @example
     * // Create many CourseContents
     * const courseContent = await prisma.courseContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseContentCreateManyArgs>(args?: SelectSubset<T, CourseContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseContents and returns the data saved in the database.
     * @param {CourseContentCreateManyAndReturnArgs} args - Arguments to create many CourseContents.
     * @example
     * // Create many CourseContents
     * const courseContent = await prisma.courseContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseContents and only return the `id`
     * const courseContentWithIdOnly = await prisma.courseContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseContentCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseContent.
     * @param {CourseContentDeleteArgs} args - Arguments to delete one CourseContent.
     * @example
     * // Delete one CourseContent
     * const CourseContent = await prisma.courseContent.delete({
     *   where: {
     *     // ... filter to delete one CourseContent
     *   }
     * })
     * 
     */
    delete<T extends CourseContentDeleteArgs>(args: SelectSubset<T, CourseContentDeleteArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseContent.
     * @param {CourseContentUpdateArgs} args - Arguments to update one CourseContent.
     * @example
     * // Update one CourseContent
     * const courseContent = await prisma.courseContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseContentUpdateArgs>(args: SelectSubset<T, CourseContentUpdateArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseContents.
     * @param {CourseContentDeleteManyArgs} args - Arguments to filter CourseContents to delete.
     * @example
     * // Delete a few CourseContents
     * const { count } = await prisma.courseContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseContentDeleteManyArgs>(args?: SelectSubset<T, CourseContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseContents
     * const courseContent = await prisma.courseContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseContentUpdateManyArgs>(args: SelectSubset<T, CourseContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseContents and returns the data updated in the database.
     * @param {CourseContentUpdateManyAndReturnArgs} args - Arguments to update many CourseContents.
     * @example
     * // Update many CourseContents
     * const courseContent = await prisma.courseContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseContents and only return the `id`
     * const courseContentWithIdOnly = await prisma.courseContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseContentUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseContent.
     * @param {CourseContentUpsertArgs} args - Arguments to update or create a CourseContent.
     * @example
     * // Update or create a CourseContent
     * const courseContent = await prisma.courseContent.upsert({
     *   create: {
     *     // ... data to create a CourseContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseContent we want to update
     *   }
     * })
     */
    upsert<T extends CourseContentUpsertArgs>(args: SelectSubset<T, CourseContentUpsertArgs<ExtArgs>>): Prisma__CourseContentClient<$Result.GetResult<Prisma.$CourseContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentCountArgs} args - Arguments to filter CourseContents to count.
     * @example
     * // Count the number of CourseContents
     * const count = await prisma.courseContent.count({
     *   where: {
     *     // ... the filter for the CourseContents we want to count
     *   }
     * })
    **/
    count<T extends CourseContentCountArgs>(
      args?: Subset<T, CourseContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseContentAggregateArgs>(args: Subset<T, CourseContentAggregateArgs>): Prisma.PrismaPromise<GetCourseContentAggregateType<T>>

    /**
     * Group by CourseContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseContentGroupByArgs['orderBy'] }
        : { orderBy?: CourseContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseContent model
   */
  readonly fields: CourseContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseContent model
   */
  interface CourseContentFieldRefs {
    readonly id: FieldRef<"CourseContent", 'String'>
    readonly courseId: FieldRef<"CourseContent", 'String'>
    readonly title: FieldRef<"CourseContent", 'String'>
    readonly content: FieldRef<"CourseContent", 'String'>
    readonly order: FieldRef<"CourseContent", 'Int'>
    readonly createdAt: FieldRef<"CourseContent", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseContent", 'DateTime'>
    readonly videoUrl: FieldRef<"CourseContent", 'String'>
    readonly isPreview: FieldRef<"CourseContent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CourseContent findUnique
   */
  export type CourseContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter, which CourseContent to fetch.
     */
    where: CourseContentWhereUniqueInput
  }

  /**
   * CourseContent findUniqueOrThrow
   */
  export type CourseContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter, which CourseContent to fetch.
     */
    where: CourseContentWhereUniqueInput
  }

  /**
   * CourseContent findFirst
   */
  export type CourseContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter, which CourseContent to fetch.
     */
    where?: CourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseContents to fetch.
     */
    orderBy?: CourseContentOrderByWithRelationInput | CourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseContents.
     */
    cursor?: CourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseContents.
     */
    distinct?: CourseContentScalarFieldEnum | CourseContentScalarFieldEnum[]
  }

  /**
   * CourseContent findFirstOrThrow
   */
  export type CourseContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter, which CourseContent to fetch.
     */
    where?: CourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseContents to fetch.
     */
    orderBy?: CourseContentOrderByWithRelationInput | CourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseContents.
     */
    cursor?: CourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseContents.
     */
    distinct?: CourseContentScalarFieldEnum | CourseContentScalarFieldEnum[]
  }

  /**
   * CourseContent findMany
   */
  export type CourseContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter, which CourseContents to fetch.
     */
    where?: CourseContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseContents to fetch.
     */
    orderBy?: CourseContentOrderByWithRelationInput | CourseContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseContents.
     */
    cursor?: CourseContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseContents.
     */
    skip?: number
    distinct?: CourseContentScalarFieldEnum | CourseContentScalarFieldEnum[]
  }

  /**
   * CourseContent create
   */
  export type CourseContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseContent.
     */
    data: XOR<CourseContentCreateInput, CourseContentUncheckedCreateInput>
  }

  /**
   * CourseContent createMany
   */
  export type CourseContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseContents.
     */
    data: CourseContentCreateManyInput | CourseContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseContent createManyAndReturn
   */
  export type CourseContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * The data used to create many CourseContents.
     */
    data: CourseContentCreateManyInput | CourseContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseContent update
   */
  export type CourseContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseContent.
     */
    data: XOR<CourseContentUpdateInput, CourseContentUncheckedUpdateInput>
    /**
     * Choose, which CourseContent to update.
     */
    where: CourseContentWhereUniqueInput
  }

  /**
   * CourseContent updateMany
   */
  export type CourseContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseContents.
     */
    data: XOR<CourseContentUpdateManyMutationInput, CourseContentUncheckedUpdateManyInput>
    /**
     * Filter which CourseContents to update
     */
    where?: CourseContentWhereInput
    /**
     * Limit how many CourseContents to update.
     */
    limit?: number
  }

  /**
   * CourseContent updateManyAndReturn
   */
  export type CourseContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * The data used to update CourseContents.
     */
    data: XOR<CourseContentUpdateManyMutationInput, CourseContentUncheckedUpdateManyInput>
    /**
     * Filter which CourseContents to update
     */
    where?: CourseContentWhereInput
    /**
     * Limit how many CourseContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseContent upsert
   */
  export type CourseContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseContent to update in case it exists.
     */
    where: CourseContentWhereUniqueInput
    /**
     * In case the CourseContent found by the `where` argument doesn't exist, create a new CourseContent with this data.
     */
    create: XOR<CourseContentCreateInput, CourseContentUncheckedCreateInput>
    /**
     * In case the CourseContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseContentUpdateInput, CourseContentUncheckedUpdateInput>
  }

  /**
   * CourseContent delete
   */
  export type CourseContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
    /**
     * Filter which CourseContent to delete.
     */
    where: CourseContentWhereUniqueInput
  }

  /**
   * CourseContent deleteMany
   */
  export type CourseContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseContents to delete
     */
    where?: CourseContentWhereInput
    /**
     * Limit how many CourseContents to delete.
     */
    limit?: number
  }

  /**
   * CourseContent without action
   */
  export type CourseContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseContent
     */
    select?: CourseContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseContent
     */
    omit?: CourseContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseContentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    emailVerified: 'emailVerified',
    image: 'image',
    address: 'address',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CourseReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CourseReviewScalarFieldEnum = (typeof CourseReviewScalarFieldEnum)[keyof typeof CourseReviewScalarFieldEnum]


  export const CourseFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type CourseFavoriteScalarFieldEnum = (typeof CourseFavoriteScalarFieldEnum)[keyof typeof CourseFavoriteScalarFieldEnum]


  export const CoursePurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    price: 'price',
    purchasedAt: 'purchasedAt'
  };

  export type CoursePurchaseScalarFieldEnum = (typeof CoursePurchaseScalarFieldEnum)[keyof typeof CoursePurchaseScalarFieldEnum]


  export const CourseCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourseCategoryScalarFieldEnum = (typeof CourseCategoryScalarFieldEnum)[keyof typeof CourseCategoryScalarFieldEnum]


  export const CourseTeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    title: 'title',
    bio: 'bio'
  };

  export type CourseTeacherScalarFieldEnum = (typeof CourseTeacherScalarFieldEnum)[keyof typeof CourseTeacherScalarFieldEnum]


  export const CourseTagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourseTagScalarFieldEnum = (typeof CourseTagScalarFieldEnum)[keyof typeof CourseTagScalarFieldEnum]


  export const CourseTagOnCourseScalarFieldEnum: {
    courseId: 'courseId',
    tagId: 'tagId'
  };

  export type CourseTagOnCourseScalarFieldEnum = (typeof CourseTagOnCourseScalarFieldEnum)[keyof typeof CourseTagOnCourseScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    categoryId: 'categoryId',
    teacherId: 'teacherId',
    description: 'description',
    youWillLearn: 'youWillLearn',
    suitableFor: 'suitableFor',
    price: 'price',
    originalPrice: 'originalPrice',
    students: 'students',
    rating: 'rating',
    totalDuration: 'totalDuration',
    images: 'images',
    isPublished: 'isPublished',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseContentScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    content: 'content',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    videoUrl: 'videoUrl',
    isPreview: 'isPreview'
  };

  export type CourseContentScalarFieldEnum = (typeof CourseContentScalarFieldEnum)[keyof typeof CourseContentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    address?: JsonNullableFilter<"User">
    paymentMethod?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    account?: AccountListRelationFilter
    session?: SessionListRelationFilter
    CourseReview?: CourseReviewListRelationFilter
    CourseFavorite?: CourseFavoriteListRelationFilter
    CoursePurchase?: CoursePurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByRelationAggregateInput
    session?: SessionOrderByRelationAggregateInput
    CourseReview?: CourseReviewOrderByRelationAggregateInput
    CourseFavorite?: CourseFavoriteOrderByRelationAggregateInput
    CoursePurchase?: CoursePurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    address?: JsonNullableFilter<"User">
    paymentMethod?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    account?: AccountListRelationFilter
    session?: SessionListRelationFilter
    CourseReview?: CourseReviewListRelationFilter
    CourseFavorite?: CourseFavoriteListRelationFilter
    CoursePurchase?: CoursePurchaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: JsonNullableWithAggregatesFilter<"User">
    paymentMethod?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: UuidWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CourseReviewWhereInput = {
    AND?: CourseReviewWhereInput | CourseReviewWhereInput[]
    OR?: CourseReviewWhereInput[]
    NOT?: CourseReviewWhereInput | CourseReviewWhereInput[]
    id?: StringFilter<"CourseReview"> | string
    userId?: UuidFilter<"CourseReview"> | string
    courseId?: UuidFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CourseReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CourseReviewUserIdCourseIdCompoundUniqueInput
    AND?: CourseReviewWhereInput | CourseReviewWhereInput[]
    OR?: CourseReviewWhereInput[]
    NOT?: CourseReviewWhereInput | CourseReviewWhereInput[]
    userId?: UuidFilter<"CourseReview"> | string
    courseId?: UuidFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type CourseReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CourseReviewCountOrderByAggregateInput
    _avg?: CourseReviewAvgOrderByAggregateInput
    _max?: CourseReviewMaxOrderByAggregateInput
    _min?: CourseReviewMinOrderByAggregateInput
    _sum?: CourseReviewSumOrderByAggregateInput
  }

  export type CourseReviewScalarWhereWithAggregatesInput = {
    AND?: CourseReviewScalarWhereWithAggregatesInput | CourseReviewScalarWhereWithAggregatesInput[]
    OR?: CourseReviewScalarWhereWithAggregatesInput[]
    NOT?: CourseReviewScalarWhereWithAggregatesInput | CourseReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseReview"> | string
    userId?: UuidWithAggregatesFilter<"CourseReview"> | string
    courseId?: UuidWithAggregatesFilter<"CourseReview"> | string
    rating?: IntWithAggregatesFilter<"CourseReview"> | number
    comment?: StringNullableWithAggregatesFilter<"CourseReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CourseReview"> | Date | string
  }

  export type CourseFavoriteWhereInput = {
    AND?: CourseFavoriteWhereInput | CourseFavoriteWhereInput[]
    OR?: CourseFavoriteWhereInput[]
    NOT?: CourseFavoriteWhereInput | CourseFavoriteWhereInput[]
    id?: StringFilter<"CourseFavorite"> | string
    userId?: UuidFilter<"CourseFavorite"> | string
    courseId?: UuidFilter<"CourseFavorite"> | string
    createdAt?: DateTimeFilter<"CourseFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CourseFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CourseFavoriteUserIdCourseIdCompoundUniqueInput
    AND?: CourseFavoriteWhereInput | CourseFavoriteWhereInput[]
    OR?: CourseFavoriteWhereInput[]
    NOT?: CourseFavoriteWhereInput | CourseFavoriteWhereInput[]
    userId?: UuidFilter<"CourseFavorite"> | string
    courseId?: UuidFilter<"CourseFavorite"> | string
    createdAt?: DateTimeFilter<"CourseFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type CourseFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    _count?: CourseFavoriteCountOrderByAggregateInput
    _max?: CourseFavoriteMaxOrderByAggregateInput
    _min?: CourseFavoriteMinOrderByAggregateInput
  }

  export type CourseFavoriteScalarWhereWithAggregatesInput = {
    AND?: CourseFavoriteScalarWhereWithAggregatesInput | CourseFavoriteScalarWhereWithAggregatesInput[]
    OR?: CourseFavoriteScalarWhereWithAggregatesInput[]
    NOT?: CourseFavoriteScalarWhereWithAggregatesInput | CourseFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseFavorite"> | string
    userId?: UuidWithAggregatesFilter<"CourseFavorite"> | string
    courseId?: UuidWithAggregatesFilter<"CourseFavorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseFavorite"> | Date | string
  }

  export type CoursePurchaseWhereInput = {
    AND?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    OR?: CoursePurchaseWhereInput[]
    NOT?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    id?: StringFilter<"CoursePurchase"> | string
    userId?: UuidFilter<"CoursePurchase"> | string
    courseId?: UuidFilter<"CoursePurchase"> | string
    price?: DecimalFilter<"CoursePurchase"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CoursePurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    price?: SortOrder
    purchasedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CoursePurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CoursePurchaseUserIdCourseIdCompoundUniqueInput
    AND?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    OR?: CoursePurchaseWhereInput[]
    NOT?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    userId?: UuidFilter<"CoursePurchase"> | string
    courseId?: UuidFilter<"CoursePurchase"> | string
    price?: DecimalFilter<"CoursePurchase"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type CoursePurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    price?: SortOrder
    purchasedAt?: SortOrder
    _count?: CoursePurchaseCountOrderByAggregateInput
    _avg?: CoursePurchaseAvgOrderByAggregateInput
    _max?: CoursePurchaseMaxOrderByAggregateInput
    _min?: CoursePurchaseMinOrderByAggregateInput
    _sum?: CoursePurchaseSumOrderByAggregateInput
  }

  export type CoursePurchaseScalarWhereWithAggregatesInput = {
    AND?: CoursePurchaseScalarWhereWithAggregatesInput | CoursePurchaseScalarWhereWithAggregatesInput[]
    OR?: CoursePurchaseScalarWhereWithAggregatesInput[]
    NOT?: CoursePurchaseScalarWhereWithAggregatesInput | CoursePurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoursePurchase"> | string
    userId?: UuidWithAggregatesFilter<"CoursePurchase"> | string
    courseId?: UuidWithAggregatesFilter<"CoursePurchase"> | string
    price?: DecimalWithAggregatesFilter<"CoursePurchase"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeWithAggregatesFilter<"CoursePurchase"> | Date | string
  }

  export type CourseCategoryWhereInput = {
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    id?: StringFilter<"CourseCategory"> | string
    name?: StringFilter<"CourseCategory"> | string
    courses?: CourseListRelationFilter
  }

  export type CourseCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type CourseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    OR?: CourseCategoryWhereInput[]
    NOT?: CourseCategoryWhereInput | CourseCategoryWhereInput[]
    courses?: CourseListRelationFilter
  }, "id" | "name">

  export type CourseCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourseCategoryCountOrderByAggregateInput
    _max?: CourseCategoryMaxOrderByAggregateInput
    _min?: CourseCategoryMinOrderByAggregateInput
  }

  export type CourseCategoryScalarWhereWithAggregatesInput = {
    AND?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    OR?: CourseCategoryScalarWhereWithAggregatesInput[]
    NOT?: CourseCategoryScalarWhereWithAggregatesInput | CourseCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseCategory"> | string
    name?: StringWithAggregatesFilter<"CourseCategory"> | string
  }

  export type CourseTeacherWhereInput = {
    AND?: CourseTeacherWhereInput | CourseTeacherWhereInput[]
    OR?: CourseTeacherWhereInput[]
    NOT?: CourseTeacherWhereInput | CourseTeacherWhereInput[]
    id?: StringFilter<"CourseTeacher"> | string
    name?: StringFilter<"CourseTeacher"> | string
    avatar?: StringFilter<"CourseTeacher"> | string
    title?: StringNullableFilter<"CourseTeacher"> | string | null
    bio?: StringNullableFilter<"CourseTeacher"> | string | null
    courses?: CourseListRelationFilter
  }

  export type CourseTeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type CourseTeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseTeacherWhereInput | CourseTeacherWhereInput[]
    OR?: CourseTeacherWhereInput[]
    NOT?: CourseTeacherWhereInput | CourseTeacherWhereInput[]
    name?: StringFilter<"CourseTeacher"> | string
    avatar?: StringFilter<"CourseTeacher"> | string
    title?: StringNullableFilter<"CourseTeacher"> | string | null
    bio?: StringNullableFilter<"CourseTeacher"> | string | null
    courses?: CourseListRelationFilter
  }, "id">

  export type CourseTeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    title?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: CourseTeacherCountOrderByAggregateInput
    _max?: CourseTeacherMaxOrderByAggregateInput
    _min?: CourseTeacherMinOrderByAggregateInput
  }

  export type CourseTeacherScalarWhereWithAggregatesInput = {
    AND?: CourseTeacherScalarWhereWithAggregatesInput | CourseTeacherScalarWhereWithAggregatesInput[]
    OR?: CourseTeacherScalarWhereWithAggregatesInput[]
    NOT?: CourseTeacherScalarWhereWithAggregatesInput | CourseTeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseTeacher"> | string
    name?: StringWithAggregatesFilter<"CourseTeacher"> | string
    avatar?: StringWithAggregatesFilter<"CourseTeacher"> | string
    title?: StringNullableWithAggregatesFilter<"CourseTeacher"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CourseTeacher"> | string | null
  }

  export type CourseTagWhereInput = {
    AND?: CourseTagWhereInput | CourseTagWhereInput[]
    OR?: CourseTagWhereInput[]
    NOT?: CourseTagWhereInput | CourseTagWhereInput[]
    id?: UuidFilter<"CourseTag"> | string
    name?: StringFilter<"CourseTag"> | string
    courses?: CourseTagOnCourseListRelationFilter
  }

  export type CourseTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courses?: CourseTagOnCourseOrderByRelationAggregateInput
  }

  export type CourseTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CourseTagWhereInput | CourseTagWhereInput[]
    OR?: CourseTagWhereInput[]
    NOT?: CourseTagWhereInput | CourseTagWhereInput[]
    courses?: CourseTagOnCourseListRelationFilter
  }, "id" | "name">

  export type CourseTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourseTagCountOrderByAggregateInput
    _max?: CourseTagMaxOrderByAggregateInput
    _min?: CourseTagMinOrderByAggregateInput
  }

  export type CourseTagScalarWhereWithAggregatesInput = {
    AND?: CourseTagScalarWhereWithAggregatesInput | CourseTagScalarWhereWithAggregatesInput[]
    OR?: CourseTagScalarWhereWithAggregatesInput[]
    NOT?: CourseTagScalarWhereWithAggregatesInput | CourseTagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CourseTag"> | string
    name?: StringWithAggregatesFilter<"CourseTag"> | string
  }

  export type CourseTagOnCourseWhereInput = {
    AND?: CourseTagOnCourseWhereInput | CourseTagOnCourseWhereInput[]
    OR?: CourseTagOnCourseWhereInput[]
    NOT?: CourseTagOnCourseWhereInput | CourseTagOnCourseWhereInput[]
    courseId?: UuidFilter<"CourseTagOnCourse"> | string
    tagId?: UuidFilter<"CourseTagOnCourse"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tag?: XOR<CourseTagScalarRelationFilter, CourseTagWhereInput>
  }

  export type CourseTagOnCourseOrderByWithRelationInput = {
    courseId?: SortOrder
    tagId?: SortOrder
    course?: CourseOrderByWithRelationInput
    tag?: CourseTagOrderByWithRelationInput
  }

  export type CourseTagOnCourseWhereUniqueInput = Prisma.AtLeast<{
    courseId_tagId?: CourseTagOnCourseCourseIdTagIdCompoundUniqueInput
    AND?: CourseTagOnCourseWhereInput | CourseTagOnCourseWhereInput[]
    OR?: CourseTagOnCourseWhereInput[]
    NOT?: CourseTagOnCourseWhereInput | CourseTagOnCourseWhereInput[]
    courseId?: UuidFilter<"CourseTagOnCourse"> | string
    tagId?: UuidFilter<"CourseTagOnCourse"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tag?: XOR<CourseTagScalarRelationFilter, CourseTagWhereInput>
  }, "courseId_tagId">

  export type CourseTagOnCourseOrderByWithAggregationInput = {
    courseId?: SortOrder
    tagId?: SortOrder
    _count?: CourseTagOnCourseCountOrderByAggregateInput
    _max?: CourseTagOnCourseMaxOrderByAggregateInput
    _min?: CourseTagOnCourseMinOrderByAggregateInput
  }

  export type CourseTagOnCourseScalarWhereWithAggregatesInput = {
    AND?: CourseTagOnCourseScalarWhereWithAggregatesInput | CourseTagOnCourseScalarWhereWithAggregatesInput[]
    OR?: CourseTagOnCourseScalarWhereWithAggregatesInput[]
    NOT?: CourseTagOnCourseScalarWhereWithAggregatesInput | CourseTagOnCourseScalarWhereWithAggregatesInput[]
    courseId?: UuidWithAggregatesFilter<"CourseTagOnCourse"> | string
    tagId?: UuidWithAggregatesFilter<"CourseTagOnCourse"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: UuidFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    categoryId?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    youWillLearn?: StringNullableListFilter<"Course">
    suitableFor?: StringNullableListFilter<"Course">
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    students?: IntFilter<"Course"> | number
    rating?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"Course">
    isPublished?: BoolFilter<"Course"> | boolean
    sortOrder?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
    teacher?: XOR<CourseTeacherScalarRelationFilter, CourseTeacherWhereInput>
    tags?: CourseTagOnCourseListRelationFilter
    content?: CourseContentListRelationFilter
    CourseReview?: CourseReviewListRelationFilter
    CourseFavorite?: CourseFavoriteListRelationFilter
    CoursePurchase?: CoursePurchaseListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    description?: SortOrder
    youWillLearn?: SortOrder
    suitableFor?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    images?: SortOrder
    isPublished?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CourseCategoryOrderByWithRelationInput
    teacher?: CourseTeacherOrderByWithRelationInput
    tags?: CourseTagOnCourseOrderByRelationAggregateInput
    content?: CourseContentOrderByRelationAggregateInput
    CourseReview?: CourseReviewOrderByRelationAggregateInput
    CourseFavorite?: CourseFavoriteOrderByRelationAggregateInput
    CoursePurchase?: CoursePurchaseOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    categoryId?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    youWillLearn?: StringNullableListFilter<"Course">
    suitableFor?: StringNullableListFilter<"Course">
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    students?: IntFilter<"Course"> | number
    rating?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"Course">
    isPublished?: BoolFilter<"Course"> | boolean
    sortOrder?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    category?: XOR<CourseCategoryScalarRelationFilter, CourseCategoryWhereInput>
    teacher?: XOR<CourseTeacherScalarRelationFilter, CourseTeacherWhereInput>
    tags?: CourseTagOnCourseListRelationFilter
    content?: CourseContentListRelationFilter
    CourseReview?: CourseReviewListRelationFilter
    CourseFavorite?: CourseFavoriteListRelationFilter
    CoursePurchase?: CoursePurchaseListRelationFilter
  }, "id" | "slug">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    description?: SortOrder
    youWillLearn?: SortOrder
    suitableFor?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    images?: SortOrder
    isPublished?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    slug?: StringWithAggregatesFilter<"Course"> | string
    categoryId?: StringWithAggregatesFilter<"Course"> | string
    teacherId?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    youWillLearn?: StringNullableListFilter<"Course">
    suitableFor?: StringNullableListFilter<"Course">
    price?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    students?: IntWithAggregatesFilter<"Course"> | number
    rating?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"Course">
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseContentWhereInput = {
    AND?: CourseContentWhereInput | CourseContentWhereInput[]
    OR?: CourseContentWhereInput[]
    NOT?: CourseContentWhereInput | CourseContentWhereInput[]
    id?: StringFilter<"CourseContent"> | string
    courseId?: UuidFilter<"CourseContent"> | string
    title?: StringFilter<"CourseContent"> | string
    content?: StringFilter<"CourseContent"> | string
    order?: IntFilter<"CourseContent"> | number
    createdAt?: DateTimeFilter<"CourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"CourseContent"> | Date | string
    videoUrl?: StringNullableFilter<"CourseContent"> | string | null
    isPreview?: BoolFilter<"CourseContent"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseContentOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    isPreview?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseContentWhereInput | CourseContentWhereInput[]
    OR?: CourseContentWhereInput[]
    NOT?: CourseContentWhereInput | CourseContentWhereInput[]
    courseId?: UuidFilter<"CourseContent"> | string
    title?: StringFilter<"CourseContent"> | string
    content?: StringFilter<"CourseContent"> | string
    order?: IntFilter<"CourseContent"> | number
    createdAt?: DateTimeFilter<"CourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"CourseContent"> | Date | string
    videoUrl?: StringNullableFilter<"CourseContent"> | string | null
    isPreview?: BoolFilter<"CourseContent"> | boolean
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseContentOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    isPreview?: SortOrder
    _count?: CourseContentCountOrderByAggregateInput
    _avg?: CourseContentAvgOrderByAggregateInput
    _max?: CourseContentMaxOrderByAggregateInput
    _min?: CourseContentMinOrderByAggregateInput
    _sum?: CourseContentSumOrderByAggregateInput
  }

  export type CourseContentScalarWhereWithAggregatesInput = {
    AND?: CourseContentScalarWhereWithAggregatesInput | CourseContentScalarWhereWithAggregatesInput[]
    OR?: CourseContentScalarWhereWithAggregatesInput[]
    NOT?: CourseContentScalarWhereWithAggregatesInput | CourseContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseContent"> | string
    courseId?: UuidWithAggregatesFilter<"CourseContent"> | string
    title?: StringWithAggregatesFilter<"CourseContent"> | string
    content?: StringWithAggregatesFilter<"CourseContent"> | string
    order?: IntWithAggregatesFilter<"CourseContent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseContent"> | Date | string
    videoUrl?: StringNullableWithAggregatesFilter<"CourseContent"> | string | null
    isPreview?: BoolWithAggregatesFilter<"CourseContent"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewCreateInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCourseReviewInput
    course: CourseCreateNestedOneWithoutCourseReviewInput
  }

  export type CourseReviewUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseReviewNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseReviewNestedInput
  }

  export type CourseReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCourseFavoriteInput
    course: CourseCreateNestedOneWithoutCourseFavoriteInput
  }

  export type CourseFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseFavoriteNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseFavoriteNestedInput
  }

  export type CourseFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursePurchaseInput
    course: CourseCreateNestedOneWithoutCoursePurchaseInput
  }

  export type CoursePurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type CoursePurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursePurchaseNestedInput
    course?: CourseUpdateOneRequiredWithoutCoursePurchaseNestedInput
  }

  export type CoursePurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type CoursePurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCategoryCreateInput = {
    id?: string
    name: string
    courses?: CourseCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUncheckedCreateInput = {
    id?: string
    name: string
    courses?: CourseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CourseCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CourseCategoryCreateManyInput = {
    id?: string
    name: string
  }

  export type CourseCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTeacherCreateInput = {
    id?: string
    name: string
    avatar: string
    title?: string | null
    bio?: string | null
    courses?: CourseCreateNestedManyWithoutTeacherInput
  }

  export type CourseTeacherUncheckedCreateInput = {
    id?: string
    name: string
    avatar: string
    title?: string | null
    bio?: string | null
    courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type CourseTeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUpdateManyWithoutTeacherNestedInput
  }

  export type CourseTeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type CourseTeacherCreateManyInput = {
    id?: string
    name: string
    avatar: string
    title?: string | null
    bio?: string | null
  }

  export type CourseTeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseTeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseTagCreateInput = {
    id?: string
    name: string
    courses?: CourseTagOnCourseCreateNestedManyWithoutTagInput
  }

  export type CourseTagUncheckedCreateInput = {
    id?: string
    name: string
    courses?: CourseTagOnCourseUncheckedCreateNestedManyWithoutTagInput
  }

  export type CourseTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseTagOnCourseUpdateManyWithoutTagNestedInput
  }

  export type CourseTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courses?: CourseTagOnCourseUncheckedUpdateManyWithoutTagNestedInput
  }

  export type CourseTagCreateManyInput = {
    id?: string
    name: string
  }

  export type CourseTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagOnCourseCreateInput = {
    course: CourseCreateNestedOneWithoutTagsInput
    tag: CourseTagCreateNestedOneWithoutCoursesInput
  }

  export type CourseTagOnCourseUncheckedCreateInput = {
    courseId: string
    tagId: string
  }

  export type CourseTagOnCourseUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutTagsNestedInput
    tag?: CourseTagUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseTagOnCourseUncheckedUpdateInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagOnCourseCreateManyInput = {
    courseId: string
    tagId: string
  }

  export type CourseTagOnCourseUpdateManyMutationInput = {

  }

  export type CourseTagOnCourseUncheckedUpdateManyInput = {
    courseId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseContentCreateInput = {
    id?: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
    course: CourseCreateNestedOneWithoutContentInput
  }

  export type CourseContentUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
  }

  export type CourseContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutContentNestedInput
  }

  export type CourseContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseContentCreateManyInput = {
    id?: string
    courseId: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
  }

  export type CourseContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type CourseReviewListRelationFilter = {
    every?: CourseReviewWhereInput
    some?: CourseReviewWhereInput
    none?: CourseReviewWhereInput
  }

  export type CourseFavoriteListRelationFilter = {
    every?: CourseFavoriteWhereInput
    some?: CourseFavoriteWhereInput
    none?: CourseFavoriteWhereInput
  }

  export type CoursePurchaseListRelationFilter = {
    every?: CoursePurchaseWhereInput
    some?: CoursePurchaseWhereInput
    none?: CoursePurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursePurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    address?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseReviewUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CourseReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CourseReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CourseFavoriteUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CourseFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CoursePurchaseUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CoursePurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    price?: SortOrder
    purchasedAt?: SortOrder
  }

  export type CoursePurchaseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CoursePurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    price?: SortOrder
    purchasedAt?: SortOrder
  }

  export type CoursePurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    price?: SortOrder
    purchasedAt?: SortOrder
  }

  export type CoursePurchaseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    bio?: SortOrder
  }

  export type CourseTeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    bio?: SortOrder
  }

  export type CourseTeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    title?: SortOrder
    bio?: SortOrder
  }

  export type CourseTagOnCourseListRelationFilter = {
    every?: CourseTagOnCourseWhereInput
    some?: CourseTagOnCourseWhereInput
    none?: CourseTagOnCourseWhereInput
  }

  export type CourseTagOnCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTagScalarRelationFilter = {
    is?: CourseTagWhereInput
    isNot?: CourseTagWhereInput
  }

  export type CourseTagOnCourseCourseIdTagIdCompoundUniqueInput = {
    courseId: string
    tagId: string
  }

  export type CourseTagOnCourseCountOrderByAggregateInput = {
    courseId?: SortOrder
    tagId?: SortOrder
  }

  export type CourseTagOnCourseMaxOrderByAggregateInput = {
    courseId?: SortOrder
    tagId?: SortOrder
  }

  export type CourseTagOnCourseMinOrderByAggregateInput = {
    courseId?: SortOrder
    tagId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CourseCategoryScalarRelationFilter = {
    is?: CourseCategoryWhereInput
    isNot?: CourseCategoryWhereInput
  }

  export type CourseTeacherScalarRelationFilter = {
    is?: CourseTeacherWhereInput
    isNot?: CourseTeacherWhereInput
  }

  export type CourseContentListRelationFilter = {
    every?: CourseContentWhereInput
    some?: CourseContentWhereInput
    none?: CourseContentWhereInput
  }

  export type CourseContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    description?: SortOrder
    youWillLearn?: SortOrder
    suitableFor?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    images?: SortOrder
    isPublished?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    sortOrder?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    isPublished?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    categoryId?: SortOrder
    teacherId?: SortOrder
    description?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    isPublished?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    originalPrice?: SortOrder
    students?: SortOrder
    rating?: SortOrder
    totalDuration?: SortOrder
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseContentCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    isPreview?: SortOrder
  }

  export type CourseContentAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CourseContentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    isPreview?: SortOrder
  }

  export type CourseContentMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videoUrl?: SortOrder
    isPreview?: SortOrder
  }

  export type CourseContentSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CourseReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type CourseFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput> | CourseFavoriteCreateWithoutUserInput[] | CourseFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutUserInput | CourseFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: CourseFavoriteCreateManyUserInputEnvelope
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
  }

  export type CoursePurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type CourseReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type CourseFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput> | CourseFavoriteCreateWithoutUserInput[] | CourseFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutUserInput | CourseFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: CourseFavoriteCreateManyUserInputEnvelope
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
  }

  export type CoursePurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CourseReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutUserInput | CourseReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutUserInput | CourseReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutUserInput | CourseReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput> | CourseFavoriteCreateWithoutUserInput[] | CourseFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutUserInput | CourseFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: CourseFavoriteUpsertWithWhereUniqueWithoutUserInput | CourseFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseFavoriteCreateManyUserInputEnvelope
    set?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    disconnect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    delete?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    update?: CourseFavoriteUpdateWithWhereUniqueWithoutUserInput | CourseFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseFavoriteUpdateManyWithWhereWithoutUserInput | CourseFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
  }

  export type CoursePurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutUserInput | CoursePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutUserInput | CoursePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutUserInput | CoursePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type CourseReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput> | CourseReviewCreateWithoutUserInput[] | CourseReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutUserInput | CourseReviewCreateOrConnectWithoutUserInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutUserInput | CourseReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseReviewCreateManyUserInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutUserInput | CourseReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutUserInput | CourseReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput> | CourseFavoriteCreateWithoutUserInput[] | CourseFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutUserInput | CourseFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: CourseFavoriteUpsertWithWhereUniqueWithoutUserInput | CourseFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseFavoriteCreateManyUserInputEnvelope
    set?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    disconnect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    delete?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    update?: CourseFavoriteUpdateWithWhereUniqueWithoutUserInput | CourseFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseFavoriteUpdateManyWithWhereWithoutUserInput | CourseFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutUserInput | CoursePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutUserInput | CoursePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutUserInput | CoursePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutCourseReviewInput = {
    create?: XOR<UserCreateWithoutCourseReviewInput, UserUncheckedCreateWithoutCourseReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseReviewInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCourseReviewInput = {
    create?: XOR<CourseCreateWithoutCourseReviewInput, CourseUncheckedCreateWithoutCourseReviewInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseReviewInput
    connect?: CourseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCourseReviewNestedInput = {
    create?: XOR<UserCreateWithoutCourseReviewInput, UserUncheckedCreateWithoutCourseReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseReviewInput
    upsert?: UserUpsertWithoutCourseReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseReviewInput, UserUpdateWithoutCourseReviewInput>, UserUncheckedUpdateWithoutCourseReviewInput>
  }

  export type CourseUpdateOneRequiredWithoutCourseReviewNestedInput = {
    create?: XOR<CourseCreateWithoutCourseReviewInput, CourseUncheckedCreateWithoutCourseReviewInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseReviewInput
    upsert?: CourseUpsertWithoutCourseReviewInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseReviewInput, CourseUpdateWithoutCourseReviewInput>, CourseUncheckedUpdateWithoutCourseReviewInput>
  }

  export type UserCreateNestedOneWithoutCourseFavoriteInput = {
    create?: XOR<UserCreateWithoutCourseFavoriteInput, UserUncheckedCreateWithoutCourseFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseFavoriteInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCourseFavoriteInput = {
    create?: XOR<CourseCreateWithoutCourseFavoriteInput, CourseUncheckedCreateWithoutCourseFavoriteInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseFavoriteInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCourseFavoriteNestedInput = {
    create?: XOR<UserCreateWithoutCourseFavoriteInput, UserUncheckedCreateWithoutCourseFavoriteInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseFavoriteInput
    upsert?: UserUpsertWithoutCourseFavoriteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseFavoriteInput, UserUpdateWithoutCourseFavoriteInput>, UserUncheckedUpdateWithoutCourseFavoriteInput>
  }

  export type CourseUpdateOneRequiredWithoutCourseFavoriteNestedInput = {
    create?: XOR<CourseCreateWithoutCourseFavoriteInput, CourseUncheckedCreateWithoutCourseFavoriteInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseFavoriteInput
    upsert?: CourseUpsertWithoutCourseFavoriteInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseFavoriteInput, CourseUpdateWithoutCourseFavoriteInput>, CourseUncheckedUpdateWithoutCourseFavoriteInput>
  }

  export type UserCreateNestedOneWithoutCoursePurchaseInput = {
    create?: XOR<UserCreateWithoutCoursePurchaseInput, UserUncheckedCreateWithoutCoursePurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursePurchaseInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCoursePurchaseInput = {
    create?: XOR<CourseCreateWithoutCoursePurchaseInput, CourseUncheckedCreateWithoutCoursePurchaseInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePurchaseInput
    connect?: CourseWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutCoursePurchaseNestedInput = {
    create?: XOR<UserCreateWithoutCoursePurchaseInput, UserUncheckedCreateWithoutCoursePurchaseInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursePurchaseInput
    upsert?: UserUpsertWithoutCoursePurchaseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursePurchaseInput, UserUpdateWithoutCoursePurchaseInput>, UserUncheckedUpdateWithoutCoursePurchaseInput>
  }

  export type CourseUpdateOneRequiredWithoutCoursePurchaseNestedInput = {
    create?: XOR<CourseCreateWithoutCoursePurchaseInput, CourseUncheckedCreateWithoutCoursePurchaseInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePurchaseInput
    upsert?: CourseUpsertWithoutCoursePurchaseInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCoursePurchaseInput, CourseUpdateWithoutCoursePurchaseInput>, CourseUncheckedUpdateWithoutCoursePurchaseInput>
  }

  export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput> | CourseCreateWithoutCategoryInput[] | CourseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCategoryInput | CourseCreateOrConnectWithoutCategoryInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCategoryInput | CourseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CourseCreateManyCategoryInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCategoryInput | CourseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCategoryInput | CourseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseTagOnCourseCreateNestedManyWithoutTagInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput> | CourseTagOnCourseCreateWithoutTagInput[] | CourseTagOnCourseUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutTagInput | CourseTagOnCourseCreateOrConnectWithoutTagInput[]
    createMany?: CourseTagOnCourseCreateManyTagInputEnvelope
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
  }

  export type CourseTagOnCourseUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput> | CourseTagOnCourseCreateWithoutTagInput[] | CourseTagOnCourseUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutTagInput | CourseTagOnCourseCreateOrConnectWithoutTagInput[]
    createMany?: CourseTagOnCourseCreateManyTagInputEnvelope
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
  }

  export type CourseTagOnCourseUpdateManyWithoutTagNestedInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput> | CourseTagOnCourseCreateWithoutTagInput[] | CourseTagOnCourseUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutTagInput | CourseTagOnCourseCreateOrConnectWithoutTagInput[]
    upsert?: CourseTagOnCourseUpsertWithWhereUniqueWithoutTagInput | CourseTagOnCourseUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CourseTagOnCourseCreateManyTagInputEnvelope
    set?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    disconnect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    delete?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    update?: CourseTagOnCourseUpdateWithWhereUniqueWithoutTagInput | CourseTagOnCourseUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CourseTagOnCourseUpdateManyWithWhereWithoutTagInput | CourseTagOnCourseUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
  }

  export type CourseTagOnCourseUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput> | CourseTagOnCourseCreateWithoutTagInput[] | CourseTagOnCourseUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutTagInput | CourseTagOnCourseCreateOrConnectWithoutTagInput[]
    upsert?: CourseTagOnCourseUpsertWithWhereUniqueWithoutTagInput | CourseTagOnCourseUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CourseTagOnCourseCreateManyTagInputEnvelope
    set?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    disconnect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    delete?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    update?: CourseTagOnCourseUpdateWithWhereUniqueWithoutTagInput | CourseTagOnCourseUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CourseTagOnCourseUpdateManyWithWhereWithoutTagInput | CourseTagOnCourseUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTagsInput = {
    create?: XOR<CourseCreateWithoutTagsInput, CourseUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTagsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseTagCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CourseTagCreateWithoutCoursesInput, CourseTagUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseTagCreateOrConnectWithoutCoursesInput
    connect?: CourseTagWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<CourseCreateWithoutTagsInput, CourseUncheckedCreateWithoutTagsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTagsInput
    upsert?: CourseUpsertWithoutTagsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTagsInput, CourseUpdateWithoutTagsInput>, CourseUncheckedUpdateWithoutTagsInput>
  }

  export type CourseTagUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CourseTagCreateWithoutCoursesInput, CourseTagUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseTagCreateOrConnectWithoutCoursesInput
    upsert?: CourseTagUpsertWithoutCoursesInput
    connect?: CourseTagWhereUniqueInput
    update?: XOR<XOR<CourseTagUpdateToOneWithWhereWithoutCoursesInput, CourseTagUpdateWithoutCoursesInput>, CourseTagUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseCreateyouWillLearnInput = {
    set: string[]
  }

  export type CourseCreatesuitableForInput = {
    set: string[]
  }

  export type CourseCreateimagesInput = {
    set: string[]
  }

  export type CourseCategoryCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
  }

  export type CourseTeacherCreateNestedOneWithoutCoursesInput = {
    create?: XOR<CourseTeacherCreateWithoutCoursesInput, CourseTeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseTeacherCreateOrConnectWithoutCoursesInput
    connect?: CourseTeacherWhereUniqueInput
  }

  export type CourseTagOnCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput> | CourseTagOnCourseCreateWithoutCourseInput[] | CourseTagOnCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutCourseInput | CourseTagOnCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CourseTagOnCourseCreateManyCourseInputEnvelope
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
  }

  export type CourseContentCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput> | CourseContentCreateWithoutCourseInput[] | CourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseContentCreateOrConnectWithoutCourseInput | CourseContentCreateOrConnectWithoutCourseInput[]
    createMany?: CourseContentCreateManyCourseInputEnvelope
    connect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
  }

  export type CourseReviewCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type CourseFavoriteCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput> | CourseFavoriteCreateWithoutCourseInput[] | CourseFavoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutCourseInput | CourseFavoriteCreateOrConnectWithoutCourseInput[]
    createMany?: CourseFavoriteCreateManyCourseInputEnvelope
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
  }

  export type CoursePurchaseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput> | CourseTagOnCourseCreateWithoutCourseInput[] | CourseTagOnCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutCourseInput | CourseTagOnCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CourseTagOnCourseCreateManyCourseInputEnvelope
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
  }

  export type CourseContentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput> | CourseContentCreateWithoutCourseInput[] | CourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseContentCreateOrConnectWithoutCourseInput | CourseContentCreateOrConnectWithoutCourseInput[]
    createMany?: CourseContentCreateManyCourseInputEnvelope
    connect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
  }

  export type CourseReviewUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
  }

  export type CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput> | CourseFavoriteCreateWithoutCourseInput[] | CourseFavoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutCourseInput | CourseFavoriteCreateOrConnectWithoutCourseInput[]
    createMany?: CourseFavoriteCreateManyCourseInputEnvelope
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
  }

  export type CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseUpdateyouWillLearnInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdatesuitableForInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseCategoryCreateOrConnectWithoutCoursesInput
    upsert?: CourseCategoryUpsertWithoutCoursesInput
    connect?: CourseCategoryWhereUniqueInput
    update?: XOR<XOR<CourseCategoryUpdateToOneWithWhereWithoutCoursesInput, CourseCategoryUpdateWithoutCoursesInput>, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<CourseTeacherCreateWithoutCoursesInput, CourseTeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: CourseTeacherCreateOrConnectWithoutCoursesInput
    upsert?: CourseTeacherUpsertWithoutCoursesInput
    connect?: CourseTeacherWhereUniqueInput
    update?: XOR<XOR<CourseTeacherUpdateToOneWithWhereWithoutCoursesInput, CourseTeacherUpdateWithoutCoursesInput>, CourseTeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseTagOnCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput> | CourseTagOnCourseCreateWithoutCourseInput[] | CourseTagOnCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutCourseInput | CourseTagOnCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CourseTagOnCourseUpsertWithWhereUniqueWithoutCourseInput | CourseTagOnCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseTagOnCourseCreateManyCourseInputEnvelope
    set?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    disconnect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    delete?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    update?: CourseTagOnCourseUpdateWithWhereUniqueWithoutCourseInput | CourseTagOnCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseTagOnCourseUpdateManyWithWhereWithoutCourseInput | CourseTagOnCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
  }

  export type CourseContentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput> | CourseContentCreateWithoutCourseInput[] | CourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseContentCreateOrConnectWithoutCourseInput | CourseContentCreateOrConnectWithoutCourseInput[]
    upsert?: CourseContentUpsertWithWhereUniqueWithoutCourseInput | CourseContentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseContentCreateManyCourseInputEnvelope
    set?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    disconnect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    delete?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    connect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    update?: CourseContentUpdateWithWhereUniqueWithoutCourseInput | CourseContentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseContentUpdateManyWithWhereWithoutCourseInput | CourseContentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseContentScalarWhereInput | CourseContentScalarWhereInput[]
  }

  export type CourseReviewUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutCourseInput | CourseReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutCourseInput | CourseReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutCourseInput | CourseReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseFavoriteUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput> | CourseFavoriteCreateWithoutCourseInput[] | CourseFavoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutCourseInput | CourseFavoriteCreateOrConnectWithoutCourseInput[]
    upsert?: CourseFavoriteUpsertWithWhereUniqueWithoutCourseInput | CourseFavoriteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseFavoriteCreateManyCourseInputEnvelope
    set?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    disconnect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    delete?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    update?: CourseFavoriteUpdateWithWhereUniqueWithoutCourseInput | CourseFavoriteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseFavoriteUpdateManyWithWhereWithoutCourseInput | CourseFavoriteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
  }

  export type CoursePurchaseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutCourseInput | CoursePurchaseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput> | CourseTagOnCourseCreateWithoutCourseInput[] | CourseTagOnCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTagOnCourseCreateOrConnectWithoutCourseInput | CourseTagOnCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CourseTagOnCourseUpsertWithWhereUniqueWithoutCourseInput | CourseTagOnCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseTagOnCourseCreateManyCourseInputEnvelope
    set?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    disconnect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    delete?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    connect?: CourseTagOnCourseWhereUniqueInput | CourseTagOnCourseWhereUniqueInput[]
    update?: CourseTagOnCourseUpdateWithWhereUniqueWithoutCourseInput | CourseTagOnCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseTagOnCourseUpdateManyWithWhereWithoutCourseInput | CourseTagOnCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
  }

  export type CourseContentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput> | CourseContentCreateWithoutCourseInput[] | CourseContentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseContentCreateOrConnectWithoutCourseInput | CourseContentCreateOrConnectWithoutCourseInput[]
    upsert?: CourseContentUpsertWithWhereUniqueWithoutCourseInput | CourseContentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseContentCreateManyCourseInputEnvelope
    set?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    disconnect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    delete?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    connect?: CourseContentWhereUniqueInput | CourseContentWhereUniqueInput[]
    update?: CourseContentUpdateWithWhereUniqueWithoutCourseInput | CourseContentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseContentUpdateManyWithWhereWithoutCourseInput | CourseContentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseContentScalarWhereInput | CourseContentScalarWhereInput[]
  }

  export type CourseReviewUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput> | CourseReviewCreateWithoutCourseInput[] | CourseReviewUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseReviewCreateOrConnectWithoutCourseInput | CourseReviewCreateOrConnectWithoutCourseInput[]
    upsert?: CourseReviewUpsertWithWhereUniqueWithoutCourseInput | CourseReviewUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseReviewCreateManyCourseInputEnvelope
    set?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    disconnect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    delete?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    connect?: CourseReviewWhereUniqueInput | CourseReviewWhereUniqueInput[]
    update?: CourseReviewUpdateWithWhereUniqueWithoutCourseInput | CourseReviewUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseReviewUpdateManyWithWhereWithoutCourseInput | CourseReviewUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
  }

  export type CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput> | CourseFavoriteCreateWithoutCourseInput[] | CourseFavoriteUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseFavoriteCreateOrConnectWithoutCourseInput | CourseFavoriteCreateOrConnectWithoutCourseInput[]
    upsert?: CourseFavoriteUpsertWithWhereUniqueWithoutCourseInput | CourseFavoriteUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseFavoriteCreateManyCourseInputEnvelope
    set?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    disconnect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    delete?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    connect?: CourseFavoriteWhereUniqueInput | CourseFavoriteWhereUniqueInput[]
    update?: CourseFavoriteUpdateWithWhereUniqueWithoutCourseInput | CourseFavoriteUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseFavoriteUpdateManyWithWhereWithoutCourseInput | CourseFavoriteUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutCourseInput | CoursePurchaseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutContentInput = {
    create?: XOR<CourseCreateWithoutContentInput, CourseUncheckedCreateWithoutContentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutContentInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<CourseCreateWithoutContentInput, CourseUncheckedCreateWithoutContentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutContentInput
    upsert?: CourseUpsertWithoutContentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutContentInput, CourseUpdateWithoutContentInput>, CourseUncheckedUpdateWithoutContentInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseReviewCreateWithoutUserInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseReviewInput
  }

  export type CourseReviewUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseReviewCreateOrConnectWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    create: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput>
  }

  export type CourseReviewCreateManyUserInputEnvelope = {
    data: CourseReviewCreateManyUserInput | CourseReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseFavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseFavoriteInput
  }

  export type CourseFavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseFavoriteCreateOrConnectWithoutUserInput = {
    where: CourseFavoriteWhereUniqueInput
    create: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput>
  }

  export type CourseFavoriteCreateManyUserInputEnvelope = {
    data: CourseFavoriteCreateManyUserInput | CourseFavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoursePurchaseCreateWithoutUserInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    course: CourseCreateNestedOneWithoutCoursePurchaseInput
  }

  export type CoursePurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type CoursePurchaseCreateOrConnectWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    create: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput>
  }

  export type CoursePurchaseCreateManyUserInputEnvelope = {
    data: CoursePurchaseCreateManyUserInput | CoursePurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: UuidFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: UuidFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type CourseReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    update: XOR<CourseReviewUpdateWithoutUserInput, CourseReviewUncheckedUpdateWithoutUserInput>
    create: XOR<CourseReviewCreateWithoutUserInput, CourseReviewUncheckedCreateWithoutUserInput>
  }

  export type CourseReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseReviewWhereUniqueInput
    data: XOR<CourseReviewUpdateWithoutUserInput, CourseReviewUncheckedUpdateWithoutUserInput>
  }

  export type CourseReviewUpdateManyWithWhereWithoutUserInput = {
    where: CourseReviewScalarWhereInput
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseReviewScalarWhereInput = {
    AND?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
    OR?: CourseReviewScalarWhereInput[]
    NOT?: CourseReviewScalarWhereInput | CourseReviewScalarWhereInput[]
    id?: StringFilter<"CourseReview"> | string
    userId?: UuidFilter<"CourseReview"> | string
    courseId?: UuidFilter<"CourseReview"> | string
    rating?: IntFilter<"CourseReview"> | number
    comment?: StringNullableFilter<"CourseReview"> | string | null
    createdAt?: DateTimeFilter<"CourseReview"> | Date | string
  }

  export type CourseFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseFavoriteWhereUniqueInput
    update: XOR<CourseFavoriteUpdateWithoutUserInput, CourseFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<CourseFavoriteCreateWithoutUserInput, CourseFavoriteUncheckedCreateWithoutUserInput>
  }

  export type CourseFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseFavoriteWhereUniqueInput
    data: XOR<CourseFavoriteUpdateWithoutUserInput, CourseFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type CourseFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: CourseFavoriteScalarWhereInput
    data: XOR<CourseFavoriteUpdateManyMutationInput, CourseFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseFavoriteScalarWhereInput = {
    AND?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
    OR?: CourseFavoriteScalarWhereInput[]
    NOT?: CourseFavoriteScalarWhereInput | CourseFavoriteScalarWhereInput[]
    id?: StringFilter<"CourseFavorite"> | string
    userId?: UuidFilter<"CourseFavorite"> | string
    courseId?: UuidFilter<"CourseFavorite"> | string
    createdAt?: DateTimeFilter<"CourseFavorite"> | Date | string
  }

  export type CoursePurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    update: XOR<CoursePurchaseUpdateWithoutUserInput, CoursePurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput>
  }

  export type CoursePurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    data: XOR<CoursePurchaseUpdateWithoutUserInput, CoursePurchaseUncheckedUpdateWithoutUserInput>
  }

  export type CoursePurchaseUpdateManyWithWhereWithoutUserInput = {
    where: CoursePurchaseScalarWhereInput
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursePurchaseScalarWhereInput = {
    AND?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
    OR?: CoursePurchaseScalarWhereInput[]
    NOT?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
    id?: StringFilter<"CoursePurchase"> | string
    userId?: UuidFilter<"CoursePurchase"> | string
    courseId?: UuidFilter<"CoursePurchase"> | string
    price?: DecimalFilter<"CoursePurchase"> | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCourseReviewInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseReviewInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseReviewInput, UserUncheckedCreateWithoutCourseReviewInput>
  }

  export type CourseCreateWithoutCourseReviewInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseReviewInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseReviewInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseReviewInput, CourseUncheckedCreateWithoutCourseReviewInput>
  }

  export type UserUpsertWithoutCourseReviewInput = {
    update: XOR<UserUpdateWithoutCourseReviewInput, UserUncheckedUpdateWithoutCourseReviewInput>
    create: XOR<UserCreateWithoutCourseReviewInput, UserUncheckedCreateWithoutCourseReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseReviewInput, UserUncheckedUpdateWithoutCourseReviewInput>
  }

  export type UserUpdateWithoutCourseReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCourseReviewInput = {
    update: XOR<CourseUpdateWithoutCourseReviewInput, CourseUncheckedUpdateWithoutCourseReviewInput>
    create: XOR<CourseCreateWithoutCourseReviewInput, CourseUncheckedCreateWithoutCourseReviewInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseReviewInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseReviewInput, CourseUncheckedUpdateWithoutCourseReviewInput>
  }

  export type CourseUpdateWithoutCourseReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutCourseFavoriteInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseFavoriteInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseFavoriteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseFavoriteInput, UserUncheckedCreateWithoutCourseFavoriteInput>
  }

  export type CourseCreateWithoutCourseFavoriteInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseFavoriteInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseFavoriteInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseFavoriteInput, CourseUncheckedCreateWithoutCourseFavoriteInput>
  }

  export type UserUpsertWithoutCourseFavoriteInput = {
    update: XOR<UserUpdateWithoutCourseFavoriteInput, UserUncheckedUpdateWithoutCourseFavoriteInput>
    create: XOR<UserCreateWithoutCourseFavoriteInput, UserUncheckedCreateWithoutCourseFavoriteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseFavoriteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseFavoriteInput, UserUncheckedUpdateWithoutCourseFavoriteInput>
  }

  export type UserUpdateWithoutCourseFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCourseFavoriteInput = {
    update: XOR<CourseUpdateWithoutCourseFavoriteInput, CourseUncheckedUpdateWithoutCourseFavoriteInput>
    create: XOR<CourseCreateWithoutCourseFavoriteInput, CourseUncheckedCreateWithoutCourseFavoriteInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseFavoriteInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseFavoriteInput, CourseUncheckedUpdateWithoutCourseFavoriteInput>
  }

  export type CourseUpdateWithoutCourseFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutCoursePurchaseInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    session?: SessionCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursePurchaseInput = {
    id?: string
    name?: string
    email: string
    password?: string | null
    role?: string
    emailVerified?: Date | string | null
    image?: string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutUserInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursePurchaseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursePurchaseInput, UserUncheckedCreateWithoutCoursePurchaseInput>
  }

  export type CourseCreateWithoutCoursePurchaseInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCoursePurchaseInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCoursePurchaseInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCoursePurchaseInput, CourseUncheckedCreateWithoutCoursePurchaseInput>
  }

  export type UserUpsertWithoutCoursePurchaseInput = {
    update: XOR<UserUpdateWithoutCoursePurchaseInput, UserUncheckedUpdateWithoutCoursePurchaseInput>
    create: XOR<UserCreateWithoutCoursePurchaseInput, UserUncheckedCreateWithoutCoursePurchaseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursePurchaseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursePurchaseInput, UserUncheckedUpdateWithoutCoursePurchaseInput>
  }

  export type UserUpdateWithoutCoursePurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    session?: SessionUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursePurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableJsonNullValueInput | InputJsonValue
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutUserNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCoursePurchaseInput = {
    update: XOR<CourseUpdateWithoutCoursePurchaseInput, CourseUncheckedUpdateWithoutCoursePurchaseInput>
    create: XOR<CourseCreateWithoutCoursePurchaseInput, CourseUncheckedCreateWithoutCoursePurchaseInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCoursePurchaseInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCoursePurchaseInput, CourseUncheckedUpdateWithoutCoursePurchaseInput>
  }

  export type CourseUpdateWithoutCoursePurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCoursePurchaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseCreateManyCategoryInputEnvelope = {
    data: CourseCreateManyCategoryInput | CourseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
    create: XOR<CourseCreateWithoutCategoryInput, CourseUncheckedCreateWithoutCategoryInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCategoryInput, CourseUncheckedUpdateWithoutCategoryInput>
  }

  export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: UuidFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    slug?: StringFilter<"Course"> | string
    categoryId?: StringFilter<"Course"> | string
    teacherId?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    youWillLearn?: StringNullableListFilter<"Course">
    suitableFor?: StringNullableListFilter<"Course">
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    students?: IntFilter<"Course"> | number
    rating?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    images?: StringNullableListFilter<"Course">
    isPublished?: BoolFilter<"Course"> | boolean
    sortOrder?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseCreateWithoutTeacherInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseCreateManyTeacherInputEnvelope = {
    data: CourseCreateManyTeacherInput | CourseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type CourseTagOnCourseCreateWithoutTagInput = {
    course: CourseCreateNestedOneWithoutTagsInput
  }

  export type CourseTagOnCourseUncheckedCreateWithoutTagInput = {
    courseId: string
  }

  export type CourseTagOnCourseCreateOrConnectWithoutTagInput = {
    where: CourseTagOnCourseWhereUniqueInput
    create: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput>
  }

  export type CourseTagOnCourseCreateManyTagInputEnvelope = {
    data: CourseTagOnCourseCreateManyTagInput | CourseTagOnCourseCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type CourseTagOnCourseUpsertWithWhereUniqueWithoutTagInput = {
    where: CourseTagOnCourseWhereUniqueInput
    update: XOR<CourseTagOnCourseUpdateWithoutTagInput, CourseTagOnCourseUncheckedUpdateWithoutTagInput>
    create: XOR<CourseTagOnCourseCreateWithoutTagInput, CourseTagOnCourseUncheckedCreateWithoutTagInput>
  }

  export type CourseTagOnCourseUpdateWithWhereUniqueWithoutTagInput = {
    where: CourseTagOnCourseWhereUniqueInput
    data: XOR<CourseTagOnCourseUpdateWithoutTagInput, CourseTagOnCourseUncheckedUpdateWithoutTagInput>
  }

  export type CourseTagOnCourseUpdateManyWithWhereWithoutTagInput = {
    where: CourseTagOnCourseScalarWhereInput
    data: XOR<CourseTagOnCourseUpdateManyMutationInput, CourseTagOnCourseUncheckedUpdateManyWithoutTagInput>
  }

  export type CourseTagOnCourseScalarWhereInput = {
    AND?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
    OR?: CourseTagOnCourseScalarWhereInput[]
    NOT?: CourseTagOnCourseScalarWhereInput | CourseTagOnCourseScalarWhereInput[]
    courseId?: UuidFilter<"CourseTagOnCourse"> | string
    tagId?: UuidFilter<"CourseTagOnCourse"> | string
  }

  export type CourseCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    content?: CourseContentCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: CourseContentUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTagsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTagsInput, CourseUncheckedCreateWithoutTagsInput>
  }

  export type CourseTagCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type CourseTagUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type CourseTagCreateOrConnectWithoutCoursesInput = {
    where: CourseTagWhereUniqueInput
    create: XOR<CourseTagCreateWithoutCoursesInput, CourseTagUncheckedCreateWithoutCoursesInput>
  }

  export type CourseUpsertWithoutTagsInput = {
    update: XOR<CourseUpdateWithoutTagsInput, CourseUncheckedUpdateWithoutTagsInput>
    create: XOR<CourseCreateWithoutTagsInput, CourseUncheckedCreateWithoutTagsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTagsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTagsInput, CourseUncheckedUpdateWithoutTagsInput>
  }

  export type CourseUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseTagUpsertWithoutCoursesInput = {
    update: XOR<CourseTagUpdateWithoutCoursesInput, CourseTagUncheckedUpdateWithoutCoursesInput>
    create: XOR<CourseTagCreateWithoutCoursesInput, CourseTagUncheckedCreateWithoutCoursesInput>
    where?: CourseTagWhereInput
  }

  export type CourseTagUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseTagWhereInput
    data: XOR<CourseTagUpdateWithoutCoursesInput, CourseTagUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseTagUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCategoryCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type CourseCategoryUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
  }

  export type CourseCategoryCreateOrConnectWithoutCoursesInput = {
    where: CourseCategoryWhereUniqueInput
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
  }

  export type CourseTeacherCreateWithoutCoursesInput = {
    id?: string
    name: string
    avatar: string
    title?: string | null
    bio?: string | null
  }

  export type CourseTeacherUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    avatar: string
    title?: string | null
    bio?: string | null
  }

  export type CourseTeacherCreateOrConnectWithoutCoursesInput = {
    where: CourseTeacherWhereUniqueInput
    create: XOR<CourseTeacherCreateWithoutCoursesInput, CourseTeacherUncheckedCreateWithoutCoursesInput>
  }

  export type CourseTagOnCourseCreateWithoutCourseInput = {
    tag: CourseTagCreateNestedOneWithoutCoursesInput
  }

  export type CourseTagOnCourseUncheckedCreateWithoutCourseInput = {
    tagId: string
  }

  export type CourseTagOnCourseCreateOrConnectWithoutCourseInput = {
    where: CourseTagOnCourseWhereUniqueInput
    create: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput>
  }

  export type CourseTagOnCourseCreateManyCourseInputEnvelope = {
    data: CourseTagOnCourseCreateManyCourseInput | CourseTagOnCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseContentCreateWithoutCourseInput = {
    id?: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
  }

  export type CourseContentUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
  }

  export type CourseContentCreateOrConnectWithoutCourseInput = {
    where: CourseContentWhereUniqueInput
    create: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput>
  }

  export type CourseContentCreateManyCourseInputEnvelope = {
    data: CourseContentCreateManyCourseInput | CourseContentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseReviewCreateWithoutCourseInput = {
    id?: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCourseReviewInput
  }

  export type CourseReviewUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseReviewCreateOrConnectWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    create: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput>
  }

  export type CourseReviewCreateManyCourseInputEnvelope = {
    data: CourseReviewCreateManyCourseInput | CourseReviewCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseFavoriteCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCourseFavoriteInput
  }

  export type CourseFavoriteUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CourseFavoriteCreateOrConnectWithoutCourseInput = {
    where: CourseFavoriteWhereUniqueInput
    create: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput>
  }

  export type CourseFavoriteCreateManyCourseInputEnvelope = {
    data: CourseFavoriteCreateManyCourseInput | CourseFavoriteCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CoursePurchaseCreateWithoutCourseInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursePurchaseInput
  }

  export type CoursePurchaseUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type CoursePurchaseCreateOrConnectWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    create: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput>
  }

  export type CoursePurchaseCreateManyCourseInputEnvelope = {
    data: CoursePurchaseCreateManyCourseInput | CoursePurchaseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseCategoryUpsertWithoutCoursesInput = {
    update: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
    create: XOR<CourseCategoryCreateWithoutCoursesInput, CourseCategoryUncheckedCreateWithoutCoursesInput>
    where?: CourseCategoryWhereInput
  }

  export type CourseCategoryUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseCategoryWhereInput
    data: XOR<CourseCategoryUpdateWithoutCoursesInput, CourseCategoryUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseCategoryUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCategoryUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTeacherUpsertWithoutCoursesInput = {
    update: XOR<CourseTeacherUpdateWithoutCoursesInput, CourseTeacherUncheckedUpdateWithoutCoursesInput>
    create: XOR<CourseTeacherCreateWithoutCoursesInput, CourseTeacherUncheckedCreateWithoutCoursesInput>
    where?: CourseTeacherWhereInput
  }

  export type CourseTeacherUpdateToOneWithWhereWithoutCoursesInput = {
    where?: CourseTeacherWhereInput
    data: XOR<CourseTeacherUpdateWithoutCoursesInput, CourseTeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseTeacherUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseTeacherUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseTagOnCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseTagOnCourseWhereUniqueInput
    update: XOR<CourseTagOnCourseUpdateWithoutCourseInput, CourseTagOnCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseTagOnCourseCreateWithoutCourseInput, CourseTagOnCourseUncheckedCreateWithoutCourseInput>
  }

  export type CourseTagOnCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseTagOnCourseWhereUniqueInput
    data: XOR<CourseTagOnCourseUpdateWithoutCourseInput, CourseTagOnCourseUncheckedUpdateWithoutCourseInput>
  }

  export type CourseTagOnCourseUpdateManyWithWhereWithoutCourseInput = {
    where: CourseTagOnCourseScalarWhereInput
    data: XOR<CourseTagOnCourseUpdateManyMutationInput, CourseTagOnCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseContentUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseContentWhereUniqueInput
    update: XOR<CourseContentUpdateWithoutCourseInput, CourseContentUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseContentCreateWithoutCourseInput, CourseContentUncheckedCreateWithoutCourseInput>
  }

  export type CourseContentUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseContentWhereUniqueInput
    data: XOR<CourseContentUpdateWithoutCourseInput, CourseContentUncheckedUpdateWithoutCourseInput>
  }

  export type CourseContentUpdateManyWithWhereWithoutCourseInput = {
    where: CourseContentScalarWhereInput
    data: XOR<CourseContentUpdateManyMutationInput, CourseContentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseContentScalarWhereInput = {
    AND?: CourseContentScalarWhereInput | CourseContentScalarWhereInput[]
    OR?: CourseContentScalarWhereInput[]
    NOT?: CourseContentScalarWhereInput | CourseContentScalarWhereInput[]
    id?: StringFilter<"CourseContent"> | string
    courseId?: UuidFilter<"CourseContent"> | string
    title?: StringFilter<"CourseContent"> | string
    content?: StringFilter<"CourseContent"> | string
    order?: IntFilter<"CourseContent"> | number
    createdAt?: DateTimeFilter<"CourseContent"> | Date | string
    updatedAt?: DateTimeFilter<"CourseContent"> | Date | string
    videoUrl?: StringNullableFilter<"CourseContent"> | string | null
    isPreview?: BoolFilter<"CourseContent"> | boolean
  }

  export type CourseReviewUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    update: XOR<CourseReviewUpdateWithoutCourseInput, CourseReviewUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseReviewCreateWithoutCourseInput, CourseReviewUncheckedCreateWithoutCourseInput>
  }

  export type CourseReviewUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseReviewWhereUniqueInput
    data: XOR<CourseReviewUpdateWithoutCourseInput, CourseReviewUncheckedUpdateWithoutCourseInput>
  }

  export type CourseReviewUpdateManyWithWhereWithoutCourseInput = {
    where: CourseReviewScalarWhereInput
    data: XOR<CourseReviewUpdateManyMutationInput, CourseReviewUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseFavoriteUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseFavoriteWhereUniqueInput
    update: XOR<CourseFavoriteUpdateWithoutCourseInput, CourseFavoriteUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseFavoriteCreateWithoutCourseInput, CourseFavoriteUncheckedCreateWithoutCourseInput>
  }

  export type CourseFavoriteUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseFavoriteWhereUniqueInput
    data: XOR<CourseFavoriteUpdateWithoutCourseInput, CourseFavoriteUncheckedUpdateWithoutCourseInput>
  }

  export type CourseFavoriteUpdateManyWithWhereWithoutCourseInput = {
    where: CourseFavoriteScalarWhereInput
    data: XOR<CourseFavoriteUpdateManyMutationInput, CourseFavoriteUncheckedUpdateManyWithoutCourseInput>
  }

  export type CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    update: XOR<CoursePurchaseUpdateWithoutCourseInput, CoursePurchaseUncheckedUpdateWithoutCourseInput>
    create: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput>
  }

  export type CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    data: XOR<CoursePurchaseUpdateWithoutCourseInput, CoursePurchaseUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePurchaseUpdateManyWithWhereWithoutCourseInput = {
    where: CoursePurchaseScalarWhereInput
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutContentInput = {
    id?: string
    name: string
    slug: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CourseCategoryCreateNestedOneWithoutCoursesInput
    teacher: CourseTeacherCreateNestedOneWithoutCoursesInput
    tags?: CourseTagOnCourseCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutContentInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: CourseTagOnCourseUncheckedCreateNestedManyWithoutCourseInput
    CourseReview?: CourseReviewUncheckedCreateNestedManyWithoutCourseInput
    CourseFavorite?: CourseFavoriteUncheckedCreateNestedManyWithoutCourseInput
    CoursePurchase?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutContentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutContentInput, CourseUncheckedCreateWithoutContentInput>
  }

  export type CourseUpsertWithoutContentInput = {
    update: XOR<CourseUpdateWithoutContentInput, CourseUncheckedUpdateWithoutContentInput>
    create: XOR<CourseCreateWithoutContentInput, CourseUncheckedCreateWithoutContentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutContentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutContentInput, CourseUncheckedUpdateWithoutContentInput>
  }

  export type CourseUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
  }

  export type CourseReviewCreateManyUserInput = {
    id?: string
    courseId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseFavoriteCreateManyUserInput = {
    id?: string
    courseId: string
    createdAt?: Date | string
  }

  export type CoursePurchaseCreateManyUserInput = {
    id?: string
    courseId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseReviewNestedInput
  }

  export type CourseReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseFavoriteNestedInput
  }

  export type CourseFavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCoursePurchaseNestedInput
  }

  export type CoursePurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    teacherId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: CourseTeacherUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyTeacherInput = {
    id?: string
    name: string
    slug: string
    categoryId: string
    description: string
    youWillLearn?: CourseCreateyouWillLearnInput | string[]
    suitableFor?: CourseCreatesuitableForInput | string[]
    price?: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string
    students?: number
    rating?: Decimal | DecimalJsLike | number | string
    totalDuration?: Decimal | DecimalJsLike | number | string
    images?: CourseCreateimagesInput | string[]
    isPublished?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CourseCategoryUpdateOneRequiredWithoutCoursesNestedInput
    tags?: CourseTagOnCourseUpdateManyWithoutCourseNestedInput
    content?: CourseContentUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: CourseTagOnCourseUncheckedUpdateManyWithoutCourseNestedInput
    content?: CourseContentUncheckedUpdateManyWithoutCourseNestedInput
    CourseReview?: CourseReviewUncheckedUpdateManyWithoutCourseNestedInput
    CourseFavorite?: CourseFavoriteUncheckedUpdateManyWithoutCourseNestedInput
    CoursePurchase?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    youWillLearn?: CourseUpdateyouWillLearnInput | string[]
    suitableFor?: CourseUpdatesuitableForInput | string[]
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    students?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDuration?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: CourseUpdateimagesInput | string[]
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTagOnCourseCreateManyTagInput = {
    courseId: string
  }

  export type CourseTagOnCourseUpdateWithoutTagInput = {
    course?: CourseUpdateOneRequiredWithoutTagsNestedInput
  }

  export type CourseTagOnCourseUncheckedUpdateWithoutTagInput = {
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagOnCourseUncheckedUpdateManyWithoutTagInput = {
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagOnCourseCreateManyCourseInput = {
    tagId: string
  }

  export type CourseContentCreateManyCourseInput = {
    id?: string
    title: string
    content: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    videoUrl?: string | null
    isPreview?: boolean
  }

  export type CourseReviewCreateManyCourseInput = {
    id?: string
    userId: string
    rating?: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CourseFavoriteCreateManyCourseInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CoursePurchaseCreateManyCourseInput = {
    id?: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    purchasedAt?: Date | string
  }

  export type CourseTagOnCourseUpdateWithoutCourseInput = {
    tag?: CourseTagUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseTagOnCourseUncheckedUpdateWithoutCourseInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTagOnCourseUncheckedUpdateManyWithoutCourseInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseContentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseContentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseContentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPreview?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseReviewUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseReviewNestedInput
  }

  export type CourseReviewUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseReviewUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseFavoriteNestedInput
  }

  export type CourseFavoriteUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseFavoriteUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursePurchaseNestedInput
  }

  export type CoursePurchaseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}