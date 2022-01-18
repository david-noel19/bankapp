type amountMoneyType = {
  amount: number;
  currency: string;
};

export class CreateTransactionDto {
  id: string;
  account_id: string;
  readonly note: string;
  type: string;
  readonly amount_money: amountMoneyType;
}
