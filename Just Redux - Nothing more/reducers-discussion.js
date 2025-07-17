const state = {
    users: [
        {
            id: 1,
            name: 'Sanket',
            todos: [ {id: 1, name: 'complete deployment'}, {id: 2, name: 'raise the bug'}
            ]
        },
        {
            id: 2,
            name: 'Sarthak',
            todos: [
                {id: 1, name: 'complete pppt'},
                {id: 2, name: 'take interview'}
            ]
        },

        {
            id: 3,
            name: 'JD',
            todos: [
                {id: 1, name: 'plan the script'}
            ]
        }
       
    ],
}

function reducer(state, action){
    if(action.type == 'EDI_TODO'){
        
    }
}