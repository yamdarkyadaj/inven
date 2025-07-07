
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
 * Model superAdmin
 * 
 */
export type superAdmin = $Result.DefaultSelection<Prisma.$superAdminPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model warehouses
 * 
 */
export type warehouses = $Result.DefaultSelection<Prisma.$warehousesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const mode: {
  dark: 'dark',
  light: 'light'
};

export type mode = (typeof mode)[keyof typeof mode]


export const role: {
  admin: 'admin',
  sales: 'sales',
  purchase: 'purchase'
};

export type role = (typeof role)[keyof typeof role]

}

export type mode = $Enums.mode

export const mode: typeof $Enums.mode

export type role = $Enums.role

export const role: typeof $Enums.role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuperAdmins
 * const superAdmins = await prisma.superAdmin.findMany()
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
   * // Fetch zero or more SuperAdmins
   * const superAdmins = await prisma.superAdmin.findMany()
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
   * `prisma.superAdmin`: Exposes CRUD operations for the **superAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmin.findMany()
    * ```
    */
  get superAdmin(): Prisma.superAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouses`: Exposes CRUD operations for the **warehouses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouses.findMany()
    * ```
    */
  get warehouses(): Prisma.warehousesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    superAdmin: 'superAdmin',
    users: 'users',
    settings: 'settings',
    warehouses: 'warehouses'
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
      modelProps: "superAdmin" | "users" | "settings" | "warehouses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      superAdmin: {
        payload: Prisma.$superAdminPayload<ExtArgs>
        fields: Prisma.superAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.superAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.superAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          findFirst: {
            args: Prisma.superAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.superAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          findMany: {
            args: Prisma.superAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>[]
          }
          create: {
            args: Prisma.superAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          createMany: {
            args: Prisma.superAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.superAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>[]
          }
          delete: {
            args: Prisma.superAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          update: {
            args: Prisma.superAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          deleteMany: {
            args: Prisma.superAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.superAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.superAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>[]
          }
          upsert: {
            args: Prisma.superAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$superAdminPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmin>
          }
          groupBy: {
            args: Prisma.superAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.superAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      warehouses: {
        payload: Prisma.$warehousesPayload<ExtArgs>
        fields: Prisma.warehousesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.warehousesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.warehousesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          findFirst: {
            args: Prisma.warehousesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.warehousesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          findMany: {
            args: Prisma.warehousesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          create: {
            args: Prisma.warehousesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          createMany: {
            args: Prisma.warehousesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.warehousesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          delete: {
            args: Prisma.warehousesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          update: {
            args: Prisma.warehousesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          deleteMany: {
            args: Prisma.warehousesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.warehousesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.warehousesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>[]
          }
          upsert: {
            args: Prisma.warehousesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$warehousesPayload>
          }
          aggregate: {
            args: Prisma.WarehousesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouses>
          }
          groupBy: {
            args: Prisma.warehousesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehousesGroupByOutputType>[]
          }
          count: {
            args: Prisma.warehousesCountArgs<ExtArgs>
            result: $Utils.Optional<WarehousesCountAggregateOutputType> | number
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
    superAdmin?: superAdminOmit
    users?: usersOmit
    settings?: settingsOmit
    warehouses?: warehousesOmit
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
   * Count Type WarehousesCountOutputType
   */

  export type WarehousesCountOutputType = {
    users: number
  }

  export type WarehousesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WarehousesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehousesCountOutputType
     */
    select?: WarehousesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model superAdmin
   */

  export type AggregateSuperAdmin = {
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  export type SuperAdminMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: string | null
    lastLogin: Date | null
    warehousesId: string | null
  }

  export type SuperAdminMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: string | null
    lastLogin: Date | null
    warehousesId: string | null
  }

  export type SuperAdminCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    password: number
    role: number
    lastLogin: number
    warehousesId: number
    _all: number
  }


  export type SuperAdminMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    lastLogin?: true
    warehousesId?: true
  }

  export type SuperAdminMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    lastLogin?: true
    warehousesId?: true
  }

  export type SuperAdminCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    lastLogin?: true
    warehousesId?: true
    _all?: true
  }

  export type SuperAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which superAdmin to aggregate.
     */
    where?: superAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of superAdmins to fetch.
     */
    orderBy?: superAdminOrderByWithRelationInput | superAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: superAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` superAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` superAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned superAdmins
    **/
    _count?: true | SuperAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminMaxAggregateInputType
  }

  export type GetSuperAdminAggregateType<T extends SuperAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmin[P]>
      : GetScalarType<T[P], AggregateSuperAdmin[P]>
  }




  export type superAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: superAdminWhereInput
    orderBy?: superAdminOrderByWithAggregationInput | superAdminOrderByWithAggregationInput[]
    by: SuperAdminScalarFieldEnum[] | SuperAdminScalarFieldEnum
    having?: superAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminCountAggregateInputType | true
    _min?: SuperAdminMinAggregateInputType
    _max?: SuperAdminMaxAggregateInputType
  }

  export type SuperAdminGroupByOutputType = {
    id: string
    userName: string
    email: string
    password: string
    role: string
    lastLogin: Date | null
    warehousesId: string | null
    _count: SuperAdminCountAggregateOutputType | null
    _min: SuperAdminMinAggregateOutputType | null
    _max: SuperAdminMaxAggregateOutputType | null
  }

  type GetSuperAdminGroupByPayload<T extends superAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminGroupByOutputType[P]>
        }
      >
    >


  export type superAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    warehousesId?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type superAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    warehousesId?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type superAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    warehousesId?: boolean
  }, ExtArgs["result"]["superAdmin"]>

  export type superAdminSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    lastLogin?: boolean
    warehousesId?: boolean
  }

  export type superAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "password" | "role" | "lastLogin" | "warehousesId", ExtArgs["result"]["superAdmin"]>

  export type $superAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "superAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      password: string
      role: string
      lastLogin: Date | null
      warehousesId: string | null
    }, ExtArgs["result"]["superAdmin"]>
    composites: {}
  }

  type superAdminGetPayload<S extends boolean | null | undefined | superAdminDefaultArgs> = $Result.GetResult<Prisma.$superAdminPayload, S>

  type superAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<superAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminCountAggregateInputType | true
    }

  export interface superAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['superAdmin'], meta: { name: 'superAdmin' } }
    /**
     * Find zero or one SuperAdmin that matches the filter.
     * @param {superAdminFindUniqueArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends superAdminFindUniqueArgs>(args: SelectSubset<T, superAdminFindUniqueArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {superAdminFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends superAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, superAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminFindFirstArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends superAdminFindFirstArgs>(args?: SelectSubset<T, superAdminFindFirstArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminFindFirstOrThrowArgs} args - Arguments to find a SuperAdmin
     * @example
     * // Get one SuperAdmin
     * const superAdmin = await prisma.superAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends superAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, superAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends superAdminFindManyArgs>(args?: SelectSubset<T, superAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdmin.
     * @param {superAdminCreateArgs} args - Arguments to create a SuperAdmin.
     * @example
     * // Create one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.create({
     *   data: {
     *     // ... data to create a SuperAdmin
     *   }
     * })
     * 
     */
    create<T extends superAdminCreateArgs>(args: SelectSubset<T, superAdminCreateArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdmins.
     * @param {superAdminCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends superAdminCreateManyArgs>(args?: SelectSubset<T, superAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuperAdmins and returns the data saved in the database.
     * @param {superAdminCreateManyAndReturnArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmin = await prisma.superAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends superAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, superAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuperAdmin.
     * @param {superAdminDeleteArgs} args - Arguments to delete one SuperAdmin.
     * @example
     * // Delete one SuperAdmin
     * const SuperAdmin = await prisma.superAdmin.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmin
     *   }
     * })
     * 
     */
    delete<T extends superAdminDeleteArgs>(args: SelectSubset<T, superAdminDeleteArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdmin.
     * @param {superAdminUpdateArgs} args - Arguments to update one SuperAdmin.
     * @example
     * // Update one SuperAdmin
     * const superAdmin = await prisma.superAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends superAdminUpdateArgs>(args: SelectSubset<T, superAdminUpdateArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdmins.
     * @param {superAdminDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends superAdminDeleteManyArgs>(args?: SelectSubset<T, superAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends superAdminUpdateManyArgs>(args: SelectSubset<T, superAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins and returns the data updated in the database.
     * @param {superAdminUpdateManyAndReturnArgs} args - Arguments to update many SuperAdmins.
     * @example
     * // Update many SuperAdmins
     * const superAdmin = await prisma.superAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuperAdmins and only return the `id`
     * const superAdminWithIdOnly = await prisma.superAdmin.updateManyAndReturn({
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
    updateManyAndReturn<T extends superAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, superAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuperAdmin.
     * @param {superAdminUpsertArgs} args - Arguments to update or create a SuperAdmin.
     * @example
     * // Update or create a SuperAdmin
     * const superAdmin = await prisma.superAdmin.upsert({
     *   create: {
     *     // ... data to create a SuperAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmin we want to update
     *   }
     * })
     */
    upsert<T extends superAdminUpsertArgs>(args: SelectSubset<T, superAdminUpsertArgs<ExtArgs>>): Prisma__superAdminClient<$Result.GetResult<Prisma.$superAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmin.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends superAdminCountArgs>(
      args?: Subset<T, superAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminAggregateArgs>(args: Subset<T, SuperAdminAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminAggregateType<T>>

    /**
     * Group by SuperAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {superAdminGroupByArgs} args - Group by arguments.
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
      T extends superAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: superAdminGroupByArgs['orderBy'] }
        : { orderBy?: superAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, superAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the superAdmin model
   */
  readonly fields: superAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for superAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__superAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the superAdmin model
   */
  interface superAdminFieldRefs {
    readonly id: FieldRef<"superAdmin", 'String'>
    readonly userName: FieldRef<"superAdmin", 'String'>
    readonly email: FieldRef<"superAdmin", 'String'>
    readonly password: FieldRef<"superAdmin", 'String'>
    readonly role: FieldRef<"superAdmin", 'String'>
    readonly lastLogin: FieldRef<"superAdmin", 'DateTime'>
    readonly warehousesId: FieldRef<"superAdmin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * superAdmin findUnique
   */
  export type superAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter, which superAdmin to fetch.
     */
    where: superAdminWhereUniqueInput
  }

  /**
   * superAdmin findUniqueOrThrow
   */
  export type superAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter, which superAdmin to fetch.
     */
    where: superAdminWhereUniqueInput
  }

  /**
   * superAdmin findFirst
   */
  export type superAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter, which superAdmin to fetch.
     */
    where?: superAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of superAdmins to fetch.
     */
    orderBy?: superAdminOrderByWithRelationInput | superAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for superAdmins.
     */
    cursor?: superAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` superAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` superAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of superAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * superAdmin findFirstOrThrow
   */
  export type superAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter, which superAdmin to fetch.
     */
    where?: superAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of superAdmins to fetch.
     */
    orderBy?: superAdminOrderByWithRelationInput | superAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for superAdmins.
     */
    cursor?: superAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` superAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` superAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of superAdmins.
     */
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * superAdmin findMany
   */
  export type superAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter, which superAdmins to fetch.
     */
    where?: superAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of superAdmins to fetch.
     */
    orderBy?: superAdminOrderByWithRelationInput | superAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing superAdmins.
     */
    cursor?: superAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` superAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` superAdmins.
     */
    skip?: number
    distinct?: SuperAdminScalarFieldEnum | SuperAdminScalarFieldEnum[]
  }

  /**
   * superAdmin create
   */
  export type superAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * The data needed to create a superAdmin.
     */
    data: XOR<superAdminCreateInput, superAdminUncheckedCreateInput>
  }

  /**
   * superAdmin createMany
   */
  export type superAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many superAdmins.
     */
    data: superAdminCreateManyInput | superAdminCreateManyInput[]
  }

  /**
   * superAdmin createManyAndReturn
   */
  export type superAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * The data used to create many superAdmins.
     */
    data: superAdminCreateManyInput | superAdminCreateManyInput[]
  }

  /**
   * superAdmin update
   */
  export type superAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * The data needed to update a superAdmin.
     */
    data: XOR<superAdminUpdateInput, superAdminUncheckedUpdateInput>
    /**
     * Choose, which superAdmin to update.
     */
    where: superAdminWhereUniqueInput
  }

  /**
   * superAdmin updateMany
   */
  export type superAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update superAdmins.
     */
    data: XOR<superAdminUpdateManyMutationInput, superAdminUncheckedUpdateManyInput>
    /**
     * Filter which superAdmins to update
     */
    where?: superAdminWhereInput
    /**
     * Limit how many superAdmins to update.
     */
    limit?: number
  }

  /**
   * superAdmin updateManyAndReturn
   */
  export type superAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * The data used to update superAdmins.
     */
    data: XOR<superAdminUpdateManyMutationInput, superAdminUncheckedUpdateManyInput>
    /**
     * Filter which superAdmins to update
     */
    where?: superAdminWhereInput
    /**
     * Limit how many superAdmins to update.
     */
    limit?: number
  }

  /**
   * superAdmin upsert
   */
  export type superAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * The filter to search for the superAdmin to update in case it exists.
     */
    where: superAdminWhereUniqueInput
    /**
     * In case the superAdmin found by the `where` argument doesn't exist, create a new superAdmin with this data.
     */
    create: XOR<superAdminCreateInput, superAdminUncheckedCreateInput>
    /**
     * In case the superAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<superAdminUpdateInput, superAdminUncheckedUpdateInput>
  }

  /**
   * superAdmin delete
   */
  export type superAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
    /**
     * Filter which superAdmin to delete.
     */
    where: superAdminWhereUniqueInput
  }

  /**
   * superAdmin deleteMany
   */
  export type superAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which superAdmins to delete
     */
    where?: superAdminWhereInput
    /**
     * Limit how many superAdmins to delete.
     */
    limit?: number
  }

  /**
   * superAdmin without action
   */
  export type superAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the superAdmin
     */
    select?: superAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the superAdmin
     */
    omit?: superAdminOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    userName: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.role | null
    warehousesId: string | null
    lastLogin: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    userName: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.role | null
    warehousesId: string | null
    lastLogin: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    userName: number
    phoneNumber: number
    password: number
    role: number
    warehousesId: number
    lastLogin: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    phoneNumber?: true
    password?: true
    role?: true
    warehousesId?: true
    lastLogin?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    phoneNumber?: true
    password?: true
    role?: true
    warehousesId?: true
    lastLogin?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    userName?: true
    phoneNumber?: true
    password?: true
    role?: true
    warehousesId?: true
    lastLogin?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    warehousesId: string | null
    lastLogin: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    warehousesId?: boolean
    lastLogin?: boolean
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    warehousesId?: boolean
    lastLogin?: boolean
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    userName?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    warehousesId?: boolean
    lastLogin?: boolean
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    userName?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    warehousesId?: boolean
    lastLogin?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "userName" | "phoneNumber" | "password" | "role" | "warehousesId" | "lastLogin", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouses?: boolean | users$warehousesArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      warehouses: Prisma.$warehousesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      userName: string
      phoneNumber: string
      password: string
      role: $Enums.role
      warehousesId: string | null
      lastLogin: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouses<T extends users$warehousesArgs<ExtArgs> = {}>(args?: Subset<T, users$warehousesArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly userName: FieldRef<"users", 'String'>
    readonly phoneNumber: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'role'>
    readonly warehousesId: FieldRef<"users", 'String'>
    readonly lastLogin: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.warehouses
   */
  export type users$warehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    where?: warehousesWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    setting_id: number | null
    taxRate: number | null
    itermsPerPage: number | null
  }

  export type SettingsSumAggregateOutputType = {
    setting_id: number | null
    taxRate: number | null
    itermsPerPage: number | null
  }

  export type SettingsMinAggregateOutputType = {
    setting_id: number | null
    companyName: string | null
    companyEmail: string | null
    phoneNumber: string | null
    websiteURL: string | null
    address: string | null
    logoUrl: string | null
    defaultCurrency: string | null
    taxRate: number | null
    mode: $Enums.mode | null
    itermsPerPage: number | null
  }

  export type SettingsMaxAggregateOutputType = {
    setting_id: number | null
    companyName: string | null
    companyEmail: string | null
    phoneNumber: string | null
    websiteURL: string | null
    address: string | null
    logoUrl: string | null
    defaultCurrency: string | null
    taxRate: number | null
    mode: $Enums.mode | null
    itermsPerPage: number | null
  }

  export type SettingsCountAggregateOutputType = {
    setting_id: number
    companyName: number
    companyEmail: number
    phoneNumber: number
    websiteURL: number
    address: number
    logoUrl: number
    defaultCurrency: number
    taxRate: number
    mode: number
    itermsPerPage: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    setting_id?: true
    taxRate?: true
    itermsPerPage?: true
  }

  export type SettingsSumAggregateInputType = {
    setting_id?: true
    taxRate?: true
    itermsPerPage?: true
  }

  export type SettingsMinAggregateInputType = {
    setting_id?: true
    companyName?: true
    companyEmail?: true
    phoneNumber?: true
    websiteURL?: true
    address?: true
    logoUrl?: true
    defaultCurrency?: true
    taxRate?: true
    mode?: true
    itermsPerPage?: true
  }

  export type SettingsMaxAggregateInputType = {
    setting_id?: true
    companyName?: true
    companyEmail?: true
    phoneNumber?: true
    websiteURL?: true
    address?: true
    logoUrl?: true
    defaultCurrency?: true
    taxRate?: true
    mode?: true
    itermsPerPage?: true
  }

  export type SettingsCountAggregateInputType = {
    setting_id?: true
    companyName?: true
    companyEmail?: true
    phoneNumber?: true
    websiteURL?: true
    address?: true
    logoUrl?: true
    defaultCurrency?: true
    taxRate?: true
    mode?: true
    itermsPerPage?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    setting_id: number
    companyName: string
    companyEmail: string
    phoneNumber: string
    websiteURL: string
    address: string
    logoUrl: string
    defaultCurrency: string
    taxRate: number
    mode: $Enums.mode
    itermsPerPage: number
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    companyName?: boolean
    companyEmail?: boolean
    phoneNumber?: boolean
    websiteURL?: boolean
    address?: boolean
    logoUrl?: boolean
    defaultCurrency?: boolean
    taxRate?: boolean
    mode?: boolean
    itermsPerPage?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    companyName?: boolean
    companyEmail?: boolean
    phoneNumber?: boolean
    websiteURL?: boolean
    address?: boolean
    logoUrl?: boolean
    defaultCurrency?: boolean
    taxRate?: boolean
    mode?: boolean
    itermsPerPage?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_id?: boolean
    companyName?: boolean
    companyEmail?: boolean
    phoneNumber?: boolean
    websiteURL?: boolean
    address?: boolean
    logoUrl?: boolean
    defaultCurrency?: boolean
    taxRate?: boolean
    mode?: boolean
    itermsPerPage?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    setting_id?: boolean
    companyName?: boolean
    companyEmail?: boolean
    phoneNumber?: boolean
    websiteURL?: boolean
    address?: boolean
    logoUrl?: boolean
    defaultCurrency?: boolean
    taxRate?: boolean
    mode?: boolean
    itermsPerPage?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"setting_id" | "companyName" | "companyEmail" | "phoneNumber" | "websiteURL" | "address" | "logoUrl" | "defaultCurrency" | "taxRate" | "mode" | "itermsPerPage", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      setting_id: number
      companyName: string
      companyEmail: string
      phoneNumber: string
      websiteURL: string
      address: string
      logoUrl: string
      defaultCurrency: string
      taxRate: number
      mode: $Enums.mode
      itermsPerPage: number
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.findMany({ select: { setting_id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.createManyAndReturn({
     *   select: { setting_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {settingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `setting_id`
     * const settingsWithSetting_idOnly = await prisma.settings.updateManyAndReturn({
     *   select: { setting_id: true },
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
    updateManyAndReturn<T extends settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly setting_id: FieldRef<"settings", 'Int'>
    readonly companyName: FieldRef<"settings", 'String'>
    readonly companyEmail: FieldRef<"settings", 'String'>
    readonly phoneNumber: FieldRef<"settings", 'String'>
    readonly websiteURL: FieldRef<"settings", 'String'>
    readonly address: FieldRef<"settings", 'String'>
    readonly logoUrl: FieldRef<"settings", 'String'>
    readonly defaultCurrency: FieldRef<"settings", 'String'>
    readonly taxRate: FieldRef<"settings", 'Int'>
    readonly mode: FieldRef<"settings", 'mode'>
    readonly itermsPerPage: FieldRef<"settings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings updateManyAndReturn
   */
  export type settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Model warehouses
   */

  export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  export type WarehousesMinAggregateOutputType = {
    id: string | null
    warehouseCode: string | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    description: string | null
    address: string | null
  }

  export type WarehousesMaxAggregateOutputType = {
    id: string | null
    warehouseCode: string | null
    name: string | null
    phoneNumber: string | null
    email: string | null
    description: string | null
    address: string | null
  }

  export type WarehousesCountAggregateOutputType = {
    id: number
    warehouseCode: number
    name: number
    phoneNumber: number
    email: number
    description: number
    address: number
    _all: number
  }


  export type WarehousesMinAggregateInputType = {
    id?: true
    warehouseCode?: true
    name?: true
    phoneNumber?: true
    email?: true
    description?: true
    address?: true
  }

  export type WarehousesMaxAggregateInputType = {
    id?: true
    warehouseCode?: true
    name?: true
    phoneNumber?: true
    email?: true
    description?: true
    address?: true
  }

  export type WarehousesCountAggregateInputType = {
    id?: true
    warehouseCode?: true
    name?: true
    phoneNumber?: true
    email?: true
    description?: true
    address?: true
    _all?: true
  }

  export type WarehousesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which warehouses to aggregate.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned warehouses
    **/
    _count?: true | WarehousesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehousesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehousesMaxAggregateInputType
  }

  export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouses[P]>
      : GetScalarType<T[P], AggregateWarehouses[P]>
  }




  export type warehousesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: warehousesWhereInput
    orderBy?: warehousesOrderByWithAggregationInput | warehousesOrderByWithAggregationInput[]
    by: WarehousesScalarFieldEnum[] | WarehousesScalarFieldEnum
    having?: warehousesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehousesCountAggregateInputType | true
    _min?: WarehousesMinAggregateInputType
    _max?: WarehousesMaxAggregateInputType
  }

  export type WarehousesGroupByOutputType = {
    id: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description: string | null
    address: string
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  type GetWarehousesGroupByPayload<T extends warehousesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehousesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
            : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
        }
      >
    >


  export type warehousesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseCode?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    description?: boolean
    address?: boolean
    users?: boolean | warehouses$usersArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseCode?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    description?: boolean
    address?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouseCode?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    description?: boolean
    address?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type warehousesSelectScalar = {
    id?: boolean
    warehouseCode?: boolean
    name?: boolean
    phoneNumber?: boolean
    email?: boolean
    description?: boolean
    address?: boolean
  }

  export type warehousesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "warehouseCode" | "name" | "phoneNumber" | "email" | "description" | "address", ExtArgs["result"]["warehouses"]>
  export type warehousesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | warehouses$usersArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type warehousesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type warehousesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $warehousesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "warehouses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      warehouseCode: string
      name: string
      phoneNumber: string
      email: string
      description: string | null
      address: string
    }, ExtArgs["result"]["warehouses"]>
    composites: {}
  }

  type warehousesGetPayload<S extends boolean | null | undefined | warehousesDefaultArgs> = $Result.GetResult<Prisma.$warehousesPayload, S>

  type warehousesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<warehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehousesCountAggregateInputType | true
    }

  export interface warehousesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['warehouses'], meta: { name: 'warehouses' } }
    /**
     * Find zero or one Warehouses that matches the filter.
     * @param {warehousesFindUniqueArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends warehousesFindUniqueArgs>(args: SelectSubset<T, warehousesFindUniqueArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {warehousesFindUniqueOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends warehousesFindUniqueOrThrowArgs>(args: SelectSubset<T, warehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindFirstArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends warehousesFindFirstArgs>(args?: SelectSubset<T, warehousesFindFirstArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindFirstOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends warehousesFindFirstOrThrowArgs>(args?: SelectSubset<T, warehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouses.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends warehousesFindManyArgs>(args?: SelectSubset<T, warehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouses.
     * @param {warehousesCreateArgs} args - Arguments to create a Warehouses.
     * @example
     * // Create one Warehouses
     * const Warehouses = await prisma.warehouses.create({
     *   data: {
     *     // ... data to create a Warehouses
     *   }
     * })
     * 
     */
    create<T extends warehousesCreateArgs>(args: SelectSubset<T, warehousesCreateArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {warehousesCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends warehousesCreateManyArgs>(args?: SelectSubset<T, warehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {warehousesCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends warehousesCreateManyAndReturnArgs>(args?: SelectSubset<T, warehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouses.
     * @param {warehousesDeleteArgs} args - Arguments to delete one Warehouses.
     * @example
     * // Delete one Warehouses
     * const Warehouses = await prisma.warehouses.delete({
     *   where: {
     *     // ... filter to delete one Warehouses
     *   }
     * })
     * 
     */
    delete<T extends warehousesDeleteArgs>(args: SelectSubset<T, warehousesDeleteArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouses.
     * @param {warehousesUpdateArgs} args - Arguments to update one Warehouses.
     * @example
     * // Update one Warehouses
     * const warehouses = await prisma.warehouses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends warehousesUpdateArgs>(args: SelectSubset<T, warehousesUpdateArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {warehousesDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends warehousesDeleteManyArgs>(args?: SelectSubset<T, warehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends warehousesUpdateManyArgs>(args: SelectSubset<T, warehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {warehousesUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.updateManyAndReturn({
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
    updateManyAndReturn<T extends warehousesUpdateManyAndReturnArgs>(args: SelectSubset<T, warehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouses.
     * @param {warehousesUpsertArgs} args - Arguments to update or create a Warehouses.
     * @example
     * // Update or create a Warehouses
     * const warehouses = await prisma.warehouses.upsert({
     *   create: {
     *     // ... data to create a Warehouses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouses we want to update
     *   }
     * })
     */
    upsert<T extends warehousesUpsertArgs>(args: SelectSubset<T, warehousesUpsertArgs<ExtArgs>>): Prisma__warehousesClient<$Result.GetResult<Prisma.$warehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouses.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends warehousesCountArgs>(
      args?: Subset<T, warehousesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehousesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehousesAggregateArgs>(args: Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>

    /**
     * Group by Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {warehousesGroupByArgs} args - Group by arguments.
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
      T extends warehousesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: warehousesGroupByArgs['orderBy'] }
        : { orderBy?: warehousesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, warehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the warehouses model
   */
  readonly fields: warehousesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for warehouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__warehousesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends warehouses$usersArgs<ExtArgs> = {}>(args?: Subset<T, warehouses$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the warehouses model
   */
  interface warehousesFieldRefs {
    readonly id: FieldRef<"warehouses", 'String'>
    readonly warehouseCode: FieldRef<"warehouses", 'String'>
    readonly name: FieldRef<"warehouses", 'String'>
    readonly phoneNumber: FieldRef<"warehouses", 'String'>
    readonly email: FieldRef<"warehouses", 'String'>
    readonly description: FieldRef<"warehouses", 'String'>
    readonly address: FieldRef<"warehouses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * warehouses findUnique
   */
  export type warehousesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses findUniqueOrThrow
   */
  export type warehousesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses findFirst
   */
  export type warehousesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses findFirstOrThrow
   */
  export type warehousesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses findMany
   */
  export type warehousesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter, which warehouses to fetch.
     */
    where?: warehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of warehouses to fetch.
     */
    orderBy?: warehousesOrderByWithRelationInput | warehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing warehouses.
     */
    cursor?: warehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` warehouses.
     */
    skip?: number
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * warehouses create
   */
  export type warehousesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The data needed to create a warehouses.
     */
    data: XOR<warehousesCreateInput, warehousesUncheckedCreateInput>
  }

  /**
   * warehouses createMany
   */
  export type warehousesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many warehouses.
     */
    data: warehousesCreateManyInput | warehousesCreateManyInput[]
  }

  /**
   * warehouses createManyAndReturn
   */
  export type warehousesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * The data used to create many warehouses.
     */
    data: warehousesCreateManyInput | warehousesCreateManyInput[]
  }

  /**
   * warehouses update
   */
  export type warehousesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The data needed to update a warehouses.
     */
    data: XOR<warehousesUpdateInput, warehousesUncheckedUpdateInput>
    /**
     * Choose, which warehouses to update.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses updateMany
   */
  export type warehousesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update warehouses.
     */
    data: XOR<warehousesUpdateManyMutationInput, warehousesUncheckedUpdateManyInput>
    /**
     * Filter which warehouses to update
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to update.
     */
    limit?: number
  }

  /**
   * warehouses updateManyAndReturn
   */
  export type warehousesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * The data used to update warehouses.
     */
    data: XOR<warehousesUpdateManyMutationInput, warehousesUncheckedUpdateManyInput>
    /**
     * Filter which warehouses to update
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to update.
     */
    limit?: number
  }

  /**
   * warehouses upsert
   */
  export type warehousesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * The filter to search for the warehouses to update in case it exists.
     */
    where: warehousesWhereUniqueInput
    /**
     * In case the warehouses found by the `where` argument doesn't exist, create a new warehouses with this data.
     */
    create: XOR<warehousesCreateInput, warehousesUncheckedCreateInput>
    /**
     * In case the warehouses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<warehousesUpdateInput, warehousesUncheckedUpdateInput>
  }

  /**
   * warehouses delete
   */
  export type warehousesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
    /**
     * Filter which warehouses to delete.
     */
    where: warehousesWhereUniqueInput
  }

  /**
   * warehouses deleteMany
   */
  export type warehousesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which warehouses to delete
     */
    where?: warehousesWhereInput
    /**
     * Limit how many warehouses to delete.
     */
    limit?: number
  }

  /**
   * warehouses.users
   */
  export type warehouses$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * warehouses without action
   */
  export type warehousesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the warehouses
     */
    select?: warehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the warehouses
     */
    omit?: warehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: warehousesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperAdminScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    password: 'password',
    role: 'role',
    lastLogin: 'lastLogin',
    warehousesId: 'warehousesId'
  };

  export type SuperAdminScalarFieldEnum = (typeof SuperAdminScalarFieldEnum)[keyof typeof SuperAdminScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    userName: 'userName',
    phoneNumber: 'phoneNumber',
    password: 'password',
    role: 'role',
    warehousesId: 'warehousesId',
    lastLogin: 'lastLogin'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    setting_id: 'setting_id',
    companyName: 'companyName',
    companyEmail: 'companyEmail',
    phoneNumber: 'phoneNumber',
    websiteURL: 'websiteURL',
    address: 'address',
    logoUrl: 'logoUrl',
    defaultCurrency: 'defaultCurrency',
    taxRate: 'taxRate',
    mode: 'mode',
    itermsPerPage: 'itermsPerPage'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const WarehousesScalarFieldEnum: {
    id: 'id',
    warehouseCode: 'warehouseCode',
    name: 'name',
    phoneNumber: 'phoneNumber',
    email: 'email',
    description: 'description',
    address: 'address'
  };

  export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'mode'
   */
  export type EnummodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'mode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type superAdminWhereInput = {
    AND?: superAdminWhereInput | superAdminWhereInput[]
    OR?: superAdminWhereInput[]
    NOT?: superAdminWhereInput | superAdminWhereInput[]
    id?: StringFilter<"superAdmin"> | string
    userName?: StringFilter<"superAdmin"> | string
    email?: StringFilter<"superAdmin"> | string
    password?: StringFilter<"superAdmin"> | string
    role?: StringFilter<"superAdmin"> | string
    lastLogin?: DateTimeNullableFilter<"superAdmin"> | Date | string | null
    warehousesId?: StringNullableFilter<"superAdmin"> | string | null
  }

  export type superAdminOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    warehousesId?: SortOrderInput | SortOrder
  }

  export type superAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: superAdminWhereInput | superAdminWhereInput[]
    OR?: superAdminWhereInput[]
    NOT?: superAdminWhereInput | superAdminWhereInput[]
    userName?: StringFilter<"superAdmin"> | string
    password?: StringFilter<"superAdmin"> | string
    role?: StringFilter<"superAdmin"> | string
    lastLogin?: DateTimeNullableFilter<"superAdmin"> | Date | string | null
    warehousesId?: StringNullableFilter<"superAdmin"> | string | null
  }, "id" | "email">

  export type superAdminOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    warehousesId?: SortOrderInput | SortOrder
    _count?: superAdminCountOrderByAggregateInput
    _max?: superAdminMaxOrderByAggregateInput
    _min?: superAdminMinOrderByAggregateInput
  }

  export type superAdminScalarWhereWithAggregatesInput = {
    AND?: superAdminScalarWhereWithAggregatesInput | superAdminScalarWhereWithAggregatesInput[]
    OR?: superAdminScalarWhereWithAggregatesInput[]
    NOT?: superAdminScalarWhereWithAggregatesInput | superAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"superAdmin"> | string
    userName?: StringWithAggregatesFilter<"superAdmin"> | string
    email?: StringWithAggregatesFilter<"superAdmin"> | string
    password?: StringWithAggregatesFilter<"superAdmin"> | string
    role?: StringWithAggregatesFilter<"superAdmin"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"superAdmin"> | Date | string | null
    warehousesId?: StringNullableWithAggregatesFilter<"superAdmin"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    userName?: StringFilter<"users"> | string
    phoneNumber?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumroleFilter<"users"> | $Enums.role
    warehousesId?: StringNullableFilter<"users"> | string | null
    lastLogin?: DateTimeNullableFilter<"users"> | Date | string | null
    warehouses?: XOR<WarehousesNullableScalarRelationFilter, warehousesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warehousesId?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    warehouses?: warehousesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    email?: StringFilter<"users"> | string
    phoneNumber?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumroleFilter<"users"> | $Enums.role
    warehousesId?: StringNullableFilter<"users"> | string | null
    lastLogin?: DateTimeNullableFilter<"users"> | Date | string | null
    warehouses?: XOR<WarehousesNullableScalarRelationFilter, warehousesWhereInput> | null
  }, "id" | "userName">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warehousesId?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    userName?: StringWithAggregatesFilter<"users"> | string
    phoneNumber?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: EnumroleWithAggregatesFilter<"users"> | $Enums.role
    warehousesId?: StringNullableWithAggregatesFilter<"users"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    setting_id?: IntFilter<"settings"> | number
    companyName?: StringFilter<"settings"> | string
    companyEmail?: StringFilter<"settings"> | string
    phoneNumber?: StringFilter<"settings"> | string
    websiteURL?: StringFilter<"settings"> | string
    address?: StringFilter<"settings"> | string
    logoUrl?: StringFilter<"settings"> | string
    defaultCurrency?: StringFilter<"settings"> | string
    taxRate?: IntFilter<"settings"> | number
    mode?: EnummodeFilter<"settings"> | $Enums.mode
    itermsPerPage?: IntFilter<"settings"> | number
  }

  export type settingsOrderByWithRelationInput = {
    setting_id?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    phoneNumber?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    defaultCurrency?: SortOrder
    taxRate?: SortOrder
    mode?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    setting_id?: number
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    companyName?: StringFilter<"settings"> | string
    companyEmail?: StringFilter<"settings"> | string
    phoneNumber?: StringFilter<"settings"> | string
    websiteURL?: StringFilter<"settings"> | string
    address?: StringFilter<"settings"> | string
    logoUrl?: StringFilter<"settings"> | string
    defaultCurrency?: StringFilter<"settings"> | string
    taxRate?: IntFilter<"settings"> | number
    mode?: EnummodeFilter<"settings"> | $Enums.mode
    itermsPerPage?: IntFilter<"settings"> | number
  }, "setting_id">

  export type settingsOrderByWithAggregationInput = {
    setting_id?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    phoneNumber?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    defaultCurrency?: SortOrder
    taxRate?: SortOrder
    mode?: SortOrder
    itermsPerPage?: SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    setting_id?: IntWithAggregatesFilter<"settings"> | number
    companyName?: StringWithAggregatesFilter<"settings"> | string
    companyEmail?: StringWithAggregatesFilter<"settings"> | string
    phoneNumber?: StringWithAggregatesFilter<"settings"> | string
    websiteURL?: StringWithAggregatesFilter<"settings"> | string
    address?: StringWithAggregatesFilter<"settings"> | string
    logoUrl?: StringWithAggregatesFilter<"settings"> | string
    defaultCurrency?: StringWithAggregatesFilter<"settings"> | string
    taxRate?: IntWithAggregatesFilter<"settings"> | number
    mode?: EnummodeWithAggregatesFilter<"settings"> | $Enums.mode
    itermsPerPage?: IntWithAggregatesFilter<"settings"> | number
  }

  export type warehousesWhereInput = {
    AND?: warehousesWhereInput | warehousesWhereInput[]
    OR?: warehousesWhereInput[]
    NOT?: warehousesWhereInput | warehousesWhereInput[]
    id?: StringFilter<"warehouses"> | string
    warehouseCode?: StringFilter<"warehouses"> | string
    name?: StringFilter<"warehouses"> | string
    phoneNumber?: StringFilter<"warehouses"> | string
    email?: StringFilter<"warehouses"> | string
    description?: StringNullableFilter<"warehouses"> | string | null
    address?: StringFilter<"warehouses"> | string
    users?: UsersListRelationFilter
  }

  export type warehousesOrderByWithRelationInput = {
    id?: SortOrder
    warehouseCode?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type warehousesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    warehouseCode?: string
    AND?: warehousesWhereInput | warehousesWhereInput[]
    OR?: warehousesWhereInput[]
    NOT?: warehousesWhereInput | warehousesWhereInput[]
    name?: StringFilter<"warehouses"> | string
    phoneNumber?: StringFilter<"warehouses"> | string
    email?: StringFilter<"warehouses"> | string
    description?: StringNullableFilter<"warehouses"> | string | null
    address?: StringFilter<"warehouses"> | string
    users?: UsersListRelationFilter
  }, "id" | "warehouseCode">

  export type warehousesOrderByWithAggregationInput = {
    id?: SortOrder
    warehouseCode?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    _count?: warehousesCountOrderByAggregateInput
    _max?: warehousesMaxOrderByAggregateInput
    _min?: warehousesMinOrderByAggregateInput
  }

  export type warehousesScalarWhereWithAggregatesInput = {
    AND?: warehousesScalarWhereWithAggregatesInput | warehousesScalarWhereWithAggregatesInput[]
    OR?: warehousesScalarWhereWithAggregatesInput[]
    NOT?: warehousesScalarWhereWithAggregatesInput | warehousesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"warehouses"> | string
    warehouseCode?: StringWithAggregatesFilter<"warehouses"> | string
    name?: StringWithAggregatesFilter<"warehouses"> | string
    phoneNumber?: StringWithAggregatesFilter<"warehouses"> | string
    email?: StringWithAggregatesFilter<"warehouses"> | string
    description?: StringNullableWithAggregatesFilter<"warehouses"> | string | null
    address?: StringWithAggregatesFilter<"warehouses"> | string
  }

  export type superAdminCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    role: string
    lastLogin?: Date | string | null
    warehousesId?: string | null
  }

  export type superAdminUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    password: string
    role: string
    lastLogin?: Date | string | null
    warehousesId?: string | null
  }

  export type superAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type superAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type superAdminCreateManyInput = {
    id?: string
    userName: string
    email: string
    password: string
    role: string
    lastLogin?: Date | string | null
    warehousesId?: string | null
  }

  export type superAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type superAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    lastLogin?: Date | string | null
    warehouses?: warehousesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    warehousesId?: string | null
    lastLogin?: Date | string | null
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouses?: warehousesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    warehousesId?: string | null
    lastLogin?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    warehousesId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type settingsCreateInput = {
    setting_id: number
    companyName: string
    companyEmail: string
    phoneNumber: string
    websiteURL: string
    address: string
    logoUrl: string
    defaultCurrency: string
    taxRate: number
    mode: $Enums.mode
    itermsPerPage: number
  }

  export type settingsUncheckedCreateInput = {
    setting_id: number
    companyName: string
    companyEmail: string
    phoneNumber: string
    websiteURL: string
    address: string
    logoUrl: string
    defaultCurrency: string
    taxRate: number
    mode: $Enums.mode
    itermsPerPage: number
  }

  export type settingsUpdateInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    websiteURL?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    defaultCurrency?: StringFieldUpdateOperationsInput | string
    taxRate?: IntFieldUpdateOperationsInput | number
    mode?: EnummodeFieldUpdateOperationsInput | $Enums.mode
    itermsPerPage?: IntFieldUpdateOperationsInput | number
  }

  export type settingsUncheckedUpdateInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    websiteURL?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    defaultCurrency?: StringFieldUpdateOperationsInput | string
    taxRate?: IntFieldUpdateOperationsInput | number
    mode?: EnummodeFieldUpdateOperationsInput | $Enums.mode
    itermsPerPage?: IntFieldUpdateOperationsInput | number
  }

  export type settingsCreateManyInput = {
    setting_id: number
    companyName: string
    companyEmail: string
    phoneNumber: string
    websiteURL: string
    address: string
    logoUrl: string
    defaultCurrency: string
    taxRate: number
    mode: $Enums.mode
    itermsPerPage: number
  }

  export type settingsUpdateManyMutationInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    websiteURL?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    defaultCurrency?: StringFieldUpdateOperationsInput | string
    taxRate?: IntFieldUpdateOperationsInput | number
    mode?: EnummodeFieldUpdateOperationsInput | $Enums.mode
    itermsPerPage?: IntFieldUpdateOperationsInput | number
  }

  export type settingsUncheckedUpdateManyInput = {
    setting_id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    companyEmail?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    websiteURL?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    defaultCurrency?: StringFieldUpdateOperationsInput | string
    taxRate?: IntFieldUpdateOperationsInput | number
    mode?: EnummodeFieldUpdateOperationsInput | $Enums.mode
    itermsPerPage?: IntFieldUpdateOperationsInput | number
  }

  export type warehousesCreateInput = {
    id?: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description?: string | null
    address: string
    users?: usersCreateNestedManyWithoutWarehousesInput
  }

  export type warehousesUncheckedCreateInput = {
    id?: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description?: string | null
    address: string
    users?: usersUncheckedCreateNestedManyWithoutWarehousesInput
  }

  export type warehousesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutWarehousesNestedInput
  }

  export type warehousesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutWarehousesNestedInput
  }

  export type warehousesCreateManyInput = {
    id?: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description?: string | null
    address: string
  }

  export type warehousesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type warehousesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type superAdminCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    warehousesId?: SortOrder
  }

  export type superAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    warehousesId?: SortOrder
  }

  export type superAdminMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    warehousesId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type WarehousesNullableScalarRelationFilter = {
    is?: warehousesWhereInput | null
    isNot?: warehousesWhereInput | null
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warehousesId?: SortOrder
    lastLogin?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warehousesId?: SortOrder
    lastLogin?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    userName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    warehousesId?: SortOrder
    lastLogin?: SortOrder
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnummodeFilter<$PrismaModel = never> = {
    equals?: $Enums.mode | EnummodeFieldRefInput<$PrismaModel>
    in?: $Enums.mode[]
    notIn?: $Enums.mode[]
    not?: NestedEnummodeFilter<$PrismaModel> | $Enums.mode
  }

  export type settingsCountOrderByAggregateInput = {
    setting_id?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    phoneNumber?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    defaultCurrency?: SortOrder
    taxRate?: SortOrder
    mode?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    setting_id?: SortOrder
    taxRate?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    setting_id?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    phoneNumber?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    defaultCurrency?: SortOrder
    taxRate?: SortOrder
    mode?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    setting_id?: SortOrder
    companyName?: SortOrder
    companyEmail?: SortOrder
    phoneNumber?: SortOrder
    websiteURL?: SortOrder
    address?: SortOrder
    logoUrl?: SortOrder
    defaultCurrency?: SortOrder
    taxRate?: SortOrder
    mode?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    setting_id?: SortOrder
    taxRate?: SortOrder
    itermsPerPage?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnummodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mode | EnummodeFieldRefInput<$PrismaModel>
    in?: $Enums.mode[]
    notIn?: $Enums.mode[]
    not?: NestedEnummodeWithAggregatesFilter<$PrismaModel> | $Enums.mode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummodeFilter<$PrismaModel>
    _max?: NestedEnummodeFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type warehousesCountOrderByAggregateInput = {
    id?: SortOrder
    warehouseCode?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type warehousesMaxOrderByAggregateInput = {
    id?: SortOrder
    warehouseCode?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type warehousesMinOrderByAggregateInput = {
    id?: SortOrder
    warehouseCode?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    description?: SortOrder
    address?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type warehousesCreateNestedOneWithoutUsersInput = {
    create?: XOR<warehousesCreateWithoutUsersInput, warehousesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: warehousesCreateOrConnectWithoutUsersInput
    connect?: warehousesWhereUniqueInput
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type warehousesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<warehousesCreateWithoutUsersInput, warehousesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: warehousesCreateOrConnectWithoutUsersInput
    upsert?: warehousesUpsertWithoutUsersInput
    disconnect?: warehousesWhereInput | boolean
    delete?: warehousesWhereInput | boolean
    connect?: warehousesWhereUniqueInput
    update?: XOR<XOR<warehousesUpdateToOneWithWhereWithoutUsersInput, warehousesUpdateWithoutUsersInput>, warehousesUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnummodeFieldUpdateOperationsInput = {
    set?: $Enums.mode
  }

  export type usersCreateNestedManyWithoutWarehousesInput = {
    create?: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput> | usersCreateWithoutWarehousesInput[] | usersUncheckedCreateWithoutWarehousesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWarehousesInput | usersCreateOrConnectWithoutWarehousesInput[]
    createMany?: usersCreateManyWarehousesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutWarehousesInput = {
    create?: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput> | usersCreateWithoutWarehousesInput[] | usersUncheckedCreateWithoutWarehousesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWarehousesInput | usersCreateOrConnectWithoutWarehousesInput[]
    createMany?: usersCreateManyWarehousesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutWarehousesNestedInput = {
    create?: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput> | usersCreateWithoutWarehousesInput[] | usersUncheckedCreateWithoutWarehousesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWarehousesInput | usersCreateOrConnectWithoutWarehousesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWarehousesInput | usersUpsertWithWhereUniqueWithoutWarehousesInput[]
    createMany?: usersCreateManyWarehousesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWarehousesInput | usersUpdateWithWhereUniqueWithoutWarehousesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWarehousesInput | usersUpdateManyWithWhereWithoutWarehousesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutWarehousesNestedInput = {
    create?: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput> | usersCreateWithoutWarehousesInput[] | usersUncheckedCreateWithoutWarehousesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWarehousesInput | usersCreateOrConnectWithoutWarehousesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWarehousesInput | usersUpsertWithWhereUniqueWithoutWarehousesInput[]
    createMany?: usersCreateManyWarehousesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWarehousesInput | usersUpdateWithWhereUniqueWithoutWarehousesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWarehousesInput | usersUpdateManyWithWhereWithoutWarehousesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedEnummodeFilter<$PrismaModel = never> = {
    equals?: $Enums.mode | EnummodeFieldRefInput<$PrismaModel>
    in?: $Enums.mode[]
    notIn?: $Enums.mode[]
    not?: NestedEnummodeFilter<$PrismaModel> | $Enums.mode
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnummodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.mode | EnummodeFieldRefInput<$PrismaModel>
    in?: $Enums.mode[]
    notIn?: $Enums.mode[]
    not?: NestedEnummodeWithAggregatesFilter<$PrismaModel> | $Enums.mode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummodeFilter<$PrismaModel>
    _max?: NestedEnummodeFilter<$PrismaModel>
  }

  export type warehousesCreateWithoutUsersInput = {
    id?: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description?: string | null
    address: string
  }

  export type warehousesUncheckedCreateWithoutUsersInput = {
    id?: string
    warehouseCode: string
    name: string
    phoneNumber: string
    email: string
    description?: string | null
    address: string
  }

  export type warehousesCreateOrConnectWithoutUsersInput = {
    where: warehousesWhereUniqueInput
    create: XOR<warehousesCreateWithoutUsersInput, warehousesUncheckedCreateWithoutUsersInput>
  }

  export type warehousesUpsertWithoutUsersInput = {
    update: XOR<warehousesUpdateWithoutUsersInput, warehousesUncheckedUpdateWithoutUsersInput>
    create: XOR<warehousesCreateWithoutUsersInput, warehousesUncheckedCreateWithoutUsersInput>
    where?: warehousesWhereInput
  }

  export type warehousesUpdateToOneWithWhereWithoutUsersInput = {
    where?: warehousesWhereInput
    data: XOR<warehousesUpdateWithoutUsersInput, warehousesUncheckedUpdateWithoutUsersInput>
  }

  export type warehousesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type warehousesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouseCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutWarehousesInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    lastLogin?: Date | string | null
  }

  export type usersUncheckedCreateWithoutWarehousesInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    lastLogin?: Date | string | null
  }

  export type usersCreateOrConnectWithoutWarehousesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput>
  }

  export type usersCreateManyWarehousesInputEnvelope = {
    data: usersCreateManyWarehousesInput | usersCreateManyWarehousesInput[]
  }

  export type usersUpsertWithWhereUniqueWithoutWarehousesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutWarehousesInput, usersUncheckedUpdateWithoutWarehousesInput>
    create: XOR<usersCreateWithoutWarehousesInput, usersUncheckedCreateWithoutWarehousesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutWarehousesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutWarehousesInput, usersUncheckedUpdateWithoutWarehousesInput>
  }

  export type usersUpdateManyWithWhereWithoutWarehousesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutWarehousesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    userName?: StringFilter<"users"> | string
    phoneNumber?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumroleFilter<"users"> | $Enums.role
    warehousesId?: StringNullableFilter<"users"> | string | null
    lastLogin?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersCreateManyWarehousesInput = {
    id?: string
    email: string
    userName: string
    phoneNumber: string
    password: string
    role: $Enums.role
    lastLogin?: Date | string | null
  }

  export type usersUpdateWithoutWarehousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutWarehousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyWithoutWarehousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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