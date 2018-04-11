#!/usr/bin/env python

from aoiklivereload import LiveReloader

from .app import app

LiveReloader().start_watcher_thread()
app.run(host='0.0.0.0', port=8000)
