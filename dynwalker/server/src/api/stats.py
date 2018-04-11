from sanic.response import HTTPResponse, json
from sanic.request import Request


async def get_stats(request: Request) -> HTTPResponse:
    return json({
        'description': 'Модель хождения от точки до точки.',
        'populations': {
            'count': 100,
            'from': 0,
            'to': 100,
            'items': [
                {'fitness': i} for i in range(100)
            ],
        },
    })
