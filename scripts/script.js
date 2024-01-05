let maximunNumberOfPokemon = 648;
let dataPokemonNamesAndNumbers = [];
let dataPokemonList = [];
let dataPokemon = [];
let speciesDataPokemon = [];
let fontSizePokemonName = '';
let pokemonList2 = document.getElementById('pokemonList2');
let pokemonList = document.getElementById('pokemonList');
let infoPokemonView1 = document.querySelector('.infoPokemonView1');
let infoPokemonView2 = document.getElementById('infoPokemonView2');
let pokemonInfo = document.getElementById('pokemonInfo');
let infoPokemon = document.getElementById('infoPokemon');
let welcomeText = document.getElementById('welcomeText');
let pokemonNumber = 1;
let pokemonImage = document.getElementById('pokemonImage');
let pawPokemonImg = document.getElementById('pawPokemonImg');
let weight = document.getElementById('weight');
let pokemonnumberContainer = document.getElementById('pokemonNumber');
let pokemonTitleName = document.getElementById('pokemonTitleName');
let pokemonTypeName = document.getElementById('pokemonTypeName');
let height = document.getElementById('height');
let descriptionPokemonText = document.getElementById('descriptionPokemonText');
const backPokemonButton = document.getElementById('backPokemon');
const nextPokemonButton = document.getElementById('nextPokemon');
let typesContainer = document.getElementById('typesContainer');
let pushSound = document.getElementById('pushSound');
let englishVoice = document.getElementById('englishVoice');
let sizePokemonButton = document.getElementById('sizePokemon');
let sizePokemonView2 = document.getElementById('sizePokemonView2');
let heightSize = document.getElementById('heightSize');
let weightSize = document.getElementById('weightSize');
let pokemonHeightImg = document.getElementById('pokemonHeightImg');
let pokemonSizeName = document.querySelectorAll('.pokemonSizeName');
let humanHeightImg = document.getElementById('humanHeightImg');
let sizePokemonView1 = document.querySelector('.sizePokemonView1');
let heightButton = document.getElementById('heightButton');
let weightButton = document.getElementById('weightButton');
let heightView = document.getElementById('heightView');
let weightView = document.getElementById('weightView');
let pokemonWeightImg = document.getElementById('pokemonWeightImg');
let humanWeightImg = document.getElementById('humanWeightImg')
let balanceImg = document.getElementById('balanceImg');
let cryPokemonButton = document.getElementById('cryPokemon');
let cryPokemonView1 = document.getElementById('cryPokemonView1');
let cryPokemonView2 = document.getElementById('cryPokemonView2');
let playCryButton = document.getElementById('playCryButton');
let pokemonCry = document.getElementById('pokemonCry');
let pokeballPlayer = document.getElementById('pokeballPlayer');
let pokemonCryImg = document.getElementById('pokemonCryImg');
let searchButton = document.getElementById('searchButton');
let searchButton2 = document.getElementById('searchButton2');
const inputElement = document.querySelector('#searchInput');
const sortByNumberBtn = document.querySelector('#sortByNumberButton');
const sortByNameBtn = document.querySelector('#sortByNameButton');

const startup = async() => {
    await getMaximunNumberOfPokemons();
    searchButton.addEventListener('click', openSearchView);
    searchButton2.addEventListener('click', openSearchView);
    renderList();
}
const getMaximunNumberOfPokemons = async () => {
    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=649');
    dataPokemonNamesAndNumbers = await APIResponse.json();
    return maximunNumberOfPokemon;
}
const openSearchView = () => {
    mainPage.style.display = 'none';
    pokemonList.style.display = 'block';
    document.getElementById('miniHeaderList').style.display = 'none';
    document.getElementById('miniHeaderSearch').style.display = 'flex';
    document.getElementById('buttonsSearch').style.display = 'flex';
    sortByNumberBtn.addEventListener('click', sortListByNumber);
    pokemonList2.classList.remove('pokemonList');
    pokemonList2.classList.add('pokemonListInSearch');
    pushSound.play();
}

const renderList = () => {
    let dataList = dataPokemonNamesAndNumbers.results;
    let i = 0;
    dataPokemonList = dataList.map((pokemon) => {
        let pokemonNameButton = document.createElement('button');
        pokemonNameButton.classList.add('pokemonNameButton');
        pokemonNameButton.onclick = getNumberOfPokemon;
        pokemonNameButton.name = `${i+1}`;
        let span = document.createElement('span');
        span.classList.add('pokemonTextName');
        span.name =`${i+1}`;
        span.textContent = `${i+1} ${pokemon.name.toUpperCase()}`;
        span.textContent = span.textContent.substring(0,14);
        let img = document.createElement('img');
        img.classList.add('pokeballImgIcon');
        img.src = 'images/pokeball.png';
        img.name =`${i+1}`;
        pokemonNameButton.appendChild(span);
        pokemonNameButton.appendChild(img);
        pokemonList2.appendChild(pokemonNameButton);
        i += 1;
        return{ num: `${i}`, name: pokemon.name, element: pokemonNameButton }
    });
}
const openPokedex = () => {
    mainPage.style.display = 'none';
    pokemonList.style.display = 'block';
    document.getElementById('miniHeaderList').style.display = 'flex';
    document.getElementById('miniHeaderSearch').style.display = 'none';
    document.getElementById('buttonsSearch').style.display = 'none';
    pokemonList2.classList.add('pokemonList2');
    pokemonList2.classList.remove('pokemonListInSearch');
    pushSound.play();
}
const goBack1 = () => {
    mainPage.style.display = 'flex';
    pokemonList.style.display = 'none';
    pushSound.play();
}
const goBack2 = () => {
    pokemonInfo.style.display = 'none';
    pokemonList.style.display = 'block';
    infoPokemonView2.style.display = 'none';
    document.getElementById('buttonsSearch').style.display = 'none';
    document.getElementById('miniHeaderSearch').style.display = 'none';
    document.getElementById('miniHeaderList').style.display = 'flex';
    pokemonList2.classList.remove('pokemonListInSearch');
    welcomeText.style.display = 'grid';
    sizePokemonView2.style.display = 'none';
    cryPokemonView2.style.display = 'none';
    pushSound.play();
}
const getNumberOfPokemon  = () => {
    pokemonNumber = event.srcElement.name;
    pokemonNumber = Number(pokemonNumber);
    openPokemonDetails();
}
const playEnglishVoice = () => {
    let numberFile = pokemonNumber;
    englishVoice.src = `audio/English/englishvoice (${numberFile}).wav`;
    englishVoice.play();
}
const setInputValue = () => {
    inputElement.value = '';
    renderList2(inputElement.value);
}
const openPokemonDetails = async () => {
    setInputValue();
    await getInfoPokemon();
    infoPokemonView1.style.display = 'flex';
    infoPokemonView2.style.display = 'grid';
    pokemonList.style.display = 'none';
    pokemonInfo.style.display = 'block';
    welcomeText.style.display = 'none';
    sizePokemonView1.style.display = 'none';
    sizePokemonView2.style.display = 'none';
    cryPokemonView1.style.display = 'none';
    cryPokemonView2.style.display = 'none';
    backPokemonButton.onclick = goPokemonBefore;
    nextPokemonButton.onclick = goPokemonAfter;
    changeInfoPokemon();
    playEnglishVoice();
    sizePokemonButton.onclick = openPokemonSize;
    infoPokemon.onclick = openPokemonDetails;
    cryPokemonButton.onclick = openPokemonCry;
}
const goPokemonBefore = () => {
    pokemonNumber -= 1;
    openPokemonDetails();
    pushSound.play();
}
const goPokemonAfter = () => {
    pokemonNumber += 1;
    openPokemonDetails();
    pushSound.play();
}
const getInfoPokemon = async () => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    dataPokemon = await APIResponse.json();
    const APIResponse2 = await fetch(dataPokemon.species.url);
    speciesDataPokemon = await APIResponse2.json();
}
const changeInfoPokemon = () => {
    changePokemonNumber();
    changePokemonName();
    changePokemonTypeName();
    changePokemonType();
    changePokemonPhoto();
    changePokemonPaw();
    changePokemonHeight(getPokemonHeight());
    changePokemonWeight(getPokemonWeight());
    changePokemonDescription();
}
const changePokemonPhoto = () => {
    pokemonImage.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
const changePokemonPaw = () => {
    let numberFile = pokemonNumber;
    pawPokemonImg.src = `images/footprints/${numberFile}.png`;
}
const changePokemonNumber = () => {
    pokemonnumberContainer.textContent = pokemonNumber;
    if (pokemonnumberContainer.textContent.length === 1){
        pokemonTitleName.style.marginLeft = '-8%';
    } else if (pokemonnumberContainer.textContent.length === 2){
        pokemonTitleName.style.marginLeft = '0';
    } else if (pokemonnumberContainer.textContent.length === 3){
        pokemonTitleName.style.marginLeft = '8%';
    }
    }
const changePokemonName = () => {
    pokemonTitleName.textContent = `${dataPokemon.name.toUpperCase()}`;
    if (pokemonTitleName.textContent.length > 9){
        pokemonTitleName.textContent = pokemonTitleName.textContent.substring(0,9);
    }
}
const changePokemonTypeName = () => {
    let pokemonTypeNameBefore = `${speciesDataPokemon.genera[7].genus}`;
    pokemonTypeName.textContent = pokemonTypeNameBefore;
    if (pokemonTypeName.textContent.length > 15){
        let pokemonTypeNameSplitted = pokemonTypeNameBefore.split(' Pokémon');
        pokemonTypeName.textContent = pokemonTypeNameSplitted[0];
        pokemonTypeName.textContent = pokemonTypeName.textContent.substring(0,15);
    }
}
const removePreviousBanners = () =>{
    while (typesContainer.firstChild) {
        typesContainer.removeChild(typesContainer.firstChild);
    }
}
const createBannerType = (typeName) => {
    let span = document.createElement('span');
    span.classList.add(`pokemonType${typeName}`);
    span.textContent = `${typeName.toUpperCase()}`;
    typesContainer.appendChild(span);
}
const changePokemonType = () => {
    removePreviousBanners();
    let amountOfTypes = dataPokemon.types;
    amountOfTypes.forEach((element) => {
        createBannerType(element.type.name);   
    });
}
const getPokemonHeight = () => {
    let temporalHeight = dataPokemon.height;
    temporalHeight /= 10;
    temporalHeight *= 3.2;
    temporalHeight = temporalHeight.toFixed(2);
    return temporalHeight;
}
const changePokemonHeight = (temporalHeight) => {
    let temporalHeightSplitted = temporalHeight.split('.');
    height.textContent = `${temporalHeightSplitted[0]}'${temporalHeightSplitted[1]}''`;
}
const getPokemonWeight = () => {
    let temporalWeight = dataPokemon.weight;
    temporalWeight /= 10;
    temporalWeight *= 2.2;
    temporalWeight = temporalWeight.toFixed(2);
    return temporalWeight;
}
const changePokemonWeight = (temporalWeight) => {
    if (temporalWeight.length >= 6) {
        temporalWeight = Math.ceil(temporalWeight);
    }
    weight.textContent = `${temporalWeight} lbs`;
}
const changePokemonDescription = () =>{
    let descriptionPokemonTextIndex = speciesDataPokemon.flavor_text_entries.find((entry) => entry.version.name === 'white-2');
    descriptionPokemonText.textContent = `${descriptionPokemonTextIndex.flavor_text}`;
}
const changePokemonHeightInfo = (temporalHeight) => {
    let temporalHeightSplitted = temporalHeight.split('.');
    heightSize.textContent = `${temporalHeightSplitted[0]}'${temporalHeightSplitted[1]}''`
}
const changePokemonHeightImg = () =>{
    pokemonHeightImg.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
const rezisingPokemonHeightImg = (pokemonHeight, humanHeight) =>{
    let porcentagePokemonHeight = pokemonHeight * 80;
    porcentagePokemonHeight /= humanHeight;
    if (porcentagePokemonHeight > 80){
        pokemonHeightImg.style.height = '80%';
        let porcentageHumanHeight = humanHeight * 80;
        porcentageHumanHeight /= pokemonHeight;
        humanHeightImg.style.height = `${porcentageHumanHeight}%`;
    } else {
        pokemonHeightImg.style.height = `${porcentagePokemonHeight}%`;
    }
}
const changePokemonSizeName = () => {
    pokemonSizeName.forEach((element) => {
        element.textContent = `${dataPokemon.name.toUpperCase()}`;
        if (element.textContent.length > 9){
            element.textContent = element.textContent.substring(0,9);
        }
    });
}
const changePokemonWeightImg = () => {
    pokemonWeightImg.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
const changePokemonWeightInfo = (temporalWeight) => {
    if (temporalWeight.length >= 6) {
        temporalWeight = Math.ceil(temporalWeight);
    }
    weightSize.textContent = `${temporalWeight} lbs`;
}
const showBalanceImg = (temporalWeight, humanTemporalWeight) => {
    let parameter = temporalWeight * 60;
    parameter /= humanTemporalWeight;
    console.log(parameter);
    if(parameter <= 10){
        let imgFile = 1;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '30%';
        humanWeightImg.style.marginBottom = '15%';
    }else if(parameter >= 11 && parameter <= 21){
        let imgFile = 2;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '29%';
        humanWeightImg.style.marginBottom = '16%';
    }else if(parameter >= 21 && parameter <= 31){
        let imgFile = 3;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '27%';
        humanWeightImg.style.marginBottom = '18%';
    }else if(parameter >= 31 && parameter <= 41) {
        let imgFile = 4;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '26%';
        humanWeightImg.style.marginBottom = '19%';
    }else if(parameter >= 41 && parameter <= 51) {
        let imgFile = 5;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '25%';
        humanWeightImg.style.marginBottom = '20%';
    }else if(parameter >= 51 && parameter <= 61) {
        let imgFile = 6;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '22%';
        humanWeightImg.style.marginBottom = '22%';
    }else if(parameter >= 61 && parameter <= 71) {
        let imgFile = 7;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '20%';
        humanWeightImg.style.marginBottom = '25%';
    }else if(parameter >= 71 && parameter <= 81) {
        let imgFile = 8;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '19%';
        humanWeightImg.style.marginBottom = '26%';
    }else if(parameter >= 81 && parameter <= 91) {
        let imgFile = 9;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '18%';
        humanWeightImg.style.marginBottom = '27%';
    }else if(parameter >= 91 && parameter <= 101) {
        let imgFile = 10;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '16%';
        humanWeightImg.style.marginBottom = '29%';
    }else if(parameter > 101) {
        let imgFile = 11;
        balanceImg.src = `images/balance_sprites/${imgFile}-modified.png`;
        pokemonWeightImg.style.marginBottom = '15%';
        humanWeightImg.style.marginBottom = '30%';
    }
}
const openPokemonSize = () => {
    weightView.style.display = 'none';
    sizePokemonView1.style.display = 'flex';
    sizePokemonView2.style.display = 'block';
    infoPokemonView1.style.display = 'none';
    infoPokemonView2.style.display = 'none';
    cryPokemonView1.style.display = 'none';
    cryPokemonView2.style.display = 'none';
    heightView.style.display = 'grid';
    pushSound.play();
    changePokemonSizeName();
    changePokemonHeightInfo(getPokemonHeight());
    changePokemonHeightImg();
    rezisingPokemonHeightImg(getPokemonHeight(), 5.8);
    changePokemonWeightImg(); 
    changePokemonWeightInfo(getPokemonWeight());
    showBalanceImg(getPokemonWeight(), 165);
    heightButton.onclick = showPokemonHeight;
    weightButton.onclick = showPokemonWeight; 
}
const showPokemonHeight = () => {
    heightView.style.display = 'grid';
    weightView.style.display = 'none';
    pushSound.play();
}
const showPokemonWeight = () => {
    heightView.style.display = 'none';
    weightView.style.display = 'grid';
    pushSound.play();
}
const openPokemonCry = () => {
    sizePokemonView1.style.display = 'none';
    sizePokemonView2.style.display = 'none';
    infoPokemonView1.style.display = 'none';
    infoPokemonView2.style.display = 'none';
    cryPokemonView1.style.display = 'grid';
    cryPokemonView2.style.display = 'grid';
    playCryButton.onclick = playPokemonCry;
    changePokemonCryImg();
    wavesurfer.load(`audio/Cries/v (${pokemonNumber}).wav`);
    pushSound.play();
}
const changePokemonCryImg = () => {
    pokemonCryImg.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
const playPokemonCry = () => {
    pokeballPlayer.classList.toggle('cryPokemonView1rotate');
    wavesurfer.play();
}
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#F8F8FF',
    progressColor: 'paleturquoise',
    cursorColor: '#57BAB6',
    cursorWidth: 4,
    barWidth: 4,
    height: 'auto',
    minPxPerSec: 100,
    barRadius: 4,
    responsive: true,
  });
inputElement.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    dataPokemonList.forEach((pokemon) => {
        const isVisible =
        pokemon.name.toLowerCase().includes(value) ||
        pokemon.num.toLowerCase().includes(value)
        pokemon.element.classList.toggle("hide", !isVisible)
    });
});
const renderList2 = (e) =>{
    const value = e;
    dataPokemonList.forEach((pokemon) => {
        const isVisible =
        pokemon.name.toLowerCase().includes(value) ||
        pokemon.num.toLowerCase().includes(value)
        pokemon.element.classList.toggle("hide", !isVisible)
    });
}
const compareNumbers = (a, b) => {
    return a - b;
}
const sortListByNumber = () => {
    console.log(dataPokemonList);
    dataPokemonList.sort(compareNumbers);
    console.log(dataPokemonList);
}
startup();