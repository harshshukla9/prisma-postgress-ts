import { PrismaClient } from "@prisma/client";


const prisma =new PrismaClient();


async function deleteUser(email:string){

const res = await prisma.user.delete({
    where:{
        email
    }
})
console.log(res)

}

deleteUser("hnew@gmail.com")
console.log("run the query")