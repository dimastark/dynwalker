from sanic import Blueprint

from . import area, game, model, stats

api = Blueprint(name='api', url_prefix='/api')

api.add_route(area.get_area, uri='/area', methods=['GET'])

api.add_route(game.play_game, uri='/game/play', methods=['POST'])
api.add_route(game.pause_game, uri='/game/pause', methods=['POST'])
api.add_route(game.stop_game, uri='/game/stop', methods=['POST'])

api.add_route(model.get_model, uri='/model', methods=['GET'])
api.add_route(model.modify_model, uri='/model', methods=['PATCH'])

api.add_route(stats.get_stats, uri='/stats', methods=['GET'])
