import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Foods } from "./create-modal";





@Injectable({
    providedIn: 'root'
})


export class FoodsService{

    private baseURL = "http://localhost:8080/api/v1/category";

    constructor(private httpClient : HttpClient){}


    getFoodsList(): Observable<Foods[]>{
        return this.httpClient.get<Foods[]>(`${this.baseURL}`);

    }

    createFoods(food : Foods):Observable<object>{
        return this.httpClient.post(`${this.baseURL}`, food);
    }

    getFoodsById(id: number): Observable<Foods>{
        return this.httpClient.get<Foods>(`${this.baseURL}/${id}`);
    }

}