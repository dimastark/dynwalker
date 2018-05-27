from sanic.response import HTTPResponse, json
from sanic.request import Request


async def play_game(request: Request) -> HTTPResponse:
    return json({})


async def stop_game(request: Request) -> HTTPResponse:
    return json({})


async def pause_game(request: Request) -> HTTPResponse:
    return json({})
