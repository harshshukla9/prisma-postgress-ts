import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 async function insertUser(username:string, password:string,email:string,name:string){

    const res= await prisma.user.create({

        data:{
            username,
            password,
            email,
            name

        }
    })

    console.log(res)

 }

 insertUser("harsh","has","hnew@gmail.com","harshisbest")