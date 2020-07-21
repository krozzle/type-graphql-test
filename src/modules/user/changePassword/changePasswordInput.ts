import { InputType, Field } from 'type-graphql';
import { PassWordMixin } from '../../../modules/shared/PasswordInput';

@InputType()
export class ChangePasswordInput extends PassWordMixin(class {}) {
  @Field()
  token: string;
}
