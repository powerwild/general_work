# import psycopg2

# CONNECTION_PARAMETERS = {
#     'dbname': 'widgets_database',
#     'user': 'widgets_user',
#     'password': 'password'
# }

# with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
#     with conn.cursor() as curs:
#         curs.execute( """
#         CREATE TABLE widgets (
#         id SERIAL PRIMARY KEY,
#         color VARCHAR(50),
#         shape VARCHAR(50)
#         );""")


#         def select_all_widgets():
#             curs.execute(
#                 """
#                 SELECT * FROM widgets
#                 """
#             )
#             results = curs.fetchall()
#             #results = curs.fetchone()
#             print(results)


#         def create_widget(color, shape):
#             curs.execute(
#                 """
#                 INSERT INTO widgets (color, shape)
#                 VALUES (%(color)s, %(shape)s)
#                 """,
#                 {
#                     'color': color,
#                     'shape': shape
#                 }
#             )


#             create_widget('red', 'triangle')
#             select_all_widgets()


# class Widget:
#     price = '$5'

#     def __init__(self, color):
#         self.color = color


#     def greet_widget(self):
#         return f'hello {self.color} widget'


#     @classmethod
#     def widget_factory(cls, colors):
#         print(cls)
#         widgets = [cls(color) for color in colors]
#         print('\n', [widget.greet_widget() for widget in widgets])
#         return widgets


#     @staticmethod
#     def something_about_widgets():
#         return 'widgets are neat'


# widget1 = Widget('blue')
# widget2 = Widget('green')
# widget1.price = '$10'
# delattr(widget1, 'price')

# print(widget1.price)
# print(widget2.price)
# print(Widget.price)
