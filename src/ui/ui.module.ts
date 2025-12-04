import { Module, OnModuleInit } from '@nestjs/common';
import { registerHandlebarsHelpers } from './helpers/handlebars-helpers';

@Module({})
export class UiModule implements OnModuleInit {
  onModuleInit(): void {
    // Register Handlebars helpers when the module initializes
    registerHandlebarsHelpers();
  }
}
