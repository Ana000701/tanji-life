
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.AccountScalarFieldEnum = {
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

exports.Prisma.SessionScalarFieldEnum = {
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.CourseReviewScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  courseId: 'courseId',
  rating: 'rating',
  comment: 'comment',
  createdAt: 'createdAt'
};

exports.Prisma.CourseFavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  courseId: 'courseId',
  createdAt: 'createdAt'
};

exports.Prisma.CoursePurchaseScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  courseId: 'courseId',
  price: 'price',
  purchasedAt: 'purchasedAt'
};

exports.Prisma.CourseCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CourseTeacherScalarFieldEnum = {
  id: 'id',
  name: 'name',
  avatar: 'avatar',
  title: 'title',
  bio: 'bio'
};

exports.Prisma.CourseTagScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CourseTagOnCourseScalarFieldEnum = {
  courseId: 'courseId',
  tagId: 'tagId'
};

exports.Prisma.CourseScalarFieldEnum = {
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

exports.Prisma.CourseContentScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\ana\\Downloads\\hexo\\tanji-life\\lib\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\ana\\Downloads\\hexo\\tanji-life\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../lib/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id             String           @id @default(uuid()) @db.Uuid\n  name           String           @default(\"NO_NAME\")\n  email          String           @unique(map: \"user_email_idx\")\n  password       String?\n  role           String           @default(\"user\")\n  emailVerified  DateTime?        @db.Timestamp(6)\n  image          String?\n  address        Json?            @db.Json\n  paymentMethod  String?\n  createdAt      DateTime         @default(now()) @db.Timestamp(6)\n  updatedAt      DateTime         @updatedAt\n  account        Account[]\n  session        Session[]\n  CourseReview   CourseReview[]\n  CourseFavorite CourseFavorite[]\n  CoursePurchase CoursePurchase[]\n}\n\nmodel Account {\n  userId            String   @db.Uuid\n  type              String\n  provider          String\n  providerAccountId String\n  refresh_token     String?\n  access_token      String?\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String?\n  session_state     String?\n  createdAt         DateTime @default(now())\n  updatedAt         DateTime @updatedAt\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"account_userId_user_id_fk\")\n\n  @@id([provider, providerAccountId], map: \"account_provider_providerAccountId_pk\")\n}\n\nmodel Session {\n  sessionToken String   @id\n  userId       String   @db.Uuid\n  expires      DateTime @db.Timestamp(6)\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: NoAction, map: \"session_userId_user_id_fk\")\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String\n  expires    DateTime\n\n  @@id([identifier, token])\n}\n\n// 課程評論\nmodel CourseReview {\n  id        String   @id @default(uuid())\n  userId    String   @db.Uuid\n  courseId  String   @db.Uuid\n  rating    Int      @default(5) // 1~5 分\n  comment   String?\n  createdAt DateTime @default(now())\n\n  user   User   @relation(fields: [userId], references: [id])\n  course Course @relation(fields: [courseId], references: [id])\n\n  @@unique([userId, courseId]) // 同一門課只可評論一次\n  @@index([courseId])\n  @@index([userId])\n}\n\n// 課程收藏\nmodel CourseFavorite {\n  id        String   @id @default(uuid())\n  userId    String   @db.Uuid\n  courseId  String   @db.Uuid\n  createdAt DateTime @default(now())\n\n  user   User   @relation(fields: [userId], references: [id])\n  course Course @relation(fields: [courseId], references: [id])\n\n  @@unique([userId, courseId]) // 避免重複收藏\n}\n\n// 購買課程\nmodel CoursePurchase {\n  id          String   @id @default(uuid())\n  userId      String   @db.Uuid\n  courseId    String   @db.Uuid\n  price       Decimal  @db.Decimal(12, 2)\n  purchasedAt DateTime @default(now())\n\n  user   User   @relation(fields: [userId], references: [id])\n  course Course @relation(fields: [courseId], references: [id])\n\n  @@unique([userId, courseId]) // 限定一人購一次（未來可拓展）\n}\n\n// 課程分類\nmodel CourseCategory {\n  id      String   @id @default(uuid())\n  name    String   @unique\n  courses Course[]\n}\n\n// 課程講師\nmodel CourseTeacher {\n  id      String   @id @default(uuid())\n  name    String\n  avatar  String // 大頭照 URL\n  title   String? // 職稱\n  bio     String? // 講師簡介\n  courses Course[]\n}\n\n// 課程標籤\nmodel CourseTag {\n  id      String              @id @default(uuid()) @db.Uuid\n  name    String              @unique\n  courses CourseTagOnCourse[]\n}\n\n// 中介表\nmodel CourseTagOnCourse {\n  courseId String @db.Uuid\n  tagId    String @db.Uuid\n\n  course Course    @relation(fields: [courseId], references: [id])\n  tag    CourseTag @relation(fields: [tagId], references: [id])\n\n  @@id([courseId, tagId])\n}\n\n// 課程主檔\nmodel Course {\n  id             String              @id @default(uuid()) @db.Uuid\n  name           String\n  slug           String              @unique\n  categoryId     String\n  teacherId      String\n  description    String // 課程摘要\n  youWillLearn   String[] // 您將學到（清單）\n  suitableFor    String[] // 適合對象（清單）\n  price          Decimal             @default(0) @db.Decimal(12, 2)\n  originalPrice  Decimal             @default(0) @db.Decimal(12, 2)\n  students       Int                 @default(0)\n  rating         Decimal             @default(5) @db.Decimal(3, 2)\n  totalDuration  Decimal             @default(0) @db.Decimal(4, 1) // 總課程時長\n  images         String[]\n  isPublished    Boolean             @default(true) // 是否上架\n  sortOrder      Int                 @default(0)\n  createdAt      DateTime            @default(now())\n  updatedAt      DateTime            @updatedAt\n  category       CourseCategory      @relation(fields: [categoryId], references: [id])\n  teacher        CourseTeacher       @relation(fields: [teacherId], references: [id])\n  tags           CourseTagOnCourse[]\n  content        CourseContent[]\n  CourseReview   CourseReview[]\n  CourseFavorite CourseFavorite[]\n  CoursePurchase CoursePurchase[]\n}\n\n// 課程章節\nmodel CourseContent {\n  id        String   @id @default(uuid())\n  courseId  String   @db.Uuid\n  title     String\n  content   String\n  order     Int\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  videoUrl  String?\n  isPreview Boolean  @default(false)\n  course    Course   @relation(fields: [courseId], references: [id])\n\n  @@index([courseId, order])\n}\n",
  "inlineSchemaHash": "3c22142c2aa1a619f7a9226d835143fa581ad87c05fd5d4cfc5ff79e35f029a0",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"paymentMethod\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"account\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"},{\"name\":\"session\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"CourseReview\",\"kind\":\"object\",\"type\":\"CourseReview\",\"relationName\":\"CourseReviewToUser\"},{\"name\":\"CourseFavorite\",\"kind\":\"object\",\"type\":\"CourseFavorite\",\"relationName\":\"CourseFavoriteToUser\"},{\"name\":\"CoursePurchase\",\"kind\":\"object\",\"type\":\"CoursePurchase\",\"relationName\":\"CoursePurchaseToUser\"}],\"dbName\":null},\"Account\":{\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"access_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"id_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"session_state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"}],\"dbName\":null},\"Session\":{\"fields\":[{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"}],\"dbName\":null},\"VerificationToken\":{\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"CourseReview\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CourseReviewToUser\"},{\"name\":\"course\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseReview\"}],\"dbName\":null},\"CourseFavorite\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CourseFavoriteToUser\"},{\"name\":\"course\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseFavorite\"}],\"dbName\":null},\"CoursePurchase\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"purchasedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CoursePurchaseToUser\"},{\"name\":\"course\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCoursePurchase\"}],\"dbName\":null},\"CourseCategory\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courses\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseCategory\"}],\"dbName\":null},\"CourseTeacher\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatar\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courses\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseTeacher\"}],\"dbName\":null},\"CourseTag\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courses\",\"kind\":\"object\",\"type\":\"CourseTagOnCourse\",\"relationName\":\"CourseTagToCourseTagOnCourse\"}],\"dbName\":null},\"CourseTagOnCourse\":{\"fields\":[{\"name\":\"courseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tagId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"course\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseTagOnCourse\"},{\"name\":\"tag\",\"kind\":\"object\",\"type\":\"CourseTag\",\"relationName\":\"CourseTagToCourseTagOnCourse\"}],\"dbName\":null},\"Course\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"categoryId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teacherId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"youWillLearn\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"suitableFor\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"originalPrice\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"students\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"totalDuration\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"images\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isPublished\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"sortOrder\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"category\",\"kind\":\"object\",\"type\":\"CourseCategory\",\"relationName\":\"CourseToCourseCategory\"},{\"name\":\"teacher\",\"kind\":\"object\",\"type\":\"CourseTeacher\",\"relationName\":\"CourseToCourseTeacher\"},{\"name\":\"tags\",\"kind\":\"object\",\"type\":\"CourseTagOnCourse\",\"relationName\":\"CourseToCourseTagOnCourse\"},{\"name\":\"content\",\"kind\":\"object\",\"type\":\"CourseContent\",\"relationName\":\"CourseToCourseContent\"},{\"name\":\"CourseReview\",\"kind\":\"object\",\"type\":\"CourseReview\",\"relationName\":\"CourseToCourseReview\"},{\"name\":\"CourseFavorite\",\"kind\":\"object\",\"type\":\"CourseFavorite\",\"relationName\":\"CourseToCourseFavorite\"},{\"name\":\"CoursePurchase\",\"kind\":\"object\",\"type\":\"CoursePurchase\",\"relationName\":\"CourseToCoursePurchase\"}],\"dbName\":null},\"CourseContent\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"courseId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"videoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isPreview\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"course\",\"kind\":\"object\",\"type\":\"Course\",\"relationName\":\"CourseToCourseContent\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

