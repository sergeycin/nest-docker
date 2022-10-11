import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.models";
import { UsersModule } from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports:[
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
           
            dialect: 'postgres',
            host: process.env.POSTGRESS_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRESS_DB,
            models: [User],
            autoLoadModels: true
          }),
        UsersModule,
    ]
})
export class AppModule {}



// dialect: 'postgres',
// host: 'localhost',
// port: 5321,
// username: 'postgres',
// password: 'root',
// database: 'nest',
// models: [],
// autoLoadModels: true


// dialect: 'postgres',
// host: process.env.POSTGRESS_HOST,
// port: Number(process.env.POSTGRESS_PORT),
// username: process.env.POSTGRESS_USER,
// password: process.env.POSTGRESS_PASSWORD,
// database: process.env.POSTGRESS_DB,
// models: [],
// autoLoadModels: true