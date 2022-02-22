import psycopg2

CONNECTION_PARAMETERS = {
    'dbname': 'widgets_database',
    'user': 'widgets_user',
    'password': 'password'
}

with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
    with conn.cursor() as curs:
        curs.execute( """
        CREATE TABLE widgets (
        id SERIAL PRIMARY KEY,
        color VARCHAR(50),
        shape VARCHAR(50)
        );""")


        def select_all_widgets():
            curs.execute(
                """
                SELECT * FROM widgets
                """
            )
            results = curs.fetchall()
            #results = curs.fetchone()
            print(results)


        def create_widget(color, shape):
            curs.execute(
                """
                INSERT INTO widgets (color, shape)
                VALUES (%(color)s, %(shape)s)
                """,
                {
                    'color': color,
                    'shape': shape
                }
            )


            create_widget('red', 'triangle')
            select_all_widgets()
