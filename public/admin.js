//Fetch list of books.

let main = async () => {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(showBooks)

}

    let showBooks = (book) => {
        let rootDiv = document.querySelector('#root')
        
        let list = document.createElement('li')
        list.textContent = book.title
        list.style.margin = '5px'

        let numberInput = document.createElement('input')
        numberInput.value = book.quantity
        numberInput.style.margin = '5px'

        let save = document.createElement('button') 
        save.textContent = 'Save'
        save.style.margin = '5px'

        let deleteBook = document.createElement('button')
        deleteBook.textContent = 'Delete Book'
        deleteBook.style.marginLeft = '20px'

        save.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: numberInput.value
                })
            })
        })

        // deleteBook.addEventListener('click', () => {
        //     fetch('http://localhost:3001/updateBook', {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({

        //         })
        //     })
        // })


        list.append(numberInput, save, deleteBook)
        rootDiv.append(list)

    }
    
    let addNewBook = document.createElement('button')
    addNewBook.textContent = 'Add New Book'
    addNewBook.style.margin = '20px'
    addbtn.append(addNewBook)
    
    // addNewBook.addEventListener('click', () => {

    // })
    

main()

