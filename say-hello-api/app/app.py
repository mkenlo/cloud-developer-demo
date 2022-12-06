from config import BaseConfig
from flask import Flask, jsonify, request, Response
from flask_caching import Cache
from model import Translations
from mongoengine import connect
from http import HTTPStatus
import json


app = Flask(__name__)
app.config.from_object(BaseConfig)

cache = Cache(app)

connect(app.config['DB_NAME'], host=app.config['DB_HOST'],
        port=int(app.config['DB_PORT']))


@app.route("/")
def index():
    return jsonify({'message': 'hello world. I can say hello in many languages'})


@app.route("/hello/<string:lang>", methods=['GET'])
@cache.cached(timeout=50)
def translate(lang):
    app.logger.info(f"translating the word <hello> to language <{lang}> ")
    translations = list(map(lambda x: x.serialize(),
                        Translations.objects(language=lang)))
    if len(translations) == 0:
        return Response(response=json.dumps({'error': 'translation not available'}), status=HTTPStatus.OK, content_type='application/json')
    return Response(response=json.dumps(translations), status=HTTPStatus.OK, content_type='application/json')


@app.route("/translate", methods=['POST'])
def add_translation():
    postdata = request.get_json()
    if not postdata or not set(['language', 'word']) >= set(postdata):
        return Response(response=jsonify({"error": "Invalid Payload."}), status=HTTPStatus.BAD_REQUEST, content_type='application/json')
    translate = Translations(
        language=postdata['language'], word=postdata['word'])
    translate.save()
    return Response(response=json.dumps(translate.serialize()), status=HTTPStatus.CREATED, content_type='application/json')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
