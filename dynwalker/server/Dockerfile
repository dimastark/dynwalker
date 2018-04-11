FROM python:3.6

COPY . /app
WORKDIR /app

RUN pip install pipenv
RUN pipenv install --system

CMD python -m src.__main__

EXPOSE 8000
