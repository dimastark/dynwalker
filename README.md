# Dynamic Walker

Генетический алгоритм для обучения модели ходока по карте со статическими и динамическими препятствиями.

## Table of Contents
- [Быстрый старт](#быстрый-старт)
- [Архитектура](#архитектура)
  - [backend](#backend)
  - [server](#server)
  - [frontend](#frontend)
- [Стек технологий](#стек-технологий)
- [Ссылки](#ссылки)

## Быстрый старт

1. Выбрать бекенд алгоритма в файле конфигурации `dynwalker/app.env`
    
    ```sh
    # Бекенд хождения от точки до точки
    # (Подробнее про бекенды в разделе Архитектура)
    BACKEND=dynwalker.backends.point2point
    ```

2. Запустить `docker-compose`

    ```sh
    docker-compose up --build
    ```

3. Приложение доступно по адресу: [http://localhost:3000](http://localhost:3000)

## Архитектура

```
dynwalker
├── backends
│   └── backend
│       ├── backend.py
│       └── __init__py
├── server
└── frontend
```
Приложение разбито на три основных компонента: `backend`, `server`, `frontend`.

### backend
* Находятся в папке `dynwalker/backends`
* Каждый бекенд должен реализовать интерфейс `dynwalker.backends.base.Backend`
* Бекенд импортируется по пути `${BACKEND}.backend`

### server
* API для запуска обучения и изменения параметров генетического алгоритма
* Ручка `/learn` (**TODO**)
* ... (**TODO**)

### frontend
* Интерфейс для отображения работы обученных моделей

## Стек технологий

* [Sklearn](http://scikit-learn.org/stable/index.html) для нейронных сетей
* [DEAP](http://deap.readthedocs.io/en/master/index.html) для генетических алгоритмов
* [Python](https://docs.python.org/3/) и [Sanic](https://github.com/channelcat/sanic) для сервера
* [React](https://reactjs.org/docs/hello-world.html) для интерфейса

## Ссылки

* [Конкурентное обучение в DEAP](http://deap.readthedocs.io/en/master/examples/coev_coop.html)
* [PyBrain - простые нейронные сети](https://habrahabr.ru/post/148407/)
* [Эволюция агентов управляемых нейронной сетью](https://habrahabr.ru/post/168067/)
* [Введение в машинное обучение с sklearn](https://habrahabr.ru/company/mlclass/blog/247751/)
* [Эволюция нейронной сети](https://github.com/lagodiuk/evo-neural-network-agents)
* [Генетический алгоритм на Java](https://github.com/lagodiuk/genetic-algorithm)
* [Евристика поиска пути с динамическими препятствиями](http://www.graphicon.ru/html/2011/conference/gc2011vinokurova.pdf)
* [Система управления движением робота](https://clck.ru/D8irg)
* [Path Planning in Dynamic Environments](https://clck.ru/D8nh3)
