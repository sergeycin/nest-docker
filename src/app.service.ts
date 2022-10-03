import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService{
    getUsers(){
        return[{id:1,name: 'Serget'}]
    }
}

// Сервисы отвечаюь за логику например за обработку данных из бд,контрллер должен быть максимально чистым только получил запрос выдал ответ