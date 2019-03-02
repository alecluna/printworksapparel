SECRET_KEY := 'stingersup'
export SECRET_KEY

runserver:
	pg_ctl -D /usr/local/var/postgres restart
	python3 manage.py runserver
