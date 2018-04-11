from sanic import Sanic
from sanic.response import text

from .api import api

app = Sanic(__name__)
app.blueprint(api, url_prefix='/api')


@app.get('/ping')
async def ping(request):
    return text('pong')
