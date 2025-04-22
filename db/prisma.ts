import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// 配置 Neon 使用 WebSocket
neonConfig.webSocketConstructor = ws;

// 使用環境變數中的資料庫連線字串
const connectionString = `${process.env.DATABASE_URL}`;

// 使用 PrismaNeon adapter 與連線設定
const adapter = new PrismaNeon({ connectionString });

// 建立 Prisma Client 實例
export const prisma = new PrismaClient({ adapter });
