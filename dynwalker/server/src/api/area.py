from sanic.response import HTTPResponse, json
from sanic.request import Request


async def get_area(request: Request) -> HTTPResponse:
    return json({
        'size': {
            'width': 1000,
            'height': 500,
        },
        'statics': [
            {
                'shape': 'rectangle',
                'dimensions': [200, 200],
                'coordinates': [0, 0],
            },
            {
                'shape': 'circle',
                'dimensions': [20],
                'coordinates': [500, 500],
            },
        ],
        'dynamics': [
            {
                'id': 10,
                'type': 'interrupter',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [600, 600],
            },
            {
                'id': 1,
                'type': 'walker',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [700, 700],
                'color': '#f00',
            },
            {
                'id': 2,
                'type': 'walker',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [770, 770],
                'color': '#0f0',
            },
            {
                'id': 3,
                'type': 'walker',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [700, 0],
                'color': '#00f',
            },
        ],
    })
