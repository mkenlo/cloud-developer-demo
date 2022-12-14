FROM python:3.8-alpine 
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install -U pip && pip install -r requirements.txt

COPY . /app
EXPOSE 5000
CMD ["flask", "run", "--host", "0.0.0.0"]