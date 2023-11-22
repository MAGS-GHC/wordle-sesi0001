let total_valid_words = [];

//Fetcher alle de korrekte wordle ord fra txt-filen og kalder valid_words() funktionen med txt-filens indhold som argument
async function load_words() {
  const valid_words_file = await fetch("Assets/only_valid_wordle_words.txt");
  const all_valid_words = await valid_words_file.text();
  valid_words(all_valid_words);
}

load_words();

//Sætter all_valid_words som parameter i funtktionen og splitter alle dens ord i stringen indtil en array med opdelte ord
function valid_words(all_valid_words) {
  total_valid_words = all_valid_words.split(" ");
}
