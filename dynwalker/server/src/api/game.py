from sanic.response import HTTPResponse, text
from sanic.request import Request


async def play_game(request: Request) -> HTTPResponse:
    return text('ok')


async def stop_game(request: Request) -> HTTPResponse:
    return text('ok')


async def pause_game(request: Request) -> HTTPResponse:
    return text('ok')
