from flask import Flask
from flask_cors import CORS
from config import BaseConfig
from mongoengine import connect
from .routes import api


def create_app():
    app = Flask(__name__)
    app.config.from_object(BaseConfig)
    CORS(app)

    connect(host=app.config['DB_URI'])

    # registering blueprints
    app.register_blueprint(api)

    return app
