import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('accounts')
export class AccountsController {
  /**
   * GET /accounts/
   * @returns json object of all accounts
   */
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  /**
   * GET /accounts/{id}
   * @param id account id
   * @returns account information for specific account
   */
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Account: ${id}`;
  }

  /**
   * GET /accounts/transactions
   * @returns json object of all transactions
   */
  @Get('/transactions')
  findTransactions(): string {
    return `This will get all the transactions`;
  }

  /**
   * GET /accounts/{id}/transactions
   * @param id account id
   * @returns json object of all account transactions
   */
  @Get(':id/transactions')
  findOneTransaction(@Param('id') id): string {
    return `This is a transaction for id ${id}`;
  }

  /**
   * POST /accounts/
   * @param createAccountDto account object to save
   * @returns message for success or failure
   */
  @Post()
  createAccount(@Body() createAccountDto: CreateAccountDto): string {
    return `The account has been created successfully!`;
  }

  /**
   * POST /accounts/{id}/transactions/add
   * @param createTransactionDto transaction object to save
   * @returns message for success or failure
   */
  @Post(':id/transactions/add')
  addTransaction(@Body() createTransactionDto: CreateTransactionDto): string {
    return `The transaction for deposit has been created for account id`;
  }

  @Post(':id/transactions/withdraw')
  withdrawTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): string {
    return `The transaction for withdraw has been created for account id`;
  }

  @Post(':id/transactions/send')
  sendTransaction(@Body() createTransactionDto: CreateTransactionDto): string {
    return `The transaction for sending money has been created for account id to target account id`;
  }
}
