import { SearchRounded } from "@mui/icons-material";

const SearchInput = () =>{
    return(
        <div className="search-input">
            <div className="search-item">
                <SearchRounded/>
                <input type={'search'} placeholder={'Search Item, Collection and Account..'}/>
            </div>
        </div>
    )
}

export default SearchInput;