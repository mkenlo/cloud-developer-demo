
from flask import jsonify, request, Response, Blueprint
from http import HTTPStatus
import json
import logging
from .model import Translations, Languages


api = Blueprint('api', __name__)


@api.route("/")
def index():
    return Response('hello world. I can say hello in many languages', status=HTTPStatus.OK)


@api.route("/hello/<string:lang>", methods=['GET'])
def translate(lang):
    logging.info(f"translating the word <hello> to language <{lang}> ")
    translations = list(map(lambda x: x.serialize(),
                        Translations.objects(language=lang)))
    if len(translations) == 0:
        return Response(response=json.dumps({'error': 'translation not available'}), status=HTTPStatus.OK, content_type='application/json')
    return Response(response=json.dumps(translations), status=HTTPStatus.OK, content_type='application/json')


@api.route("/translate", methods=['POST'])
def add_translation():
    postdata = request.get_json()
    if not postdata or not set(['language', 'word']) >= set(postdata):
        return Response(response=jsonify({"error": "Invalid Payload."}), status=HTTPStatus.BAD_REQUEST, content_type='application/json')
    translate = Translations(
        language=postdata['language'], word=postdata['word'])
    translate.save()

    Languages(language=postdata['language']).save()
    return Response(response=json.dumps(translate.serialize()), status=HTTPStatus.CREATED, content_type='application/json')


@api.route("/languages")
def getTranslations():
    data = list(map(lambda x: x.serialize(),
                    Languages.objects().order_by('language')))
    return Response(response=json.dumps(data), status=HTTPStatus.OK, content_type='application/json')


@api.route("/health")
def checkHealth():
    return Response("OK", status=HTTPStatus.OK)
