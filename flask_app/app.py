from flask import Flask, request, jsonify, render_template, redirect, send_from_directory,url_for
from flask_cors import CORS  # Import the CORS module
import requests
import tensorflow as tf
import os
from werkzeug.utils import secure_filename
import json
from flask import jsonify
from pymongo import MongoClient



app = Flask(__name__, static_url_path='/static')
CORS(app)  # Enable CORS for all routes in the app

# Replace 'YOUR_TREFLE_TOKEN' with your actual Trefle API token
TREFLE_API_TOKEN = 'BX0p8cetKbW9SGtAypKKICT1VDzd7K-bZsHuqA0RGW0'
api_key = '6b04c64cfd8505cb927f21c4f9a65d94'




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/feedback')
def feedback():
    return render_template('feedback.html')

@app.route('/plant')
def plant():
    return render_template('plant.html')


@app.route('/input')
def input():
    return render_template('input.html')

@app.route('/output')
def output():
    return render_template('output.html')

@app.route('/sample')
def sample():
    return render_template('sample.html')

@app.route('/agri_shop')
def agri_shop():
    return render_template('agri_shop.html')

@app.route('/product_description')
def product_description():
    return render_template('product_description.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/shop-1')
def shop_1():
    return render_template('shop-1.html')

@app.route('/shop-2')
def shop_2():
    return render_template('shop-2.html')

@app.route('/shop-3')
def shop_3():
    return render_template('shop-3.html')

@app.route('/shop-4')
def shop_4():
    return render_template('shop-4.html')

@app.route('/PGRs')
def PGRs():
    return render_template('PGRs.html')

@app.route('/pesticides')
def pesticides():
    return render_template('pesticides.html')

@app.route('/fertilizer')
def fertilizer():
    return render_template('fertilizer.html')

@app.route('/herbicide')
def herbicide():
    return render_template('herbicide.html')




@app.route('/data')
def get_data():
    json_file_path = os.path.join(app.static_folder, 'sample.json')
    try:
        with open(json_file_path) as f:
            data = json.load(f)
        return jsonify(data)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Invalid JSON data in the file'}), 500

# Prediction process
@app.route('/weather')
def weather():
    return render_template('agro_weather.html')

@app.route('/search', methods=['GET'])
def search_plants():
    query = request.args.get('q', '')
    if not query:
        return jsonify({'error': 'Please provide a search query'}), 400

    trefle_url = f'https://trefle.io/api/v1/plants/search?token={TREFLE_API_TOKEN}&q={query}'

    try:
        response = requests.get(trefle_url)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({'error': f'Error fetching data from Trefle API: {str(e)}'}), 500
    






new_model = tf.keras.models.load_model(r"E:\Project_2024\results\sd_model\pd4classifier.h5")

# Function to preprocess an image
def preprocess_image(image_path):
    img = tf.io.read_file(image_path)
    img = tf.image.decode_jpeg(img, channels=3)
    img = tf.image.resize(img, (128, 128))
    img = img / 255.0  # Fix typo in normalization
    return img

# Define the directory containing test images
data_dir = r"E:\Project_2024\Dataset\Plant_dataset"
upload_folder = "uploads"
app.config["UPLOAD_FOLDER"] = upload_folder



# Route for handling image upload and prediction
@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return redirect(request.url)

    file = request.files["image"]

    if file.filename == "":
        return redirect(request.url)

    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(upload_folder, filename)

        # Save the file to the uploads folder
        file.save(file_path)

        # Preprocess the uploaded image
        uploaded_image = preprocess_image(file_path)
        uploaded_image = tf.expand_dims(uploaded_image, 0)  # Add batch dimension

        # Make prediction using the loaded model
        yhat_uploaded = new_model.predict(uploaded_image)

        # Get predicted class index and label
        predicted_class_index = tf.argmax(yhat_uploaded, axis=1).numpy()[0]

        # Get unique class labels from the directory names
        class_labels = [class_label for class_label in os.listdir(data_dir) if os.path.isdir(os.path.join(data_dir, class_label))]
        class_labels.sort()

        # Get the predicted label for the uploaded image
        if 0 <= predicted_class_index < len(class_labels):
            predicted_label = class_labels[predicted_class_index]
        else:
            predicted_label = 'Unknown'

        return render_template("output.html", image_path=filename, predicted_label=predicted_label)

# Serve the uploads folder
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    uploads_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    if os.path.exists(uploads_path):
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
    else:
        return jsonify({'error': 'File not found'}), 404

@app.route('/get_weather', methods=['POST'])
def get_weather():
    location = request.form['location']
    api_url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&units=metric'

    try:
        response = requests.get(api_url)

        if response.status_code == 200:
            data = response.json()
            temperature = data['main'].get('temp')
            humidity = data['main'].get('humidity')
            wind_speed = data['wind'].get('speed')

            weather_data = {
                'temperature': temperature,
                'humidity': humidity,
                'wind_speed': wind_speed
            }

            return jsonify(weather_data)

        else:
            return jsonify({'error': f"Failed to fetch data. Status Code: {response.status_code}"})

    except Exception as e:
        return jsonify({'error': str(e)})




uri = "mongodb+srv://Elavarasan:Emass%402002@cluster0.jn3dxhi.mongodb.net/authentication?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client['authentication']

@app.route('/sign')
def sign():
    return render_template('sign.html')

@app.route('/login', methods=['GET'])
def login():
    email = request.args.get('email')
    password = request.args.get('password')
    collection = db['users']
    user = collection.find_one({'email': email, 'password': password})
    if user:
        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'message': 'Invalid email or password'})

@app.route('/signup', methods=['POST'])
def signup():
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')
    collection = db['users']
    existing_user = collection.find_one({'email': email})
    if existing_user:
        return jsonify({'success': False, 'message': 'User already exists'})
    else:
        collection.insert_one({'name': name, 'email': email, 'password': password})
        return jsonify({'success': True})

@app.route('/index1')
def index1():
    return render_template('index1.html')




if __name__ == '__main__':
    app.run(port=5001, debug=True)
