type amountMoneyType = {
  amount: number;
  currency: string;
};

export class SendTransactionDto {
  id: string;
  account_id: string;
  readonly note: string;
  type: string;
  readonly target_account_id: string;
  readonly amount_money: amountMoneyType;
}
