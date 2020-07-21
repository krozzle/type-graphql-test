import { InputType, Field, ClassType } from 'type-graphql';
import { MinLength } from 'class-validator';

export const PassWordMixin = <T extends ClassType>(BaseClass: T) => {
  @InputType({ isAbstract: true })
  class PasswordInput extends BaseClass {
    @Field()
    @MinLength(5)
    password: string;
  }
  return PasswordInput;
};
