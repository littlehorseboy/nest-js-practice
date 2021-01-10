import {
  Controller, HttpCode, Header, Param, Query, Redirect,
  Get, Post,
  Req, Request, Headers
} from '@nestjs/common';

@Controller('cats')
export class CatsController {

  @Post('create204')
  @HttpCode(204)
  public create204(): string {
    return 'This action adds a new cat';
  }

  @Post('createCacheControlNoStore')
  @Header('Cache-Control', 'no-store')
  public createCacheControlNoStore(): string {
    return 'This action adds a new cat';
  }

  @Get('ab*cd')
  public wildcard(): string {
    return 'This route uses a wildcard';
  }

  @Get('getDocs')
  @Redirect('https://docs.nestjs.com')
  public getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('getHeaders')
  getHeaders(@Req() request: Request): Headers {
    return request.headers;
  }

  @Get(':id')
  public findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Get()
  public findAll(): string {
    return 'This action returns all cats'
  }

  @Post()
  public create(): string {
    return 'This action adds a new cat';
  }

}
