import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountsService {
    private accounts: any[] = [];

    findAll(): string[] {
        return this.accounts;
    }

    createAccount(account: CreateAccountDto): string {
        this.accounts.push(account);
        return "Account created successfully";
    }
}
