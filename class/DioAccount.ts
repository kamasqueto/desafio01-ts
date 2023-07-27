export abstract class DioAccount {
    //Atributos
    readonly name: string 
    readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true


    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    //Métodos

    getName = (): string => {
        return this.name
    }

    deposit = (valueDeposit: number): void => {
        if(this.validateStatus()) {
            this.balance += valueDeposit
            console.log(`Depósito realizado no valor de R$: ${valueDeposit}. Seu Saldo atual é de R$: ${this.balance}`)
        }
    }

    withdraw = (valueWithdraw: number): void => {
        if(this.validateStatus()) {
            if(valueWithdraw > this.balance || this.balance === 0) {
              return console.log('Saldo insuficiente! Não será possível realizar o saque.')
            }

            this.balance -= valueWithdraw
            console.log(`Saque realizado no valor de R$: ${valueWithdraw}. Seu saldo atual é de R$: ${this.balance}`)
        }
    }

    getBalance = (): number => {
        return this.balance
    }

    validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}
