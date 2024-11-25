import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdateParams {
    name: string;
}

async function updateUser(email: string, { name }: UpdateParams) {
    try {
        const res = await prisma.user.update({
            where: { email: email },
            data: { name },
        });
        console.log(res);
    } catch (e) {
        console.log(e);
    } finally {
        // Call the disconnect function properly
        await prisma.$disconnect();
    }
}

updateUser("hnew@gmail.com", { name: "thisisnew2" })
    .then(() => {
        console.log("Successful");
    })
    .catch((e) => {
        console.log(e);
    });
