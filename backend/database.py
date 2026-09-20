import os
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv(Path(__file__).with_name(".env"))

MONGO_URL = os.getenv("MONGO_URL")
if not MONGO_URL:
	raise RuntimeError("MONGO_URL is not configured")

client = MongoClient(MONGO_URL)
db = client["csvision"]
uploads_collection = db["uploads"]