FROM python:3.6

COPY . /app
WORKDIR /app

RUN pip install pipenv
RUN pipenv install --system

CMD python src/__main__.py

EXPOSE 8000
