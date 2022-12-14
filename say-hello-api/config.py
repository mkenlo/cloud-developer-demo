import os


class BaseConfig:
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = False
    SECRET_KEY = os.environ['SAYHELLO_APP_SECRET_KEY']
    CACHE_TYPE = 'SimpleCache'
    DB_HOST = os.environ['SAYHELLO_DB_HOST']
    DB_PORT = os.environ['SAYHELLO_DB_PORT']
    DB_NAME = os.environ['SAYHELLO_DB_NAME']
    DB_USER = os.environ['SAYHELLO_DB_USER']
    DB_PASSWORD = os.environ['SAYHELLO_DB_PASSWORD']
    DB_URI = os.environ['SAYHELLO_DB_URL']


class DevConfig(BaseConfig):
    FLAKS_ENV = "development"
    DEBUG = True


class ProdConfig(BaseConfig):
    FLASK_ENV = "production"
    DEBUG = False


class TestingConfig(BaseConfig):
    FLASK_ENV = "testing"
    TESTING = True
