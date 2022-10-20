import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string.optional({}, [rules.maxLength(63)]),
    surname: schema.string.optional({}, [rules.maxLength(63)]),
    email: schema.string.optional({}, [rules.email(), rules.maxLength(123), rules.minLength(6)]),
    password: schema.string.optional({}, [rules.maxLength(20), rules.minLength(8)]),
  })
  public messages: CustomMessages = {}
}
