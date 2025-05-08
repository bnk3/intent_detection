# 🔍 Intent Detection 

A web-based **Intent Detection System** powered by **BERT** for classifying user queries into predefined intents. This project uses the [CLINC150](https://huggingface.co/datasets/clinc_oos) dataset and fine-tunes a BERT model to accurately predict the intent of a user input in real time through a clean, interactive dashboard.

<p align="center">
  <img src="static/preview.png" alt="Intent Prediction Dashboard Screenshot" width="80%">
</p>

---

## 🚀 Features

- 🔤 **BERT-based Intent Classification**
- 🧠 Trained on 150+ real-world intents
- 🌐 **Flask-powered Web Dashboard**
- 📊 Top-3 prediction probabilities
- ✅ Clean UI with live inference

---

## 🗂️ Project Structure

```
├── app.py                      # Main Flask application
├── static/
│   ├── css/style.css           # Dashboard styling
│   └── js/script.js            # Frontend interactivity
├── templates/
│   └── index.html              # HTML template for dashboard
├── mask_intent_classifier2/    # Fine-tuned BERT model directory
├── training/
│   └── intent_detection.ipynb             # Model training notebook
├── requirements.txt            # Python dependencies
└── README.md                   # This file
```

---

## 🧠 Model Training

- Frameworks used: `transformers`, `datasets`, `scikit-learn`, `PyTorch`
- Dataset: `clinc_oos` ("plus" variant with 150 intents)
- Tokenizer: `bert-base-uncased`
- Architecture: `BertForSequenceClassification`
- Trained via Hugging Face's `Trainer` API (see `training/bnk-2.ipynb`)

---

## 🖥️ Demo

Enter a query like:

```
why his card declined
```

And get predictions like:

- ✅ Main Intent: `card_declined`
- 🥈 Top 3: `card_declined`, `damaged_card`, `report_lost_card`

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/intent-detection-dashboard.git
cd intent-detection-dashboard

# Create environment
python3 -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt
```

---

## ▶️ Running the App

```bash
# Run Flask app
python app.py
```

Then visit: [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## 📚 Dependencies

See [`requirements.txt`](./requirements.txt) for full list.

---

## 📌 TODOs

- [ ] Add user intent correction or spellcheck
- [ ] Deploy on Heroku/Render
- [ ] Add usage analytics/logging

---

## 📝 License

MIT License © 2025 [Your Name]
