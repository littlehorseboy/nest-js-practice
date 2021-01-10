import { Controller, Get } from '@nestjs/common';

@Controller({
  path: 'admin',
  host: 'localhost',
})
export class AdminController {

  @Get()
  get(): string {
    return 'Admin page';
  }

}
