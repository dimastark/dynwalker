FROM python:3.6

COPY server /app
COPY backends /backends
COPY config.ini /config.ini
WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN npm install -gs nodemon

RUN pip install -U pipenv
RUN pipenv install --skip-lock --system

CMD nodemon --exec 'python -m src.__main__' --watch src --watch /config.ini --watch /backends -e py

EXPOSE 8000
