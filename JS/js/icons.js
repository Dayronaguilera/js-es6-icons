
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*
FACCIAMO INSEME IL TUTTO IN LC, oggi pomeriggio da soli :occhiolino:
Milestone 1
Partendo dalla seguente struttura dati ,
mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e 
usiamola per filtrare le icone (modificato) 
*/



function filterIcons(choice, originalList){

    return originalList.filter((icon) => {
        
        if(choice === 'all'){    
            return true;
        }
        if(choice === icon.type){
            return true;
        }
        
        return false;
    })

    
}

function listIconsHtml(filter) {

    const iconsFiltered = filterIcons(filter, icons);

	const stampaHtml = document.querySelector (".icons");

	stampaHtml.innerHTML = "";

    iconsFiltered.forEach((icon) => {

        const { name, prefix, family, type} = icon; //cosi prendiamo la key di cui ho bisogno per la distrutturazione!

        stampaHtml.innerHTML += `
                <div class="icon-card col"> 
                    <div class="icon-card-inner">
                        <div class="icon ${type}">
                            <i class="${family} ${prefix}${name}"></i>
                        </div> 
                        <div class="name">
                            ${name}
                        </div>    
                    </div>
                </div>`
                // con questa stringa andiamo a ricreare fontAwesome <i class="fas fa-cat"></i>
                // diamo una classe per fare le modifiche direttamente nello style !
    });
    
}

listIconsHtml('all');

const selectElement = document.querySelector(".type-select");


selectElement.addEventListener('change', (event) => {
  
	console.log(event);
    listIconsHtml(event.target.value);
  });