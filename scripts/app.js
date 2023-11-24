let total_valid_words = [];

//Fetcher alle de korrekte wordle ord fra txt-filen og kalder valid_words() funktionen med txt-filens indhold som argument
async function load_words() {
  const valid_words_file = await fetch("Assets/only_valid_wordle_words.txt");
  const lower_valid_words = await valid_words_file.text();
  const all_valid_words = lower_valid_words.toUpperCase();
  valid_words(all_valid_words);

  reset_correct_word();
}


//Sætter all_valid_words som parameter i funtktionen og splitter alle dens ord i stringen indtil en array med opdelte ord
function valid_words(all_valid_words) {
  total_valid_words = all_valid_words.split(" ");
}

function reset_game() {
  alert("You Won!! You can keep playing if you want too");
  location.reload();
}

function reset_correct_word() {
  correct_word = random_word();
  correct_letter_index = 0;
  console.log("The new correct word is:", correct_word);
}


let correct_word = "";
function random_word() {
  return total_valid_words[Math.floor(Math.random() * 12972)];
}

let correct_letter_index = 0;

//Tager input fra keyboardet på hjemmesiden
function keyboard_input(key) {
  console.log(key);
  if (row_1_letter_index < 5) {
    console.log("First row input");
    first_row_input(key);
  } else if (row_1_letter_index >= 5 && row_2_letter_index < 5) {
    console.log(row_1_letter_index);
    console.log("Second row input");
    second_row_input(key);
  } else if (row_2_letter_index >= 5 && row_3_letter_index < 5) {
    console.log(row_2_letter_index);
    console.log("third row input");
    third_row_input(key);
  } else if (row_3_letter_index >= 5 && row_4_letter_index < 5) {
    console.log(row_3_letter_index);
    console.log("fourth row input");
    fourth_row_input(key);
  } else if (row_4_letter_index >= 5 && row_5_letter_index < 5) {
    console.log(row_4_letter_index);
    console.log("fifth row input");
    fifth_row_input(key);
  } else if (row_5_letter_index >= 5 && row_6_letter_index < 5) {
    console.log(row_5_letter_index);
    console.log("sixth row input");
    sixth_row_input(key);
  } else {
    alert("YOU HAVE NO ATTEMPTS LEFT");
  }
}


let row_1_letter_index = 0;
let first_row = document.querySelector(".Row_1");
let cells_1 = first_row.querySelectorAll(".Letter_1_1, .Letter_1_2, .Letter_1_3, .Letter_1_4, .Letter_1_5");
let large_cell_1 = first_row.querySelectorAll(".Cell_1_1, .Cell_1_2, .Cell_1_3, .Cell_1_4, .Cell_1_5");

function first_row_input(key) {
  console.log("First row index:", row_1_letter_index); 
  console.log(correct_word);
  console.log()

  if (row_1_letter_index < cells_1.length) {
    cells_1[row_1_letter_index].textContent = key;
    console.log(correct_word);
    console.log(key);

    if (key == correct_word[row_1_letter_index]) {
      console.log("correct letter and position");
      large_cell_1[row_1_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      console.log("correct letter, but wrong position");
      large_cell_1[row_1_letter_index].classList.add("semi_correct");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_1[row_1_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_1_letter_index++;
  }
  if (row_1_letter_index == 5) {
    correct_letter_index = 0;
  }
}


let row_2_letter_index = 0;
let second_row = document.querySelector(".Row_2");
let cells_2 = second_row.querySelectorAll(".Letter_2_1, .Letter_2_2, .Letter_2_3, .Letter_2_4, .Letter_2_5");
let large_cell_2 = second_row.querySelectorAll(".Cell_2_1, .Cell_2_2, .Cell_2_3, .Cell_2_4, .Cell_2_5");

function second_row_input(key) {
  console.log("Second row index:", row_2_letter_index); 
  console.log(correct_word);

  if (row_2_letter_index < cells_2.length) {
    cells_2[row_2_letter_index].textContent = key;
    console.log(key);
    
    if (key == correct_word[row_2_letter_index]) {
      console.log("correct letter and position");
      large_cell_2[row_2_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      large_cell_2[row_2_letter_index].classList.add("semi_correct");
      console.log("correct letter, but wrong position");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_2[row_2_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_2_letter_index++;
  }
  if (row_2_letter_index == 5) {
    correct_letter_index = 0;
  }
}



let row_3_letter_index = 0;
let third_row = document.querySelector(".Row_3");
let cells_3 = third_row.querySelectorAll(".Letter_3_1, .Letter_3_2, .Letter_3_3, .Letter_3_4, .Letter_3_5");
let large_cell_3 = third_row.querySelectorAll(".Cell_3_1, .Cell_3_2, .Cell_3_3, .Cell_3_4, .Cell_3_5");

function third_row_input(key) {
  console.log("third row index:", row_3_letter_index); 
  console.log(correct_word);

  if (row_3_letter_index < cells_3.length) {
    cells_3[row_3_letter_index].textContent = key;
    console.log(key);

    if (key == correct_word[row_3_letter_index]) {
      console.log("correct letter and position");
      large_cell_3[row_3_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      large_cell_3[row_3_letter_index].classList.add("semi_correct");
      console.log("correct letter, but wrong position");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_3[row_3_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_3_letter_index++;
  }
  if (row_3_letter_index == 5) {
    correct_letter_index = 0;
  }
}



let row_4_letter_index = 0;
let fourth_row = document.querySelector(".Row_4");
let cells_4 = fourth_row.querySelectorAll(".Letter_4_1, .Letter_4_2, .Letter_4_3, .Letter_4_4, .Letter_4_5");
let large_cell_4 = fourth_row.querySelectorAll(".Cell_4_1, .Cell_4_2, .Cell_4_3, .Cell_4_4, .Cell_4_5");

function fourth_row_input(key) {
  console.log("fourth row index:", row_4_letter_index); 
  console.log(correct_word);

  if (row_4_letter_index < cells_4.length) {
    cells_4[row_4_letter_index].textContent = key;
    console.log(key)
  
    if (key == correct_word[row_4_letter_index]) {
      console.log("correct letter and position");
      large_cell_4[row_4_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      large_cell_4[row_4_letter_index].classList.add("semi_correct");
      console.log("correct letter, but wrong position");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_4[row_4_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_4_letter_index++;
  }
  if (row_4_letter_index == 5) {
    correct_letter_index = 0;
  }
}


let row_5_letter_index = 0;
let fifth_row = document.querySelector(".Row_5");
let cells_5 = fifth_row.querySelectorAll(".Letter_5_1, .Letter_5_2, .Letter_5_3, .Letter_5_4, .Letter_5_5");
let large_cell_5 = fifth_row.querySelectorAll(".Cell_5_1, .Cell_5_2, .Cell_5_3, .Cell_5_4, .Cell_5_5");

function fifth_row_input(key) {
  console.log("fifth row index:", row_5_letter_index);
  console.log(correct_word);

  if (row_5_letter_index < cells_5.length) {
    cells_5[row_5_letter_index].textContent = key;
    console.log(key)

    if (key == correct_word[row_5_letter_index]) {
      console.log("correct letter and position");
      large_cell_5[row_5_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      large_cell_5[row_5_letter_index].classList.add("semi_correct");
      console.log("correct letter, but wrong position");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_5[row_5_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_5_letter_index++;
  }
  if (row_5_letter_index == 5) {
    correct_letter_index = 0;
  }
}


let row_6_letter_index = 0;
let sixth_row = document.querySelector(".Row_6");
let cells_6 = sixth_row.querySelectorAll(".Letter_6_1, .Letter_6_2, .Letter_6_3, .Letter_6_4, .Letter_6_5");
let large_cell_6 = sixth_row.querySelectorAll(".Cell_6_1, .Cell_6_2, .Cell_6_3, .Cell_6_4, .Cell_6_5");

function sixth_row_input(key) {
  console.log("sixth row index:", row_6_letter_index); 
  console.log(correct_word);

  if (row_6_letter_index < cells_6.length) {
    cells_6[row_6_letter_index].textContent = key;
    console.log(key)

    if (key == correct_word[row_6_letter_index]) {
      console.log("correct letter and position");
      large_cell_6[row_6_letter_index].classList.add("correct");
      console.log(correct_word);
      correct_letter_index++;

      if (correct_letter_index == correct_word.length) {
        reset_correct_word();
        reset_game();
      }

    } else if (correct_word.includes(key)) {
      large_cell_6[row_6_letter_index].classList.add("semi_correct");
      console.log("correct letter, but wrong position");
      console.log(correct_word);
    } else {
      console.log("wrong letter");
      large_cell_6[row_6_letter_index].classList.add("non_correct");
      console.log(correct_word);
    }

    row_6_letter_index++;
  }
  if (row_6_letter_index == 5) {
    correct_letter_index = 0;
  }
}


load_words();


