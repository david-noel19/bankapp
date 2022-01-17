import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { v4 as uuidv4 } from 'uuid';
import { SendTransactionDto } from './dto/create-send-transaction.dto';

@Injectable()
export class AccountsService {
  private accounts: any[] = [];
  private transactions: any[] = [];

  /**
   * GET Paths
   */
  findAll(): string[] {
    return this.accounts;
  }

  findOne(id: number): string {
    const account = this.accounts.find((account) => account.id === id);
    return account;
  }

  findTransactions(): string[] {
    return this.transactions;
  }

  findTransactionsOneAccount(id: string): string[] {
    let result: string[] = [];
    this.transactions.forEach((transaction) =>
      transaction.target_account_id === id ? result.push(transaction) : '',
    );
    return result;
  }

  /**
   * POST Paths
   */
  createAccount(account: CreateAccountDto): string {
    account.id = uuidv4();
    this.accounts.push(account);
    return `Account created successfully for account id ${account.id}`;
  }

  addTransaction(transaction: CreateTransactionDto, id: string): string {
    transaction.account_id = id;
    transaction.id = uuidv4();
    transaction.type = 'Credit';
    this.transactions.push(transaction);
    return `Add Transaction created successfully for target account id ${transaction.account_id}`;
  }

  withdrawTransaction(transaction: CreateTransactionDto, id: string): string {
    transaction.account_id = id;
    transaction.id = uuidv4();
    transaction.type = 'Debit';
    this.transactions.push(transaction);
    return `Withdraw Transaction created successfully for account id ${transaction.account_id}`;
  }

  sendTransaction(transaction: SendTransactionDto, id: string): string {
    transaction.account_id = id;
    transaction.id = uuidv4();
    transaction.type = 'Transfer';
    this.transactions.push(transaction);
    return `Transaction from account_id ${transaction.account_id} to target account id ${transaction.target_account_id} was successful`;
  }
}
