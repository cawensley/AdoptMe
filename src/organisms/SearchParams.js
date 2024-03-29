import React, {useState , useEffect} from "react";
import pet, {ANIMALS} from "@frontendmasters/pet";
import {connect} from "react-redux";
import useDropdown from "../molecules/useDropdown";
import Results from "../molecules/Results";
import changeTheme from "../Redux/actionCreators/changeTheme";
import changeLocation from "../Redux/actionCreators/changeLocation";

const SearchParams = (props) => {
    const [breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown ("Animal","dog",ANIMALS);
    const [breed,BreedDropdown,setBreed] = useDropdown("Breed","",breeds);
    const [pets,setPets] = useState([]);

    async function requestPets() {
        const {animals} = await pet.animals ({
            location: props.location,
            breed,
            type: animal
        });
        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({breeds : apiBreeds}) => {
            const breedStrings = apiBreeds.map(({name}) => name);
            setBreeds(breedStrings);
        }, console.error);
    },[animal,setBreed,setBreeds]);

    return (
        <div className="search-params">
            <form onSubmit={(event) => {
                event.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={props.location} placeholder="location"
                           onChange={event => props.updateLocation(event.target.value)} />
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <label htmlFor="theme">
                    Theme
                    <select value={props.theme}
                            onChange={event=>props.setTheme(event.target.value)}
                            onBlur={event=>props.setTheme(event.target.value)}
                            >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="mediumorchid">Medium Orchid</option>
                        <option value="chartreuse">Chartreuse</option>
                    </select>
                </label>
                <button style={{backgroundColor:props.theme}}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
};

const mapStatetoProps = ({theme,location})=> ({theme,location});
const mapDispatchToProps = dispatch => ({
    setTheme: theme=>dispatch(changeTheme(theme)),
    updateLocation: location=>dispatch(changeLocation(location))
});

export default connect(mapStatetoProps,mapDispatchToProps) (SearchParams);
