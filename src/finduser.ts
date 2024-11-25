import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findOne(email: string) {
    const res = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    console.log(res);
}

findOne("hnew@gmail.com");
console.error("succesfu;lly run")
