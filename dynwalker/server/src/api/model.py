from sanic.response import HTTPResponse, text
from sanic.request import Request


async def get_model(request: Request) -> HTTPResponse:
    return text('ok')


async def modify_model(request: Request) -> HTTPResponse:
    return text('ok')
