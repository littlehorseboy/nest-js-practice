import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post()
  public create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  public findAll(): string {
    return 'This action returns all cats'
  }

  @Get('ab*cd')
  public wildcard(): string {
    return 'This route uses a wildcard';
  }

}
