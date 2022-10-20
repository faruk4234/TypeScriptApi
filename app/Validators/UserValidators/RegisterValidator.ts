import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(63)]),
    surname: schema.string({ trim: true }, [rules.required(), rules.maxLength(63)]),
    email: schema.string(
      {
        trim: true,
      },
      [rules.required(), rules.email(), rules.maxLength(123), rules.minLength(6)]
    ),
    password: schema.string(
      {
        trim: true,
      },
      [
        rules.required(),
        rules.maxLength(20),
        rules.minLength(8),
        rules.confirmed('passwordConfirm'),
      ]
    ),
    passwordConfirm: schema.string(
      {
        trim: true,
      },
      [rules.required(), rules.maxLength(123), rules.minLength(8)]
    ),
  })
  public messages: CustomMessages = {}
}
