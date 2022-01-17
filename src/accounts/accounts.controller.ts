import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { AccountsService } from './accounts.service';
import { SendTransactionDto } from './dto/create-send-transaction.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  /**
   * GET /accounts/
   * @returns json object of all accounts
   */
  @Get()
  findAll(): string[] {
    return this.accountsService.findAll();
  }

  /**
   * GET /accounts/transactions
   * @returns json object of all transactions
   */
  @Get('/transactions')
  findTransactions(): string[] {
    return this.accountsService.findTransactions();
  }

  /**
   * GET /accounts/{id}
   * @param id account id
   * @returns account information for specific account
   */
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.accountsService.findOne(id);
  }

  /**
   * GET /accounts/{id}/transactions
   * @param id account id
   * @returns json object of all account transactions
   */
  @Get(':id/transactions')
  findTransactionsOneAccount(@Param('id') id): string[] {
    return this.accountsService.findTransactionsOneAccount(id);
  }

  /**
   * POST /accounts/
   * @param createAccountDto account object to save
   * @returns message for success or failure
   */
  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto): string {
    return this.accountsService.createAccount(createAccountDto);
  }

  /**
   * POST /accounts/{id}/transactions/add
   * @param addTransactionDto transaction object to save
   * @returns message for success or failure
   */
  @Post(':id/transactions/add')
  addTransaction(
    @Body() addTransactionDto: CreateTransactionDto,
    @Param('id') id,
  ): string {
    return this.accountsService.addTransaction(addTransactionDto, id);
  }

  /**
   * POST /accounts/{id}/transactions/withdraw
   */
  @Post(':id/transactions/withdraw')
  withdrawTransaction(
    @Body() withdrawTransactionDto: CreateTransactionDto,
    @Param('id') id,
  ): string {
    return this.accountsService.withdrawTransaction(withdrawTransactionDto, id);
  }

  /**
   * POST /accounts/{id}/transactions/send
   */
  @Post(':id/transactions/send')
  sendTransaction(
    @Body() sendTransactionDto: SendTransactionDto,
    @Param('id') id,
  ): string {
    return this.accountsService.sendTransaction(sendTransactionDto, id);
  }
}
