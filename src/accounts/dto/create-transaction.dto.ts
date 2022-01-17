type amountMoneyType = {
  amount: number;
  currency: string;
};

enum transactionEnum {
  Credit,
  Debit,
  Transfer,
}

export class CreateTransactionDto {
  readonly id: number;
  readonly note: string;
  readonly type: transactionEnum;
  readonly target_account_id: string;
  readonly amount_money: amountMoneyType;
}
