import Expense from "../models/Expense"
import axios from "axios"
import {GlobalVariables} from "../shared/Constants";

export default class ExpenseEntryService{
    static getAll(){
        return axios.get<Expense>("https://gateway/getAll")
            .then((response) => {
                return response
            })
            .catch((error: Error) => {
                console.error(error.message)
            })
    }

    static async addExpense(expense: Expense){
        return axios.post<Expense>(GlobalVariables.FINANCE_URI + '/addNewExpense', expense)
            .then((response) => {
                return response
            })
            .catch((error: Error) => {
                console.error(error.message)
            })
    }
}