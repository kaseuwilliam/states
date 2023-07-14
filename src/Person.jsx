import React, {useState} from 'react'

const Person = () => {

    let [person, setPerson] = useState ({
        name:"Peter",
        age: 28,
        favoriteFruits: ['oranges', 'cherries', 'raspberries'],
        streetAddress:{
            street:"123 Street",
            city:' Best City',
            state:"Texas",
            zipCode: 12345
        }
    })

    function increaseAge(){

        setPerson(previousPerson => {
            
            let newStreetAddress = {...previousPerson.streetAddress, 
                zipCode: 55555}

            return { ...previousPerson, age: previousPerson.age + 1, 
                streetAddress: newStreetAddress}
        
        })
    }

    function decreaseAge(){
        
        setPerson(previousPerson => {
     
            return { ...previousPerson, age: previousPerson.age - 1}
        
        })

    }

    function addFruit(){

        setPerson(previousPerson => {

            let updatedArray = [...previousPerson.favoriteFruits, 'Apple'];
     
            return { ...previousPerson, favoriteFruits: updatedArray
        }}
       
        )
    }

    function deleteFruit(){
        
        setPerson(previousPerson => {

            let updatedArray = [...previousPerson.favoriteFruits];
            updatedArray.pop()
     
            return { ...previousPerson, favoriteFruits: updatedArray
        }}
       
        )
    }



  return (
    
        <>
        
        <h2>Name: {person.name}</h2>
        <h3>Age: {person.age}</h3>
        <h3>Favorite Fruits: {person.favoriteFruits.join(', ')}</h3>
        <h3>Street Address : {person.streetAddress.street}</h3>
        <h3>City : {person.streetAddress.city}</h3>
        <h3>State : {person.streetAddress.state}</h3>
        <h3>ZipCode : {person.streetAddress.zipCode}</h3>

        <button onClick={increaseAge}>Increase Age</button>
        <span>  Age: {person.age}  </span>
        <button onClick={decreaseAge}>Decrease Age</button>

        <hr/>
        <button onClick={addFruit}>Add Fruit</button>
        <span>  Fruits: {person.favoriteFruits.join(', ')}  </span>
        <button onClick={deleteFruit}>Delete Fruit</button>
        
        </>

  )
}

export default Person