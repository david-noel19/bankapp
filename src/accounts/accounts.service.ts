import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

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
    const account = this.accounts.find((account) => (account.id = id));
    return account;
  }

  findTransactions(): string[] {
    return this.transactions;
  }

  findOneTransaction(id: number): string {
    const transaction = this.transactions.find(
      (transaction) => (transaction.id = id),
    );
    return transaction;
  }

  /**
   * POST Paths
   */
  createAccount(account: CreateAccountDto): string {
    this.accounts.push(account);
    return `Account created successfully for account id ${account.id}`;
  }

  addTransaction(transaction: CreateTransactionDto): string {
    this.transactions.push(transaction);
    return `Add Transaction created successfully for target account id ${transaction.target_account_id}`;
  }

  withdrawTransaction(transaction: CreateTransactionDto): string {
    this.transactions.push(transaction);
    return `Withdraw Transaction created successfuly for target account id ${transaction.target_account_id}`;
  }

  sendTransaction(transaction: CreateTransactionDto): string {
    this.transactions.push(transaction);
    return `Send Transaction created successfuly for target account id ${transaction.target_account_id}`;
  }
}
