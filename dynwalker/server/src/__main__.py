#!/usr/bin/env python

from sanic import Sanic
from sanic.response import json

app = Sanic()


@app.route('/')
async def test(request):
    return json({'hello': 'world'})


if __name__ == '__main__':
    from aoiklivereload import LiveReloader
    LiveReloader().start_watcher_thread()
    app.run(host='0.0.0.0', port=8000)
