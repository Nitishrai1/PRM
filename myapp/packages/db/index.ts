// import {PrismaClient} from "@prisma/client"

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare global {
//   var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
// }

// export const prisma: ReturnType<typeof prismaClientSingleton> = globalThis.prismaGlobal ?? prismaClientSingleton()



// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

// // export const prisma=new PrismaClient();

import {PrismaClient} from "@prisma/client";

export const prisma = new PrismaClient();