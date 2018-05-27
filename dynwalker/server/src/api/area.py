from sanic.response import HTTPResponse, json
from sanic.request import Request


async def get_area(request: Request) -> HTTPResponse:
    return json({
        'size': {
            'width': 100,
            'height': 50,
        },
        'statics': [
            {'x': 0, 'y': 0},
            {'x': 1, 'y': 1},
            {'x': 2, 'y': 2}
        ],
        'dynamics': [
            {
                'id': 10,
                'type': 'interrupter',
                'x': 10, 'y': 10,
                'color': '#dd2853'
            },
            {
                'id': 1,
                'type': 'walker',
                'x': 15, 'y': 15,
                'color': '#82ca9d',
            },
            {
                'id': 2,
                'type': 'walker',
                'x': 20, 'y': 20,
                'color': '#82ca9d',
            },
            {
                'id': 3,
                'type': 'walker',
                'x': 25, 'y': 25,
                'color': '#82ca9d',
            },
        ],
    })
