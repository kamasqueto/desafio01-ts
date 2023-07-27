import { PeopleAccount } from './class/PeopleAccount';
import {CompanyAccount} from './class/CompanyAccount';
import { FirstAccount } from './class/FirstAccount';

//PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Kaique', 10)
console.log(peopleAccount.getName())
//Depósito
peopleAccount.deposit(120);
peopleAccount.deposit(200);
console.log(peopleAccount.getBalance())
//Saque
peopleAccount.withdraw(350)
peopleAccount.withdraw(200)

console.log('==========================================================================')

//CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('Elayne', 2)
console.log(companyAccount.getName())
//Deposíto
companyAccount.deposit(1200)
companyAccount.deposit(4000)
console.log(companyAccount.getBalance())
//Saque
companyAccount.withdraw(6000)
companyAccount.withdraw(3000)
//Empréstimo
companyAccount.getLoan(2000)

console.log('==========================================================================')

//FirstAccount
const firstAccount: FirstAccount = new FirstAccount('Erick', 3)
console.log(firstAccount.getName())
//Deposito
firstAccount.depositCashback(100)
firstAccount.depositCashback(150)
console.log(firstAccount.getBalance())
//Saque
firstAccount.withdraw(300)
firstAccount.withdraw(250)