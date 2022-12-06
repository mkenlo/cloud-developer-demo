import os


class BaseConfig:
    DEBUG = True
    SECRET_KEY = os.environ['SAYHELLO_APP_SECRET_KEY']
    CACHE_TYPE = 'SimpleCache'
    CACHE_REDIS_HOST = os.environ['SAYHELLO_CACHE_REDIS_HOST']
    CACHE_REDIS_PORT = os.environ['SAYHELLO_CACHE_REDIS_PORT']
    CACHE_REDIS_DB = os.environ['SAYHELLO_CACHE_REDIS_DB']
    CACHE_REDIS_DB = os.environ['SAYHELLO_CACHE_REDIS_DB']
    DB_HOST = os.environ['SAYHELLO_DB_HOST']
    DB_PORT = os.environ['SAYHELLO_DB_PORT']
    DB_NAME = os.environ['SAYHELLO_DB_NAME']
    DB_USER = os.environ['SAYHELLO_DB_USER']
    DB_PASSWORD = os.environ['SAYHELLO_DB_PASSWORD']
    DB_URL = os.environ['SAYHELLO_DB_URL']
