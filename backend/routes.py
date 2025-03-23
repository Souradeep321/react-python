from app import app, db
from flask import request, jsonify
from models import Friend



# 🚀 Get all friends
@app.route("/api/friends", methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    return jsonify([friend.to_json() for friend in friends]), 200


# 🚀 Create a new friend
@app.route("/api/friends", methods=["POST"])
def create_friends():
    try:
        data = request.json

        required_fields = ["name","role","description","gender"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")

        # Fetch avatar image based on gender
        if gender == "male":
            img_url = f"https://api.dicebear.com/8.x/adventurer/svg?seed={name}&hair=short01,short02,short03&backgroundColor=00aaff"
        elif gender == "female":
            img_url = f"https://api.dicebear.com/8.x/adventurer/svg?seed={name}&hair=long01,long02,long03&accessories=earrings&backgroundColor=transparent"
        else:
            img_url = None

        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)

        db.session.add(new_friend)
        db.session.commit()

        return jsonify({"msg": "Friend created successfully", "img_url": img_url}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Something went wrong. Please try again later."}), 500
    

# 🚀 Delete a friend by ID
@app.route("/api/friends/<int:id>", methods=["DELETE"])
def delete_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error": "Friend not found"}), 404   

        db.session.delete(friend)
        db.session.commit()
        return jsonify({"msg": "Friend deleted successfully"}), 200      
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Something went wrong while deleting a friend."}), 500


# 🚀 Update a friend by ID
@app.route("/api/friends/<int:id>", methods=["PATCH"])
def update_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({"error": "Friend not found"}), 404
    
        data = request.json

        friend.name = data.get("name", friend.name)
        friend.role = data.get("role", friend.role)
        friend.description = data.get("description", friend.description)
        friend.gender = data.get("gender", friend.gender)

        db.session.commit()
        return jsonify({"msg": "Friend updated successfully", "friend": friend.to_json()}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Something went wrong while updating a friend."}), 500


