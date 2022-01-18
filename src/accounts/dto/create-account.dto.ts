type balanceType = {
  amount: string;
  currency: string;
};

export class CreateAccountDto {
  id: number;
  readonly given_name: string;
  readonly family_name: string;
  readonly email_address: string;
  readonly note: string;
  readonly balance: balanceType;
}
