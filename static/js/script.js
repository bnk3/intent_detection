document.addEventListener('DOMContentLoaded', function() {
    const queryForm = document.getElementById('query-form');
    const queryInput = document.getElementById('query-input');
    const resultsContent = document.getElementById('results-content');
    const initialState = document.querySelector('.initial-state');
    const loadingState = document.getElementById('loading');
    const queryDisplay = document.getElementById('query-display');
    const mainIntent = document.getElementById('main-intent');
    const predictionsList = document.getElementById('predictions-list');
    
    // Form submission handler
    queryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const query = queryInput.value.trim();
        if (!query) return;
        
        // Show loading state
        initialState.style.display = 'none';
        resultsContent.style.display = 'none';
        loadingState.style.display = 'flex';
        
        // Create form data
        const formData = new FormData();
        formData.append('query', query);
        
        // Send request to backend
        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Hide loading state
            loadingState.style.display = 'none';
            resultsContent.style.display = 'block';
            
            // Display results
            displayResults(query, data);
        })
        .catch(error => {
            console.error('Error:', error);
            loadingState.style.display = 'none';
            initialState.style.display = 'block';
            alert('An error occurred while predicting the intent.');
        });
    });
    
    // Display prediction results
    function displayResults(query, data) {
        // Set query text
        queryDisplay.textContent = query;
        
        // Set main intent
        mainIntent.textContent = data.main_intent;
        
        // Clear previous predictions
        predictionsList.innerHTML = '';
        
        // Add top predictions
        data.top_predictions.forEach(pred => {
            const predItem = document.createElement('div');
            predItem.className = 'prediction-item';
            
            predItem.innerHTML = `
                <div class="rank">${pred.rank}</div>
                <div class="prediction-intent">${pred.intent}</div>
                <div class="prediction-probability">${pred.probability}%</div>
            `;
            
            predictionsList.appendChild(predItem);
        });
    }
    
    // History-related functions removed as requested
});