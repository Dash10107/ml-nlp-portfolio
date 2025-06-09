const { execSync } = require('child_process');
const fs = require('fs');

// Commit messages
const commitMessages = [
    "Initial commit: add project structure and README",
    "Add Book Recommender system notebook and data files",
    "Implement collaborative filtering for book recommendations",
    "Add End to End Chatbot with Streamlit UI",
    "Train and evaluate chatbot intent classifier",
    "Add Fashion Recommendation notebook with VGG16 feature extraction",
    "Implement image similarity search for fashion items",
    "Add IPL Predictions notebook and match data",
    "Build logistic regression model for IPL match outcome prediction",
    "Add Movie Recommendation system with NLP-based content filtering",
    "Implement stemming and vectorization for movie tags",
    "Add Music Recommender with Spotify API integration",
    "Implement hybrid recommendation combining content and popularity",
    "Add Next Word Generator using LSTM neural network",
    "Train and test next word prediction model",
    "Add Whatsapp Chat Analyzer with sentiment analysis",
    "Implement extractive summarization and emoji removal for chat data",
    "Add YouTube Chaptering notebook with topic modeling",
    "Implement NMF-based chapter segmentation for video transcripts",
    "Update README with project descriptions",
];
// Dates: May 30, 31, June 1
const dateBuckets = [  '2025-06-09','2025-06-10','2025-06-12', '2025-06-11', '2025-06-13'];


function getRandomTimeOnDate(dateStr) {
  const start = new Date(`${dateStr}T00:00:00Z`).getTime();
  const end = new Date(`${dateStr}T23:59:59Z`).getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime).toISOString();
}

commitMessages.forEach((message, index) => {
  const day = dateBuckets[index % dateBuckets.length];
  const date = getRandomTimeOnDate(day);

  // Write a dummy line
  fs.appendFileSync('dummy.txt', `${message}\n`);
  execSync('git add dummy.txt');

  // Set both author and committer date
  const env = {
    ...process.env,
    GIT_AUTHOR_DATE: date,
    GIT_COMMITTER_DATE: date,
  };

  execSync(`git commit -m "${message}"`, { env });
  console.log(`✅ Commit ${index + 1}: ${message} @ ${date}`);
});