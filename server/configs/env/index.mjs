import dotenv from "dotenv"
import appRootPath from "app-root-path"

export const ENVPath=()=>{
    dotenv.config({
        path:appRootPath.resolve("/configs/env/.env")
    })
}