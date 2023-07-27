import { DioAccount } from "./DioAccount";


export class FirstAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositCashback = (valueDepositCashback: number): void => {
        if(this.validateStatus()) {
            let newValue = valueDepositCashback + 10
            this.deposit(newValue)
        }
    }
}