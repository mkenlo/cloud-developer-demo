from mongoengine import Document, StringField


class Translations(Document):
    language = StringField(required=True)
    word = StringField(required=True)

    def serialize(self):
        return {
            'language': self.language,
            'word': self.word
        }


class Languages(Document):
    language = StringField(required=True, unique=True)

    def serialize(self):
        return self.language
