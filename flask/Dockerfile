FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

RUN python3 -m venv venv
RUN source venv/bin/activate

RUN pip install -r requirements.txt

COPY . .

EXPOSE 6000

CMD ["python", "app.py"]