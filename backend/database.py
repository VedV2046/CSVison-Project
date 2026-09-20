from pymongo import MongoClient

MONGO_URL = "mongodb+srv://vharambleved_db_user:dz9ypDb4VN7QPlve@cluster0.xdjsz3q.mongodb.net/?appName=Cluster0"

client = MongoClient(MONGO_URL)
db = client["csvision"]
uploads_collection = db["uploads"]