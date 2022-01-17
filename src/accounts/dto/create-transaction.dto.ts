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
  id: string;
  readonly note: string;
  type: transactionEnum;
  target_account_id: string;
  readonly amount_money: amountMoneyType;
}
