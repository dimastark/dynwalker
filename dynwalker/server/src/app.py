from sanic import Sanic
from sanic.response import text
from sanic_cors import CORS

from .api import api

app = Sanic(__name__)
app.blueprint(api, url_prefix='/api')
app.config['CORS_AUTOMATIC_OPTIONS'] = True
CORS(app)


@app.get('/ping')
async def ping(request):
    return text('pong')
