import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { v4 as uuidv4 } from 'uuid';

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
    transaction.target_account_id = id;
    transaction.id = uuidv4();
    transaction.type = 0;
    this.transactions.push(transaction);
    return `Add Transaction created successfully for target account id ${transaction.target_account_id}`;
  }

  withdrawTransaction(transaction: CreateTransactionDto, id: string): string {
    transaction.target_account_id = id;
    transaction.id = uuidv4();
    transaction.type = 1;
    this.transactions.push(transaction);
    return `Withdraw Transaction created successfully for target account id ${transaction.target_account_id}`;
  }

  sendTransaction(transaction: CreateTransactionDto, id: string): string {
    transaction.target_account_id = id;
    transaction.id = uuidv4();
    transaction.type = 2;
    this.transactions.push(transaction);
    return `Send Transaction created successfully for target account id ${transaction.target_account_id}`;
  }
}
