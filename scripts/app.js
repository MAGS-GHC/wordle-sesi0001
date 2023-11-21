let total_valid_words = [];

function valid_words() {
  let all_valid_words = document.getElementById("all_valid_words").textContent;

  total_valid_words = all_valid_words.split("");
}

valid_words();
