from flask import Flask, jsonify
from flask.views import MethodView
import numpy as np

app = Flask(__name__)

class NumberApi(MethodView):
    """ /api/randomnumber """
    def generate_pseudo_random_number(self):
        return np.random.randint(low=0, high=100, dtype='int')

    def get(self):
        return jsonify({"status":200, 'content': int(self.generate_pseudo_random_number())})

@app.errorhandler(404)
def page_not_found(e):
    return "404 Not Found"

@app.errorhandler(403)
def page_is_forbidden(e):
    return "<h1>Forbidden</h1>"

@app.errorhandler(410)
def page_is_gone(e):
    return "<h1>Gone</h1>"

@app.errorhandler(500)
def page_internal_Server_error(e):
    return "<h1>Internal Server Error</h1>"

app.add_url_rule("/api/randomnumber", view_func=NumberApi.as_view("number_api"))

if __name__ == "__main__":
    app.run()