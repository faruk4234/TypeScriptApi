import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
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
      [rules.required(), rules.maxLength(123), rules.minLength(8), rules.maxLength(20)]
    ),
  })
  public messages: CustomMessages = {}
}
