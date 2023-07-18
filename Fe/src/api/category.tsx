import instance from ".";
import {ICategory,  } from "../interfaces/category";

export const getAll = () => {
    const uri = "/categories"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/categories/" + id
    return instance.get(uri)
}

export const update = (id: string) => {
    const uri = "/categories/" + id
    return instance.put(uri)
}
export const RemoveProduct = (id: number| string) =>{
    return instance.delete("/categories/"+id);
}