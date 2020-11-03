class MercadoLibreService {
    constructor (){
        this.url = "https://api.mercadolibre.com/sites/MLA/search?q="
    }
    search(query){
        fetch(this.url query)
        .then(data => data.json())
        .then(callback)

    }
}

const servicio = new MercadoLibreService;

servicio.search('celular', function (res));