import "dotenv/config";
import cors from "cors";
import express from "express";
import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import { createContext } from "./context";

const prisma = new PrismaClient();

async function main() {
  console.log("Start");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const t = initTRPC.create();
const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  testQuery: publicProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
    const { input } = opts;

    console.log("Test Query", input);

    return { id: input.id };
  }),
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(express.static("public"));

app.listen(2022);
