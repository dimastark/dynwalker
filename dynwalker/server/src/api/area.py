from sanic.response import HTTPResponse, json
from sanic.request import Request


async def get_area(request: Request) -> HTTPResponse:
    return json({
        'size': {
            'width': 2500,
            'height': 1250,
        },
        'statics': [
            {
                'shape': 'rectangle',
                'width': 200,
                'height': 200,
                'x': 0,
                'y': 0
            },
            {
                'shape': 'circle',
                'radius': 20,
                'x': 500,
                'y': 500
            },
        ],
        'dynamics': [
            {
                'id': 10,
                'type': 'interrupter',
                'shape': 'circle',
                'radius': 50,
                'x': 300,
                'y': 300,
                'color': '#dd2853'
            },
            {
                'id': 1,
                'type': 'walker',
                'shape': 'circle',
                'radius': 50,
                'x': 700,
                'y': 200,
                'color': '#82ca9d',
            },
            {
                'id': 2,
                'type': 'walker',
                'shape': 'circle',
                'radius': 50,
                'x': 770,
                'y': 770,
                'color': '#82ca9d',
            },
            {
                'id': 3,
                'type': 'walker',
                'shape': 'circle',
                'radius': 50,
                'x': 700,
                'y': 200,
                'color': '#82ca9d',
            },
        ],
    })
