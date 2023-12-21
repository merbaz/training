import axios, { AxiosResponse} from "axios"
import UserInterface from "../interfaces/UserInterface";

export function getUsers (){
    axios.get<UserInterface[]>("https://jsonplaceholder.typicode.com/users").then((res:AxiosResponse<UserInterface[]>)=>{
        console.log(res)
        const users:UserInterface[] = res.data;
        console.log(users);
    }).catch((err:AxiosResponse)=>{
        console.log(err);
    })
}