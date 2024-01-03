let maximunNumberOfPokemon = 649;
let dataPokemonNamesAndNumbers = [];
let dataPokemon = [];
let speciesDataPokemon = [];
let fontSizePokemonName = '';
let pokemonList2 = document.getElementById('pokemonList2');
let pokemonList = document.getElementById('pokemonList');
let infoPokemonView2 = document.getElementById('infoPokemonView2');
let pokemonInfo = document.getElementById('pokemonInfo');
let welcomeText = document.getElementById('welcomeText');
let pokemonNumber = '';
let pokemonImage = document.getElementById('pokemonImage');
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

const startup = async() => {
    await getMaximunNumberOfPokemons();
    renderList();
}
const getMaximunNumberOfPokemons = async () => {
    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000');
    dataPokemonNamesAndNumbers = await APIResponse.json();
    // maximunNumberOfPokemon = dataPokemonNamesAndNumbers.results.length;
    return maximunNumberOfPokemon;
}
const renderList = () => {
    for (let i = 0; i <= maximunNumberOfPokemon-1; i++) {
        let pokemonNameButton = document.createElement('button');
        pokemonNameButton.classList.toggle('pokemonNameButton');
        pokemonNameButton.onclick = getNumberOfPokemon;
        let span = document.createElement('span');
        span.classList.toggle('pokemonTextName');
        pokemonNameButton.id = `${i+1}`;
        span.id =`${i+1}`;
        span.textContent = `${i+1} ${dataPokemonNamesAndNumbers.results[i].name.toUpperCase()}`;
        let textLength = span.textContent.length;
        span.style.fontSize = (makePokemonNameSmall(textLength));
        let img = document.createElement('img');
        img.classList.toggle('pokeballImgIcon');
        img.src = 'images/pokeball.png';
        pokemonNameButton.appendChild(span);
        pokemonNameButton.appendChild(img);
        pokemonList2.appendChild(pokemonNameButton);
}
}
const makePokemonNameSmall = (textLength) => {
    if (textLength >= 19 && textLength <=20) {
        return  '1.8rem';
    } else if (textLength >= 21 && textLength <= 27) {
        return '1.6rem';
    }else if (textLength >= 28){
        return '1.5rem';
    }
}
const openPokedex = () => {
    mainPage.style.display = 'none';
    pokemonList.style.display = 'block';
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
    welcomeText.style.display = 'grid';
    pushSound.play();
}
const getNumberOfPokemon  = () => {
    pokemonNumber = event.srcElement.id;
    pokemonNumber = Number(pokemonNumber);
    openPokemonDetails();
}
const playEnglishVoice = () => {
    let numberFile = pokemonNumber;
    englishVoice.src = `audio/English/englishvoice (${numberFile}).wav`;
    englishVoice.play();
}
const openPokemonDetails = async () => {
    await getInfoPokemon();
    infoPokemonView2.style.display = 'grid';
    pokemonList.style.display = 'none';
    pokemonInfo.style.display = 'block';
    welcomeText.style.display = 'none';
    backPokemonButton.onclick = goPokemonBefore;
    nextPokemonButton.onclick = goPokemonAfter;
    changeInfoPokemon();
    playEnglishVoice();
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
    console.log(dataPokemon);
    console.log(speciesDataPokemon);
}
const changeInfoPokemon = () => {
    changePokemonNumber();
    changePokemonName();
    changePokemonTypeName();
    changePokemonType();
    changePokemonPhoto();
    changePokemonHeight();
    changePokemonweight();
    changePokemonDescription();
}
const changePokemonPhoto = () => {
    pokemonImage.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];;
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
    let pokemonTypeNameBefore = `${speciesDataPokemon.genera[7].genus.toUpperCase()}`;
    let pokemonTypeNameSplitted = pokemonTypeNameBefore.split(' POKÉMON');
    pokemonTypeName.textContent = pokemonTypeNameSplitted[0];
    if (pokemonTypeName.textContent.length > 15){
        pokemonTypeName.textContent = pokemonTypeName.textContent.substring(0,14);
    }
}
const removePreviousBanners = () =>{
    while (typesContainer.firstChild) {
        typesContainer.removeChild(typesContainer.firstChild);
    }
}
const createBannerType = (typeName) => {
    let span = document.createElement('span');
    span.classList.toggle(`pokemonType${typeName}`);
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
const changePokemonHeight = () => {
    let temporalHeight = dataPokemon.height;
    temporalHeight /= 10;
    temporalHeight *= 3.2;
    temporalHeight = Math.ceil(temporalHeight);
    height.textContent = `${temporalHeight}''`;
}
const changePokemonweight = () => {
    let temporalWeight = dataPokemon.weight;
    temporalWeight /= 10;
    temporalWeight *= 2.2;
    temporalWeight = Math.ceil(temporalWeight);
    weight.textContent = `${temporalWeight} lbs`;
}
const changePokemonDescription = () =>{
    let descriptionPokemonTextIndex = speciesDataPokemon.flavor_text_entries.find((entry) => entry.version.name === 'white-2');
    console.log(descriptionPokemonTextIndex);
    descriptionPokemonText.textContent = `${descriptionPokemonTextIndex.flavor_text}`;
}
startup();