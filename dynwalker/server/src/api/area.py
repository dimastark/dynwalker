from sanic.response import HTTPResponse, json
from sanic.request import Request


async def get_area(request: Request) -> HTTPResponse:
    return json({
        'map': {
            'width': 1000,
            'height': 500,
        },
        'statics': [
            {
                'type': 'obstacle',
                'shape': 'rectangle',
                'dimensions': [200, 200],
                'coordinates': [0, 0],
            },
            {
                'type': 'obstacle',
                'shape': 'circle',
                'dimensions': [20],
                'coordinates': [500, 500],
            },
        ],
        'dynamics': [
            {
                'id': 10,
                'type': 'dynamic',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [600, 600],
            },
            {
                'id': 1,
                'type': 'agent',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [700, 700],
                'color': '#f00',
            },
            {
                'id': 2,
                'type': 'agent',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [770, 770],
                'color': '#0f0',
            },
            {
                'id': 3,
                'type': 'agent',
                'shape': 'circle',
                'dimensions': [50],
                'coordinates': [700, 0],
                'color': '#00f',
            },
        ],
    })
