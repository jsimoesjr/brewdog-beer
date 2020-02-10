const apiUrl = 'https://api.punkapi.com/v2/beers';

const getURLWithId = function(id) {
    return `${apiUrl}/${id}`;
}

const util = {
    getURL: function(params = {})  {
        const {id} = params;
        
        if(id) {
            return getURLWithId(id);
        }

        return apiUrl;
    }
}

export { util }