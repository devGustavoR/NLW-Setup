import Fastify from 'fastify';
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client';

const app = Fastify()
const Prisma = new PrismaClient();

app.register(cors)

app.get ('/', async () =>{
    const habits = await Prisma.habit.findMany()

    return habits;
})

app.listen ({
    port: 2505,
}).then(() =>{
    console.log('Server listening on port')
})