import unittest


class TestLightAndLED(unittest.TestCase):
    def test_inheritance_relationship(self):
        from problem_06_inheritance import Light, LED

        led = LED()

        self.assertIsInstance(led, Light)
