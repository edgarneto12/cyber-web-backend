
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SmartphoneSpec
 * 
 */
export type SmartphoneSpec = $Result.DefaultSelection<Prisma.$SmartphoneSpecPayload>
/**
 * Model ColorProduct
 * 
 */
export type ColorProduct = $Result.DefaultSelection<Prisma.$ColorProductPayload>
/**
 * Model StorageOption
 * 
 */
export type StorageOption = $Result.DefaultSelection<Prisma.$StorageOptionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.smartphoneSpec`: Exposes CRUD operations for the **SmartphoneSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmartphoneSpecs
    * const smartphoneSpecs = await prisma.smartphoneSpec.findMany()
    * ```
    */
  get smartphoneSpec(): Prisma.SmartphoneSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colorProduct`: Exposes CRUD operations for the **ColorProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColorProducts
    * const colorProducts = await prisma.colorProduct.findMany()
    * ```
    */
  get colorProduct(): Prisma.ColorProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storageOption`: Exposes CRUD operations for the **StorageOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageOptions
    * const storageOptions = await prisma.storageOption.findMany()
    * ```
    */
  get storageOption(): Prisma.StorageOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Product: 'Product',
    Category: 'Category',
    SmartphoneSpec: 'SmartphoneSpec',
    ColorProduct: 'ColorProduct',
    StorageOption: 'StorageOption',
    Review: 'Review'
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
      modelProps: "product" | "category" | "smartphoneSpec" | "colorProduct" | "storageOption" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SmartphoneSpec: {
        payload: Prisma.$SmartphoneSpecPayload<ExtArgs>
        fields: Prisma.SmartphoneSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmartphoneSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmartphoneSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          findFirst: {
            args: Prisma.SmartphoneSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmartphoneSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          findMany: {
            args: Prisma.SmartphoneSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>[]
          }
          create: {
            args: Prisma.SmartphoneSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          createMany: {
            args: Prisma.SmartphoneSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmartphoneSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>[]
          }
          delete: {
            args: Prisma.SmartphoneSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          update: {
            args: Prisma.SmartphoneSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          deleteMany: {
            args: Prisma.SmartphoneSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmartphoneSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SmartphoneSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>[]
          }
          upsert: {
            args: Prisma.SmartphoneSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmartphoneSpecPayload>
          }
          aggregate: {
            args: Prisma.SmartphoneSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmartphoneSpec>
          }
          groupBy: {
            args: Prisma.SmartphoneSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmartphoneSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmartphoneSpecCountArgs<ExtArgs>
            result: $Utils.Optional<SmartphoneSpecCountAggregateOutputType> | number
          }
        }
      }
      ColorProduct: {
        payload: Prisma.$ColorProductPayload<ExtArgs>
        fields: Prisma.ColorProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          findFirst: {
            args: Prisma.ColorProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          findMany: {
            args: Prisma.ColorProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>[]
          }
          create: {
            args: Prisma.ColorProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          createMany: {
            args: Prisma.ColorProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>[]
          }
          delete: {
            args: Prisma.ColorProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          update: {
            args: Prisma.ColorProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          deleteMany: {
            args: Prisma.ColorProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>[]
          }
          upsert: {
            args: Prisma.ColorProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorProductPayload>
          }
          aggregate: {
            args: Prisma.ColorProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColorProduct>
          }
          groupBy: {
            args: Prisma.ColorProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorProductCountArgs<ExtArgs>
            result: $Utils.Optional<ColorProductCountAggregateOutputType> | number
          }
        }
      }
      StorageOption: {
        payload: Prisma.$StorageOptionPayload<ExtArgs>
        fields: Prisma.StorageOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          findFirst: {
            args: Prisma.StorageOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          findMany: {
            args: Prisma.StorageOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>[]
          }
          create: {
            args: Prisma.StorageOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          createMany: {
            args: Prisma.StorageOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorageOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>[]
          }
          delete: {
            args: Prisma.StorageOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          update: {
            args: Prisma.StorageOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          deleteMany: {
            args: Prisma.StorageOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorageOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorageOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>[]
          }
          upsert: {
            args: Prisma.StorageOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorageOptionPayload>
          }
          aggregate: {
            args: Prisma.StorageOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorageOption>
          }
          groupBy: {
            args: Prisma.StorageOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorageOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageOptionCountArgs<ExtArgs>
            result: $Utils.Optional<StorageOptionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    product?: ProductOmit
    category?: CategoryOmit
    smartphoneSpec?: SmartphoneSpecOmit
    colorProduct?: ColorProductOmit
    storageOption?: StorageOptionOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    colors: number
    storageOptions: number
    reviews: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | ProductCountOutputTypeCountColorsArgs
    storageOptions?: boolean | ProductCountOutputTypeCountStorageOptionsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStorageOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageOptionWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discounted_price: Decimal | null
    stock: number | null
    categoryId: number | null
    smartphoneSpecId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discounted_price: Decimal | null
    stock: number | null
    categoryId: number | null
    smartphoneSpecId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brand: string | null
    price: Decimal | null
    discounted_price: Decimal | null
    stock: number | null
    url_image: string | null
    tag: string | null
    created_at: Date | null
    updated_at: Date | null
    categoryId: number | null
    smartphoneSpecId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    brand: string | null
    price: Decimal | null
    discounted_price: Decimal | null
    stock: number | null
    url_image: string | null
    tag: string | null
    created_at: Date | null
    updated_at: Date | null
    categoryId: number | null
    smartphoneSpecId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    brand: number
    price: number
    discounted_price: number
    stock: number
    url_image: number
    tag: number
    created_at: number
    updated_at: number
    categoryId: number
    smartphoneSpecId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discounted_price?: true
    stock?: true
    categoryId?: true
    smartphoneSpecId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discounted_price?: true
    stock?: true
    categoryId?: true
    smartphoneSpecId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    discounted_price?: true
    stock?: true
    url_image?: true
    tag?: true
    created_at?: true
    updated_at?: true
    categoryId?: true
    smartphoneSpecId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    discounted_price?: true
    stock?: true
    url_image?: true
    tag?: true
    created_at?: true
    updated_at?: true
    categoryId?: true
    smartphoneSpecId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    discounted_price?: true
    stock?: true
    url_image?: true
    tag?: true
    created_at?: true
    updated_at?: true
    categoryId?: true
    smartphoneSpecId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    brand: string
    price: Decimal
    discounted_price: Decimal | null
    stock: number
    url_image: string
    tag: string
    created_at: Date
    updated_at: Date
    categoryId: number
    smartphoneSpecId: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    discounted_price?: boolean
    stock?: boolean
    url_image?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    categoryId?: boolean
    smartphoneSpecId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    storageOptions?: boolean | Product$storageOptionsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    discounted_price?: boolean
    stock?: boolean
    url_image?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    categoryId?: boolean
    smartphoneSpecId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    discounted_price?: boolean
    stock?: boolean
    url_image?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    categoryId?: boolean
    smartphoneSpecId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    discounted_price?: boolean
    stock?: boolean
    url_image?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    categoryId?: boolean
    smartphoneSpecId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "brand" | "price" | "discounted_price" | "stock" | "url_image" | "tag" | "created_at" | "updated_at" | "categoryId" | "smartphoneSpecId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    storageOptions?: boolean | Product$storageOptionsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    smartphoneSpec?: boolean | Product$smartphoneSpecArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      smartphoneSpec: Prisma.$SmartphoneSpecPayload<ExtArgs> | null
      colors: Prisma.$ColorProductPayload<ExtArgs>[]
      storageOptions: Prisma.$StorageOptionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      brand: string
      price: Prisma.Decimal
      discounted_price: Prisma.Decimal | null
      stock: number
      url_image: string
      tag: string
      created_at: Date
      updated_at: Date
      categoryId: number
      smartphoneSpecId: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    smartphoneSpec<T extends Product$smartphoneSpecArgs<ExtArgs> = {}>(args?: Subset<T, Product$smartphoneSpecArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    colors<T extends Product$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Product$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storageOptions<T extends Product$storageOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$storageOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly discounted_price: FieldRef<"Product", 'Decimal'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly url_image: FieldRef<"Product", 'String'>
    readonly tag: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly smartphoneSpecId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.smartphoneSpec
   */
  export type Product$smartphoneSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    where?: SmartphoneSpecWhereInput
  }

  /**
   * Product.colors
   */
  export type Product$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    where?: ColorProductWhereInput
    orderBy?: ColorProductOrderByWithRelationInput | ColorProductOrderByWithRelationInput[]
    cursor?: ColorProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorProductScalarFieldEnum | ColorProductScalarFieldEnum[]
  }

  /**
   * Product.storageOptions
   */
  export type Product$storageOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    where?: StorageOptionWhereInput
    orderBy?: StorageOptionOrderByWithRelationInput | StorageOptionOrderByWithRelationInput[]
    cursor?: StorageOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorageOptionScalarFieldEnum | StorageOptionScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SmartphoneSpec
   */

  export type AggregateSmartphoneSpec = {
    _count: SmartphoneSpecCountAggregateOutputType | null
    _avg: SmartphoneSpecAvgAggregateOutputType | null
    _sum: SmartphoneSpecSumAggregateOutputType | null
    _min: SmartphoneSpecMinAggregateOutputType | null
    _max: SmartphoneSpecMaxAggregateOutputType | null
  }

  export type SmartphoneSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type SmartphoneSpecSumAggregateOutputType = {
    id: number | null
  }

  export type SmartphoneSpecMinAggregateOutputType = {
    id: number | null
    screen_size: string | null
    cpu: string | null
    total_cores: string | null
    main_camera: string | null
    front_camera: string | null
    battery: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SmartphoneSpecMaxAggregateOutputType = {
    id: number | null
    screen_size: string | null
    cpu: string | null
    total_cores: string | null
    main_camera: string | null
    front_camera: string | null
    battery: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SmartphoneSpecCountAggregateOutputType = {
    id: number
    screen_size: number
    cpu: number
    total_cores: number
    main_camera: number
    front_camera: number
    battery: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SmartphoneSpecAvgAggregateInputType = {
    id?: true
  }

  export type SmartphoneSpecSumAggregateInputType = {
    id?: true
  }

  export type SmartphoneSpecMinAggregateInputType = {
    id?: true
    screen_size?: true
    cpu?: true
    total_cores?: true
    main_camera?: true
    front_camera?: true
    battery?: true
    created_at?: true
    updated_at?: true
  }

  export type SmartphoneSpecMaxAggregateInputType = {
    id?: true
    screen_size?: true
    cpu?: true
    total_cores?: true
    main_camera?: true
    front_camera?: true
    battery?: true
    created_at?: true
    updated_at?: true
  }

  export type SmartphoneSpecCountAggregateInputType = {
    id?: true
    screen_size?: true
    cpu?: true
    total_cores?: true
    main_camera?: true
    front_camera?: true
    battery?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SmartphoneSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmartphoneSpec to aggregate.
     */
    where?: SmartphoneSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmartphoneSpecs to fetch.
     */
    orderBy?: SmartphoneSpecOrderByWithRelationInput | SmartphoneSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmartphoneSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmartphoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmartphoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmartphoneSpecs
    **/
    _count?: true | SmartphoneSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmartphoneSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmartphoneSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmartphoneSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmartphoneSpecMaxAggregateInputType
  }

  export type GetSmartphoneSpecAggregateType<T extends SmartphoneSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateSmartphoneSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmartphoneSpec[P]>
      : GetScalarType<T[P], AggregateSmartphoneSpec[P]>
  }




  export type SmartphoneSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmartphoneSpecWhereInput
    orderBy?: SmartphoneSpecOrderByWithAggregationInput | SmartphoneSpecOrderByWithAggregationInput[]
    by: SmartphoneSpecScalarFieldEnum[] | SmartphoneSpecScalarFieldEnum
    having?: SmartphoneSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmartphoneSpecCountAggregateInputType | true
    _avg?: SmartphoneSpecAvgAggregateInputType
    _sum?: SmartphoneSpecSumAggregateInputType
    _min?: SmartphoneSpecMinAggregateInputType
    _max?: SmartphoneSpecMaxAggregateInputType
  }

  export type SmartphoneSpecGroupByOutputType = {
    id: number
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at: Date
    updated_at: Date
    _count: SmartphoneSpecCountAggregateOutputType | null
    _avg: SmartphoneSpecAvgAggregateOutputType | null
    _sum: SmartphoneSpecSumAggregateOutputType | null
    _min: SmartphoneSpecMinAggregateOutputType | null
    _max: SmartphoneSpecMaxAggregateOutputType | null
  }

  type GetSmartphoneSpecGroupByPayload<T extends SmartphoneSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmartphoneSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmartphoneSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmartphoneSpecGroupByOutputType[P]>
            : GetScalarType<T[P], SmartphoneSpecGroupByOutputType[P]>
        }
      >
    >


  export type SmartphoneSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screen_size?: boolean
    cpu?: boolean
    total_cores?: boolean
    main_camera?: boolean
    front_camera?: boolean
    battery?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | SmartphoneSpec$productArgs<ExtArgs>
  }, ExtArgs["result"]["smartphoneSpec"]>

  export type SmartphoneSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screen_size?: boolean
    cpu?: boolean
    total_cores?: boolean
    main_camera?: boolean
    front_camera?: boolean
    battery?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["smartphoneSpec"]>

  export type SmartphoneSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    screen_size?: boolean
    cpu?: boolean
    total_cores?: boolean
    main_camera?: boolean
    front_camera?: boolean
    battery?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["smartphoneSpec"]>

  export type SmartphoneSpecSelectScalar = {
    id?: boolean
    screen_size?: boolean
    cpu?: boolean
    total_cores?: boolean
    main_camera?: boolean
    front_camera?: boolean
    battery?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SmartphoneSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "screen_size" | "cpu" | "total_cores" | "main_camera" | "front_camera" | "battery" | "created_at" | "updated_at", ExtArgs["result"]["smartphoneSpec"]>
  export type SmartphoneSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | SmartphoneSpec$productArgs<ExtArgs>
  }
  export type SmartphoneSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SmartphoneSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SmartphoneSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmartphoneSpec"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      screen_size: string
      cpu: string
      total_cores: string
      main_camera: string
      front_camera: string
      battery: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["smartphoneSpec"]>
    composites: {}
  }

  type SmartphoneSpecGetPayload<S extends boolean | null | undefined | SmartphoneSpecDefaultArgs> = $Result.GetResult<Prisma.$SmartphoneSpecPayload, S>

  type SmartphoneSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SmartphoneSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SmartphoneSpecCountAggregateInputType | true
    }

  export interface SmartphoneSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmartphoneSpec'], meta: { name: 'SmartphoneSpec' } }
    /**
     * Find zero or one SmartphoneSpec that matches the filter.
     * @param {SmartphoneSpecFindUniqueArgs} args - Arguments to find a SmartphoneSpec
     * @example
     * // Get one SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmartphoneSpecFindUniqueArgs>(args: SelectSubset<T, SmartphoneSpecFindUniqueArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SmartphoneSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SmartphoneSpecFindUniqueOrThrowArgs} args - Arguments to find a SmartphoneSpec
     * @example
     * // Get one SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmartphoneSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, SmartphoneSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmartphoneSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecFindFirstArgs} args - Arguments to find a SmartphoneSpec
     * @example
     * // Get one SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmartphoneSpecFindFirstArgs>(args?: SelectSubset<T, SmartphoneSpecFindFirstArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SmartphoneSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecFindFirstOrThrowArgs} args - Arguments to find a SmartphoneSpec
     * @example
     * // Get one SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmartphoneSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, SmartphoneSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SmartphoneSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmartphoneSpecs
     * const smartphoneSpecs = await prisma.smartphoneSpec.findMany()
     * 
     * // Get first 10 SmartphoneSpecs
     * const smartphoneSpecs = await prisma.smartphoneSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smartphoneSpecWithIdOnly = await prisma.smartphoneSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmartphoneSpecFindManyArgs>(args?: SelectSubset<T, SmartphoneSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SmartphoneSpec.
     * @param {SmartphoneSpecCreateArgs} args - Arguments to create a SmartphoneSpec.
     * @example
     * // Create one SmartphoneSpec
     * const SmartphoneSpec = await prisma.smartphoneSpec.create({
     *   data: {
     *     // ... data to create a SmartphoneSpec
     *   }
     * })
     * 
     */
    create<T extends SmartphoneSpecCreateArgs>(args: SelectSubset<T, SmartphoneSpecCreateArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SmartphoneSpecs.
     * @param {SmartphoneSpecCreateManyArgs} args - Arguments to create many SmartphoneSpecs.
     * @example
     * // Create many SmartphoneSpecs
     * const smartphoneSpec = await prisma.smartphoneSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmartphoneSpecCreateManyArgs>(args?: SelectSubset<T, SmartphoneSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmartphoneSpecs and returns the data saved in the database.
     * @param {SmartphoneSpecCreateManyAndReturnArgs} args - Arguments to create many SmartphoneSpecs.
     * @example
     * // Create many SmartphoneSpecs
     * const smartphoneSpec = await prisma.smartphoneSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmartphoneSpecs and only return the `id`
     * const smartphoneSpecWithIdOnly = await prisma.smartphoneSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmartphoneSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, SmartphoneSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SmartphoneSpec.
     * @param {SmartphoneSpecDeleteArgs} args - Arguments to delete one SmartphoneSpec.
     * @example
     * // Delete one SmartphoneSpec
     * const SmartphoneSpec = await prisma.smartphoneSpec.delete({
     *   where: {
     *     // ... filter to delete one SmartphoneSpec
     *   }
     * })
     * 
     */
    delete<T extends SmartphoneSpecDeleteArgs>(args: SelectSubset<T, SmartphoneSpecDeleteArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SmartphoneSpec.
     * @param {SmartphoneSpecUpdateArgs} args - Arguments to update one SmartphoneSpec.
     * @example
     * // Update one SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmartphoneSpecUpdateArgs>(args: SelectSubset<T, SmartphoneSpecUpdateArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SmartphoneSpecs.
     * @param {SmartphoneSpecDeleteManyArgs} args - Arguments to filter SmartphoneSpecs to delete.
     * @example
     * // Delete a few SmartphoneSpecs
     * const { count } = await prisma.smartphoneSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmartphoneSpecDeleteManyArgs>(args?: SelectSubset<T, SmartphoneSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmartphoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmartphoneSpecs
     * const smartphoneSpec = await prisma.smartphoneSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmartphoneSpecUpdateManyArgs>(args: SelectSubset<T, SmartphoneSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmartphoneSpecs and returns the data updated in the database.
     * @param {SmartphoneSpecUpdateManyAndReturnArgs} args - Arguments to update many SmartphoneSpecs.
     * @example
     * // Update many SmartphoneSpecs
     * const smartphoneSpec = await prisma.smartphoneSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SmartphoneSpecs and only return the `id`
     * const smartphoneSpecWithIdOnly = await prisma.smartphoneSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends SmartphoneSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, SmartphoneSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SmartphoneSpec.
     * @param {SmartphoneSpecUpsertArgs} args - Arguments to update or create a SmartphoneSpec.
     * @example
     * // Update or create a SmartphoneSpec
     * const smartphoneSpec = await prisma.smartphoneSpec.upsert({
     *   create: {
     *     // ... data to create a SmartphoneSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmartphoneSpec we want to update
     *   }
     * })
     */
    upsert<T extends SmartphoneSpecUpsertArgs>(args: SelectSubset<T, SmartphoneSpecUpsertArgs<ExtArgs>>): Prisma__SmartphoneSpecClient<$Result.GetResult<Prisma.$SmartphoneSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SmartphoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecCountArgs} args - Arguments to filter SmartphoneSpecs to count.
     * @example
     * // Count the number of SmartphoneSpecs
     * const count = await prisma.smartphoneSpec.count({
     *   where: {
     *     // ... the filter for the SmartphoneSpecs we want to count
     *   }
     * })
    **/
    count<T extends SmartphoneSpecCountArgs>(
      args?: Subset<T, SmartphoneSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmartphoneSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmartphoneSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmartphoneSpecAggregateArgs>(args: Subset<T, SmartphoneSpecAggregateArgs>): Prisma.PrismaPromise<GetSmartphoneSpecAggregateType<T>>

    /**
     * Group by SmartphoneSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmartphoneSpecGroupByArgs} args - Group by arguments.
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
      T extends SmartphoneSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmartphoneSpecGroupByArgs['orderBy'] }
        : { orderBy?: SmartphoneSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmartphoneSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmartphoneSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmartphoneSpec model
   */
  readonly fields: SmartphoneSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmartphoneSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmartphoneSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends SmartphoneSpec$productArgs<ExtArgs> = {}>(args?: Subset<T, SmartphoneSpec$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SmartphoneSpec model
   */
  interface SmartphoneSpecFieldRefs {
    readonly id: FieldRef<"SmartphoneSpec", 'Int'>
    readonly screen_size: FieldRef<"SmartphoneSpec", 'String'>
    readonly cpu: FieldRef<"SmartphoneSpec", 'String'>
    readonly total_cores: FieldRef<"SmartphoneSpec", 'String'>
    readonly main_camera: FieldRef<"SmartphoneSpec", 'String'>
    readonly front_camera: FieldRef<"SmartphoneSpec", 'String'>
    readonly battery: FieldRef<"SmartphoneSpec", 'String'>
    readonly created_at: FieldRef<"SmartphoneSpec", 'DateTime'>
    readonly updated_at: FieldRef<"SmartphoneSpec", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmartphoneSpec findUnique
   */
  export type SmartphoneSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter, which SmartphoneSpec to fetch.
     */
    where: SmartphoneSpecWhereUniqueInput
  }

  /**
   * SmartphoneSpec findUniqueOrThrow
   */
  export type SmartphoneSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter, which SmartphoneSpec to fetch.
     */
    where: SmartphoneSpecWhereUniqueInput
  }

  /**
   * SmartphoneSpec findFirst
   */
  export type SmartphoneSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter, which SmartphoneSpec to fetch.
     */
    where?: SmartphoneSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmartphoneSpecs to fetch.
     */
    orderBy?: SmartphoneSpecOrderByWithRelationInput | SmartphoneSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmartphoneSpecs.
     */
    cursor?: SmartphoneSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmartphoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmartphoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmartphoneSpecs.
     */
    distinct?: SmartphoneSpecScalarFieldEnum | SmartphoneSpecScalarFieldEnum[]
  }

  /**
   * SmartphoneSpec findFirstOrThrow
   */
  export type SmartphoneSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter, which SmartphoneSpec to fetch.
     */
    where?: SmartphoneSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmartphoneSpecs to fetch.
     */
    orderBy?: SmartphoneSpecOrderByWithRelationInput | SmartphoneSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmartphoneSpecs.
     */
    cursor?: SmartphoneSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmartphoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmartphoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmartphoneSpecs.
     */
    distinct?: SmartphoneSpecScalarFieldEnum | SmartphoneSpecScalarFieldEnum[]
  }

  /**
   * SmartphoneSpec findMany
   */
  export type SmartphoneSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter, which SmartphoneSpecs to fetch.
     */
    where?: SmartphoneSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmartphoneSpecs to fetch.
     */
    orderBy?: SmartphoneSpecOrderByWithRelationInput | SmartphoneSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmartphoneSpecs.
     */
    cursor?: SmartphoneSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmartphoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmartphoneSpecs.
     */
    skip?: number
    distinct?: SmartphoneSpecScalarFieldEnum | SmartphoneSpecScalarFieldEnum[]
  }

  /**
   * SmartphoneSpec create
   */
  export type SmartphoneSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a SmartphoneSpec.
     */
    data: XOR<SmartphoneSpecCreateInput, SmartphoneSpecUncheckedCreateInput>
  }

  /**
   * SmartphoneSpec createMany
   */
  export type SmartphoneSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmartphoneSpecs.
     */
    data: SmartphoneSpecCreateManyInput | SmartphoneSpecCreateManyInput[]
  }

  /**
   * SmartphoneSpec createManyAndReturn
   */
  export type SmartphoneSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * The data used to create many SmartphoneSpecs.
     */
    data: SmartphoneSpecCreateManyInput | SmartphoneSpecCreateManyInput[]
  }

  /**
   * SmartphoneSpec update
   */
  export type SmartphoneSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a SmartphoneSpec.
     */
    data: XOR<SmartphoneSpecUpdateInput, SmartphoneSpecUncheckedUpdateInput>
    /**
     * Choose, which SmartphoneSpec to update.
     */
    where: SmartphoneSpecWhereUniqueInput
  }

  /**
   * SmartphoneSpec updateMany
   */
  export type SmartphoneSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmartphoneSpecs.
     */
    data: XOR<SmartphoneSpecUpdateManyMutationInput, SmartphoneSpecUncheckedUpdateManyInput>
    /**
     * Filter which SmartphoneSpecs to update
     */
    where?: SmartphoneSpecWhereInput
    /**
     * Limit how many SmartphoneSpecs to update.
     */
    limit?: number
  }

  /**
   * SmartphoneSpec updateManyAndReturn
   */
  export type SmartphoneSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * The data used to update SmartphoneSpecs.
     */
    data: XOR<SmartphoneSpecUpdateManyMutationInput, SmartphoneSpecUncheckedUpdateManyInput>
    /**
     * Filter which SmartphoneSpecs to update
     */
    where?: SmartphoneSpecWhereInput
    /**
     * Limit how many SmartphoneSpecs to update.
     */
    limit?: number
  }

  /**
   * SmartphoneSpec upsert
   */
  export type SmartphoneSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the SmartphoneSpec to update in case it exists.
     */
    where: SmartphoneSpecWhereUniqueInput
    /**
     * In case the SmartphoneSpec found by the `where` argument doesn't exist, create a new SmartphoneSpec with this data.
     */
    create: XOR<SmartphoneSpecCreateInput, SmartphoneSpecUncheckedCreateInput>
    /**
     * In case the SmartphoneSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmartphoneSpecUpdateInput, SmartphoneSpecUncheckedUpdateInput>
  }

  /**
   * SmartphoneSpec delete
   */
  export type SmartphoneSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
    /**
     * Filter which SmartphoneSpec to delete.
     */
    where: SmartphoneSpecWhereUniqueInput
  }

  /**
   * SmartphoneSpec deleteMany
   */
  export type SmartphoneSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmartphoneSpecs to delete
     */
    where?: SmartphoneSpecWhereInput
    /**
     * Limit how many SmartphoneSpecs to delete.
     */
    limit?: number
  }

  /**
   * SmartphoneSpec.product
   */
  export type SmartphoneSpec$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * SmartphoneSpec without action
   */
  export type SmartphoneSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmartphoneSpec
     */
    select?: SmartphoneSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SmartphoneSpec
     */
    omit?: SmartphoneSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmartphoneSpecInclude<ExtArgs> | null
  }


  /**
   * Model ColorProduct
   */

  export type AggregateColorProduct = {
    _count: ColorProductCountAggregateOutputType | null
    _avg: ColorProductAvgAggregateOutputType | null
    _sum: ColorProductSumAggregateOutputType | null
    _min: ColorProductMinAggregateOutputType | null
    _max: ColorProductMaxAggregateOutputType | null
  }

  export type ColorProductAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ColorProductSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ColorProductMinAggregateOutputType = {
    id: number | null
    hex_code: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type ColorProductMaxAggregateOutputType = {
    id: number | null
    hex_code: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type ColorProductCountAggregateOutputType = {
    id: number
    hex_code: number
    name: number
    created_at: number
    updated_at: number
    productId: number
    _all: number
  }


  export type ColorProductAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ColorProductSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ColorProductMinAggregateInputType = {
    id?: true
    hex_code?: true
    name?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type ColorProductMaxAggregateInputType = {
    id?: true
    hex_code?: true
    name?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type ColorProductCountAggregateInputType = {
    id?: true
    hex_code?: true
    name?: true
    created_at?: true
    updated_at?: true
    productId?: true
    _all?: true
  }

  export type ColorProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorProduct to aggregate.
     */
    where?: ColorProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorProducts to fetch.
     */
    orderBy?: ColorProductOrderByWithRelationInput | ColorProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColorProducts
    **/
    _count?: true | ColorProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorProductMaxAggregateInputType
  }

  export type GetColorProductAggregateType<T extends ColorProductAggregateArgs> = {
        [P in keyof T & keyof AggregateColorProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColorProduct[P]>
      : GetScalarType<T[P], AggregateColorProduct[P]>
  }




  export type ColorProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorProductWhereInput
    orderBy?: ColorProductOrderByWithAggregationInput | ColorProductOrderByWithAggregationInput[]
    by: ColorProductScalarFieldEnum[] | ColorProductScalarFieldEnum
    having?: ColorProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorProductCountAggregateInputType | true
    _avg?: ColorProductAvgAggregateInputType
    _sum?: ColorProductSumAggregateInputType
    _min?: ColorProductMinAggregateInputType
    _max?: ColorProductMaxAggregateInputType
  }

  export type ColorProductGroupByOutputType = {
    id: number
    hex_code: string
    name: string
    created_at: Date
    updated_at: Date
    productId: number
    _count: ColorProductCountAggregateOutputType | null
    _avg: ColorProductAvgAggregateOutputType | null
    _sum: ColorProductSumAggregateOutputType | null
    _min: ColorProductMinAggregateOutputType | null
    _max: ColorProductMaxAggregateOutputType | null
  }

  type GetColorProductGroupByPayload<T extends ColorProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorProductGroupByOutputType[P]>
            : GetScalarType<T[P], ColorProductGroupByOutputType[P]>
        }
      >
    >


  export type ColorProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hex_code?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorProduct"]>

  export type ColorProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hex_code?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorProduct"]>

  export type ColorProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hex_code?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorProduct"]>

  export type ColorProductSelectScalar = {
    id?: boolean
    hex_code?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
  }

  export type ColorProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hex_code" | "name" | "created_at" | "updated_at" | "productId", ExtArgs["result"]["colorProduct"]>
  export type ColorProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ColorProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColorProduct"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hex_code: string
      name: string
      created_at: Date
      updated_at: Date
      productId: number
    }, ExtArgs["result"]["colorProduct"]>
    composites: {}
  }

  type ColorProductGetPayload<S extends boolean | null | undefined | ColorProductDefaultArgs> = $Result.GetResult<Prisma.$ColorProductPayload, S>

  type ColorProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorProductCountAggregateInputType | true
    }

  export interface ColorProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColorProduct'], meta: { name: 'ColorProduct' } }
    /**
     * Find zero or one ColorProduct that matches the filter.
     * @param {ColorProductFindUniqueArgs} args - Arguments to find a ColorProduct
     * @example
     * // Get one ColorProduct
     * const colorProduct = await prisma.colorProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorProductFindUniqueArgs>(args: SelectSubset<T, ColorProductFindUniqueArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColorProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorProductFindUniqueOrThrowArgs} args - Arguments to find a ColorProduct
     * @example
     * // Get one ColorProduct
     * const colorProduct = await prisma.colorProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductFindFirstArgs} args - Arguments to find a ColorProduct
     * @example
     * // Get one ColorProduct
     * const colorProduct = await prisma.colorProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorProductFindFirstArgs>(args?: SelectSubset<T, ColorProductFindFirstArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductFindFirstOrThrowArgs} args - Arguments to find a ColorProduct
     * @example
     * // Get one ColorProduct
     * const colorProduct = await prisma.colorProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColorProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColorProducts
     * const colorProducts = await prisma.colorProduct.findMany()
     * 
     * // Get first 10 ColorProducts
     * const colorProducts = await prisma.colorProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorProductWithIdOnly = await prisma.colorProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorProductFindManyArgs>(args?: SelectSubset<T, ColorProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColorProduct.
     * @param {ColorProductCreateArgs} args - Arguments to create a ColorProduct.
     * @example
     * // Create one ColorProduct
     * const ColorProduct = await prisma.colorProduct.create({
     *   data: {
     *     // ... data to create a ColorProduct
     *   }
     * })
     * 
     */
    create<T extends ColorProductCreateArgs>(args: SelectSubset<T, ColorProductCreateArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColorProducts.
     * @param {ColorProductCreateManyArgs} args - Arguments to create many ColorProducts.
     * @example
     * // Create many ColorProducts
     * const colorProduct = await prisma.colorProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorProductCreateManyArgs>(args?: SelectSubset<T, ColorProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColorProducts and returns the data saved in the database.
     * @param {ColorProductCreateManyAndReturnArgs} args - Arguments to create many ColorProducts.
     * @example
     * // Create many ColorProducts
     * const colorProduct = await prisma.colorProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColorProducts and only return the `id`
     * const colorProductWithIdOnly = await prisma.colorProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColorProduct.
     * @param {ColorProductDeleteArgs} args - Arguments to delete one ColorProduct.
     * @example
     * // Delete one ColorProduct
     * const ColorProduct = await prisma.colorProduct.delete({
     *   where: {
     *     // ... filter to delete one ColorProduct
     *   }
     * })
     * 
     */
    delete<T extends ColorProductDeleteArgs>(args: SelectSubset<T, ColorProductDeleteArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColorProduct.
     * @param {ColorProductUpdateArgs} args - Arguments to update one ColorProduct.
     * @example
     * // Update one ColorProduct
     * const colorProduct = await prisma.colorProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorProductUpdateArgs>(args: SelectSubset<T, ColorProductUpdateArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColorProducts.
     * @param {ColorProductDeleteManyArgs} args - Arguments to filter ColorProducts to delete.
     * @example
     * // Delete a few ColorProducts
     * const { count } = await prisma.colorProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorProductDeleteManyArgs>(args?: SelectSubset<T, ColorProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColorProducts
     * const colorProduct = await prisma.colorProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorProductUpdateManyArgs>(args: SelectSubset<T, ColorProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorProducts and returns the data updated in the database.
     * @param {ColorProductUpdateManyAndReturnArgs} args - Arguments to update many ColorProducts.
     * @example
     * // Update many ColorProducts
     * const colorProduct = await prisma.colorProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColorProducts and only return the `id`
     * const colorProductWithIdOnly = await prisma.colorProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColorProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColorProduct.
     * @param {ColorProductUpsertArgs} args - Arguments to update or create a ColorProduct.
     * @example
     * // Update or create a ColorProduct
     * const colorProduct = await prisma.colorProduct.upsert({
     *   create: {
     *     // ... data to create a ColorProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColorProduct we want to update
     *   }
     * })
     */
    upsert<T extends ColorProductUpsertArgs>(args: SelectSubset<T, ColorProductUpsertArgs<ExtArgs>>): Prisma__ColorProductClient<$Result.GetResult<Prisma.$ColorProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColorProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductCountArgs} args - Arguments to filter ColorProducts to count.
     * @example
     * // Count the number of ColorProducts
     * const count = await prisma.colorProduct.count({
     *   where: {
     *     // ... the filter for the ColorProducts we want to count
     *   }
     * })
    **/
    count<T extends ColorProductCountArgs>(
      args?: Subset<T, ColorProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColorProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColorProductAggregateArgs>(args: Subset<T, ColorProductAggregateArgs>): Prisma.PrismaPromise<GetColorProductAggregateType<T>>

    /**
     * Group by ColorProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorProductGroupByArgs} args - Group by arguments.
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
      T extends ColorProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorProductGroupByArgs['orderBy'] }
        : { orderBy?: ColorProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColorProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColorProduct model
   */
  readonly fields: ColorProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColorProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ColorProduct model
   */
  interface ColorProductFieldRefs {
    readonly id: FieldRef<"ColorProduct", 'Int'>
    readonly hex_code: FieldRef<"ColorProduct", 'String'>
    readonly name: FieldRef<"ColorProduct", 'String'>
    readonly created_at: FieldRef<"ColorProduct", 'DateTime'>
    readonly updated_at: FieldRef<"ColorProduct", 'DateTime'>
    readonly productId: FieldRef<"ColorProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ColorProduct findUnique
   */
  export type ColorProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter, which ColorProduct to fetch.
     */
    where: ColorProductWhereUniqueInput
  }

  /**
   * ColorProduct findUniqueOrThrow
   */
  export type ColorProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter, which ColorProduct to fetch.
     */
    where: ColorProductWhereUniqueInput
  }

  /**
   * ColorProduct findFirst
   */
  export type ColorProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter, which ColorProduct to fetch.
     */
    where?: ColorProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorProducts to fetch.
     */
    orderBy?: ColorProductOrderByWithRelationInput | ColorProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorProducts.
     */
    cursor?: ColorProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorProducts.
     */
    distinct?: ColorProductScalarFieldEnum | ColorProductScalarFieldEnum[]
  }

  /**
   * ColorProduct findFirstOrThrow
   */
  export type ColorProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter, which ColorProduct to fetch.
     */
    where?: ColorProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorProducts to fetch.
     */
    orderBy?: ColorProductOrderByWithRelationInput | ColorProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorProducts.
     */
    cursor?: ColorProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorProducts.
     */
    distinct?: ColorProductScalarFieldEnum | ColorProductScalarFieldEnum[]
  }

  /**
   * ColorProduct findMany
   */
  export type ColorProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter, which ColorProducts to fetch.
     */
    where?: ColorProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorProducts to fetch.
     */
    orderBy?: ColorProductOrderByWithRelationInput | ColorProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColorProducts.
     */
    cursor?: ColorProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorProducts.
     */
    skip?: number
    distinct?: ColorProductScalarFieldEnum | ColorProductScalarFieldEnum[]
  }

  /**
   * ColorProduct create
   */
  export type ColorProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ColorProduct.
     */
    data: XOR<ColorProductCreateInput, ColorProductUncheckedCreateInput>
  }

  /**
   * ColorProduct createMany
   */
  export type ColorProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColorProducts.
     */
    data: ColorProductCreateManyInput | ColorProductCreateManyInput[]
  }

  /**
   * ColorProduct createManyAndReturn
   */
  export type ColorProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * The data used to create many ColorProducts.
     */
    data: ColorProductCreateManyInput | ColorProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorProduct update
   */
  export type ColorProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ColorProduct.
     */
    data: XOR<ColorProductUpdateInput, ColorProductUncheckedUpdateInput>
    /**
     * Choose, which ColorProduct to update.
     */
    where: ColorProductWhereUniqueInput
  }

  /**
   * ColorProduct updateMany
   */
  export type ColorProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColorProducts.
     */
    data: XOR<ColorProductUpdateManyMutationInput, ColorProductUncheckedUpdateManyInput>
    /**
     * Filter which ColorProducts to update
     */
    where?: ColorProductWhereInput
    /**
     * Limit how many ColorProducts to update.
     */
    limit?: number
  }

  /**
   * ColorProduct updateManyAndReturn
   */
  export type ColorProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * The data used to update ColorProducts.
     */
    data: XOR<ColorProductUpdateManyMutationInput, ColorProductUncheckedUpdateManyInput>
    /**
     * Filter which ColorProducts to update
     */
    where?: ColorProductWhereInput
    /**
     * Limit how many ColorProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorProduct upsert
   */
  export type ColorProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ColorProduct to update in case it exists.
     */
    where: ColorProductWhereUniqueInput
    /**
     * In case the ColorProduct found by the `where` argument doesn't exist, create a new ColorProduct with this data.
     */
    create: XOR<ColorProductCreateInput, ColorProductUncheckedCreateInput>
    /**
     * In case the ColorProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorProductUpdateInput, ColorProductUncheckedUpdateInput>
  }

  /**
   * ColorProduct delete
   */
  export type ColorProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
    /**
     * Filter which ColorProduct to delete.
     */
    where: ColorProductWhereUniqueInput
  }

  /**
   * ColorProduct deleteMany
   */
  export type ColorProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorProducts to delete
     */
    where?: ColorProductWhereInput
    /**
     * Limit how many ColorProducts to delete.
     */
    limit?: number
  }

  /**
   * ColorProduct without action
   */
  export type ColorProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorProduct
     */
    select?: ColorProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorProduct
     */
    omit?: ColorProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorProductInclude<ExtArgs> | null
  }


  /**
   * Model StorageOption
   */

  export type AggregateStorageOption = {
    _count: StorageOptionCountAggregateOutputType | null
    _avg: StorageOptionAvgAggregateOutputType | null
    _sum: StorageOptionSumAggregateOutputType | null
    _min: StorageOptionMinAggregateOutputType | null
    _max: StorageOptionMaxAggregateOutputType | null
  }

  export type StorageOptionAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type StorageOptionSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type StorageOptionMinAggregateOutputType = {
    id: number | null
    size: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type StorageOptionMaxAggregateOutputType = {
    id: number | null
    size: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type StorageOptionCountAggregateOutputType = {
    id: number
    size: number
    created_at: number
    updated_at: number
    productId: number
    _all: number
  }


  export type StorageOptionAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type StorageOptionSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type StorageOptionMinAggregateInputType = {
    id?: true
    size?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type StorageOptionMaxAggregateInputType = {
    id?: true
    size?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type StorageOptionCountAggregateInputType = {
    id?: true
    size?: true
    created_at?: true
    updated_at?: true
    productId?: true
    _all?: true
  }

  export type StorageOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageOption to aggregate.
     */
    where?: StorageOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageOptions to fetch.
     */
    orderBy?: StorageOptionOrderByWithRelationInput | StorageOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageOptions
    **/
    _count?: true | StorageOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageOptionMaxAggregateInputType
  }

  export type GetStorageOptionAggregateType<T extends StorageOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageOption[P]>
      : GetScalarType<T[P], AggregateStorageOption[P]>
  }




  export type StorageOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageOptionWhereInput
    orderBy?: StorageOptionOrderByWithAggregationInput | StorageOptionOrderByWithAggregationInput[]
    by: StorageOptionScalarFieldEnum[] | StorageOptionScalarFieldEnum
    having?: StorageOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageOptionCountAggregateInputType | true
    _avg?: StorageOptionAvgAggregateInputType
    _sum?: StorageOptionSumAggregateInputType
    _min?: StorageOptionMinAggregateInputType
    _max?: StorageOptionMaxAggregateInputType
  }

  export type StorageOptionGroupByOutputType = {
    id: number
    size: string
    created_at: Date
    updated_at: Date
    productId: number
    _count: StorageOptionCountAggregateOutputType | null
    _avg: StorageOptionAvgAggregateOutputType | null
    _sum: StorageOptionSumAggregateOutputType | null
    _min: StorageOptionMinAggregateOutputType | null
    _max: StorageOptionMaxAggregateOutputType | null
  }

  type GetStorageOptionGroupByPayload<T extends StorageOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageOptionGroupByOutputType[P]>
            : GetScalarType<T[P], StorageOptionGroupByOutputType[P]>
        }
      >
    >


  export type StorageOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageOption"]>

  export type StorageOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageOption"]>

  export type StorageOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageOption"]>

  export type StorageOptionSelectScalar = {
    id?: boolean
    size?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
  }

  export type StorageOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "size" | "created_at" | "updated_at" | "productId", ExtArgs["result"]["storageOption"]>
  export type StorageOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StorageOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StorageOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StorageOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageOption"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      size: string
      created_at: Date
      updated_at: Date
      productId: number
    }, ExtArgs["result"]["storageOption"]>
    composites: {}
  }

  type StorageOptionGetPayload<S extends boolean | null | undefined | StorageOptionDefaultArgs> = $Result.GetResult<Prisma.$StorageOptionPayload, S>

  type StorageOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorageOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorageOptionCountAggregateInputType | true
    }

  export interface StorageOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageOption'], meta: { name: 'StorageOption' } }
    /**
     * Find zero or one StorageOption that matches the filter.
     * @param {StorageOptionFindUniqueArgs} args - Arguments to find a StorageOption
     * @example
     * // Get one StorageOption
     * const storageOption = await prisma.storageOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorageOptionFindUniqueArgs>(args: SelectSubset<T, StorageOptionFindUniqueArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorageOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorageOptionFindUniqueOrThrowArgs} args - Arguments to find a StorageOption
     * @example
     * // Get one StorageOption
     * const storageOption = await prisma.storageOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorageOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, StorageOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionFindFirstArgs} args - Arguments to find a StorageOption
     * @example
     * // Get one StorageOption
     * const storageOption = await prisma.storageOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorageOptionFindFirstArgs>(args?: SelectSubset<T, StorageOptionFindFirstArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorageOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionFindFirstOrThrowArgs} args - Arguments to find a StorageOption
     * @example
     * // Get one StorageOption
     * const storageOption = await prisma.storageOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorageOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, StorageOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorageOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageOptions
     * const storageOptions = await prisma.storageOption.findMany()
     * 
     * // Get first 10 StorageOptions
     * const storageOptions = await prisma.storageOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageOptionWithIdOnly = await prisma.storageOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorageOptionFindManyArgs>(args?: SelectSubset<T, StorageOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorageOption.
     * @param {StorageOptionCreateArgs} args - Arguments to create a StorageOption.
     * @example
     * // Create one StorageOption
     * const StorageOption = await prisma.storageOption.create({
     *   data: {
     *     // ... data to create a StorageOption
     *   }
     * })
     * 
     */
    create<T extends StorageOptionCreateArgs>(args: SelectSubset<T, StorageOptionCreateArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorageOptions.
     * @param {StorageOptionCreateManyArgs} args - Arguments to create many StorageOptions.
     * @example
     * // Create many StorageOptions
     * const storageOption = await prisma.storageOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorageOptionCreateManyArgs>(args?: SelectSubset<T, StorageOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorageOptions and returns the data saved in the database.
     * @param {StorageOptionCreateManyAndReturnArgs} args - Arguments to create many StorageOptions.
     * @example
     * // Create many StorageOptions
     * const storageOption = await prisma.storageOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorageOptions and only return the `id`
     * const storageOptionWithIdOnly = await prisma.storageOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorageOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, StorageOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorageOption.
     * @param {StorageOptionDeleteArgs} args - Arguments to delete one StorageOption.
     * @example
     * // Delete one StorageOption
     * const StorageOption = await prisma.storageOption.delete({
     *   where: {
     *     // ... filter to delete one StorageOption
     *   }
     * })
     * 
     */
    delete<T extends StorageOptionDeleteArgs>(args: SelectSubset<T, StorageOptionDeleteArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorageOption.
     * @param {StorageOptionUpdateArgs} args - Arguments to update one StorageOption.
     * @example
     * // Update one StorageOption
     * const storageOption = await prisma.storageOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorageOptionUpdateArgs>(args: SelectSubset<T, StorageOptionUpdateArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorageOptions.
     * @param {StorageOptionDeleteManyArgs} args - Arguments to filter StorageOptions to delete.
     * @example
     * // Delete a few StorageOptions
     * const { count } = await prisma.storageOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorageOptionDeleteManyArgs>(args?: SelectSubset<T, StorageOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageOptions
     * const storageOption = await prisma.storageOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorageOptionUpdateManyArgs>(args: SelectSubset<T, StorageOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageOptions and returns the data updated in the database.
     * @param {StorageOptionUpdateManyAndReturnArgs} args - Arguments to update many StorageOptions.
     * @example
     * // Update many StorageOptions
     * const storageOption = await prisma.storageOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorageOptions and only return the `id`
     * const storageOptionWithIdOnly = await prisma.storageOption.updateManyAndReturn({
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
    updateManyAndReturn<T extends StorageOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, StorageOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorageOption.
     * @param {StorageOptionUpsertArgs} args - Arguments to update or create a StorageOption.
     * @example
     * // Update or create a StorageOption
     * const storageOption = await prisma.storageOption.upsert({
     *   create: {
     *     // ... data to create a StorageOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageOption we want to update
     *   }
     * })
     */
    upsert<T extends StorageOptionUpsertArgs>(args: SelectSubset<T, StorageOptionUpsertArgs<ExtArgs>>): Prisma__StorageOptionClient<$Result.GetResult<Prisma.$StorageOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorageOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionCountArgs} args - Arguments to filter StorageOptions to count.
     * @example
     * // Count the number of StorageOptions
     * const count = await prisma.storageOption.count({
     *   where: {
     *     // ... the filter for the StorageOptions we want to count
     *   }
     * })
    **/
    count<T extends StorageOptionCountArgs>(
      args?: Subset<T, StorageOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageOptionAggregateArgs>(args: Subset<T, StorageOptionAggregateArgs>): Prisma.PrismaPromise<GetStorageOptionAggregateType<T>>

    /**
     * Group by StorageOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageOptionGroupByArgs} args - Group by arguments.
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
      T extends StorageOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageOptionGroupByArgs['orderBy'] }
        : { orderBy?: StorageOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorageOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageOption model
   */
  readonly fields: StorageOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StorageOption model
   */
  interface StorageOptionFieldRefs {
    readonly id: FieldRef<"StorageOption", 'Int'>
    readonly size: FieldRef<"StorageOption", 'String'>
    readonly created_at: FieldRef<"StorageOption", 'DateTime'>
    readonly updated_at: FieldRef<"StorageOption", 'DateTime'>
    readonly productId: FieldRef<"StorageOption", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StorageOption findUnique
   */
  export type StorageOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter, which StorageOption to fetch.
     */
    where: StorageOptionWhereUniqueInput
  }

  /**
   * StorageOption findUniqueOrThrow
   */
  export type StorageOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter, which StorageOption to fetch.
     */
    where: StorageOptionWhereUniqueInput
  }

  /**
   * StorageOption findFirst
   */
  export type StorageOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter, which StorageOption to fetch.
     */
    where?: StorageOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageOptions to fetch.
     */
    orderBy?: StorageOptionOrderByWithRelationInput | StorageOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageOptions.
     */
    cursor?: StorageOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageOptions.
     */
    distinct?: StorageOptionScalarFieldEnum | StorageOptionScalarFieldEnum[]
  }

  /**
   * StorageOption findFirstOrThrow
   */
  export type StorageOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter, which StorageOption to fetch.
     */
    where?: StorageOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageOptions to fetch.
     */
    orderBy?: StorageOptionOrderByWithRelationInput | StorageOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageOptions.
     */
    cursor?: StorageOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageOptions.
     */
    distinct?: StorageOptionScalarFieldEnum | StorageOptionScalarFieldEnum[]
  }

  /**
   * StorageOption findMany
   */
  export type StorageOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter, which StorageOptions to fetch.
     */
    where?: StorageOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageOptions to fetch.
     */
    orderBy?: StorageOptionOrderByWithRelationInput | StorageOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageOptions.
     */
    cursor?: StorageOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageOptions.
     */
    skip?: number
    distinct?: StorageOptionScalarFieldEnum | StorageOptionScalarFieldEnum[]
  }

  /**
   * StorageOption create
   */
  export type StorageOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageOption.
     */
    data: XOR<StorageOptionCreateInput, StorageOptionUncheckedCreateInput>
  }

  /**
   * StorageOption createMany
   */
  export type StorageOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageOptions.
     */
    data: StorageOptionCreateManyInput | StorageOptionCreateManyInput[]
  }

  /**
   * StorageOption createManyAndReturn
   */
  export type StorageOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * The data used to create many StorageOptions.
     */
    data: StorageOptionCreateManyInput | StorageOptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorageOption update
   */
  export type StorageOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageOption.
     */
    data: XOR<StorageOptionUpdateInput, StorageOptionUncheckedUpdateInput>
    /**
     * Choose, which StorageOption to update.
     */
    where: StorageOptionWhereUniqueInput
  }

  /**
   * StorageOption updateMany
   */
  export type StorageOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageOptions.
     */
    data: XOR<StorageOptionUpdateManyMutationInput, StorageOptionUncheckedUpdateManyInput>
    /**
     * Filter which StorageOptions to update
     */
    where?: StorageOptionWhereInput
    /**
     * Limit how many StorageOptions to update.
     */
    limit?: number
  }

  /**
   * StorageOption updateManyAndReturn
   */
  export type StorageOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * The data used to update StorageOptions.
     */
    data: XOR<StorageOptionUpdateManyMutationInput, StorageOptionUncheckedUpdateManyInput>
    /**
     * Filter which StorageOptions to update
     */
    where?: StorageOptionWhereInput
    /**
     * Limit how many StorageOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorageOption upsert
   */
  export type StorageOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageOption to update in case it exists.
     */
    where: StorageOptionWhereUniqueInput
    /**
     * In case the StorageOption found by the `where` argument doesn't exist, create a new StorageOption with this data.
     */
    create: XOR<StorageOptionCreateInput, StorageOptionUncheckedCreateInput>
    /**
     * In case the StorageOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageOptionUpdateInput, StorageOptionUncheckedUpdateInput>
  }

  /**
   * StorageOption delete
   */
  export type StorageOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
    /**
     * Filter which StorageOption to delete.
     */
    where: StorageOptionWhereUniqueInput
  }

  /**
   * StorageOption deleteMany
   */
  export type StorageOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageOptions to delete
     */
    where?: StorageOptionWhereInput
    /**
     * Limit how many StorageOptions to delete.
     */
    limit?: number
  }

  /**
   * StorageOption without action
   */
  export type StorageOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageOption
     */
    select?: StorageOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorageOption
     */
    omit?: StorageOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageOptionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    rating: number | null
    message: string | null
    name_user: string | null
    url_image_user: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    message: string | null
    name_user: string | null
    url_image_user: string | null
    created_at: Date | null
    updated_at: Date | null
    productId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    message: number
    name_user: number
    url_image_user: number
    created_at: number
    updated_at: number
    productId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    productId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    productId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    name_user?: true
    url_image_user?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    name_user?: true
    url_image_user?: true
    created_at?: true
    updated_at?: true
    productId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    name_user?: true
    url_image_user?: true
    created_at?: true
    updated_at?: true
    productId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at: Date
    updated_at: Date
    productId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    name_user?: boolean
    url_image_user?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    name_user?: boolean
    url_image_user?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    name_user?: boolean
    url_image_user?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    message?: boolean
    name_user?: boolean
    url_image_user?: boolean
    created_at?: boolean
    updated_at?: boolean
    productId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "message" | "name_user" | "url_image_user" | "created_at" | "updated_at" | "productId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number
      message: string
      name_user: string
      url_image_user: string
      created_at: Date
      updated_at: Date
      productId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly message: FieldRef<"Review", 'String'>
    readonly name_user: FieldRef<"Review", 'String'>
    readonly url_image_user: FieldRef<"Review", 'String'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
    readonly productId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    brand: 'brand',
    price: 'price',
    discounted_price: 'discounted_price',
    stock: 'stock',
    url_image: 'url_image',
    tag: 'tag',
    created_at: 'created_at',
    updated_at: 'updated_at',
    categoryId: 'categoryId',
    smartphoneSpecId: 'smartphoneSpecId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SmartphoneSpecScalarFieldEnum: {
    id: 'id',
    screen_size: 'screen_size',
    cpu: 'cpu',
    total_cores: 'total_cores',
    main_camera: 'main_camera',
    front_camera: 'front_camera',
    battery: 'battery',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SmartphoneSpecScalarFieldEnum = (typeof SmartphoneSpecScalarFieldEnum)[keyof typeof SmartphoneSpecScalarFieldEnum]


  export const ColorProductScalarFieldEnum: {
    id: 'id',
    hex_code: 'hex_code',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    productId: 'productId'
  };

  export type ColorProductScalarFieldEnum = (typeof ColorProductScalarFieldEnum)[keyof typeof ColorProductScalarFieldEnum]


  export const StorageOptionScalarFieldEnum: {
    id: 'id',
    size: 'size',
    created_at: 'created_at',
    updated_at: 'updated_at',
    productId: 'productId'
  };

  export type StorageOptionScalarFieldEnum = (typeof StorageOptionScalarFieldEnum)[keyof typeof StorageOptionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    message: 'message',
    name_user: 'name_user',
    url_image_user: 'url_image_user',
    created_at: 'created_at',
    updated_at: 'updated_at',
    productId: 'productId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discounted_price?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"Product"> | number
    url_image?: StringFilter<"Product"> | string
    tag?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    categoryId?: IntFilter<"Product"> | number
    smartphoneSpecId?: IntNullableFilter<"Product"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    smartphoneSpec?: XOR<SmartphoneSpecNullableScalarRelationFilter, SmartphoneSpecWhereInput> | null
    colors?: ColorProductListRelationFilter
    storageOptions?: StorageOptionListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrderInput | SortOrder
    stock?: SortOrder
    url_image?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    smartphoneSpec?: SmartphoneSpecOrderByWithRelationInput
    colors?: ColorProductOrderByRelationAggregateInput
    storageOptions?: StorageOptionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    smartphoneSpecId?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discounted_price?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"Product"> | number
    url_image?: StringFilter<"Product"> | string
    tag?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    smartphoneSpec?: XOR<SmartphoneSpecNullableScalarRelationFilter, SmartphoneSpecWhereInput> | null
    colors?: ColorProductListRelationFilter
    storageOptions?: StorageOptionListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "smartphoneSpecId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrderInput | SortOrder
    stock?: SortOrder
    url_image?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    brand?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discounted_price?: DecimalNullableWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntWithAggregatesFilter<"Product"> | number
    url_image?: StringWithAggregatesFilter<"Product"> | string
    tag?: StringWithAggregatesFilter<"Product"> | string
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    smartphoneSpecId?: IntNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SmartphoneSpecWhereInput = {
    AND?: SmartphoneSpecWhereInput | SmartphoneSpecWhereInput[]
    OR?: SmartphoneSpecWhereInput[]
    NOT?: SmartphoneSpecWhereInput | SmartphoneSpecWhereInput[]
    id?: IntFilter<"SmartphoneSpec"> | number
    screen_size?: StringFilter<"SmartphoneSpec"> | string
    cpu?: StringFilter<"SmartphoneSpec"> | string
    total_cores?: StringFilter<"SmartphoneSpec"> | string
    main_camera?: StringFilter<"SmartphoneSpec"> | string
    front_camera?: StringFilter<"SmartphoneSpec"> | string
    battery?: StringFilter<"SmartphoneSpec"> | string
    created_at?: DateTimeFilter<"SmartphoneSpec"> | Date | string
    updated_at?: DateTimeFilter<"SmartphoneSpec"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type SmartphoneSpecOrderByWithRelationInput = {
    id?: SortOrder
    screen_size?: SortOrder
    cpu?: SortOrder
    total_cores?: SortOrder
    main_camera?: SortOrder
    front_camera?: SortOrder
    battery?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type SmartphoneSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SmartphoneSpecWhereInput | SmartphoneSpecWhereInput[]
    OR?: SmartphoneSpecWhereInput[]
    NOT?: SmartphoneSpecWhereInput | SmartphoneSpecWhereInput[]
    screen_size?: StringFilter<"SmartphoneSpec"> | string
    cpu?: StringFilter<"SmartphoneSpec"> | string
    total_cores?: StringFilter<"SmartphoneSpec"> | string
    main_camera?: StringFilter<"SmartphoneSpec"> | string
    front_camera?: StringFilter<"SmartphoneSpec"> | string
    battery?: StringFilter<"SmartphoneSpec"> | string
    created_at?: DateTimeFilter<"SmartphoneSpec"> | Date | string
    updated_at?: DateTimeFilter<"SmartphoneSpec"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type SmartphoneSpecOrderByWithAggregationInput = {
    id?: SortOrder
    screen_size?: SortOrder
    cpu?: SortOrder
    total_cores?: SortOrder
    main_camera?: SortOrder
    front_camera?: SortOrder
    battery?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SmartphoneSpecCountOrderByAggregateInput
    _avg?: SmartphoneSpecAvgOrderByAggregateInput
    _max?: SmartphoneSpecMaxOrderByAggregateInput
    _min?: SmartphoneSpecMinOrderByAggregateInput
    _sum?: SmartphoneSpecSumOrderByAggregateInput
  }

  export type SmartphoneSpecScalarWhereWithAggregatesInput = {
    AND?: SmartphoneSpecScalarWhereWithAggregatesInput | SmartphoneSpecScalarWhereWithAggregatesInput[]
    OR?: SmartphoneSpecScalarWhereWithAggregatesInput[]
    NOT?: SmartphoneSpecScalarWhereWithAggregatesInput | SmartphoneSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SmartphoneSpec"> | number
    screen_size?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    cpu?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    total_cores?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    main_camera?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    front_camera?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    battery?: StringWithAggregatesFilter<"SmartphoneSpec"> | string
    created_at?: DateTimeWithAggregatesFilter<"SmartphoneSpec"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SmartphoneSpec"> | Date | string
  }

  export type ColorProductWhereInput = {
    AND?: ColorProductWhereInput | ColorProductWhereInput[]
    OR?: ColorProductWhereInput[]
    NOT?: ColorProductWhereInput | ColorProductWhereInput[]
    id?: IntFilter<"ColorProduct"> | number
    hex_code?: StringFilter<"ColorProduct"> | string
    name?: StringFilter<"ColorProduct"> | string
    created_at?: DateTimeFilter<"ColorProduct"> | Date | string
    updated_at?: DateTimeFilter<"ColorProduct"> | Date | string
    productId?: IntFilter<"ColorProduct"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ColorProductOrderByWithRelationInput = {
    id?: SortOrder
    hex_code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ColorProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColorProductWhereInput | ColorProductWhereInput[]
    OR?: ColorProductWhereInput[]
    NOT?: ColorProductWhereInput | ColorProductWhereInput[]
    hex_code?: StringFilter<"ColorProduct"> | string
    name?: StringFilter<"ColorProduct"> | string
    created_at?: DateTimeFilter<"ColorProduct"> | Date | string
    updated_at?: DateTimeFilter<"ColorProduct"> | Date | string
    productId?: IntFilter<"ColorProduct"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ColorProductOrderByWithAggregationInput = {
    id?: SortOrder
    hex_code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    _count?: ColorProductCountOrderByAggregateInput
    _avg?: ColorProductAvgOrderByAggregateInput
    _max?: ColorProductMaxOrderByAggregateInput
    _min?: ColorProductMinOrderByAggregateInput
    _sum?: ColorProductSumOrderByAggregateInput
  }

  export type ColorProductScalarWhereWithAggregatesInput = {
    AND?: ColorProductScalarWhereWithAggregatesInput | ColorProductScalarWhereWithAggregatesInput[]
    OR?: ColorProductScalarWhereWithAggregatesInput[]
    NOT?: ColorProductScalarWhereWithAggregatesInput | ColorProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColorProduct"> | number
    hex_code?: StringWithAggregatesFilter<"ColorProduct"> | string
    name?: StringWithAggregatesFilter<"ColorProduct"> | string
    created_at?: DateTimeWithAggregatesFilter<"ColorProduct"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ColorProduct"> | Date | string
    productId?: IntWithAggregatesFilter<"ColorProduct"> | number
  }

  export type StorageOptionWhereInput = {
    AND?: StorageOptionWhereInput | StorageOptionWhereInput[]
    OR?: StorageOptionWhereInput[]
    NOT?: StorageOptionWhereInput | StorageOptionWhereInput[]
    id?: IntFilter<"StorageOption"> | number
    size?: StringFilter<"StorageOption"> | string
    created_at?: DateTimeFilter<"StorageOption"> | Date | string
    updated_at?: DateTimeFilter<"StorageOption"> | Date | string
    productId?: IntFilter<"StorageOption"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type StorageOptionOrderByWithRelationInput = {
    id?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type StorageOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StorageOptionWhereInput | StorageOptionWhereInput[]
    OR?: StorageOptionWhereInput[]
    NOT?: StorageOptionWhereInput | StorageOptionWhereInput[]
    size?: StringFilter<"StorageOption"> | string
    created_at?: DateTimeFilter<"StorageOption"> | Date | string
    updated_at?: DateTimeFilter<"StorageOption"> | Date | string
    productId?: IntFilter<"StorageOption"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type StorageOptionOrderByWithAggregationInput = {
    id?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    _count?: StorageOptionCountOrderByAggregateInput
    _avg?: StorageOptionAvgOrderByAggregateInput
    _max?: StorageOptionMaxOrderByAggregateInput
    _min?: StorageOptionMinOrderByAggregateInput
    _sum?: StorageOptionSumOrderByAggregateInput
  }

  export type StorageOptionScalarWhereWithAggregatesInput = {
    AND?: StorageOptionScalarWhereWithAggregatesInput | StorageOptionScalarWhereWithAggregatesInput[]
    OR?: StorageOptionScalarWhereWithAggregatesInput[]
    NOT?: StorageOptionScalarWhereWithAggregatesInput | StorageOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StorageOption"> | number
    size?: StringWithAggregatesFilter<"StorageOption"> | string
    created_at?: DateTimeWithAggregatesFilter<"StorageOption"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"StorageOption"> | Date | string
    productId?: IntWithAggregatesFilter<"StorageOption"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    name_user?: StringFilter<"Review"> | string
    url_image_user?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    productId?: IntFilter<"Review"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    name_user?: SortOrder
    url_image_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    Product?: ProductOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    name_user?: StringFilter<"Review"> | string
    url_image_user?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    productId?: IntFilter<"Review"> | number
    Product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    name_user?: SortOrder
    url_image_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    message?: StringWithAggregatesFilter<"Review"> | string
    name_user?: StringWithAggregatesFilter<"Review"> | string
    url_image_user?: StringWithAggregatesFilter<"Review"> | string
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    productId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type ProductCreateInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    smartphoneSpec?: SmartphoneSpecCreateNestedOneWithoutProductInput
    colors?: ColorProductCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    smartphoneSpecId?: number | null
    colors?: ColorProductUncheckedCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    smartphoneSpec?: SmartphoneSpecUpdateOneWithoutProductNestedInput
    colors?: ColorProductUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: ColorProductUncheckedUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    smartphoneSpecId?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmartphoneSpecCreateInput = {
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: ProductCreateNestedOneWithoutSmartphoneSpecInput
  }

  export type SmartphoneSpecUncheckedCreateInput = {
    id?: number
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: ProductUncheckedCreateNestedOneWithoutSmartphoneSpecInput
  }

  export type SmartphoneSpecUpdateInput = {
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutSmartphoneSpecNestedInput
  }

  export type SmartphoneSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateOneWithoutSmartphoneSpecNestedInput
  }

  export type SmartphoneSpecCreateManyInput = {
    id?: number
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmartphoneSpecUpdateManyMutationInput = {
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmartphoneSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorProductCreateInput = {
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    Product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ColorProductUncheckedCreateInput = {
    id?: number
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type ColorProductUpdateInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ColorProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ColorProductCreateManyInput = {
    id?: number
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type ColorProductUpdateManyMutationInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageOptionCreateInput = {
    size: string
    created_at?: Date | string
    updated_at?: Date | string
    Product: ProductCreateNestedOneWithoutStorageOptionsInput
  }

  export type StorageOptionUncheckedCreateInput = {
    id?: number
    size: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type StorageOptionUpdateInput = {
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutStorageOptionsNestedInput
  }

  export type StorageOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageOptionCreateManyInput = {
    id?: number
    size: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type StorageOptionUpdateManyMutationInput = {
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
    Product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyInput = {
    id?: number
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
    productId: number
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SmartphoneSpecNullableScalarRelationFilter = {
    is?: SmartphoneSpecWhereInput | null
    isNot?: SmartphoneSpecWhereInput | null
  }

  export type ColorProductListRelationFilter = {
    every?: ColorProductWhereInput
    some?: ColorProductWhereInput
    none?: ColorProductWhereInput
  }

  export type StorageOptionListRelationFilter = {
    every?: StorageOptionWhereInput
    some?: StorageOptionWhereInput
    none?: StorageOptionWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ColorProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorageOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrder
    stock?: SortOrder
    url_image?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrder
    stock?: SortOrder
    url_image?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrder
    stock?: SortOrder
    url_image?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discounted_price?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    smartphoneSpecId?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type SmartphoneSpecCountOrderByAggregateInput = {
    id?: SortOrder
    screen_size?: SortOrder
    cpu?: SortOrder
    total_cores?: SortOrder
    main_camera?: SortOrder
    front_camera?: SortOrder
    battery?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmartphoneSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SmartphoneSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    screen_size?: SortOrder
    cpu?: SortOrder
    total_cores?: SortOrder
    main_camera?: SortOrder
    front_camera?: SortOrder
    battery?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmartphoneSpecMinOrderByAggregateInput = {
    id?: SortOrder
    screen_size?: SortOrder
    cpu?: SortOrder
    total_cores?: SortOrder
    main_camera?: SortOrder
    front_camera?: SortOrder
    battery?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SmartphoneSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ColorProductCountOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ColorProductAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ColorProductMaxOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ColorProductMinOrderByAggregateInput = {
    id?: SortOrder
    hex_code?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ColorProductSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type StorageOptionCountOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type StorageOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type StorageOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type StorageOptionMinOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type StorageOptionSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    name_user?: SortOrder
    url_image_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    productId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    name_user?: SortOrder
    url_image_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    name_user?: SortOrder
    url_image_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    productId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    productId?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SmartphoneSpecCreateNestedOneWithoutProductInput = {
    create?: XOR<SmartphoneSpecCreateWithoutProductInput, SmartphoneSpecUncheckedCreateWithoutProductInput>
    connectOrCreate?: SmartphoneSpecCreateOrConnectWithoutProductInput
    connect?: SmartphoneSpecWhereUniqueInput
  }

  export type ColorProductCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput> | ColorProductCreateWithoutProductInput[] | ColorProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorProductCreateOrConnectWithoutProductInput | ColorProductCreateOrConnectWithoutProductInput[]
    createMany?: ColorProductCreateManyProductInputEnvelope
    connect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
  }

  export type StorageOptionCreateNestedManyWithoutProductInput = {
    create?: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput> | StorageOptionCreateWithoutProductInput[] | StorageOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StorageOptionCreateOrConnectWithoutProductInput | StorageOptionCreateOrConnectWithoutProductInput[]
    createMany?: StorageOptionCreateManyProductInputEnvelope
    connect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ColorProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput> | ColorProductCreateWithoutProductInput[] | ColorProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorProductCreateOrConnectWithoutProductInput | ColorProductCreateOrConnectWithoutProductInput[]
    createMany?: ColorProductCreateManyProductInputEnvelope
    connect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
  }

  export type StorageOptionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput> | StorageOptionCreateWithoutProductInput[] | StorageOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StorageOptionCreateOrConnectWithoutProductInput | StorageOptionCreateOrConnectWithoutProductInput[]
    createMany?: StorageOptionCreateManyProductInputEnvelope
    connect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SmartphoneSpecUpdateOneWithoutProductNestedInput = {
    create?: XOR<SmartphoneSpecCreateWithoutProductInput, SmartphoneSpecUncheckedCreateWithoutProductInput>
    connectOrCreate?: SmartphoneSpecCreateOrConnectWithoutProductInput
    upsert?: SmartphoneSpecUpsertWithoutProductInput
    disconnect?: SmartphoneSpecWhereInput | boolean
    delete?: SmartphoneSpecWhereInput | boolean
    connect?: SmartphoneSpecWhereUniqueInput
    update?: XOR<XOR<SmartphoneSpecUpdateToOneWithWhereWithoutProductInput, SmartphoneSpecUpdateWithoutProductInput>, SmartphoneSpecUncheckedUpdateWithoutProductInput>
  }

  export type ColorProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput> | ColorProductCreateWithoutProductInput[] | ColorProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorProductCreateOrConnectWithoutProductInput | ColorProductCreateOrConnectWithoutProductInput[]
    upsert?: ColorProductUpsertWithWhereUniqueWithoutProductInput | ColorProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorProductCreateManyProductInputEnvelope
    set?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    disconnect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    delete?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    connect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    update?: ColorProductUpdateWithWhereUniqueWithoutProductInput | ColorProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorProductUpdateManyWithWhereWithoutProductInput | ColorProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorProductScalarWhereInput | ColorProductScalarWhereInput[]
  }

  export type StorageOptionUpdateManyWithoutProductNestedInput = {
    create?: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput> | StorageOptionCreateWithoutProductInput[] | StorageOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StorageOptionCreateOrConnectWithoutProductInput | StorageOptionCreateOrConnectWithoutProductInput[]
    upsert?: StorageOptionUpsertWithWhereUniqueWithoutProductInput | StorageOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StorageOptionCreateManyProductInputEnvelope
    set?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    disconnect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    delete?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    connect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    update?: StorageOptionUpdateWithWhereUniqueWithoutProductInput | StorageOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StorageOptionUpdateManyWithWhereWithoutProductInput | StorageOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StorageOptionScalarWhereInput | StorageOptionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ColorProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput> | ColorProductCreateWithoutProductInput[] | ColorProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorProductCreateOrConnectWithoutProductInput | ColorProductCreateOrConnectWithoutProductInput[]
    upsert?: ColorProductUpsertWithWhereUniqueWithoutProductInput | ColorProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorProductCreateManyProductInputEnvelope
    set?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    disconnect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    delete?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    connect?: ColorProductWhereUniqueInput | ColorProductWhereUniqueInput[]
    update?: ColorProductUpdateWithWhereUniqueWithoutProductInput | ColorProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorProductUpdateManyWithWhereWithoutProductInput | ColorProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorProductScalarWhereInput | ColorProductScalarWhereInput[]
  }

  export type StorageOptionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput> | StorageOptionCreateWithoutProductInput[] | StorageOptionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StorageOptionCreateOrConnectWithoutProductInput | StorageOptionCreateOrConnectWithoutProductInput[]
    upsert?: StorageOptionUpsertWithWhereUniqueWithoutProductInput | StorageOptionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StorageOptionCreateManyProductInputEnvelope
    set?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    disconnect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    delete?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    connect?: StorageOptionWhereUniqueInput | StorageOptionWhereUniqueInput[]
    update?: StorageOptionUpdateWithWhereUniqueWithoutProductInput | StorageOptionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StorageOptionUpdateManyWithWhereWithoutProductInput | StorageOptionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StorageOptionScalarWhereInput | StorageOptionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSmartphoneSpecInput = {
    create?: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSmartphoneSpecInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedOneWithoutSmartphoneSpecInput = {
    create?: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSmartphoneSpecInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutSmartphoneSpecNestedInput = {
    create?: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSmartphoneSpecInput
    upsert?: ProductUpsertWithoutSmartphoneSpecInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSmartphoneSpecInput, ProductUpdateWithoutSmartphoneSpecInput>, ProductUncheckedUpdateWithoutSmartphoneSpecInput>
  }

  export type ProductUncheckedUpdateOneWithoutSmartphoneSpecNestedInput = {
    create?: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSmartphoneSpecInput
    upsert?: ProductUpsertWithoutSmartphoneSpecInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSmartphoneSpecInput, ProductUpdateWithoutSmartphoneSpecInput>, ProductUncheckedUpdateWithoutSmartphoneSpecInput>
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutColorsInput, ProductUpdateWithoutColorsInput>, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductCreateNestedOneWithoutStorageOptionsInput = {
    create?: XOR<ProductCreateWithoutStorageOptionsInput, ProductUncheckedCreateWithoutStorageOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStorageOptionsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStorageOptionsNestedInput = {
    create?: XOR<ProductCreateWithoutStorageOptionsInput, ProductUncheckedCreateWithoutStorageOptionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStorageOptionsInput
    upsert?: ProductUpsertWithoutStorageOptionsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStorageOptionsInput, ProductUpdateWithoutStorageOptionsInput>, ProductUncheckedUpdateWithoutStorageOptionsInput>
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SmartphoneSpecCreateWithoutProductInput = {
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmartphoneSpecUncheckedCreateWithoutProductInput = {
    id?: number
    screen_size: string
    cpu: string
    total_cores: string
    main_camera: string
    front_camera: string
    battery: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SmartphoneSpecCreateOrConnectWithoutProductInput = {
    where: SmartphoneSpecWhereUniqueInput
    create: XOR<SmartphoneSpecCreateWithoutProductInput, SmartphoneSpecUncheckedCreateWithoutProductInput>
  }

  export type ColorProductCreateWithoutProductInput = {
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ColorProductUncheckedCreateWithoutProductInput = {
    id?: number
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ColorProductCreateOrConnectWithoutProductInput = {
    where: ColorProductWhereUniqueInput
    create: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput>
  }

  export type ColorProductCreateManyProductInputEnvelope = {
    data: ColorProductCreateManyProductInput | ColorProductCreateManyProductInput[]
  }

  export type StorageOptionCreateWithoutProductInput = {
    size: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StorageOptionUncheckedCreateWithoutProductInput = {
    id?: number
    size: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StorageOptionCreateOrConnectWithoutProductInput = {
    where: StorageOptionWhereUniqueInput
    create: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput>
  }

  export type StorageOptionCreateManyProductInputEnvelope = {
    data: StorageOptionCreateManyProductInput | StorageOptionCreateManyProductInput[]
  }

  export type ReviewCreateWithoutProductInput = {
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: number
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmartphoneSpecUpsertWithoutProductInput = {
    update: XOR<SmartphoneSpecUpdateWithoutProductInput, SmartphoneSpecUncheckedUpdateWithoutProductInput>
    create: XOR<SmartphoneSpecCreateWithoutProductInput, SmartphoneSpecUncheckedCreateWithoutProductInput>
    where?: SmartphoneSpecWhereInput
  }

  export type SmartphoneSpecUpdateToOneWithWhereWithoutProductInput = {
    where?: SmartphoneSpecWhereInput
    data: XOR<SmartphoneSpecUpdateWithoutProductInput, SmartphoneSpecUncheckedUpdateWithoutProductInput>
  }

  export type SmartphoneSpecUpdateWithoutProductInput = {
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmartphoneSpecUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    screen_size?: StringFieldUpdateOperationsInput | string
    cpu?: StringFieldUpdateOperationsInput | string
    total_cores?: StringFieldUpdateOperationsInput | string
    main_camera?: StringFieldUpdateOperationsInput | string
    front_camera?: StringFieldUpdateOperationsInput | string
    battery?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorProductUpsertWithWhereUniqueWithoutProductInput = {
    where: ColorProductWhereUniqueInput
    update: XOR<ColorProductUpdateWithoutProductInput, ColorProductUncheckedUpdateWithoutProductInput>
    create: XOR<ColorProductCreateWithoutProductInput, ColorProductUncheckedCreateWithoutProductInput>
  }

  export type ColorProductUpdateWithWhereUniqueWithoutProductInput = {
    where: ColorProductWhereUniqueInput
    data: XOR<ColorProductUpdateWithoutProductInput, ColorProductUncheckedUpdateWithoutProductInput>
  }

  export type ColorProductUpdateManyWithWhereWithoutProductInput = {
    where: ColorProductScalarWhereInput
    data: XOR<ColorProductUpdateManyMutationInput, ColorProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ColorProductScalarWhereInput = {
    AND?: ColorProductScalarWhereInput | ColorProductScalarWhereInput[]
    OR?: ColorProductScalarWhereInput[]
    NOT?: ColorProductScalarWhereInput | ColorProductScalarWhereInput[]
    id?: IntFilter<"ColorProduct"> | number
    hex_code?: StringFilter<"ColorProduct"> | string
    name?: StringFilter<"ColorProduct"> | string
    created_at?: DateTimeFilter<"ColorProduct"> | Date | string
    updated_at?: DateTimeFilter<"ColorProduct"> | Date | string
    productId?: IntFilter<"ColorProduct"> | number
  }

  export type StorageOptionUpsertWithWhereUniqueWithoutProductInput = {
    where: StorageOptionWhereUniqueInput
    update: XOR<StorageOptionUpdateWithoutProductInput, StorageOptionUncheckedUpdateWithoutProductInput>
    create: XOR<StorageOptionCreateWithoutProductInput, StorageOptionUncheckedCreateWithoutProductInput>
  }

  export type StorageOptionUpdateWithWhereUniqueWithoutProductInput = {
    where: StorageOptionWhereUniqueInput
    data: XOR<StorageOptionUpdateWithoutProductInput, StorageOptionUncheckedUpdateWithoutProductInput>
  }

  export type StorageOptionUpdateManyWithWhereWithoutProductInput = {
    where: StorageOptionScalarWhereInput
    data: XOR<StorageOptionUpdateManyMutationInput, StorageOptionUncheckedUpdateManyWithoutProductInput>
  }

  export type StorageOptionScalarWhereInput = {
    AND?: StorageOptionScalarWhereInput | StorageOptionScalarWhereInput[]
    OR?: StorageOptionScalarWhereInput[]
    NOT?: StorageOptionScalarWhereInput | StorageOptionScalarWhereInput[]
    id?: IntFilter<"StorageOption"> | number
    size?: StringFilter<"StorageOption"> | string
    created_at?: DateTimeFilter<"StorageOption"> | Date | string
    updated_at?: DateTimeFilter<"StorageOption"> | Date | string
    productId?: IntFilter<"StorageOption"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    message?: StringFilter<"Review"> | string
    name_user?: StringFilter<"Review"> | string
    url_image_user?: StringFilter<"Review"> | string
    created_at?: DateTimeFilter<"Review"> | Date | string
    updated_at?: DateTimeFilter<"Review"> | Date | string
    productId?: IntFilter<"Review"> | number
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    smartphoneSpec?: SmartphoneSpecCreateNestedOneWithoutProductInput
    colors?: ColorProductCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    smartphoneSpecId?: number | null
    colors?: ColorProductUncheckedCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    brand?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discounted_price?: DecimalNullableFilter<"Product"> | Decimal | DecimalJsLike | number | string | null
    stock?: IntFilter<"Product"> | number
    url_image?: StringFilter<"Product"> | string
    tag?: StringFilter<"Product"> | string
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    categoryId?: IntFilter<"Product"> | number
    smartphoneSpecId?: IntNullableFilter<"Product"> | number | null
  }

  export type ProductCreateWithoutSmartphoneSpecInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    colors?: ColorProductCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSmartphoneSpecInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    colors?: ColorProductUncheckedCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSmartphoneSpecInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
  }

  export type ProductUpsertWithoutSmartphoneSpecInput = {
    update: XOR<ProductUpdateWithoutSmartphoneSpecInput, ProductUncheckedUpdateWithoutSmartphoneSpecInput>
    create: XOR<ProductCreateWithoutSmartphoneSpecInput, ProductUncheckedCreateWithoutSmartphoneSpecInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSmartphoneSpecInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSmartphoneSpecInput, ProductUncheckedUpdateWithoutSmartphoneSpecInput>
  }

  export type ProductUpdateWithoutSmartphoneSpecInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    colors?: ColorProductUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSmartphoneSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    colors?: ColorProductUncheckedUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutColorsInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    smartphoneSpec?: SmartphoneSpecCreateNestedOneWithoutProductInput
    storageOptions?: StorageOptionCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    smartphoneSpecId?: number | null
    storageOptions?: StorageOptionUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutColorsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    smartphoneSpec?: SmartphoneSpecUpdateOneWithoutProductNestedInput
    storageOptions?: StorageOptionUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    storageOptions?: StorageOptionUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutStorageOptionsInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    smartphoneSpec?: SmartphoneSpecCreateNestedOneWithoutProductInput
    colors?: ColorProductCreateNestedManyWithoutProductInput
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStorageOptionsInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    smartphoneSpecId?: number | null
    colors?: ColorProductUncheckedCreateNestedManyWithoutProductInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStorageOptionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStorageOptionsInput, ProductUncheckedCreateWithoutStorageOptionsInput>
  }

  export type ProductUpsertWithoutStorageOptionsInput = {
    update: XOR<ProductUpdateWithoutStorageOptionsInput, ProductUncheckedUpdateWithoutStorageOptionsInput>
    create: XOR<ProductCreateWithoutStorageOptionsInput, ProductUncheckedCreateWithoutStorageOptionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStorageOptionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStorageOptionsInput, ProductUncheckedUpdateWithoutStorageOptionsInput>
  }

  export type ProductUpdateWithoutStorageOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    smartphoneSpec?: SmartphoneSpecUpdateOneWithoutProductNestedInput
    colors?: ColorProductUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStorageOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: ColorProductUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutReviewsInput = {
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    smartphoneSpec?: SmartphoneSpecCreateNestedOneWithoutProductInput
    colors?: ColorProductCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    categoryId: number
    smartphoneSpecId?: number | null
    colors?: ColorProductUncheckedCreateNestedManyWithoutProductInput
    storageOptions?: StorageOptionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    smartphoneSpec?: SmartphoneSpecUpdateOneWithoutProductNestedInput
    colors?: ColorProductUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: ColorProductUncheckedUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ColorProductCreateManyProductInput = {
    id?: number
    hex_code: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StorageOptionCreateManyProductInput = {
    id?: number
    size: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyProductInput = {
    id?: number
    rating: number
    message: string
    name_user: string
    url_image_user: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ColorProductUpdateWithoutProductInput = {
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    hex_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageOptionUpdateWithoutProductInput = {
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageOptionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageOptionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    name_user?: StringFieldUpdateOperationsInput | string
    url_image_user?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    brand: string
    price: Decimal | DecimalJsLike | number | string
    discounted_price?: Decimal | DecimalJsLike | number | string | null
    stock: number
    url_image: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    smartphoneSpecId?: number | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    smartphoneSpec?: SmartphoneSpecUpdateOneWithoutProductNestedInput
    colors?: ColorProductUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUpdateManyWithoutProductNestedInput
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    colors?: ColorProductUncheckedUpdateManyWithoutProductNestedInput
    storageOptions?: StorageOptionUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discounted_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock?: IntFieldUpdateOperationsInput | number
    url_image?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    smartphoneSpecId?: NullableIntFieldUpdateOperationsInput | number | null
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