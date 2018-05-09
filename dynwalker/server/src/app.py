import configparser
import sys

from sanic import Sanic
from sanic.response import text
from sanic_cors import CORS

from .api import api

config = configparser.ConfigParser()
config.read('/config.ini')
backend = config.get('settings', 'BACKEND')

assert backend, 'Backend must be set.'

sys.path.append('/')

app = Sanic(__name__)
app.blueprint(api, url_prefix='/api')
app.config['CORS_AUTOMATIC_OPTIONS'] = True
app.config['BACKEND_CLS'] = __import__(backend, fromlist=['Backend'])
CORS(app)


@app.get('/ping')
async def ping(request):
    return text('pong')
