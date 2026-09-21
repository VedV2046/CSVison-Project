import os
from pathlib import Path
import certifi
from dotenv import load_dotenv
from pymongo import MongoClient
from pymongo.server_api import ServerApi

load_dotenv(Path(__file__).with_name(".env"))

MONGO_URL = os.getenv("MONGO_URL")
if not MONGO_URL:
	raise RuntimeError("MONGO_URL is not configured")

client = MongoClient(
	MONGO_URL, 
	server_api=ServerApi('1'), 
	tlsCAFile=certifi.where(),
	serverSelectionTimeoutMS=3000,
	connectTimeoutMS=3000
	)
db = client["csvision"]
uploads_collection = db["uploads"]