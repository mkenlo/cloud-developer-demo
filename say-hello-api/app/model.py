from mongoengine import Document, StringField


class Translations(Document):
    language = StringField(required=True)
    word = StringField(required=True)

    def serialize(self):
        return {
            'language': self.language,
            'word': self.word
        }
