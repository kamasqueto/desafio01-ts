import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (valueLoan: number): void => {
        if(valueLoan <= 0) {
           throw new Error('Valor inválido')
        }

        if(this.validateStatus()) {
            let balance = this.getBalance()

            balance += valueLoan
            console.log(`Empréstimo realizado no valor de R$: ${valueLoan}. Seu Saldo atual é de R$: ${balance}`)
        }
    }


}