from server import app
import unittest 

class TestRandomNumberGeneratorApi(unittest.TestCase): 

    @classmethod
    def setUpClass(cls):
        pass 

    @classmethod
    def tearDownClass(cls):
        pass 

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True 

    def tearDown(self):
        pass 

    def test_api_random_number(self):
        result = self.app.get('/api/randomnumber') 
        self.assertEqual(result.status_code, 200)
