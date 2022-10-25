const details = document.querySelector(".details");
const word = document.querySelector(".showcase-word");
const soundBtn = document.querySelector(".sound-btn");
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const sound = document.getElementById('sound')

const inpWord = sessionStorage.getItem("inpWord");

const fetchApi = fetch(`${url}${inpWord}`)

fetchApi
  .then(res => res.json())
  .then(dict => {
    console.log(dict[0]);
    word.innerHTML = `<h2 class="word">${inpWord}</h2>
    <button class="sound-btn"><i class="fa fa-play"></i> <i id="phon">${dict[0].phonetic}</i></button>`


    details.innerHTML = `

        <div class="partOfSpeech">
            <h5>Part Of Speech:</h5> <span>${dict[0].meanings[0].partOfSpeech}</span>
        </div>

        <div class="meaning">
            <h5>Meaning:</h5>
            <h4 style="font-size: 20px;">${dict[0].meanings[0].definitions[0].definition}</h4>
            <i class="li-sent">"${dict[0].meanings[0].definitions[0].example || ""}"</i>
        </div>

        <div class="antonyms-synonyms">
            <div class="syan synonyms">
                <h5>synonyms</h5>
                <div>
                    <a href="">${dict[0].meanings[0].synonyms[0]}</a>,
                    <a href="">${dict[0].meanings[0].synonyms[1]}</a>,
                    <a href="">${dict[0].meanings[0].synonyms[2]}</a>,
                    <a href="">${dict[0].meanings[0].synonyms[3]}</a>.
                </div>
            </div>

            <div class="syan antonyms">
                <h5>antonyms</h5>
                <div>
                    <a href="">${dict[0].meanings[0].antonyms[0]}</a>,
                    <a href="">${dict[0].meanings[0].antonyms[1]}</a>.
                </div>
            </div>
         </div>
    `;
    sound.setAttribute('src', `https:${dict[0].phonetics[0].audio}`)

    function playSound() {
        sound.play()
    }

    document.querySelector('.sound-btn').addEventListener('click', playSound)
    })
    .catch(() => {
        alert("The word can not be found")
        details.innerHTML = "<h1 style='color:Red;'>The word can not be found</h1>"})
;
